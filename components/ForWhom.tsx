import React from 'react';
import { Camera, HelpCircle, Sparkles } from 'lucide-react';
import useIntersectionObserver from '../hooks/useIntersectionObserver';

const FeatureCard = ({ IconComponent, title, description, delay }: { 
    IconComponent: React.ComponentType<{ className?: string }>, 
    title: string, 
    description: string, 
    delay: string 
}) => {
    const [ref, isVisible] = useIntersectionObserver<HTMLDivElement>({ threshold: 0.1 });
    return (
        <div ref={ref} className={`bg-card-custom p-8 scroll-animate h-full ${delay} ${isVisible ? 'is-visible' : ''}`}>
            <IconComponent className="w-8 h-8 text-[#FF7A00] mb-6" />
            <h3 className="font-bold text-xl text-[#FF7A00] mb-4">{title}</h3>
            <p className="text-inactive leading-relaxed">{description}</p>
        </div>
    );
};

const ForWhom: React.FC = () => {
    const [titleRef, isTitleVisible] = useIntersectionObserver<HTMLHeadingElement>({ threshold: 0.1 });
    const [subtitleRef, isSubtitleVisible] = useIntersectionObserver<HTMLParagraphElement>({ threshold: 0.1 });

    const features = [
        {
            IconComponent: Camera,
            title: "FANCAM",
            description: "Capture unforgettable stadium moments from your fans' perspective! Our FanCam transforms in-stadium interaction by making fans the stars themselves, using their own mobile devices. With a single tap, they can capture their unique moment and personalize it with custom filters in your club's style.",
            delay: ""
        },
        {
            IconComponent: HelpCircle,
            title: "QUIZ",
            description: "Transform your match day into an unforgettable, interactive experience with Fan of the Match. Fans use their smartphone to join real-time quizzes and interactive challenges. Their participation is displayed live on the stadium screen, creating thrilling, shared moments for everyone.",
            delay: "delay-100"
        },
        {
            IconComponent: Sparkles,
            title: "CONTENTWALL",
            description: "Get ready to light up the stadium! Our groundbreaking AI technology instantly transforms your selfie into a spectacular, themed creation, showcased live on the giant screen! Simply scan the QR code, upload your photo, and watch as our AI conjures your personalized image in seconds.",
            delay: "delay-200"
        }
    ];

    return (
        <section id="features" className="py-20 bg-brand-bg">
            <div className="container mx-auto px-6">
                <div className="text-center mb-16">
                    <h2 ref={titleRef} className={`text-4xl md:text-5xl font-black scroll-animate ${isTitleVisible ? 'is-visible' : ''}`}>Onze Innovatieve Tools</h2>
                    <p ref={subtitleRef} className={`text-lg text-main mt-4 max-w-2xl mx-auto scroll-animate delay-100 ${isSubtitleVisible ? 'is-visible' : ''}`}>Fan of the Match biedt drie krachtige features om de fan experience naar een hoger niveau te tillen.</p>
                </div>
                <div className="grid md:grid-cols-1 lg:grid-cols-3 gap-8">
                    {features.map((feature, index) => (
                        <FeatureCard key={index} {...feature} />
                    ))}
                </div>
            </div>
        </section>
    );
};

export default ForWhom;
