import React, { useEffect, useRef } from 'react';

const HubspotFormWrapper: React.FC = () => {
  const formRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (typeof window === 'undefined') return;

    function loadForm() {
      if (window.hbspt && formRef.current) {
        window.hbspt.forms.create({
          portalId: '5312942',
          formId: 'ac2326ca-25c3-4fab-84ae-b2167c7c0950',
          region: 'na1',
          target: `#${formRef.current.id}`
        });
      }
    }

    // Assign a unique id to the formRef div if not present
    if (formRef.current && !formRef.current.id) {
      formRef.current.id = 'hubspot-form-' + Math.random().toString(36).substr(2, 9);
    }

    if (window.hbspt) {
      loadForm();
      return;
    }

    const script = document.createElement('script');
    script.src = 'https://js.hsforms.net/forms/embed/v2.js';
    script.type = 'text/javascript';
    script.charset = 'utf-8';
    script.async = true;
    script.onload = () => {
      setTimeout(loadForm, 100);
    };
    document.body.appendChild(script);
    return () => {
      document.body.removeChild(script);
    };
  }, []);

  return (
    <div ref={formRef} className="hubspot-form-embed w-full" style={{ minHeight: 400, background: 'transparent', zIndex: 2 }} />
  );
};

export default HubspotFormWrapper;
