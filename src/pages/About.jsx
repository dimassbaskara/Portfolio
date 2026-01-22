import { motion, AnimatePresence } from 'framer-motion';
import { useLanguage } from '../context/LanguageContext';
import { translations } from '../translations/translations';
import { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight, Award, X } from 'lucide-react';
import { createPortal } from 'react-dom';

// Certifications Modal Component
function CertificationsModal({ onClose, language }) {
    const t = translations[language].about;

    useEffect(() => {
        // Close on ESC key
        const handleKeyDown = (e) => {
            if (e.key === 'Escape') onClose();
        };
        window.addEventListener('keydown', handleKeyDown);

        // Prevent body scroll when modal is open
        document.body.style.overflow = 'hidden';

        return () => {
            window.removeEventListener('keydown', handleKeyDown);
            document.body.style.overflow = 'unset';
        };
    }, [onClose]);

    // Use React Portal to render modal outside of parent container stacking context
    return createPortal(
        <div
            className="fixed inset-0 z-[9999] flex items-center justify-center p-4 sm:p-6"
            style={{
                position: 'fixed',
                top: 0,
                left: 0,
                width: '100vw',
                height: '100vh',
                margin: 0,
                padding: 0
            }}
        >
            {/* Backdrop */}
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                onClick={onClose}
                className="absolute inset-0 bg-black/60 backdrop-blur-sm"
                style={{ width: '100%', height: '100%', touchAction: 'none' }}
            />

            {/* Modal Card */}
            <motion.div
                initial={{ scale: 0.95, opacity: 0, y: 20 }}
                animate={{ scale: 1, opacity: 1, y: 0 }}
                exit={{ scale: 0.95, opacity: 0, y: 20 }}
                transition={{ type: 'spring', duration: 0.5, bounce: 0.3 }}
                onClick={(e) => e.stopPropagation()}
                className="bg-white dark:bg-slate-900 rounded-xl sm:rounded-2xl shadow-2xl border border-slate-200 dark:border-slate-800 relative z-10 overflow-hidden flex flex-col"
                style={{
                    width: '95%',
                    maxWidth: '1200px',
                    maxHeight: '90vh',
                    margin: 'auto'
                }}
            >
                {/* Close Button */}
                <div className="absolute top-4 right-4 z-20">
                    <button
                        onClick={onClose}
                        className="p-2 bg-slate-100 dark:bg-slate-800 hover:bg-slate-200 dark:hover:bg-slate-700 rounded-full transition-colors shadow-sm"
                        aria-label="Close modal"
                    >
                        <X className="w-5 h-5 text-slate-900 dark:text-white" />
                    </button>
                </div>

                {/* Header */}
                <div className="px-6 md:px-10 pt-8 pb-4 border-b border-slate-200 dark:border-slate-800">
                    <h2 className="text-2xl md:text-3xl font-bold text-slate-900 dark:text-white">
                        {t.certificationsTitle}
                    </h2>
                    <p className="text-slate-600 dark:text-slate-400 mt-2">
                        {language === 'en'
                            ? 'Professional certifications and achievements'
                            : 'Sertifikasi profesional dan pencapaian'}
                    </p>
                </div>

                {/* Content - Scrollable */}
                <div className="overflow-y-auto p-6 md:p-10 w-full h-full custom-scrollbar">
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {t.certifications.map((cert, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: 0.05 * index }}
                                className="bg-white dark:bg-slate-900 rounded-2xl shadow-sm border border-slate-200 dark:border-slate-800 overflow-hidden group hover:shadow-lg hover:border-blue-300 dark:hover:border-blue-700 transition-all duration-300"
                            >
                                {/* Certificate Image */}
                                <div className="relative aspect-[16/10] bg-slate-100 dark:bg-slate-800 overflow-hidden">
                                    <img
                                        src={cert.image}
                                        alt={cert.name}
                                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                                        onError={(e) => {
                                            e.target.src = `https://ui-avatars.com/api/?name=${encodeURIComponent(cert.organization)}&size=400&background=3b82f6&color=fff&bold=true&format=png`;
                                        }}
                                    />
                                    <div className="absolute inset-0 bg-gradient-to-t from-slate-900/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                                </div>

                                {/* Certificate Info */}
                                <div className="p-5 space-y-3">
                                    <div>
                                        <h4 className="text-base font-bold text-slate-900 dark:text-white line-clamp-2 min-h-[3rem]">
                                            {cert.name}
                                        </h4>
                                        <p className="text-sm text-blue-600 dark:text-blue-400 font-medium mt-1">
                                            {cert.organization}
                                        </p>
                                    </div>

                                    <div className="flex items-center justify-between text-xs text-slate-500 dark:text-slate-400">
                                        <span className="flex items-center gap-1">
                                            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                                            </svg>
                                            {cert.issueDate}
                                        </span>
                                        {cert.expiryDate && (
                                            <span className="text-xs px-2 py-1 bg-slate-100 dark:bg-slate-800 rounded-full">
                                                Exp: {cert.expiryDate}
                                            </span>
                                        )}
                                    </div>

                                    {cert.credentialId && (
                                        <p className="text-xs text-slate-400 dark:text-slate-500 font-mono truncate">
                                            ID: {cert.credentialId}
                                        </p>
                                    )}

                                    {cert.verificationLink && (
                                        <a
                                            href={cert.verificationLink}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="inline-flex items-center gap-1 text-sm font-medium text-blue-600 dark:text-blue-400 hover:underline"
                                        >
                                            {language === 'en' ? 'Verify Certificate' : 'Verifikasi Sertifikat'}
                                            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                                            </svg>
                                        </a>
                                    )}
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </motion.div>
        </div>,
        document.body
    );
}

export default function About() {
    const { language } = useLanguage();
    const t = translations[language].about;
    const [currentPhoto, setCurrentPhoto] = useState(0);
    const [direction, setDirection] = useState(1); // 1 for next, -1 for prev
    const [showCertificationsModal, setShowCertificationsModal] = useState(false);

    // Photo array with descriptions - ordered as: student, internship, company visit, hima, jsclab
    const photos = [
        {
            src: '/photos/Student.jpg',
            description: {
                en: 'University student at UPN Veteran Jakarta',
                id: 'Mahasiswa di UPN Veteran Jakarta'
            }
        },
        {
            src: '/photos/Internship.jpg',
            description: {
                en: 'Data Analyst Internship at Telkomsel',
                id: 'Magang sebagai Data Analyst di Telkomsel'
            }
        },
        {
            src: '/photos/Company Visit.JPG',
            description: {
                en: 'Company visit and networking experience',
                id: 'Kunjungan perusahaan dan memperluas jejaring'
            }
        },
        {
            src: '/photos/HIMA.JPG',
            description: {
                en: 'Leading as Vice Chairman of HMIF UPNVJ',
                id: 'Memimpin sebagai Wakil Ketua HMIF UPNVJ'
            }
        },
        {
            src: '/photos/JSCLab Sharing.jpg',
            description: {
                en: 'Actively participated in sharing session for Big Data',
                id: 'Berpartisipasi aktif dalam sesi berbagi terkait Big Data'
            }
        }
    ];

    // Auto-advance carousel every 5 seconds
    useEffect(() => {
        const timer = setInterval(() => {
            setCurrentPhoto((prev) => (prev + 1) % photos.length);
        }, 5000);
        return () => clearInterval(timer);
    }, [photos.length]);

    const nextPhoto = () => {
        setDirection(1);
        setCurrentPhoto((prev) => (prev + 1) % photos.length);
    };

    const prevPhoto = () => {
        setDirection(-1);
        setCurrentPhoto((prev) => (prev - 1 + photos.length) % photos.length);
    };

    return (
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="space-y-12"
            >
                <div className="text-center">
                    <h2 className="text-3xl font-bold text-slate-900 dark:text-white sm:text-4xl">{t.title}</h2>
                    <p className="mt-4 text-lg text-slate-600 dark:text-slate-400 mx-auto">
                        {t.subtitle}
                    </p>
                </div>

                <div className="grid lg:grid-cols-2 gap-12">
                    {/* Left Column - Photo Carousel */}
                    <div className="relative order-2 lg:order-1">
                        <div className="sticky top-24">
                            <div className="relative aspect-[4/4] rounded-2xl overflow-hidden bg-slate-200 dark:bg-slate-800 shadow-lg">
                                {/* Photo Display */}
                                <AnimatePresence mode="wait" initial={false}>
                                    <motion.img
                                        key={currentPhoto}
                                        src={photos[currentPhoto].src}
                                        alt={`Profile photo ${currentPhoto + 1}`}
                                        initial={{ opacity: 0, x: direction * 100 }}
                                        animate={{ opacity: 1, x: 0 }}
                                        exit={{ opacity: 0, x: direction * -100 }}
                                        transition={{ duration: 0.5, ease: 'easeInOut' }}
                                        className="w-full h-full object-cover"
                                        onError={(e) => {
                                            // Fallback to placeholder if image doesn't exist
                                            e.target.src = `https://ui-avatars.com/api/?name=Your+Name&size=600&background=3b82f6&color=fff&bold=true`;
                                        }}
                                    />
                                </AnimatePresence>

                                {/* Navigation Arrows */}
                                <button
                                    onClick={prevPhoto}
                                    className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/80 dark:bg-slate-900/80 hover:bg-white dark:hover:bg-slate-900 p-2 rounded-full transition-colors"
                                    aria-label="Previous photo"
                                >
                                    <ChevronLeft className="w-6 h-6 text-slate-900 dark:text-white" />
                                </button>
                                <button
                                    onClick={nextPhoto}
                                    className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/80 dark:bg-slate-900/80 hover:bg-white dark:hover:bg-slate-900 p-2 rounded-full transition-colors"
                                    aria-label="Next photo"
                                >
                                    <ChevronRight className="w-6 h-6 text-slate-900 dark:text-white" />
                                </button>

                                {/* Navigation Dots */}
                                <div className="absolute bottom-20 left-1/2 -translate-x-1/2 flex gap-2">
                                    {photos.map((_, index) => (
                                        <button
                                            key={index}
                                            onClick={() => setCurrentPhoto(index)}
                                            className={`w-2 h-2 rounded-full transition-all ${index === currentPhoto
                                                ? 'bg-white w-8'
                                                : 'bg-white/50 hover:bg-white/75'
                                                }`}
                                            aria-label={`Go to photo ${index + 1}`}
                                        />
                                    ))}
                                </div>

                                {/* Photo Description - Overlay at bottom */}
                                <motion.div
                                    key={currentPhoto}
                                    initial={{ opacity: 0, y: 10 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ duration: 0.3 }}
                                    className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-slate-900/90 via-slate-900/70 to-transparent p-6 pt-12"
                                >
                                    <p className="text-sm text-white text-center">
                                        {photos[currentPhoto].description[language]}
                                    </p>
                                </motion.div>
                            </div>
                        </div>
                    </div>

                    {/* Right Column - Journey and Education Stacked */}
                    <div className="space-y-8 order-1 lg:order-2">
                        {/* Bio/Journey Section */}
                        <div className="space-y-6">
                            <h3 className="text-2xl font-semibold text-slate-900 dark:text-white">{t.journeyTitle}</h3>
                            <div className="prose dark:prose-invert text-slate-600 dark:text-slate-400">
                                <p className="text-justify">
                                    {t.journey1}
                                </p>
                                <br />
                                <p className="text-justify">
                                    {t.journey2}
                                </p>
                            </div>
                        </div>

                        {/* Education Section */}
                        <div className="space-y-6">
                            <h3 className="text-2xl font-semibold text-slate-900 dark:text-white">{t.educationTitle}</h3>
                            <div className="bg-white dark:bg-slate-900 p-6 rounded-2xl shadow-sm border border-slate-200 dark:border-slate-800">
                                <div className="flex justify-between items-start">
                                    <div>
                                        <h4 className="text-lg font-bold text-slate-900 dark:text-white">{t.degree}</h4>
                                        <p className="text-blue-600 dark:text-blue-400">{t.university}</p>
                                        <p className="text-sm font-medium text-slate-500 dark:text-slate-400 mt-1">{t.gpa}</p>
                                    </div>
                                    <span className="px-3 py-1 bg-slate-100 dark:bg-slate-800 rounded-full text-xs font-medium text-slate-600 dark:text-slate-400">
                                        {t.period}
                                    </span>
                                </div>
                                <p className="mt-4 text-sm text-slate-600 dark:text-slate-400">
                                    {t.educationDesc}
                                </p>
                                <a
                                    href="https://pddikti.kemdiktisaintek.go.id/detail-mahasiswa/9hnaC_9LzbKtapKRxxyGXPymjGQNnQx1n5XZ6GdR16ymvRGty1TOM76P9geXHQLMerjDdA=="
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="mt-3 inline-flex items-center text-sm font-medium text-blue-600 dark:text-blue-400 hover:underline"
                                >
                                    {t.academicHistory}
                                </a>
                            </div>

                            {/* View Certifications Button */}
                            <button
                                onClick={() => setShowCertificationsModal(true)}
                                className="mt-4 w-full flex items-center justify-center gap-2 px-4 py-3 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white rounded-xl font-semibold shadow-lg shadow-blue-500/30 hover:shadow-xl hover:shadow-blue-500/40 transition-all"
                            >
                                <Award className="w-5 h-5" />
                                {t.certificationsTitle}
                            </button>
                        </div>
                    </div>
                </div>

                {/* Skills Section - At the Bottom */}
                <div className="flex flex-wrap justify-center gap-3">
                    {t.skills.map((skill) => (
                        <span
                            key={skill}
                            className="px-4 py-2 bg-blue-50 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300 rounded-full text-sm font-medium border border-blue-200 dark:border-blue-800"
                        >
                            {skill}
                        </span>
                    ))}
                </div>
            </motion.div>

            {/* Certifications Modal */}
            <AnimatePresence>
                {showCertificationsModal && (
                    <CertificationsModal
                        onClose={() => setShowCertificationsModal(false)}
                        language={language}
                    />
                )}
            </AnimatePresence>
        </div>
    );
}
