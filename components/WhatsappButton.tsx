import React from 'react';

type Props = {
  phone?: string; // in international format without +, e.g. "971501234567"
  message?: string;
  className?: string;
};

// NOTE: I assumed you don't have a phone number provided yet.
// The component accepts a `phone` prop. If you have a real number, pass it like:
// <WhatsappButton phone="971501234567" />
// Otherwise it uses a placeholder that won't work until you update it.
const WhatsappButton: React.FC<Props> = ({
  message = 'Hello!%20I%20would%20like%20to%20know%20more%20about%20your%20pool%20services',
  className = '',
}) => {
    const phone = '+971502434772';
  const href = `https://wa.me/${phone}?text=${message}`;

  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className={`inline-flex items-center gap-3 bg-green-500 hover:bg-green-600 text-white font-semibold px-4 py-3 rounded shadow-lg transition-colors ${className}`}
    >
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="20" height="20" fill="currentColor">
        <path d="M20.52 3.48A11.94 11.94 0 0 0 12 0C5.373 0 .02 5.373.02 12c0 2.117.556 4.183 1.611 6.02L0 24l6.24-1.61A11.946 11.946 0 0 0 12 24c6.627 0 12-5.373 12-12 0-1.88-.433-3.66-1.48-5.22zM12 22.08c-1.9 0-3.75-.5-5.34-1.44l-.38-.22-3.71.96.99-3.55-.25-.36A9.99 9.99 0 0 1 2 12c0-5.52 4.48-10 10-10s10 4.48 10 10-4.48 10-10 10zm5.28-7.02c-.29-.15-1.72-.85-1.98-.94-.26-.09-.45-.14-.64.15s-.73.94-.9 1.13c-.17.19-.34.21-.63.07-.29-.15-1.22-.45-2.33-1.44-.86-.76-1.44-1.7-1.61-1.99-.17-.29-.02-.45.12-.6.12-.12.29-.32.44-.48.15-.16.19-.27.29-.45.09-.18.04-.34-.02-.49-.06-.15-.64-1.54-.88-2.12-.23-.55-.47-.48-.64-.49l-.55-.01c-.19 0-.5.07-.76.35s-1 1-1 2.45 1.03 2.84 1.17 3.04c.14.19 2.02 3.1 4.9 4.35 1.37.59 2.44.94 3.28 1.2.94.28 1.8.24 2.48.15.76-.11 1.72-.7 1.97-1.37.25-.68.25-1.26.17-1.38-.08-.12-.29-.2-.58-.35z" />
      </svg>
      <span>Chat on WhatsApp</span>
    </a>
  );
};

export default WhatsappButton;
