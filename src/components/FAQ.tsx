import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { faq } from "@/content";

export function FAQ() {
  return (
    <section className="section-padding bg-gradient-section">
      <div className="container-narrow">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Frequently Asked Questions</h2>
        </div>
        <Accordion type="single" collapsible className="space-y-4">
          {faq.map((item, index) => (
            <AccordionItem key={index} value={`item-${index}`} className="bg-card rounded-lg border border-border px-6">
              <AccordionTrigger className="text-left font-medium hover:no-underline">{item.question}</AccordionTrigger>
              <AccordionContent className="text-muted-foreground">{item.answer}</AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  );
}
