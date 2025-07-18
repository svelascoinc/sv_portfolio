import React from 'react';
import { portfolioData } from '../../data/portfolioData';
import ExperienceItem from '../ExperienceItem';

const Resume = React.memo(({ language }) => (
    <section id="resume" className="py-20 md:py-24 bg-white dark:bg-gray-800">
        <div className="container mx-auto px-6">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 dark:text-white mb-12 sm:mb-16 text-center">
                {portfolioData.resume.title[language]}
            </h2>
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
                {/* Columna Izquierda: Habilidades */}
                <div className="lg:col-span-1">
                    <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-8">
                        {portfolioData.resume.skillsTitle[language]}
                    </h3>
                    {portfolioData.skills.map((skillCategory, index) => (
                        <div key={index} className="mb-6">
                            <h4 className="font-semibold text-lg text-gray-700 dark:text-gray-300 mb-3">
                                {typeof skillCategory.category === 'object' ? skillCategory.category[language] : skillCategory.category}
                            </h4>
                            <div className="flex flex-wrap gap-2">
                                {skillCategory.items.map((item, i) => (
                                    <span
                                        key={i}
                                        className="bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-300 text-sm font-medium px-3 py-1 rounded-full transition-transform hover:scale-105"
                                    >
                                        {item}
                                    </span>
                                ))}
                            </div>
                        </div>
                    ))}
                </div>

                {/* Columna Central: Experiencia */}
                <div className="lg:col-span-1">
                    <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-8">
                        {portfolioData.resume.experienceTitle[language]}
                    </h3>
                    {portfolioData.experience.map((item, index) => (
                        <ExperienceItem key={index} item={item} language={language} />
                    ))}
                </div>

                {/* Columna Derecha: Certificaciones y Educación */}
                <div className="lg:col-span-1 space-y-12">
                    <div>
                        <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-8">
                            {portfolioData.resume.certificationsTitle[language]}
                        </h3>
                        <ul className="space-y-4">
                            {portfolioData.certifications.map((cert, index) => (
                                <li key={index} className="bg-gray-50 dark:bg-gray-900/50 p-4 rounded-lg hover:shadow-md transition-shadow">
                                    <p className="font-bold text-gray-800 dark:text-white">
                                        {cert.name}
                                    </p>
                                    <p className="text-sm text-gray-500 dark:text-gray-400">
                                        {cert.from}
                                    </p>
                                </li>
                            ))}
                        </ul>
                    </div>
                    <div>
                        <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-8">
                            {portfolioData.resume.educationTitle[language]}
                        </h3>
                        <div className="bg-gray-50 dark:bg-gray-900/50 p-4 rounded-lg hover:shadow-md transition-shadow">
                            <p className="font-bold text-gray-800 dark:text-white">
                                {portfolioData.education.degree[language]}
                            </p>
                            <p className="text-sm text-gray-500 dark:text-gray-400">
                                {portfolioData.education.institution}
                            </p>
                            <p className="text-sm text-gray-500 dark:text-gray-400">
                                {portfolioData.education.year}
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
));

Resume.displayName = 'Resume';

export default Resume;
