import { Container } from '@/components/common/Container';
import { Section } from '@/components/common/Section';
import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';

export function FinalCTASection() {
  return (
    <Section className="relative overflow-hidden">
      <Container>
        <div className="relative flex flex-col items-center gap-8 py-16 text-center md:py-24">
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl">
            Ready to Upgrade Your{' '}
            <span className="bg-gradient-to-r from-primary to-primary/60 bg-clip-text text-transparent">
              Professional Image?
            </span>
          </h2>
          <p className="max-w-2xl text-lg text-muted-foreground">
            Join thousands of professionals who have transformed their online presence with AI-powered headshots.
          </p>
          <Button size="lg" className="gap-2">
            Generate Headshots
            <ArrowRight className="h-4 w-4" />
          </Button>

          <div className="absolute -left-10 top-1/2 h-40 w-40 -translate-y-1/2 rounded-full bg-primary/10 blur-3xl" />
          <div className="absolute -right-10 top-1/2 h-40 w-40 -translate-y-1/2 rounded-full bg-primary/10 blur-3xl" />
        </div>
      </Container>
    </Section>
  );
}
