import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Database, Server, Code } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';
import { translations } from '../translations/translations';

export function Hero() {
    const [text, setText] = useState('');
    const [isDeleting, setIsDeleting] = useState(false);
    const [loopNum, setLoopNum] = useState(0);
    const [delta, setDelta] = useState(30);
    const { language } = useLanguage();
    const t = translations[language].hero;

    const period = 2000;
    const phrases = t.phrases;

    useEffect(() => {
        let ticker = setInterval(() => {
            tick();
        }, delta);

        return () => clearInterval(ticker);
    }, [text, delta]);

    const tick = () => {
        let i = loopNum % phrases.length;
        let fullText = phrases[i];
        let updatedText = isDeleting
            ? fullText.substring(0, text.length - 1)
            : fullText.substring(0, text.length + 1);

        setText(updatedText);

        if (isDeleting) {
            setDelta(30); // Constant fast delete speed for smoothness
        }

        if (!isDeleting && updatedText === fullText) {
            setIsDeleting(true);
            setDelta(3000); // Wait 5 seconds
        } else if (isDeleting && updatedText === '') {
            setIsDeleting(false);
            setLoopNum(loopNum + 1);
            setDelta(30); // Reset speed to 100ms
        } else if (!isDeleting && delta === 3000) {
            setDelta(30); // Normal typing speed 100ms
        }
    };

    return (
        <div className="relative min-h-[calc(100vh-5rem)] flex items-center justify-center overflow-hidden">
            {/* Background decoration */}
            <div className="absolute inset-0 -z-10 bg-slate-50 dark:bg-slate-950">
                <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-blue-200/20 dark:bg-blue-900/20 rounded-full blur-3xl animate-pulse" />
                <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-indigo-200/20 dark:bg-indigo-900/20 rounded-full blur-3xl animate-pulse delay-1000" />
            </div>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                >
                    <div className="inline-block max-w-full py-4 px-6 md:py-6 md:px-8 rounded-3xl md:rounded-full bg-blue-200 dark:bg-blue-900/30 text-blue-600 dark:text-white text-xl md:text-3xl font-medium mb-6 mx-auto break-words whitespace-normal">
                        Muchammad Dimas Mufti Baskara
                    </div>
                    <h1 className="text-5xl md:text-7xl font-bold tracking-tight text-slate-900 dark:text-white mb-6">
                        {t.title1} <br />
                        <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-indigo-600 dark:from-blue-400 dark:to-indigo-400">
                            {t.title2}
                        </span>
                    </h1>
                    <div className="max-w-3xl mx-auto text-xl text-slate-700 dark:text-slate-200 mb-8">
                        <p className="mb-0 font-medium">{t.greeting}</p>
                        <p className="min-h-[3.5rem] md:min-h-[2rem] text-slate-700 dark:text-slate-200 italic">
                            {text}
                            <span className="animate-pulse ml-1 font-thin text-slate-400 dark:text-slate-500">|</span>
                        </p>
                    </div>

                    <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                        <a
                            href="#projects"
                            className="px-8 py-3 rounded-full bg-blue-600 hover:bg-blue-700 text-white font-medium transition-colors flex items-center"
                        >
                            {t.viewProjects} <ArrowRight className="ml-2 h-4 w-4" />
                        </a>
                        <a
                            href="#contact"
                            className="px-8 py-3 rounded-full bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-slate-700 dark:text-slate-300 hover:bg-slate-50 dark:hover:bg-slate-700 font-medium transition-colors"
                        >
                            {t.contactMe}
                        </a>
                    </div>
                </motion.div>

                {/* Tech Stack Floating Icons */}
                <div className="mt-20 flex justify-center gap-8 opacity-75">
                    <motion.div
                        animate={{ y: [0, -10, 0] }}
                        transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
                    >
                        <Database className="h-12 w-12 text-slate-400" />
                    </motion.div>
                    <motion.div
                        animate={{ y: [0, -15, 0] }}
                        transition={{ duration: 4, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
                    >
                        <Server className="h-12 w-12 text-slate-400" />
                    </motion.div>
                    <motion.div
                        animate={{ y: [0, -10, 0] }}
                        transition={{ duration: 3.5, repeat: Infinity, ease: "easeInOut", delay: 1 }}
                    >
                        <Code className="h-12 w-12 text-slate-400" />
                    </motion.div>
                </div>
            </div>
        </div>
    );
}
