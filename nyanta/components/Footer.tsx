import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-dark text-white mt-16">
      <div className="max-w-5xl mx-auto px-4 py-10">
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 mb-8">
          <div>
            <div className="text-2xl mb-2">🐱</div>
            <h3 className="font-black text-secondary text-lg mb-2">
              にゃんたと学ぶお金のヒミツ
            </h3>
            <p className="text-gray-400 text-sm leading-relaxed">
              子どもたちが楽しくお金の大切さを学べる教育アニメです。
            </p>
          </div>
          <div>
            <h4 className="font-bold text-secondary mb-3">コンテンツ</h4>
            <ul className="space-y-2 text-sm text-gray-400">
              <li>
                <Link href="/" className="hover:text-white transition-colors">
                  トップページ
                </Link>
              </li>
              <li>
                <Link
                  href="/#episodes"
                  className="hover:text-white transition-colors"
                >
                  エピソード一覧
                </Link>
              </li>
              <li>
                <Link
                  href="/#characters"
                  className="hover:text-white transition-colors"
                >
                  キャラクター紹介
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h4 className="font-bold text-secondary mb-3">SNS・動画</h4>
            <ul className="space-y-2 text-sm text-gray-400">
              <li>
                <a
                  href="https://youtube.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-white transition-colors flex items-center gap-1"
                >
                  ▶ YouTubeチャンネル
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div className="border-t border-gray-700 pt-6 flex flex-col sm:flex-row justify-between items-center gap-3">
          <p className="text-gray-500 text-xs">
            © 2024 にゃんたと学ぶお金のヒミツ. All rights reserved.
          </p>
          <div className="flex gap-4 text-xs text-gray-500">
            <Link href="/privacy" className="hover:text-white transition-colors">
              プライバシーポリシー
            </Link>
            <Link href="/contact" className="hover:text-white transition-colors">
              お問い合わせ
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
