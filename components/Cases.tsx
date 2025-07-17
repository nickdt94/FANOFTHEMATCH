import React, { useState, useRef, useEffect } from 'react';
import { ArrowUpRight, ArrowRight } from 'lucide-react';
import Link from 'next/link';
import useIntersectionObserver from '../hooks/useIntersectionObserver';
import { caseStudies, type CaseStudy } from '../data/cases';

export type { CaseStudy };

// Internal CaseCard component to simplify ref handling.
const CaseCard = ({ study, delay }: { study: CaseStudy, delay: string }) => {
    const [ref, isVisible] = useIntersectionObserver<HTMLDivElement>({ threshold: 0.1 });
    // Map category/title to new hardcoded routes
    let casePath = '';
    switch (study.category) {
        case 'Odido & ISU':
            casePath = '/case/odido-isu';
            break;
        case 'UEFA':
            casePath = '/case/uefa';
            break;
        case 'Manchester City':
            casePath = '/case/manchester-city';
            break;
        case 'ABN AMRO Open':
            casePath = '/case/abn-amro-open';
            break;
        case 'Heineken Player 0.0':
            casePath = '/case/heineken';
            break;
        case 'KNVB - Dutch Football Association':
            casePath = '/case/knvb';
            break;
        case 'Red Bull Racing & Honda':
            casePath = '/case/red-bull-racing-honda';
            break;
        case 'BWT Alpine F1 Team':
            casePath = '/case/bwt-alpine-f1';
            break;
        default:
            casePath = '#';
    }
    return (
        <div ref={ref} className={`h-full scroll-animate ${delay} ${isVisible ? 'is-visible' : ''}`}>
            <Link href={casePath} className="block h-full">
                <div className="h-full case-card bg-card-custom cursor-pointer flex flex-col overflow-hidden">
                    <div className="link-icon">
                        <ArrowUpRight className="w-5 h-5" />
                    </div>
                    <div className="w-full h-56 overflow-hidden">
                        <img 
                            src={study.image} 
                            alt={study.title} 
                            className="w-full h-full object-cover"
                            draggable="false"
                            onDragStart={(e) => e.preventDefault()}
                        />
                    </div>
                    <div className="p-6 flex flex-col flex-grow">
                        <p className="font-bold mb-1" style={{ color: '#FF7A00' }}>{study.category}</p>
                        <h3 className="text-xl font-bold mb-3">{study.title}</h3>
                        <p className="text-inactive text-sm line-clamp-3 mb-4">
                            {study.description}
                        </p>
                        <div className="mt-auto pt-2">
                            <span className="font-semibold" style={{ color: '#FF7A00' }}>
                                See case
                                <ArrowRight className="inline-block w-4 h-4 ml-1 align-middle" />
                            </span>
                        </div>
                    </div>
                </div>
            </Link>
        </div>
    );
};

const Cases: React.FC = () => {
    const scrollContainerRef = useRef<HTMLDivElement>(null);
    const itemRefs = useRef<(HTMLDivElement | null)[]>([]); // To hold refs to each card wrapper
    const [activeIndex, setActiveIndex] = useState(0);

    const handleDotClick = (index: number) => {
        itemRefs.current[index]?.scrollIntoView({
            behavior: 'smooth',
            block: 'nearest',
            inline: 'center'
        });
    };

    useEffect(() => {
        const container = scrollContainerRef.current;
        if (!container) return;
        
        const handleScroll = () => {
            const containerCenter = container.scrollLeft + container.clientWidth / 2;
            let closestIndex = -1;
            let minDistance = Infinity;

            itemRefs.current.forEach((item, index) => {
                if (!item) return;
                const itemCenter = item.offsetLeft + item.offsetWidth / 2;
                const distance = Math.abs(containerCenter - itemCenter);
                if (distance < minDistance) {
                    minDistance = distance;
                    closestIndex = index;
                }
            });
            
            if (closestIndex !== -1) {
                setActiveIndex(closestIndex);
            }
        };

        let scrollTimeout: number;
        const throttledScrollHandler = () => {
            clearTimeout(scrollTimeout);
            scrollTimeout = window.setTimeout(handleScroll, 100);
        };

        container.addEventListener('scroll', throttledScrollHandler);

        return () => {
            if (container) {
                container.removeEventListener('scroll', throttledScrollHandler);
            }
            clearTimeout(scrollTimeout);
        };
    }, []);

    return (
        <section id="cases" className="bg-brand-bg py-20">
             <div className="container mx-auto px-6 text-center mb-16">
                <h2 className="text-4xl md:text-5xl font-black">Proven Impact. Real results.</h2>
                <p className="text-lg text-main mt-4 max-w-2xl mx-auto">
                    Fan of the Match delivers concrete benefits for sports clubs & leagues, sponsoring brands, and event organizers.
                </p>
            </div>
            <div className="container mx-auto px-6 cases-container">
                <div ref={scrollContainerRef} className="cases-grid">
                    {caseStudies.map((study, index) => (
                        <div key={index} ref={(el) => { itemRefs.current[index] = el; }} className="h-full">
                            <CaseCard 
                                study={study} 
                                delay={`delay-${(index % 3) * 100}`}
                            />
                        </div>
                    ))}
                </div>
                <div className="cases-dots">
                    {caseStudies.map((_, index) => (
                        <button
                            key={index}
                            onClick={() => handleDotClick(index)}
                            className={index === activeIndex ? 'active' : ''}
                            aria-label={`Ga naar case ${index + 1}`}
                        />
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Cases;
