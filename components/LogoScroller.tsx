import React from 'react';

const LogoScroller: React.FC = () => {
  const logos = [
    { name: 'UEFA Euro 2024', src: '/logos/euro2024.png' },
    { name: 'COPA', src: '/logos/copa.png' },
    { name: 'F1 Dutch GP', src: '/logos/f1-dutch-gp.png' },
    { name: 'KPN', src: '/logos/kpn.png' },
    { name: 'KNVB', src: '/logos/knvb.png' },
    { name: 'Real Sociedad', src: '/logos/real-sociedad.png' },
    { name: 'West Ham United', src: '/logos/west-ham.png' },
    { name: 'Red Bull Salzburg', src: '/logos/red-bull-salzburg.png' },
    { name: 'Oxford United', src: '/logos/oxford-united.png' },
    { name: 'Manchester City', src: '/logos/manchester-city.png' },
    { name: 'KAA Gent', src: '/logos/kaa-gent.png' },
    { name: 'FC Robinstijn', src: '/logos/fc-robinstijn.png' },
    { name: 'Borussia Dortmund', src: '/logos/bvb-dortmund.png' },
    { name: 'FC Barcelona', src: '/logos/fc-barcelona.png' },
    { name: 'Ajax', src: '/logos/ajax.png' },
  ];

  return (
    <div className="logo-scroller-container bg-gray-800 py-8">
      <div className="container mx-auto px-6 text-center mb-6">
        <p className="text-xs uppercase tracking-wider text-gray-400 font-medium">
          Gekozen door de grootste namen in sport en entertainment
        </p>
      </div>
      <div className="logo-scroller">
        <div className="logo-track">
          {/* First set of logos */}
          {logos.map((logo, index) => (
            <div key={`first-${index}`} className="logo-item">
              <img 
                src={logo.src} 
                alt={logo.name}
                className="logo-image"
                onError={(e) => {
                  // Fallback to a placeholder if image fails to load
                  const target = e.target as HTMLImageElement;
                  target.src = `data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='120' height='60' viewBox='0 0 120 60'%3E%3Crect width='120' height='60' fill='%23f3f4f6'/%3E%3Ctext x='60' y='35' text-anchor='middle' font-family='Arial' font-size='12' fill='%23666'%3E${logo.name}%3C/text%3E%3C/svg%3E`;
                }}
              />
            </div>
          ))}
          {/* Second set of logos for seamless loop */}
          {logos.map((logo, index) => (
            <div key={`second-${index}`} className="logo-item">
              <img 
                src={logo.src} 
                alt={logo.name}
                className="logo-image"
                onError={(e) => {
                  const target = e.target as HTMLImageElement;
                  target.src = `data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='120' height='60' viewBox='0 0 120 60'%3E%3Crect width='120' height='60' fill='%23f3f4f6'/%3E%3Ctext x='60' y='35' text-anchor='middle' font-family='Arial' font-size='12' fill='%23666'%3E${logo.name}%3C/text%3E%3C/svg%3E`;
                }}
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default LogoScroller;
