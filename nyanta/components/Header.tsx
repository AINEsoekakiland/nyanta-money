import Link from "next/link";

export default function Header() {
  return (
    <header className="bg-primary shadow-pop sticky top-0 z-50 border-b-4 border-dark">
      <div className="max-w-5xl mx-auto px-4 py-3 flex items-center justify-between">
        <Link href="/" className="flex items-center gap-2 group">
          <div className="text-3xl animate-wiggle">🐱</div>
          <div>
            <div className="text-white font-black text-lg leading-tight drop-shadow-sm">
              にゃんたと学ぶ
            </div>
            <div className="text-secondary font-black text-xs leading-tight tracking-wide">
              お金のヒミツ
            </div>
          </div>
        </Link>
        <nav className="flex items-center gap-2">
          <Link
            href="/"
            className="hidden sm:block bg-white text-primary font-bold text-sm px-4 py-1.5 rounded-full border-2 border-dark shadow-pop hover:shadow-none hover:translate-y-0.5 transition-all"
          >
            トップ
          </Link>
          <Link
            href="/#episodes"
            className="bg-secondary text-dark font-bold text-sm px-4 py-1.5 rounded-full border-2 border-dark shadow-pop hover:shadow-none hover:translate-y-0.5 transition-all"
          >
            エピソード
          </Link>
        </nav>
      </div>
    </header>
  );
}
