import React from 'react';
import { portfolioData } from '../../data/portfolioData';

const Footer = React.memo(() => (
  <footer className="text-center py-8 border-t border-gray-200 dark:border-gray-700">
    <p className="text-gray-500 dark:text-gray-400 text-sm">
      &copy; {new Date().getFullYear()} {portfolioData.name}. All rights reserved.
    </p>
  </footer>
));

Footer.displayName = 'Footer';

export default Footer;
