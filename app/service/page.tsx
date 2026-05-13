'use client'

import Header from '../components/layout/Header'
import Footer from '../components/layout/Footer'

export default function ServicePage() {

  return (

    <div className="w-full min-h-screen bg-white">

      <Header />

      {/* =========================
          SERVICE HERO
      ========================= */}

      <section className="
        relative
        h-screen
        overflow-hidden
        bg-[#f6f1ed]
      ">

        {/* VIDEO AREA */}
        <div className="
          absolute
          inset-0
          bg-zinc-200
        ">
          {/* 나중에 video 들어갈 영역 */}
        </div>

        {/* OVERLAY */}
        <div className="
          absolute
          inset-0
          bg-gradient-to-r
          from-black/55
          via-black/25
          to-transparent
        " />

        {/* CONTENT */}
        <div className="
          relative
          z-10
          h-full
          flex
          items-center
          px-6
          lg:px-28
        ">

          <div className="
            w-full
            grid
            lg:grid-cols-2
            gap-20
            items-center
          ">

            {/* LEFT TEXT */}
            <div className="text-white">

              {/* badge */}
              <div className="
                inline-flex
                items-center
                px-4
                py-2
                rounded-full
                bg-white/10
                backdrop-blur
                border
                border-white/20
                text-xs
                tracking-[0.18em]
                font-semibold
                mb-8
              ">
                NEW EXPERIENCE
              </div>

              {/* title */}
              <h1 className="
                text-5xl
                lg:text-7xl
                font-black
                tracking-tight
                leading-[1.05]
                mb-8
              ">
                카카오톡 대화,
                <br />
                AI가 핵심만
                <br />
                요약해드려요
              </h1>

              {/* desc */}
              <p className="
                text-lg
                lg:text-2xl
                text-white/80
                leading-relaxed
                max-w-2xl
                mb-12
              ">
                중요한 메시지를 놓치지 않도록,
                <br />
                카나나 AI가 대화의 흐름을 정리합니다.
              </p>

              {/* buttons */}
              <div className="flex flex-wrap gap-4">

                <button className="
                  px-7
                  py-4
                  rounded-2xl
                  bg-[#7B61FF]
                  text-white
                  font-semibold
                  hover:scale-[1.02]
                  transition
                ">
                  무료로 시작하기
                </button>

                <button className="
                  px-7
                  py-4
                  rounded-2xl
                  border
                  border-white/20
                  bg-white/10
                  backdrop-blur
                  text-white
                  font-semibold
                  hover:bg-white/20
                  transition
                ">
                  서비스 소개 보기
                </button>

              </div>

            </div>

            

          </div>

        </div>

      </section>




{/* =========================
    SERVICE FEATURES
========================= */}

<section className="
  relative
  overflow-hidden
  bg-white
  py-32
">

  {/* soft glow */}
  <div className="
    absolute
    top-0
    left-1/2
    -translate-x-1/2
    w-[900px]
    h-[900px]
    rounded-full
    bg-gradient-to-br
    from-violet-100/40
    via-pink-100/20
    to-transparent
    blur-3xl
  " />

  <div className="
    relative
    z-10
    px-6
    lg:px-24
  ">

    {/* =========================
        TOP TEXT BLOCK
    ========================= */}

    <div className="
      max-w-5xl
      mx-auto
      text-center
      mb-24
    ">

      {/* section label */}
      <div className="
        text-[12px]
        tracking-[0.28em]
        text-violet-500
        font-semibold
        mb-6
      ">
        SMART FEATURES
      </div>

      {/* title */}
      <h2 className="
        text-4xl
        lg:text-6xl
        font-black
        tracking-tight
        leading-[1.1]
        text-zinc-900
        mb-8
      ">
        대화 속 중요한 순간을 놓치지 않도록,
        <br />
        <span className="text-violet-500">
          Kanana가 도와드려요
        </span>
      </h2>


    </div>

    {/* =========================
        CARDS
    ========================= */}

    <div className="
      grid
      md:grid-cols-3
      gap-8
    ">

      {/* card 1 */}
      <div className="
        group
        rounded-[36px]
        overflow-hidden
        bg-[#faf7ff]
        border
        border-violet-100
        shadow-[0_10px_40px_rgba(120,80,255,0.08)]
        transition-all
        duration-500
        hover:scale-[1.03]
        hover:-translate-y-2
      ">

        {/* image */}
        <div className="overflow-hidden">

          <img
            src="/feature1.jpg"
            alt=""
            className="
              w-full
              h-[340px]
              object-cover
              transition-transform
              duration-700
              group-hover:scale-[1.05]
            "
          />

        </div>

        {/* text */}
        <div className="
          p-8
          text-center
        ">

          <div className="
            text-2xl
            font-bold
            text-zinc-900
            mb-4
          ">
            일정 관리
          </div>

          <p className="
            text-zinc-600
            leading-relaxed
            max-w-[260px]
            mx-auto
          ">
            중요한 일정과 약속을
            자동으로 정리하고
            다시 알려드립니다.
          </p>

        </div>

      </div>

      {/* card 2 */}
      <div className="
        group
        rounded-[36px]
        overflow-hidden
        bg-[#faf7ff]
        border
        border-violet-100
        shadow-[0_10px_40px_rgba(120,80,255,0.08)]
        transition-all
        duration-500
        hover:scale-[1.03]
        hover:-translate-y-2
      ">

        <div className="overflow-hidden">

          <img
            src="/feature2.jpg"
            alt=""
            className="
              w-full
              h-[340px]
              object-cover
              transition-transform
              duration-700
              group-hover:scale-[1.05]
            "
          />

        </div>

        <div className="
          p-8
          text-center
        ">

          <div className="
            text-2xl
            font-bold
            text-zinc-900
            mb-4
          ">
            대화 요약
          </div>

          <p className="
            text-zinc-600
            leading-relaxed
            max-w-[260px]
            mx-auto
          ">
            긴 대화 속 핵심 내용을
            빠르게 정리하고
            필요한 정보만 전달합니다.
          </p>

        </div>

      </div>

      {/* card 3 */}
      <div className="
        group
        rounded-[36px]
        overflow-hidden
        bg-[#faf7ff]
        border
        border-violet-100
        shadow-[0_10px_40px_rgba(120,80,255,0.08)]
        transition-all
        duration-500
        hover:scale-[1.03]
        hover:-translate-y-2
      ">

        <div className="overflow-hidden">

          <img
            src="/feature3.jpg"
            alt=""
            className="
              w-full
              h-[340px]
              object-cover
              transition-transform
              duration-700
              group-hover:scale-[1.05]
            "
          />

        </div>

        <div className="
          p-8
          text-center
        ">

          <div className="
            text-2xl
            font-bold
            text-zinc-900
            mb-4
          ">
            예약 알림
          </div>

          <p className="
            text-zinc-600
            leading-relaxed
            max-w-[260px]
            mx-auto
          ">
            예약과 중요한 메시지를
            놓치지 않도록
            미리 안내해드립니다.
          </p>

        </div>

      </div>

    </div>

  </div>

</section>

      <Footer />

    </div>

  )
}