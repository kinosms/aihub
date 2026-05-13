export default function HeroSection() {
  return (
    <section className="relative h-screen overflow-hidden">

      {/* Full Visual Area */}
      <div className="absolute inset-0 overflow-hidden">

        <video
          autoPlay
          muted
          loop
          playsInline
          className="w-full h-full object-cover"
        >
          <source src="/hero.mp4" type="video/mp4" />
        </video>

      </div>

      {/* LEFT OVERLAY ONLY */}
      <div className="
        absolute
        left-0
        top-0
        h-full
        w-[55%]
        bg-gradient-to-r
        from-black/100
        via-black/75
        to-transparent
        z-[1]
      " />

      {/* Hero Content */}
      <div className="relative z-10 h-full flex items-start">

        <div className="w-full px-6 lg:px-36 pt-40">

          <div className="max-w-xl">

            <div className="inline-flex items-center px-4 py-2 rounded-full bg-white/10 backdrop-blur text-white text-xs font-semibold border border-white/20 mb-6">
              AI HUB
            </div>

            <h1 className="
              text-5xl
              lg:text-7xl
              font-black
              tracking-tight
              leading-[1.05]
              text-white
              mb-8
              drop-shadow-[0_4px_24px_rgba(0,0,0,0.7)]
            ">
              일상의 모든 순간,
              <br />
              나를 이해하는 AI
            </h1>

            <p className="
              text-lg
              lg:text-xl
              text-white/90
              leading-relaxed
              mb-10
              drop-shadow-[0_2px_12px_rgba(0,0,0,0.6)]
            ">
              다양한 AI 서비스를 한 곳에서 경험하고,
              업무와 일상 속에서 자연스럽게 활용해보세요.
            </p>

            <div className="flex flex-wrap gap-4">

              <button
                onClick={() => {
                  document
                    .getElementById('persona-finder')
                    ?.scrollIntoView({
                      behavior: 'smooth'
                    })
                }}
                className="px-7 py-4 rounded-2xl bg-white text-black font-semibold hover:scale-[1.02] transition"
              >
                페르소나 발견하기
              </button>

              <button className="px-7 py-4 rounded-2xl border border-white/20 bg-white/10 backdrop-blur text-white font-semibold hover:bg-white/20 transition">
                서비스 둘러보기
              </button>

            </div>

          </div>

        </div>

      </div>

    </section>
  )
}