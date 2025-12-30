import {
  Stethoscope,
  Sparkles,
  Sun,
  Shield,
  Crown,
  Anchor,
  ArrowRight,
} from "lucide-react";
import { services } from "@/content";
import { trackServiceAsk } from "@/lib/analytics";

const iconMap: Record<string, React.ReactNode> = {
  stethoscope: <Stethoscope className="w-6 h-6" />,
  sparkles: <Sparkles className="w-6 h-6" />,
  sun: <Sun className="w-6 h-6" />,
  shield: <Shield className="w-6 h-6" />,
  crown: <Crown className="w-6 h-6" />,
  anchor: <Anchor className="w-6 h-6" />,
};

interface ServicesProps {
  onServiceSelect?: (serviceId: string) => void;
}

export function Services({ onServiceSelect }: ServicesProps) {
  const handleAskAbout = (serviceId: string) => {
    trackServiceAsk(serviceId);

    // Scroll to form and preselect service
    const form = document.getElementById("appointment-form");
    if (form) {
      form.scrollIntoView({ behavior: "smooth" });
    }

    // Call the parent handler to preselect the service
    if (onServiceSelect) {
      // Small delay to allow scroll to complete
      setTimeout(() => {
        onServiceSelect(serviceId);
        // Dispatch custom event to trigger highlight on service dropdown
        window.dispatchEvent(new CustomEvent("highlightServiceDropdown"));
      }, 500);
    }
  };

  return (
    <section id="services" className="section-padding bg-gradient-section">
      <div className="container-wide">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Our Services</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Comprehensive dental care for the whole family
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <div
              key={service.id}
              className="card-elevated p-6 group animate-fade-in"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="w-12 h-12 rounded-lg bg-primary-light text-primary flex items-center justify-center mb-4 group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
                {iconMap[service.icon] || <Stethoscope className="w-6 h-6" />}
              </div>

              <h3 className="text-xl font-semibold mb-2">{service.title}</h3>
              <p className="text-muted-foreground mb-4">{service.description}</p>

              <button
                onClick={() => handleAskAbout(service.id)}
                className="inline-flex items-center gap-1 text-primary font-medium hover:gap-2 transition-all"
              >
                Ask about this
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
