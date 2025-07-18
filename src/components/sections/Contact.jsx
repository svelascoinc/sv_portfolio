import React from 'react';
import { portfolioData } from '../../data/portfolioData';

const Contact = React.memo(({ language }) => (
  <section id="contact" className="py-20 md:py-24 bg-white dark:bg-gray-800">
    <div className="container mx-auto px-6 text-center">
      <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 dark:text-white mb-6">
        {portfolioData.contact.title[language]}
      </h2>
      <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto mb-10 text-balance">
        {portfolioData.contact.description[language]}
      </p>
      <a 
        href={`mailto:${portfolioData.email}`} 
        className="inline-block bg-blue-600 text-white font-bold py-3 px-8 sm:py-4 sm:px-10 rounded-full text-base sm:text-lg hover:bg-blue-700 transform hover:scale-105 transition-all duration-200 shadow-lg hover:shadow-xl"
        aria-label={`Send email to ${portfolioData.email}`}
      >
        {portfolioData.contact.buttonText[language]}
      </a>
    </div>
  </section>
));

Contact.displayName = 'Contact';

export default Contact;
