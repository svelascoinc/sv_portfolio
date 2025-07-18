import React from 'react';
import { portfolioData } from '../../data/portfolioData';
import { MailIcon, LinkedInIcon } from '../common/Icons';

const Hero = React.memo(({ language }) => (
  <section id="home" className="container mx-auto px-6 py-16 md:py-24 lg:py-32">
    <div className="grid lg:grid-cols-5 gap-8 md:gap-12 items-center">
      <div className="lg:col-span-3 text-center lg:text-left">
        <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-gray-900 dark:text-white animate-fade-in">
          {portfolioData.name}
        </h1>
        <p className="mt-4 text-lg sm:text-xl md:text-2xl text-blue-600 dark:text-blue-400 font-semibold animate-slide-up">
          {portfolioData.title[language]}
        </p>
        <div className="mt-6 text-gray-600 dark:text-gray-400 flex items-center justify-center lg:justify-start space-x-4 animate-slide-up">
          <span>📍 {portfolioData.location}</span>
        </div>
        <div className="mt-8 flex justify-center lg:justify-start space-x-6 animate-slide-up">
          <a 
            href={`mailto:${portfolioData.email}`} 
            className="text-gray-500 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors transform hover:scale-110"
            aria-label={`Send email to ${portfolioData.email}`}
          >
            <MailIcon className="w-7 h-7 sm:w-8 sm:h-8"/>
          </a>
          <a 
            href={portfolioData.linkedin} 
            target="_blank" 
            rel="noopener noreferrer" 
            className="text-gray-500 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors transform hover:scale-110"
            aria-label="Visit LinkedIn profile"
          >
            <LinkedInIcon className="w-7 h-7 sm:w-8 sm:h-8"/>
          </a>
        </div>
      </div>
      <div className="lg:col-span-2 animate-fade-in">
        <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">
          {portfolioData.about.title[language]}
        </h2>
        <p className="text-gray-700 dark:text-gray-300 mb-4 text-balance">
          {portfolioData.about.p1[language]}
        </p>
        <p className="text-gray-700 dark:text-gray-300 text-balance">
          {portfolioData.about.p2[language]}
        </p>
      </div>
    </div>
  </section>
));

Hero.displayName = 'Hero';

export default Hero;
