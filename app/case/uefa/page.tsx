import { ArrowLeft, Users, Target, TrendingUp } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import Spotlight from '@/components/Spotlight';

const caseData = {
  title: " Fan of the Match at the UEFA EUROPEAN CUP Finals",
  category: "UEFA",
  description: "At Fan of the Match, we know that the true spirit of football lies with its fans. That's why, in collaboration with UEFA, we set out to capture the incredible enthusiasm of supporters during the exciting 2024/2025 UEFA Finals. Our goal was simple: empower fans to cheer on their teams and offer a unique look into their personal matchday experience.",
  image: "https://images.ctfassets.net/ryywav90yxrs/4VDaCvbATIPSY3Q5kPjXYL/38aae3b8677b2891ade1d70769ecdced/header.png",
  heroImage: "https://images.ctfassets.net/ryywav90yxrs/4VDaCvbATIPSY3Q5kPjXYL/38aae3b8677b2891ade1d70769ecdced/header.png",
  additionalImages: [
    "/stadium/Euros1.jpg",
    "/stadium/Euros2.webp",
    "https://images.ctfassets.net/ryywav90yxrs/4VDaCvbATIPSY3Q5kPjXYL/38aae3b8677b2891ade1d70769ecdced/header.png"
  ],
  videoUrl: "https://youtu.be/a0aaE3OEqTM",
  metrics: [
    { icon: Users, value: "40,628", label: "Fan posts" },
    { icon: Target, value: "100K+", label: "Fans Engaged" },
    { icon: TrendingUp, value: "240,441", label: "Participants" }
  ],
  challenge: "For all three prestigious finals—the Champions League Final in Munich, the Europa League Final in Bilbao, and the Conference League Final in Wroclaw—we deployed our innovative FanCam technology. Each FanCam was specifically designed to fit the unique atmosphere of its respective final, perfectly building the tension and excitement leading up to kick-off.",
  solution: "Through the FanCam, we successfully highlighted how individual supporters embrace their unique fan journey, creating memorable content that truly showcases the magic of European club football. Beyond capturing captivating visuals, our solution also allows for valuable fan data collection, including opt-ins, providing crucial insights and opportunities for partners and sponsors. Discover how our cutting-edge solutions can boost engagement, enhance the fan experience, and provide valuable data for your organization.",
  results: "",
 };

