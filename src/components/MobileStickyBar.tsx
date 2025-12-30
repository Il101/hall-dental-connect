import { Phone, CalendarDays } from "lucide-react";
import { Button } from "@/components/ui/button";
import { clinic, hero } from "@/content";
import { trackCtaClick, trackPhoneClick } from "@/lib/analytics";

export function MobileStickyBar() {
    const scrollToForm = () => {
        trackCtaClick("mobile-sticky", "Book");
        document.getElementById("appointment-form")?.scrollIntoView({ behavior: "smooth" });
    };

    const handlePhoneClick = () => {
        trackPhoneClick("mobile-sticky");
    };

    return (
        <div className="fixed bottom-0 left-0 right-0 z-50 md:hidden bg-background/95 backdrop-blur-sm border-t border-border shadow-lg p-3 safe-area-bottom">
            <div className="flex gap-3">
                <Button
                    asChild
                    variant="outline"
                    className="flex-1 gap-2"
                    size="lg"
                >
                    <a href={`tel:${clinic.phone}`} onClick={handlePhoneClick}>
                        <Phone className="w-4 h-4" />
                        Call now
                    </a>
                </Button>
                <Button
                    onClick={scrollToForm}
                    className="flex-1 gap-2 btn-accent"
                    size="lg"
                >
                    <CalendarDays className="w-4 h-4" />
                    Book
                </Button>
            </div>
        </div>
    );
}
