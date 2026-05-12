export default function AIHubLandingPage() {
  const personaCards = [
    {
      title: '학생을 위한 AI',
      desc: '학습과 요약을 도와주는 AI 서비스',
    },
    {
      title: '업무용 AI',
      desc: '문서 작성과 회의 정리를 지원',
    },
    {
      title: '개발자용 AI',
      desc: '코드 생성과 디버깅 지원',
    },
  ]

  const newsItems = [
    {
      title: 'Kanana AI 업데이트',
      category: 'NEWS',
    },
    {
      title: '새로운 멀티모달 기능 공개',
      category: 'UPDATE',
    },
    {
      title: 'AI HUB 베타 오픈',
      category: 'EVENT',
    },
  ]

  return (
    <div className="w-full min-h-screen bg-white text-zinc-900">
      {/* Header */}
      <header className="sticky top-0 z-50 bg-white/80 backdrop-blur border-b border-zinc-200">
        <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
          <div className="text-xl font-black tracking-tight">
            Kakao Kanana
          </div>

          <nav className="hidden md:flex items-center gap-8 text-sm font-medium text-zinc-600">
            <button>서비스 소개</button>
            <button>AI 라인업</button>
            <button>데모 체험</button>
            <button>최신 소식</button>
          </nav>

          <button className="px-4 py-2 rounded-full bg-black text-white text-sm font-semibold hover:opacity-90 transition">
            시작하기
          </button>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-violet-100 via-white to-zinc-100" />

        <div className="relative max-w-7xl mx-auto px-6 py-28 grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <div className="inline-flex items-center px-3 py-1 rounded-full bg-violet-100 text-violet-700 text-xs font-semibold mb-6">
              AI HUB
            </div>

            <h1 className="text-5xl lg:text-6xl font-black tracking-tight leading-tight mb-6">
              일상의 모든 순간,
              <br />
              나를 이해하는 AI
            </h1>

            <p className="text-lg text-zinc-600 leading-relaxed mb-10 max-w-xl">
              다양한 AI 서비스를 한 곳에서 경험하고,
              업무와 일상 속에서 활용해보세요.
            </p>

            <div className="flex flex-wrap gap-4">
              <button className="px-6 py-3 rounded-2xl bg-black text-white font-semibold hover:opacity-90 transition">
                AI 체험하기
              </button>

              <button className="px-6 py-3 rounded-2xl border border-zinc-300 bg-white font-semibold hover:bg-zinc-100 transition">
                서비스 둘러보기
              </button>
            </div>
          </div>

          <div className="relative">
            <div className="rounded-[32px] bg-white border border-zinc-200 shadow-2xl p-6">
              <div className="aspect-[4/3] rounded-2xl bg-gradient-to-br from-violet-200 via-white to-zinc-100 flex items-center justify-center text-zinc-400 font-semibold">
                Hero Visual Area
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Persona Cards */}
      <section className="max-w-7xl mx-auto px-6 py-28">
        <div className="flex items-end justify-between mb-12">
          <div>
            <div className="text-sm font-semibold text-violet-600 mb-3">
              AI by Persona
            </div>

            <h2 className="text-4xl font-black tracking-tight mb-4">
              나에게 맞는 AI 서비스
            </h2>

            <p className="text-zinc-600 text-lg">
              상황과 목적에 따라 다양한 AI를 선택해보세요.
            </p>
          </div>
        </div>

        <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-8">
          {personaCards.map((card, index) => (
            <div
              key={index}
              className="group rounded-[28px] overflow-hidden border border-zinc-200 bg-white hover:shadow-2xl transition duration-300"
            >
              <div className="aspect-[16/10] bg-gradient-to-br from-violet-100 to-zinc-100" />

              <div className="p-8">
                <h3 className="text-2xl font-bold mb-3">{card.title}</h3>

                <p className="text-zinc-600 leading-relaxed mb-6">
                  {card.desc}
                </p>

                <button className="text-sm font-semibold text-violet-700 group-hover:translate-x-1 transition">
                  자세히 보기 →
                </button>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Interactive Demo Section */}
      <section className="bg-zinc-950 text-white py-28 overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <div className="text-sm font-semibold text-violet-400 mb-4">
              Interactive Demo
            </div>

            <h2 className="text-4xl lg:text-5xl font-black tracking-tight mb-6 leading-tight">
              AI 서비스를
              <br />
              직접 체험해보세요
            </h2>

            <p className="text-zinc-400 text-lg leading-relaxed mb-10">
              실제 시나리오 기반의 인터랙티브 데모를 통해
              AI 경험을 직관적으로 확인할 수 있습니다.
            </p>

            <button className="px-6 py-3 rounded-2xl bg-white text-black font-semibold hover:opacity-90 transition">
              데모 시작하기
            </button>
          </div>

          <div className="rounded-[32px] border border-white/10 bg-white/5 backdrop-blur p-6 shadow-2xl">
            <div className="aspect-[4/3] rounded-2xl bg-gradient-to-br from-violet-500/20 to-black flex items-center justify-center text-zinc-400">
              Demo Preview
            </div>
          </div>
        </div>
      </section>

      {/* News Section */}
      <section className="max-w-7xl mx-auto px-6 py-28">
        <div className="flex items-end justify-between mb-12">
          <div>
            <div className="text-sm font-semibold text-violet-600 mb-3">
              Latest News
            </div>

            <h2 className="text-4xl font-black tracking-tight mb-4">
              최신 소식
            </h2>
          </div>

          <button className="text-sm font-semibold text-zinc-500 hover:text-black transition">
            전체보기
          </button>
        </div>

        <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-8">
          {newsItems.map((item, index) => (
            <div
              key={index}
              className="rounded-[24px] overflow-hidden border border-zinc-200 bg-white hover:-translate-y-1 hover:shadow-xl transition"
            >
              <div className="aspect-[16/10] bg-gradient-to-br from-zinc-100 to-zinc-200" />

              <div className="p-6">
                <div className="text-xs font-bold text-violet-600 mb-3">
                  {item.category}
                </div>

                <div className="text-xl font-bold leading-snug mb-4">
                  {item.title}
                </div>

                <p className="text-zinc-600 leading-relaxed text-sm">
                  새로운 기능과 업데이트 소식을 확인해보세요.
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Footer */}
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
            <div className="text-white font-semibold mb-4">서비스</div>
            <div className="space-y-3 text-sm">
              <div>AI 소개</div>
              <div>데모 체험</div>
              <div>모델 라인업</div>
            </div>
          </div>

          <div>
            <div className="text-white font-semibold mb-4">리소스</div>
            <div className="space-y-3 text-sm">
              <div>가이드</div>
              <div>업데이트</div>
              <div>문의하기</div>
            </div>
          </div>

          <div>
            <div className="text-white font-semibold mb-4">소셜</div>
            <div className="space-y-3 text-sm">
              <div>Instagram</div>
              <div>YouTube</div>
              <div>LinkedIn</div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}
