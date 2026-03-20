import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Image from "next/image";
import { episodes, getEpisodeBySlug, getRelatedEpisodes } from "@/data/episodes";
import YouTubeEmbed from "@/components/YouTubeEmbed";
import RelatedEpisodes from "@/components/RelatedEpisodes";
import AdSpace from "@/components/AdSpace";

type Props = {
  params: { slug: string };
};

export async function generateStaticParams() {
  return episodes.map((ep) => ({ slug: ep.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const episode = getEpisodeBySlug(params.slug);
  if (!episode) return {};

  return {
    title: episode.title,
    description: episode.description,
    openGraph: {
      title: episode.title,
      description: episode.description,
      images: [`https://img.youtube.com/vi/${episode.youtubeId}/maxresdefault.jpg`],
    },
    twitter: {
      card: "summary_large_image",
      title: episode.title,
      description: episode.description,
    },
  };
}

export default function EpisodePage({ params }: Props) {
  const episode = getEpisodeBySlug(params.slug);
  if (!episode) notFound();

  const related = getRelatedEpisodes(params.slug, 3);
  const paragraphs = episode.content.trim().split(/\n\n+/);

  return (
    <div className="max-w-5xl mx-auto px-4 py-8">
      {/* Breadcrumb */}
      <nav className="text-sm text-gray-500 mb-6 flex items-center gap-2">
        <a href="/" className="hover:text-primary transition-colors">トップ</a>
        <span>›</span>
        <span className="font-bold text-dark line-clamp-1">{episode.title}</span>
      </nav>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* ===== MAIN CONTENT ===== */}
        <article className="lg:col-span-2 space-y-8">
          {/* Title & Tags */}
          <div>
            <div className="flex flex-wrap gap-2 mb-3">
              {episode.tags.map((tag) => (
                <span
                  key={tag}
                  className="bg-secondary/30 text-dark text-xs font-bold px-3 py-1 rounded-full border border-secondary"
                >
                  #{tag}
                </span>
              ))}
            </div>
            <h1 className="text-3xl font-black text-dark leading-snug mb-2">
              {episode.title}
            </h1>
            <p className="text-gray-500 text-sm">{episode.publishedAt} 公開</p>
          </div>

          {/* YouTube */}
          <YouTubeEmbed videoId={episode.youtubeId} title={episode.title} />

          {/* Description */}
          <div className="bg-primary/10 rounded-3xl border-2 border-primary/30 p-5">
            <div className="flex items-center gap-2 mb-2">
              <span className="text-xl">📝</span>
              <h2 className="font-black text-dark text-lg">あらすじ</h2>
            </div>
            <p className="text-gray-700 leading-relaxed">{episode.description}</p>
          </div>

          {/* Ad middle */}
          <AdSpace slot="middle" />

          {/* Story content */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <span className="text-xl">📖</span>
              <h2 className="font-black text-dark text-xl">ストーリー</h2>
              <div className="flex-1 h-0.5 bg-gray-200 rounded-full" />
            </div>
            <div className="bg-white rounded-3xl border-2 border-gray-200 shadow-pop p-6 space-y-4 prose-custom">
              {paragraphs.map((para, i) => {
                const isDialog = para.startsWith("「") || para.includes("「");
                return (
                  <p
                    key={i}
                    className={`leading-relaxed text-base ${
                      isDialog
                        ? "text-dark font-bold"
                        : "text-gray-700"
                    }`}
                  >
                    {para}
                  </p>
                );
              })}
            </div>
          </div>

          {/* Lesson points */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <span className="text-xl">💡</span>
              <h2 className="font-black text-dark text-xl">今日の学びポイント</h2>
              <div className="flex-1 h-0.5 bg-secondary rounded-full" />
            </div>
            <ul className="space-y-3">
              {episode.lesson.map((point, i) => (
                <li
                  key={i}
                  className="flex items-start gap-3 bg-secondary/20 rounded-2xl border-2 border-secondary/40 px-4 py-3"
                >
                  <span className="flex-shrink-0 w-7 h-7 bg-secondary text-dark rounded-full flex items-center justify-center font-black text-sm border-2 border-dark">
                    {i + 1}
                  </span>
                  <span className="font-bold text-dark leading-relaxed pt-0.5">
                    {point}
                  </span>
                </li>
              ))}
            </ul>
          </div>

          {/* Image gallery */}
          {episode.images.length > 0 && (
            <div>
              <div className="flex items-center gap-2 mb-4">
                <span className="text-xl">🖼️</span>
                <h2 className="font-black text-dark text-xl">場面集</h2>
                <div className="flex-1 h-0.5 bg-accent/40 rounded-full" />
              </div>
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
                {episode.images.map((img, i) => (
                  <div
                    key={i}
                    className="aspect-video relative rounded-2xl overflow-hidden border-2 border-dark shadow-pop bg-gray-100"
                  >
                    <Image
                      src={img}
                      alt={`${episode.title} 場面${i + 1}`}
                      fill
                      className="object-cover"
                      sizes="(max-width: 768px) 50vw, 33vw"
                    />
                  </div>
                ))}
              </div>
            </div>
          )}
        </article>

        {/* ===== SIDEBAR ===== */}
        <aside className="space-y-6">
          {/* Character summary */}
          <div className="bg-white rounded-3xl border-2 border-dark shadow-pop p-5 sticky top-24">
            <h3 className="font-black text-dark mb-4 flex items-center gap-2">
              <span>🐱</span> 登場キャラ
            </h3>
            <div className="space-y-3">
              {[
                { emoji: "🐱", name: "にゃんた", desc: "お金に詳しいネコ" },
                { emoji: "👦", name: "まさお", desc: "好奇心旺盛な小3" },
                { emoji: "👨‍🔬", name: "マネー博士", desc: "お金の専門家" },
              ].map((c) => (
                <div key={c.name} className="flex items-center gap-3">
                  <span className="text-2xl">{c.emoji}</span>
                  <div>
                    <div className="font-black text-sm text-dark">{c.name}</div>
                    <div className="text-xs text-gray-500">{c.desc}</div>
                  </div>
                </div>
              ))}
            </div>

            <hr className="my-4 border-gray-200" />

            {/* Sidebar Ad */}
            <AdSpace slot="sidebar" className="min-h-[200px]" />
          </div>
        </aside>
      </div>

      {/* Related episodes */}
      <RelatedEpisodes episodes={related} title="他のエピソードも見よう！" />

      {/* Bottom ad */}
      <AdSpace slot="bottom" />
    </div>
  );
}
