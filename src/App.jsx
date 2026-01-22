import { useState, useEffect } from 'react';
import { Navbar } from './components/Navbar';
import { Footer } from './components/Footer';
import { Hero } from './pages/Hero';
import About from './pages/About';
import { Experience } from './pages/Experience';
import { Projects } from './pages/Projects';
import { Contact } from './pages/Contact';
import { useLanguage } from './context/LanguageContext';

function App() {
  const [activeSection, setActiveSection] = useState('home');
  const { isTransitioning } = useLanguage();

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

    const sections = document.querySelectorAll('section');
    sections.forEach((section) => observer.observe(section));

    return () => observer.disconnect();
  }, []);

  const getSectionStyle = (id) => {
    const isActive = activeSection === id;
    // Remove top padding for home to close gap, reduce contact padding
    let paddingClass;
    if (id === 'home') {
      paddingClass = 'pb-10 md:pb-16 pt-0';
    } else if (id === 'contact') {
      paddingClass = 'py-6 md:py-8'; // Reduced padding for contact
    } else {
      paddingClass = 'py-10 md:py-16';
    }

    return `
      transition-all duration-700 ease-in-out ${paddingClass}
      ${isActive
        ? 'bg-blue-50/50 dark:bg-blue-900/10 shadow-[inset_0_0_100px_rgba(59,130,246,0.1)] scale-100 opacity-100 backdrop-blur-sm'
        : 'bg-transparent scale-[0.98] opacity-60 grayscale-[0.5] blur-[1px]'}
    `;
  };

  return (
    <div className="flex flex-col min-h-screen bg-slate-50 dark:bg-slate-950 text-slate-900 dark:text-slate-50 transition-colors duration-300">
      <Navbar />
      <main className={`flex-grow pt-20 transition-opacity duration-300 ${isTransitioning ? 'opacity-50' : 'opacity-100'}`}>
        <section id="home" className={getSectionStyle('home')}>
          <Hero />
        </section>
        <section id="about" className={getSectionStyle('about')}>
          <About />
        </section>
        <section id="experience" className={getSectionStyle('experience')}>
          <Experience />
        </section>
        <section id="projects" className={getSectionStyle('projects')}>
          <Projects />
        </section>
        <section id="contact" className={getSectionStyle('contact')}>
          <Contact />
        </section>
      </main>
      <Footer />
    </div>
  );
}

export default App;
