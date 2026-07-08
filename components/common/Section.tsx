import { cn } from '@/lib/utils';

interface SectionProps {
  children: React.ReactNode;
  className?: string;
  id?: string;
  as?: 'section' | 'div' | 'article';
  variant?: 'default' | 'sm' | 'lg' | 'none';
}

const sectionVariants = {
  none: '',
  sm: 'py-8 md:py-12',
  default: 'py-16 md:py-24',
  lg: 'py-24 md:py-32',
};

export function Section({
  children,
  className,
  id,
  as: Component = 'section',
  variant = 'default',
}: SectionProps) {
  return (
    <Component id={id} className={cn(sectionVariants[variant], className)}>
      {children}
    </Component>
  );
}
