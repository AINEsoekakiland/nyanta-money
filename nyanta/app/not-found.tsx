import Link from "next/link";

export default function NotFound() {
  return (
    <div className="min-h-[60vh] flex flex-col items-center justify-center px-4 text-center">
      <div className="text-8xl mb-4 animate-bounce-slow">🐱</div>
      <h1 className="text-3xl font-black text-dark mb-2">
        ページが見つからないにゃ〜
      </h1>
      <p className="text-gray-600 mb-8">
        このページは存在しないか、移動したかもしれません。
      </p>
      <Link
        href="/"
        className="bg-primary text-white font-black px-8 py-3 rounded-full border-2 border-dark shadow-pop hover:shadow-none hover:translate-y-0.5 transition-all"
      >
        トップページへ戻る
      </Link>
    </div>
  );
}
