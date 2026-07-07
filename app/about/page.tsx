import { Container } from '@/components/common/Container';
import { PageHeader } from '@/components/common/PageHeader';
import { Section } from '@/components/common/Section';

export default function AboutPage() {
  return (
    <Container>
      <Section>
        <PageHeader
          title="About Us"
          description="Learn more about our mission and what drives us forward."
        />
        <div className="prose prose-neutral dark:prose-invert max-w-none">
          <p>
            We are a team passionate about helping professionals present their best selves.
            Our platform makes it easy to create polished, professional headshots that stand
            out in today&apos;s digital world.
          </p>
          <h2>Our Mission</h2>
          <p>
            To democratize access to professional photography, making it simple and
            affordable for everyone to have stunning headshots for their professional
            presence.
          </p>
          <h2>Our Values</h2>
          <ul>
            <li>Quality - We never compromise on the quality of our output</li>
            <li>Accessibility - Professional results should be available to everyone</li>
            <li>Privacy - Your data and images are handled with the utmost care</li>
          </ul>
        </div>
      </Section>
    </Container>
  );
}
