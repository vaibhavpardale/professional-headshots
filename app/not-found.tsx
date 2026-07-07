import Link from 'next/link';
import { Container } from '@/components/common/Container';
import { Section } from '@/components/common/Section';
import { Button } from '@/components/ui/button';

export default function NotFound() {
  return (
    <Container>
      <Section className="flex min-h-[60vh] flex-col items-center justify-center text-center">
        <div className="space-y-6">
          <h1 className="text-6xl font-bold tracking-tight md:text-7xl lg:text-8xl">
            404
          </h1>
          <h2 className="text-2xl font-semibold md:text-3xl">Page Not Found</h2>
          <p className="max-w-[500px] text-muted-foreground">
            Sorry, we couldn&apos;t find the page you&apos;re looking for. It might have been
            moved or doesn&apos;t exist.
          </p>
          <div className="pt-4">
            <Button asChild>
              <Link href="/">Return Home</Link>
            </Button>
          </div>
        </div>
      </Section>
    </Container>
  );
}
