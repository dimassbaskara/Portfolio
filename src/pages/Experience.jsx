import { motion } from 'framer-motion';
import { Briefcase, Users, Award } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';
import { translations } from '../translations/translations';

const experiencesConfig = [
    {
        key: 'telkomsel',
        icon: Briefcase,
        logo: "https://assets.telkomsel.com/public/logo-telkomsel.png",
        type: "work"
    },
    {
        key: 'hmif',
        icon: Users,
        logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQJmw2Afzf0AjrdJVB1PVk9r8mwkruex4zTmg&s",
        type: "leadership"
    },
    {
        key: 'karangTaruna',
        icon: Users,
        logo: "https://upload.wikimedia.org/wikipedia/id/f/f8/Logo_Karang_Taruna_New.png",
        type: "leadership"
    }
];

export function Experience() {
    const { language } = useLanguage();
    const t = translations[language].experience;

    const experiences = experiencesConfig.map(config => ({
        ...config,
        ...t[config.key]
    }));
    return (
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="space-y-12"
            >
                <div className="text-center">
                    <h2 className="text-3xl font-bold text-slate-900 dark:text-white sm:text-4xl">{t.title}</h2>
                    <p className="mt-4 text-lg text-slate-600 dark:text-slate-400 max-w-2xl mx-auto">
                        {t.subtitle}
                    </p>
                </div>

                <div className="relative space-y-8 before:absolute before:inset-0 before:ml-5 before:-translate-x-px md:before:mx-auto md:before:translate-x-0 before:h-full before:w-0.5 before:bg-gradient-to-b before:from-transparent before:via-slate-300 before:to-transparent dark:before:via-slate-700">
                    {experiences.map((exp, index) => {
                        const isOdd = index % 2 !== 0;
                        return (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 50 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.5, delay: index * 0.1 }}
                                className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group is-active"
                            >
                                {/* Icon Container with Logo */}
                                <div className="relative md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2">
                                    {/* Type Icon - perfectly centered on vertical timeline */}
                                    <div className="flex items-center justify-center w-10 h-10 rounded-full border border-white dark:border-slate-900 bg-slate-50 dark:bg-slate-800 shadow shrink-0 relative z-10">
                                        <exp.icon className="w-5 h-5 text-blue-600 dark:text-blue-400" />
                                    </div>

                                    {/* Organization Logo - absolutely positioned on opposite side from card */}
                                    <div className={`hidden md:flex items-center justify-center w-40 h-40 p-2.0 shadow-sm absolute top-1/2 -translate-y-1/2 ${isOdd ? 'left-full ml-10' : 'right-full mr-10'
                                        }`}>
                                        <img
                                            src={exp.logo}
                                            alt={`${exp.organization} logo`}
                                            className="w-full h-full object-contain"
                                        />
                                    </div>
                                </div>

                                {/* Card */}
                                <div className="w-[calc(100%-4rem)] md:w-[calc(50%-2.5rem)] p-6 bg-white dark:bg-slate-900 rounded-2xl border border-slate-200 dark:border-slate-800 shadow-sm md:mx-4">
                                    {/* Mobile Logo - shown at top of card on mobile */}
                                    <div className="flex md:hidden items-center justify-center w-16 h-16 p-2 mb-4 mx-auto rounded-lg bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700">
                                        <img
                                            src={exp.logo}
                                            alt={`${exp.organization} logo`}
                                            className="w-full h-full object-contain"
                                        />
                                    </div>

                                    <div className="flex items-center justify-between mb-2">
                                        <span className="text-sm font-medium text-blue-600 dark:text-blue-400">{exp.organization}</span>
                                        <span className="text-xs text-slate-500">{exp.period}</span>
                                    </div>
                                    <h3 className="text-lg font-bold text-slate-900 dark:text-white mb-2">{exp.title}</h3>
                                    <p className="text-slate-600 dark:text-slate-400 text-sm text-justify">{exp.description}</p>
                                </div>
                            </motion.div>
                        );
                    })}
                </div>
            </motion.div>
        </div>
    );
}
