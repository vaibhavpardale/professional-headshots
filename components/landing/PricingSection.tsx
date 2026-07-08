import { Container } from '@/components/common/Container';
import { Section } from '@/components/common/Section';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader } from '@/components/ui/card';
import { Check } from 'lucide-react';

const includedFeatures = [
  'Multiple professional styles',
  'High-resolution downloads',
  'Commercial use license',
  'Fast generation',
  'Secure processing',
  'Multiple revisions',
];

export function PricingSection() {
  return (
    <Section id="pricing" className="bg-muted/30">
      <Container size="sm">
        <div className="flex flex-col items-center gap-12">
          <div className="text-center">
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
              Simple Pricing
            </h2>
            <p className="mt-4 text-lg text-muted-foreground">
              One package, everything included.
            </p>
          </div>

          <Card className="w-full max-w-md border-primary/50">
            <CardHeader className="text-center">
              <h3 className="text-2xl font-semibold">Professional Headshots Pack</h3>
              <div className="mt-4">
                <span className="text-4xl font-bold">$39</span>
                <span className="text-muted-foreground">/pack</span>
              </div>
              <p className="mt-2 text-sm text-muted-foreground">
                Everything you need for your professional image
              </p>
            </CardHeader>
            <CardContent className="space-y-6">
              <ul className="space-y-3">
                {includedFeatures.map((feature) => (
                  <li key={feature} className="flex items-center gap-3">
                    <div className="flex h-5 w-5 items-center justify-center rounded-full bg-primary/10">
                      <Check className="h-3 w-3 text-primary" />
                    </div>
                    <span className="text-sm">{feature}</span>
                  </li>
                ))}
              </ul>
              <Button className="w-full" size="lg">
                Generate Headshots
              </Button>
            </CardContent>
          </Card>
        </div>
      </Container>
    </Section>
  );
}
