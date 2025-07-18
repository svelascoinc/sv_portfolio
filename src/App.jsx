import React, { useRef } from 'react';
import ErrorBoundary from './components/common/ErrorBoundary';
import Header from './components/layout/Header';
import Footer from './components/layout/Footer';
import Hero from './components/sections/Hero';
import Resume from './components/sections/Resume';
import Projects from './components/sections/Projects';
import Contact from './components/sections/Contact';
import CVComponentForPDF from './components/CVComponentForPDF';
import { useTheme } from './hooks/useTheme';
import { useLanguageDetection } from './hooks/useLanguageDetection';
import { portfolioData } from './data/portfolioData';
import { generatePDF } from './utils/pdfGenerator';

function App() {
  const { isDarkMode, toggleTheme } = useTheme();
  const { language, toggleLanguage, isLanguageLoading } = useLanguageDetection();
  const cvRef = useRef();

  const handleExportPDF = async () => {
    try {
      if (cvRef.current) {
        await generatePDF(cvRef.current, `CV_Samuel_Velasco_${language.toUpperCase()}.pdf`);
      }
    } catch (error) {
      console.error('Error exporting PDF:', error);
    }
  };

  return (
    <ErrorBoundary>
      <div className="bg-gray-50 dark:bg-gray-900 text-gray-800 dark:text-gray-200 font-sans transition-colors duration-300">
        {/* Hidden CV Component for PDF Export */}
        <div style={{ position: 'absolute', left: '-9999px', top: 0 }}>
          <CVComponentForPDF ref={cvRef} data={portfolioData} language={language} />
        </div>

        {/* Header */}
        <Header 
          isDarkMode={isDarkMode}
          onToggleDarkMode={toggleTheme}
          onToggleLanguage={toggleLanguage}
          onExportPDF={handleExportPDF}
          isLanguageLoading={isLanguageLoading}
        />

        {/* Main Content */}
        <main className="pt-16">
          <Hero language={language} />
          <Resume language={language} />
          <Projects language={language} />
          <Contact language={language} />
        </main>

        {/* Footer */}
        <Footer />
      </div>
    </ErrorBoundary>
  );
}

export default App;
