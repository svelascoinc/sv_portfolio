import React from 'react';

const Spinner = React.memo(() => (
  <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-blue-600"></div>
));

Spinner.displayName = 'Spinner';

export default Spinner;
