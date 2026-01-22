import { useState, useRef } from 'react';
import { motion } from 'framer-motion';
import { Send, Mail, MapPin, Github, Linkedin } from 'lucide-react';
import emailjs from '@emailjs/browser';
import { useLanguage } from '../context/LanguageContext';
import { translations } from '../translations/translations';

export function Contact() {
    const { language } = useLanguage();
    const t = translations[language].contact;
    const form = useRef();
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [status, setStatus] = useState(null); // 'success' | 'error' | null

    const sendEmail = (e) => {
        e.preventDefault();
        setIsSubmitting(true);
        setStatus(null);

        // EmailJS Configuration
        // Replace these with your actual credentials from https://www.emailjs.com/
        const SERVICE_ID = 'service_portfolio';
        const TEMPLATE_ID = 'template_portfolio';
        const PUBLIC_KEY = '2LtXwD1mNyGqkeRbT';

        emailjs.sendForm(SERVICE_ID, TEMPLATE_ID, form.current, PUBLIC_KEY)
            .then((result) => {
                console.log('Email sent successfully:', result.text);
                setIsSubmitting(false);
                setStatus('success');
                form.current.reset();
            }, (error) => {
                console.error('Email failed to send:', error.text);
                setIsSubmitting(false);
                setStatus('error');
            });
    };

    return (
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="grid md:grid-cols-2 gap-12"
            >
                {/* Contact Info */}
                <div className="space-y-8">
                    <div>
                        <h2 className="text-3xl font-bold text-slate-900 dark:text-white">{t.title}</h2>
                        <p className="mt-4 text-slate-600 dark:text-slate-400">
                            {t.subtitle}
                        </p>
                    </div>

                    <div className="space-y-6">
                        <div className="flex items-center space-x-4">
                            <div className="bg-blue-100 dark:bg-blue-900/30 p-3 rounded-full">
                                <Mail className="w-6 h-6 text-blue-600 dark:text-blue-400" />
                            </div>
                            <div>
                                <p className="font-medium text-slate-900 dark:text-white">Email</p>
                                <a href="mailto:dimasmufti864@gmail.com" className="text-slate-600 dark:text-slate-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors">
                                    dimasmufti864@gmail.com
                                </a>
                            </div>
                        </div>

                        <div className="flex items-center space-x-4">
                            <div className="bg-blue-100 dark:bg-blue-900/30 p-3 rounded-full">
                                <MapPin className="w-6 h-6 text-blue-600 dark:text-blue-400" />
                            </div>
                            <div>
                                <p className="font-medium text-slate-900 dark:text-white">Location</p>
                                <p className="text-slate-600 dark:text-slate-400">Jakarta, Indonesia</p>
                            </div>
                        </div>

                        <div className="flex items-center space-x-4">
                            <div className="bg-blue-100 dark:bg-blue-900/30 p-3 rounded-full">
                                <Github className="w-6 h-6 text-blue-600 dark:text-blue-400" />
                            </div>
                            <div>
                                <p className="font-medium text-slate-900 dark:text-white">GitHub</p>
                                <a href="https://github.com/dimassbaskara" target="_blank" rel="noopener noreferrer" className="text-slate-600 dark:text-slate-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors">
                                    github.com/dimassbaskara
                                </a>
                            </div>
                        </div>

                        <div className="flex items-center space-x-4">
                            <div className="bg-blue-100 dark:bg-blue-900/30 p-3 rounded-full">
                                <Linkedin className="w-6 h-6 text-blue-600 dark:text-blue-400" />
                            </div>
                            <div>
                                <p className="font-medium text-slate-900 dark:text-white">LinkedIn</p>
                                <a href="https://linkedin.com/in/dimas-baskara" target="_blank" rel="noopener noreferrer" className="text-slate-600 dark:text-slate-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors">
                                    linkedin.com/in/dimas-baskara
                                </a>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Contact Form */}
                <div className="bg-white dark:bg-slate-900 p-8 rounded-2xl shadow-sm border border-slate-200 dark:border-slate-800">
                    <form ref={form} onSubmit={sendEmail} className="space-y-6">
                        <div>
                            <label className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-2">Name</label>
                            <input type="text" name="user_name" required className="w-full px-4 py-2 rounded-lg border border-slate-300 dark:border-slate-700 bg-white dark:bg-slate-800 text-slate-900 dark:text-white focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors" />
                        </div>
                        <div>
                            <label className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-2">Email</label>
                            <input type="email" name="user_email" required className="w-full px-4 py-2 rounded-lg border border-slate-300 dark:border-slate-700 bg-white dark:bg-slate-800 text-slate-900 dark:text-white focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors" />
                        </div>
                        <div>
                            <label className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-2">Message</label>
                            <textarea name="message" rows="4" required className="w-full px-4 py-2 rounded-lg border border-slate-300 dark:border-slate-700 bg-white dark:bg-slate-800 text-slate-900 dark:text-white focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors"></textarea>
                        </div>

                        <button
                            type="submit"
                            disabled={isSubmitting}
                            className="w-full py-3 px-6 rounded-lg bg-blue-600 hover:bg-blue-700 text-white font-medium flex items-center justify-center transition-colors disabled:opacity-70"
                        >
                            {isSubmitting ? 'Sending...' : (
                                <>
                                    Send Message <Send className="ml-2 w-4 h-4" />
                                </>
                            )}
                        </button>

                        {status === 'success' && (
                            <p className="text-green-600 dark:text-green-400 text-sm text-center">Message sent successfully!</p>
                        )}
                        {status === 'error' && (
                            <p className="text-red-600 dark:text-red-400 text-sm text-center">Failed to send message. Please try again.</p>
                        )}
                    </form>
                </div>
            </motion.div>
        </div>
    );
}
