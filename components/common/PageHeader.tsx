import { cn } from '@/lib/utils';

interface PageHeaderProps {
  title: string;
  description?: string;
  className?: string;
  centered?: boolean;
}

export function PageHeader({ title, description, className, centered = false }: PageHeaderProps) {
  return (
    <div className={cn(
      'space-y-4 pb-8 pt-6 md:space-y-6 md:pb-12 md:pt-10',
      centered && 'text-center',
      className
    )}>
      <h1 className="text-3xl font-bold tracking-tight md:text-4xl lg:text-5xl">
        {title}
      </h1>
      {description && (
        <p className={cn(
          'max-w-[750px] text-lg text-muted-foreground sm:text-xl',
          centered && 'mx-auto'
        )}>
          {description}
        </p>
      )}
    </div>
  );
}
