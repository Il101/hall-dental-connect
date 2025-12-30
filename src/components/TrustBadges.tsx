import { CheckCircle, Award } from "lucide-react";
import { credentials } from "@/content";

export function TrustBadges() {
  return (
    <section className="section-padding bg-gradient-section">
      <div className="container-wide">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16">
          {/* Credentials */}
          <div>
            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 rounded-lg bg-primary flex items-center justify-center">
                <Award className="w-6 h-6 text-primary-foreground" />
              </div>
              <h2 className="text-2xl md:text-3xl font-bold">
                {credentials.title}
              </h2>
            </div>

            <ul className="space-y-4">
              {credentials.items.map((item, index) => (
                <li key={index} className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-primary mt-0.5 shrink-0" />
                  <span className="text-muted-foreground">{item}</span>
                </li>
              ))}
            </ul>

            {/* Membership logos */}
            <div className="mt-8">
              <p className="text-sm font-medium text-muted-foreground mb-4">
                Professional Memberships
              </p>
              <div className="flex flex-wrap gap-4">
                {credentials.memberships.map((membership, index) => (
                  <div
                    key={index}
                    className="px-4 py-2 bg-card rounded-lg border border-border flex items-center gap-2"
                    title={membership.name}
                  >
                    <span className="font-bold text-primary text-sm">
                      {membership.logo}
                    </span>
                    <span className="text-xs text-muted-foreground hidden sm:inline">
                      {membership.name}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* About */}
          <div className="card-elevated p-8">
            <h3 className="text-xl font-semibold mb-4">About Our Clinic</h3>
            <p className="text-muted-foreground leading-relaxed">
              {credentials.about}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
