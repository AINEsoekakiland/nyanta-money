type Props = {
  slot?: "top" | "middle" | "bottom" | "sidebar";
  className?: string;
};

export default function AdSpace({ slot = "middle", className = "" }: Props) {
  // ここにA8アフィリエイトのコードを貼り付けてください
  // 例: A8.netで取得したバナーコードをそのまま入れる
  return (
    <div
      className={`my-6 rounded-2xl border-2 border-dashed border-gray-300 bg-gray-50 flex items-center justify-center min-h-[100px] ${className}`}
      data-slot={slot}
    >
      {/* === A8アフィリエイト広告スペース ===
          以下のコメントを削除して、A8.netから取得した広告コードに置き換えてください
          
          例:
          <a href="https://px.a8.net/svt/ejp?a8mat=..." target="_blank">
            <img border="0" width="468" height="60" alt="" src="https://www18.a8.net/..."/>
          </a>
          <img border="0" width="1" height="1" src="https://www13.a8.net/..." />
      */}
      <span className="text-gray-400 text-xs font-bold">
        📢 広告スペース ({slot})
      </span>
    </div>
  );
}
