import { ArrowLeft, Users, Target, TrendingUp } from 'lucide-react';
import Link from 'next/link';
import Spotlight from '@/components/Spotlight';

const caseData = {
  title: "The power of personalized fan support",
  category: "Odido & ISU World Short Track Championships 2024",
  description: "During the ISU World Short Track Championships 2024 in Rotterdam Ahoy, Odido, as the presenting partner, aimed to strengthen the connection between fans and athletes. In collaboration with House of Sports, we developed a campaign that gave fans a direct voice.",
  image: "/stadium/Shorttrack Rotterdam -1.jpg",
  heroImage: "/stadium/Shorttrack Rotterdam -2.jpg",
  additionalImages: [
    "/stadium/Shorttrack Rotterdam -3.jpg",
    "/stadium/Shorttrack Rotterdam -9.jpg",
    "/stadium/Shorttrack Rotterdam -6.jpg"
  ],
  videoUrl: undefined, // No video for this case
  metrics: [
    { icon: Users, value: "2500+", label: "Fan Messages" },
    { icon: Target, value: "90%", label: "Athlete Reach" },
    { icon: TrendingUp, value: "250%", label: "Fan Engagement" }
  ],
  challenge: "Through a special 'Toon je support' (Show Your Support) portal, fans could easily submit personal messages of good luck, optionally accompanied by a photo. These heartfelt messages then found their way live onto the ContentWall, which was displayed on screens in both the athletes' lounge and the catacomb tunnel leading to the short track rink, and was also prominently visible on the large screens in the stadium.",
  solution: "his campaign not only enhanced fan engagement but also activated Odido's brand in an authentic and effective way by forging a deep, personal connection between supporters and their heroes.",
};

export default function OdidoISUCasePage() {
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
              <img src={caseData.heroImage} alt={caseData.title} className="w-full h-full object-cover" />
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
            <h2 className="text-2xl md:text-3xl font-black mb-6">How fans could &apos;Show their support&apos;</h2>
            <div className="prose prose-lg max-w-none">
              <p className="text-main text-lg leading-relaxed">{caseData.challenge}</p>
            </div>
          </div>
        </div>
      </section>

      {/* Images Section - No video for this case */}
      {caseData.additionalImages && (
        <section className="mb-16">
          <div className="container mx-auto px-6">
            <div className="max-w-4xl mx-auto">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="group relative aspect-[16/9] rounded-lg overflow-hidden cursor-pointer">
                  <img src={caseData.additionalImages[0]} alt="Athletes Lounge" className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105" />
                  <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  <div className="absolute bottom-2 left-2 right-2 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <h3 className="font-bold text-sm">Athletes Lounge</h3>
                    <p className="text-xs">ContentWall Display</p>
                  </div>
                </div>
                <div className="group relative aspect-[16/9] rounded-lg overflow-hidden cursor-pointer">
                  <img src={caseData.additionalImages[1]} alt="Stadium Screens" className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105" />
                  <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  <div className="absolute bottom-2 left-2 right-2 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <h3 className="font-bold text-sm">Stadium Screens</h3>
                    <p className="text-xs">ContentWall Display</p>
                  </div>
                </div>
                <div className="group relative aspect-[16/9] rounded-lg overflow-hidden cursor-pointer">
                  <img src={caseData.additionalImages[2]} alt="Short Track Racing - Rotterdam Ahoy" className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105" />
                  <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  <div className="absolute bottom-2 left-2 right-2 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <h3 className="font-bold text-sm">Rotterdam Ahoy</h3>
                    <p className="text-xs">Short Track Championship</p>
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
            <h2 className="text-2xl md:text-3xl font-black mb-6">Enhanced engagement and brand activation</h2>
            <div className="prose prose-lg max-w-none">
              <p className="text-main text-lg leading-relaxed mb-4">{caseData.solution}</p>
            </div>
          </div>
        </div>
      </section>

      {/* Large Feature Image */}
      <section className="mb-16">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto">
            <div className="relative aspect-[21/9] rounded-xl overflow-hidden">
              <img src={caseData.image} alt={`${caseData.title} - Feature`} className="w-full h-full object-cover" />
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
