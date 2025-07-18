import { ArrowLeft, Users, Target, TrendingUp } from 'lucide-react';
import Link from 'next/link';
import Spotlight from '@/components/Spotlight';

const caseData = {
title: "Maximum Race Fun with Bingo Show",
category: "Holland Casino & DutchGP",
description: "During the Formula 1 Heineken Dutch Grand Prix in Zandvoort, partner Holland Casino aimed to actively involve and enhance the engagement of thousands of race fans in the fan zones. Leveraging our expertise in interactive tools, we created an interactive and dynamic, Formula 1-themed Bingo Show.",
image: "/DUTCHGP/Dutchgp3.png",
heroImage: "/DUTCHGP/Dutchgp1.png",
additionalImages: [
  "/DUTCHGP/Dutchgp1.png",
  "/DUTCHGP/Dutchgp2.png",
  "/DUTCHGP/Dutchgp3.png",
],
videoUrl: undefined,
metrics: undefined,
challenge: "Fans participated in fast-paced bingo rounds, contributing to a unique and competitive atmosphere. The results included:",
solution: "Direct Fan Engagement: Active participation and elevated atmosphere.\n\nStrong Brand Activation: Holland Casino was directly associated with fun and excitement.",
results: "This collaboration demonstrates how Fan of the Match delivers successful brand activation and unforgettable fan experiences at large-scale events. Our tooling also offers the option for an engaging music bingo.",
impact: undefined,
recognition: undefined
};

export default function RedBullRacingHondaCasePage() {
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

      {/* No metrics for this case */}

      {/* Project Overview */}
      <section className="mb-16">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-2xl md:text-3xl font-black mb-6">FULL-THROTTLE FAN ENGAGEMENT</h2>
            <div className="prose prose-lg max-w-none">
              <p className="text-main text-lg leading-relaxed">{caseData.challenge}</p>
            </div>
          </div>
        </div>
      </section>

      {/* ...existing code... */}
      </section>

      {/* BIG IDEA */}
      {/* BIG IDEA */}
      <section className="mb-16">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto">
            <div className="prose prose-lg max-w-none">
              <p className="text-main text-lg leading-relaxed mb-4">{caseData.challenge}</p>
              <ul className="list-disc pl-6 text-main text-lg mb-4">
                <li>Direct Fan Engagement: Active participation and elevated atmosphere.</li>
                <li>Strong Brand Activation: Holland Casino was directly associated with fun and excitement.</li>
              </ul>
              <p className="text-main text-lg leading-relaxed">{caseData.results}</p>
            </div>
          </div>
        </div>
      </section>

      {/* No impact & recognition for this case */}

      {/* Call to Action */}
      {/* Images Section - three DutchGP images above contact */}
      <section className="mb-16">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {caseData.additionalImages.map((img, idx) => (
                <div key={idx} className="group relative aspect-[16/9] rounded-lg overflow-hidden cursor-pointer">
                  <img src={img} alt={`DutchGP Gallery ${idx + 1}`} className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105" />
                  <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
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
