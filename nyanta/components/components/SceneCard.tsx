import Emotion, { EmotionType } from "./Emotion";

export type Scene = {
  character: "nyantan" | "masao" | "doctor" | "narrator";
  text: string;
  emotion: EmotionType;
};

const CHARACTER_CONFIG = {
  nyantan: {
    name: "にゃんた",
    bgColor: "bg-orange-100",
    borderColor: "border-orange-400",
    nameColor: "text-orange-600",
    bubbleTail: "left", // キャラが左に来る
  },
  masao: {
    name: "まさお",
    bgColor: "bg-sky-100",
    borderColor: "border-sky-400",
    nameColor: "text-sky-600",
    bubbleTail: "left",
  },
  doctor: {
    name: "マネー博士",
    bgColor: "bg-purple-100",
    borderColor: "border-purple-400",
    nameColor: "text-purple-600",
    bubbleTail: "left",
  },
  narrator: {
    name: "ナレーター",
    bgColor: "bg-gray-100",
    borderColor: "border-gray-300",
    nameColor: "text-gray-500",
    bubbleTail: "none",
  },
};

type Props = {
  scene: Scene;
  index: number;
};

export default function SceneCard({ scene, index }: Props) {
  const char = CHARACTER_CONFIG[scene.character];
  const isNarrator = scene.character === "narrator";

  // ナレーターは特別なスタイル
  if (isNarrator) {
    return (
      <div className="flex justify-center my-4">
        <p className="text-gray-600 text-sm italic leading-relaxed text-center max-w-md px-4">
          {scene.text}
        </p>
      </div>
    );
  }

  return (
    <div
      className={`flex items-start gap-3 sm:gap-4 my-4 ${
        index % 2 === 0 ? "flex-row" : "flex-row-reverse"
      }`}
    >
      {/* キャラクター＋感情アイコン */}
      <div className="flex flex-col items-center gap-1 flex-shrink-0">
        <Emotion emotion={scene.emotion} size="md" showLabel={false} />
        <span className={`text-xs font-black ${char.nameColor} whitespace-nowrap`}>
          {char.name}
        </span>
      </div>

      {/* 吹き出し */}
      <div className="flex-1 relative">
        {/* 吹き出しの三角（左右対応） */}
        <div
          className={`absolute top-4 w-0 h-0 ${
            index % 2 === 0
              ? "left-[-10px] border-t-[8px] border-t-transparent border-b-[8px] border-b-transparent border-r-[10px]"
              : "right-[-10px] border-t-[8px] border-t-transparent border-b-[8px] border-b-transparent border-l-[10px]"
          }`}
          style={{
            borderRightColor: index % 2 === 0 ? "rgb(251 146 60)" : "transparent",
            borderLeftColor: index % 2 !== 0 ? "rgb(251 146 60)" : "transparent",
          }}
        />
        <div
          className={`rounded-2xl border-2 ${char.bgColor} ${char.borderColor} px-4 py-3 shadow-sm`}
        >
          <p className="text-dark font-bold text-sm sm:text-base leading-relaxed">
            {scene.text}
          </p>
        </div>
      </div>
    </div>
  );
}
