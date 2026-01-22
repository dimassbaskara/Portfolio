import { Github, Linkedin, Mail } from 'lucide-react';

export function Footer() {
    return (
        <footer className="bg-slate-50 dark:bg-slate-900 border-t border-slate-200 dark:border-slate-800 py-8">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
                    <div className="text-slate-600 dark:text-slate-400 text-sm">
                        © {new Date().getFullYear()} Muchammad Dimas Mufti Baskara. All rights reserved.
                    </div>

                    <div className="flex space-x-6">
                        <a href="https://github.com/dimassbaskara" target="_blank" rel="noopener noreferrer" className="text-slate-500 hover:text-slate-900 dark:text-slate-400 dark:hover:text-white transition-colors">
                            <Github className="h-5 w-5" />
                            <span className="sr-only">GitHub</span>
                        </a>
                        <a href="https://linkedin.com/in/dimas-baskara" target="_blank" rel="noopener noreferrer" className="text-slate-500 hover:text-slate-900 dark:text-slate-400 dark:hover:text-white transition-colors">
                            <Linkedin className="h-5 w-5" />
                            <span className="sr-only">LinkedIn</span>
                        </a>
                        <a href="mailto:dimasmufti864@gmail.com" className="text-slate-500 hover:text-slate-900 dark:text-slate-400 dark:hover:text-white transition-colors">
                            <Mail className="h-5 w-5" />
                            <span className="sr-only">Email</span>
                        </a>
                    </div>
                </div>
            </div>
        </footer>
    );
}
