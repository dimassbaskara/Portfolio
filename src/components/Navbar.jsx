import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { ThemeToggle } from './ThemeToggle';
import { LanguageToggle } from './LanguageToggle';
import { useLanguage } from '../context/LanguageContext';
import { translations } from '../translations/translations';
import { motion, AnimatePresence } from 'framer-motion';

const navItems = [
    { name: 'home', id: 'home' },
    { name: 'about', id: 'about' },
    { name: 'experience', id: 'experience' },
    { name: 'projects', id: 'projects' },
    { name: 'contact', id: 'contact' },
];

export function Navbar() {
    const [isOpen, setIsOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);
    const [showName, setShowName] = useState(false); // Show name when scrolled past hero
    const [activeSection, setActiveSection] = useState('home');
    const { language } = useLanguage();
    const t = translations[language].nav;

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 20);
            // Show name in navbar when scrolled past ~400px (hero section height)
            setShowName(window.scrollY > 400);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        setActiveSection(entry.target.id);
                    }
                });
            },
            {
                threshold: 0.1, // Very low threshold for portrait mode detection
                rootMargin: '-50px 0px -50px 0px' // Reduced margins for more sensitive detection
            }
        );

        navItems.forEach((item) => {
            const element = document.getElementById(item.id);
            if (element) observer.observe(element);
        });

        return () => observer.disconnect();
    }, []);

    const scrollToSection = (id) => {
        setIsOpen(false); // Close menu first for immediate feedback

        // Delay scroll to prevent menu animation from interrupting
        setTimeout(() => {
            const element = document.getElementById(id);
            if (element) {
                const offset = 80; // Navbar height + buffer
                const elementPosition = element.getBoundingClientRect().top;
                const offsetPosition = elementPosition + window.pageYOffset - offset;

                window.scrollTo({
                    top: offsetPosition,
                    behavior: 'smooth'
                });
            }
        }, 50);
    };

    return (
        <nav
            className={`fixed top-0 w-full z-50 transition-all duration-300 ${scrolled
                ? 'bg-white/80 dark:bg-slate-950/80 backdrop-blur-md shadow-sm'
                : 'bg-transparent'
                }`}
        >
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className={`flex items-center h-20 transition-all duration-300 ${showName ? 'justify-between' : 'justify-center'}`}>
                    {/* Desktop: Name/Logo on Left (shows when scrolled) */}
                    {showName && (
                        <div className="hidden md:block flex-shrink-0">
                            <motion.button
                                onClick={() => scrollToSection('home')}
                                initial={{ opacity: 0, x: -20 }}
                                animate={{ opacity: 1, x: 0 }}
                                transition={{ duration: 0.3 }}
                                className="py-2 px-4 rounded-full bg-blue-200 dark:bg-blue-900/30 text-blue-600 dark:text-white text-lg font-medium hover:bg-blue-300 dark:hover:bg-blue-900/50 transition-all"
                            >
                                Muchammad Dimas Mufti Baskara
                            </motion.button>
                        </div>
                    )}

                    {/* Mobile Layout */}
                    <div className="md:hidden w-full flex items-center justify-between relative">
                        {/* Left: Hamburger Menu */}
                        <button
                            onClick={() => setIsOpen(!isOpen)}
                            className="text-slate-700 dark:text-slate-300 hover:text-blue-600 dark:hover:text-blue-400 focus:outline-none relative z-50"
                        >
                            {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
                        </button>

                        {/* Center: Name (shows when scrolled) */}
                        {showName && (
                            <div className="absolute left-1/2 -translate-x-1/2">
                                <motion.button
                                    onClick={() => scrollToSection('home')}
                                    initial={{ opacity: 0, y: -10 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ duration: 0.3 }}
                                    className="py-2 px-4 rounded-3xl bg-blue-200 dark:bg-blue-900/30 text-blue-600 dark:text-white text-sm font-medium hover:bg-blue-300 dark:hover:bg-blue-900/50 transition-all whitespace-nowrap"
                                >
                                    Muchammad Dimas Mufti Baskara
                                </motion.button>
                            </div>
                        )}

                        {/* Right: Language & Theme Toggles */}
                        <div className="flex items-center space-x-2 relative z-50">
                            <LanguageToggle />
                            <ThemeToggle />
                        </div>
                    </div>

                    {/* Desktop Navigation - Centered at top, Right when scrolled */}
                    <div className="hidden md:flex items-center space-x-8">
                        {navItems.map((item) => (
                            <button
                                key={item.name}
                                onClick={() => scrollToSection(item.id)}
                                className={`text-lg font-medium transition-colors hover:text-blue-600 dark:hover:text-blue-400 ${activeSection === item.id
                                    ? 'text-blue-600 dark:text-blue-400'
                                    : 'text-slate-700 dark:text-slate-300'
                                    }`}
                            >
                                {t[item.name]}
                            </button>
                        ))}
                        <div className="flex items-center gap-2">
                            <LanguageToggle />
                            <ThemeToggle />
                        </div>
                    </div>
                </div>
            </div>

            {/* Mobile Menu */}
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: 'auto' }}
                        exit={{ opacity: 0, height: 0 }}
                        transition={{ duration: 0.2, ease: 'easeInOut' }}
                        style={{ pointerEvents: 'auto', overflow: 'hidden' }}
                        className="md:hidden bg-white dark:bg-slate-950 border-t border-slate-200 dark:border-slate-800 relative z-50"
                    >
                        <div className="px-4 pt-2 pb-6 space-y-1">
                            {navItems.map((item) => (
                                <button
                                    key={item.name}
                                    onClick={() => scrollToSection(item.id)}
                                    className={`block w-full text-left px-3 py-2 rounded-md text-lg font-medium ${activeSection === item.id
                                        ? 'bg-blue-50 dark:bg-blue-900/20 text-blue-600 dark:text-blue-400'
                                        : 'text-slate-700 dark:text-slate-300 hover:bg-slate-50 dark:hover:bg-slate-900'
                                        }`}
                                >
                                    {t[item.name]}
                                </button>
                            ))}
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </nav>
    );
}
