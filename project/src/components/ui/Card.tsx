import React from 'react';

interface CardProps {
  children: React.ReactNode;
  className?: string;
  id?: string;
  onClick?: () => void;
}

const Card: React.FC<CardProps> = ({ children, className = '', id, onClick }) => {
  return (
    <div 
      id={id} 
      className={`bg-white rounded-xl shadow-lg p-8 hover:shadow-xl transition-shadow ${className}`}
      onClick={onClick}
      role={onClick ? "button" : undefined}
      tabIndex={onClick ? 0 : undefined}
    >
      {children}
    </div>
  );
};

export default Card;