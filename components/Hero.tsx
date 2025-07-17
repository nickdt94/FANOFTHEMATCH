import React from 'react';

const Hero: React.FC = () => {
  return (
    <section id="home" className="hero-video-bg pt-24 pb-16 md:pt-32 md:pb-24 relative overflow-hidden min-h-[70vh]">
      {/* Header Image Background */}
      <div className="absolute inset-0 w-full h-full">
        <img
          src="/stadium/FOTM-HEADER.webp"
          alt="Stadium full of fans"
          className="absolute inset-0 w-full h-full object-cover"
        />
        {/* Dark overlay for better text readability */}
        <div className="absolute inset-0 bg-black bg-opacity-50"></div>
      </div>
      <div className="container mx-auto px-6 text-center relative z-10">
        <h1 className="text-5xl md:text-7xl font-black text-white leading-tight mb-4">Turn your fans into ambassadors</h1>
        <p className="text-lg md:text-xl text-main max-w-3xl mx-auto mb-8">Boost your fan engagement with easy-to-use concepts to collect data or stimulate connection between fans and brands. Always customized.</p>
        <button
          className="brand-button text-lg px-8 py-4"
          onClick={() => {
            const demoSection = document.getElementById('contact');
            if (demoSection) demoSection.scrollIntoView({ behavior: 'smooth' });
          }}
        >
          Schedule a Demo
        </button>
      </div>
    </section>
  );
};

export default Hero;
