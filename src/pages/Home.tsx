import { useState } from "react";
import { Header } from "@/components/Header";
import { Hero } from "@/components/Hero";
import { Testimonials } from "@/components/Testimonials";
import { TrustBadges } from "@/components/TrustBadges";
import { BeforeAfter } from "@/components/BeforeAfter";
import { Services } from "@/components/Services";
import { HowItWorks } from "@/components/HowItWorks";
import { FAQ } from "@/components/FAQ";
import { Location } from "@/components/Location";
import { AppointmentForm } from "@/components/AppointmentForm";
import { AppointmentCTA } from "@/components/AppointmentCTA";
import { Footer } from "@/components/Footer";
import { MobileStickyBar } from "@/components/MobileStickyBar";
import { clinic } from "@/content";

const Home = () => {
  const [selectedService, setSelectedService] = useState<string | undefined>();

  return (
    <>
      <head>
        <title>Modern Dental Clinic | {clinic.name}</title>
        <meta name="description" content="Modern dental care in your city. Transparent treatment plans, gentle approach, easy online booking. Book your appointment today!" />
      </head>
      <div className="min-h-screen pb-20 md:pb-0">
        <Header />
        <main>
          <Hero />
          <Testimonials />
          <TrustBadges />
          <BeforeAfter />
          <Services onServiceSelect={setSelectedService} />
          <HowItWorks />
          <AppointmentForm preselectedService={selectedService} />
          <FAQ />
          <Location />
          <AppointmentCTA />
        </main>
        <Footer />
        <MobileStickyBar />
      </div>
      <script type="application/ld+json" dangerouslySetInnerHTML={{
        __html: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Dentist",
          "name": clinic.name,
          "address": { "@type": "PostalAddress", "streetAddress": clinic.address.street, "addressLocality": clinic.address.city, "postalCode": clinic.address.zip, "addressCountry": "AT" },
          "telephone": clinic.phone,
          "email": clinic.email,
          "openingHours": ["Mo-Th 08:00-18:00", "Fr 08:00-14:00"]
        })
      }} />
    </>
  );
};

export default Home;

