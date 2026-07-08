import { Container } from '@/components/common/Container';
import { Section } from '@/components/common/Section';
import {
  Camera,
  Zap,
  Palette,
  Image,
  Briefcase,
  Shield,
} from 'lucide-react';

const features = [
  {
    title: 'Studio Quality',
    description: 'Professional-grade lighting and composition without the studio.',
    icon: Camera,
  },
  {
    title: 'Fast Generation',
    description: 'Receive your headshots in minutes, not days.',
    icon: Zap,
  },
  {
    title: 'Multiple Styles',
    description: 'Choose from various professional looks for any occasion.',
    icon: Palette,
  },
  {
    title: 'High Resolution',
    description: 'Crystal clear images suitable for print and digital use.',
    icon: Image,
  },
  {
    title: 'Commercial Use',
    description: 'Full rights to use headshots for any professional purpose.',
    icon: Briefcase,
  },
  {
    title: 'Private & Secure',
    description: 'Your photos are processed securely and never shared.',
    icon: Shield,
  },
];

export function FeaturesSection() {
  return (
    <Section id="features">
      <Container>
        <div className="flex flex-col items-center gap-12">
          <div className="text-center">
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
              Powerful Features
            </h2>
            <p className="mt-4 max-w-2xl text-lg text-muted-foreground">
              Everything you need for the perfect professional headshot.
            </p>
          </div>

          <div className="grid w-full gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {features.map((feature) => (
              <div
                key={feature.title}
                className="flex flex-col gap-4 rounded-xl border p-6 transition-colors hover:bg-muted/50"
              >
                <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10">
                  <feature.icon className="h-6 w-6 text-primary" />
                </div>
                <h3 className="text-lg font-semibold">{feature.title}</h3>
                <p className="text-muted-foreground">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </Container>
    </Section>
  );
}
