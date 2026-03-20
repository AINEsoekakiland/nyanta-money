type Character = {
  emoji: string;
  name: string;
  role: string;
  description: string;
  color: string;
  bgColor: string;
  borderColor: string;
  speech: string;
};

const characters: Character[] = [
  {
    emoji: "🐱",
    name: "にゃんた",
    role: "お金に詳しい不思議なネコ",
    description:
      "どこからともなく現れる、知恵のある白いネコ。お金のことならなんでも知ってるにゃ！まさおのベストフレンド。",
    color: "text-primary",
    bgColor: "bg-orange-50",
    borderColor: "border-primary",
    speech: "お金は「ありがとう」の気持ちにゃ！",
  },
  {
    emoji: "👦",
    name: "まさお",
    role: "小学3年生・好奇心旺盛な男の子",
    description:
      "お金のことがよくわからなくて困っていた普通の小学生。にゃんたと出会ってから、お金のひみつを少しずつ学んでいます。",
    color: "text-sky",
    bgColor: "bg-sky-50",
    borderColor: "border-sky",
    speech: "お金ってなんで大切なんだろう？",
  },
  {
    emoji: "👨‍🔬",
    name: "マネー博士",
    role: "お金の専門家・発明家",
    description:
      "お金の歴史や仕組みを研究してきた謎の老博士。むずかしいことをわかりやすく教えてくれる頼りになる存在。",
    color: "text-purple",
    bgColor: "bg-purple-50",
    borderColor: "border-purple",
    speech: "お金の知識は未来への投資じゃ！",
  },
];

export default function CharacterSection() {
  return (
    <section id="characters" className="py-16 px-4">
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-10">
          <span className="inline-block bg-accent/20 text-accent font-black text-sm px-4 py-1 rounded-full border-2 border-accent mb-3">
            登場キャラクター
          </span>
          <h2 className="text-3xl font-black text-dark">
            いっしょに学ぼう！ 🎉
          </h2>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
          {characters.map((char) => (
            <div
              key={char.name}
              className={`${char.bgColor} rounded-3xl border-2 ${char.borderColor} shadow-pop p-6 flex flex-col items-center text-center card-hover`}
            >
              <div className="text-6xl mb-3 animate-float">{char.emoji}</div>
              <h3 className={`text-xl font-black ${char.color} mb-1`}>
                {char.name}
              </h3>
              <p className="text-xs text-gray-500 font-bold mb-3">{char.role}</p>
              <div className="speech-bubble mb-4 w-full">
                <p className="text-sm text-dark font-bold">「{char.speech}」</p>
              </div>
              <p className="text-sm text-gray-600 leading-relaxed">
                {char.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
