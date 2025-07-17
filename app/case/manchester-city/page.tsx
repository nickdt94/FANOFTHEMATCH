import { ArrowLeft, Users, Target, TrendingUp } from 'lucide-react';
import Link from 'next/link';
import Spotlight from '@/components/Spotlight';

const caseData = {
  title: "The Match is just the beginning",
  category: "Manchester City",
  description: "In a world full of entertainment, a fan's attention is the most valuable asset. The 90 minutes on the pitch are the core, but the real connection is built beyond it. At Wave, we build that connection. We transform matchday from a passive viewing experience into an active, unforgettable event.",
  image: "https://a.storyblok.com/f/174314/1080x1080/7c30f1349e/screen1.jpg/m/1400x0/filters:format(webp):quality(80)",
  heroImage: "https://a.storyblok.com/f/174314/1080x1080/7c30f1349e/screen1.jpg/m/1400x0/filters:format(webp):quality(80)",
  additionalImages: [
    "https://a.storyblok.com/f/174314/1080x1080/e4ca0f2b82/screen3.jpg/m/800x0/filters:format(webp):quality(80)",
    "https://a.storyblok.com/f/174314/1080x1080/f74f4bc077/screen2.jpg/m/800x0/filters:format(webp):quality(80)",
    "https://a.storyblok.com/f/174314/1080x1080/84c8cc2816/screen4-2.jpg/m/800x0/filters:format(webp):quality(80)"
  ],
  videoUrl: undefined,
  metrics: [
    { icon: Users, value: "53,000", label: "Stadium Capacity" },
    { icon: Target, value: "10K+", label: "Avg. Participants" },
    { icon: TrendingUp, value: "87%", label: "Better Engagement" }
  ],
  challenge: "For Manchester City, we shift the focus from the pitch to the seats. With our Fan of the Match game, every supporter is a potential winner. This isn't a simple quiz; it's a dynamic challenge with diverse game formats, such as: Visual questions, like the iconic 'Guess the Goal' Fast-paced trivia that tests the knowledge of the most loyal fans",
  solution: "Outside the stadium, we transform the fan plaza into a democratic stage. With our Battle of the Bands concept, we gave the power to the fans. They judged the bands and decided who earned the ultimate prize: a performance on the center circle. This turns atmosphere creation into true fan participation.",
  results: "At Wave, we don't believe in a one-size-fits-all solution. We create unique experiences that give fans a voice, reward them, and connect them to your club forever.",
};

export default function ManchesterCityCasePage() {
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
            <h2 className="text-2xl md:text-3xl font-black mb-6">Engaging fans directly in their seats</h2>
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
                    <img src={img} alt={`Manchester City Gallery ${idx + 1}`} className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105" />
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
            <h2 className="text-2xl md:text-3xl font-black mb-6">Battle of the Bands</h2>
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
