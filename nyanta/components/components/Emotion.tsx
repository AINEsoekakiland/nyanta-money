import Image from "next/image";

// 感情タイプの定義
// 新しい感情を追加するときは：
// 1. public/images/emotions/に画像ファイルを追加（例: angry.svg）
// 2. EMOTION_CONFIG にエントリを追加するだけでOK
export type EmotionType =
  | "happy"
  | "sad"
  | "surprised"
  | "thinking"
  | "excited"
  | "troubled";

type EmotionConfig = {
  label: string;
  src: string;
  bgColor: string;
  borderColor: string;
};

const EMOTION_CONFIG: Record<EmotionType, EmotionConfig> = {
  happy: {
    label: "うれしい",
    src: "/images/emotions/happy.svg",
    bgColor: "bg-yellow-50",
    borderColor: "border-yellow-300",
  },
  sad: {
    label: "かなしい",
    src: "/images/emotions/sad.svg",
    bgColor: "bg-blue-50",
    borderColor: "border-blue-300",
  },
  surprised: {
    label: "びっくり",
    src: "/images/emotions/surprised.svg",
    bgColor: "bg-orange-50",
    borderColor: "border-orange-300",
  },
  thinking: {
    label: "かんがえてる",
    src: "/images/emotions/thinking.svg",
    bgColor: "bg-green-50",
    borderColor: "border-green-300",
  },
  excited: {
    label: "わくわく",
    src: "/images/emotions/excited.svg",
    bgColor: "bg-red-50",
    borderColor: "border-red-300",
  },
  troubled: {
    label: "こまった",
    src: "/images/emotions/troubled.svg",
    bgColor: "bg-amber-50",
    borderColor: "border-amber-300",
  },
};

type Props = {
  emotion: EmotionType;
  size?: "sm" | "md" | "lg";
  showLabel?: boolean;
};

export default function Emotion({
  emotion,
  size = "md",
  showLabel = true,
}: Props) {
  const config = EMOTION_CONFIG[emotion];

  const sizeMap = {
    sm: 48,
    md: 72,
    lg: 96,
  };

  const px = sizeMap[size];

  return (
    <div className="flex flex-col items-center gap-1">
      <div
        className={`rounded-full p-1 border-2 ${config.bgColor} ${config.borderColor} flex items-center justify-center`}
        style={{ width: px + 8, height: px + 8 }}
      >
        <Image
          src={config.src}
          alt={config.label}
          width={px}
          height={px}
          className="object-contain"
        />
      </div>
      {showLabel && (
        <span className="text-xs font-bold text-gray-500">{config.label}</span>
      )}
    </div>
  );
}