export default function UefaCasePage() {
  return (
    <main className="min-h-screen bg-brand-bg">
      <Spotlight />
      {/* Header */}
      <header className="fixed top-0 left-0 right-0 z-50 bg-brand-bg/80 backdrop-blur-sm border-b border-brand-border">
        <div className="container mx-auto px-6 py-4">
          <Link href="/#cases" className="inline-flex items-center gap-2 text-brand-text hover:text-brand-primary transition-colors">
            <ArrowLeft className="w-5 h-5" />
            <span>All cases</span>
          </Link>
        </div>
      </header>

      {/* Hero Section */}
      <section className="pt-20 pb-12 overflow-hidden">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto text-center mb-12">
            <p className="font-bold text-lg mb-4" style={{ color: '#FF7A00' }}>{caseData.category}</p>
            <h1 className="text-4xl md:text-5xl font-black mb-6 leading-tight">{caseData.title}</h1>
            <p className="text-xl text-main max-w-3xl mx-auto mb-8">{caseData.description}</p>
          </div>
        </div>
      </section>

      {/* Hero Image */}
      <section className="mb-16">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto">
            <div className="relative aspect-[16/9] rounded-2xl overflow-hidden">
              <Image src={caseData.heroImage} alt={caseData.title} className="w-full h-full object-cover" width={1920} height={1080} />
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent"></div>
            </div>
          </div>
        </div>
      </section>

  {/* Metrics */}
      <section className="mb-16">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {caseData.metrics.map((metric, index) => (
                <div key={index} className="text-center">
                  <div className="inline-flex items-center justify-center w-14 h-14 bg-brand-primary/20 rounded-full mb-3">
                    <metric.icon className="w-7 h-7 text-brand-primary" />
                  </div>
                  <div className="text-2xl font-black text-brand-text-heading mb-1">{metric.value}</div>
                  <div className="text-inactive text-sm">{metric.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

    {/* Project Overview */}
      <section className="mb-16">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-2xl md:text-3xl font-black mb-6">Deploying FanCam technology across three finals</h2>
            <div className="prose prose-lg max-w-none">
              <p className="text-main text-lg leading-relaxed">{caseData.challenge}</p>
            </div>
          </div>
        </div>
      </section>

      {/* Video Section - Only show if videoUrl exists */}
      {caseData.videoUrl && (
        <section className="mb-16">
          <div className="container mx-auto px-6">
            <div className="max-w-6xl mx-auto">
              <div className="flex flex-col lg:flex-row gap-10 items-start justify-center">
                {/* Video Content */}
                <div className="flex-shrink-0">
                  <div className="relative aspect-[9/16] w-80 rounded-xl overflow-hidden bg-black">
                    <iframe
                      src={`${caseData.videoUrl.replace('youtu.be/', 'www.youtube.com/embed/').replace('watch?v=', 'embed/')}?controls=0&modestbranding=1&rel=0&showinfo=0&autoplay=1&loop=1&mute=1&playlist=${caseData.videoUrl.split('/').pop()?.split('?')[0]}`}
                      title={`${caseData.title} - Behind the Scenes`}
                      className="w-full h-full"
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                      allowFullScreen
                    />
                  </div>
                </div>
                {/* Cover Images */}
                <div className="flex-shrink-0">
                  <div className="grid grid-cols-1 gap-4 w-80">
                    <div className="group relative aspect-[16/9] rounded-lg overflow-hidden cursor-pointer">
                      <Image src="/stadium/Euros1.jpg" alt="UEFA Champions League Final - Munich" className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105" width={1920} height={1080} />
                      <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                      <div className="absolute bottom-2 left-2 right-2 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                        <h3 className="font-bold text-sm">Munich</h3>
                        <p className="text-xs">Champions League Final</p>
                      </div>
                    </div>
                    <div className="group relative aspect-[16/9] rounded-lg overflow-hidden cursor-pointer">
                      <Image src="/stadium/Euros2.webp" alt="UEFA Europa League Final - Bilbao" className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105" width={1920} height={1080} />
                      <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                      <div className="absolute bottom-2 left-2 right-2 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                        <h3 className="font-bold text-sm">Bilbao</h3>
                        <p className="text-xs">Europa League Final</p>
                      </div>
                    </div>
                    <div className="group relative aspect-[16/9] rounded-lg overflow-hidden cursor-pointer">
                      <Image src="/stadium/Euros1.jpg" alt="UEFA Conference League Final - Wroclaw" className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105" width={1920} height={1080} />
                      <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                      <div className="absolute bottom-2 left-2 right-2 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                        <h3 className="font-bold text-sm">Wroclaw</h3>
                        <p className="text-xs">Conference League Final</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      )}


      {/* BIG IDEA */}
      <section className="mb-16">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-2xl md:text-3xl font-black mb-6">Delivering memorable content and valuable fan data</h2>
            <div className="prose prose-lg max-w-none">
              <p className="text-main text-lg leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: caseData.solution }} />
              <p className="text-main text-lg leading-relaxed" dangerouslySetInnerHTML={{ __html: caseData.results }} />
            </div>
          </div>
        </div>
      </section>

      {/* Large Feature Image */}
      <section className="mb-16">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto">
            <div className="relative aspect-[21/9] rounded-xl overflow-hidden">
              <Image src={caseData.image} alt={`${caseData.title} - Feature`} className="w-full h-full object-cover" width={1920} height={1080} />
              <div className="absolute inset-0 bg-gradient-to-r from-black/30 via-transparent to-black/30"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="pb-16">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto text-center">
            <div className="bg-card-custom rounded-2xl p-8">
              <h2 className="text-2xl md:text-3xl font-black mb-4">
                Ready to ignite your fan engagement and create truly memorable experiences?
              </h2>
              <p className="text-main text-lg mb-6">
                Discover how Fan of the Match can elevate your next event!
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link href="/#contact" className="brand-button">
                  Start your project
                </Link>
                <Link href="/#cases" className="brand-button-secondary">
                  View more cases
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
