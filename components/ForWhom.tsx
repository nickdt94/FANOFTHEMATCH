import React from 'react';
import { Users, Megaphone, TrendingUp, Lightbulb } from 'lucide-react';
import useIntersectionObserver from '../hooks/useIntersectionObserver';

const RoleCard = ({ IconComponent, title, description, delay }: { 
    IconComponent: React.ComponentType<{ className?: string }>, 
    title: string, 
    description: string, 
    delay: string 
}) => {
    const [ref, isVisible] = useIntersectionObserver<HTMLDivElement>({ threshold: 0.1 });
    return (
        <div ref={ref} className={`bg-card-custom p-8 scroll-animate h-full ${delay} ${isVisible ? 'is-visible' : ''}`}>
            <IconComponent className="w-8 h-8 lime-text mb-6" />
            <h3 className="font-bold text-xl lime-text mb-2">{title}</h3>
            <p className="text-inactive">{description}</p>
        </div>
    );
};

const ForWhom: React.FC = () => {
    const [titleRef, isTitleVisible] = useIntersectionObserver<HTMLHeadingElement>({ threshold: 0.1 });
    const [subtitleRef, isSubtitleVisible] = useIntersectionObserver<HTMLParagraphElement>({ threshold: 0.1 });

    const roles = [
        {
            IconComponent: Users,
            title: "Fan Engagement Manager",
            description: "Verhoog de sfeer en betrokkenheid tijdens de rust met een activatie die met minimale inspanning live gaat.",
            delay: ""
        },
        {
            IconComponent: Megaphone,
            title: "Sponsorship Manager",
            description: "Toon de waarde aan sponsors met een meetbare, interactieve activatie die hun merk live in de schijnwerpers zet.",
            delay: "delay-100"
        },
        {
            IconComponent: TrendingUp,
            title: "Marketing Director / CMO",
            description: "Start laagdrempelig met een innovatieve tool die direct resultaat oplevert en de deur opent naar grotere campagnes.",
            delay: "delay-200"
        },
        {
            IconComponent: Lightbulb,
            title: "Experience / Innovatie Manager",
            description: "Verzamel live statistieken, sentiment en data van duizenden fans tegelijk met een razendsnelle lancering.",
            delay: "delay-300"
        }
    ];

    return (
        <section id="for-who" className="py-20 bg-brand-bg">
            <div className="container mx-auto px-6">
                <div className="text-center mb-16">
                    <h2 ref={titleRef} className={`text-4xl md:text-5xl font-black scroll-animate ${isTitleVisible ? 'is-visible' : ''}`}>Een Oplossing voor Iedere Rol</h2>
                    <p ref={subtitleRef} className={`text-lg text-main mt-4 max-w-2xl mx-auto scroll-animate delay-100 ${isSubtitleVisible ? 'is-visible' : ''}`}>Fan of the Match is ontworpen om specifieke uitdagingen binnen uw organisatie aan te pakken.</p>
                </div>
                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {roles.map((role, index) => (
                        <RoleCard key={index} {...role} />
                    ))}
                </div>
            </div>
        </section>
    );
};

export default ForWhom;
