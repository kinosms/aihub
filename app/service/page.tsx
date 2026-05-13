import Header from '../components/layout/Header'
import Footer from '../components/layout/Footer'

export default function ServicePage() {
  return (
    <div className="w-full min-h-screen bg-white text-zinc-900">
      <Header />

      {/* SERVICE HERO */}
      <section className="relative h-screen overflow-hidden bg-zinc-950">
        <div className="relative z-10 h-full flex items-center px-6 lg:px-36">
          <div className="max-w-4xl text-white">
            <div className="text-sm tracking-[0.3em] text-white/60 mb-6">
              SERVICE
            </div>

            <h1 className="text-5xl lg:text-8xl font-black leading-[1.05] tracking-tight mb-8">
              일상과 업무에 스며드는
              <br />
              AI 서비스
            </h1>

            <p className="text-lg lg:text-2xl text-white/70 leading-relaxed max-w-2xl">
              카나나는 다양한 상황 속에서 사람의 맥락을 이해하고,
              더 자연스러운 선택과 소통을 돕습니다.
            </p>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}