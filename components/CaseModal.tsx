import React, { useEffect } from 'react';
import { X } from 'lucide-react';
import type { CaseStudy } from './Cases';

interface CaseModalProps {
    caseData: CaseStudy;
    onClose: () => void;
}

const CaseModal: React.FC<CaseModalProps> = ({ caseData, onClose }) => {
    useEffect(() => {
        const handleEsc = (event: KeyboardEvent) => {
            if (event.key === 'Escape') {
                onClose();
            }
        };
        window.addEventListener('keydown', handleEsc);
        document.body.style.overflow = 'hidden';

        return () => {
            window.removeEventListener('keydown', handleEsc);
            document.body.style.overflow = '';
        };
    }, [onClose]);

    return (
        <div className="modal-backdrop" onClick={onClose}>
            <div className="modal-content bg-card-custom" onClick={(e) => e.stopPropagation()}>
                <button onClick={onClose} className="modal-close-button" aria-label="Sluiten">
                    <X className="w-6 h-6" />
                </button>
                <img src={caseData.image} alt={caseData.title} className="modal-image" />
                <div className="modal-text-content p-6 md:p-8">
                    <div className="flex-grow overflow-y-auto pr-4">
                        <p className="font-bold mb-1" style={{ color: '#FF7A00' }}>{caseData.category}</p>
                        <h3 className="text-2xl font-bold mb-4">{caseData.title}</h3>
                        <p className="text-main text-base mb-6">{caseData.longDescription || caseData.description}</p>
                    </div>
                    {caseData.url && caseData.url !== '#' && (
                         <div className="pt-4 mt-auto">
                            <a href={caseData.url} target="_blank" rel="noopener noreferrer" className="brand-button">
                                Bekijk de volledige case
                            </a>
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
};

export default CaseModal;
