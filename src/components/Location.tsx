import { MapPin, Clock, Car } from "lucide-react";
import { clinic, location } from "@/content";

export function Location() {
  return (
    <section className="section-padding bg-background">
      <div className="container-wide">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">{location.title}</h2>
        </div>
        <div className="grid lg:grid-cols-2 gap-8">
          <div className="space-y-6">
            <div className="flex items-start gap-4">
              <MapPin className="w-6 h-6 text-primary shrink-0 mt-1" />
              <div>
                <h3 className="font-semibold mb-1">Address</h3>
                <p className="text-muted-foreground">{clinic.address.street}<br />{clinic.address.zip} {clinic.address.city}<br />{clinic.address.country}</p>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <Clock className="w-6 h-6 text-primary shrink-0 mt-1" />
              <div>
                <h3 className="font-semibold mb-2">Opening Hours</h3>
                <div className="space-y-1 text-sm">
                  {clinic.hours.map((h, i) => (
                    <div key={i} className="flex justify-between gap-4">
                      <span className="text-muted-foreground">{h.day}</span>
                      <span className="font-medium">{h.time}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <Car className="w-6 h-6 text-primary shrink-0 mt-1" />
              <div>
                <h3 className="font-semibold mb-2">Getting Here</h3>
                <ul className="space-y-1 text-muted-foreground text-sm">
                  {location.directions.map((d, i) => <li key={i}>• {d}</li>)}
                </ul>
              </div>
            </div>
          </div>
          <div className="bg-muted rounded-xl aspect-video flex items-center justify-center">
            <a href={clinic.mapLink} target="_blank" rel="noopener noreferrer" className="text-center p-8">
              <MapPin className="w-12 h-12 text-primary mx-auto mb-4" />
              <p className="font-medium text-primary hover:underline">Open in Google Maps</p>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
