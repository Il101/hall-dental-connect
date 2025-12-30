import { Link } from "react-router-dom";
import { ArrowLeft } from "lucide-react";
import { clinic, footer } from "@/content";

export default function Impressum() {
  return (
    <div className="min-h-screen bg-background">
      <div className="container-narrow py-16">
        <Link to="/" className="inline-flex items-center gap-2 text-primary hover:underline mb-8"><ArrowLeft className="w-4 h-4" />Back to Home</Link>
        <h1 className="text-3xl font-bold mb-8">Impressum (Legal Notice)</h1>
        <div className="prose prose-gray max-w-none">
          <h2 className="text-xl font-semibold mt-8 mb-4">Information according to § 5 ECG</h2>
          <p className="text-muted-foreground">{clinic.name}<br/>{clinic.address.street}<br/>{clinic.address.zip} {clinic.address.city}<br/>{clinic.address.country}</p>
          <h2 className="text-xl font-semibold mt-8 mb-4">Contact</h2>
          <p className="text-muted-foreground">Phone: {clinic.phoneDisplay}<br/>Email: {clinic.email}</p>
          <h2 className="text-xl font-semibold mt-8 mb-4">Professional Regulations</h2>
          <p className="text-muted-foreground">Member of the Austrian Dental Chamber (Österreichische Zahnärztekammer). Professional regulations available at: zaek.at</p>
          <h2 className="text-xl font-semibold mt-8 mb-4">Dispute Resolution</h2>
          <p className="text-muted-foreground">The European Commission provides a platform for online dispute resolution (OS): ec.europa.eu/consumers/odr</p>
        </div>
        <div className="mt-12 pt-8 border-t"><p className="text-sm text-muted-foreground">{footer.copyright}</p></div>
      </div>
    </div>
  );
}
