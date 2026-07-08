import { cn } from '@/lib/utils';

interface SectionProps {
  children: React.ReactNode;
  className?: string;
  id?: string;
  variant?: 'default' | 'compact' | 'spacious';
}

const sectionVariants = {
  default: 'py-16 md:py-24',
  compact: 'py-8 md:py-12',
  spacious: 'py-24 md:py-32',
};

export function Section({ children, className, id, variant = 'default' }: SectionProps) {
  return (
    <section
      id={id}
      className={cn(sectionVariants[variant], className)}
      aria-labelledby={id ? `${id}-heading` : undefined}
    >
      {children}
    </section>
  );
}
