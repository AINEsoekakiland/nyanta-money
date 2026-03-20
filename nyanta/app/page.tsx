import type { Metadata } from "next";
import Link from "next/link";
import { episodes, getPopularEpisodes } from "@/data/episodes";
import EpisodeCard from "@/components/EpisodeCard";
import YouTubeEmbed from "@/components/YouTubeEmbed";
import CharacterSection from "@/components/CharacterCard";
import AdSpace from "@/components/AdSpace";

export const metadata: Metadata = {
  title: "にゃんたと学ぶお金のヒミツ",
  description:
    "子供が楽しくお金の知識を学べる教育アニメ「にゃんたと学ぶお金のヒミツ」。お金の基本から貯金・仕事まで、にゃんたとまさおが楽しく教えます！",
  openGraph: {
    title: "にゃんたと学ぶお金のヒミツ",
    description: "子供が楽しくお金の知識を学べる教育アニメの公式サイトです。",
  },
};

const latestEpisode = episodes[episodes.length - 1];
const popularEpisodes = getPopularEpisodes(3);

export default function HomePage() {
  return (
    <>
      {/* ===== HERO ===== */}
      <section className="relative overflow-hidden bg-gradient-to-br from-primary via-orange-400 to-secondary py-16 px-4">
        {/* Decorative circles */}
        <div className="absolute top-4 left-4 w-20 h-20 bg-white/10 rounded-full" />
        <div className="absolute bottom-4 right-8 w-32 h-32 bg-white/10 rounded-full" />
        <div className="absolute top-1/2 right-4 w-12 h-12 bg-secondary/30 rounded-full" />

        <div className="max-w-5xl mx-auto flex flex-col md:flex-row items-center gap-8">
          <div className="flex-1 text-white text-center md:text-left">
            <div className="inline-flex items-center gap-2 bg-white/20 backdrop-blur-sm px-4 py-1.5 rounded-full text-sm font-bold mb-4">
              🎬 子ども向け教育アニメ
            </div>
            <h1 className="text-4xl sm:text-5xl font-black leading-tight mb-4 drop-shadow-sm">
              <span className="text-secondary">にゃんた</span>と学ぶ
              <br />
              お金の
              <span className="relative inline-block">
                ヒミツ
                <span className="absolute -bottom-1 left-0 w-full h-2 bg-accent/60 rounded-full -z-10" />
              </span>
              ✨
            </h1>
            <p className="text-white/90 text-lg leading-relaxed mb-6 max-w-md">
              ネコのにゃんたとまさおが、お金のふしぎを楽しく解き明かす！
              <br />
              小学生でもわかるお金の知識をアニメで学ぼう🐱
            </p>
            <div className="flex flex-col sm:flex-row gap-3 justify-center md:justify-start">
              <Link
                href="#latest"
                className="bg-white text-primary font-black text-lg px-8 py-3 rounded-full border-2 border-dark shadow-pop hover:shadow-none hover:translate-y-0.5 transition-all text-center"
              >
                ▶ 最新話を見る
              </Link>
              <Link
                href="#episodes"
                className="bg-dark text-white font-bold text-lg px-8 py-3 rounded-full border-2 border-dark shadow-pop hover:shadow-none hover:translate-y-0.5 transition-all text-center"
              >
                全エピソード
              </Link>
            </div>
          </div>
          {/* Character display */}
          <div className="flex items-end gap-4 text-8xl">
            <div className="animate-float" style={{ animationDelay: "0s" }}>
              🐱
            </div>
            <div className="animate-float text-6xl" style={{ animationDelay: "0.5s" }}>
              👦
            </div>
            <div
              className="animate-float text-7xl"
              style={{ animationDelay: "1s" }}
            >
              👨‍🔬
            </div>
          </div>
        </div>
      </section>

      {/* ===== AD TOP ===== */}
      <div className="max-w-5xl mx-auto px-4">
        <AdSpace slot="top" />
      </div>

      {/* ===== LATEST EPISODE ===== */}
      <section id="latest" className="py-12 px-4">
        <div className="max-w-5xl mx-auto">
          <div className="flex items-center gap-3 mb-6">
            <span className="text-2xl">🆕</span>
            <h2 className="text-2xl font-black text-dark">最新エピソード</h2>
            <div className="flex-1 h-1 bg-primary/30 rounded-full" />
          </div>
          <div className="bg-white rounded-4xl border-2 border-dark shadow-pop-lg overflow-hidden">
            <div className="p-6 pb-0">
              <div className="inline-flex items-center gap-1 bg-primary text-white text-xs font-black px-3 py-1 rounded-full mb-3">
                🎬 最新話
              </div>
              <h3 className="text-xl font-black text-dark mb-2">
                {latestEpisode.title}
              </h3>
              <p className="text-gray-600 mb-4">{latestEpisode.description}</p>
            </div>
            <div className="p-6">
              <YouTubeEmbed
                videoId={latestEpisode.youtubeId}
                title={latestEpisode.title}
              />
            </div>
            <div className="px-6 pb-6">
              <Link
                href={`/episodes/${latestEpisode.slug}`}
                className="inline-flex items-center gap-2 bg-primary text-white font-bold px-6 py-2.5 rounded-full border-2 border-dark shadow-pop hover:shadow-none hover:translate-y-0.5 transition-all"
              >
                あらすじ・学びポイントを見る →
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* ===== POPULAR EPISODES ===== */}
      <section className="py-8 px-4 bg-secondary/20">
        <div className="max-w-5xl mx-auto">
          <div className="flex items-center gap-3 mb-6">
            <span className="text-2xl">⭐</span>
            <h2 className="text-2xl font-black text-dark">人気エピソード</h2>
            <div className="flex-1 h-1 bg-secondary rounded-full" />
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            {popularEpisodes.map((ep) => (
              <EpisodeCard key={ep.slug} episode={ep} />
            ))}
          </div>
        </div>
      </section>

      {/* ===== ALL EPISODES ===== */}
      <section id="episodes" className="py-12 px-4">
        <div className="max-w-5xl mx-auto">
          <div className="flex items-center gap-3 mb-6">
            <span className="text-2xl">📚</span>
            <h2 className="text-2xl font-black text-dark">全エピソード</h2>
            <div className="flex-1 h-1 bg-accent/40 rounded-full" />
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {episodes.map((ep) => (
              <EpisodeCard key={ep.slug} episode={ep} />
            ))}
          </div>
        </div>
      </section>

      {/* ===== CHARACTERS ===== */}
      <div className="bg-gradient-to-b from-cream to-white">
        <CharacterSection />
      </div>

      {/* ===== ABOUT ===== */}
      <section className="py-12 px-4 bg-accent/10">
        <div className="max-w-3xl mx-auto text-center">
          <div className="text-4xl mb-4">🎓</div>
          <h2 className="text-2xl font-black text-dark mb-4">
            このアニメについて
          </h2>
          <div className="bg-white rounded-4xl border-2 border-dark shadow-pop p-8 text-left space-y-4">
            <p className="text-gray-700 leading-relaxed">
              「にゃんたと学ぶお金のヒミツ」は、お金の知識を子どもたちが楽しく学べる教育アニメです。
            </p>
            <p className="text-gray-700 leading-relaxed">
              ネコのにゃんた・小学生のまさお・マネー博士の3人が、コント形式でお金のひみつを解き明かしていきます。
            </p>
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 pt-2">
              {[
                { icon: "💰", text: "お金の基本" },
                { icon: "🐖", text: "貯金のしかた" },
                { icon: "💼", text: "お仕事・給料" },
                { icon: "🛒", text: "賢いお買い物" },
              ].map((item) => (
                <div
                  key={item.text}
                  className="bg-primary/10 rounded-2xl p-3 text-center border border-primary/20"
                >
                  <div className="text-2xl mb-1">{item.icon}</div>
                  <div className="text-xs font-bold text-dark">{item.text}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ===== AD BOTTOM ===== */}
      <div className="max-w-5xl mx-auto px-4">
        <AdSpace slot="bottom" />
      </div>
    </>
  );
}
