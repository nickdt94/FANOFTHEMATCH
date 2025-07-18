import { ArrowLeft, Users, Target, TrendingUp } from 'lucide-react';
import Link from 'next/link';
import Spotlight from '@/components/Spotlight';

const caseData = {
  title: "Més que un Club. More than a Quiz.",
  category: "FC Barcelona",
  description: "'Més que un Club' is the DNA that flows through the veins of the entire FC Barcelona. It is a promise to every culer that the club represents more than just the performance on the pitch. It is a philosophy that is just as powerful for the men's team in Camp Nou as it is for the world-dominant Femení team.",
  image: "/barcelona/BARCA2.webp",
  heroImage: "/barcelona/BARCAHEADER.webp",
  additionalImages: [
    "/barcelona/BARCA1.webp",,
    "/barcelona/BARCA3.webp",
    "/barcelona/BARCA4.webp"
  ],
  videoUrl: undefined,
  metrics: [
    { icon: Users, value: "100,000+", label: "Engaged Supporters" },
    { icon: Target, value: "Continuous", label: "Matchday Interaction" },
    { icon: TrendingUp, value: "Total Experience", label: "Fan Control" }
  ],
  challenge: "At Wave, we have embraced this philosophy and brought it to life. For the entire FC Barcelona, we gave the supporters the voice they deserve through one complete digital interaction program.",
  solution: "We transformed matchday into a continuous, interactive event. Through the stadium screens and the fans' mobile phones, we rolled out a wide range of modules that put the supporter at the heart of the action.",
  results: "This was much more than a simple quiz. It was a total experience, featuring: Dynamic Polls (Fans could share their live opinions or choose the Man or Woman of the Match), Diverse Quiz Questions (A rich mix of questions tested the fans' knowledge, from fast-paced trivia to the popular and visual 'Guess the Goal' rounds featuring iconic goals from the club's history), Influence on the Atmosphere (Supporters gained direct influence over the stadium experience with questions like: 'Which song should we play next?').",
  impact: "This program celebrated the entire club culture, from the heroes of the past like Cruyff to the stars of today like Alexia Putellas.",
  recognition: "A Proven Formula for Your Club: This is how 'Més que un Club' comes to life digitally: not with isolated promotions, but with an integrated, diverse program that truly puts the supporter at the center."
};

export default function BarcelonaCasePage() {
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
            <h2 className="text-2xl md:text-3xl font-black mb-6">Putting the Fans in Control</h2>
            <div className="prose prose-lg max-w-none">
              <p className="text-main text-lg leading-relaxed">{caseData.challenge}</p>
            </div>
          </div>
        </div>
      </section>

      {/* Images Section - 1x1 images for BARCA1, BARCA2, BARCA3 */}
      <section className="mb-16">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {["/barcelona/BARCA1.webp", "/barcelona/BARCA2.webp", "/barcelona/BARCA3.webp"].map((img, idx) => (
                <div key={idx} className="group relative aspect-square rounded-lg overflow-hidden cursor-pointer">
                  <img src={img} alt={`Barcelona 1x1 ${idx + 1}`} className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105" />
                  <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* BIG IDEA */}
      <section className="mb-16">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-2xl md:text-3xl font-black mb-6">A Proven Formula for Your Club</h2>
            <div className="prose prose-lg max-w-none">
              <p className="text-main text-lg leading-relaxed mb-4">{caseData.solution}</p>
              <p className="text-main text-lg leading-relaxed mb-4">{caseData.results}</p>
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
                <h3 className="text-xl font-black mb-4">Impact</h3>
                <p className="text-main leading-relaxed">{caseData.impact}</p>
              </div>
              <div>
                <h3 className="text-xl font-black mb-4">Recognition</h3>
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
