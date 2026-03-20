import { Episode } from "@/data/episodes";
import EpisodeCard from "./EpisodeCard";

type Props = {
  episodes: Episode[];
  title?: string;
};

export default function RelatedEpisodes({
  episodes,
  title = "関連エピソード",
}: Props) {
  if (episodes.length === 0) return null;

  return (
    <section className="mt-12">
      <div className="flex items-center gap-3 mb-6">
        <span className="text-2xl">📺</span>
        <h2 className="text-xl font-black text-dark">{title}</h2>
        <div className="flex-1 h-1 bg-secondary rounded-full" />
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
        {episodes.map((ep) => (
          <EpisodeCard key={ep.slug} episode={ep} />
        ))}
      </div>
    </section>
  );
}
