import { Star, BadgeCheck, ExternalLink } from "lucide-react";
import { reviews } from "@/content";

export function SocialProof() {
  return (
    <section className="section-padding bg-background">
      <div className="container-wide">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            What Our Patients Say
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto mb-4">
            Real feedback from our valued patients
          </p>
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 text-primary rounded-full text-sm font-medium">
            <BadgeCheck className="w-4 h-4" />
            Verified reviews
          </div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {reviews.map((review, index) => (
            <div
              key={index}
              className="card-elevated p-6 animate-fade-in"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="flex items-start gap-4 mb-4">
                <div className="w-12 h-12 rounded-full bg-primary-light flex items-center justify-center shrink-0">
                  <span className="text-primary font-semibold">
                    {review.initials}
                  </span>
                </div>
                <div>
                  <p className="font-medium">{review.name}</p>
                  <div className="flex items-center gap-1">
                    {Array.from({ length: review.rating }).map((_, i) => (
                      <Star
                        key={i}
                        className="w-4 h-4 fill-gold text-gold"
                      />
                    ))}
                  </div>
                </div>
              </div>
              <blockquote className="text-muted-foreground italic">
                "{review.quote}"
              </blockquote>
              <p className="text-sm text-muted-foreground mt-3">
                via {review.source}
              </p>
            </div>
          ))}
        </div>

        <div className="text-center mt-8 space-y-3">
          <a
            href="#"
            className="inline-flex items-center gap-2 text-primary hover:text-primary/80 font-medium transition-colors"
            onClick={(e) => e.preventDefault()}
          >
            See more reviews
            <ExternalLink className="w-4 h-4" />
          </a>
          <p className="text-sm text-muted-foreground">
            Results and experiences may vary.
          </p>
        </div>
      </div>
    </section>
  );
}

