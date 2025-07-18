import { ArrowLeft } from 'lucide-react';
import Link from 'next/link';
import Spotlight from '@/components/Spotlight';

export default function KNVBCasePage() {
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
            <p className="font-bold text-lg mb-4" style={{ color: '#FF7A00' }}>KNVB - Dutch Football Association</p>
            <h1 className="text-4xl md:text-5xl font-black mb-6 leading-tight">Igniting Orange Fever: KNVB Elevates Fan Experience with Fan of the Match</h1>
            <p className="text-xl text-main max-w-3xl mx-auto mb-8">
              The KNVB (Dutch Football Association) has successfully elevated its matchday experience by integrating Fan of the Match moments, creating a more interactive and engaging atmosphere for supporters. Through a dynamic combination of quizzing, the ContentWall, and the innovative FanCam, the KNVB is transforming passive spectators into active participants. This initiative serves a dual purpose: to entertain fans and to gather valuable audience data and opt-ins, making it highly attractive for sponsors like KPN.
            </p>
          </div>
        </div>
      </section>

      {/* Header Image above matchday block */}
      <section className="mb-12">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto">
            <div className="relative aspect-[16/9] rounded-2xl overflow-hidden">
              <img src="/KNVB/KNVBHEADER.webp" alt="KNVB Hero" className="w-full h-full object-cover" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Full Matchday Experience */}
      <section className="mb-16">
        <div className="container mx-auto px-6">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-2xl md:text-3xl font-black mb-6">A FULL MATCHDAY EXPERIENCE</h2>
            <p className="text-main text-lg leading-relaxed mb-4">
              The excitement builds even before kick-off with the use of the ContentWall and interactive polls. Fans can actively participate, for instance, by voting for their favorite songs, with the most requested tracks being played during the team's warm-up. This fosters a unique sense of involvement, making fans an integral part of the pre-match build-up.
            </p>
            <p className="text-main text-lg leading-relaxed mb-4">
              During halftime, the stadium buzzes with the KPN Fan of the Match Quiz. This engaging interactive experience, proudly sponsored by KPN, offers fans the chance to win incredible prizes, from brand new smartphones and tickets for the next match, to exclusive signed items. It's a thrilling opportunity for fans to test their knowledge and feel even closer to the action. Beyond the entertainment, this quiz is a prime example of how the KNVB can secure opt-ins for partners like KPN, demonstrating tangible value for sponsors.
            </p>
            <p className="text-main text-lg leading-relaxed">
              By embracing Fan of the Match, the KNVB is not just hosting football matches, but curating a truly immersive and unforgettable experience for its passionate fanbase.
            </p>
          </div>
        </div>
      </section>

      {/* Images Section - 1x1 images for KNVB1, KNVB2, KNVB3 under matchday block */}
      <section className="mb-16">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {["/KNVB/KNVB1.webp", "/KNVB/KNVB2.webp", "/KNVB/KNVB3.webp"].map((img, idx) => (
                <div key={idx} className="group relative aspect-square rounded-lg overflow-hidden cursor-pointer">
                  <img src={img} alt={`KNVB 1x1 ${idx + 1}`} className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105" />
                  <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Halftime Highlight & Value for Partners */}
      <section className="mb-16">
        <div className="container mx-auto px-6">
          <div className="max-w-3xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-xl font-black mb-4">The Halftime Highlight</h3>
              <p className="text-main leading-relaxed">
                The KPN Fan of the Match Quiz turns halftime into a thrilling, interactive event, offering fans the chance to win incredible prizes.
              </p>
            </div>
            <div>
              <h3 className="text-xl font-black mb-4">Value for Partners</h3>
              <p className="text-main leading-relaxed">
                This prime activation moment demonstrates tangible value for sponsors, securing valuable audience opt-ins and brand visibility.
              </p>
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
