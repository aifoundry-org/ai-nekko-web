import Hero from '@/components/home/hero/main'
import PaperDiscussions from '@/components/home/paperDiscussions/main'
import AiAsASystem from '@/components/home/aiAsASystem/main'
import Marquee from '@/components/home/marquee/main'
import TheTeam from '@/components/home/theTeam/main'
import Faqs from '@/components/home/faqs/main'
import Footer from '@/components/home/footer/main'

export default function Page() {
  return (
    <main>
      <div className='pin-section'>
        <Hero />
        <PaperDiscussions />
      </div>
      <AiAsASystem />
      <Marquee />
      <TheTeam />
      <Faqs />
      <Footer />
    </main>
  );
}
