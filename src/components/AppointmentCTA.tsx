import { finalCta } from "@/content";
import { Button } from "@/components/ui/button";
import { trackCtaClick } from "@/lib/analytics";

export function AppointmentCTA() {
  const scrollToForm = () => {
    trackCtaClick("final-cta", finalCta.buttonText);
    document.getElementById("appointment-form")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="section-padding bg-primary text-primary-foreground">
      <div className="container-narrow text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-4">{finalCta.headline}</h2>
        <p className="text-primary-foreground/80 mb-8">{finalCta.subheadline}</p>
        <Button onClick={scrollToForm} size="lg" variant="secondary" className="text-lg px-8">
          {finalCta.buttonText}
        </Button>
      </div>
    </section>
  );
}
