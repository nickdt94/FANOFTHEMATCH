'use client'

import React, { useRef, useEffect } from 'react';

const Spotlight: React.FC = () => {
    const spotlightRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const handleMouseMove = (e: MouseEvent) => {
            if (spotlightRef.current) {
                // Update CSS custom properties with mouse position
                spotlightRef.current.style.setProperty('--mouse-x', `${e.clientX}px`);
                spotlightRef.current.style.setProperty('--mouse-y', `${e.clientY}px`);
                // Show the spotlight when mouse moves
                spotlightRef.current.style.opacity = '1';
            }
        };

        const handleMouseLeave = () => {
            if (spotlightRef.current) {
                // Hide spotlight when mouse leaves the window
                spotlightRef.current.style.opacity = '0';
            }
        };

        // Add event listeners
        window.addEventListener('mousemove', handleMouseMove);
        document.addEventListener('mouseleave', handleMouseLeave);

        // Cleanup function
        return () => {
            window.removeEventListener('mousemove', handleMouseMove);
            document.removeEventListener('mouseleave', handleMouseLeave);
        };
    }, []);

    return (
        <div 
            ref={spotlightRef}
            className="spotlight"
            style={{
                position: 'fixed',
                top: 0,
                left: 0,
                width: '100vw',
                height: '100vh',
                pointerEvents: 'none',
                zIndex: 0,
                background: 'radial-gradient(circle 400px at var(--mouse-x, 50vw) var(--mouse-y, 50vh), rgba(255, 255, 255, 0.08), transparent 70%)',
                opacity: 0,
                transition: 'opacity 0.3s ease-out'
            }}
        />
    );
};

export default Spotlight;
