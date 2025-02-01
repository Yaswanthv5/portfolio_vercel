import React from 'react';

// Define ButtonProps to type-check the props
interface ButtonProps {
  text: string;         // Button label
  onClick?: () => void; // Optional click handler
  className?: string;   // Optional custom classes for styling
}

const Button: React.FC<ButtonProps> = ({ text, onClick, className }) => {
  return (
    <button
      onClick={onClick}
      className={`bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-700 transition-all ${className}`}
    >
      {text}
    </button>
  );
};

export default Button;
