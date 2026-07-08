'use client';

import { Container } from '@/components/common/Container';
import { Section } from '@/components/common/Section';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';

const faqs = [
  {
    question: 'What photos should I upload?',
    answer:
      'Upload clear, well-lit photos of yourself. Casual selfies work well as long as your face is clearly visible. Avoid heavy filters or extreme angles. The more variety in your photos, the better the results.',
  },
  {
    question: 'How long does generation take?',
    answer:
      'Most headshots are generated within 2-5 minutes. You will receive a notification when your professional headshots are ready for download.',
  },
  {
    question: 'How many headshots will I receive?',
    answer:
      'You will receive multiple headshots in each style you choose, typically 4-8 variations per style. This gives you options to select the perfect shot for each use case.',
  },
  {
    question: 'Can I use them commercially?',
    answer:
      'Yes. All headshots come with full commercial use rights. You can use them on LinkedIn, company websites, business cards, marketing materials, and any other professional platform.',
  },
];

export function FAQSection() {
  return (
    <Section id="faq">
      <Container size="sm">
        <div className="flex flex-col items-center gap-12">
          <div className="text-center">
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
              Frequently Asked Questions
            </h2>
            <p className="mt-4 text-lg text-muted-foreground">
              Everything you need to know about getting your professional headshots.
            </p>
          </div>

          <Accordion type="single" collapsible className="w-full">
            {faqs.map((faq, index) => (
              <AccordionItem key={faq.question} value={`item-${index}`}>
                <AccordionTrigger className="text-left">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </Container>
    </Section>
  );
}
