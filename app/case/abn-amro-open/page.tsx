
import { ArrowLeft, Users, Target, TrendingUp } from 'lucide-react';
import Link from 'next/link';
import Spotlight from '@/components/Spotlight';

const caseData = {
  title: "ABN AMRO Open - Become the Tennis Ball Yourself!",
  category: "ABN AMRO Open",
  description: "The ABN AMRO Open has long been more than just top-tier tennis; it's an event where sport, business, culinary delights, and social initiatives converge. This prestigious ATP Tour 500 tournament, held at the iconic Rotterdam Ahoy, is renowned for attracting world-class players and its innovative approach. And this year, we're adding a spectacular new dimension to your fan experience!",
  image: "/ABN/ABNHEADER.jpg",
  heroImage: "/ABN/ABNHEADER.jpg",
  additionalImages: [
    "/ABN/ABN1.jpg",
    "/ABN/ABN2.jpg",
    "/ABN/ABN3.png"
  ],
  videoUrl: "/ABN/ABNAMRO.mp4",
  metrics: [
    { icon: Users, value: "10,000+", label: "Arena Fans" },
    { icon: Target, value: "100%", label: "Court Visibility" },
    { icon: TrendingUp, value: "Unique", label: "Fan Experience" }
  ],
  challenge: "Imagine: you are the tennis ball! With a groundbreaking new way to interact, you can show your enthusiasm directly on the hallowed tennis court. Forget the big screens; thanks to our unique technology, you'll see yourself – as a virtual tennis ball – moving across the court. Share your emotions with vibrant emojis that accompany your 'ball' movements, visible live to everyone in the arena!",
  solution: "This is your chance to be part of the action in a way never seen before. Get swept away by the excitement of the match and show how passionate you are about tennis. Come to the ABN AMRO Open and become part of this visual spectacle!",
  results: "",
  impact: "",
  recognition: ""
};


export default function ABNAMROOpenCasePage() {
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
            <h2 className="text-2xl md:text-3xl font-black mb-6">Become the Tennis Ball Yourself!</h2>
            <div className="prose prose-lg max-w-none">
              <p className="text-main text-lg leading-relaxed">{caseData.challenge}</p>
            </div>
          </div>
        </div>
      </section>

      {/* Video Section - 9x16 video with three images beside, like Odido */}
      {caseData.videoUrl && (
        <section className="mb-16">
          <div className="container mx-auto px-6">
            <div className="max-w-6xl mx-auto">
              <div className="flex flex-col lg:flex-row gap-10 items-start justify-center">
                {/* Video Content */}
                <div className="flex-shrink-0">
                  <div className="relative aspect-[9/16] w-80 rounded-xl overflow-hidden bg-black">
                    <video
                      src={caseData.videoUrl}
                      autoPlay
                      loop
                      muted
                      playsInline
                      poster={caseData.heroImage}
                      className="w-full h-full object-cover"
                    />
                  </div>
                </div>
                {/* Cover Images */}
                <div className="flex-shrink-0">
                  <div className="grid grid-cols-1 gap-4 w-80">
                    {caseData.additionalImages && caseData.additionalImages.slice(0, 3).map((img, idx) => (
                      <div key={idx} className="group relative aspect-[16/9] rounded-lg overflow-hidden cursor-pointer">
                        <img src={img} alt={`ABN AMRO Open Gallery ${idx + 1}`} className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105" />
                        <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                      </div>
                    ))}
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
            <h2 className="text-2xl md:text-3xl font-black mb-6">A Visual Spectacle for Every Fan</h2>
            <div className="prose prose-lg max-w-none">
              <p className="text-main text-lg leading-relaxed mb-4">{caseData.solution}</p>
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
