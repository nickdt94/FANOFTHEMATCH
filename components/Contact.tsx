import React, { useState } from 'react';
import { MapPin, Phone, Mail } from 'lucide-react';

const Contact: React.FC = () => {
  const [status, setStatus] = useState({
    submitting: false,
    info: { error: false, msg: null as string | null }
  });

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
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-black lime-text">Start de Conversatie</h2>
          <p className="text-lg text-main mt-4 max-w-2xl mx-auto">We staan klaar om uw vragen te beantwoorden.</p>
        </div>
        <div className="max-w-4xl mx-auto grid md:grid-cols-2 gap-12 md:gap-16 items-start">
          <div className="space-y-8">
            <div>
              <h3 className="text-2xl font-bold">Fan of the Match</h3>
              <p className="text-inactive">part of LiveWall Group</p>
            </div>
            <div className="space-y-4 text-main">
              <p className="flex items-start">
                <MapPin className="w-5 h-5 mr-4 mt-1 lime-text flex-shrink-0" />
                <span>Daws House, 33-35 Daws Lane<br />London NW7 4SD</span>
              </p>
              <p className="flex items-center">
                <Phone className="w-5 h-5 mr-4 lime-text flex-shrink-0" />
                <span>+31 (0) 13 7113708</span>
              </p>
              <p className="flex items-center">
                <Mail className="w-5 h-5 mr-4 lime-text flex-shrink-0" />
                <a href="mailto:info@livewall.co.uk" className="hover:lime-text transition-colors">info@livewall.co.uk</a>
              </p>
            </div>
          </div>
          <div className="bg-card-custom p-8">
            <h3 className="text-2xl font-bold mb-6">Stuur ons een bericht</h3>
            <form
              onSubmit={handleSubmit}
              className="space-y-6"
            >
              <input type="hidden" name="_captcha" value="false" />
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-main mb-2">Naam</label>
                <input type="text" name="name" id="name" required className="form-input" placeholder="Uw naam"/>
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-main mb-2">E-mailadres</label>
                <input type="email" name="email" id="email" required className="form-input" placeholder="Uw e-mailadres"/>
              </div>
              <div>
                <label htmlFor="bericht" className="block text-sm font-medium text-main mb-2">Bericht</label>
                <textarea name="bericht" id="bericht" rows={4} required className="form-input" placeholder="Stel hier uw vraag..."></textarea>
              </div>
              <div>
                <button type="submit" disabled={status.submitting} className="w-full brand-button font-bold py-3 px-8 text-lg transition-opacity disabled:opacity-50 disabled:cursor-not-allowed">
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
    </section>
  );
};

export default Contact;