"use client";

type Props = {
  videoId: string;
  title?: string;
};

export default function YouTubeEmbed({ videoId, title = "YouTube動画" }: Props) {
  return (
    <div className="relative w-full aspect-video rounded-2xl overflow-hidden border-2 border-dark shadow-pop-lg bg-black">
      <iframe
        src={`https://www.youtube.com/embed/${videoId}?rel=0&modestbranding=1`}
        title={title}
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        allowFullScreen
        className="absolute inset-0 w-full h-full"
      />
    </div>
  );
}
