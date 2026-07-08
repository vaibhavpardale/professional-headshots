import { cn } from '@/lib/utils';

interface MaxWidthWrapperProps {
  children: React.ReactNode;
  className?: string;
  maxWidth?: 'sm' | 'md' | 'lg' | 'xl' | '2xl' | 'full';
}

const maxWidthVariants = {
  sm: 'max-w-3xl',
  md: 'max-w-4xl',
  lg: 'max-w-5xl',
  xl: 'max-w-6xl',
  '2xl': 'max-w-7xl',
  full: 'max-w-full',
};

export function MaxWidthWrapper({
  children,
  className,
  maxWidth = '2xl',
}: MaxWidthWrapperProps) {
  return (
    <div className={cn('mx-auto w-full px-4 sm:px-6 lg:px-8', maxWidthVariants[maxWidth], className)}>
      {children}
    </div>
  );
}
