// ============================================
// CLINIC CONTENT - Edit all copy and data here
// ============================================

export const clinic = {
  name: "Zahnarztpraxis Tirol",
  tagline: "Modern dental care in Hall in Tirol",
  phone: "+43 5223 12345",
  phoneDisplay: "+43 5223 12345",
  email: "info@zahnarztpraxis-tirol.at",
  address: {
    street: "Mustergasse 10",
    city: "Hall in Tirol",
    zip: "6060",
    country: "Austria",
  },
  mapLink: "https://maps.google.com/?q=Hall+in+Tirol+Austria",

  hours: [
    { day: "Monday", time: "08:00 – 18:00" },
    { day: "Tuesday", time: "08:00 – 18:00" },
    { day: "Wednesday", time: "08:00 – 14:00" },
    { day: "Thursday", time: "08:00 – 18:00" },
    { day: "Friday", time: "08:00 – 14:00" },
    { day: "Saturday", time: "By appointment" },
    { day: "Sunday", time: "Closed" },
  ],

  // For form "We respond within business hours" note
  responseNote: "We respond within business hours (Mon–Fri, 8:00–18:00).",
};

export const hero = {
  headline: "Modern dental care in Hall in Tirol",
  subheadline: "Transparent treatment plans, gentle approach, easy booking.",
  ctaPrimary: "Book an appointment",
  ctaSecondary: "Call now",
  trustBadges: [
    "Licensed clinic",
    "Top-rated reviews",
    "Central location",
  ],
};

export const services = [
  {
    id: "checkup",
    title: "Check-up",
    description: "Comprehensive oral examination with digital X-rays and personalized care plan.",
    icon: "stethoscope",
  },
  {
    id: "cleaning",
    title: "Professional Cleaning",
    description: "Thorough cleaning and polishing to remove plaque, tartar, and surface stains.",
    icon: "sparkles",
  },
  {
    id: "whitening",
    title: "Whitening",
    description: "Safe, effective teeth whitening for a brighter, more confident smile.",
    icon: "sun",
  },
  {
    id: "fillings",
    title: "Fillings",
    description: "Tooth-colored composite fillings that blend naturally with your teeth.",
    icon: "shield",
  },
  {
    id: "crowns",
    title: "Crowns",
    description: "Custom-made crowns to restore damaged teeth to their natural appearance.",
    icon: "crown",
  },
  {
    id: "implants",
    title: "Implants",
    description: "Permanent tooth replacement with natural-looking dental implants.",
    icon: "anchor",
  },
];

export const reviews = [
  {
    initials: "MT",
    name: "Maria T.",
    quote: "Finally found a dentist where I don't feel anxious. The team is incredibly patient and caring.",
    rating: 5,
    source: "Google",
  },
  {
    initials: "HK",
    name: "Hans K.",
    quote: "Professional, modern equipment, and transparent pricing. Highly recommended!",
    rating: 5,
    source: "Google",
  },
  {
    initials: "SF",
    name: "Sophie F.",
    quote: "My kids actually look forward to their dental visits now. That says everything.",
    rating: 5,
    source: "Google",
  },
  {
    initials: "JM",
    name: "Johann M.",
    quote: "Quick appointment booking, no waiting time, excellent treatment. Perfect!",
    rating: 5,
    source: "Google",
  },
  {
    initials: "LB",
    name: "Lisa B.",
    quote: "The whitening results exceeded my expectations. Very happy with my new smile!",
    rating: 5,
    source: "Google",
  },
  {
    initials: "PW",
    name: "Peter W.",
    quote: "Emergency appointment on short notice, professional care. Thank you!",
    rating: 5,
    source: "Google",
  },
];

export const credentials = {
  title: "Licenses & Qualifications",
  items: [
    "Licensed by the Austrian Dental Chamber (Österreichische Zahnärztekammer)",
    "Board-certified in General Dentistry",
    "Continuing education in implantology and aesthetic dentistry",
    "Certified in digital dentistry and CAD/CAM technology",
  ],
  memberships: [
    { name: "Austrian Dental Association", logo: "ÖZK" },
    { name: "European Association for Osseointegration", logo: "EAO" },
    { name: "Austrian Society of Implantology", logo: "ÖGI" },
  ],
  about: "Our clinic combines modern technology with a patient-first approach. We believe in transparent communication, gentle treatments, and creating a welcoming environment for patients of all ages. Located in the heart of Hall in Tirol, we've been serving the community for over 15 years.",
};

