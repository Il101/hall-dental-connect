import { Link } from "react-router-dom";
import { ArrowLeft } from "lucide-react";
import { clinic, footer } from "@/content";

export default function Cookies() {
  return (
    <div className="min-h-screen bg-background">
      <div className="container-narrow py-16">
        <Link to="/" className="inline-flex items-center gap-2 text-primary hover:underline mb-8"><ArrowLeft className="w-4 h-4" />Back to Home</Link>
        <h1 className="text-3xl font-bold mb-8">Cookie Policy</h1>
        <div className="prose prose-gray max-w-none">
          <p className="text-muted-foreground mb-4">Last updated: {new Date().toLocaleDateString()}</p>
          <h2 className="text-xl font-semibold mt-8 mb-4">What Are Cookies</h2>
          <p className="text-muted-foreground">Cookies are small text files stored on your device when you visit a website.</p>
          <h2 className="text-xl font-semibold mt-8 mb-4">Cookies We Use</h2>
          <p className="text-muted-foreground"><strong>Essential cookies:</strong> Required for the website to function. No consent needed.<br/><strong>Analytics cookies:</strong> Help us understand how visitors use our site. Only used with your consent.</p>
          <h2 className="text-xl font-semibold mt-8 mb-4">Managing Cookies</h2>
          <p className="text-muted-foreground">You can control cookies through your browser settings. Note that disabling cookies may affect site functionality.</p>
          <h2 className="text-xl font-semibold mt-8 mb-4">Contact</h2>
          <p className="text-muted-foreground">Questions? Contact us at {clinic.email}</p>
        </div>
        <div className="mt-12 pt-8 border-t"><p className="text-sm text-muted-foreground">{footer.copyright}</p></div>
      </div>
    </div>
  );
}
