import { createContext, useContext, useState, useEffect } from 'react';

const LanguageContext = createContext();

export function LanguageProvider({ children }) {
    const [language, setLanguage] = useState(() => {
        const saved = localStorage.getItem('language');
        return saved || 'en';
    });
    const [isTransitioning, setIsTransitioning] = useState(false);

    useEffect(() => {
        localStorage.setItem('language', language);
    }, [language]);

    const toggleLanguage = () => {
        setIsTransitioning(true);
        setTimeout(() => {
            setLanguage(prev => prev === 'en' ? 'id' : 'en');
            setTimeout(() => setIsTransitioning(false), 300);
        }, 150);
    };

    return (
        <LanguageContext.Provider value={{ language, toggleLanguage, isTransitioning }}>
            {children}
        </LanguageContext.Provider>
    );
}

export function useLanguage() {
    const context = useContext(LanguageContext);
    if (!context) {
        throw new Error('useLanguage must be used within a LanguageProvider');
    }
    return context;
}
