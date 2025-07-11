import React, { useRef, useState } from 'react';
import { Camera, HelpCircle, Sparkles, Calendar, X } from 'lucide-react';

const Product: React.FC = () => {
    const [showDemoModal, setShowDemoModal] = useState(false);
    const sectionRef = useRef<HTMLElement>(null);

    const scenes = [
        {
            id: 'fancam',
            title: 'FANCAM 🎬📱',
            subtitle: '100% Personal • LIVE Stadium',
            description: 'Capture unforgettable stadium moments from your fans\' perspective! Our FanCam transforms in-stadium interaction by making fans the stars themselves, using their own mobile devices. With a single tap, they can capture their unique moment and personalize it with custom filters in your club\'s style.',
            icon: Camera,
            color: '#A2E832', // brand green
            gradient: 'from-green-500/20 to-emerald-500/20'
        },
        {
            id: 'quiz',
            title: 'QUIZ ❓⚡', 
            subtitle: 'REAL Time • MAX Engage',
            description: 'Transform your match day into an unforgettable, interactive experience with Fan of the Match. Fans use their smartphone to join real-time quizzes and interactive challenges. Their participation is displayed live on the stadium screen, creating thrilling, shared moments for everyone.',
            icon: HelpCircle,
            color: '#ef4444', // energetic red
            gradient: 'from-red-500/20 to-orange-500/20'
        },
        {
            id: 'contentwall',
            title: 'CONTENTWALL ✨🦸‍♂️',
            subtitle: 'AI Powered • VIRAL Ready',
            description: 'Get ready to light up the stadium! Our groundbreaking AI technology instantly transforms your selfie into a spectacular, themed creation, showcased live on the giant screen! Simply scan the QR code, upload your photo, and watch as our AI conjures your personalized image in seconds.',
            icon: Sparkles,
            color: '#f59e0b', // golden glow
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
                                {/* <div className="scene-card-animation">
                                    {isVisible && scene.id === 'fancam' && (
                                        <div className="fancam-arena-card">
                                            <div className="floating-phone">
                                                <div className="phone-body">
                                                    <div className="phone-screen"></div>
                                                    <div className="phone-notch"></div>
                                                </div>
                                                <div className="camera-flash-ring"></div>
                                                <div className="phone-float-shadow"></div>
                                            </div>
                                            <div className="stadium-screen">
                                                <div className="screen-frame">
                                                    <div className="screen-bezel"></div>
                                                    <div className="screen-display">
                                                        <div className="live-indicator">LIVE</div>
                                                        <div className="moment-particles">
                                                            <div className="particle particle-1"></div>
                                                            <div className="particle particle-2"></div>
                                                            <div className="particle particle-3"></div>
                                                            <div className="particle particle-4"></div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="screen-glow"></div>
                                            </div>
                                            <div className="connection-beam">
                                                <div className="data-pulse pulse-1"></div>
                                                <div className="data-pulse pulse-2"></div>
                                                <div className="data-pulse pulse-3"></div>
                                            </div>
                                        </div>
                                    )}
                                    
                                    {isVisible && scene.id === 'quiz' && (
                                        <div className="quiz-engagement-card">
                                            <div className="question-center">
                                                <div className="question-bubble">
                                                    <div className="question-mark">?</div>
                                                    <div className="bubble-shine"></div>
                                                </div>
                                                <div className="pulse-rings">
                                                    <div className="ring ring-1"></div>
                                                    <div className="ring ring-2"></div>
                                                    <div className="ring ring-3"></div>
                                                </div>
                                                <div className="timer-bar">
                                                    <div className="timer-fill"></div>
                                                </div>
                                            </div>
                                            <div className="device-cluster">
                                                <div className="device device-1">
                                                    <div className="device-screen">
                                                        <div className="answer-option active">A</div>
                                                    </div>
                                                    <div className="sync-pulse"></div>
                                                </div>
                                                <div className="device device-2">
                                                    <div className="device-screen">
                                                        <div className="answer-option">B</div>
                                                    </div>
                                                    <div className="sync-pulse"></div>
                                                </div>
                                                <div className="device device-3">
                                                    <div className="device-screen">
                                                        <div className="answer-option active">C</div>
                                                    </div>
                                                    <div className="sync-pulse"></div>
                                                </div>
                                            </div>
                                            <div className="engagement-ripples">
                                                <div className="ripple ripple-1"></div>
                                                <div className="ripple ripple-2"></div>
                                                <div className="ripple ripple-3"></div>
                                            </div>
                                        </div>
                                    )}
                                    
                                    {isVisible && scene.id === 'contentwall' && (
                                        <div className="contentwall-transformation-card">
                                            <div className="selfie-stage">
                                                <div className="selfie-frame">
                                                    <div className="person-silhouette"></div>
                                                    <div className="camera-viewfinder">
                                                        <div className="viewfinder-corner tl"></div>
                                                        <div className="viewfinder-corner tr"></div>
                                                        <div className="viewfinder-corner bl"></div>
                                                        <div className="viewfinder-corner br"></div>
                                                    </div>
                                                </div>
                                                <div className="capture-burst"></div>
                                            </div>
                                            <div className="ai-processor">
                                                <div className="ai-core">
                                                    <div className="neural-network">
                                                        <div className="node node-1"></div>
                                                        <div className="node node-2"></div>
                                                        <div className="node node-3"></div>
                                                        <div className="node node-4"></div>
                                                        <div className="connection conn-1"></div>
                                                        <div className="connection conn-2"></div>
                                                        <div className="connection conn-3"></div>
                                                    </div>
                                                    <div className="processing-ring"></div>
                                                </div>
                                                <div className="magic-particles">
                                                    <div className="magic-dot dot-1"></div>
                                                    <div className="magic-dot dot-2"></div>
                                                    <div className="magic-dot dot-3"></div>
                                                    <div className="magic-dot dot-4"></div>
                                                </div>
                                            </div>
                                            <div className="result-display">
                                                <div className="big-screen">
                                                    <div className="screen-border"></div>
                                                    <div className="superhero-transformation">
                                                        <div className="hero-silhouette"></div>
                                                        <div className="cape-flow"></div>
                                                        <div className="power-aura"></div>
                                                    </div>
                                                    <div className="viral-metrics">
                                                        <div className="metric-bar bar-1"></div>
                                                        <div className="metric-bar bar-2"></div>
                                                        <div className="metric-bar bar-3"></div>
                                                    </div>
                                                </div>
                                                <div className="golden-radiance"></div>
                                            </div>
                                        </div>
                                    )}
                                </div> */}
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
