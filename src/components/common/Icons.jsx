import React from 'react';

export const MailIcon = React.memo(({ className = "", ...props }) => (
  <svg 
    className={className} 
    xmlns="http://www.w3.org/2000/svg" 
    viewBox="0 0 24 24" 
    fill="none" 
    stroke="currentColor" 
    strokeWidth="2" 
    strokeLinecap="round" 
    strokeLinejoin="round"
    role="img"
    aria-label="Email icon"
    {...props}
  >
    <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path>
    <polyline points="22,6 12,13 2,6"></polyline>
  </svg>
));

export const LinkedInIcon = React.memo(({ className = "", ...props }) => (
  <svg 
    className={className} 
    xmlns="http://www.w3.org/2000/svg" 
    viewBox="0 0 24 24" 
    fill="currentColor"
    role="img"
    aria-label="LinkedIn icon"
    {...props}
  >
    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.225 0z"/>
  </svg>
));

export const ThemeToggleIcon = React.memo(({ className = "", ...props }) => (
  <svg 
    className={className} 
    xmlns="http://www.w3.org/2000/svg" 
    viewBox="0 0 24 24" 
    fill="currentColor"
    role="img"
    aria-label="Theme toggle icon"
    {...props}
  >
    <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zM12 20V4c4.41 0 8 3.59 8 8s-3.59 8-8 8z"/>
  </svg>
));

export const DownloadIcon = React.memo(({ className = "", ...props }) => (
  <svg 
    className={className} 
    xmlns="http://www.w3.org/2000/svg" 
    fill="none" 
    viewBox="0 0 24 24" 
    strokeWidth={1.5} 
    stroke="currentColor"
    role="img"
    aria-label="Download icon"
    {...props}
  >
    <path strokeLinecap="round" strokeLinejoin="round" d="M3 16.5v2.25A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75V16.5M16.5 12L12 16.5m0 0L7.5 12m4.5 4.5V3" />
  </svg>
));

export const TimelineIcon = React.memo(({ className = "" }) => (
  <div className={`flex-shrink-0 bg-blue-500 ${className} rounded-full border-4 border-white dark:border-gray-800`}>
    <div className="w-full h-full rounded-full bg-white dark:bg-gray-800 scale-50"></div>
  </div>
));

// Asignar displayName para debugging
MailIcon.displayName = 'MailIcon';
LinkedInIcon.displayName = 'LinkedInIcon';
ThemeToggleIcon.displayName = 'ThemeToggleIcon';
DownloadIcon.displayName = 'DownloadIcon';
TimelineIcon.displayName = 'TimelineIcon';
