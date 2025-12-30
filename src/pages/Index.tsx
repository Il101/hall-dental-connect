import { useState } from "react";
import { Header } from "@/components/Header";
import { Hero } from "@/components/Hero";
import { SocialProof } from "@/components/SocialProof";
import { TrustBadges } from "@/components/TrustBadges";
import { BeforeAfter } from "@/components/BeforeAfter";
import { Services } from "@/components/Services";
import { HowItWorks } from "@/components/HowItWorks";
import { FAQ } from "@/components/FAQ";
import { Location } from "@/components/Location";
import { AppointmentForm } from "@/components/AppointmentForm";
import { FinalCTA } from "@/components/FinalCTA";
import { Footer } from "@/components/Footer";
import { clinic } from "@/content";

const Index = () => {
  const [selectedService, setSelectedService] = useState<string | undefined>();

  return (
    <>
      <head>
        <title>Dentist in Hall in Tirol | {clinic.name}</title>
        <meta name="description" content="Modern dental care in Hall in Tirol, Austria. Transparent treatment plans, gentle approach, easy online booking. Book your appointment today!" />
      </head>
      <div className="min-h-screen">
        <Header />
        <main>
          <Hero />
          <SocialProof />
          <TrustBadges />
          <BeforeAfter />
          <Services onServiceSelect={setSelectedService} />
          <HowItWorks />
          <AppointmentForm preselectedService={selectedService} />
          <FAQ />
          <Location />
          <FinalCTA />
        </main>
        <Footer />
      </div>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({
        "@context": "https://schema.org",
        "@type": "Dentist",
        "name": clinic.name,
        "address": { "@type": "PostalAddress", "streetAddress": clinic.address.street, "addressLocality": clinic.address.city, "postalCode": clinic.address.zip, "addressCountry": "AT" },
        "telephone": clinic.phone,
        "email": clinic.email,
        "openingHours": ["Mo-Th 08:00-18:00", "Fr 08:00-14:00"]
      })}} />
    </>
  );
};

export default Index;
