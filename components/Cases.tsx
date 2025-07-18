

import React, { useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Mousewheel } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import Link from 'next/link';
import { ArrowUpRight, ArrowRight } from 'lucide-react';
import useIntersectionObserver from '../hooks/useIntersectionObserver';
import { caseStudies, createSlug, type CaseStudy } from '../data/cases';

export type { CaseStudy };

const CaseCard = ({ study, delay }: { study: CaseStudy, delay: string }) => {
    const [ref, isVisible] = useIntersectionObserver<HTMLDivElement>({ threshold: 0.1 });
    const slug = createSlug(study.title, study.category);
    return (
        <div ref={ref} className={`h-full scroll-animate ${delay} ${isVisible ? 'is-visible' : ''}`}>
            <Link href={`/case/${slug}`} className="block h-full">
                <div className="h-full case-card bg-card-custom cursor-pointer flex flex-col overflow-hidden">
                    <div className="link-icon">
                        <ArrowUpRight className="w-5 h-5" />
                    </div>
                    <div className="w-full h-56 overflow-hidden">
                        {/* eslint-disable-next-line @next/next/no-img-element */}
                        <img 
                            src={study.image} 
                            alt={study.title} 
                            className="w-full h-full object-cover"
                            draggable="false"
                            onDragStart={(e) => e.preventDefault()}
                        />
                    </div>
                    <div className="p-6 flex flex-col flex-grow">
                        <p className="lime-text font-bold mb-1">{study.category}</p>
                        <h3 className="text-xl font-bold mb-3">{study.title}</h3>
                        <p className="text-inactive text-sm line-clamp-3 mb-4">
                            {study.description}
                        </p>
                        <div className="mt-auto pt-2">
                            <span className="font-semibold lime-text">
                                Bekijk case
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
    // Swiper pagination only, no activeIndex needed

    return (
        <section id="cases" className="bg-brand-bg py-20">
            <div className="container mx-auto px-6 text-center mb-16">
                <h2 className="text-4xl md:text-5xl font-black">Bewezen Succes in de Praktijk</h2>
                <p className="text-lg text-main mt-4 max-w-2xl mx-auto">
                    Van volle stadions tot internationale e-sport toernooien, onze tool maakt overal impact.
                </p>
            </div>
            <div className="container mx-auto px-6 cases-container">
                <Swiper
                    modules={[Mousewheel]}
                    spaceBetween={16}
                    slidesPerView={3}
                    pagination={{ clickable: true }}
                    mousewheel={{ forceToAxis: true, sensitivity: 1 }}
                    // No activeIndex needed
                    style={{
                        paddingBottom: '2rem',
                        maxWidth: '1200px',
                        margin: '0 auto',
                        cursor: 'grab',
                    }}
                    breakpoints={{
                        320: { slidesPerView: 1 },
                        640: { slidesPerView: 2 },
                        1024: { slidesPerView: 3 },
                    }}
                >
                    {caseStudies.map((study, index) => (
                        <SwiperSlide key={index}>
                            <div className="h-full" style={{ minHeight: '480px' }}>
                                <CaseCard 
                                    study={study} 
                                    delay={`delay-${(index % 3) * 100}`} 
                                />
                            </div>
                        </SwiperSlide>
                    ))}
                </Swiper>
            </div>
        </section>
    );
};

export default Cases;
// ...existing code...
