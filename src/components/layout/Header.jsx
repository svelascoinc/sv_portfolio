import React from 'react';
import { portfolioData } from '../../data/portfolioData';
import { DownloadIcon, ThemeToggleIcon } from '../common/Icons';
import Spinner from '../common/Spinner';

const Header = React.memo(({ 
  isDarkMode, 
  onToggleDarkMode, 
  onToggleLanguage, 
  onExportPDF, 
  isLanguageLoading 
}) => (
  <nav className="fixed top-0 left-0 right-0 bg-white/80 dark:bg-gray-900/80 backdrop-blur-md z-40 shadow-sm" role="navigation">
    <div className="container mx-auto px-6 py-3 flex justify-between items-center">
      <a 
        href="#home" 
        className="text-xl font-bold text-gray-800 dark:text-white hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
        aria-label="Go to home section"
      >
        {portfolioData.name}
      </a>
      <div className="flex items-center space-x-2 sm:space-x-4">
        <button 
          onClick={onExportPDF} 
          title="Descargar CV en PDF"
          aria-label="Download CV as PDF"
          className="text-gray-600 dark:text-gray-300 p-2 rounded-full hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors focus:outline-none focus:ring-2 focus:ring-blue-500"
        >
          <DownloadIcon className="w-6 h-6" />
        </button>
        <button 
          onClick={onToggleDarkMode} 
          title={isDarkMode ? 'Activar modo claro' : 'Activar modo oscuro'}
          aria-label={isDarkMode ? 'Switch to light mode' : 'Switch to dark mode'}
          className="text-gray-600 dark:text-gray-300 p-2 rounded-full hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors focus:outline-none focus:ring-2 focus:ring-blue-500"
        >
          <ThemeToggleIcon className="w-6 h-6" />
        </button>
        <button 
          onClick={onToggleLanguage} 
          className="text-sm font-semibold text-gray-600 dark:text-gray-300 p-2 rounded-md hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors focus:outline-none focus:ring-2 focus:ring-blue-500 flex items-center gap-2"
          aria-label="Toggle language between Spanish and English"
          disabled={isLanguageLoading}
        >
          {isLanguageLoading ? <Spinner /> : 'ES / EN'}
        </button>
      </div>
    </div>
  </nav>
));

Header.displayName = 'Header';

export default Header;
