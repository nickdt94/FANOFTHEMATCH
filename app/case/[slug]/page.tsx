'use client'

import { notFound } from 'next/navigation'
import { ArrowLeft, Users, Target, TrendingUp } from 'lucide-react'
import Link from 'next/link'
import { caseStudies, createSlug } from '@/data/cases'
import Spotlight from '@/components/Spotlight'

// Enhanced case data with additional images and metrics
const enhancedCaseData = {
    'manchester-city-interactive-in-stadium-quiz': {
        ...caseStudies[0],
        heroImage: "https://a.storyblok.com/f/174314/1080x1080/7c30f1349e/screen1.jpg/m/1400x0/filters:format(webp):quality(80)",
        additionalImages: [
            "https://a.storyblok.com/f/174314/1080x1080/e4ca0f2b82/screen3.jpg/m/800x0/filters:format(webp):quality(80)",
            "https://a.storyblok.com/f/174314/1080x1080/f74f4bc077/screen2.jpg/m/800x0/filters:format(webp):quality(80)",
            "https://a.storyblok.com/f/174314/1080x1080/84c8cc2816/screen4-2.jpg/m/800x0/filters:format(webp):quality(80)"
        ],
        metrics: [
            { icon: Users, value: "53,000", label: "Stadium Capacity" },
            { icon: Target, value: "10K+", label: "Avg. Participants" },
            { icon: TrendingUp, value: "87%", label: "Better Engagement" }
        ],
        challenge: "Manchester City FC wanted to translate the energy and excitement of their stadium experience into a digital format that would engage fans during half-time. The challenge was to design an interactive experience that would entertain thousands of fans simultaneously while strengthening their connection to the club.",
        solution: "Fan of the Match is a live engagement platform designed specifically for the dedicated fans of Manchester City FC, providing an array of interactive features within the dynamic atmosphere of the stadium.",
        results: "The Fan of the Match platform enhances the stadium experience by offering a range of exciting activities for fans to participate in during half-time. By taking part in live quizzes, polls, and games, fans can interact with each other and deepen their connection to the Manchester City FC community. The platform is accessible via mobile devices, making it easy for fans to join in the fun.",
        impact: "The quiz is displayed on the large screens within the Etihad Stadium, which has a seating capacity of approximately 53,000 spectators. Fans can participate using their smartphones, and upon completing the final question, the system reveals the winners on the big screen. This interactive experience helps to create a more engaging and enjoyable atmosphere for Manchester City FC supporters.",
        recognition: "Fan of the Match has been successfully implemented by top football clubs around the world, including FC Barcelona, West Ham United, Eintracht Frankfurt, AZ Alkmaar, PSV Eindhoven, and even the Dutch national team. Manchester City FC is proud to adopt this platform to enhance the fan experience during home matches."
    },
    'espn-man-of-the-match-platform': {
        ...caseStudies[1],
        heroImage: "https://a.storyblok.com/f/174314/1920x721/adb3675340/header.png/m/1500x0/filters:format(webp):quality(80)",
        additionalImages: [
            "https://a.storyblok.com/f/174314/1920x721/adb3675340/header.png/m/800x0/filters:format(webp):quality(80)",
            "https://a.storyblok.com/f/174314/1920x721/adb3675340/header.png/m/800x0/filters:format(webp):quality(80)",
            "https://a.storyblok.com/f/174314/1920x721/adb3675340/header.png/m/800x0/filters:format(webp):quality(80)"
        ],
        metrics: [
            { icon: Users, value: "10M+", label: "Monthly Viewers" },
            { icon: Target, value: "500K+", label: "Votes per Weekend" },
            { icon: TrendingUp, value: "95%", label: "Automation Level" }
        ],
        challenge: "ESPN needed a fully automated voting platform for their Man of the Match concept that could handle multiple Eredivisie matches every weekend without manual intervention.",
        solution: "We developed a platform that automatically gathers all necessary information, including line-ups, substitutions, and stats, via API connection with data provider StatsPerform.",
        results: "The platform seamlessly integrates the Man of the Match concept into ESPN's Eredivisie broadcasts, handling hundreds of thousands of votes per weekend with 95% automation.",
        impact: "ESPN can now focus on broadcasting while the platform handles all voting logistics, creating a better viewing experience for millions of football fans.",
        recognition: "The platform has become an integral part of ESPN's Eredivisie coverage, setting a new standard for automated sports engagement platforms."
    },
    'heineken-player-0-0-interactive-race-game-with-max-verstappen': {
        ...caseStudies[2],
        heroImage: "https://a.storyblok.com/f/174314/700x519/ebe9979890/img_1.jpg/m/1400x0/filters:format(webp):quality(80)",
        additionalImages: [
            "https://a.storyblok.com/f/174314/700x519/ebe9979890/img_1.jpg/m/800x0/filters:format(webp):quality(80)",
            "https://a.storyblok.com/f/174314/700x519/ebe9979890/img_1.jpg/m/800x0/filters:format(webp):quality(80)",
            "https://a.storyblok.com/f/174314/700x519/ebe9979890/img_1.jpg/m/800x0/filters:format(webp):quality(80)"
        ],
        metrics: [
            { icon: Users, value: "2M+", label: "Race Participants" },
            { icon: Target, value: "85%", label: "Completion Rate" },
            { icon: TrendingUp, value: "300%", label: "Engagement Increase" }
        ],
        challenge: "Heineken wanted to expand their responsible consumption message to virtual racing audiences, creating an engaging experience that reinforced their 'When You Drive, Never Drink' platform.",
        solution: "We developed an interactive racing game where fans could compete virtually against Max Verstappen, combining entertainment with responsible drinking messaging.",
        results: "The activation generated massive engagement with over 2 million race participants and created positive brand association for Heineken's responsible consumption initiative.",
        impact: "The game successfully reached new audiences in the virtual racing world, amplifying Heineken's message that the best drivers choose not to drink.",
        recognition: "The Player 0.0 initiative became a benchmark for responsible brand activations in the gaming and motorsports industries."
    },
    'knvb-dutch-football-association-interactive-content-platform': {
        ...caseStudies[3],
        heroImage: "https://a.storyblok.com/f/174314/1080x1080/32f0653db7/knvb-gallery-2.png/m/1400x0/filters:format(webp):quality(80)",
        additionalImages: [
            "https://a.storyblok.com/f/174314/1080x1080/32f0653db7/knvb-gallery-2.png/m/800x0/filters:format(webp):quality(80)",
            "https://a.storyblok.com/f/174314/1080x1080/32f0653db7/knvb-gallery-2.png/m/800x0/filters:format(webp):quality(80)",
            "https://a.storyblok.com/f/174314/1080x1080/32f0653db7/knvb-gallery-2.png/m/800x0/filters:format(webp):quality(80)"
        ],
        metrics: [
            { icon: Users, value: "55,000", label: "Arena Capacity" },
            { icon: Target, value: "90%", label: "Fan Participation" },
            { icon: TrendingUp, value: "200%", label: "Engagement Boost" }
        ],
        challenge: "The KNVB wanted to create an electrifying interactive experience for Dutch national team and Orange Lionesses supporters at the Amsterdam Arena.",
        solution: "We developed the Fan of the Match quiz platform that transforms the Amsterdam Arena into an Orange stronghold, engaging fans both in the stadium and at home.",
        results: "The platform successfully engaged 90% of stadium attendees with real-time content, polls, and exclusive insights during matches.",
        impact: "The Amsterdam Arena became a truly interactive venue, with fans contributing to the electric atmosphere through synchronized participation.",
        recognition: "The KNVB platform set new standards for national team fan engagement, inspiring similar implementations across European football associations."
    },
    'red-bull-racing-honda-mobile-race-game': {
        ...caseStudies[4],
        heroImage: "https://a.storyblok.com/f/174314/5760x2160/9a3e422d96/header-rbr-honda.jpg/m/1500x0/filters:format(webp):quality(80)",
        additionalImages: [
            "https://a.storyblok.com/f/174314/5760x2160/9a3e422d96/header-rbr-honda.jpg/m/800x0/filters:format(webp):quality(80)",
            "https://a.storyblok.com/f/174314/5760x2160/9a3e422d96/header-rbr-honda.jpg/m/800x0/filters:format(webp):quality(80)",
            "https://a.storyblok.com/f/174314/5760x2160/9a3e422d96/header-rbr-honda.jpg/m/800x0/filters:format(webp):quality(80)"
        ],
        metrics: [
            { icon: Users, value: "5M+", label: "US F1 Fans Reached" },
            { icon: Target, value: "70%", label: "Game Completion" },
            { icon: TrendingUp, value: "400%", label: "Brand Awareness" }
        ],
        challenge: "Honda and Red Bull Racing wanted to activate their F1 partnership digitally in the US market, targeting the growing American Formula 1 fanbase with innovative mobile gaming.",
        solution: "We developed a striking mobile race game that embodied both brands' innovative spirit while delivering fun and entertainment to a broad audience.",
        results: "The game successfully reached over 5 million US Formula 1 fans, significantly boosting brand awareness and partnership recognition.",
        impact: "The activation helped establish Honda and Red Bull Racing as innovative leaders in the rapidly growing US F1 market.",
        recognition: "The mobile game became a benchmark for F1 brand partnerships, demonstrating how digital innovation can amplify traditional sponsorship activations."
    },
    'bwt-alpine-f1-team-rush-racers': {
        ...caseStudies[5],
        heroImage: "https://a.storyblok.com/f/174314/1920x750/ddf73d2f55/header.png/m/1500x525/filters:format(webp):quality(80)",
        additionalImages: [
            "https://a.storyblok.com/f/174314/1920x750/ddf73d2f55/header.png/m/800x0/filters:format(webp):quality(80)",
            "https://a.storyblok.com/f/174314/1920x750/ddf73d2f55/header.png/m/800x0/filters:format(webp):quality(80)",
            "https://a.storyblok.com/f/174314/1920x750/ddf73d2f55/header.png/m/800x0/filters:format(webp):quality(80)"
        ],
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
    }
};

