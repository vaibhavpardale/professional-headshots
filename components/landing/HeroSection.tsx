import { Button } from '@/components/ui/button';
import { Container } from '@/components/common/Container';
import { Section } from '@/components/common/Section';
import { ArrowRight, Sparkles } from 'lucide-react';

export function HeroSection() {
  return (
    <Section className="relative overflow-hidden">
      <Container>
        <div className="flex flex-col items-center justify-center gap-12 py-16 md:py-24 lg:py-32">
          <div className="flex max-w-4xl flex-col items-center gap-6 text-center">
            <div className="inline-flex items-center gap-2 rounded-full border px-4 py-1.5 text-sm">
              <Sparkles className="h-4 w-4 text-primary" />
              <span className="text-muted-foreground">AI-Powered Professional Photography</span>
            </div>

            <h1 className="text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl lg:text-7xl">
              Professional AI Headshots{' '}
              <span className="bg-gradient-to-r from-primary to-primary/60 bg-clip-text text-transparent">
                in Minutes
              </span>
            </h1>

            <p className="max-w-2xl text-lg text-muted-foreground sm:text-xl md:text-2xl">
              Transform your selfies into premium studio-quality professional headshots for LinkedIn, resumes, portfolios, and business profiles.
            </p>

            <div className="flex flex-col gap-4 sm:flex-row sm:gap-6">
              <Button size="lg" className="gap-2 text-base">
                Generate My Headshots
                <ArrowRight className="h-4 w-4" />
              </Button>
              <Button size="lg" variant="outline" className="text-base">
                See Examples
              </Button>
            </div>
          </div>

          <div className="relative w-full max-w-5xl">
            <div className="relative aspect-[16/9] overflow-hidden rounded-2xl border bg-gradient-to-br from-primary/5 via-transparent to-primary/5">
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="grid grid-cols-3 gap-4 p-8 opacity-40">
                  {[...Array(6)].map((_, i) => (
                    <div
                      key={i}
                      className="aspect-square rounded-lg bg-gradient-to-br from-primary/20 to-primary/5"
                    />
                  ))}
                </div>
              </div>
              <div className="absolute inset-0 flex items-center justify-center">
                <p className="text-sm text-muted-foreground">
                  Professional Headshots Preview
                </p>
              </div>
            </div>

            <div className="absolute -left-4 -top-4 h-24 w-24 rounded-full bg-primary/10 blur-3xl" />
            <div className="absolute -bottom-4 -right-4 h-24 w-24 rounded-full bg-primary/10 blur-3xl" />
          </div>
        </div>
      </Container>
    </Section>
  );
}
