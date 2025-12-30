import { Link } from "react-router-dom";
import { ArrowLeft } from "lucide-react";
import { clinic, footer } from "@/content";

export default function Privacy() {
  return (
    <div className="min-h-screen bg-background">
      <div className="container-narrow py-16">
        <Link to="/" className="inline-flex items-center gap-2 text-primary hover:underline mb-8"><ArrowLeft className="w-4 h-4" />Back to Home</Link>
        <h1 className="text-3xl font-bold mb-8">Privacy Policy</h1>
        <div className="prose prose-gray max-w-none">
          <p className="text-muted-foreground mb-4">Last updated: {new Date().toLocaleDateString()}</p>
          <h2 className="text-xl font-semibold mt-8 mb-4">1. Data Controller</h2>
          <p className="text-muted-foreground">{clinic.name}<br/>{clinic.address.street}<br/>{clinic.address.zip} {clinic.address.city}<br/>Email: {clinic.email}</p>
          <h2 className="text-xl font-semibold mt-8 mb-4">2. Data We Collect</h2>
          <p className="text-muted-foreground">When you submit an appointment request, we collect: name, email, phone (optional), service preference, and message.</p>
          <h2 className="text-xl font-semibold mt-8 mb-4">3. Purpose</h2>
          <p className="text-muted-foreground">We use your data solely to process your appointment request and contact you regarding your dental care.</p>
          <h2 className="text-xl font-semibold mt-8 mb-4">4. Your Rights</h2>
          <p className="text-muted-foreground">You have the right to access, rectify, or delete your personal data. Contact us at {clinic.email}.</p>
        </div>
        <div className="mt-12 pt-8 border-t">
          <p className="text-sm text-muted-foreground">{footer.copyright}</p>
        </div>
      </div>
    </div>
  );
}
