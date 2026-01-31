import { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ExternalLink, Github, Tag, X, Lightbulb, ChevronDown, ChevronUp } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';
import { translations } from '../translations/translations';
import { allProjects } from '../data/projectsData';

import { createPortal } from 'react-dom';

function ProjectModal({ project, onClose, language }) {
    const t = project;
    const [currentImageIndex, setCurrentImageIndex] = useState(0);

    // Ensure images is always an array
    const images = Array.isArray(t.images) ? t.images : [t.image || t.images];
    const hasMultipleImages = images.length > 1;

    const nextImage = () => {
        setCurrentImageIndex((prev) => (prev + 1) % images.length);
    };

    const prevImage = () => {
        setCurrentImageIndex((prev) => (prev - 1 + images.length) % images.length);
    };

    useEffect(() => {
        // Close on ESC key, navigate on arrow keys
        const handleKeyDown = (e) => {
            if (e.key === 'Escape') onClose();
            if (hasMultipleImages) {
                if (e.key === 'ArrowRight') nextImage();
                if (e.key === 'ArrowLeft') prevImage();
            }
        };
        window.addEventListener('keydown', handleKeyDown);

        // Prevent body scroll when modal is open
        document.body.style.overflow = 'hidden';

        return () => {
            window.removeEventListener('keydown', handleKeyDown);
            document.body.style.overflow = 'unset';
        };
    }, [onClose, hasMultipleImages]);

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
            {/* Backdrop - covers entire viewport */}
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                onClick={onClose}
                className="absolute inset-0 bg-black/60 backdrop-blur-sm"
                style={{ width: '100%', height: '100%', touchAction: 'none' }}
            />

            {/* Modal Card - centered with Flexbox, scrolls internally */}
            <motion.div
                initial={{ scale: 0.95, opacity: 0, y: 20 }}
                animate={{ scale: 1, opacity: 1, y: 0 }}
                exit={{ scale: 0.95, opacity: 0, y: 20 }}
                transition={{ type: 'spring', duration: 0.5, bounce: 0.3 }}
                onClick={(e) => e.stopPropagation()}
                className="bg-white dark:bg-slate-900 rounded-xl sm:rounded-2xl shadow-2xl border border-slate-200 dark:border-slate-800 relative z-10 overflow-hidden flex flex-col"
                style={{
                    // Responsive sizing
                    width: '90%',           // Mobile: 90% of viewport width
                    maxWidth: '800px',      // Desktop: fixed 800px max
                    maxHeight: '85vh',      // Max 85% of viewport height
                    margin: 'auto'          // Flexbox centering backup
                }}
            >
                {/* Close Button - fixed header inside modal */}
                <div className="absolute top-4 right-4 z-20">
                    <button
                        onClick={onClose}
                        className="p-2 bg-slate-100 dark:bg-slate-800 hover:bg-slate-200 dark:hover:bg-slate-700 rounded-full transition-colors shadow-sm"
                        aria-label="Close modal"
                    >
                        <X className="w-5 h-5 text-slate-900 dark:text-white" />
                    </button>
                </div>

                {/* Content Container - Scrollable Area */}
                <div className="overflow-y-auto p-6 md:p-10 w-full h-full custom-scrollbar">
                    {/* Header Details */}
                    <div className="mb-8 pr-10">
                        <div className="flex flex-col gap-2 mb-4">
                            <span className="inline-block px-3 py-1 bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300 rounded-full text-xs font-bold uppercase tracking-wider w-fit">
                                {t.category}
                            </span>
                            <h2 className="text-2xl md:text-3xl font-bold text-slate-900 dark:text-white">
                                {t.title[language]}
                            </h2>
                            <p className="text-base text-slate-600 dark:text-slate-400 font-medium">
                                {t.organization[language] || t.organization} • {t.timeline[language]}
                            </p>
                        </div>
                    </div>

                    {/* Content Grid */}
                    <div className="grid md:grid-cols-2 gap-8 mb-8">
                        {/* Image Carousel */}
                        <div className="md:col-span-1">
                            <div className="relative rounded-xl overflow-hidden shadow-md border border-slate-200 dark:border-slate-700 aspect-video group">
                                <AnimatePresence mode="wait">
                                    <motion.img
                                        key={currentImageIndex}
                                        src={images[currentImageIndex]}
                                        alt={`${t.title[language]} - Image ${currentImageIndex + 1}`}
                                        className="w-full h-full object-cover"
                                        initial={{ opacity: 0, x: 20 }}
                                        animate={{ opacity: 1, x: 0 }}
                                        exit={{ opacity: 0, x: -20 }}
                                        transition={{ duration: 0.3 }}
                                    />
                                </AnimatePresence>

                                {/* Navigation Buttons - only show if multiple images */}
                                {hasMultipleImages && (
                                    <>
                                        <button
                                            onClick={prevImage}
                                            className="absolute left-2 top-1/2 -translate-y-1/2 p-2 bg-white/90 dark:bg-slate-800/90 hover:bg-white dark:hover:bg-slate-800 rounded-full transition-all opacity-0 group-hover:opacity-100 shadow-lg"
                                            aria-label="Previous image"
                                        >
                                            <ChevronDown className="w-5 h-5 rotate-90 text-slate-900 dark:text-white" />
                                        </button>
                                        <button
                                            onClick={nextImage}
                                            className="absolute right-2 top-1/2 -translate-y-1/2 p-2 bg-white/90 dark:bg-slate-800/90 hover:bg-white dark:hover:bg-slate-800 rounded-full transition-all opacity-0 group-hover:opacity-100 shadow-lg"
                                            aria-label="Next image"
                                        >
                                            <ChevronDown className="w-5 h-5 -rotate-90 text-slate-900 dark:text-white" />
                                        </button>

                                        {/* Image Counter */}
                                        <div className="absolute bottom-3 right-3 px-3 py-1 bg-black/70 text-white text-xs rounded-full font-medium">
                                            {currentImageIndex + 1} / {images.length}
                                        </div>
                                    </>
                                )}
                            </div>
                        </div>

                        {/* Challenge & Solution */}
                        <div className="space-y-6">
                            <div>
                                <h3 className="text-sm font-bold text-slate-400 uppercase tracking-wider mb-2 flex items-center gap-2">
                                    <span className="w-2 h-2 rounded-full bg-red-500"></span>
                                    {language === 'en' ? 'Challenge' : 'Tantangan'}
                                </h3>
                                <p className="text-slate-700 dark:text-slate-300 leading-relaxed text-sm md:text-base">
                                    {t.challenge[language]}
                                </p>
                            </div>

                            <div>
                                <h3 className="text-sm font-bold text-slate-400 uppercase tracking-wider mb-2 flex items-center gap-2">
                                    <span className="w-2 h-2 rounded-full bg-green-500"></span>
                                    {language === 'en' ? 'Solution' : 'Solusi'}
                                </h3>
                                <p className="text-slate-700 dark:text-slate-300 leading-relaxed text-sm md:text-base">
                                    {t.solution[language]}
                                </p>
                            </div>
                        </div>
                    </div>

                    {/* Impact Highlight */}
                    <div className="mb-8 p-5 bg-blue-50 dark:bg-blue-900/20 rounded-xl border border-blue-100 dark:border-blue-800/50">
                        <div className="flex items-start gap-3">
                            <div className="bg-blue-100 dark:bg-blue-800/50 p-2 rounded-lg">
                                <Lightbulb className="w-5 h-5 text-blue-600 dark:text-blue-400" />
                            </div>
                            <div>
                                <h3 className="text-base font-bold text-slate-900 dark:text-white mb-1">
                                    {language === 'en' ? 'Key Impact' : 'Dampak Utama'}
                                </h3>
                                <p className="text-slate-700 dark:text-slate-300 text-sm md:text-base">
                                    {t.impact[language]}
                                </p>
                            </div>
                        </div>
                    </div>

                    {/* Tech Stack */}
                    <div className="mb-8">
                        <h3 className="text-sm font-bold text-slate-400 uppercase tracking-wider mb-3">
                            {language === 'en' ? 'Technologies' : 'Teknologi'}
                        </h3>
                        <div className="flex flex-wrap gap-2">
                            {t.tech.map((tech) => (
                                <span
                                    key={tech}
                                    className="px-3 py-1.5 bg-slate-100 dark:bg-slate-800 text-slate-800 dark:text-slate-200 rounded-md text-xs font-semibold border border-slate-200 dark:border-slate-700"
                                >
                                    {tech}
                                </span>
                            ))}
                        </div>
                    </div>

                    {/* Links */}
                    {(t.links.github || t.links.demo) && (
                        <div className="flex flex-wrap gap-3 pt-4 border-t border-slate-200 dark:border-slate-800">
                            {t.links.github && (
                                <a
                                    href={t.links.github}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="flex items-center gap-2 px-5 py-2.5 bg-slate-900 dark:bg-white text-white dark:text-slate-900 rounded-lg text-sm font-bold hover:bg-slate-800 dark:hover:bg-slate-100 transition-colors"
                                >
                                    <Github className="w-4 h-4" />
                                    <span>GitHub</span>
                                </a>
                            )}
                            {t.links.demo && (
                                <a
                                    href={t.links.demo}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="flex items-center gap-2 px-5 py-2.5 bg-blue-600 text-white rounded-lg text-sm font-bold hover:bg-blue-700 transition-colors shadow-lg shadow-blue-500/30"
                                >
                                    <ExternalLink className="w-4 h-4" />
                                    <span>{language === 'en' ? 'Live Demo' : 'Lihat Demo'}</span>
                                </a>
                            )}
                        </div>
                    )}
                </div>
            </motion.div>
        </div>,
        document.body
    );
}

