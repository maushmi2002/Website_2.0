import { ReactNode } from 'react';

interface SectionProps {
  children: ReactNode;
  className?: string;
  id?: string;
  bgColor?: 'white' | 'light' | 'dark' | 'primary' | 'gradient';
  spacing?: 'sm' | 'md' | 'lg' | 'xl';
}

const Section = ({
  children,
  className = '',
  id,
  bgColor = 'white',
  spacing = 'lg',
}: SectionProps) => {
  const bgClasses = {
    white: 'bg-gray-950',
    light: 'bg-gray-900',
    dark: 'bg-gray-950 text-white',
    primary: 'bg-blue-600 text-white',
    gradient: 'bg-gradient-to-br from-blue-600 to-indigo-700 text-white',
  };

  const spacingClasses = {
    sm: 'py-6 sm:py-8 md:py-12',
    md: 'py-8 sm:py-12 md:py-16',
    lg: 'py-12 sm:py-16 md:py-24',
    xl: 'py-16 sm:py-24 md:py-32',
  };

  return (
    <section
      id={id}
      className={`${bgClasses[bgColor]} ${spacingClasses[spacing]} ${className}`}
    >
      <div className="container-custom">
        {children}
      </div>
    </section>
  );
};

export default Section;