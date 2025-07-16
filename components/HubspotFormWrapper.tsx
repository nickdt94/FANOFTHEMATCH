import React, { useEffect, useRef } from 'react';

const HubspotFormWrapper: React.FC = () => {
  const formRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const script = document.createElement('script');
    script.src = '//js.hsforms.net/forms/embed/v2.js';
    script.type = 'text/javascript';
    script.charset = 'utf-8';
    script.async = true;
    script.onload = () => {
      if (window.hbspt) {
        window.hbspt.forms.create({
          portalId: '5312942',
          formId: 'ac2326ca-25c3-4fab-84ae-b2167c7c0950',
          region: 'na1',
          target: formRef.current
        });
      }
    };
    document.body.appendChild(script);
    return () => {
      document.body.removeChild(script);
    };
  }, []);

  return (
    <div ref={formRef} className="hubspot-form-embed w-full" />
  );
};

export default HubspotFormWrapper;