interface CaseDetailPageProps {
    params: Promise<{
        slug: string;
    }>;
}

export default async function CaseDetailPage({ params }: CaseDetailPageProps) {
    const { slug } = await params;
    
    // Find the case study by matching the slug
    const caseStudy = caseStudies.find(study => createSlug(study.title, study.category) === slug);
    
    if (!caseStudy) {
        notFound();
    }
    
    // Get the enhanced case data or fallback to base case study
    const caseData = enhancedCaseData[slug as keyof typeof enhancedCaseData] || {
        ...caseStudy,
        heroImage: caseStudy.image,
        additionalImages: [caseStudy.image, caseStudy.image, caseStudy.image],
        metrics: [
            { icon: Users, value: "10K+", label: "Users Engaged" },
            { icon: Target, value: "85%", label: "Success Rate" },
            { icon: TrendingUp, value: "150%", label: "Growth" }
        ],
        challenge: `The challenge was to create an engaging digital experience that would resonate with ${caseStudy.category} fans and drive meaningful engagement.`,
        solution: caseStudy.longDescription,
        results: `The platform successfully delivered exceptional results, creating a more engaging experience for ${caseStudy.category} supporters.`,
        impact: `The implementation significantly improved fan engagement and created lasting connections between ${caseStudy.category} and their audience.`,
        recognition: `The success of this platform has been recognized across the industry, setting new standards for fan engagement in sports and entertainment.`
    };

    return (
        <main className="min-h-screen bg-brand-bg">
            <Spotlight />
            
            {/* Header */}
            <header className="fixed top-0 left-0 right-0 z-50 bg-brand-bg/80 backdrop-blur-sm border-b border-brand-border">
                <div className="container mx-auto px-6 py-4">
                    <Link 
                        href="/#cases" 
                        className="inline-flex items-center gap-2 text-brand-text hover:text-brand-primary transition-colors"
                    >
                        <ArrowLeft className="w-5 h-5" />
                        <span>Alle Cases</span>
                    </Link>
                </div>
            </header>

            {/* Hero Section */}
            <section className="pt-20 pb-16 overflow-hidden">
                <div className="container mx-auto px-6">
                    <div className="max-w-4xl mx-auto text-center mb-16">
                        <p className="lime-text font-bold text-lg mb-4">{caseData.category}</p>
                        <h1 className="text-4xl md:text-6xl font-black mb-6 leading-tight">
                            {caseData.title}
                        </h1>
                        <p className="text-xl text-main max-w-3xl mx-auto mb-8">
                            {caseData.description}
                        </p>
                    </div>
                </div>
            </section>

            {/* Hero Image */}
            <section className="mb-20">
                <div className="container mx-auto px-6">
                    <div className="max-w-6xl mx-auto">
                        <div className="relative aspect-[16/9] rounded-2xl overflow-hidden">
                            <img 
                                src={caseData.heroImage} 
                                alt={caseData.title}
                                className="w-full h-full object-cover"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent"></div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Metrics */}
            <section className="mb-20">
                <div className="container mx-auto px-6">
                    <div className="max-w-4xl mx-auto">
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                            {caseData.metrics.map((metric, index) => (
                                <div key={index} className="text-center">
                                    <div className="inline-flex items-center justify-center w-16 h-16 bg-brand-primary/20 rounded-full mb-4">
                                        <metric.icon className="w-8 h-8 text-brand-primary" />
                                    </div>
                                    <div className="text-3xl font-black text-brand-text-heading mb-2">
                                        {metric.value}
                                    </div>
                                    <div className="text-inactive">
                                        {metric.label}
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            {/* Project Overview */}
            <section className="mb-20">
                <div className="container mx-auto px-6">
                    <div className="max-w-4xl mx-auto">
                        <h2 className="text-3xl font-black mb-8">PROJECT OVERVIEW</h2>
                        <div className="prose prose-lg max-w-none">
                            <p className="text-main text-lg leading-relaxed">
                                {caseData.challenge}
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Additional Images Grid */}
            <section className="mb-20">
                <div className="container mx-auto px-6">
                    <div className="max-w-6xl mx-auto">
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                            {caseData.additionalImages.map((image, index) => (
                                <div key={index} className="aspect-square rounded-2xl overflow-hidden">
                                    <img 
                                        src={image} 
                                        alt={`${caseData.title} - Image ${index + 1}`}
                                        className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                                    />
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            {/* BIG IDEA */}
            <section className="mb-20">
                <div className="container mx-auto px-6">
                    <div className="max-w-4xl mx-auto">
                        <h2 className="text-3xl font-black mb-8">BIG IDEA</h2>
                        <div className="prose prose-lg max-w-none">
                            <p className="text-main text-lg leading-relaxed mb-6">
                                {caseData.solution}
                            </p>
                            <p className="text-main text-lg leading-relaxed">
                                {caseData.results}
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Large Feature Image */}
            <section className="mb-20">
                <div className="container mx-auto px-6">
                    <div className="max-w-6xl mx-auto">
                        <div className="relative aspect-[21/9] rounded-2xl overflow-hidden">
                            <img 
                                src={caseData.image} 
                                alt={`${caseData.title} - Feature`}
                                className="w-full h-full object-cover"
                            />
                            <div className="absolute inset-0 bg-gradient-to-r from-black/30 via-transparent to-black/30"></div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Impact & Recognition */}
            <section className="mb-20">
                <div className="container mx-auto px-6">
                    <div className="max-w-4xl mx-auto">
                        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
                            <div>
                                <h3 className="text-2xl font-black mb-6">Entertaining your fans</h3>
                                <p className="text-main leading-relaxed">
                                    {caseData.impact}
                                </p>
                            </div>
                            <div>
                                <h3 className="text-2xl font-black mb-6">Branded content</h3>
                                <p className="text-main leading-relaxed">
                                    {caseData.recognition}
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Call to Action */}
            <section className="pb-20">
                <div className="container mx-auto px-6">
                    <div className="max-w-4xl mx-auto text-center">
                        <div className="bg-card-custom rounded-3xl p-12">
                            <h2 className="text-3xl font-black mb-6">
                                Klaar om je eigen verhaal te schrijven?
                            </h2>
                            <p className="text-main text-lg mb-8">
                                Laat ons je helpen een even krachtige ervaring te creëren voor jouw merk.
                            </p>
                            <div className="flex flex-col sm:flex-row gap-4 justify-center">
                                <Link href="/#contact" className="brand-button">
                                    Start je project
                                </Link>
                                <Link href="/#cases" className="brand-button-secondary">
                                    Meer cases bekijken
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </main>
    );
}