export const beforeAfter = [
  {
    id: 1,
    treatment: "Whitening",
    description: "Professional whitening treatment – 6 shades brighter",
  },
  {
    id: 2,
    treatment: "Veneers",
    description: "Custom porcelain veneers for a natural, beautiful smile",
  },
  {
    id: 3,
    treatment: "Implant Restoration",
    description: "Single tooth implant replacing missing front tooth",
  },
];

export const howItWorks = {
  title: "How It Works",
  subtitle: "Three simple steps to your appointment",
  steps: [
    {
      number: 1,
      title: "Request",
      description: "Fill out our simple form with your preferred time and service.",
    },
    {
      number: 2,
      title: "We Confirm",
      description: "We'll contact you within business hours to confirm your appointment.",
    },
    {
      number: 3,
      title: "Visit",
      description: "Come to your appointment – we'll take great care of you.",
    },
  ],
};

export const faq = [
  {
    question: "Does it hurt?",
    answer: "We prioritize your comfort with modern anesthesia techniques and gentle care. Many procedures are completely painless, and we always discuss pain management options before any treatment.",
  },
  {
    question: "What happens at the first visit?",
    answer: "Your first visit includes a comprehensive examination, digital X-rays if needed, and a discussion about your oral health goals. We'll create a personalized treatment plan with clear pricing.",
  },
  {
    question: "What are your prices and payment options?",
    answer: "We provide transparent pricing before any treatment. We accept cash, card, and bank transfer. Payment plans are available for larger treatments. All prices are discussed and agreed upon in advance.",
  },
  {
    question: "Do you accept insurance?",
    answer: "We work with all major Austrian health insurance providers (ÖGK, SVS, BVAEB). We'll help you understand what's covered and handle the paperwork for you.",
  },
  {
    question: "Can I get an emergency appointment?",
    answer: "Yes, we reserve time slots for dental emergencies. Call us directly and we'll do our best to see you the same day. After-hours emergencies can leave a message and we'll call back first thing.",
  },
  {
    question: "How long does treatment take?",
    answer: "Treatment duration varies. A check-up takes about 30 minutes, professional cleaning 45-60 minutes. For longer treatments like implants or crowns, we'll provide a detailed timeline during your consultation.",
  },
  {
    question: "What languages do you speak?",
    answer: "Our team speaks German and English fluently. We want all patients to feel comfortable and fully understand their treatment options.",
  },
  {
    question: "Where can I park? How do I get there?",
    answer: "We're centrally located in Hall in Tirol with easy access by public transport (bus stop 2 min walk). Free parking is available on Mustergasse and in the nearby public parking garage.",
  },
];

export const location = {
  title: "Visit Us",
  directions: [
    "2-minute walk from the central bus stop",
    "Free street parking on Mustergasse",
    "Public parking garage 100m away",
    "Wheelchair accessible entrance",
  ],
};

export const finalCta = {
  headline: "Ready for a healthier smile?",
  subheadline: "Book your appointment today – we're here to help.",
  buttonText: "Book an appointment",
};

export const footer = {
  disclaimer: "This website provides general information about dental services. It is not intended as medical advice. Please consult with our dental professionals for personalized recommendations. Results shown may vary from patient to patient.",
  copyright: `© ${new Date().getFullYear()} ${clinic.name}. All rights reserved.`,
  links: [
    { label: "Impressum", href: "/impressum" },
    { label: "Privacy Policy", href: "/privacy" },
    { label: "Cookie Policy", href: "/cookies" },
  ],
};

// Form labels and messages
export const form = {
  title: "Book Your Appointment",
  subtitle: "Fill out the form and we'll get back to you shortly.",
  fields: {
    name: { label: "Full Name", placeholder: "Your full name", required: true },
    email: { label: "Email", placeholder: "your@email.com", required: true },
    phone: { label: "Phone (optional)", placeholder: "+43 ...", required: false },
    service: { label: "Service", placeholder: "Select a service", required: true },
    preferredTime: { label: "Preferred Day/Time (optional)", placeholder: "e.g., Monday afternoon", required: false },
    message: { label: "Message (optional)", placeholder: "Any additional information...", required: false },
  },
  consent: {
    text: "I consent to the processing of my data for appointment scheduling.",
    linkText: "See Privacy Policy",
    linkHref: "/privacy",
  },
  submit: "Book an appointment",
  submitting: "Sending...",
  success: {
    title: "Request Sent!",
    message: "Request received — we will confirm within business hours.",
  },
  error: {
    title: "Something went wrong",
    message: "Please try again or call us directly.",
  },
  validation: {
    nameRequired: "Please enter your name",
    emailRequired: "Please enter your email",
    emailInvalid: "Please enter a valid email address",
    serviceRequired: "Please select a service",
    consentRequired: "Please accept the privacy policy to continue",
  },
};
