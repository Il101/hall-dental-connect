import { Link } from "react-router-dom";
import { Phone, Mail, MapPin } from "lucide-react";
import { clinic, footer } from "@/content";

export function Footer() {
  return (
    <footer className="bg-foreground text-background py-12">
      <div className="container-wide">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          <div>
            <h3 className="font-semibold text-lg mb-4">{clinic.name}</h3>
            <div className="space-y-2 text-sm text-background/70">
              <a href={`tel:${clinic.phone}`} className="flex items-center gap-2 hover:text-background"><Phone className="w-4 h-4" />{clinic.phoneDisplay}</a>
              <a href={`mailto:${clinic.email}`} className="flex items-center gap-2 hover:text-background"><Mail className="w-4 h-4" />{clinic.email}</a>
              <p className="flex items-start gap-2"><MapPin className="w-4 h-4 mt-0.5" />{clinic.address.street}, {clinic.address.zip} {clinic.address.city}</p>
            </div>
          </div>
          <div>
            <h3 className="font-semibold mb-4">Legal</h3>
            <ul className="space-y-2 text-sm text-background/70">
              {footer.links.map((link, i) => (
                <li key={i}><Link to={link.href} className="hover:text-background">{link.label}</Link></li>
              ))}
            </ul>
          </div>
          <div>
            <h3 className="font-semibold mb-4">Hours</h3>
            <div className="text-sm text-background/70 space-y-1">
              {clinic.hours.slice(0, 5).map((h, i) => (
                <div key={i} className="flex justify-between"><span>{h.day}</span><span>{h.time}</span></div>
              ))}
            </div>
          </div>
        </div>
        <div className="border-t border-background/20 pt-6">
          <p className="text-xs text-background/50 mb-4">{footer.disclaimer}</p>
          <p className="text-xs text-background/50">{footer.copyright}</p>
        </div>
      </div>
    </footer>
  );
}
