import Header from '../components/layout/Header'
import Footer from '../components/layout/Footer'
import Link from 'next/link'

export const metadata = {
  title: 'Kanana News',
  description: '카나나의 최신 소식과 제품 이야기'
}

export default function NewsPage() {

  const pressNews = [
    {
      image:'/news1.png',
      title:'카나나 AI, 추천 기능 대규모 업데이트',
      badge:'ZDNET',
      date:'2026.05.14'
    },
    {
      image:'/news2.png',
      title:'카카오 AI 전략의 중심, 카나나',
      badge:'TechCrunch',
      date:'2026.05.12'
    },
    {
      image:'/news3.png',
      title:'AI 일상 플랫폼 경쟁 본격화',
      badge:'Forbes',
      date:'2026.05.11'
    },
    {
      image:'/news4.png',
      title:'카나나, 사용자 경험 중심 강화',
      badge:'Bloter',
      date:'2026.05.09'
    }
  ]

  const stories = [
    {
      image:'/story1.png',
      title:'카나나와 함께한 나의 하루'
    },
    {
      image:'/story2.png',
      title:'약속 잡기가 쉬워졌어요'
    },
    {
      image:'/story3.png',
      title:'AI 활용으로 달라진 업무 루틴'
    }
  ]

  const lineup = [
    {
      image:'/lineup1.png',
      title:'Kanana Voice',
      desc:'대화만으로 완성되는 AI 비서'
    },
    {
      image:'/lineup2.png',
      title:'Kanana Studio',
      desc:'나만의 AI를 만드는 새로운 방법'
    },
    {
      image:'/lineup3.png',
      title:'Kanana Business',
      desc:'비즈니스를 위한 AI 솔루션'
    }
  ]

  const moments = [
    '/moment1.png',
    '/moment2.png',
    '/moment3.png',
    '/moment4.png',
    '/moment5.png',
    '/moment6.png'
  ]

  return (

    <div className="w-full min-h-screen bg-[#f6f6f3] overflow-hidden">

      <Header />

      <main>

      <section className="pt-32 pb-16 overflow-hidden">

  <div className="max-w-[1600px] mx-auto pl-10">

    {/* TITLE */}
    <div className="flex items-center justify-between mb-7 pr-10">

      <div className="flex items-end gap-5">

        <div className="text-[42px] leading-none font-black tracking-tight">
          Kanana News
        </div>

        <div className="text-zinc-400 text-[15px] font-medium mb-[2px]">
          카나나의 최신 소식과 다양한 이야기
        </div>

      </div>

      <button className="
        h-12
        px-6
        rounded-full
        bg-black
        text-white
        text-sm
        hover:scale-[1.03]
        transition
      ">
        뉴스레터 구독
      </button>

    </div>

    {/* TOP AREA */}
<div className="
  overflow-x-auto
  scrollbar-hide
">

  <div className="
    flex
    gap-6
    w-max
    pr-24
  ">

    {/* BIG CARD */}
    <div className="
      relative
      w-[620px]
      h-[320px]
      rounded-[34px]
      overflow-hidden
      group
      cursor-pointer
      flex-shrink-0
    ">

      <img
        src="/top1.png"
        className="
          absolute
          inset-0
          w-full
          h-full
          object-cover
          object-center
          scale-[1.18]
          group-hover:scale-[1.22]
          transition
          duration-1000
        "
      />

      <div className="
        absolute
        inset-0
        bg-gradient-to-t
        from-black/70
        to-transparent
      " />

      <div className="
        absolute
        bottom-0
        left-0
        p-8
      ">

        <div className="
          text-white
          text-[42px]
          leading-tight
          font-black
        ">
          카나나 AI
          업데이트 공개
        </div>

      </div>

    </div>

    {/* CARD 1 */}
    <div className="
      relative
      w-[340px]
      h-[320px]
      rounded-[34px]
      overflow-hidden
      group
      cursor-pointer
      flex-shrink-0
    ">

      <img
        src="/top-small1.png"
        className="
          absolute
          inset-0
          w-full
          h-full
          object-cover
          object-center
          group-hover:scale-[1.04]
          transition
          duration-1000
        "
      />

      <div className="
        absolute
        inset-0
        bg-gradient-to-t
        from-black/50
        to-transparent
      " />

      <div className="
        absolute
        bottom-0
        left-0
        p-7
      ">

        <div className="
          text-white
          text-[30px]
          leading-tight
          font-black
          max-w-[260px]
        ">
          친구와 함께 찾는
          새로운 장소
        </div>

      </div>

    </div>

    {/* CARD 2 */}
    <div className="
      relative
      w-[340px]
      h-[320px]
      rounded-[34px]
      overflow-hidden
      group
      cursor-pointer
      flex-shrink-0
    ">

      <img
        src="/top-small3.png"
        className="
          absolute
          inset-0
          w-full
          h-full
          object-cover
          object-center
          group-hover:scale-[1.04]
          transition
          duration-1000
        "
      />

      <div className="
        absolute
        inset-0
        bg-gradient-to-t
        from-black/50
        to-transparent
      " />

      <div className="
        absolute
        bottom-0
        left-0
        p-7
      ">

        <div className="
          text-white
          text-[30px]
          leading-tight
          font-black
          max-w-[260px]
        ">
          AI로 더 쉬워진
          여행 계획
        </div>

      </div>

    </div>

    {/* CARD 3 */}
    <div className="
      relative
      w-[340px]
      h-[320px]
      rounded-[34px]
      overflow-hidden
      group
      cursor-pointer
      flex-shrink-0
    ">

      <img
        src="/lineup2.png"
        className="
          absolute
          inset-0
          w-full
          h-full
          object-cover
          object-center
          group-hover:scale-[1.04]
          transition
          duration-1000
        "
      />

      <div className="
        absolute
        inset-0
        bg-gradient-to-t
        from-black/50
        to-transparent
      " />

      <div className="
        absolute
        bottom-0
        left-0
        p-7
      ">

        <div className="
          text-white
          text-[30px]
          leading-tight
          font-black
          max-w-[260px]
        ">
          카카오톡 번역으로
          더 편한 일본 여행
        </div>

      </div>

    </div>

    {/* CARD 4 */}
    <div className="
      relative
      w-[340px]
      h-[320px]
      rounded-[34px]
      overflow-hidden
      bg-[#ece6ff]
      p-8
      flex
      flex-col
      justify-between
      cursor-pointer
      flex-shrink-0
    ">

      <div>

        <div className="
          text-[38px]
          leading-[1.05]
          font-black
          mb-5
        ">
          오늘 가장
          많이 본
          카나나 기능
        </div>

        <div className="
          text-zinc-600
          leading-relaxed
        ">
          사용자들이 가장 많이
          탐색한 AI 기능들을
          만나보세요.
        </div>

      </div>

      <div className="
        w-14
        h-14
        rounded-full
        bg-black
        text-white
        flex
        items-center
        justify-center
        text-xl
      ">
        →
      </div>

    </div>

  </div>

</div>

  </div>

</section>

        {/* SECTION 1 : PRESS NEWS */}

        <section className="py-10 overflow-hidden">

          <div className="max-w-[1600px] mx-auto">

            <div className="flex items-end text-[15px] font-medium gap-5 px-10 mb-10">

              <div className="text-[42px] font-black tracking-tight">
                Kanana News
              </div>

              <div className="text-zinc-400">
                언론이 주목하는 카나나 이야기
              </div>

            </div>

            <div className="relative overflow-hidden">

              <div className="
                flex
                gap-7
                w-max
                [animation:marqueeRight_40s_linear_infinite]
                hover:[animation-play-state:paused]
              ">

                {pressNews.concat(pressNews).map((item,index)=>(

                  <div
                    key={index}
                    className="
                      relative
                      w-[430px]
                      h-[270px]
                      rounded-[34px]
                      overflow-hidden
                      flex-shrink-0
                      group
                      cursor-pointer
                    "
                  >

                    <img
                      src={item.image}
                      className="
                        absolute
                        inset-0
                        w-full
                        h-full
                        object-cover
                        group-hover:scale-[1.04]
                        transition
                        duration-1000
                      "
                    />

                    <div className="
                      absolute
                      inset-0
                      bg-gradient-to-t
                      from-black/80
                      via-black/20
                      to-transparent
                    " />

                    <div className="
                      absolute
                      inset-0
                      p-7
                      flex
                      flex-col
                      justify-end
                    ">

                      <div className="
                        inline-flex
                        px-4
                        py-1.5
                        rounded-full
                        bg-white/90
                        text-black
                        text-xs
                        font-bold
                        w-fit
                        mb-4
                      ">
                        {item.badge}
                      </div>

                      <div className="
                        text-white
                        text-[34px]
                        leading-tight
                        font-black
                        mb-3
                      ">
                        {item.title}
                      </div>

                      <div className="text-white/70 text-sm">
                        {item.date}
                      </div>

                    </div>

                  </div>

                ))}

              </div>

            </div>

          </div>

        </section>

        {/* SECTION 2 : STORIES */}

        <section className="py-10">

          <div className="max-w-[1600px] mx-auto px-10">

            <div className="flex items-center gap-5 mb-10">

              <div className="text-[42px] font-black tracking-tight">
                Kanana Stories
              </div>

              <div className="text-zinc-400">
                카나나와 함께하는 사람들의 이야기
              </div>

            </div>

            <div className="grid grid-cols-12 gap-8">

              <div className="
                col-span-7
                relative
                h-[620px]
                rounded-[42px]
                overflow-hidden
                group
                cursor-pointer
              ">

                <img
                  src={stories[0].image}
                  className="
                    absolute
                    inset-0
                    w-full
                    h-full
                    object-cover
                    group-hover:scale-[1.04]
                    transition
                    duration-1000
                  "
                />

                <div className="
                  absolute
                  inset-0
                  bg-gradient-to-t
                  from-black/70
                  via-black/10
                  to-transparent
                " />

                <div className="
                  absolute
                  bottom-0
                  p-12
                ">

                  <div className="text-white/70 mb-5">
                    사용자 스토리
                  </div>

                  <div className="
                    text-white
                    text-[68px]
                    leading-[1.02]
                    font-black
                  ">
                    {stories[0].title}
                  </div>

                </div>

              </div>

              <div className="
                col-span-5
                flex
                flex-col
                gap-8
              ">

                {stories.slice(1).map((item,index)=>(

                  <div
                    key={index}
                    className="
                      relative
                      h-[296px]
                      rounded-[36px]
                      overflow-hidden
                      group
                      cursor-pointer
                    "
                  >

                    <img
                      src={item.image}
                      className="
                        absolute
                        inset-0
                        w-full
                        h-full
                        object-cover
                        group-hover:scale-[1.04]
                        transition
                        duration-1000
                      "
                    />

                    <div className="
                      absolute
                      inset-0
                      bg-black/40
                    " />

                    <div className="
                      absolute
                      bottom-0
                      p-8
                    ">

                      <div className="
                        text-white
                        text-[38px]
                        leading-tight
                        font-black
                      ">
                        {item.title}
                      </div>

                    </div>

                  </div>

                ))}

              </div>

            </div>

          </div>

        </section>

        {/* SECTION 3 : LINEUP */}

        <section className="py-15">

          <div className="max-w-[1600px] mx-auto px-10">

            <div className="flex items-end gap-5 mb-10">

  <div className="

    text-[42px]

    font-black

    tracking-tight

    leading-none

  ">

    Kanana Line-up

  </div>

  <div className="

    text-zinc-400

    text-[15px]

    font-medium

    mb-[4px]

  ">

    더 넓어진 카나나 AI 생태계

  </div>

</div>

            <div className="grid grid-cols-3 gap-8">

              {lineup.map((item,index)=>(

                <div
                  key={index}
                  className="
                    rounded-[38px]
                    overflow-hidden
                    bg-white
                    group
                    cursor-pointer
                    hover:-translate-y-2
                    transition
                    duration-500
                  "
                >

                  <div className="h-[420px] overflow-hidden">

                    <img
                      src={item.image}
                      className="
                        w-full
                        h-full
                        object-cover
                        group-hover:scale-[1.05]
                        transition
                        duration-1000
                      "
                    />

                  </div>

                  <div className="p-8">

                    <div className="
                      text-[36px]
                      font-black
                      mb-4
                    ">
                      {item.title}
                    </div>

                    <div className="
                      text-zinc-500
                      leading-relaxed
                    ">
                      {item.desc}
                    </div>

                  </div>

                </div>

              ))}

            </div>

          </div>

        </section>

        {/* SECTION 4 : MOMENTS */}

<section className="py-10">

  <div className="max-w-[1600px] mx-auto px-10">

    <div className="flex items-end gap-5 mb-10">

      <div className="

        text-[42px]

        font-black

        tracking-tight

        leading-none

      ">

        Kanana Moments

      </div>

      <div className="

        text-zinc-400

        text-[15px]

        font-medium

        mb-[4px]

      ">

        AI가 스며든 다양한 순간들

      </div>

    </div>

    <div className="

      grid

      grid-cols-3

      gap-7

    ">

      {moments.map((item,index)=>(

        <div

          key={index}

          className="

            relative

            aspect-[1.25/1]

            rounded-[36px]

            overflow-hidden

            group

            cursor-pointer

            bg-zinc-200

          "

        >

          <img

            src={item}

            className="

              absolute

              inset-0

              w-full

              h-full

              object-cover

              object-center

              group-hover:scale-[1.04]

              transition

              duration-1000

            "

          />

          <div className="

            absolute

            inset-0

            bg-gradient-to-t

            from-black/20

            to-transparent

            opacity-0

            group-hover:opacity-100

            transition

            duration-500

          " />

        </div>

      ))}

    </div>

  </div>

</section>

      </main>

      <Footer />

    </div>

  )
}