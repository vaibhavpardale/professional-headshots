import { Container } from '@/components/common/Container';
import { Section } from '@/components/common/Section';
import { Card, CardContent } from '@/components/ui/card';

const styles = [
  {
    name: 'Corporate',
    description: 'Clean and professional, perfect for business environments.',
  },
  {
    name: 'Executive',
    description: 'Authoritative and confident, ideal for leadership roles.',
  },
  {
    name: 'Startup',
    description: 'Modern and approachable, great for tech and innovation.',
  },
  {
    name: 'Creative',
    description: 'Artistic and expressive, suited for designers and creators.',
  },
  {
    name: 'Formal',
    description: 'Traditional and polished, appropriate for law and finance.',
  },
  {
    name: 'Modern',
    description: 'Contemporary and sleek, versatile for any industry.',
  },
];

export function StylesSection() {
  return (
    <Section id="styles" className="bg-muted/30">
      <Container>
        <div className="flex flex-col items-center gap-12">
          <div className="text-center">
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
              Professional Styles
            </h2>
            <p className="mt-4 max-w-2xl text-lg text-muted-foreground">
              Choose from a variety of professional styles tailored to your industry and personal brand.
            </p>
          </div>

          <div className="grid w-full gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {styles.map((style) => (
              <Card
                key={style.name}
                className="group overflow-hidden transition-all hover:shadow-lg"
              >
                <div className="aspect-[4/3] bg-gradient-to-br from-primary/5 via-primary/10 to-primary/5">
                  <div className="flex h-full items-center justify-center">
                    <div className="h-16 w-16 rounded-full bg-gradient-to-br from-primary/20 to-primary/10" />
                  </div>
                </div>
                <CardContent className="p-6">
                  <h3 className="mb-2 text-lg font-semibold">{style.name}</h3>
                  <p className="text-sm text-muted-foreground">{style.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </Container>
    </Section>
  );
}
