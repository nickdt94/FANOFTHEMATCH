import { ArrowLeft } from 'lucide-react';
import Link from 'next/link';
import Spotlight from '@/components/Spotlight';

const caseData = {
  title: "Pro League Hockey: Your Role in Victory!",
  category: "KNHB / PRO LEAGUE HOCKEY",
  description:
    "The Royal Dutch Hockey Association is proud to be one of the largest sports federations in the Netherlands, and our national teams have proven their place among the world's elite for years. For the exciting Pro League Hockey, we've formed a fantastic partnership with ONVZ, where entertainment and fan engagement are key pillars.",
  heroImage: "/stadium/Contentwall 1.png",
  additionalImages: [
    "/stadium/Contentwall 1.png"
  ],
  immersive:
    "AN IMMERSIVE PITCH-SIDE EXPERIENCE\nTogether with Goalden, we've put together a unique and tailor-made interactive program. With an energetic presenter on the field and among the crowd in the stands, and a DJ setting the perfect mood, we create a lively and atmospheric experience. This is your chance to actively participate in the match day!",
  quiz:
    "Test your knowledge of hockey and the players with the challenging Fan of the Match quiz. And be ready for the FanCam, because your enthusiasm for Orange is essential! Make some noise, cheer along, and encourage our heroes on their way to victory. Your passion makes the difference!",
  ctaTitle:
    "Ready to ignite your fan engagement and create truly memorable experiences?",
  ctaText:
    "Discover how Fan of the Match can elevate your next event!"
};

export default function ProLeagueHockeyCasePage() {
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
            <p className="font-bold text-lg mb-4 text-orange-500">{caseData.category}</p>
            <h1 className="text-4xl md:text-5xl font-black mb-6 leading-tight">{caseData.title}</h1>
            <p className="text-xl text-main max-w-3xl mx-auto mb-8">{caseData.description}</p>
          </div>
        </div>
      </section>

      {/* Hero Image */}
      <section className="mb-12">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto">
            <div className="relative aspect-[16/9] rounded-2xl overflow-hidden">
              <img src={caseData.heroImage} alt={caseData.title} className="w-full h-full object-cover" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Immersive Experience */}
      <section className="mb-12">
        <div className="container mx-auto px-6">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-2xl md:text-3xl font-black mb-4">AN IMMERSIVE PITCH-SIDE EXPERIENCE</h2>
            <div className="prose prose-lg max-w-none text-main">
              <p>{caseData.immersive}</p>
            </div>
          </div>
        </div>
      </section>

      {/* Quiz & FanCam */}
      <section className="mb-12">
        <div className="container mx-auto px-6">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-2xl md:text-3xl font-black mb-4">Fan of the Match Quiz & FanCam</h2>
            <div className="prose prose-lg max-w-none text-main">
              <p>{caseData.quiz}</p>
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
                {caseData.ctaTitle}
              </h2>
              <p className="text-main text-lg mb-6">
                {caseData.ctaText}
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
