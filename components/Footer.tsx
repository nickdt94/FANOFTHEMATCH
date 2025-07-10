import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-footer-custom py-12">
      <div className="container mx-auto px-6">
        <div className="text-center text-main">
           <a href="#home" className="text-xl font-black tracking-tighter text-white mb-2 inline-block">
            Fan of the <span className="lime-text">Match</span>
          </a>
          <p className="text-sm text-inactive">Een product van <a href="#" className="underline hover:lime-text">Wave</a>, onderdeel van de <a href="#" className="underline hover:lime-text">LiveWall Group</a>.</p>
        </div>
        <div className="mt-8 border-t border-brand-border pt-8 text-center text-inactive">
          <p className="text-sm">© 2025 Fan of the Match. Alle rechten voorbehouden.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;