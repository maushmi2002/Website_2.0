import { ButtonHTMLAttributes, ReactNode } from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode;
  variant?: 'primary' | 'secondary' | 'outline';
  size?: 'sm' | 'md' | 'lg';
  href?: string;
  className?: string;
}

const Button = ({
  children,
  variant = 'primary',
  size = 'md',
  href,
  className = '',
  ...props
}: ButtonProps) => {
  const baseClasses = 'inline-flex items-center justify-center font-medium rounded-lg transition-all focus:outline-none focus:ring-2 focus:ring-offset-2 min-h-[44px]';
  
  const variantClasses = {
    primary: 'bg-blue-600 text-white hover:bg-blue-700 focus:ring-blue-500 active:bg-blue-800',
    secondary: 'bg-emerald-600 text-white hover:bg-emerald-700 focus:ring-emerald-500 active:bg-emerald-800',
    outline: 'border border-gray-600 text-gray-200 bg-transparent hover:bg-gray-800 focus:ring-blue-500 active:bg-gray-900',
  };
  
  const sizeClasses = {
    sm: 'text-xs sm:text-sm px-3 py-2 min-h-[40px] sm:min-h-[44px]',
    md: 'text-sm sm:text-base px-4 sm:px-5 py-2.5 min-h-[44px]',
    lg: 'text-base sm:text-lg px-5 sm:px-6 py-3 min-h-[48px] sm:min-h-[52px]',
  };
  
  const buttonClasses = `${baseClasses} ${variantClasses[variant]} ${sizeClasses[size]} ${className}`;
  
  const buttonMotion = {
    whileHover: { scale: 1.02 },
    whileTap: { scale: 0.98 },
    transition: { duration: 0.2 }
  };

  // Filter out conflicting props for motion.button
  const {
    onAnimationStart,
    onAnimationEnd,
    onAnimationIteration,
    onDragStart,
    onDragEnd,
    onDrag,
    onDragEnter,
    onDragLeave,
    onDragOver,
    onDrop,
    onTouchStart,
    onTouchEnd,
    onTouchMove,
    onPointerDown,
    onPointerUp,
    onPointerMove,
    onPointerEnter,
    onPointerLeave,
    onPointerCancel,
    onPointerOver,
    onPointerOut,
    ...safeProps
  } = props;

  if (href) {
    return (
      <Link href={href}>
        <motion.div
          className={buttonClasses}
          {...buttonMotion}
        >
          {children}
        </motion.div>
      </Link>
    );
  }

  return (
    <motion.button
      className={buttonClasses}
      {...buttonMotion}
      {...safeProps}
    >
      {children}
    </motion.button>
  );
};

export default Button;