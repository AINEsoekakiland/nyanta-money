import Link from "next/link";
import Image from "next/image";
import { Episode } from "@/data/episodes";

type Props = {
  episode: Episode;
  featured?: boolean;
};

export default function EpisodeCard({ episode, featured = false }: Props) {
  const thumbnailUrl = `https://img.youtube.com/vi/${episode.youtubeId}/mqdefault.jpg`;

  return (
    <Link href={`/episodes/${episode.slug}`} className="block group">
      <article
        className={`bg-white rounded-3xl border-2 border-dark overflow-hidden card-hover shadow-pop ${
          featured ? "flex flex-col sm:flex-row" : ""
        }`}
      >
        {/* Thumbnail */}
        <div
          className={`relative overflow-hidden ${
            featured ? "sm:w-56 sm:flex-shrink-0" : "aspect-video"
          }`}
        >
          <Image
            src={thumbnailUrl}
            alt={episode.title}
            fill
            className="object-cover group-hover:scale-105 transition-transform duration-300"
            sizes={featured ? "224px" : "(max-width: 768px) 100vw, 33vw"}
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
          <div className="absolute top-2 right-2 bg-primary text-white text-xs font-bold px-2 py-0.5 rounded-full border border-white/50">
            ▶ 動画あり
          </div>
        </div>

        {/* Content */}
        <div className="p-4 flex flex-col gap-2">
          <div className="flex flex-wrap gap-1">
            {episode.tags.slice(0, 2).map((tag) => (
              <span
                key={tag}
                className="bg-secondary/30 text-dark text-xs font-bold px-2 py-0.5 rounded-full"
              >
                #{tag}
              </span>
            ))}
          </div>
          <h3
            className={`font-black text-dark leading-snug group-hover:text-primary transition-colors ${
              featured ? "text-lg" : "text-base"
            }`}
          >
            {episode.title}
          </h3>
          <p className="text-gray-600 text-sm leading-relaxed line-clamp-2">
            {episode.description}
          </p>
          <div className="mt-auto pt-2 flex items-center justify-between">
            <span className="text-xs text-gray-400">{episode.publishedAt}</span>
            <span className="text-primary font-bold text-sm flex items-center gap-1 group-hover:gap-2 transition-all">
              見る <span>→</span>
            </span>
          </div>
        </div>
      </article>
    </Link>
  );
}
