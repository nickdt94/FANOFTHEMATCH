import React from 'react';
import { MapPin, Phone, Mail } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-footer-custom py-12">
      <div className="container mx-auto px-6">
          <div className="space-y-6">
            <div className="text-center">
              <h4 className="text-xl font-bold text-white">Fan of the <span className="lime-text">Match</span></h4>
              <p className="text-inactive">part of LiveWall Group</p>
            </div>
            <div className="mt-8 pt-8 border-t border-brand-border">
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
    </footer>
  );
};

export default Footer;