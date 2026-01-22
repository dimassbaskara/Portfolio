import { useLanguage } from '../context/LanguageContext';

export function LanguageToggle() {
    const { language, toggleLanguage } = useLanguage();

    return (
        <button
            onClick={toggleLanguage}
            className="relative p-2 rounded-lg bg-slate-100 dark:bg-slate-800 hover:bg-slate-200 dark:hover:bg-slate-700 transition-all duration-300"
            aria-label="Toggle language"
            title={language === 'en' ? 'Switch to Indonesian' : 'Switch to English'}
        >
            <div className="relative w-7 h-7">
                {/* Inactive flag - behind with shadow effect */}
                <img
                    src={language === 'en' ? 'https://flagcdn.com/w40/id.png' : 'https://flagcdn.com/w40/gb.png'}
                    alt={language === 'en' ? 'Indonesian Flag' : 'UK Flag'}
                    className="absolute top-1 left-1 w-6 h-6 object-cover rounded opacity-40"
                />

                {/* Active flag - front and center */}
                <img
                    src={language === 'en' ? 'https://flagcdn.com/w40/gb.png' : 'https://flagcdn.com/w40/id.png'}
                    alt={language === 'en' ? 'UK Flag' : 'Indonesian Flag'}
                    className="absolute top-0 left-0 w-6 h-6 object-cover rounded shadow-md"
                />
            </div>
        </button>
    );
}
