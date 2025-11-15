import React from 'react';

type Props = {
  phone?: string; // e.g., "+971501234567"
  className?: string;
};

const CallButton: React.FC<Props> = ({
  phone = '+971502434772',
  className = '',
}) => {
  const href = `tel:${phone}`;

  return (
    <a
      href={href}
      className={`inline-flex items-center gap-3 bg-blue-500 hover:bg-blue-600 text-white font-semibold px-10 py-4 rounded shadow-lg transition-colors ${className}`}
    >
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="20" height="20" fill="currentColor">
        <path d="M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.02.74-.25 1.02l-2.2 2.2z"/>
      </svg>
      <span className='text-lg'>Call Now</span>
    </a>
  );
};

export default CallButton;
