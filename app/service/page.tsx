'use client'

import { useState, useEffect } from 'react'
import Header from '../components/layout/Header'
import Footer from '../components/layout/Footer'

const templateSteps = [
  {
    label: 'STEP 01',
    title: '이미지 넣기',
    desc: '사용자가 원하는 사진 한 장을 선택합니다. 인물 사진, 여행 사진, 반려동물 사진처럼 어떤 이미지든 템플릿의 시작점이 됩니다.',
    image: '/template-step1.png',
    button: '이미지 넣기'
  },
  {
    label: 'STEP 02',
    title: '분위기 분석',
    desc: '카나나 템플릿이 이미지 속 인물, 배경, 색감, 계절감과 분위기를 읽어 영상에 어울리는 연출 방향을 잡습니다.',
    image: '/template-step2.png',
    button: '분위기 분석'
  },
  {
    label: 'STEP 03',
    title: '영상 만들기',
    desc: '선택한 템플릿에 맞춰 카메라 움직임, 장면 전환, 빛 번짐, 꽃잎 같은 효과를 더해 정적인 이미지를 움직이는 영상으로 바꿉니다.',
    image: '/template-step3.png',
    button: '영상 만들기'
  },
  {
    label: 'STEP 04',
    title: '결과물 완성',
    desc: '완성된 영상은 숏폼에 어울리는 세로형 포맷으로 제공됩니다. 저장하거나 공유하기 좋은 형태로 바로 확인할 수 있습니다.',
    image: '/template-step4.png',
    button: '결과물 완성'
  }
]

export default function ServicePage() {

  return (

    <div className="w-full min-h-screen bg-white">

      <Header />

      {/* =========================
          SERVICE HERO
      ========================= */}

      <section className="relative h-[1200px] overflow-hidden bg-[#f7f4ee] pt-10">

        {/* BG LIGHT */}
        <div className="
          absolute
          -top-[260px]
          left-1/2
          -translate-x-1/2
          w-[1000px]
          h-[1000px]
          rounded-full
          bg-violet-200/20
          blur-3xl
        " />

        <div className="
          absolute
          bottom-[-200px]
          right-[-100px]
          w-[800px]
          h-[800px]
          rounded-full
          bg-pink-200/20
          blur-3xl
        " />

        <div className="
          relative
          z-10
          max-w-[1700px]
          mx-auto
          px-10
          grid
          grid-cols-12
          gap-10
          items-center
          min-h-screen
        ">

          {/* LEFT */}
          <div className="col-span-5">

            <div className="
              inline-flex
              items-center
              px-5
              py-2
              rounded-full
              bg-white/80
              backdrop-blur
              text-violet-600
              text-sm
              font-bold
              mb-8
            ">
              Kanana Template · AI Video
            </div>

            <h1 className="
              text-[88px]
              leading-[0.94]
              font-black
              tracking-tight
              text-zinc-950
              mb-8
            ">
              한 장의 이미지가
              <br />
              감성 숏폼이 되는
              <br />
              순간
            </h1>

            <p className="
              text-[21px]
              leading-relaxed
              text-zinc-500
              max-w-[540px]
              mb-10
            ">
              카나나 템플릿은 사진 한 장만으로
              분위기 있는 세로형 영상을 만들어주는
              AI 영상 제작 서비스입니다.
            </p>

            <div className="flex gap-4">

              <button onClick={()=>{

              document

                .getElementById('template-process')

                ?.scrollIntoView({

                  behavior:'smooth'

                })

            }} className="
                h-16

                px-10

                rounded-[22px]

                bg-white/10

                backdrop-blur-xl

                border

                border-white/20

                text-black

                text-[17px]

                font-semibold

                shadow-[0_10px_40px_rgba(0,0,0,0.18)]

                hover:bg-white/15

                hover:scale-[1.02]

                transition

                duration-300

              ">
                사용해보러 가기
              </button>

            </div>

          </div>

          {/* RIGHT VIDEO WALL */}
          <div className="
            col-span-7
            relative
            h-[960px]
          ">

            {[
              {
                src:'/service_video1.mp4',
                className:'left-[-20px] top-[70px] rotate-[-7deg] w-[220px]'
              },
              {
                src:'/service_video2.mp4',
                className:'left-[210px] top-[0px] rotate-[4deg] w-[260px]'
              },
              {
                src:'/service_video3.mp4',
                className:'left-[500px] top-[110px] rotate-[-3deg] w-[220px]'
              },
              {
                src:'/service_video4.mp4',
                className:'left-[100px] top-[380px] rotate-[6deg] w-[240px]'
              },
              {
                src:'/service_video5.mp4',
                className:'left-[380px] top-[380px] rotate-[-5deg] w-[260px]'
              },
              {
                src:'/service_video6.mp4',
                className:'left-[700px] top-[450px] rotate-[5deg] w-[200px]'
              },
              {
                src:'/service_video8.mp4',
                className:'left-[760px] top-[90px] rotate-[8deg] w-[190px]'
              },
            ].map((item,index)=>(

              <div
                key={index}
                className={`
                  absolute
                  aspect-[9/16]
                  rounded-[38px]
                  overflow-hidden
                  shadow-[0_30px_80px_rgba(0,0,0,0.16)]
                  ring-1
                  ring-black/5
                  bg-zinc-200
                  group
                  cursor-pointer
                  ${item.className}
                `}
              >

                <video
                  autoPlay
                  muted
                  loop
                  playsInline
                  className="
                    w-full
                    h-full
                    object-cover
                    group-hover:scale-[1.04]
                    transition
                    duration-700
                  "
                >
                  <source src={item.src} type="video/mp4" />
                </video>

                <div className="
                  absolute
                  inset-0
                  bg-gradient-to-t
                  from-black/20
                  via-transparent
                  to-white/10
                  pointer-events-none
                " />

              </div>

            ))}

          </div>

        </div>

      </section>

      {/* TEMPLATE PROCESS SECTION */}
      <TemplateProcessSection />

      {/* TEMPLATE DEMO SECTION */}   

      <TemplateDemoSection />

      <Footer />

    </div>

  )
}

