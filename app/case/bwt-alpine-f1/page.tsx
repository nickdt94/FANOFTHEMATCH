import { ArrowLeft, Users, Target, TrendingUp } from 'lucide-react';
import Link from 'next/link';
import Spotlight from '@/components/Spotlight';

const caseData = {
  title: "Rush Racers: Fan-favorite racing game",
  category: "BWT Alpine F1 Team",
  description: "With the launch of their new RISE+ platform, Alpine set out to redefine how they connect with fans, reintroducing the fan-favorite racing game, Rush Racers, as a key interactive feature.",
  image: "https://a.storyblok.com/f/174314/1920x750/ddf73d2f55/header.png/m/1500x525/filters:format(webp):quality(80)",
  heroImage: "https://a.storyblok.com/f/174314/1920x750/ddf73d2f55/header.png/m/1500x525/filters:format(webp):quality(80)",
  additionalImages: [
    "https://a.storyblok.com/f/174314/1920x750/ddf73d2f55/header.png/m/800x0/filters:format(webp):quality(80)",
    "https://a.storyblok.com/f/174314/1920x750/ddf73d2f55/header.png/m/800x0/filters:format(webp):quality(80)",
    "https://a.storyblok.com/f/174314/1920x750/ddf73d2f55/header.png/m/800x0/filters:format(webp):quality(80)"
  ],
  videoUrl: undefined,
  metrics: [
    { icon: Users, value: "1M+", label: "RISE+ Users" },
    { icon: Target, value: "80%", label: "Retention Rate" },
    { icon: TrendingUp, value: "150%", label: "Loyalty Increase" }
  ],
  challenge: "Alpine needed to refresh and integrate their popular Rush Racers game into their new RISE+ platform while maintaining the Alpine F1 brand identity.",
  solution: "We evolved the Rush Racers game for the new season, ensuring perfect alignment with RISE+ branding and seamless integration into the loyalty ecosystem.",
  results: "The refreshed game achieved 80% retention rate and became a cornerstone of the RISE+ platform, significantly boosting fan loyalty.",
  impact: "Rush Racers successfully bridges the gap between gaming entertainment and F1 fandom, creating deeper connections with the Alpine brand.",
  recognition: "The game integration set new standards for how racing games can enhance fan loyalty platforms in Formula 1."
};

export default function BWTAlpineF1CasePage() {
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
            <h2 className="text-2xl md:text-3xl font-black mb-6">PROJECT OVERVIEW</h2>
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
                {caseData.additionalImages.map((img, idx) => (
                  <div key={idx} className="group relative aspect-[16/9] rounded-lg overflow-hidden cursor-pointer">
                    <img src={img} alt={`Rush Racers Gallery ${idx + 1}`} className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105" />
                    <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>
      )}

      {/* BIG IDEA */}
      <section className="mb-16">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-2xl md:text-3xl font-black mb-6">THROUGH THE FANCAM</h2>
            <div className="prose prose-lg max-w-none">
              <p className="text-main text-lg leading-relaxed mb-4">{caseData.solution}</p>
              <p className="text-main text-lg leading-relaxed">{caseData.results}</p>
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

      {/* Impact & Recognition */}
      <section className="mb-16">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              <div>
                <h3 className="text-xl font-black mb-4">Entertaining your fans</h3>
                <p className="text-main leading-relaxed">{caseData.impact}</p>
              </div>
              <div>
                <h3 className="text-xl font-black mb-4">Branded content</h3>
                <p className="text-main leading-relaxed">{caseData.recognition}</p>
              </div>
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
