import React from 'react';
import { portfolioData } from '../../data/portfolioData';

const Projects = React.memo(({ language }) => (
  <section id="projects" className="py-20 md:py-24">
    <div className="container mx-auto px-6">
      <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 dark:text-white mb-12 sm:mb-16 text-center">
        {portfolioData.projects.title[language]}
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {portfolioData.projects.items.map((project, index) => (
          <div 
            key={index} 
            className="bg-white dark:bg-gray-800 rounded-lg p-6 shadow-md transition-all duration-300 hover:scale-105 hover:shadow-xl group"
          >
            <p className="text-sm font-semibold text-blue-600 dark:text-blue-400 mb-1 group-hover:text-blue-700 dark:group-hover:text-blue-300 transition-colors">
              {project.category}
            </p>
            <h3 className="text-xl sm:text-2xl font-bold text-gray-900 dark:text-white mb-3 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
              {project.title[language]}
            </h3>
            <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
              {project.description[language]}
            </p>
          </div>
        ))}
      </div>
    </div>
  </section>
));

Projects.displayName = 'Projects';

export default Projects;
