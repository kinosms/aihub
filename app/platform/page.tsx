'use client'

import Header from '../components/layout/Header'
import Footer from '../components/layout/Footer'
import { useState } from 'react'

export default function PlatformPage() {

  const [activeFlow, setActiveFlow] = useState(0)

  const flows = [
    {
      step: '01',
      title: '요청',
      subtitle: '사용자가 필요한 일을 말합니다',
      desc: '사용자는 자연어로 원하는 작업을 요청합니다. 예를 들어 “이번 주 회의 자료를 정리해줘”처럼 복잡한 요청도 하나의 문장으로 시작할 수 있습니다.',
      points: ['자연어 요청 입력', '업무 맥락 포함', '목표 작업 전달'],
      icon: '👤'
    },
    {
      step: '02',
      title: '이해',
      subtitle: 'AI가 의도와 필요한 도구를 파악합니다',
      desc: '카나나는 요청의 목적, 필요한 데이터, 사용할 수 있는 도구를 분석합니다. 이 단계에서 어떤 서비스와 연결해야 할지 판단합니다.',
      points: ['의도 분석', '필요 도구 판단', '실행 계획 구성'],
      icon: '🧠'
    },
    {
      step: '03',
      title: '사용',
      subtitle: 'MCP Client가 도구 사용을 요청합니다',
      desc: 'AI는 MCP Client를 통해 외부 도구나 서비스에 표준화된 방식으로 요청을 보냅니다. 서비스마다 다른 방식으로 연결할 필요가 줄어듭니다.',
      points: ['표준 요청 생성', '도구 호출', '연결 방식 통일'],
      icon: '📦'
    },
    {
      step: '04',
      title: '실행',
      subtitle: 'MCP Server가 실제 작업을 수행합니다',
      desc: 'MCP Server는 연결된 외부 서비스와 데이터를 활용해 필요한 작업을 실행합니다. 문서 조회, 일정 확인, 데이터 처리 같은 작업이 여기서 수행됩니다.',
      points: ['외부 서비스 연결', '데이터 조회', '작업 실행'],
      icon: '🗄️'
    },
    {
      step: '05',
      title: '결과',
      subtitle: 'AI가 결과를 받아 사용자에게 전달합니다',
      desc: '실행 결과는 다시 AI에게 전달되고, AI는 사용자가 이해하기 쉬운 형태로 요약하거나 다음 행동으로 이어줍니다.',
      points: ['결과 반환', '응답 정리', '사용자에게 전달'],
      icon: '✅'
    }
  ]

  const flow = flows[activeFlow]

  const nextFlow = () => {
    setActiveFlow((prev) => (prev + 1) % flows.length)
  }

  const prevFlow = () => {
    setActiveFlow((prev) => (prev - 1 + flows.length) % flows.length)
  }

  return (
    <div className="w-full min-h-screen bg-white">

      <Header />

      {/* =========================
      MCP HERO SECTION
      ========================= */}

      <section className="
  relative
  overflow-hidden
  bg-[#fffafb]
  pt-2
  pb-24
">

        {/* BG glow */}
        <div className="
    absolute
    top-[-200px]
    right-[-120px]
    w-[700px]
    h-[700px]
    rounded-full
    bg-pink-200/20
    blur-3xl
  " />

        <div className="
    absolute
    bottom-[-250px]
    left-[-100px]
    w-[700px]
    h-[700px]
    rounded-full
    bg-violet-200/20
    blur-3xl
  " />

        <div className="
    relative
    z-10
    max-w-[1600px]
    mx-auto
    px-10
    grid
    grid-cols-12
    gap-12
    items-center
  ">

          {/* =========================
        LEFT
    ========================= */}

          <div className="col-span-5">

            {/* label */}
            <div className="
        inline-flex
        items-center
        h-10
        px-5
        rounded-full
        bg-pink-100
        text-pink-600
        text-sm
        font-bold
        mb-8
      ">
              MCP
            </div>

            {/* title */}
            <h1 className="
        text-[76px]
        leading-[0.95]
        tracking-tight
        font-black
        text-zinc-950
        mb-8
      ">
              MCP란
              <br />
              무엇인가요?
            </h1>

            {/* desc */}
            <p className="
        text-[28px]
        leading-relaxed
        text-zinc-700
        font-medium
        mb-8
      ">
              AI가 세상과 연결되도록 만든 표준,
              <br />
              <span className="font-black">
                “Model Context Protocol”
              </span>
            </p>

            <p className="
        text-[18px]
        leading-relaxed
        text-zinc-500
        max-w-[560px]
        mb-12
      ">
              MCP는 AI와 다양한 도구, 데이터, 서비스를
              연결하고 활용할 수 있도록 돕는
              개방형 프로토콜입니다.
            </p>

            {/* buttons */}
            <div className="flex gap-4">

              <button onClick={() => {
                window.open(
                  'https://playmcp.kakao.com/?page=0',
                  '_blank'
                )
              }}
                className="
          h-16
          px-9
          rounded-[20px]

          bg-gradient-to-r
          from-[#ff6ba2]
          to-[#ff8cc6]

          text-white
          text-[16px]
          font-bold

          shadow-[0_10px_30px_rgba(255,120,180,0.28)]

          hover:scale-[1.03]
          transition
        ">
                카카오 MCP 사이트 바로가기 ↗
              </button>

              <button className="
          h-16
          px-9
          rounded-[20px]

          bg-white
          border
          border-zinc-200

          text-zinc-700
          text-[16px]
          font-bold

          hover:bg-zinc-50
          transition
        ">
                개발자 문서 보기
              </button>

            </div>

          </div>

          {/* =========================
        RIGHT VISUAL
    ========================= */}

          <div className="
      col-span-7
      relative
      h-[720px]
      flex
      items-center
      justify-center
    ">

            {/* center chip */}
            <div className="
        absolute
        z-20

        w-[240px]
        h-[240px]

        rounded-[60px]

        bg-gradient-to-br
        from-white
        to-pink-50

        border
        border-pink-100

        shadow-[0_30px_80px_rgba(255,120,180,0.18)]

        flex
        items-center
        justify-center

        rotate-[-8deg]
      ">

              <div className="
          text-[48px]
          font-black
          tracking-tight
          text-zinc-800
        ">
                MCP
              </div>

            </div>

            {/* orbit lines */}
            <div className="
        absolute
        w-[620px]
        h-[620px]
        rounded-full
        border
        border-dashed
        border-pink-200/60
      " />

            {/* floating icons */}

            {[
              {
                icon: '🗂',
                className: 'top-[40px] left-[220px]'
              },
              {
                icon: '📁',
                className: 'top-[180px] left-[40px]'
              },
              {
                icon: '🐙',
                className: 'top-[180px] right-[60px]'
              },
              {
                icon: '📝',
                className: 'bottom-[120px] right-[120px]'
              },
              {
                icon: '💬',
                className: 'bottom-[120px] left-[120px]'
              },
              {
                icon: '🎵',
                className: 'bottom-[40px] left-[300px]'
              },
            ].map((item, index) => (

              <div
                key={index}
                className={`
            absolute
            ${item.className}
          `}
              >

                <div className="
            w-[92px]
            h-[92px]

            rounded-[28px]

            bg-white/90
            backdrop-blur-xl

            border
            border-pink-100

            shadow-[0_12px_40px_rgba(0,0,0,0.08)]

            flex
            items-center
            justify-center

            text-[36px]

            hover:scale-[1.06]
            transition
          ">
                  {item.icon}
                </div>

              </div>

            ))}

          </div>

        </div>

      </section>





      {/* =========================

    MCP OVERVIEW SECTION

========================= */}

      <section className="

  relative

  overflow-hidden

  bg-white

  py-25

">

        {/* glow */}

        <div className="

    absolute

    top-[-120px]

    left-1/2

    -translate-x-1/2

    w-[900px]

    h-[900px]

    rounded-full

    bg-violet-100/30

    blur-3xl

  " />

        <div className="

    relative

    z-10

    max-w-[1600px]

    mx-auto

    px-10

  ">

          {/* TITLE */}

          <div className="text-center mb-14">

            <div className="

        inline-flex

        items-center

        px-5

        py-2

        rounded-full

        bg-violet-50

        text-violet-600

        text-sm

        font-bold

        mb-5

      ">

              MCP OVERVIEW

            </div>

            <h2 className="

        text-[64px]

        leading-[1.05]

        tracking-tight

        font-black

        text-zinc-950

        mb-8

      ">

              MCP는 AI와 세상을

              <br />

              연결하는 표준입니다

            </h2>

            <p className="

        text-[21px]

        leading-relaxed

        text-zinc-500

        max-w-[950px]

        mx-auto

      ">

              다양한 서비스와 데이터를 하나의 프로토콜로 연결하여

              AI가 더 많은 일을 이해하고 수행할 수 있도록 돕습니다.

            </p>

          </div>

          {/* CARDS */}

          <div className="

      grid

      grid-cols-3

      gap-8

    ">

            {/* CARD 1 */}

            <div className="

  relative

  rounded-[40px]

  bg-[#faf7ff]

  border

  border-violet-100

  p-10

  overflow-hidden

  hover:-translate-y-2

  transition

  duration-500

">

              {/* top row */}

              <div className="

    flex

    items-center

    gap-6

    mb-10

  ">

                {/* icon */}

                <div className="

      w-[92px]

      h-[92px]

      rounded-[28px]

      bg-gradient-to-br

      from-violet-400

      to-violet-600

      flex

      items-center

      justify-center

      text-white

      text-[38px]

      shadow-[0_12px_30px_rgba(120,80,255,0.28)]

      shrink-0

    ">

                  🔗

                </div>

                {/* title */}

                <h3 className="

      text-[33px]

      leading-[1.05]

      font-black

      tracking-tight

      text-zinc-950

    ">

                  다양한 서비스 연결

                </h3>

              </div>

              {/* desc */}

              <p className="

    text-[18px]

    leading-relaxed

    text-zinc-500

  ">

                캘린더, 메일, 문서,

                음악, 클라우드 등

                다양한 서비스와 연결됩니다.

              </p>

            </div>

            {/* CARD 2 */}

            <div className="
  relative
  rounded-[40px]
  bg-[#fff8f9]
  border
  border-pink-100
  p-10
  overflow-hidden
  hover:-translate-y-2
  transition
  duration-500
">

              {/* top row */}
              <div className="
    flex
    items-center
    gap-6
    mb-10
  ">

                {/* icon */}
                <div className="
      w-[92px]
      h-[92px]
      rounded-[28px]

      bg-gradient-to-br
      from-pink-400
      to-pink-500

      flex
      items-center
      justify-center

      text-white
      text-[38px]

      shadow-[0_12px_30px_rgba(255,120,180,0.24)]

      shrink-0
    ">
                  🧠
                </div>

                {/* title */}
                <h3 className="
      text-[35px]
      leading-[1.05]
      font-black
      tracking-tight
      text-zinc-950
    ">
                  AI의 이해 확장
                </h3>

              </div>

              {/* desc */}
              <p className="
    text-[18px]
    leading-relaxed
    text-zinc-500
  ">
                AI가 더 많은 정보를
                이해하고 상황에 맞게
                행동할 수 있도록 돕습니다.
              </p>

            </div>

            {/* CARD 3 */}

            <div className="
  relative
  rounded-[40px]
  bg-[#f8fbff]
  border
  border-sky-100
  p-10
  overflow-hidden
  hover:-translate-y-2
  transition
  duration-500
">

              {/* top row */}
              <div className="
    flex
    items-center
    gap-6
    mb-10
  ">

                {/* icon */}
                <div className="
      w-[92px]
      h-[92px]
      rounded-[28px]

      bg-gradient-to-br
      from-sky-400
      to-sky-500

      flex
      items-center
      justify-center

      text-white
      text-[38px]

      shadow-[0_12px_30px_rgba(80,170,255,0.24)]

      shrink-0
    ">
                  ⚡
                </div>

                {/* title */}
                <h3 className="
      text-[35px]
      leading-[1.05]
      font-black
      tracking-tight
      text-zinc-950
    ">
                  더 빠른 통합
                </h3>

              </div>

              {/* desc */}
              <p className="
    text-[18px]
    leading-relaxed
    text-zinc-500
  ">
                개발자는 복잡한 연결 없이
                하나의 표준으로
                빠르게 AI를 확장할 수 있습니다.
              </p>

            </div>

          </div>

        </div>

      </section>


      {/* =========================
    MCP WHY + FLOW
========================= */}

      <section className="
        relative
        overflow-hidden
        bg-white
        py-24
      ">

        {/* glow */}
        <div className="
          absolute
          top-[-180px]
          left-1/2
          -translate-x-1/2
          w-[900px]
          h-[900px]
          rounded-full
          bg-pink-100/30
          blur-3xl
        " />

        <div className="
          relative
          z-10
          max-w-[1600px]
          mx-auto
          px-10
        ">

          {/* title */}
          <div className="mb-14">

            <div className="
              inline-flex
              items-center
              px-5
              py-2
              rounded-full
              bg-pink-50
              text-pink-500
              text-sm
              font-bold
              mb-6
            ">
              MCP CONNECTION
            </div>

            <h2 className="
              text-[56px]
              leading-[1.05]
              tracking-tight
              font-black
              text-zinc-950
              mb-5
            ">
              MCP는 연결 방식을 바꿉니다
            </h2>

            <p className="
              text-[20px]
              leading-relaxed
              text-zinc-500
              max-w-[900px]
            ">
              서비스마다 각각 연결하던 기존 방식 대신,
              하나의 표준 프로토콜로 AI와 외부 서비스를 연결합니다.
            </p>

          </div>

          {/* =========================
    TOP COMPARE
========================= */}

<div className="
  grid
  grid-cols-12
  gap-8
  items-center
  mb-16
">

  {/* OLD */}
  <div className="
    col-span-5
    rounded-[36px]
    border
    border-zinc-200
    bg-white
    p-10
  ">

    <div className="
      grid
      grid-cols-2
      gap-8
      items-center
    ">

      {/* LEFT */}
      <div>

        <div className="
          text-[30px]
          font-black
          tracking-tight
          text-zinc-950
          mb-8
        ">
          기존 방식
        </div>

        <div className="
          flex
          flex-col
          gap-5
          text-zinc-600
          text-[18px]
        ">

          <div>• 서비스마다 다른 연결 방식</div>
          <div>• 개별 개발과 유지보수 필요</div>
          <div>• AI가 도구를 이해하기 어려움</div>
          <div>• 확장성과 재사용성이 낮음</div>

        </div>

      </div>

      {/* RIGHT IMAGE */}
      <div className="
        flex
        items-center
        justify-center
      ">

        <img
          src="/mcp-old-structure.png"
          alt="기존 방식 구조"
          className="
            w-full
            max-w-[360px]
            object-contain
          "
        />

      </div>

    </div>

  </div>

  {/* center arrow */}
  <div className="
    col-span-2
    flex
    items-center
    justify-center
  ">

    <div className="
      w-[84px]
      h-[84px]
      rounded-full

      bg-gradient-to-br
      from-pink-400
      to-violet-500

      text-white
      text-[36px]

      flex
      items-center
      justify-center

      shadow-[0_20px_50px_rgba(255,120,180,0.28)]
    ">
      →
    </div>

  </div>

  {/* MCP */}
  <div className="
    col-span-5
    rounded-[36px]
    border
    border-zinc-200
    bg-white
    p-10
  ">

    <div className="
      grid
      grid-cols-2
      gap-8
      items-center
    ">

      {/* LEFT */}
      <div>

        <div className="
          text-[30px]
          font-black
          tracking-tight
          text-zinc-950
          mb-8
        ">
          MCP 방식
        </div>

        <div className="
          flex
          flex-col
          gap-5
          text-zinc-600
          text-[18px]
        ">

          <div>✓ 하나의 표준으로 서비스 연결</div>
          <div>✓ 간단한 연결과 확장</div>
          <div>✓ AI가 도구를 스스로 이해</div>
          <div>✓ 연결성과 재사용성 향상</div>

        </div>

      </div>

      {/* RIGHT IMAGE */}
      <div className="
        flex
        items-center
        justify-center
      ">

        <img
          src="/mcp-structure.png"
          alt="MCP 방식"
          className="
            w-full
            max-w-[360px]
            object-contain
          "
        />

      </div>

    </div>

  </div>

</div>

{/* =========================
    FLOW
========================= */}

<div className="
  grid
  grid-cols-6
  gap-4
">

  {[
    {
      title: '사용자',
      icon: '👤',
      desc: '요청 입력'
    },
    {
      title: 'AI / Kanana',
      icon: '🙂',
      desc: '의도 이해'
    },
    {
      title: 'MCP Client',
      icon: '📦',
      desc: '도구 요청'
    },
    {
      title: 'MCP Server',
      icon: '🗂',
      desc: '작업 실행'
    },
    {
      title: '외부 서비스',
      icon: '🛢',
      desc: '데이터 처리'
    },
    {
      title: '응답',
      icon: '✅',
      desc: '결과 반환'
    }
  ].map((item, index) => (

    <div
      key={item.title}
      className="
        relative
        rounded-[28px]

        flex

  flex-col

  items-center

  justify-center

  text-center
        border
        border-zinc-200
        bg-white

        px-6
        py-7

        min-h-[150px]

        hover:-translate-y-2
        hover:shadow-[0_20px_50px_rgba(0,0,0,0.06)]

        transition
        duration-500
      "
    >

      {/* arrow */}
      {index % 3 !== 2 && (
        <div className="
          absolute
          top-1/2
          -right-[18px]
          -translate-y-1/2

          w-9
          h-9

          rounded-full
          bg-white

          border
          border-zinc-200

          flex
          items-center
          justify-center

          text-zinc-400
          text-sm

          z-20
        ">
          →
        </div>
      )}

      <div className="
        w-[58px]
        h-[58px]

        rounded-[18px]

        bg-[#faf7ff]

        border
        border-violet-100

        flex
        items-center
        justify-center

        text-[28px]

        mb-5
      ">
        {item.icon}
      </div>

      <div className="
        text-[20px]
        font-black
        tracking-tight
        text-zinc-950
        mb-2
      ">
        {item.title}
      </div>

      <div className="
        text-[15px]
        text-zinc-500
        leading-relaxed
      ">
        {item.desc}
      </div>

    </div>

  ))}

</div>
</div></section>



            <section className="relative overflow-hidden bg-white py-28">

              <div className="relative z-10 max-w-[1600px] mx-auto px-10">

                <div className="mb-10">

                  <div className="
            inline-flex
            items-center
            px-5
            py-2
            rounded-full
            bg-pink-50
            text-pink-500
            text-sm
            font-bold
            mb-6
          ">
                    MCP FLOW
                  </div>

                  <h2 className="
            text-[56px]
            leading-[1.05]
            tracking-tight
            font-black
            text-zinc-950
            mb-5
          ">
                    MCP는 이렇게 동작합니다
                  </h2>

                  <p className="
            text-[20px]
            leading-relaxed
            text-zinc-500
            max-w-[850px]
          ">
                    AI와 외부 서비스가 하나의 프로토콜로 연결되어 요청 이해부터 실행, 결과 반환까지 자연스럽게 이어집니다.
                  </p>

                </div>

                <div className="

          relative

          rounded-[42px]

          border

          border-zinc-200

          bg-gradient-to-br

          from-white

          via-[#fff8fb]

          to-[#faf7ff]

          px-12

          py-10

          overflow-hidden

          shadow-[0_20px_60px_rgba(0,0,0,0.05)]

          max-w-[1320px]

          mx-auto

          ">

                  <div className="
            absolute
            top-[-180px]
            right-[-120px]
            w-[520px]
            h-[520px]
            rounded-full
            bg-pink-200/25
            blur-3xl
          " />

                  <div className="
            relative
            z-10
            grid
            grid-cols-12
            gap-18
            items-center
            min-h-[430px]
          ">

                    {/* LEFT TEXT */}
                    <div
                      key={`flow-text-${activeFlow}`}
                      className="
                col-span-6
              
              "
                    >

                      <div className="

  flex

  items-end

  gap-5

  mb-5

">

                        {/* step */}

                        <div className="

    text-[72px]

    leading-none

    font-black

    text-pink-400/40

  ">

                          {flow.step}

                        </div>

                        {/* title */}

                        <h3 className="

    text-[52px]

    leading-none

    font-black

    tracking-tight

    text-zinc-950

  ">

                          {flow.title}

                        </h3>

                      </div>

                      <div className="
                text-[22px]
                font-bold
                text-zinc-800
                mb-6
              ">
                        {flow.subtitle}
                      </div>

                      <p className="
                text-[19px]
                leading-relaxed
                text-zinc-500
                max-w-[620px]
                mb-8
              ">
                        {flow.desc}
                      </p>

                      <div className="
  flex
  flex-wrap
  gap-3
  mb-auto
">

                        {flow.points.map((point) => (

                          <div
                            key={point}
                            className="
        px-5
        py-3
        rounded-full
        bg-white
        border
        border-zinc-200
        text-zinc-700
        text-sm
        font-bold
      "
                          >
                            {point}
                          </div>

                        ))}

                      </div>

                      {/* CONTROLS */}
                      <div className="
  flex
  items-center
  justify-between
  pt-10
">

                        {/* INDEX */}
                        <div className="flex items-center gap-3">

                          {flows.map((_, index) => (

                            <button
                              key={index}
                              onClick={() => setActiveFlow(index)}
                              className={`
          h-[7px]
          rounded-full
          transition-all
          duration-500
          ${activeFlow === index
                                  ? 'w-16 bg-pink-500'
                                  : 'w-7 bg-zinc-300'
                                }
        `}
                            />

                          ))}

                        </div>

                        {/* BUTTONS */}
                        <div className="flex gap-3">

                          <button
                            onClick={prevFlow}
                            className="
        w-14
        h-14
        rounded-full
        bg-white
        border
        border-zinc-200
        text-xl
        hover:bg-zinc-50
        transition
      "
                          >
                            ←
                          </button>

                          <button
                            onClick={nextFlow}
                            className="
        w-14
        h-14
        rounded-full
        bg-pink-500
        text-white
        text-xl
        hover:scale-[1.04]
        transition
      "
                          >
                            →
                          </button>

                        </div>

                      </div>

                    </div>

                    {/* RIGHT VISUAL */}
                    <div
                      key={`flow-visual-${activeFlow}`}
                      className="
                col-span-6
                flex
                items-center
                justify-center
                animate-[slideUp_0.45s_ease-out]
              "
                    >

                      <div className="
                relative
                w-[460px]
                h-[460px]
                rounded-[46px]
                bg-white/80
                border
                border-pink-100
                shadow-[0_30px_80px_rgba(255,120,180,0.18)]
                flex
                items-center
                justify-center
              ">

                        <div className="
                  absolute
                  inset-10
                  rounded-[36px]
                  border
                  border-dashed
                  border-pink-200
                " />

                        <div className="
                  w-[170px]
                  h-[170px]
                  rounded-[42px]
                  bg-gradient-to-br
                  from-pink-400
                  to-violet-500
                  text-white
                  text-[76px]
                  flex
                  items-center
                  justify-center
                  shadow-[0_20px_50px_rgba(180,80,255,0.28)]
                ">
                          {flow.icon}
                        </div>

                        <div className="
                  absolute
                  bottom-10
                  left-1/2
                  -translate-x-1/2
                  text-[18px]
                  font-black
                  text-zinc-700
                ">
                          STEP {flow.step}
                        </div>

                      </div>

                    </div>

                  </div>

                </div>

              </div>

            </section>






            {/* =========================

    MCP ECOSYSTEM + USE CASE

========================= */}

            <section className="

  relative

  overflow-hidden

  bg-white

  py-12

">

              {/* glow */}

              <div className="

    absolute

    top-[-220px]

    left-1/2

    -translate-x-1/2

    w-[900px]

    h-[900px]

    rounded-full

    bg-pink-100/30

    blur-3xl

  " />

              <div className="

    relative

    z-10

    max-w-[1600px]

    mx-auto

    px-10

  ">



                {/* =========================

        ECOSYSTEM

    ========================= */}

                <div className="mb-12">

                  <div className="

        flex

        items-center

        justify-between

        mb-10

      ">

                    <div>

                      <h3 className="

            text-[38px]

            font-black

            tracking-tight

            text-zinc-950

            mb-3

          ">

                        MCP 생태계

                      </h3>

                      <p className="

            text-zinc-500

            text-[18px]

          ">

                        카카오와 다양한 파트너들이 함께 연결되고 있습니다.

                      </p>

                    </div>

                    <button className="

          h-14

          px-7

          rounded-[18px]

          bg-white

          border

          border-zinc-200

          text-zinc-700

          font-bold

          hover:bg-zinc-50

          transition

        ">

                      생태계 더 보기 →

                    </button>

                  </div>

                  {/* ecosystem cards */}

                  <div className="

        grid

        grid-cols-6

        gap-5

      ">

                    {[

                      {

                        title: 'kakao',

                        color: 'text-yellow-500',

                        bg: 'bg-white'

                      },

                      {

                        title: 'kakao i',

                        color: 'text-zinc-900',

                        bg: 'bg-white'

                      },

                      {

                        title: 'kanana ⦿',

                        color: 'text-zinc-900',

                        bg: 'bg-[#fff7fa]'

                      },

                      {

                        title: 'kakao cloud',

                        color: 'text-zinc-800',

                        bg: 'bg-white'

                      },

                      {

                        title: 'kakao mobility',

                        color: 'text-zinc-800',

                        bg: 'bg-white'

                      },

                      {

                        title: 'kakao enterprise',

                        color: 'text-zinc-800',

                        bg: 'bg-white'

                      }

                    ].map((item) => (

                      <div

                        key={item.title}

                        className={`

              h-[132px]

              rounded-[28px]

              border

              border-zinc-200

              ${item.bg}

              flex

              items-center

              justify-center

              hover:-translate-y-2

              hover:shadow-[0_20px_50px_rgba(0,0,0,0.06)]

              transition

              duration-500

            `}

                      >

                        <div className={`

  text-[26px]

  font-black

  tracking-tight

  ${item.color}

  leading-[1.15]

  text-center

  break-keep

`}>

                          {item.title}

                        </div>

                      </div>

                    ))}

                  </div>

                </div>

                {/* =========================

        USE CASES

    ========================= */}

                <div>

                  <div className="mb-12">

                    <h3 className="

          text-[38px]

          font-black

          tracking-tight

          text-zinc-950

          mb-3

        ">

                      MCP가 활용되는 예시

                    </h3>

                    <p className="

          text-zinc-500

          text-[18px]

        ">

                      MCP는 다양한 분야에서 AI의 가능성을 확장합니다.

                    </p>

                  </div>

                  {/* use case cards */}

                  <div className="

  grid

  grid-cols-6

  gap-5

">

                    {[

                      {

                        icon: '📅',

                        title: '업무 자동화',

                        desc: '캘린더, 메일, 문서 등 업무 도구와 연결'

                      },

                      {

                        icon: '💻',

                        title: '개발 생산성',

                        desc: '코드 저장소, 이슈 관리, 배포 도구 연결'

                      },

                      {

                        icon: '📊',

                        title: '데이터 분석',

                        desc: 'DB, 대시보드, 분석 도구와 실시간 연결'

                      },

                      {

                        icon: '🎬',

                        title: '콘텐츠 & 미디어',

                        desc: '이미지, 영상, 디자인 도구와 연결'

                      },

                      {

                        icon: '🏠',

                        title: '스마트홈 / IoT',

                        desc: '기기 제어 및 상태 모니터링'

                      },

                      {

                        icon: '🎧',

                        title: '고객 지원',

                        desc: 'CRM, 티켓, FAQ 시스템 연결'

                      }

                    ].map((item) => (

                      <div

                        key={item.title}

                        className="

        rounded-[28px]

  border

  border-zinc-200

  bg-white

  px-7

  py-6

  min-h-[170px]

  flex

  flex-col

  hover:-translate-y-2

  hover:shadow-[0_20px_50px_rgba(0,0,0,0.06)]

  transition

  duration-500

      "

                      >

                        {/* top row */}
                        <div className="
  flex
  items-center
  gap-4
  mb-5
">

                          {/* icon */}
                          <div className="
    w-[58px]
    h-[58px]

    rounded-[18px]

    bg-[#faf7ff]

    border
    border-violet-100

    flex
    items-center
    justify-center

    text-[26px]

    shrink-0
  ">
                            {item.icon}
                          </div>

                          {/* title */}
                          <div className="
    text-[18px]
    leading-[1.15]
    font-black
    tracking-tight
    text-zinc-950
  ">
                            {item.title}
                          </div>

                        </div>


                        {/* desc */}

                        <div className="

        text-[15px]

        leading-relaxed

        text-zinc-500

      ">

                          {item.desc}

                        </div>

                      </div>

                    ))}

                  </div>

                </div>

              </div>

            </section>



            <div className="mt-28">

              <Footer />

            </div>

          </div>
          )
}