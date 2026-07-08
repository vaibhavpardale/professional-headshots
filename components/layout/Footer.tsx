import Link from 'next/link';
import { Container } from '@/components/common/Container';

export function Footer() {
  const currentYear = new Date().getFullYear();

  const links = [
    { name: 'Privacy', href: '/privacy' },
    { name: 'Terms', href: '/terms' },
  ];

  return (
    <footer className="border-t bg-background" role="contentinfo">
      <Container>
        <div className="flex flex-col items-center justify-between gap-4 py-8 md:flex-row">
          <Link
            href="/"
            className="text-lg font-bold tracking-tight focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
          >
            Headshots
          </Link>

          <nav className="flex flex-wrap items-center justify-center gap-4 md:gap-6" aria-label="Footer navigation">
            {links.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className="text-sm text-muted-foreground transition-colors hover:text-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
              >
                {link.name}
              </Link>
            ))}
          </nav>

          <p className="text-sm text-muted-foreground">
            © {currentYear} Headshots. All rights reserved.
          </p>
        </div>
      </Container>
    </footer>
  );
}
