
import React from 'react';
import useIntersectionObserver from '../hooks/useIntersectionObserver';

const steps = [
    {
        step: 1,
        title: "Start met Fan of the Match",
        description: "Een laagdrempelige quiz-tool voor directe impact en fan-activatie. De perfecte 'teaser'.",
        delay: ""
    },
    {
        step: 2,
        title: "Verdiep met Wave",
        description: "Bouw de relatie uit met maatwerk oplossingen zoals FanCams, loyalty-platforms en live experiences.",
        delay: "delay-100"
    },
    {
        step: 3,
        title: "Groei met LiveWall",
        description: "Zet de tools strategisch in als onderdeel van uw merkstrategie voor langdurige, meetbare groei.",
        delay: "delay-200"
    }
];

const StepCard = ({ step, title, description, delay }: typeof steps[0] & {delay: string}) => {
    const [ref, isVisible] = useIntersectionObserver<HTMLDivElement>({ threshold: 0.1 });
    return (
        <div ref={ref} className={`scroll-animate ${delay} ${isVisible ? 'is-visible' : ''}`}>
            <div className="relative p-8 bg-card-custom h-full">
                <div className={`absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 rounded-full w-12 h-12 flex items-center justify-center font-bold text-xl bg-brand-primary text-brand-bg`}>
                    {step}
                </div>
                <h3 className="text-xl font-bold mt-8 mb-2">{title}</h3>
                <p className="text-inactive">{description}</p>
            </div>
        </div>
    );
}

const Ecosystem: React.FC = () => {
    const [titleRef, isTitleVisible] = useIntersectionObserver<HTMLHeadingElement>({ threshold: 0.1 });
    const [subtitleRef, isSubtitleVisible] = useIntersectionObserver<HTMLParagraphElement>({ threshold: 0.1 });

    return (
        <section id="ecosystem" className="py-20 bg-brand-bg">
            <div className="container mx-auto px-6">
                <div className="text-center mb-16">
                    <h2 ref={titleRef} className={`text-4xl md:text-5xl font-black scroll-animate ${isTitleVisible ? 'is-visible' : ''}`}>De Weg naar Groei</h2>
                    <p ref={subtitleRef} className={`text-lg text-main mt-4 max-w-2xl mx-auto scroll-animate delay-100 ${isSubtitleVisible ? 'is-visible' : ''}`}>Fan of the Match is de eerste stap. Vanuit hier bouwen we samen aan een grotere, strategische fan-ervaring.</p>
                </div>
                <div className="max-w-5xl mx-auto grid md:grid-cols-3 gap-8 text-center">
                    {steps.map((s) => <StepCard key={s.step} {...s} />)}
                </div>
            </div>
        </section>
    );
};

export default Ecosystem;