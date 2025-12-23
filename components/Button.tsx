import React from 'react';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'ghost' | 'success';
  children: React.ReactNode;
  className?: string;
}

export const Button: React.FC<ButtonProps> = ({ 
  variant = 'primary', 
  children, 
  className = '', 
  ...props 
}) => {
  const baseStyles = "px-6 py-3 rounded-full font-medium transition-all duration-300 flex items-center justify-center gap-2 backdrop-blur-sm";
  
  const variants = {
    primary: "bg-brand text-white hover:bg-brand-dark hover:scale-105 hover:shadow-[0_0_20px_rgba(21,71,106,0.3)] relative overflow-hidden group border border-transparent",
    secondary: "bg-transparent border border-brand/20 text-brand hover:text-brand-dark hover:border-brand/40 hover:bg-brand/5",
    ghost: "text-slate-500 hover:text-brand hover:bg-brand/5",
    success: "bg-brand border border-brand text-white hover:bg-brand-dark hover:scale-105 hover:shadow-[0_0_20px_rgba(21,71,106,0.3)]"
  };

  return (
    <button 
      className={`${baseStyles} ${variants[variant]} ${className}`}
      {...props}
    >
      {/* Primary variant glow effect */}
      {(variant === 'primary' || variant === 'success') && (
        <div className="absolute inset-0 -z-10 bg-gradient-to-r from-brand-light/20 to-cyan-500/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
      )}
      {children}
    </button>
  );
};