function TemplateProcessSection() {

  const [activeStep, setActiveStep] = useState(0)
  useEffect(() => {

  const interval = setInterval(() => {

    setActiveStep((prev) => (prev + 1) % templateSteps.length)

  }, 2000)

  return () => clearInterval(interval)

}, [])

  const goNext = () => {
    setActiveStep((prev) => (prev + 1) % templateSteps.length)
  }

  const step = templateSteps[activeStep]

  return (

    <section id="template-process" className="relative bg-white py-20 overflow-hidden">

      <div className="absolute top-20 left-1/2 -translate-x-1/2 w-[900px] h-[900px] rounded-full bg-violet-100/40 blur-3xl" />

      <div className="relative z-10 max-w-[1600px] mx-auto px-10">

        <div className="text-center mb-20">

          <div className="text-[13px] tracking-[0.32em] text-violet-500 font-bold mb-6">
            HOW IT WORKS
          </div>

          <h2 className="text-[56px] leading-tight font-black tracking-tight text-zinc-950">
            이미지가 영상이 되는 과정
          </h2>

          <p className="mt-5 text-zinc-500 text-lg">
            사진 한 장이 카나나 템플릿을 만나 감성 숏폼으로 완성됩니다.
          </p>

        </div>

        <div className="grid grid-cols-12 gap-10 items-stretch">

          {/* LEFT VISUAL */}
          <div className="col-span-7 relative h-[500px] rounded-[44px] overflow-hidden bg-[#f5f2ff] shadow-sm">

            <div
              key={activeStep}
              className="
                absolute
                inset-0
                animate-[slideUp_0.55s_ease-out]
              "
            >

              <img
                src={step.image}
                className="
                  absolute
                  inset-0
                  w-full
                  h-full
                  object-cover
                "
              />

              <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-white/10" />

              <div className="absolute left-10 bottom-10">

                <div className="inline-flex px-4 py-2 rounded-full bg-white/85 backdrop-blur text-sm font-bold text-violet-600 mb-5">
                  {step.label}
                </div>

                <div className="text-white text-[54px] leading-tight font-black">
                  {step.title}
                </div>

              </div>

            </div>

          </div>

          {/* RIGHT TEXT */}
<div
  onClick={goNext}
  className="
    col-span-5
    rounded-[44px]
    bg-[#f8f7fb]
    p-12
    flex
    flex-col
    justify-between
    cursor-pointer
    transition
    hover:bg-[#f3f1fa]
  "
>

  {/* TOP */}
  <div>

    <div className="text-violet-500 font-black tracking-[0.2em] text-sm mb-6">
      {step.label}
    </div>

    <div
      key={`title-${activeStep}`}
      className="animate-[slideUp_0.45s_ease-out]"
    >

      <h3 className="text-[54px] leading-[1.05] font-black tracking-tight text-zinc-950 mb-7">
        {step.title}
      </h3>

      <p className="text-[20px] leading-relaxed text-zinc-500 max-w-[520px]">
        {step.desc}
      </p>

      {/* LAST STEP BUTTON */}
      {activeStep === 3 && (

        <button
          onClick={(e)=>{
            e.stopPropagation()

            document
              .getElementById('template-demo')
              ?.scrollIntoView({
                behavior:'smooth'
              })
          }}
          className="

            mt-10

            h-14

            px-8

            rounded-full

            bg-gradient-to-r

            from-[#6f2cff]

            to-[#e233ff]

            text-white

            text-sm

            font-bold

            shadow-[0_10px_30px_rgba(170,80,255,0.35)]

            hover:scale-[1.03]

            transition

          "
        >
          데모 체험하기
        </button>

      )}

    </div>

  </div>

  {/* STEP INDICATOR */}
  <div className="flex items-center gap-3 mt-14">

    {templateSteps.map((_, index)=>(

      <div
        key={index}
        className={`
          h-[6px]
          rounded-full
          transition-all
          duration-500
          ${
            activeStep === index
              ? 'w-16 bg-violet-500'
              : 'w-6 bg-zinc-300'
          }
        `}
      />

    ))}

  </div>

</div>

          </div>

        </div>

    </section>



  )
}







function TemplateDemoSection() {

  const templates = [
    'Cherry Blossom',
    'Rain Mood',
    'Travel Film',
    'Vintage Diary',
    'Night Drive',

  ]

  const images = [
    '/demo-image1.png',
    '/demo-image2.png',
    '/demo-image3.png'
  ]

  const [selectedImage, setSelectedImage] = useState(images[0])
  const [selectedTemplate, setSelectedTemplate] = useState(templates[0])

  const [isGenerating, setIsGenerating] = useState(false)
  const [generated, setGenerated] = useState(false)

  const handleGenerate = () => {

    setGenerated(false)
    setIsGenerating(true)

    setTimeout(() => {

      setIsGenerating(false)
      setGenerated(true)

    }, 2500)

  }

  return (

    <section
      id="template-demo"
      className="
        relative
        overflow-hidden
        bg-[#faf7ff]
        py-28
      "
    >

      {/* glow */}
      <div className="
        absolute
        top-0
        left-1/2
        -translate-x-1/2
        w-[1000px]
        h-[1000px]
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
      ">

        {/* TITLE */}
        <div className="text-center mb-6">

          <div className="
            text-[13px]
            tracking-[0.32em]
            text-violet-500
            font-bold
            mb-6
          ">
            TEMPLATE DEMO
          </div>

          <h2 className="
            text-[58px]
            leading-tight
            font-black
            tracking-tight
            text-zinc-950
            mb-6
          ">
            사진 한 장으로 분위기를 바꿔보세요
          </h2>

        </div>

        {/* CONTENT */}
        {/* CONTENT */}
<div
  className="
    grid
    grid-cols-13
    gap-14
    items-center
  "
>

  {/* LEFT */}
  <div
    className="
      col-span-7
      rounded-[42px]
      bg-white
      p-3
      ml-9
      shadow-[0_10px_40px_rgba(120,80,255,0.08)]
    "
  >

    {/* IMAGE SELECT */}
<div className="mb-8">

  <div className="
    text-sm
    font-bold
    tracking-[0.18em]
    text-violet-500
    mb-5
  ">
    IMAGE
  </div>

  <div className="
    grid
    grid-cols-3
    gap-8
  ">

    {images.map((img)=>(

      <button
        key={img}
        onClick={()=>setSelectedImage(img)}
        className={`
          relative
          aspect-[9/16]
          rounded-[22px]
          overflow-hidden
          transition
          duration-300
          ${
            selectedImage === img
              ? 'ring-4 ring-violet-500 scale-[1.02]'
              : 'hover:scale-[1.01]'
          }
        `}
      >

        <img
          src={img}
          className="
            w-full
            h-full
            object-cover
          "
        />

      </button>

    ))}

  </div>

</div>

    {/* TEMPLATE */}
    <div className="mb-10">

      <div className="
        text-sm
        font-bold
        tracking-[0.18em]
        text-violet-500
        mb-3
      ">
        TEMPLATE
      </div>

      <div className="
        flex
        flex-wrap
        gap-3
      ">

        {templates.map((item)=>(

          <button
            key={item}
            onClick={()=>setSelectedTemplate(item)}
            className={`
              h-11
              px-5
              rounded-full
              text-sm
              font-semibold
              transition
              ${
                selectedTemplate === item
                  ? 'bg-black text-white'
                  : 'bg-[#f4f1fb] text-zinc-600 hover:bg-zinc-200'
              }
            `}
          >
            {item}
          </button>

        ))}

      </div>

    </div>

    {/* BUTTON */}
    <div className="flex justify-center">

      <button
        onClick={handleGenerate}
        className="
          h-16
          px-14
          rounded-[22px]

          bg-gradient-to-r
          from-[#6f2cff]
          to-[#e233ff]

          text-white
          text-[18px]
          font-bold

          shadow-[0_10px_30px_rgba(170,80,255,0.35)]

          hover:scale-[1.02]
          transition
        "
      >
        ✨ 영상 만들기
      </button>

    </div>

  </div>

  {/* RIGHT */}
  <div

  className="

    col-span-5

    flex

    justify-center

    items-start
    ml-20
    pt-[1px]

  "

>

    <div
      className="
        relative
        w-[340px]
        aspect-[9/16]

        rounded-[42px]
        bg-black
        overflow-hidden

        shadow-[0_30px_80px_rgba(0,0,0,0.18)]
      "
    >

      {/* idle */}
      {!isGenerating && !generated && (

        <div className="
          absolute
          inset-0
          flex
          flex-col
          items-center
          justify-center
          text-center
          text-white
          px-10
        ">

          <div className="
            text-[16px]
            mb-6
            opacity-40
          ">
            🎬
          </div>

          <div className="
            text-[30px]
            leading-tight
            font-black
            mb-5
          ">
            템플릿을 선택하고
            <br />
            영상을 만들어보세요
          </div>

          <div className="
            text-white/60
            text-[15px]
          ">
            AI가 감성 숏폼을 생성합니다
          </div>

        </div>

      )}

      {/* generating */}
      {isGenerating && (

        <div className="
          absolute
          inset-0
          flex
          flex-col
          items-center
          justify-center
          text-white
        ">

          <div className="
            w-14
            h-14
            rounded-full
            border-[3px]
            border-white/20
            border-t-white
            animate-spin
            mb-7
          " />

          <div className="
            text-[26px]
            font-black
            mb-3
          ">
            AI가 영상을 만들고 있어요
          </div>

          <div className="
            text-white/60
            text-sm
          ">
            {selectedTemplate} 스타일 적용 중...
          </div>

        </div>

      )}

      {/* RESULT */}
      {generated && (

        <video
          autoPlay
          muted
          loop
          playsInline
          className="
            absolute
            inset-0
            w-full
            h-full
            object-cover
          "
        >
          <source src="/demo-result.mp4" type="video/mp4" />
        </video>

      )}

    </div>

  </div>

</div>

      </div>

    </section>

  )
}