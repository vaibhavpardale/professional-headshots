import { cn } from '@/lib/utils';

interface ContainerProps {
  children: React.ReactNode;
  className?: string;
  size?: 'default' | 'sm' | 'lg' | 'full';
}

const containerSizes = {
  sm: 'max-w-screen-sm',
  default: 'max-w-screen-xl',
  lg: 'max-w-screen-2xl',
  full: 'max-w-full',
};

export function Container({ children, className, size = 'default' }: ContainerProps) {
  return (
    <div className={cn('mx-auto w-full px-4 sm:px-6 lg:px-8', containerSizes[size], className)}>
      {children}
    </div>
  );
}
