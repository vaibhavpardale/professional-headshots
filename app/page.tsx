import { Container } from '@/components/common/Container';
import { Section } from '@/components/common/Section';

export default function Home() {
  return (
    <Container>
      <Section className="flex min-h-[60vh] flex-col items-center justify-center text-center">
        <div className="space-y-6">
          <h1 className="text-4xl font-bold tracking-tight md:text-5xl lg:text-6xl">
            Welcome to Headshots
          </h1>
          <p className="max-w-[600px] text-lg text-muted-foreground md:text-xl">
            Create stunning professional headshots that make a lasting impression.
          </p>
        </div>
      </Section>
    </Container>
  );
}
