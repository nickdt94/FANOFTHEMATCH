import React, { useRef, useEffect, useState } from 'react';
import { Swords, Users, Target, Calendar, X } from 'lucide-react';

const Product: React.FC = () => {
    const [showDemoModal, setShowDemoModal] = useState(false);
    const [isVisible, setIsVisible] = useState(false);
    const sectionRef = useRef<HTMLElement>(null);

    // Intersection Observer for performance optimization
    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setIsVisible(true);
                    observer.disconnect(); // Stop observing once visible
                }
            },
            { threshold: 0.1 }
        );

        if (sectionRef.current) {
            observer.observe(sectionRef.current);
        }

        return () => observer.disconnect();
    }, []);

    const scenes = [
        {
            id: 'battle',
            title: 'The Battle',
            subtitle: 'Intense Competition',
            description: 'Direct duels tussen fans. Wie is de beste? De ultieme test van kennis en snelheid.',
            icon: Swords,
            color: '#ef4444', // red
            gradient: 'from-red-500/20 to-orange-500/20'
        },
        {
            id: 'teamup',
            title: 'Team Up', 
            subtitle: 'Fans Bonding Together',
            description: 'Fans komen samen, juichen samen en winnen samen! De perfecte teambuilding ervaring.',
            icon: Users,
            color: '#A2E832', // brand green
            gradient: 'from-green-500/20 to-emerald-500/20'
        },
        {
            id: 'knockouts',
            title: 'The Knockouts',
            subtitle: 'Quiz Competition',
            description: 'Schattingsvragen om te bepalen wie de beste speler is. Win de hoofdprijs!',
            icon: Target,
            color: '#f59e0b', // yellow/gold
            gradient: 'from-yellow-500/20 to-amber-500/20'
        }
    ];

    return (
        <section ref={sectionRef} id="product" className="bg-brand-bg py-20">
            {/* Title Section */}
            <div className="container mx-auto px-6 text-center mb-16">
                <h2 className="text-4xl md:text-5xl font-black">Ontdek Onze Spelmodi</h2>
                <p className="text-lg text-main mt-4 max-w-2xl mx-auto">
                    Drie direct inzetbare spelervaringen. De perfecte conversatiestarter om de mogelijkheden van fan engagement te laten zien.
                </p>
            </div>
            
            {/* Horizontal Product Grid */}
            <div className="container mx-auto px-6">
                <div className="product-grid">
                    {scenes.map((scene, index) => (
                        <div 
                            key={scene.id}
                            className={`product-scene-card ${scene.id}-card`}
                            style={{ '--scene-color': scene.color } as React.CSSProperties}
                        >
                            {/* Background Gradient */}
                            <div className={`absolute inset-0 bg-gradient-to-br ${scene.gradient} opacity-30 rounded-2xl`}></div>
                            
                            {/* Scene Content */}
                            <div className="scene-card-content">
                                {/* Scene Info */}
                                <div className="scene-card-info">
                                    <scene.icon className="scene-card-icon" size={60} style={{ color: scene.color }} />
                                    <div className="scene-card-text">
                                        <h3 className="scene-card-title">{scene.title}</h3>
                                        <p className="scene-card-subtitle">{scene.subtitle}</p>
                                        <p className="scene-card-description">{scene.description}</p>
                                    </div>
                                </div>
                                
                                {/* Animation Area - Only render when visible */}
                                <div className="scene-card-animation">
                                    {isVisible && scene.id === 'battle' && (
                                        <div className="battle-arena-card">
                                            <div className="battle-player player-left">
                                                <div className="player-avatar"></div>
                                                <div className="battle-sword sword-left"></div>
                                                <div className="battle-energy energy-left"></div>
                                            </div>
                                            <div className="battle-center">
                                                <div className="battle-clash"></div>
                                                <div className="battle-sparks">
                                                    <div className="spark spark-1"></div>
                                                    <div className="spark spark-2"></div>
                                                    <div className="spark spark-3"></div>
                                                    <div className="spark spark-4"></div>
                                                </div>
                                            </div>
                                            <div className="battle-player player-right">
                                                <div className="player-avatar"></div>
                                                <div className="battle-sword sword-right"></div>
                                                <div className="battle-energy energy-right"></div>
                                            </div>
                                        </div>
                                    )}
                                    
                                    {isVisible && scene.id === 'teamup' && (
                                        <div className="teamup-scene-card">
                                            <div className="team-circle">
                                                <div className="fan-avatar fan-1">
                                                    <div className="cheer-bubble">🎉</div>
                                                </div>
                                                <div className="fan-avatar fan-2">
                                                    <div className="cheer-bubble">⚽</div>
                                                </div>
                                                <div className="fan-avatar fan-3">
                                                    <div className="cheer-bubble">🏆</div>
                                                </div>
                                                <div className="fan-avatar fan-4">
                                                    <div className="cheer-bubble">💪</div>
                                                </div>
                                                <div className="fan-avatar fan-5">
                                                    <div className="cheer-bubble">🔥</div>
                                                </div>
                                                <div className="fan-avatar fan-6">
                                                    <div className="cheer-bubble">⭐</div>
                                                </div>
                                            </div>
                                            <div className="unity-waves">
                                                <div className="wave wave-1"></div>
                                                <div className="wave wave-2"></div>
                                                <div className="wave wave-3"></div>
                                            </div>
                                            <div className="team-bond-lines">
                                                <div className="bond-line line-1"></div>
                                                <div className="bond-line line-2"></div>
                                                <div className="bond-line line-3"></div>
                                            </div>
                                        </div>
                                    )}
                                    
                                    {isVisible && scene.id === 'knockouts' && (
                                        <div className="quiz-arena-card">
                                            <div className="question-board">
                                                <div className="question-text">?</div>
                                                <div className="estimation-bar">
                                                    <div className="estimate estimate-1">67%</div>
                                                    <div className="estimate estimate-2">42%</div>
                                                    <div className="estimate estimate-3">89%</div>
                                                </div>
                                            </div>
                                            <div className="competing-players">
                                                <div className="quiz-player player-a">
                                                    <div className="player-score">89</div>
                                                    <div className="confidence-meter meter-a"></div>
                                                </div>
                                                <div className="quiz-player player-b">
                                                    <div className="player-score">67</div>
                                                    <div className="confidence-meter meter-b"></div>
                                                </div>
                                                <div className="quiz-player player-c">
                                                    <div className="player-score">42</div>
                                                    <div className="confidence-meter meter-c"></div>
                                                </div>
                                            </div>
                                            <div className="winner-crown">
                                                <div className="crown">👑</div>
                                                <div className="victory-sparkles">
                                                    <div className="sparkle sparkle-1">✨</div>
                                                    <div className="sparkle sparkle-2">⭐</div>
                                                    <div className="sparkle sparkle-3">✨</div>
                                                </div>
                                            </div>
                                        </div>
                                    )}
                                </div>
                            </div>
                            
                            {/* Scene Number */}
                            <div className="scene-card-number">
                                <span>{String(index + 1).padStart(2, '0')}</span>
                            </div>
                        </div>
                    ))}
                </div>
                
                {/* Demo Booking Bar */}
                <div className="demo-booking-bar">
                    <div className="demo-booking-content">
                        <div className="demo-booking-text">
                            <Calendar className="demo-icon" size={24} />
                            <span className="demo-label">Book demo:</span>
                            <span className="demo-description">Ontdek hoe deze spelmodi jouw fan engagement transformeren</span>
                        </div>
                        <button 
                            className="demo-cta-button"
                            onClick={() => setShowDemoModal(true)}
                        >
                            Plan je Demo
                        </button>
                    </div>
                </div>
            </div>
            
            {/* Demo Modal */}
            {showDemoModal && (
                <div className="demo-modal-overlay" onClick={() => setShowDemoModal(false)}>
                    <div className="demo-modal-content" onClick={(e) => e.stopPropagation()}>
                        <button 
                            className="demo-modal-close"
                            onClick={() => setShowDemoModal(false)}
                        >
                            <X size={24} />
                        </button>
                        <div className="demo-modal-header">
                            <h3>Book je Demo</h3>
                            <p>Ontdek hoe onze spelmodi jouw fan engagement transformeren</p>
                        </div>
                        <div className="demo-modal-iframe">
                            <iframe
                                src="https://cal.com/fanofthematch"
                                width="100%"
                                height="600"
                                frameBorder="0"
                                title="Book Demo"
                            />
                        </div>
                    </div>
                </div>
            )}
        </section>
    );
};

export default Product;