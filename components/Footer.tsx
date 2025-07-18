import React from 'react';
import { MapPin, Phone, Mail } from 'lucide-react';
import Image from 'next/image';

const Footer: React.FC = () => {
  return (
    <footer className="bg-footer-custom py-8 border-t border-brand-border">
      <div className="container mx-auto px-6 flex flex-col md:flex-row md:items-start md:justify-between gap-8">
        {/* Left: Wave + tagline */}
        <div className="flex flex-col items-center md:items-start md:w-1/3">
          <a href="https://www.wecreatewaves.com/" target="_blank" rel="noopener" aria-label="Wave">
            <img src="/Footer/logo-wave-white.svg" alt="Wave" className="h-8 w-auto mb-2" />
          </a>
          <p className="text-main text-xs text-center md:text-left max-w-xs mb-1">
            A creative, tech based fan engagement agency. We build digital experiences that attract, engage and entertain your fans.
          </p>
          <span className="text-inactive text-xs mt-1">Fan of the Match is part of Wave</span>
        </div>

        {/* Center: Contactgegevens */}
        <div className="flex flex-col items-center md:items-center md:w-1/3 mt-4 md:mt-0 w-full">
          <div className="flex flex-col gap-1 text-main text-sm w-full">
            <div className="flex items-center justify-center mb-1">
              <MapPin className="w-4 h-4 mr-2 flex-shrink-0" style={{ color: '#FF7A00' }} />
              <span>Stationsstraat 5, 5038EA Tilburg, Netherlands</span>
            </div>
            <div className="border-t border-brand-border my-2 w-full"></div>
            <div className="flex items-center justify-center mb-1">
              <Phone className="w-4 h-4 mr-2 flex-shrink-0" style={{ color: '#FF7A00' }} />
              <span>+31 13 71 13 708</span>
            </div>
            <div className="border-t border-brand-border my-2 w-full"></div>
            <div className="flex items-center justify-center">
              <Mail className="w-4 h-4 mr-2 flex-shrink-0" style={{ color: '#FF7A00' }} />
              <a href="mailto:info@wecreatewaves.com" className="transition-colors hover:text-[#FF7A00]">info@wecreatewaves.com</a>
            </div>
          </div>
        </div>

        {/* Right: LinkedIn */}
        <div className="flex flex-col items-center md:items-end md:w-1/3 mt-6 md:mt-0">
          <span className="text-white font-semibold mb-2">Follow us on:</span>
          <a href="https://www.linkedin.com/company/wecreatewaves/" target="_blank" rel="noopener" aria-label="LinkedIn">
            <Image src="/Footer/linkedin.svg" alt="LinkedIn" width={36} height={36} className="h-9 w-9 filter invert opacity-90 hover:invert-0 hover:brightness-0 hover:opacity-100 transition border border-white rounded-full p-1" />
          </a>
        </div>
      </div>
      {/* Divider */}
      <div className="border-t border-brand-border my-6"></div>
    </footer>
  );
};

export default Footer;