import Link from 'next/link';

export function Footer() {
  const currentYear = new Date().getFullYear();

  const links = {
    company: [
      { name: 'About', href: '/about' },
    ],
    legal: [
      { name: 'Privacy Policy', href: '/privacy' },
      { name: 'Terms of Service', href: '/terms' },
    ],
  };

  return (
    <footer className="border-t bg-background" role="contentinfo">
      <div className="container mx-auto px-4 py-12 sm:px-6 lg:px-8">
        <div className="grid gap-8 md:grid-cols-3">
          <div className="space-y-3">
            <Link
              href="/"
              className="text-xl font-bold tracking-tight focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 rounded-sm"
              aria-label="Headshots - Home"
            >
              Headshots
            </Link>
            <p className="text-sm text-muted-foreground">
              Professional headshots for modern professionals.
            </p>
          </div>

          <div>
            <h3 className="mb-3 text-sm font-semibold" id="footer-company">
              Company
            </h3>
            <ul className="space-y-2" aria-labelledby="footer-company">
              {links.company.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-sm text-muted-foreground transition-colors hover:text-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 rounded-sm"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="mb-3 text-sm font-semibold" id="footer-legal">
              Legal
            </h3>
            <ul className="space-y-2" aria-labelledby="footer-legal">
              {links.legal.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-sm text-muted-foreground transition-colors hover:text-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 rounded-sm"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mt-8 border-t pt-8">
          <p className="text-center text-sm text-muted-foreground">
            &copy; {currentYear} Headshots. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
