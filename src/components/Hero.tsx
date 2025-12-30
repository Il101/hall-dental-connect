import { Phone, CheckCircle } from "lucide-react";
import { hero, clinic } from "@/content";
import { trackCtaClick, trackPhoneClick } from "@/lib/analytics";
import { Button } from "@/components/ui/button";
import heroImage from "@/assets/hero-reception.jpg";

export function Hero() {
  const scrollToForm = () => {
    trackCtaClick("hero", hero.ctaPrimary);
    const form = document.getElementById("appointment-form");
    if (form) {
      form.scrollIntoView({ behavior: "smooth" });
    }
  };

  const handlePhoneClick = () => {
    trackPhoneClick("hero");
  };

  return (
    <section className="relative min-h-screen flex items-center bg-gradient-hero pt-20">
      <div className="container-wide">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Content */}
          <div className="order-2 lg:order-1 text-center lg:text-left">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6 animate-fade-in-up">
              {hero.headline}
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground mb-8 animate-fade-in-delay-1">
              {hero.subheadline}
            </p>

            {/* Trust badges */}
            <div className="flex flex-wrap justify-center lg:justify-start gap-3 mb-8 animate-fade-in-delay-2">
              {hero.trustBadges.map((badge, index) => (
                <span key={index} className="trust-badge">
                  <CheckCircle className="w-4 h-4" />
                  {badge}
                </span>
              ))}
            </div>

            {/* CTA buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start animate-fade-in-delay-3">
              <Button
                onClick={scrollToForm}
                size="lg"
                className="btn-accent text-lg px-8 py-6"
              >
                {hero.ctaPrimary}
              </Button>
              <Button
                asChild
                variant="outline"
                size="lg"
                className="btn-outline text-lg px-8 py-6"
              >
                <a href={`tel:${clinic.phone}`} onClick={handlePhoneClick}>
                  <Phone className="w-5 h-5 mr-2" />
                  {hero.ctaSecondary}
                </a>
              </Button>
            </div>
          </div>

          {/* Hero Image */}
          <div className="order-1 lg:order-2 animate-fade-in">
            <div className="relative">
              <div className="absolute inset-0 bg-primary/10 rounded-2xl transform rotate-3" />
              <img
                src={heroImage}
                alt="Welcoming dental clinic reception area with comfortable seating"
                className="relative rounded-2xl shadow-xl w-full h-auto object-cover"
                loading="eager"
              />
            </div>
          </div>
        </div>
      </div>

      {/* Decorative elements */}
      <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-background to-transparent" />
    </section>
  );
}