export function Projects() {
    const { language } = useLanguage();
    const t = translations[language].projects;
    const [filter, setFilter] = useState('all');
    const [selectedProject, setSelectedProject] = useState(null);
    const [showAllProjects, setShowAllProjects] = useState(false);
    const projectsAnchorRef = useRef(null); // Ref for scroll anchoring

    // Map category keys to actual project categories
    const categoryMap = {
        all: 'all',
        bigData: 'Big Data',
        mlAi: 'ML/AI',
        network: 'Network',
        dataMining: 'Data Mining',
        development: 'Development',
        innovation: 'Innovation'
    };

    // Get featured projects (6) or all projects based on state
    const projectsToShow = showAllProjects
        ? allProjects
        : allProjects.filter(p => p.featured);

    const filteredProjects = projectsToShow.filter(p =>
        filter === 'all' || p.category === categoryMap[filter]
    );

    return (
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="space-y-12"
            >
                <div className="text-center">
                    <h2 className="text-3xl font-bold text-slate-900 dark:text-white sm:text-4xl">
                        {showAllProjects ? t.allProjectsTitle : t.title}
                    </h2>
                    <p className="mt-4 text-lg text-slate-600 dark:text-slate-400 max-w-2xl mx-auto">
                        {showAllProjects ? t.allProjectsSubtitle : t.subtitle}
                    </p>
                </div>

                {/* Filter */}
                <div className="flex flex-wrap justify-center gap-2">
                    {Object.entries(t.categories).map(([key, label]) => (
                        <button
                            key={key}
                            onClick={() => setFilter(key)}
                            className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${filter === key
                                ? 'bg-blue-600 text-white shadow-lg shadow-blue-500/30'
                                : 'bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300 hover:bg-slate-200 dark:hover:bg-slate-700'
                                }`}
                        >
                            {label}
                        </button>
                    ))}
                </div>

                {/* Grid */}
                <motion.div layout className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                    <AnimatePresence>
                        {filteredProjects.map((project) => (
                            <motion.div
                                transition={{ duration: 0.5, ease: "easeOut" }}
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                exit={{ opacity: 0, y: 20 }}
                                key={project.id}
                                onClick={() => setSelectedProject(project)}
                                className="bg-white dark:bg-slate-900 rounded-2xl overflow-hidden border border-slate-200 dark:border-slate-800 hover:shadow-xl hover:shadow-blue-500/10 transition-all cursor-pointer group"
                            >
                                <div className="h-48 overflow-hidden relative">
                                    <img
                                        src={Array.isArray(project.images) ? project.images[0] : (project.image || project.images)}
                                        alt={project.title[language]}
                                        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                                    />
                                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                                </div>
                                <div className="p-6 space-y-4">
                                    <div className="flex justify-between items-start">
                                        <span className="text-xs font-semibold text-blue-600 dark:text-blue-400 uppercase tracking-wider">
                                            {project.category}
                                        </span>
                                        <div className="flex gap-2">
                                            {project.links.github && (
                                                <Github className="w-5 h-5 text-slate-400 group-hover:text-slate-900 dark:group-hover:text-white transition-colors" />
                                            )}
                                            {project.links.demo && (
                                                <ExternalLink className="w-5 h-5 text-slate-400 group-hover:text-slate-900 dark:group-hover:text-white transition-colors" />
                                            )}
                                        </div>
                                    </div>

                                    <h3 className="text-xl font-bold text-slate-900 dark:text-white group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                                        {project.title[language]}
                                    </h3>
                                    <p className="text-slate-600 dark:text-slate-400 text-sm line-clamp-2">
                                        {project.tagline[language]}
                                    </p>

                                    <div className="flex flex-wrap gap-2 pt-2">
                                        {project.tech.slice(0, 3).map((tech) => (
                                            <motion.span
                                                key={tech}
                                                whileHover={{ scale: 1.1, backgroundColor: 'rgb(59 130 246 / 0.1)' }}
                                                className="flex items-center text-xs text-slate-700 dark:text-slate-300 bg-slate-100 dark:bg-slate-800 px-2 py-1 rounded transition-colors"
                                            >
                                                <Tag className="w-3 h-3 mr-1" /> {tech}
                                            </motion.span>
                                        ))}
                                        {project.tech.length > 3 && (
                                            <span className="text-xs text-slate-400 px-2 py-1">
                                                +{project.tech.length - 3}
                                            </span>
                                        )}
                                    </div>
                                </div>
                            </motion.div>
                        ))}
                    </AnimatePresence>
                </motion.div>

                {/* More Projects Button */}
                {!showAllProjects && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 0.5, ease: "easeOut" }}
                        className="flex justify-center"
                    >
                        <button
                            onClick={() => setShowAllProjects(true)}
                            className="group flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white rounded-xl font-semibold shadow-lg shadow-blue-500/30 hover:shadow-xl hover:shadow-blue-500/40 transition-all"
                        >
                            {t.moreProjects}
                            <ChevronDown className="w-5 h-5 group-hover:translate-y-1 transition-transform" />
                        </button>
                    </motion.div>
                )}

                {/* Show Less Button */}
                {showAllProjects && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 0.5, ease: "easeOut" }}
                        className="flex justify-center"
                    >
                        <button
                            onClick={() => {
                                setShowAllProjects(false);
                                // Scroll back to the anchor point (More Projects button area) with a slight delay to allow layout to update
                                setTimeout(() => {
                                    projectsAnchorRef.current?.scrollIntoView({ behavior: 'smooth', block: 'center' });
                                }, 100);
                            }}
                            className="group flex items-center gap-2 px-8 py-4 bg-slate-200 dark:bg-slate-800 hover:bg-slate-300 dark:hover:bg-slate-700 text-slate-900 dark:text-white rounded-xl font-semibold transition-all"
                        >
                            {language === 'en' ? 'Show Less' : 'Tampilkan Lebih Sedikit'}
                            <ChevronUp className="w-5 h-5 group-hover:-translate-y-1 transition-transform" />
                        </button>
                    </motion.div>
                )}

                {/* Scroll Anchor */}
                <div ref={projectsAnchorRef} className="h-1" />
            </motion.div>

            {/* Modal */}
            <AnimatePresence>
                {selectedProject && (
                    <ProjectModal
                        project={selectedProject}
                        onClose={() => setSelectedProject(null)}
                        language={language}
                    />
                )}
            </AnimatePresence>
        </div>
    );
}
