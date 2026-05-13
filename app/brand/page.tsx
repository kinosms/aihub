'use client'

import Header from '../components/layout/Header'
import Footer from '../components/layout/Footer'
import { motion } from 'framer-motion'

export default function BrandPage() {

  return (
    <div className="w-full min-h-screen bg-white">

      <Header />

      {/* =========================
          HERO
      ========================= */}

      <section onClick={() => {

        document

          .getElementById('brand-message')

          ?.scrollIntoView({

            behavior: 'smooth'

          })

  }} className="relative h-screen overflow-hidden">

        {/* VIDEO */}
        <div className="absolute inset-0 overflow-hidden">

          <video
            autoPlay
            muted
            loop
            playsInline
            className="w-full h-full object-cover"
          >
            <source
              src="/brandhero.mp4"
              type="video/mp4"
            />
          </video>

        </div>

        {/* DARK OVERLAY */}
        <div className="
          absolute
          inset-0
          bg-black/40
        " />

        {/* CONTENT */}
        <div className="
          relative
          z-10
          h-full
          flex
          items-center
          justify-center
          px-6
        ">

          <div className="text-center text-white">

            <div className="
              text-sm
              tracking-[0.3em]
              text-white/70
              mb-6
            ">
              BRAND STORY
            </div>

            <h1 className="
              text-5xl
              lg:text-8xl
              font-black
              tracking-tight
              leading-[1.05]
              mb-8
            ">
              사람을 이해하는 AI,
              <br />
              kanana
            </h1>

            <p className="
              text-lg
              lg:text-2xl
              text-white/80
              leading-relaxed
              max-w-3xl
              mx-auto
            ">
              기술보다 먼저,
              사람의 감정과 연결을 고민합니다.
            </p>

          </div>

        </div>

      </section>



{/* =========================
    BRAND MESSAGE
========================= */}

<section

  id="brand-message"

  onClick={() => {

    document

      .getElementById('BI')

      ?.scrollIntoView({

        behavior: 'smooth'

      })

  }}

  className="

    relative

    overflow-hidden

    bg-[#fff8f6]

    py-40

    cursor-pointer

  "

>

  {/* Soft Glow */}
  <div className="
    absolute
    top-0
    left-1/2
    -translate-x-1/2
    w-[800px]
    h-[800px]
    rounded-full
    bg-gradient-to-br
    from-pink-200/30
    via-orange-100/20
    to-transparent
    blur-3xl
  " />

  <div className="
    relative
    z-10
    px-6
    lg:px-24
  ">

    {/* Small Label */}
    <div className="
      text-[12px]
      tracking-[0.28em]
      text-pink-400
      font-semibold
      mb-12
    ">
      BRAND STORY
    </div>

    {/* BIG MESSAGE */}
    <div className="
      flex
      flex-col
      gap-6
    ">

      <div className="flex flex-col gap-6">

  {/* line 1 */}
  <motion.div
    className="overflow-hidden"
    initial={{ opacity: 0, y: 80 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{
      once: true,
      amount: 0.25
    }}
    transition={{
      duration: 1.4,
      delay: 0.0,
      ease: [0.22, 1, 0.36, 1]
    }}
  >
    <div className="
      text-5xl
      lg:text-8xl
      font-black
      tracking-tight
      leading-[1.12]
      text-zinc-900
    ">
      카나나는
    </div>
  </motion.div>

  {/* line 2 */}
  <motion.div
    className="overflow-hidden"
    initial={{ opacity: 0, y: 80 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{
      once: true,
      amount: 0.25
    }}
    transition={{
      duration: 1.4,
      delay: 0.6,
      ease: [0.22, 1, 0.36, 1]
    }}
  >
    <div className="
      text-5xl
      lg:text-8xl
      font-black
      tracking-tight
      leading-[1.12]
      text-zinc-900
    ">
      AI를 만드는 것이 아니라,
    </div>
  </motion.div>

  {/* line 3 */}
  <motion.div
    className="overflow-hidden"
    initial={{ opacity: 0, y: 80 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{
      once: true,
      amount: 0.25
    }}
    transition={{
      duration: 1.4,
      delay: 1.2,
      ease: [0.22, 1, 0.36, 1]
    }}
  >
    <div className="
      text-5xl
      lg:text-8xl
      font-black
      tracking-tight
      leading-[1.12]
      bg-gradient-to-r
      from-pink-500
      to-orange-400
      bg-clip-text
      text-transparent
    ">
      사람과 사람 사이의
    </div>
  </motion.div>

  {/* line 4 */}
  <motion.div
    className="overflow-hidden"
    initial={{ opacity: 0, y: 80 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{
      once: true,
      amount: 0.25
    }}
    transition={{
      duration: 1.4,
      delay: 1.8,
      ease: [0.22, 1, 0.36, 1]
    }}
  >
    <div className="
      text-5xl
      lg:text-8xl
      font-black
      tracking-tight
      leading-[1.12]
      bg-gradient-to-r
      from-pink-500
      to-orange-400
      bg-clip-text
      text-transparent
    ">
      이해를 연결합니다.
    </div>
  </motion.div>

</div>

{/* Description */}
<motion.div
  initial={{ opacity: 0, y: 60 }}
  whileInView={{ opacity: 1, y: 0 }}
  viewport={{
    once: true,
    amount: 0.25
  }}
  transition={{
    duration: 1.5,
    delay: 2.5,
    ease: [0.22, 1, 0.36, 1]
  }}
  className="
    mt-20
    max-w-2xl
    text-lg
    lg:text-2xl
    leading-relaxed
    text-zinc-600
  "
>
  우리는 기술보다 감정의 흐름을 먼저 고민합니다.
  <br />
  더 자연스럽고, 더 따뜻한 연결을 위해.
</motion.div>

  </div>
  </div>

</section>




{/* =========================
    BRAND IDENTITY
========================= */}

<section id="BI" 
className="
  relative
  overflow-hidden
  bg-[#fff6f5]
  py-40
">

  {/* Soft Glow */}
  <div className="
    absolute
    right-0
    top-0
    w-[700px]
    h-[700px]
    rounded-full
    bg-gradient-to-br
    from-pink-200/30
    via-orange-100/20
    to-transparent
    blur-3xl
  " />

  <div className="
    relative
    z-10
    px-6
    lg:px-24
  ">

    {/* Label */}
    <div className="
      text-[12px]
      tracking-[0.28em]
      text-pink-400
      font-semibold
      mb-8
    ">
      BRAND IDENTITY
    </div>

    {/* Title */}
    <div className="
      mb-2
    ">

      <h2 className="
        text-5xl
        lg:text-7xl
        font-black
        tracking-tight
        leading-[1.05]
        mb-6
      ">
        BI <span className="text-pink-500">소개</span>
      </h2>

      <p className="
        text-lg
        lg:text-2xl
        text-zinc-600
        leading-relaxed
        max-w-2xl
      ">
        사람과 사람,
        사람과 AI를 연결하는
        <br />
        카나나의 아이덴티티를 상징합니다.
      </p>

    </div>

    {/* CONTENT */}
    <div className="
      grid
      lg:grid-cols-2
      gap-20
      items-center
    ">

      {/* LEFT VIDEO */}
      <div className="
        relative
        h-[400px]
        rounded-[40px]
        overflow-hidden
        bg-white/40
        backdrop-blur
        border
        border-white/40
        shadow-[0_20px_80px_rgba(255,120,180,0.12)]
      ">

        <video
          autoPlay
          muted
          loop
          playsInline
          className="
            w-full
            object-cover
            h-full
          "
        >
          <source
            src="/BI.mp4"
            type="video/mp4"
          />
        </video>

      </div>

      {/* RIGHT ITEMS */}
      <div className="flex flex-col gap-8">

        {/* item */}
        <motion.div
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{
            once: true,
            amount: 0.2
          }}
          transition={{
            duration: 1.2,
            ease: [0.22, 1, 0.36, 1]
          }}
          className="
            flex
            gap-8
            pb-10
            border-b
            border-zinc-200
          "
        >

          <div className="
            w-20
            h-20
            rounded-full
            bg-gradient-to-br
            from-pink-400
            to-orange-300
            flex
            items-center
            justify-center
            text-white
            text-3xl
            shrink-0
            shadow-[0_10px_40px_rgba(255,120,180,0.25)]
          ">
            ⟡
          </div>

          <div>

            <div className="
              text-2xl
              font-bold
              text-pink-500
              mb-3
            ">
              연결 (Connection)
            </div>

            <div className="
              text-lg
              leading-relaxed
              text-zinc-600
            ">
              사람과 AI,
              그리고 사람과 사람을 잇는
              연결을 의미합니다.
            </div>

          </div>

        </motion.div>

        {/* item */}
        <motion.div
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{
            once: true,
            amount: 0.2
          }}
          transition={{
            duration: 1.2,
            delay: 0.3,
            ease: [0.22, 1, 0.36, 1]
          }}
          className="
            flex
            gap-8
            pb-10
            border-b
            border-zinc-200
          "
        >

          <div className="
            w-20
            h-20
            rounded-full
            bg-gradient-to-br
            from-pink-400
            to-orange-300
            flex
            items-center
            justify-center
            text-white
            text-3xl
            shrink-0
            shadow-[0_10px_40px_rgba(255,120,180,0.25)]
          ">
            ♡
          </div>

          <div>

            <div className="
              text-2xl
              font-bold
              text-pink-500
              mb-3
            ">
              이해 (Understanding)
            </div>

            <div className="
              text-lg
              leading-relaxed
              text-zinc-600
            ">
              데이터를 넘어
              감정과 맥락까지 이해하는
              경험을 추구합니다.
            </div>

          </div>

        </motion.div>

        {/* item */}
        <motion.div
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{
            once: true,
            amount: 0.2
          }}
          transition={{
            duration: 1.2,
            delay: 0.6,
            ease: [0.22, 1, 0.36, 1]
          }}
          className="
            flex
            gap-8
          "
        >

          <div className="
            w-20
            h-20
            rounded-full
            bg-gradient-to-br
            from-pink-400
            to-orange-300
            flex
            items-center
            justify-center
            text-white
            text-3xl
            shrink-0
            shadow-[0_10px_40px_rgba(255,120,180,0.25)]
          ">
            ✦
          </div>

          <div>

            <div className="
              text-2xl
              font-bold
              text-pink-500
              mb-3
            ">
              신뢰 (Trust)
            </div>

            <div className="
              text-lg
              leading-relaxed
              text-zinc-600
            ">
              기술과 윤리를 기반으로
              신뢰할 수 있는 AI 경험을 제공합니다.
            </div>

          </div>

        </motion.div>

      </div>

    </div>

  </div>

</section>

      <Footer />

    </div>
  )
}