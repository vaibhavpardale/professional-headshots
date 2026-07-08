import { Container } from '@/components/common/Container';
import { Section } from '@/components/common/Section';
import { Upload, Palette, Download, ArrowDown } from 'lucide-react';

const steps = [
  {
    number: '01',
    title: 'Upload Photos',
    description: 'Upload a few selfies or casual photos. Our AI works best with clear, well-lit images.',
    icon: Upload,
  },
  {
    number: '02',
    title: 'Choose Style',
    description: 'Select from professional styles—corporate, creative, or formal. Customize your look.',
    icon: Palette,
  },
  {
    number: '03',
    title: 'Download Headshots',
    description: 'Receive multiple high-resolution headshots ready for any professional use.',
    icon: Download,
  },
];

export function HowItWorksSection() {
  return (
    <Section id="how-it-works">
      <Container>
        <div className="flex flex-col items-center gap-12">
          <div className="text-center">
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
              How It Works
            </h2>
            <p className="mt-4 text-lg text-muted-foreground">
              Three simple steps to professional headshots
            </p>
          </div>

          <div className="grid w-full max-w-5xl gap-8 md:grid-cols-3">
            {steps.map((step, index) => (
              <div key={step.number} className="group relative flex flex-col items-center text-center">
                <div className="mb-6 flex h-16 w-16 items-center justify-center rounded-2xl bg-primary/10">
                  <step.icon className="h-8 w-8 text-primary" />
                </div>
                <span className="mb-2 text-sm font-semibold text-primary">
                  Step {step.number}
                </span>
                <h3 className="mb-3 text-xl font-semibold">{step.title}</h3>
                <p className="text-muted-foreground">{step.description}</p>

                {index < steps.length - 1 && (
                  <div className="absolute -right-4 top-8 hidden md:block">
                    <ArrowDown className="h-5 w-5 rotate-[-90deg] text-muted-foreground/50" />
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </Container>
    </Section>
  );
}
