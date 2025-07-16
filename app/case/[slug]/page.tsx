'use client'

import { notFound } from 'next/navigation'
import { ArrowLeft, Users, Target, TrendingUp } from 'lucide-react'
import Link from 'next/link'
import { caseStudies, createSlug } from '@/data/cases'
import Spotlight from '@/components/Spotlight'

// Enhanced case
const enhancedCaseData = {
    'odido-isu-personalized-fan-support': {
        ...caseStudies.find(c => c.category === 'Odido & ISU'),
        title: "The power of personalized fan support",
        category: "Odido & ISU World Short Track Championships 2024",
        description: "Through a special 'Toon je support' portal, fans could easily submit personal messages of good luck, creating a direct voice between fans and athletes during the ISU World Short Track Championships 2024 in Rotterdam Ahoy.",
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
        challenge: "During the ISU World Short Track Championships 2024 in Rotterdam Ahoy, Odido, as the presenting partner, aimed to strengthen the connection between fans and athletes. The challenge was to create an authentic way for fans to directly support their heroes while effectively activating Odido's brand presence.",
        solution: "In collaboration with House of Sports, we developed a campaign that gave fans a direct voice through a special 'Toon je support' (Show Your Support) portal. Fans could easily submit personal messages of good luck, optionally accompanied by a photo, creating a meaningful connection between supporters and athletes.",
        results: "These heartfelt messages found their way live onto the ContentWall, which was displayed on screens in both the athletes' lounge and the catacomb tunnel leading to the short track rink, and was also prominently visible on the large screens in the stadium.",
        impact: "This campaign not only enhanced fan engagement but also activated Odido's brand in an authentic and effective way by forging a deep, personal connection between supporters and their heroes.",
        recognition: "The personalized fan support system set a new standard for authentic brand activation in sports, demonstrating how technology can create meaningful connections between fans and athletes at major sporting events."
    },
    'uefa-fan-of-the-match-at-the-uefa-2024-2025-finals': {
        ...caseStudies.find(c => c.category === 'UEFA'),
        heroImage: "https://images.ctfassets.net/ryywav90yxrs/4VDaCvbATIPSY3Q5kPjXYL/38aae3b8677b2891ade1d70769ecdced/header.png",
        additionalImages: [
            "/stadium/Euros1.jpg",
            "/stadium/Euros2.webp",
            "https://images.ctfassets.net/ryywav90yxrs/4VDaCvbATIPSY3Q5kPjXYL/38aae3b8677b2891ade1d70769ecdced/header.png"
        ],
        videoUrl: "https://youtu.be/a0aaE3OEqTM",
        metrics: [
            { icon: Users, value: "3", label: "UEFA Finals" },
            { icon: Target, value: "100K+", label: "Fans Engaged" },
            { icon: TrendingUp, value: "95%", label: "Participation Rate" }
        ],
        challenge: "At Fan of the Match, we know that the true spirit of football lies with its fans. That's why, in collaboration with UEFA, we set out to capture the incredible enthusiasm of supporters during the exciting 2024/2025 UEFA Finals. Our goal was simple: empower fans to cheer on their teams and offer a unique look into their personal matchday experience.",
        solution: "For all three prestigious finals—the Champions League Final in Munich, the Europa League Final in Bilbao, and the Conference League Final in Wroclaw—we deployed our innovative FanCam technology. Each FanCam was specifically designed to fit the unique atmosphere of its respective final, perfectly building the tension and excitement leading up to kick-off.",
        results: "Through the FanCam, we successfully highlighted how individual supporters embrace their unique fan journey, creating memorable content that truly showcases the magic of European club football.",
        impact: "Beyond capturing captivating visuals, our solution also allows for valuable fan data collection, including opt-ins, providing crucial insights and opportunities for partners and sponsors.",
        recognition: "Discover how our cutting-edge solutions can boost engagement, enhance the fan experience, and provide valuable data for your organization."
    },
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
            <section className="pt-20 pb-12 overflow-hidden">
                <div className="container mx-auto px-6">
                    <div className="max-w-4xl mx-auto text-center mb-12">
                        <p className="lime-text font-bold text-lg mb-4">{caseData.category}</p>
                        <h1 className="text-4xl md:text-5xl font-black mb-6 leading-tight">
                            {caseData.title}
                        </h1>
                        <p className="text-xl text-main max-w-3xl mx-auto mb-8">
                            {caseData.description}
                        </p>
                    </div>
                </div>
            </section>

            {/* Hero Image */}
            <section className="mb-16">
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
            <section className="mb-16">
                <div className="container mx-auto px-6">
                    <div className="max-w-4xl mx-auto">
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                            {caseData.metrics.map((metric, index) => (
                                <div key={index} className="text-center">
                                    <div className="inline-flex items-center justify-center w-14 h-14 bg-brand-primary/20 rounded-full mb-3">
                                        <metric.icon className="w-7 h-7 text-brand-primary" />
                                    </div>
                                    <div className="text-2xl font-black text-brand-text-heading mb-1">
                                        {metric.value}
                                    </div>
                                    <div className="text-inactive text-sm">
                                        {metric.label}
                                    </div>
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
                            <p className="text-main text-lg leading-relaxed">
                                {caseData.challenge}
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Video Section - Only show if videoUrl exists */}
            {caseData.videoUrl && (
                <section className="mb-16">
                    <div className="container mx-auto px-6">
                        <div className="max-w-6xl mx-auto">
                            <div className="flex flex-col lg:flex-row gap-8 items-center justify-center">
                                {/* Video Content */}
                                <div className="flex-shrink-0">
                                    <div className="relative aspect-[9/16] w-80 mx-auto rounded-xl overflow-hidden bg-black">
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
                                    <div className="grid grid-cols-1 gap-4 max-w-sm mx-auto">
                                        <div className="group relative aspect-[16/9] rounded-lg overflow-hidden cursor-pointer">
                                            <img 
                                                src="/stadium/Euros1.jpg" 
                                                alt="UEFA Champions League Final - Munich"
                                                className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                                            />
                                            <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                                            <div className="absolute bottom-2 left-2 right-2 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                                                <h3 className="font-bold text-sm">Munich</h3>
                                                <p className="text-xs">Champions League Final</p>
                                            </div>
                                        </div>
                                        
                                        <div className="group relative aspect-[16/9] rounded-lg overflow-hidden cursor-pointer">
                                            <img 
                                                src="/stadium/Euros2.webp" 
                                                alt="UEFA Europa League Final - Bilbao"
                                                className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                                            />
                                            <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                                            <div className="absolute bottom-2 left-2 right-2 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                                                <h3 className="font-bold text-sm">Bilbao</h3>
                                                <p className="text-xs">Europa League Final</p>
                                            </div>
                                        </div>
                                        
                                        <div className="group relative aspect-[16/9] rounded-lg overflow-hidden cursor-pointer">
                                            <img 
                                                src="/stadium/Euros1.jpg" 
                                                alt="UEFA Conference League Final - Wroclaw"
                                                className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                                            />
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

            {/* Images Section - Only show if no video but has additional images */}
            {!caseData.videoUrl && caseData.additionalImages && (
                <section className="mb-16">
                    <div className="container mx-auto px-6">
                        <div className="max-w-4xl mx-auto">
                            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                                <div className="group relative aspect-[16/9] rounded-lg overflow-hidden cursor-pointer">
                                    <img 
                                        src={caseData.additionalImages[0]} 
                                        alt="ContentWall - Athletes Lounge"
                                        className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                                    />
                                    <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                                    <div className="absolute bottom-2 left-2 right-2 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                                        <h3 className="font-bold text-sm">Athletes Lounge</h3>
                                        <p className="text-xs">ContentWall Display</p>
                                    </div>
                                </div>
                                
                                <div className="group relative aspect-[16/9] rounded-lg overflow-hidden cursor-pointer">
                                    <img 
                                        src={caseData.additionalImages[1]} 
                                        alt="ContentWall - Stadium Screens"
                                        className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                                    />
                                    <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                                    <div className="absolute bottom-2 left-2 right-2 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                                        <h3 className="font-bold text-sm">Stadium Screens</h3>
                                        <p className="text-xs">ContentWall Display</p>
                                    </div>
                                </div>
                                
                                <div className="group relative aspect-[16/9] rounded-lg overflow-hidden cursor-pointer">
                                    <img 
                                        src={caseData.additionalImages[2]} 
                                        alt="Short Track Racing - Rotterdam Ahoy"
                                        className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                                    />
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
                        <h2 className="text-2xl md:text-3xl font-black mb-6">THROUGH THE FANCAM</h2>
                        <div className="prose prose-lg max-w-none">
                            <p className="text-main text-lg leading-relaxed mb-4">
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
            <section className="mb-16">
                <div className="container mx-auto px-6">
                    <div className="max-w-6xl mx-auto">
                        <div className="relative aspect-[21/9] rounded-xl overflow-hidden">
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
            <section className="mb-16">
                <div className="container mx-auto px-6">
                    <div className="max-w-4xl mx-auto">
                        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                            <div>
                                <h3 className="text-xl font-black mb-4">Entertaining your fans</h3>
                                <p className="text-main leading-relaxed">
                                    {caseData.impact}
                                </p>
                            </div>
                            <div>
                                <h3 className="text-xl font-black mb-4">Branded content</h3>
                                <p className="text-main leading-relaxed">
                                    {caseData.recognition}
                                </p>
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
                                Klaar om je eigen verhaal te schrijven?
                            </h2>
                            <p className="text-main text-lg mb-6">
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
