import React, { useState, useEffect } from 'react';
import dynamic from 'next/dynamic';
import { Mail, Play, X } from 'lucide-react';
import HubspotFormWrapper from './HubspotFormWrapper';

const Contact: React.FC = () => {
  const [showDemoModal, setShowDemoModal] = useState(false);

  useEffect(() => {
    const observerOptions = {
      threshold: 0.1,
      rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          const delay = (entry.target as HTMLElement).style.animationDelay || '0ms';
          const delayValue = parseInt(delay.replace('ms', '')) || 0;
          
          setTimeout(() => {
            entry.target.classList.add('opacity-100', 'translate-y-0');
            entry.target.classList.remove('opacity-0', 'translate-y-8');
          }, delayValue);
        }
      });
    }, observerOptions);

    // Observe all elements with scroll-reveal class
    const scrollElements = document.querySelectorAll('.scroll-reveal');
    scrollElements.forEach(el => {
      el.classList.add('opacity-0', 'translate-y-8', 'transition-all', 'duration-700', 'ease-out');
      observer.observe(el);
    });

    return () => {
      scrollElements.forEach(el => observer.unobserve(el));
    };
  }, []);

  // ...existing code...

  return (
    <section id="contact" className="py-20 bg-brand-bg">
      <div className="container mx-auto px-6">



        {/* Demo and Contact Forms Side by Side */}
        <div className="max-w-6xl mx-auto mb-12">
          <div className="grid lg:grid-cols-2 gap-10 items-stretch">
            <div className="flex flex-col h-full justify-center">
              <h2 className="text-5xl md:text-8xl font-black lime-text uppercase mb-6 text-center">
                READY TO ENGAGE YOUR FANS?
              </h2>
              <div className="flex-1 flex items-center">
                <div className="bg-card-custom p-8 scroll-reveal hover:shadow-xl hover:scale-[1.02] transition-all duration-300 flex flex-col justify-between h-full w-full">
                  <div className="text-center mb-8">
                    <div className="w-16 h-16 bg-brand-primary rounded-full flex items-center justify-center mx-auto mb-6 hover:scale-110 transition-transform duration-300">
                      <Play className="w-8 h-8 text-white" />
                    </div>
                    <h3 className="text-2xl font-bold text-white mb-4">Schedule a live demo</h3>
                    <p className="text-brand-text mb-6">
                      See Fan of the Match in action with a personal 15-minute demo. Perfect for a first introduction.
                    </p>
                  </div>
                  <div className="text-center mt-auto">
                    <button 
                      onClick={() => setShowDemoModal(true)}
                      className="brand-button w-full justify-center hover:scale-105 transition-transform duration-200"
                    >
                      Book your demo
                    </button>
                  </div>
                </div>
              </div>
            </div>
            {/* Contact Form - visually improved two-column layout */}
            <div className="bg-card-custom p-8 scroll-reveal hover:shadow-xl hover:scale-[1.02] transition-all duration-300 h-full flex flex-col justify-between" style={{ animationDelay: '200ms' }}>
              <div className="flex items-center mb-6">
                <Mail className="w-6 h-6 lime-text mr-3" />
                <h3 className="text-4xl font-bold">Get in contact</h3>
              </div>
              <p className="text-brand-text mb-8">Curious about our Fan of the Match tool? Ask us anything!</p>
              <div className="w-full mt-4">
                <HubspotFormWrapper />
              </div>
            </div>
          </div>
        </div>
      </div>


      {/* Demo Modal - client-only iframe to prevent hydration mismatch */}
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
              {typeof window !== 'undefined' && (
                <iframe
                  src="https://cal.com/koen-verhoof/30min?user=koen-verhoof&overlayCalendar=true"
                  width="100%"
                  height="600"
                  frameBorder="0"
                  title="Book Demo"
                />
              )}
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default Contact;