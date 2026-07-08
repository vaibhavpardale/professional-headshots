import { Container } from '@/components/common/Container';
import { Section } from '@/components/common/Section';
import { Briefcase, Building2, UserCircle2, Sparkles, BriefcaseBusiness, Users } from 'lucide-react';

const useCases = [
  { name: 'LinkedIn', icon: Briefcase },
  { name: 'Job Applications', icon: BriefcaseBusiness },
  { name: 'Corporate Profiles', icon: Building2 },
  { name: 'Personal Branding', icon: UserCircle2 },
  { name: 'Freelancers', icon: Sparkles },
  { name: 'Founders', icon: Users },
];

export function TrustSection() {
  return (
    <Section variant="sm" className="border-y bg-muted/30">
      <Container>
        <div className="flex flex-col items-center gap-8 py-4">
          <p className="text-center text-sm font-medium text-muted-foreground">
            Perfect for
          </p>
          <div className="flex flex-wrap items-center justify-center gap-x-8 gap-y-4 md:gap-x-12">
            {useCases.map((useCase) => (
              <div
                key={useCase.name}
                className="flex items-center gap-2 text-muted-foreground"
              >
                <useCase.icon className="h-5 w-5" />
                <span className="text-sm font-medium">{useCase.name}</span>
              </div>
            ))}
          </div>
        </div>
      </Container>
    </Section>
  );
}
