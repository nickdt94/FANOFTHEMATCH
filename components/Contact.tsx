import React, { useState, useEffect } from 'react';
import { MapPin, Phone, Mail, Play, X } from 'lucide-react';

const Contact: React.FC = () => {
  const [showDemoModal, setShowDemoModal] = useState(false);
  const [status, setStatus] = useState({
    submitting: false,
    info: { error: false, msg: null as string | null }
  });

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

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStatus({ submitting: true, info: { error: false, msg: null } });

    const form = e.target as HTMLFormElement;
    const data = new FormData(form);

    try {
      const response = await fetch('https://formsubmit.co/ajax/info@livewall.co.uk', {
        method: 'POST',
        body: data,
        headers: {
          'Accept': 'application/json'
        },
      });

      const json = await response.json();
      
      if (response.ok && json.success === 'true') {
        setStatus({
          submitting: false,
          info: { error: false, msg: "Bedankt! Uw bericht is verzonden." }
        });
        form.reset();
      } else {
        setStatus({
          submitting: false,
          info: { error: true, msg: json.message || "Er is iets misgegaan. Probeer het opnieuw." }
        });
      }
    } catch {
      setStatus({
        submitting: false,
        info: { error: true, msg: "Serverfout. Controleer uw verbinding en probeer het opnieuw." }
      });
    }
  };

  return (
    <section id="contact" className="py-20 bg-brand-bg">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16 scroll-reveal">
          <h2 className="text-4xl md:text-5xl font-black lime-text">Start de Conversatie</h2>
          <p className="text-lg text-main mt-4 max-w-2xl mx-auto">
            Ontdek hoe Fan of the Match uw evenement kan transformeren. Kies de optie die het beste bij u past.
          </p>
        </div>

        {/* Demo and Contact Forms Side by Side */}
        <div className="max-w-6xl mx-auto mb-12">
          <div className="grid lg:grid-cols-2 gap-12 items-start">
            
            {/* Demo Section */}
            <div className="bg-card-custom p-8 scroll-reveal hover:shadow-xl hover:scale-[1.02] transition-all duration-300">
              <div className="text-center mb-8">
                <div className="w-16 h-16 bg-brand-primary rounded-full flex items-center justify-center mx-auto mb-6 hover:scale-110 transition-transform duration-300">
                  <Play className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-white mb-4">Live Demo Aanvragen</h3>
                <p className="text-brand-text mb-6">
                  Zie Fan of the Match in actie met een persoonlijke demo van 15 minuten. Perfect voor een eerste kennismaking.
                </p>
              </div>
              
              <div className="text-center">
                <button 
                  onClick={() => setShowDemoModal(true)}
                  className="brand-button w-full justify-center hover:scale-105 transition-transform duration-200"
                >
                  Plan een Demo
                </button>
              </div>
              
              {/* Contact Information onder demo */}
              <div className="mt-8 pt-8 border-t border-brand-border">
                <div className="space-y-6">
                  <div className="text-center">
                    <h4 className="text-xl font-bold text-white">Fan of the Match</h4>
                    <p className="text-inactive">part of LiveWall Group</p>
                  </div>
                  <div className="space-y-3 text-main text-center">
                    <p className="flex items-center justify-center">
                      <MapPin className="w-4 h-4 mr-3 lime-text flex-shrink-0" />
                      <span className="text-sm">Daws House, 33-35 Daws Lane, London NW7 4SD</span>
                    </p>
                    <p className="flex items-center justify-center">
                      <Phone className="w-4 h-4 mr-3 lime-text flex-shrink-0" />
                      <span className="text-sm">+31 (0) 13 7113708</span>
                    </p>
                    <p className="flex items-center justify-center">
                      <Mail className="w-4 h-4 mr-3 lime-text flex-shrink-0" />
                      <a href="mailto:info@livewall.co.uk" className="hover:lime-text transition-colors text-sm">info@livewall.co.uk</a>
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div className="bg-card-custom p-8 scroll-reveal hover:shadow-xl hover:scale-[1.02] transition-all duration-300" style={{ animationDelay: '200ms' }}>
              <h3 className="text-2xl font-bold mb-6">Stuur ons een bericht</h3>
              <p className="text-brand-text mb-6">We reageren binnen 24 uur op uw vragen.</p>
              <form
                onSubmit={handleSubmit}
                className="space-y-6"
              >
                <input type="hidden" name="_captcha" value="false" />
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-main mb-2">Naam</label>
                  <input type="text" name="name" id="name" required className="brand-input hover:border-brand-primary transition-colors duration-200" placeholder="Uw naam"/>
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-main mb-2">E-mailadres</label>
                  <input type="email" name="email" id="email" required className="brand-input hover:border-brand-primary transition-colors duration-200" placeholder="Uw e-mailadres"/>
                </div>
                <div>
                  <label htmlFor="bericht" className="block text-sm font-medium text-main mb-2">Bericht</label>
                  <textarea name="bericht" id="bericht" rows={4} required className="brand-input hover:border-brand-primary transition-colors duration-200" placeholder="Stel hier uw vraag..."></textarea>
                </div>
                <div>
                  <button type="submit" disabled={status.submitting} className="w-full brand-button font-bold py-3 px-8 text-lg transition-all duration-300 hover:scale-105 disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:scale-100">
                    {status.submitting ? 'Bezig met verzenden...' : 'Verstuur'}
                  </button>
                </div>
                {status.info.msg && (
                  <div className={`mt-4 text-center text-sm font-medium ${status.info.error ? 'text-red-400' : 'lime-text'}`}>
                    {status.info.msg}
                  </div>
                )}
              </form>
            </div>
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

export default Contact;