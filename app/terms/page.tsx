import { Container } from '@/components/common/Container';
import { PageHeader } from '@/components/common/PageHeader';
import { Section } from '@/components/common/Section';

export default function TermsPage() {
  return (
    <Container>
      <Section>
        <PageHeader title="Terms of Service" />
        <div className="prose prose-neutral dark:prose-invert max-w-none">
          <p className="text-muted-foreground">
            Last updated: {new Date().toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' })}
          </p>

          <h2>1. Acceptance of Terms</h2>
          <p>
            By accessing and using our services, you accept and agree to be bound by
            these Terms of Service. If you do not agree to these terms, please do not
            use our services.
          </p>

          <h2>2. Use of Service</h2>
          <p>
            You agree to use our services only for lawful purposes and in accordance
            with these Terms. You are responsible for maintaining the confidentiality
            of your account and for all activities under your account.
          </p>

          <h2>3. User Content</h2>
          <p>
            You retain ownership of the content you upload to our platform. By uploading
            content, you grant us a license to process and store your images for the
            purpose of providing our services. You represent that you have the right
            to upload and use the images you provide.
          </p>

          <h2>4. Generated Content</h2>
          <p>
            You own the headshots generated from your uploaded images. We do not claim
            ownership of the generated content and will not use your content for purposes
            other than providing the service.
          </p>

          <h2>5. Payment Terms</h2>
          <p>
            Fees for our services will be clearly displayed before purchase. All payments
            are due at the time of purchase. Refund policies are outlined separately and
            comply with applicable consumer protection laws.
          </p>

          <h2>6. Limitation of Liability</h2>
          <p>
            To the maximum extent permitted by law, we shall not be liable for any
            indirect, incidental, special, or consequential damages resulting from your
            use or inability to use our services.
          </p>

          <h2>7. Changes to Terms</h2>
          <p>
            We reserve the right to modify these Terms at any time. We will notify users
            of any material changes. Continued use of our services after such modifications
            constitutes acceptance of the updated Terms.
          </p>

          <h2>8. Governing Law</h2>
          <p>
            These Terms shall be governed by and construed in accordance with applicable
            laws, without regard to conflict of law principles.
          </p>
        </div>
      </Section>
    </Container>
  );
}
