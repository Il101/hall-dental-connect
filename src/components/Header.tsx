import { useState, useEffect } from "react";
import { Phone, Menu, X } from "lucide-react";
import { clinic, hero } from "@/content";
import { trackCtaClick, trackPhoneClick } from "@/lib/analytics";
import { Button } from "@/components/ui/button";

export function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToForm = () => {
    trackCtaClick("header", hero.ctaPrimary);
    const form = document.getElementById("appointment-form");
    if (form) {
      form.scrollIntoView({ behavior: "smooth" });
    }
    setIsMobileMenuOpen(false);
  };

  const handlePhoneClick = () => {
    trackPhoneClick("header");
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-background/95 backdrop-blur-sm shadow-md py-3"
          : "bg-transparent py-4"
      }`}
    >
      <div className="container-wide">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <a href="/" className="flex items-center gap-2">
            <div className="w-10 h-10 rounded-lg bg-primary flex items-center justify-center">
              <span className="text-primary-foreground font-bold text-lg">Z</span>
            </div>
            <span className="font-heading font-semibold text-lg hidden sm:block">
              {clinic.name}
            </span>
          </a>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-4">
            <a
              href={`tel:${clinic.phone}`}
              onClick={handlePhoneClick}
              className="flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors"
            >
              <Phone className="w-4 h-4" />
              <span className="font-medium">{clinic.phoneDisplay}</span>
            </a>
            <Button onClick={scrollToForm} className="btn-accent">
              {hero.ctaPrimary}
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="md:hidden p-2 -mr-2"
            aria-label={isMobileMenuOpen ? "Close menu" : "Open menu"}
          >
            {isMobileMenuOpen ? (
              <X className="w-6 h-6" />
            ) : (
              <Menu className="w-6 h-6" />
            )}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden mt-4 pb-4 border-t border-border pt-4 animate-fade-in">
            <div className="flex flex-col gap-4">
              <a
                href={`tel:${clinic.phone}`}
                onClick={handlePhoneClick}
                className="flex items-center gap-2 text-foreground py-2"
              >
                <Phone className="w-5 h-5 text-primary" />
                <span className="font-medium">{clinic.phoneDisplay}</span>
              </a>
              <Button onClick={scrollToForm} className="btn-accent w-full">
                {hero.ctaPrimary}
              </Button>
            </div>
          </div>
        )}
      </div>
    </header>
  );
}
