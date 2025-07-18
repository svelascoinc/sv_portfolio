import React, { useState, useCallback } from 'react';
import { TimelineIcon } from './common/Icons';

const ExperienceItem = React.memo(({ item, language }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleDetails = useCallback(() => {
    setIsOpen(prev => !prev);
  }, []);

  return (
    <div className="flex">
      <div className="flex flex-col items-center mr-4 sm:mr-6">
        <TimelineIcon className="w-6 h-6" />
        <div className="w-px h-full bg-gray-300 dark:bg-gray-600"></div>
      </div>
      <div className="pb-12">
        <p className="font-bold text-blue-500 dark:text-blue-400">
          {typeof item.period === 'object' ? item.period[language] : item.period}
        </p>
        <h3 className="text-xl font-bold text-gray-800 dark:text-white mt-1">
          {item.role}
        </h3>
        <p className="text-gray-500 dark:text-gray-400 text-sm">
          {item.company}
        </p>
        <button 
          onClick={toggleDetails} 
          className="text-xs text-blue-600 dark:text-blue-400 mt-2 hover:underline focus:outline-none focus:underline transition-colors"
          aria-expanded={isOpen}
          aria-controls={`experience-details-${item.company.replace(/\s+/g, '-').toLowerCase()}`}
        >
          {isOpen 
            ? (language === 'es' ? 'Ocultar detalles' : 'Hide details') 
            : (language === 'es' ? 'Mostrar detalles' : 'Show details')
          }
        </button>
        {isOpen && (
          <ul 
            id={`experience-details-${item.company.replace(/\s+/g, '-').toLowerCase()}`}
            className="mt-3 list-disc list-inside text-left text-sm text-gray-600 dark:text-gray-300 space-y-1 animate-slide-up"
          >
            {item.description[language].map((desc, i) => (
              <li key={i} className="leading-relaxed">{desc}</li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
});

ExperienceItem.displayName = 'ExperienceItem';

export default ExperienceItem;
