'use client'

import { useEffect, useRef, useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import Header from './components/layout/Header'
import Footer from './components/layout/Footer'
import HeroSection from './components/home/HeroSection'





export default function AIHubLandingPage() {
  const [loading, setLoading] = useState(false)
  const [showSummary, setShowSummary] = useState(false)
  const questions = [

  '당신이 어떤 사람인지 궁금해요',

  '하루 중 가장 몰입되는 순간은 언제인가요?',

  '요즘 가장 자주 찾게 되는 건 무엇인가요?',

  '혼자 있는 시간이 더 편한가요,\n사람들과 어울리는 시간이 더 즐거운가요?'

]
  const [step, setStep] = useState(0)
  const [input, setInput] = useState('')
  const chatRef = useRef<HTMLDivElement>(null)
  const [submitting, setSubmitting] = useState(false)
  const [messages, setMessages] = useState<any[]>([])
  const [currentQuestion, setCurrentQuestion] = useState(questions[0])
  const [showCenterQuestion, setShowCenterQuestion] = useState(true)
  const [completed, setCompleted] = useState(false)
  const inputRef = useRef<HTMLInputElement>(null)
  const handleSummary = () => {

    setLoading(true)

    setTimeout(() => {

      setLoading(false)

      setShowSummary(true)

    }, 2200)

  }
const handleSubmit = () => {

  // 중복 입력 방지
  if (submitting) return

  const currentInput = input.trim()

  // 빈 입력 방지
  if (!currentInput) return

  setSubmitting(true)

  // 현재 질문 + 사용자 답변 저장
  setMessages(prev => [
    ...prev,
    {
      type: 'question',
      text: currentQuestion
    },
    {
      type: 'answer',
      text: currentInput
    }
  ])

  // 입력창 초기화
  setInput('')

  // 다음 질문 이동
  if (step < questions.length - 1) {

    setTimeout(() => {

      setCurrentQuestion(
        questions[step + 1]
      )

      setStep(prev => prev + 1)

      setSubmitting(false)

    }, 500)

  } else {

    setTimeout(() => {

  setCompleted(true)

  setSubmitting(false)

}, 700)

// 완료 메시지 충분히 보여준 뒤 이동

setTimeout(() => {

  document

    .getElementById('persona-section')

    ?.scrollIntoView({

      behavior: 'smooth'

    })

}, 2200)

// 초기화

setTimeout(() => {

  setMessages([])

  setStep(0)

  setCurrentQuestion(questions[0])

  setCompleted(false)

  setInput('')

}, 4200)

  }

}


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



useEffect(() => {

  if (chatRef.current) {

    chatRef.current.scrollTo({

      top: chatRef.current.scrollHeight,

      behavior: 'smooth'

    })

  }

}, [messages])



useEffect(() => {

  window.scrollTo(0, 0)

}, [])



  useEffect(() => {

  // 첫 진입시엔 포커스 금지

  if(step === 0 && messages.length === 0) return

  inputRef.current?.focus()

}, [step, messages])



  return (
    <div className="w-full min-h-screen bg-white text-zinc-900">

    <Header />
    <HeroSection />

      









<section
  id="persona-finder"
  className="
    relative
    h-screen
    bg-white
    overflow-hidden
  "
>

  {/* BACKGROUND */}
  <div className="absolute inset-0 overflow-hidden">

    <div
      className="
        absolute
        top-[-200px]
        left-[-100px]
        w-[500px]
        h-[500px]
        rounded-full
        bg-violet-100
        blur-[120px]
        opacity-70
      "
    />

    <div
      className="
        absolute
        bottom-[-200px]
        right-[-100px]
        w-[500px]
        h-[500px]
        rounded-full
        bg-fuchsia-100
        blur-[120px]
        opacity-70
      "
    />

  </div>

  {/* HEADER */}
  <div className="absolute top-[90px] left-1/2 -translate-x-1/2 z-20 text-center">

    <div className="text-sm font-bold tracking-[0.22em] text-violet-500 mb-5">
      PERSONA FINDER
    </div>

    <h2 className="text-[54px] font-black tracking-tight text-zinc-900 leading-tight mb-5">
      당신에게 어울리는
      <br />
      AI 경험을 찾아보세요
    </h2>

    <p className="text-zinc-500 text-lg leading-relaxed">
      카나나와 짧은 대화를 나누며
      당신의 취향과 성향을 발견해보세요
    </p>

  </div>

  {/* RIGHT CHAT HISTORY */}
  <div
    ref={chatRef}
    className="
      absolute
      right-[70px]
      top-[240px]
      w-[360px]
      h-[48vh]
      overflow-y-auto
      opacity-45
      pr-2
      z-0
      scrollbar-hide
    "
  >

    <div className="space-y-5">

      {messages


      .map((msg, index) => (

        <motion.div
          key={index}
          initial={{
            opacity: 0,
            x: msg.type === 'question' ? -20 : 20,
            y: 10
          }}
          animate={{
            opacity: 1,
            x: 0,
            y: 0
          }}
          transition={{
            duration: 0.45
          }}
          className={`
            flex
            ${msg.type === 'question'
              ? 'justify-start'
              : 'justify-end'}
          `}
        >

          <div
            className={`
              max-w-[85%]
              rounded-[24px]
              px-5
              py-4
              text-[15px]
              leading-[1.7]
              whitespace-pre-line
              shadow-sm
              backdrop-blur
              ${msg.type === 'question'
                ? 'bg-white border border-zinc-200 text-zinc-900'
                : 'bg-violet-600 text-white'}
            `}
          >

            {msg.type === 'question' && (

              <div className="text-[11px] font-bold text-violet-500 mb-2 tracking-[0.14em]">
                KANANA
              </div>

            )}

            {msg.text}

          </div>

        </motion.div>

      ))}

    </div>

  </div>

  {/* CENTER QUESTION */}
  <div
    className="
      absolute
      left-1/2
      top-1/2
      -translate-x-1/2
      -translate-y-1/2
      w-full
      px-10
      z-20
      pointer-events-none
    "
  >

    <AnimatePresence mode="wait">

      {!completed && showCenterQuestion && (

        <motion.div
          key={currentQuestion}
          initial={{
            opacity: 0,
            y: 50,
            scale: 0.96
          }}
          animate={{
            opacity: 1,
            y: 0,
            scale: 1
          }}
          exit={{
            opacity: 0,
            y: -50,
            scale: 0.96
          }}
          transition={{
            duration: 0.55
          }}
          className="
            text-center
            whitespace-pre-line
          "
        >

          <div
            className="
              text-[68px]
              font-black
              leading-[1.14]
              tracking-tight
              text-zinc-900
            "
          >
            {currentQuestion}
          </div>

        </motion.div>

      )}

      {completed && (

        <motion.div
          initial={{
            opacity: 0,
            scale: 0.96
          }}
          animate={{
            opacity: 1,
            scale: 1
          }}
          transition={{
            duration: 0.6
          }}
          className="text-center"
        >

          <div
            className="
              text-[72px]
              font-black
              tracking-tight
              text-zinc-900
              mb-6
            "
          >
            당신의 페르소나를 찾았어요
          </div>

          <div className="text-zinc-500 text-2xl leading-relaxed">
            카나나가 당신에게 어울리는
            <br />
            AI 경험을 준비했어요
          </div>

        </motion.div>

      )}

    </AnimatePresence>

  </div>

  {/* INPUT */}
  {!completed && (

    <div
      className="
        absolute
        bottom-[80px]
        left-1/2
        -translate-x-1/2
        w-[760px]
        z-30
      "
    >

      <div
        className="
          flex
          items-center
          gap-4
          rounded-full
          border
          border-zinc-200
          bg-white/90
          backdrop-blur-xl
          px-7
          py-5
          shadow-[0_25px_80px_rgba(0,0,0,0.08)]
        "
      >

        <input
          ref={inputRef}
          value={input}
          onChange={(e) => setInput(e.target.value)}
          onKeyDown={(e) => {

  // 한글 조합 중이면 무시

  if (e.nativeEvent.isComposing) return

  if (e.key === 'Enter') {

    e.preventDefault()

    handleSubmit()

  }

}}
          placeholder="당신의 이야기를 들려주세요"
          className="
            flex-1
            bg-transparent
            outline-none
            text-[18px]
            text-zinc-900
            placeholder:text-zinc-400
          "
        />

        <button
          onClick={handleSubmit}
          className="
            px-6
            py-3
            rounded-full
            bg-gradient-to-r
            from-violet-600
            to-fuchsia-500
            text-white
            font-semibold
            hover:scale-[1.03]
            transition
          "
        >
          입력
        </button>

      </div>

    </div>

  )}

</section>
































      {/* Persona Cards */}
     <section

        id="persona-section"

        className="max-w-7xl mx-auto px-6 py-21"

      >
        <div className="flex items-end justify-between">
          <div>
            <div className="text-sm font-semibold text-violet-600 mb-3">
              AI by Persona
            </div>

            <h2 className="text-4xl font-black tracking-tight mb-4">
              나에게 맞는 카나나 서비스
            </h2>

            <p className="text-zinc-600 text-lg">
              상황과 목적에 따라 다양한 카나나 서비스를 선택해보세요.
            </p>
          </div>
        </div>

        <div className="

          flex

          justify-center

          gap-24

          overflow-x-auto

          px-12

        ">

          {/* STUDENT PERSONA */}
          <div

  onClick={() => {

    document

      .getElementById('scenario-section')

      ?.scrollIntoView({

        behavior: 'smooth'

      })

  }}

  className="

    relative

    min-w-[980px]

    h-[720px]

    flex-shrink-0

    cursor-pointer

    transition

    hover:scale-[1.01]

  "

>

            {/* IMAGE */}
            <img
              src="/persona_student.png"
              className="
                absolute
                inset-0
                w-full
                h-full
                object-contain
              "
            />

            {/* FLOATING UI 1 */}
            <motion.div
              initial={{ opacity: 0, y: 18, scale: 0.96 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              transition={{
                opacity: {
                  duration: 0.45
                },
                y: {
                  duration: 4,
                  repeat: Infinity,
                  ease: "easeInOut"
                },
                rotate: {
                  duration: 4,
                  repeat: Infinity,
                  ease: "easeInOut"
                },
                scale: {
                  duration: 4,
                  repeat: Infinity,
                  ease: "easeInOut"
                }
              }}

              animate={{
                y: [0, -36, -36, -36, 0],
                rotate: [0, -5, -5, -5, 0],
                scale: [1, 1.04, 1.04, 1.04, 1]

              }}

              className="
                absolute
                top-[250px]
                left-[560px]  
                bg-cyan-50/90
                backdrop-blur-xl
                rounded-[28px]
                px-8
                py-7
                shadow-[0_30px_80px_rgba(124,58,237,0.18)]
                border
                border-violet-100
                z-20
              "
            >
              <div className="text-xs text-zinc-400 mb-1">
                오늘 일정
              </div>

              <div className="text-sm font-semibold">
                자료구조 복습
              </div>
            </motion.div>

            {/* FLOATING UI 2 */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              animate={{
                y: [0, 18, 18, 18, 0],
                rotate: [0, 2, 2, 2, 0]
              }}

              transition={{
                y: {
                  duration: 5,
                  repeat: Infinity,
                  ease: "easeInOut"
                },

                rotate: {
                  duration: 5,
                  repeat: Infinity,
                  ease: "easeInOut"

                },

                opacity: {
                  duration: 0.45

                },

                x: {
                  duration: 0.45
                }

              }}

              className="
                absolute
                top-[300px]
                left-[180px]
                bg-cyan-50/90
                backdrop-blur-xl
                rounded-[28px]
                px-8
                py-7
                shadow-[0_30px_80px_rgba(6,182,212,0.18)]
                border
                border-cyan-100
                z-20
              "
            >
              <div className="text-xs text-zinc-400 mb-1">
                AI 요약
              </div>

              <div className="text-sm font-semibold">
                핵심 개념 3개 정리 완료
              </div>
            </motion.div>

            {/* TEXT */}
            <div className="
              absolute
              left-4
              bottom-8
              z-10
            ">

              <div className="text-[45px] font-black mb-1">
                학생을 위한 AI
              </div>

              <div className="text-zinc-600 leading-relaxed">
                학습과 정리를 더 자연스럽게
              </div>

            </div>

          </div>

        </div>
      </section>




    {/* Service Curation Section */}
    <section id="scenario-section" className="w-full bg-white py-20 overflow-hidden">

  {/* MAIN LAYOUT */}
  <div
    className="
      max-w-[1500px]
      mx-auto
      px-10
      flex
      items-end
      justify-center
      gap-[70px]
    "
  >

    {/* LEFT AREA */}
    <div className="w-[660px] flex-shrink-0">

      {/* LABEL */}
      <div className="text-sm font-bold tracking-[0.2em] text-violet-500 mb-6">
        SCENARIO
      </div>

      {/* TITLE */}
      <h2
        className="
          text-[44px]
          leading-[1.08]
          tracking-tight
          font-black
          text-zinc-900
          mb-5
          max-w-[620px]
        "
      >
        취향탐험가 나나의 하루,
        <br />
        카나나와 함께 더 즐거워져요
      </h2>

      {/* DESCRIPTION */}
      <p
        className="
          text-[16px]
          leading-[1.7]
          text-zinc-500
          mb-16
          max-w-[570px]
        "
      >
        새로운 경험을 좋아하는 나나에게
        카나나는 일상 속 즐거운 순간을 더 특별하게 만들어줘요.
      </p>

      {/* TIMELINE + FEATURE FLOW */}
<div
  className="
    flex
    justify-between
    gap-6
    max-w-[980px]
  "
>

  {[
    {
      time: 'PM 02:30',
      title: '콘서트 정보 탐색',
      image: '/search.png',
      featureTitle: '발견',
      featureDesc: '관심사에 맞는 콘텐츠와 트렌드를 빠르게 발견해요.',
      icon: '⌕'
    },
    {
      time: 'PM 03:00',
      title: '맛집과 동선 추천',
      image: '/map.png',
      featureTitle: '추천',
      featureDesc: '나의 취향과 상황을 고려한 맞춤 추천을 받아요.',
      icon: '⌖'
    },
    {
      time: 'PM 06:20',
      title: '카페에서 대화',
      image: '/cafe.png',
      featureTitle: '대화',
      featureDesc: '자연스러운 대화로 궁금한 것을 물어보고 해결해요.',
      icon: '💬'
    },
    {
      time: 'PM 07:30',
      title: '전시 & 공연 추천',
      image: '/concert.png',
      featureTitle: '실행',
      featureDesc: '일정, 예약, 이동까지 한 번에 실행할 수 있어요.',
      icon: '♫'
    }
  ].map((item, index) => (

    <div
      key={index}
      className="
        relative
        w-[220px]
        flex
        flex-col
        items-center
      "
    >

      {/* LINE */}
      {index !== 3 && (
        <div
          className="
            absolute
            top-[58px]
            left-[105px]
            w-[70px]
            border-t-2
            border-dashed
            border-violet-300
          "
        />
      )}

      {/* IMAGE */}
      <div
        className="
          relative
          w-[118px]
          h-[118px]
          rounded-full
          overflow-hidden
          shadow-md
          mb-5
          transition-all
          duration-300
          hover:scale-[1.3]
          hover:shadow-[0_18px_50px_rgba(124,58,237,0.18)]
        "
      >
        <img
          src={item.image}
          className="w-full h-full object-cover"
        />
      </div>

      {/* TIME */}
      <div className="text-[15px] font-semibold text-violet-500 mb-3">
        {item.time}
      </div>

      {/* ACTION TITLE */}
      <div
        className="
          text-[18px]
          font-semibold
          text-zinc-900
          text-center
          leading-snug
          mb-8
        "
      >
        {item.title}
      </div>

      {/* FEATURE CARD */}
      <div
        className="
          w-full
          rounded-[26px]
          border
          border-zinc-200
          bg-white
          p-5
          shadow-sm
          min-h-[180px]
          transition-all
          duration-300
          hover:scale-[1.3]
          hover:shadow-[0_20px_60px_rgba(124,58,237,0.12)]
        "
      >

        {/* TOP */}
        <div className="flex items-center gap-3 mb-5">

          <div
            className="
              w-9
              h-9
              rounded-full
              bg-violet-100
              text-violet-600
              flex
              items-center
              justify-center
              text-sm
              flex-shrink-0
            "
          >
            {item.icon}
          </div>

          <div className="text-[20px] font-bold text-zinc-900">
            {item.featureTitle}
          </div>

        </div>

        {/* DESC */}
        <div
          className="
            text-[13px]
            leading-[1.65]
            text-zinc-500
          "
        >
          {item.featureDesc}
        </div>

      </div>

    </div>
  ))}
</div>

      
    </div>

    {/* PHONE MOCKUP */}
    <div className="flex-shrink-0">
      <div
        className="
          w-[360px]
          rounded-t-[42px]
          overflow-hidden
          shadow-[0_40px_120px_rgba(0,0,0,0.12)]
        "
      >
        <div
          className="
            h-[560px]
            relative
            overflow-hidden
            rounded-t-[42px]
          "
        >
          <img
            src="/persona_service.png"
            className="w-full h-full object-cover"
          />
        </div>
      </div>
    </div>
  </div>

  {/* CTA */}
  <div className="flex justify-center mt-12">

    <button

      onClick={() => {

      document

        .getElementById('demo-section')

        ?.scrollIntoView({

          behavior: 'smooth'

        })

    }}
      className="
        group
        inline-flex
        items-center
        gap-5
        px-8
        py-5
        rounded-full
        bg-gradient-to-r
        from-violet-600
        to-fuchsia-500
        text-white
        text-[18px]
        font-semibold
        shadow-[0_30px_80px_rgba(124,58,237,0.28)]
        hover:scale-[1.2]
        transition
      "
    >
      카나나 서비스 더 알아보기

      <div className="group-hover:translate-x-1 transition">
        →
      </div>

    </button>
  </div>

</section>














 {/* Interactive Demo Section */}
 
<section
  id="demo-section"
  className="
    relative
    overflow-hidden
    py-24
    bg-zinc-950
  "
>

  {/* BACKGROUND */}
  <div className="absolute inset-0 overflow-hidden">

    <div
      className="
        absolute
        top-[-200px]
        left-[-100px]
        w-[500px]
        h-[500px]
        rounded-full
        bg-violet-500/10
        blur-[120px]
      "
    />

    <div
      className="
        absolute
        bottom-[-200px]
        right-[-100px]
        w-[500px]
        h-[500px]
        rounded-full
        bg-fuchsia-500/10
        blur-[120px]
      "
    />

  </div>

  <div className="relative max-w-[1600px] mx-auto px-10">

    {/* HEADER */}
    <div className="text-center mb-10">

      <div className="text-sm font-semibold text-violet-400 mb-4">
        Interactive Demo
      </div>

      <h2 className="text-5xl font-black tracking-tight text-white mb-5">
        카나나 대화요약
      </h2>

      <p className="text-zinc-400 text-lg leading-relaxed">
        실제 대화를 기반으로
        AI가 핵심 내용을 정리하고 추천 결과를 요약해드립니다.
      </p>

    </div>

    {/* FLOW */}
    <div className="scale-[0.86] origin-top flex items-center justify-center gap-10">

      {/* INPUT */}
      <div
        className="
          w-[420px]
          aspect-[9/16]
          rounded-[36px]
          overflow-hidden
          shadow-[0_40px_120px_rgba(0,0,0,0.45)]
        "
      >

        <img
          src="/demo_input.png"
          className="w-full h-full object-cover"
        />
      </div>

      {/* BUTTON */}
      <div className="flex flex-col items-center">

        <button
          onClick={handleSummary}
          className="
            group
            px-10
            py-6
            rounded-full
            bg-gradient-to-r
            from-violet-500
            to-fuchsia-500
            text-white
            font-semibold
            shadow-[0_25px_80px_rgba(139,92,246,0.45)]
            hover:scale-[1.1]
            transition
          "
        >

          <div className="text-sm opacity-80 mb-1">
            AI Summary
          </div>

          <div className="flex items-center gap-2 text-[20px]">
            대화 요약하기

            <span className="group-hover:translate-x-1 transition">
              →
            </span>
          </div>
        </button>
      </div>

      {/* OUTPUT */}
      <div
        className="
          w-[420px]
          aspect-[9/16]
          rounded-[36px]
          overflow-hidden
          bg-white/5
          border
          border-white/10
          shadow-[0_40px_120px_rgba(0,0,0,0.45)]
          backdrop-blur
          relative
        "
      >

        {!showSummary && !loading && (

          <div
            className="
              absolute
              inset-0
              flex
              flex-col
              items-center
              justify-center
              text-center
              px-12
            "
          >

            <div className="text-2xl font-bold text-white mb-5">
              대화를 완성 후 <br/>대화 요약하기를 눌러주세요
            </div>

            <div className="text-zinc-400 leading-relaxed">
              카나나 AI가 대화 내용을 분석하고
              장소 추천, 일정, 후기 정보를
              한 번에 정리해드립니다.
            </div>

          </div>

        )}

        {loading && (

          <div
            className="
              absolute
              inset-0
              flex
              flex-col
              items-center
              justify-center
            "
          >

            <div
              className="
                w-14
                h-14
                rounded-full
                border-4
                border-white/10
                border-t-violet-400
                animate-spin
                mb-6
              "
            />

            <div className="text-zinc-300">
              카나나가 대화를 요약하고 있어요
            </div>

          </div>

        )}

        {showSummary && (

          <img
            src="/demo_output.png"
                className="

                  w-full

                  h-full

                  object-cover

                  cursor-pointer

                "

                onClick={() => setShowSummary(false)}
          />
        )}
      </div>
    </div>
  </div>
</section>

      {/* NEWS SECTION */}
<section className="bg-white py-28 overflow-hidden">

  <div className="max-w-[1600px] mx-auto">

    {/* TITLE */}
    <div className="text-center mb-20">

      <h2 className="text-[52px] font-black tracking-tight text-zinc-900 mb-4">
        카나나의 최신 소식
      </h2>

      <p className="text-zinc-500 text-lg">
        새로운 이야기와 다양한 소식을 만나보세요
      </p>

    </div>

    {/* ROW 1 */}
    <div className="mb-20 overflow-hidden">

      {/* LABEL */}
      <div className="flex items-center gap-5 px-10 mb-8">

        <div className="text-[36px] font-black text-zinc-900">
          Kanana Now
        </div>

        <div className="text-zinc-400">
          AI와 함께하는 더 나은 일상 이야기
        </div>

      </div>

      {/* FLOW */}
      <div className="relative overflow-hidden">

        <div
          className="

          flex

          gap-7

          w-max

          [animation:marqueeRight_45s_linear_infinite]

        "
        >

          {[
            {
              image: '/news1.png',
              badge: '사용자 스토리',
              title: '카나나와 함께한 나의 하루',
              date: '2024.05.20'
            },
            {
              image: '/news2.png',
              badge: 'AI 활용 팁',
              title: '일상을 바꾸는 카나나 활용 꿀팁 5',
              date: '2024.05.18'
            },
            {
              image: '/news3.png',
              badge: '이벤트',
              title: '카나나 런칭 기념 특별 이벤트',
              date: '2024.05.15'
            },
            {
              image: '/news4.png',
              badge: '카나나 업데이트',
              title: '더 똑똑해진 추천 기능 공개',
              date: '2024.05.10'
            },
            {
              image: '/news5.png',
              badge: '사용자 후기',
              title: '카나나 덕분에 약속 잡기가 쉬워졌어요',
              date: '2024.05.08'
            }
          ].concat([
            {
              image: '/news1.png',
              badge: '사용자 스토리',
              title: '카나나와 함께한 나의 하루',
              date: '2024.05.20'
            },
            {
              image: '/news2.png',
              badge: 'AI 활용 팁',
              title: '일상을 바꾸는 카나나 활용 꿀팁 5',
              date: '2024.05.18'
            },
            {
              image: '/news3.png',
              badge: '이벤트',
              title: '카나나 런칭 기념 특별 이벤트',
              date: '2024.05.15'
            }
          ]).map((item, index) => (

            <div
              key={index}
              className="
                relative
                w-[420px]
                h-[260px]
                rounded-[34px]
                overflow-hidden
                flex-shrink-0
                group
                cursor-pointer
              "
            >

              {/* IMAGE */}
              <img
                src={item.image}
                className="
                  absolute
                  inset-0
                  w-full
                  h-full
                  object-cover
                  group-hover:scale-[1.03]
                  transition
                  duration-700
                "
              />

              {/* OVERLAY */}
              <div
                className="
                  absolute
                  inset-0
                  bg-gradient-to-t
                  from-black/70
                  via-black/10
                  to-transparent
                "
              />

              {/* CONTENT */}
              <div className="absolute inset-0 p-7 flex flex-col justify-end">

                {/* BADGE */}
                <div
                  className="
                    inline-flex
                    items-center
                    px-4
                    py-1.5
                    rounded-full
                    bg-white/90
                    backdrop-blur
                    text-[13px]
                    font-semibold
                    text-zinc-900
                    mb-4
                    w-fit
                  "
                >
                  {item.badge}
                </div>

                {/* TITLE */}
                <div className="text-white text-[34px] leading-tight font-black mb-3">
                  {item.title}
                </div>

                {/* DATE */}
                <div className="text-white/70 text-sm">
                  {item.date}
                </div>

              </div>

            </div>

          ))}

        </div>

      </div>

    </div>

    {/* ROW 2 */}
    <div className="overflow-hidden">

      {/* LABEL */}
      <div className="flex items-center gap-5 px-10 mb-8">

        <div className="text-[36px] font-black text-zinc-900">
          Kanana Line-up
        </div>

        <div className="text-zinc-400">
          더 넓어진 카나나 생태계, 새로운 제품과 서비스를 소개합니다
        </div>

      </div>

      {/* FLOW */}
      <div className="relative overflow-hidden">

        <div
          className="
          flex
          gap-7
          w-max
          [animation:marqueeLeft_50s_linear_infinite]
        "
        >

          {[
            {
              image: '/lineup1.png',
              badge: 'Kanana Lite',
              title: '언제 어디서나 가볍게, 카나나 라이트',
              date: '2024.05.22'
            },
            {
              image: '/lineup2.png',
              badge: 'Kanana Studio',
              title: '나만의 AI를 만드는 새로운 방법',
              date: '2024.05.20'
            },
            {
              image: '/lineup3.png',
              badge: 'Kanana Voice',
              title: '대화로 완성되는 AI 비서',
              date: '2024.05.18'
            },
            {
              image: '/lineup4.png',
              badge: 'Kanana Business',
              title: '비즈니스를 위한 AI 솔루션',
              date: '2024.05.15'
            },
            {
              image: '/lineup5.png',
              badge: 'Kanana Kids',
              title: '아이들을 위한 새로운 AI 친구',
              date: '2024.05.12'
            }
          ].concat([
            {
              image: '/lineup1.png',
              badge: 'Kanana Lite',
              title: '언제 어디서나 가볍게, 카나나 라이트',
              date: '2024.05.22'
            },
            {
              image: '/lineup2.png',
              badge: 'Kanana Studio',
              title: '나만의 AI를 만드는 새로운 방법',
              date: '2024.05.20'
            },
            {
              image: '/lineup3.png',
              badge: 'Kanana Voice',
              title: '대화로 완성되는 AI 비서',
              date: '2024.05.18'
            }
          ]).map((item, index) => (

            <div
              key={index}
              className="
                relative
                w-[420px]
                h-[260px]
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
                  group-hover:scale-[1.03]
                  transition
                  duration-700
                "
              />

              <div
                className="
                  absolute
                  inset-0
                  bg-gradient-to-t
                  from-black/70
                  via-black/10
                  to-transparent
                "
              />

              <div className="absolute inset-0 p-7 flex flex-col justify-end">

                <div
                  className="
                    inline-flex
                    items-center
                    px-4
                    py-1.5
                    rounded-full
                    bg-white/90
                    backdrop-blur
                    text-[13px]
                    font-semibold
                    text-zinc-900
                    mb-4
                    w-fit
                  "
                >
                  {item.badge}
                </div>

                <div className="text-white text-[34px] leading-tight font-black mb-3">
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

  </div>


</section>

     <Footer />
    </div>
  )
}
