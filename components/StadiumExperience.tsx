import React, { useRef, useEffect } from 'react';
import Image from 'next/image';

const lerp = (start: number, end: number, progress: number) => {
    return start * (1 - progress) + end * progress;
};

const StadiumExperience: React.FC = () => {
    const sectionRef = useRef<HTMLDivElement>(null);
    const textBlockRef = useRef<HTMLDivElement>(null);
    const phoneBlockRef = useRef<HTMLDivElement>(null);
    const screen1Ref = useRef<HTMLImageElement>(null);
    const screen2Ref = useRef<HTMLImageElement>(null);
    const screen3Ref = useRef<HTMLImageElement>(null);

    useEffect(() => {
        const animateStadiumScroll = () => {
            if (!sectionRef.current || !textBlockRef.current || !phoneBlockRef.current || !screen1Ref.current || !screen2Ref.current || !screen3Ref.current) return;
            
            const { top, height } = sectionRef.current.getBoundingClientRect();
            const scrollableHeight = height - window.innerHeight;
            if (scrollableHeight <= 0) return;

            const scrollProgress = Math.max(0, Math.min(1, -top / scrollableHeight));
            
            const textOpacity = lerp(1, 0, scrollProgress / 0.3);
            const textTranslateY = -scrollProgress * 100;
            textBlockRef.current.style.opacity = `${textOpacity}`;
            textBlockRef.current.style.transform = `translateY(${textTranslateY}px)`;

            const phoneOpacity = lerp(0, 1, (scrollProgress - 0.1) / 0.4);
            const phoneScale = lerp(0.8, 1, (scrollProgress - 0.1) / 0.4);
            const phoneTranslateY = lerp(100, 0, (scrollProgress - 0.1) / 0.4);
            phoneBlockRef.current.style.opacity = `${phoneOpacity}`;
            phoneBlockRef.current.style.transform = `translateY(${phoneTranslateY}px) scale(${phoneScale})`;

            screen1Ref.current.style.opacity = '0';
            screen2Ref.current.style.opacity = '0';
            screen3Ref.current.style.opacity = '0';

            if (scrollProgress < 0.4) {
                screen1Ref.current.style.opacity = '1';
            } else if (scrollProgress < 0.7) {
                screen2Ref.current.style.opacity = '1';
            } else {
                screen3Ref.current.style.opacity = '1';
            }
        };

        const handleScroll = () => {
            window.requestAnimationFrame(animateStadiumScroll);
        };
        
        window.addEventListener('scroll', handleScroll, { passive: true });
        animateStadiumScroll(); // Initial call

        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <section id="stadium-experience" ref={sectionRef}>
            <div className="stadium-sticky-container">
                <div className="stadium-experience-bg"></div>
                <div id="stadium-text-block" ref={textBlockRef}>
                    <div className="text-center max-w-2xl px-6">
                        <h2 className="text-3xl md:text-5xl font-black mb-4">Van Tribune tot Speelveld</h2>
                        <p className="text-lg text-main mb-6">Verbind elke fan in het stadion via hun eigen smartphone. Geen app-installatie nodig. Alleen een webbrowser en de spanning van de wedstrijd. Iedereen kan direct meedoen.</p>
                    </div>
                </div>
                <div id="stadium-phone-block" ref={phoneBlockRef}>
                    <div className="phone-mockup">
                        <div className="phone-screen">
                            <Image ref={screen1Ref} src="https://scale.lwcdn.nl//file?site=cases&group=1&cropped=1&orientation=&w=undefined&h=undefined&file=1525341269_ajax_4.png" alt="Welkomstscherm van de game in dark mode" width={800} height={600} />
                            <Image ref={screen2Ref} src="https://scale.lwcdn.nl//file?site=cases&group=1&cropped=1&orientation=&w=undefined&h=undefined&file=1525341269_ajax_5.png" alt="Teamscherm van de game in dark mode" width={800} height={600} />
                            <Image ref={screen3Ref} src="https://scale.lwcdn.nl//file?site=cases&group=1&cropped=1&orientation=&w=undefined&h=undefined&file=1525341269_2_0_profile.png" alt="Vraagscherm van de game in dark mode" width={800} height={600} />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default StadiumExperience;