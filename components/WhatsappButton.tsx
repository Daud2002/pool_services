import React from 'react';

type Props = {
  phone?: string;
  message?: string;
  className?: string;
};

const WhatsappButton: React.FC<Props> = ({
  message = 'Hello!%20I%20would%20like%20to%20know%20more%20about%20your%20pool%20services',
  className = '',
}) => {
  const phone = process.env.NEXT_PUBLIC_WHATSAPP_NUMBER?.split(' ').join('');
  const href = `https://wa.me/${phone}?text=${message}`;

  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className={`inline-flex items-center gap-3 bg-green-500 hover:bg-green-600 text-white font-semibold px-4 py-4 rounded-full shadow-lg transition-colors ${className}`}
    >
      <img src="/whatsapp.png" alt="" className='w-8 h-8'/>
    </a>
  );
};

export default WhatsappButton;
