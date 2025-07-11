import React, { useState, useEffect } from 'react';
import { Camera, HelpCircle, Sparkles } from 'lucide-react';

const GameModes: React.FC = () => {
  const [activeTab, setActiveTab] = useState('fancam');
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  // Stadium images for Contentwall slider
  const stadiumImages = [
    '/stadium/Contentwall 1.png',
    '/stadium/Contentwall 2.png'
  ];

  // Auto-rotate images for Contentwall
  useEffect(() => {
    if (activeTab === 'contentwall') {
      const interval = setInterval(() => {
        setCurrentImageIndex((prev) => (prev + 1) % stadiumImages.length);
      }, 3000); // Change image every 3 seconds

      return () => clearInterval(interval);
    }
  }, [activeTab, stadiumImages.length]);

  const gameModes = [
    {
      id: 'fancam',
      name: 'FANCAM',
      icon: Camera,
      title: 'Fancam',
      description: 'Laat je fans zichzelf filmen en personaliseer hun moment met jullie club-filters. Direct te delen en perfect voor social media buzz.',
      benefits: [
        '100% Persoonlijk & Live in het Stadion',
        'Instant Sociale Media Content'
      ],
      image: 'https://placehold.co/600x450/A2E832/121212?text=Fancam+in+Actie&font=Inter'
    },
    {
      id: 'quiz',
      name: 'QUIZ',
      icon: HelpCircle,
      title: 'Quiz',
      description: 'Interactieve real-time quiz waarbij fans hun smartphone gebruiken om mee te doen. Hun antwoorden verschijnen live op het stadionscherm.',
      benefits: [
        'Real-time & Maximale Engagement',
        'Live Interactie op het Grote Scherm'
      ],
      image: 'https://placehold.co/600x450/A2E832/121212?text=Live+Quiz+op+Scherm&font=Inter'
    },
    {
      id: 'contentwall',
      name: 'CONTENTWALL',
      icon: Sparkles,
      title: 'Contentwall',
      description: 'AI-powered transformatie van selfies naar spectaculaire, themagerichte creaties. Live getoond op het grote scherm voor maximale impact.',
      benefits: [
        'AI Powered & Viraal Potentieel',
        'Onvergetelijke Fan Momenten'
      ],
      images: stadiumImages, // Use multiple images for slider
      hasSlider: true
    }
  ];

  const activeGameMode = gameModes.find(mode => mode.id === activeTab);

  return (
    <section id="spelmodi" className="py-20 bg-[#121212]" style={{ fontFamily: 'Inter, sans-serif' }}>
      <div className="container mx-auto px-6">
        {/* Section Header */}
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-black uppercase tracking-wide text-[#FFFFFF] mb-6">
            Ontdek Onze Spelmodi
          </h2>
          <p className="text-lg text-[#E0E1DD] max-w-3xl mx-auto">
            Drie direct inzetbare spelervaringen. De perfecte conversiestarter om de mogelijkheden van fan engagement te laten zien.
          </p>
        </div>

        {/* Tab Navigation */}
        <div className="mb-8">
          <div className="flex justify-center mb-6">
            <div className="flex space-x-4 flex-wrap justify-center gap-4">
              {gameModes.map((mode) => (
                <button
                  key={mode.id}
                  onClick={() => setActiveTab(mode.id)}
                  className={`px-6 py-3 rounded-full font-bold uppercase tracking-wide transition-all duration-300 ${
                    activeTab === mode.id
                      ? 'bg-[#A2E832] text-[#121212]'
                      : 'bg-[#1A1A1A] text-[#E0E1DD] hover:bg-[#282828]'
                  }`}
                >
                  {mode.name}
                </button>
              ))}
            </div>
          </div>
          {/* Horizontal line */}
          <div className="w-full h-px bg-[#282828] max-w-4xl mx-auto"></div>
        </div>

        {/* Content Panel */}
        {activeGameMode && (
          <div 
            className="animate-fadeIn"
            key={activeTab}
          >
            <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center max-w-6xl mx-auto">
              {/* Text Content - Left Column */}
              <div className="order-2 lg:order-1">
                <div className="flex items-center mb-4">
                  <activeGameMode.icon className="w-8 h-8 text-[#A2E832] mr-3" />
                  <h3 className="text-3xl font-black uppercase tracking-wide text-[#FFFFFF]">{activeGameMode.title}</h3>
                </div>
                
                <p className="text-[#E0E1DD] text-lg mb-6 leading-relaxed">
                  {activeGameMode.description}
                </p>
                
                <ul className="space-y-3">
                  {activeGameMode.benefits.map((benefit, index) => (
                    <li key={index} className="flex items-start">
                      <svg 
                        className="w-6 h-6 text-[#A2E832] mr-3 mt-0.5 flex-shrink-0"
                        fill="none" 
                        stroke="currentColor" 
                        viewBox="0 0 24 24"
                      >
                        <path 
                          strokeLinecap="round" 
                          strokeLinejoin="round" 
                          strokeWidth={2} 
                          d="M5 13l4 4L19 7" 
                        />
                      </svg>
                      <span className="text-[#E0E1DD] font-medium">{benefit}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Image Content - Right Column */}
              <div className="order-1 lg:order-2">
                <div className="relative">
                  {activeGameMode?.hasSlider ? (
                    // Image Slider for Contentwall
                    <div className="relative overflow-hidden rounded-brand">
                      <div className="relative h-[450px]">
                        {activeGameMode.images?.map((image, index) => (
                          <img
                            key={index}
                            src={image}
                            alt={`${activeGameMode.title} voorbeeld ${index + 1}`}
                            className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-1000 ${
                              index === currentImageIndex ? 'opacity-100' : 'opacity-0'
                            }`}
                          />
                        ))}
                        {/* Overlay with text */}
                        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>
                        <div className="absolute bottom-4 left-4 text-white">
                          <p className="text-sm font-medium opacity-90">Live op het grote scherm</p>
                        </div>
                      </div>
                      
                      {/* Slider Indicators */}
                      <div className="absolute bottom-4 right-4 flex space-x-2">
                        {activeGameMode.images?.map((_, index) => (
                          <button
                            key={index}
                            onClick={() => setCurrentImageIndex(index)}
                            className={`w-3 h-3 rounded-full transition-all duration-300 ${
                              index === currentImageIndex 
                                ? 'bg-[#A2E832] scale-110' 
                                : 'bg-white/40 hover:bg-white/60'
                            }`}
                          />
                        ))}
                      </div>
                    </div>
                  ) : activeGameMode.id === 'fancam' ? (
                    // Video for Fancam
                    <div className="relative">
                      <video
                        autoPlay
                        loop
                        muted
                        playsInline
                        className="w-full h-auto rounded-brand shadow-2xl"
                      >
                        <source src="/stadium/Fancam.mp4" type="video/mp4" />
                        Your browser does not support the video tag.
                      </video>
                      <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent rounded-brand"></div>
                    </div>
                  ) : (
                    // Single Image for other tabs
                    <>
                      <img
                        src={activeGameMode?.image}
                        alt={`${activeGameMode?.title} in actie`}
                        className="w-full h-auto rounded-brand shadow-2xl"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent rounded-brand"></div>
                    </>
                  )}
                </div>
              </div>
            </div>
          </div>
        )}
      </div>

      <style jsx>{`
        .animate-fadeIn {
          animation: fadeIn 0.5s ease-in-out;
        }
        
        @keyframes fadeIn {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
      `}</style>
    </section>
  );
};

export default GameModes;