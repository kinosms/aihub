export default function Footer() {
  return (
    <footer className="bg-zinc-950 text-zinc-400">
      <div className="max-w-7xl mx-auto px-6 py-16 grid md:grid-cols-4 gap-12">

        <div>
          <div className="text-2xl font-black text-white mb-4">
            Kakao Kanana
          </div>

          <p className="text-sm leading-relaxed">
            AI 기반의 새로운 경험을 제공합니다.
          </p>
        </div>

        <div>
          <div className="text-white font-semibold mb-4">
            서비스
          </div>

          <div className="space-y-3 text-sm">
            <div>AI 소개</div>
            <div>데모 체험</div>
            <div>모델 라인업</div>
          </div>
        </div>

        <div>
          <div className="text-white font-semibold mb-4">
            리소스
          </div>

          <div className="space-y-3 text-sm">
            <div>가이드</div>
            <div>업데이트</div>
            <div>문의하기</div>
          </div>
        </div>

        <div>
          <div className="text-white font-semibold mb-4">
            소셜
          </div>

          <div className="space-y-3 text-sm">
            <div>Instagram</div>
            <div>YouTube</div>
            <div>LinkedIn</div>
          </div>
        </div>

      </div>
    </footer>
  )
}