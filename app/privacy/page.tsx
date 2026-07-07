import { Container } from '@/components/common/Container';
import { PageHeader } from '@/components/common/PageHeader';
import { Section } from '@/components/common/Section';

export default function PrivacyPage() {
  return (
    <Container>
      <Section>
        <PageHeader title="Privacy Policy" />
        <div className="prose prose-neutral dark:prose-invert max-w-none">
          <p className="text-muted-foreground">
            Last updated: {new Date().toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' })}
          </p>

          <h2>Information We Collect</h2>
          <p>
            We collect information you provide directly to us, such as when you create an
            account, upload photos, or contact us for support. This may include your name,
            email address, and uploaded images.
          </p>

          <h2>How We Use Your Information</h2>
          <p>We use the information we collect to:</p>
          <ul>
            <li>Provide, maintain, and improve our services</li>
            <li>Process your uploaded photos to generate headshots</li>
            <li>Communicate with you about your account and our services</li>
            <li>Respond to your comments and questions</li>
          </ul>

          <h2>Data Security</h2>
          <p>
            We implement appropriate security measures to protect your personal information.
            Your uploaded photos are processed securely and are not shared with third parties.
          </p>

          <h2>Your Rights</h2>
          <p>
            You have the right to access, correct, or delete your personal information.
            Contact us if you wish to exercise these rights.
          </p>

          <h2>Contact Us</h2>
          <p>
            If you have any questions about this Privacy Policy, please contact us through
            our website.
          </p>
        </div>
      </Section>
    </Container>
  );
}
