import React from 'react';

const Hero: React.FC = () => {
  return (
    <section id="home" className="hero-video-bg pt-24 pb-16 md:pt-32 md:pb-24 relative overflow-hidden min-h-[70vh]">
        {/* Video Background */}
        <div className="absolute inset-0 w-full h-full">
          <video
            autoPlay
            muted
            loop
            playsInline
            className="absolute inset-0 w-full h-full object-cover"
            poster="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='1' height='1'%3E%3C/svg%3E"
          >
            <source 
              src="https://videos.ctfassets.net/zinw69cunj6l/1zdWz9vYXq5EDZ6oAWI2K6/9ad721e8961fa3befddd975028de3875/United_Playgrounds_-_Stoov_lq__1_.mp4" 
              type="video/mp4" 
            />
          </video>
          {/* Dark overlay for better text readability */}
          <div className="absolute inset-0 bg-black bg-opacity-50"></div>
        </div>
        
        <div className="container mx-auto px-6 text-center relative z-10">
            <h1 className="text-5xl md:text-7xl font-black text-white leading-tight mb-4">Turn Every Fan Into Your Brand Ambassador</h1>
            <p className="text-lg md:text-xl text-main max-w-3xl mx-auto mb-16">The simple tool to engage thousands of fans simultaneously, collect valuable data, and bring sponsor activations to life.</p>
            
            {/* Statistics Cards */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-3 md:gap-4 max-w-3xl mx-auto">
              <div className="stat-card">
                <div className="stat-icon">
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                </div>
                <div className="stat-number">25<span className="stat-unit">min</span></div>
                <div className="stat-title">Average playtime of hypercasual games</div>
              </div>
              
              <div className="stat-card">
                <div className="stat-icon">
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <div className="stat-number">87<span className="stat-unit">%</span></div>
                <div className="stat-title">Higher brand recall</div>
              </div>
              
              <div className="stat-card">
                <div className="stat-icon">
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
                  </svg>
                </div>
                <div className="stat-number">340<span className="stat-unit">%</span></div>
                <div className="stat-title">More data collection</div>
              </div>
            </div>
        </div>
    </section>
  );
};

export default Hero;
