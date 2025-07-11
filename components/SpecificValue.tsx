import React from 'react';

const SpecificValue: React.FC = () => {
  const targetAudiences = [
    {
      title: "For Clubs & Leagues",
      benefits: [
        "Increase fan engagement during matches and events",
        "Collect valuable fan data for better targeting and communication"
      ],
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
        </svg>
      )
    },
    {
      title: "For Sponsoring Brands", 
      benefits: [
        "Create memorable brand experiences that resonate with fans",
        "Measure sponsorship ROI with concrete engagement metrics"
      ],
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
        </svg>
      )
    },
    {
      title: "For Event Organizers",
      benefits: [
        "Transform any event into an interactive experience",
        "Generate social media content and increase event visibility"
      ],
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
        </svg>
      )
    }
  ];

  return (
    <section className="py-20 bg-brand-bg">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-black text-white mb-6">
            Specific Value. Direct Results.
          </h2>
          <p className="text-lg text-brand-text max-w-3xl mx-auto">
            Fan of the Match delivers concrete benefits for sports clubs & leagues, sponsoring brands, and event organizers.
          </p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8">
          {targetAudiences.map((audience, index) => (
            <div key={index} className="bg-brand-card-bg border border-brand-border rounded-brand p-8 text-center shadow-lg hover:shadow-xl transition-shadow duration-300">
              <div className="w-16 h-16 bg-brand-primary rounded-full flex items-center justify-center mx-auto mb-6 text-white">
                {audience.icon}
              </div>
              <h3 className="text-xl font-bold text-white mb-6">{audience.title}</h3>
              <ul className="space-y-4">
                {audience.benefits.map((benefit, benefitIndex) => (
                  <li key={benefitIndex} className="text-brand-text flex items-start">
                    <span className="text-brand-primary mr-3 text-lg font-bold">•</span>
                    <span>{benefit}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SpecificValue;
