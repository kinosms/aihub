'use client'

import { useEffect, useRef, useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import Header from './components/layout/Header'
import Footer from './components/layout/Footer'
import HeroSection from './components/home/HeroSection'





export default function AIHubLandingPage() {
  const [loading, setLoading] = useState(false)
  const [showSummary, setShowSummary] = useState(false)
  const [finderStarted, setFinderStarted] = useState(false)
  const [questionSettled, setQuestionSettled] = useState(false)
  const [moveQuestion, setMoveQuestion] = useState(false)
  const [selectedOption, setSelectedOption] = useState<string | null>(null)
  const questions = [
    {
      question:
        '만약 한 가지 능력을 가질 수 있다면?',
      options: [
      {
        text: '무엇이든 바로 찾는 능력',
        image: '/persona/1-1.png',
      },
      {
        text: '아이디어가 끊이지 않는 능력',
        image: '/persona/1-2.png',
      },
      {
        text: '시간을 두 배로 활용하는 능력',
        image: '/persona/1-3.png',
      },
      {
        text: '누구와도 즐겁게 대화하는 능력',
        image: '/persona/1-4.png',
      },
    ],
    },

    {
      question:
        '당신만의 AI 조력자가 생긴다면?',
      options: [
        {
        text: '무엇이든 알려주는 안내자',
        image: '/persona/2-1.png',
        },
        {
        text: '목표를 챙겨주는 매니저',
        image: '/persona/2-2.png',
       },
       {
        text: '영감을 주는 크리에이터',
        image: '/persona/2-3.png',
        },
        {
        text: '언제든 이야기할 수 있는 친구',
        image: '/persona/2-4.png',
        },
      ]
    },

    {
      question:
        '새로운 세상을 탐험하게 된다면?',
      options: [
        {
        text: '구석구석 둘러본다',
        image: '/persona/3-1.png',
        },
        {
        text: '새로운 것을 배운다',
        image: '/persona/3-2.png',
       },
       {
        text: '사람들을 만난다',
        image: '/persona/3-3.png',
        },
        {
        text: '바로 도전한다',
        image: '/persona/3-4.png',
        },
      ]
    },

    {
      question:
        '당신을 가장 설레게 하는 순간은?',
      options: [
        {
        text: '새로운 발견',
        image: '/persona/4-1.png',
        },
        {
        text: '목표 달성',
        image: '/persona/4-2.png',
       },
       {
        text: '성장',
        image: '/persona/4-3.png',
        },
        {
        text: '좋은 사람과의 만남',
        image: '/persona/4-4.png',
        },
      ]
    }
  ]
  const [step, setStep] = useState(0)
  const [submitting, setSubmitting] = useState(false)
  const [messages, setMessages] = useState<any[]>([])
  const [currentQuestion, setCurrentQuestion] = useState(questions[0].question)
  const [showCenterQuestion] = useState(true)
  const [completed, setCompleted] = useState(false)
  const handleSummary = () => {
    setLoading(true)
    setTimeout(() => {
      setLoading(false)
      setShowSummary(true)
    }, 2200)
  }

  const handleSelect = (option: string) => {
    if (submitting) return
    setSelectedOption(option)
    setSubmitting(true)
    setMessages(prev => [
      ...prev,
      {
        type: 'question',
        text: currentQuestion
      },
      {
        type: 'answer',
        text: option
      }
    ])
    if (step < questions.length - 1) {
      setTimeout(() => {
        setCurrentQuestion(
          questions[step + 1].question
        )
        setStep(prev => prev + 1)
        setSubmitting(false)
      }, 500)
    } else {
      setTimeout(() => {
        setCompleted(true)
        setSubmitting(false)
      }, 700)
      setTimeout(() => {
        document
          .getElementById('persona-section')
          ?.scrollIntoView({
            behavior: 'smooth'
          })
      }, 2200)
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
    window.scrollTo(0, 0)
  }, [])


  useEffect(() => {

  if (!finderStarted || completed) return

  setQuestionSettled(false)
  setMoveQuestion(false)
  setSelectedOption(null)

  // 1.2초 동안 큰 글자로 그대로 보여줌
  const t1 = setTimeout(() => {
    setMoveQuestion(true)
  }, 1800)

  // 질문이 올라간 후 선택지 등장
  const t2 = setTimeout(() => {
    setQuestionSettled(true)
  }, 2800)

  return () => {
    clearTimeout(t1)
    clearTimeout(t2)
  }

}, [finderStarted, completed, step])

  
  


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

        {/* CENTER CONTENT */}
          <div
            className="
              absolute
              inset-0
              flex
              items-center
              justify-center
              px-10
              z-20
            "
          >
            <AnimatePresence mode="wait">
              {!finderStarted && !completed && (
                <motion.div
                  key="finder-intro"
                  initial={{ opacity: 0, y: 40, scale: 0.96 }}
                  animate={{ opacity: 1, y: 0, scale: 1 }}
                  exit={{ opacity: 0, x: -180, scale: 0.96 }}
                  transition={{ duration: 0.55 }}
                  className="text-center"
                >
                  <div className="text-sm font-bold tracking-[0.22em] text-violet-500 mb-6">
                    PERSONA FINDER
                  </div>

                  <h2 className="text-[64px] font-black tracking-tight text-zinc-900 leading-tight mb-8">
                    당신에게 어울리는
                    <br />
                    AI 경험을 찾아보세요
                  </h2>

                  <p className="text-zinc-500 text-[22px] leading-relaxed mb-12">
                    카나나와 짧은 대화를 나누며
                    <br />
                    당신의 취향과 성향을 발견해보세요
                  </p>

                  <button
                    onClick={() => setFinderStarted(true)}
                    className="
                      pointer-events-auto
                      px-10
                      py-5
                      rounded-full
                      bg-gradient-to-r
                      from-violet-600
                      to-fuchsia-500
                      text-white
                      text-[20px]
                      font-semibold
                      shadow-[0_28px_80px_rgba(124,58,237,0.28)]
                      hover:scale-[1.04]
                      transition
                    "
                  >
                    시작하기
                  </button>
                </motion.div>
              )}
              {finderStarted && !completed && (
                <motion.div
                  key={currentQuestion}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.35 }}
                  className="relative w-full h-full flex items-center justify-center"
                >
                  <motion.div
                    initial={{ scale: 1.22, y: 0 }}
                    animate={{
                      scale: moveQuestion ? 0.58 : 1.22,
                      y: moveQuestion ? -320 : 0,
                    }}
                    transition={{
                      duration: 1.5,
                      ease: [0.22, 1, 0.36, 1],
                    }}
                    className="
                      absolute
                      text-center
                      text-[64px]
                      font-black
                      leading-[1.15]
                      tracking-tight
                      text-zinc-900
                      whitespace-pre-line
                    "
                  >
                    {currentQuestion.split(' ').map((word, index) => (
                      <motion.span
                        key={index}
                        initial={{
                          opacity: 0,
                          y: 18,
                          filter: 'blur(8px)',
                        }}
                        animate={{
                          opacity: 1,
                          y: 0,
                          filter: 'blur(0px)',
                        }}
                        transition={{
                          delay: index * 0.12,
                          duration: 0.35,
                        }}
                        className="inline-block mr-3"
                      >
                        {word}
                      </motion.span>
                    ))}
                  </motion.div>

                  <AnimatePresence>
                    {questionSettled && (
                      <motion.div
                        key={`options-${step}`}
                        initial={{ opacity: 0, y: 90, scale: 0.95 }}
                        animate={{ opacity: 1, y: 70, scale: 1 }}
                        exit={{ opacity: 0, y: 110, scale: 0.96 }}
                        transition={{ duration: 0.5, ease: 'easeOut' }}
                        className="
                          grid
                          grid-cols-2
                          gap-6
                          w-full
                          max-w-[1180px]
                          mx-auto
                        "
                      >
                        {questions[step].options.map((option, index) => {
                          const optionText =
                            typeof option === 'string' ? option : option.text

                          const optionImage =
                            typeof option === 'string' ? null : option.image

                          const isSelected = selectedOption === optionText

                          return (
                            <motion.button
                              key={index}
                                initial={{
                                opacity: 0,
                                y: 40,
                                scale: 0.94,
                              }}
                              animate={{
                                opacity: 1,
                                y: 0,
                                scale: 1,
                              }}
                              transition={{
                                delay: index * 0.12,
                                duration: 0.45,
                                ease: 'easeOut',
                              }}
                              onClick={() => handleSelect(optionText)}
                              disabled={submitting}
                              className={`
                                group
                                pointer-events-auto
                                relative
                                h-[320px]
                                overflow-hidden
                                rounded-[30px]
                                bg-zinc-900
                                text-left
                                shadow-[0_18px_60px_rgba(0,0,0,0.12)]
                                transition-all
                                duration-300
                                hover:scale-[1.04]
                                hover:shadow-[0_26px_90px_rgba(124,58,237,0.22)]
                                disabled:cursor-default
                                ${isSelected
                                  ? 'ring-4 ring-violet-500 scale-[1.03]'
                                  : 'ring-1 ring-black/5'
                                }
                              `}
                            >
                              {optionImage ? (
                                <img
                                  src={optionImage}
                                  alt={optionText}
                                  className="
                                    absolute
                                    inset-0
                                    w-full
                                    h-full
                                    object-cover
                                    transition
                                    duration-700
                                    group-hover:scale-[1.06]
                                  "
                                />
                              ) : (
                                <div className="absolute inset-0 bg-gradient-to-br from-violet-500 to-fuchsia-500" />
                              )}

                              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/28 to-transparent" />

                              <div
                                className="
                                  absolute
                                  left-7
                                  bottom-7
                                  right-7
                                  z-10
                                  text-white
                                  text-[27px]
                                  font-black
                                  leading-tight
                                  drop-shadow-[0_2px_10px_rgba(0,0,0,0.55)]
                                "
                              >
                                {optionText}
                              </div>

                              {isSelected && (
                                <motion.div
                                  initial={{ opacity: 0, scale: 0.5 }}
                                  animate={{ opacity: 1, scale: 1 }}
                                  className="
                                    absolute
                                    right-6
                                    top-6
                                    z-20
                                    w-14
                                    h-14
                                    rounded-full
                                    bg-violet-600
                                    text-white
                                    flex
                                    items-center
                                    justify-center
                                    text-3xl
                                    font-black
                                    shadow-[0_16px_40px_rgba(124,58,237,0.45)]
                                  "
                                >
                                  ✓
                                </motion.div>
                              )}
                            </motion.button>
                          )
                        })}
                      </motion.div>
                    )}
                  </AnimatePresence>
                </motion.div>
              )}
              {completed && (
                <motion.div
                  key="finder-completed"
                  initial={{ opacity: 0, y: 40, scale: 0.96 }}
                  animate={{ opacity: 1, y: 0, scale: 1 }}
                  transition={{ duration: 0.6 }}
                  className="text-center"
                >
                  <div className="text-sm font-bold tracking-[0.22em] text-violet-500 mb-6">
                    PERSONA FOUND
                  </div>
                  <div
                    className="
                      text-[72px]
                      font-black
                      tracking-tight
                      text-zinc-900
                      mb-8
                    "
                  >
                    당신의 페르소나를 찾았어요
                  </div>
                  <div className="text-zinc-500 text-2xl leading-relaxed mb-12">
                    카나나가 당신에게 어울리는
                    <br />
                    AI 경험을 준비했어요
                  </div>
                  <div className="flex justify-center gap-4">
                    <button
                      onClick={() => {
                        setMessages([])
                        setStep(0)
                        setCurrentQuestion(questions[0].question)
                        setCompleted(false)
                        setSubmitting(false)
                        setFinderStarted(false)
                      }}
                      className="
                        pointer-events-auto
                        px-8
                        py-4
                        rounded-full
                        bg-white
                        border
                        border-zinc-200
                        text-zinc-900
                        text-lg
                        font-semibold
                        hover:scale-[1.04]
                        transition
                      "
                    >
                      다시 해보기
                    </button>
                    <button
                      onClick={() => {
                        document
                          .getElementById('persona-section')
                          ?.scrollIntoView({ behavior: 'smooth' })
                      }}
                      className="
                        pointer-events-auto
                        px-8
                        py-4
                        rounded-full
                        bg-gradient-to-r
                        from-violet-600
                        to-fuchsia-500
                        text-white
                        text-lg
                        font-semibold
                        shadow-[0_24px_70px_rgba(124,58,237,0.25)]
                        hover:scale-[1.04]
                        transition
                      "
                    >
                      추천 서비스 보기
                    </button>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
      </section>




      {/* Persona Result / Service Preview */}
      <section
        id="persona-section"
        className="w-full bg-white py-16 overflow-hidden"
      >
        <div className="max-w-[1500px] mx-auto px-10">
          <div className="text-center mb-8">
            <div className="text-[15px] font-bold tracking-[0.2em] text-violet-500 mb-6">
              AI by Persona
            </div>
          </div>
          <div className="flex justify-center">
            <motion.div
              initial={{ opacity: 0, y: 40, scale: 0.96 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              viewport={{ once: true, amount: 0.35 }}
              transition={{ duration: 0.7, ease: 'easeOut' }}
              onClick={() => {
                document
                  .getElementById('scenario-section')
                  ?.scrollIntoView({
                    behavior: 'smooth'
                  })
              }}
              className="
                group
                relative
                w-full
                max-w-[980px]
                aspect-[3/2]
                rounded-[42px]
                overflow-hidden
                cursor-pointer
                bg-zinc-100
                shadow-[0_40px_120px_rgba(0,0,0,0.10)]
                border
                border-zinc-100
              "
            >
              <video
                src="/persona_videos/persona_explorer.mp4"
                autoPlay
                muted
                loop
                playsInline
                preload="auto"
                className="
                  absolute
                  inset-0
                  w-full
                  h-full
                  object-cover
                  transition
                  duration-700
                  group-hover:scale-[1.03]
                "
              />
              <div
                className="
                  absolute
                  inset-0
                  bg-gradient-to-r
                  from-white/85
                  via-white/35
                  to-transparent
                "
              />
              <div
                className="
                  absolute
                  left-12
                  top-12
                  z-10
                "
              >

                <h3 className="text-[58px] font-black leading-tight tracking-tight text-zinc-900 mb-5">
                  취향 탐험가
                </h3>
                <p className="text-[20px] leading-relaxed text-zinc-600 max-w-[390px]">
                  새로운 경험과 정보를 발견하는 순간에<br /> 가장 즐거움을 느끼는 타입이에요.
                </p>
              </div>

              {/* AI ASSIST CARD - DOT EXPANDS TO RIGHT */}
              <div
                className="
                  absolute
                  left-12
                  bottom-12
                  z-10
                  w-[330px]
                  h-[110px]
                  pointer-events-none
                "
              >
                {/* 점에서 오른쪽으로 자라는 카드 */}
                <motion.div
                  initial={{
                    opacity: 0,
                    scaleX: 0,
                    scaleY: 0.28,
                  }}
                  whileInView={{
                    opacity: 1,
                    scaleX: 1,
                    scaleY: 1,
                  }}
                  transition={{
                    delay: 1.0,
                    duration: 0.75,
                    ease: [0.22, 1, 0.36, 1],
                  }}
                  style={{
                    transformOrigin: 'left bottom',
                  }}
                  className="
                    absolute
                    left-0
                    bottom-0
                    w-[310px]
                    h-[96px]
                    rounded-[28px]
                    bg-white/88
                    backdrop-blur-xl
                    border
                    border-white/70
                    shadow-[0_24px_70px_rgba(124,58,237,0.16),0_0_34px_rgba(168,85,247,0.16)]
                    overflow-hidden
                  "
                >
                  {/* 빛이 한번 지나감 */}
                  <motion.div
                    initial={{ opacity: 0, x: -80 }}
                    whileInView={{ opacity: [0, 0.75, 0], x: 320 }}
                    viewport={{ once: true }}
                    transition={{
                      delay: 1.72,
                      duration: 0.85,
                      ease: 'easeOut',
                    }}
                    className="
                      absolute
                      top-0
                      bottom-0
                      borderRadius: 28,
                      w-20
                      bg-gradient-to-r
                      from-transparent
                      via-white/70
                      to-transparent
                      blur-sm
                    "
                  />

                  {/* 텍스트 */}
                  <motion.div
                    initial={{
                      opacity: 0,
                      y: 10,
                    }}
                    whileInView={{
                      opacity: 1,
                      y: 0,
                    }}
                    viewport={{ once: true }}
                    transition={{
                      delay: 2.15,
                      duration: 0.35,
                      ease: 'easeOut',
                    }}
                    className="relative z-10 px-7 py-5"
                  >
                    <div className="text-xs font-bold text-violet-500 mb-2">
                      카나나가 도와줄게요
                    </div>

                    <div className="text-zinc-900 font-semibold">
                      정보 탐색 · 장소 추천 · 일정 제안
                    </div>
                  </motion.div>
                </motion.div>
              </div>
              <div
                className="
                  absolute
                  right-10
                  bottom-10
                  z-10
                  w-14
                  h-14
                  rounded-full
                  bg-white/90
                  backdrop-blur
                  flex
                  items-center
                  justify-center
                  text-2xl
                  shadow-lg
                  group-hover:translate-x-1
                  transition
                "
              >
                →
              </div>
            </motion.div>
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
                  video: '/scenario_videos/search.mp4',
                  featureTitle: '발견',
                  featureDesc: '관심사에 맞는 콘텐츠와 트렌드를 발견해요.',
                  icon: '⌕'
                },
                {
                  time: 'PM 03:00',
                  title: '맛집과 동선 추천',
                  image: '/map.png',
                  video: '/scenario_videos/map.mp4',
                  featureTitle: '추천',
                  featureDesc: '나의 취향과 상황을 고려한 맞춤 추천을 받아요.',
                  icon: '⌖'
                },
                {
                  time: 'PM 06:20',
                  title: '카페에서 대화',
                  image: '/cafe.png',
                  video: '/scenario_videos/cafe.mp4',
                  featureTitle: '대화',
                  featureDesc: '자연스러운 대화로 궁금한 것을 물어보고 해결해요.',
                  icon: '💬'
                },
                {
                  time: 'PM 07:30',
                  title: '전시 & 공연 추천',
                  image: '/concert.png',
                  video: '/scenario_videos/concert.mp4',
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
                    {item.video ? (
                      <video
                        src={item.video}
                        autoPlay
                        muted
                        loop
                        playsInline
                        className="w-full h-full object-cover"
                      />
                    ) : (
                      <img
                        src={item.image}
                        className="w-full h-full object-cover"
                      />
                    )}
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
                  <motion.div
                  initial={{ scale: 1 }}
                  animate={{
                    scale: [1, 1.5, 1],
                    boxShadow: [
                      '0 1px 3px rgba(0,0,0,0.08)',
                      '0 24px 70px rgba(124,58,237,0.18)',
                      '0 1px 3px rgba(0,0,0,0.08)',
                    ],
                  }}
                  transition={{
                    delay: index * 0.35,
                    duration: 0.7,
                    ease: 'easeInOut',
                    repeat: Infinity,
                    repeatDelay: 2.2,
                  }}
                  className="
                    w-full
                    rounded-[26px]
                    border
                    border-zinc-200
                    bg-white
                    p-5
                    shadow-sm
                    min-h-[180px]
                    hover:scale-[1.2]
                    hover:shadow-[0_20px_60px_rgba(124,58,237,0.12)]
                    transition-all
                    duration-300
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
                  </motion.div>
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
                    대화를 완성 후 <br />대화 요약하기를 눌러주세요
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
