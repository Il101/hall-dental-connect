import { useState } from "react";
import { CheckCircle, AlertCircle, Loader2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Checkbox } from "@/components/ui/checkbox";
import { Label } from "@/components/ui/label";
import { services, form as formContent, clinic } from "@/content";
import { submitAppointment } from "@/lib/api";
import { trackFormSubmit } from "@/lib/analytics";

interface AppointmentFormProps {
  preselectedService?: string;
}

export function AppointmentForm({ preselectedService }: AppointmentFormProps) {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    service: preselectedService || "",
    preferredTime: "",
    message: "",
    consent: false,
  });
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");

  // Update service when preselectedService changes
  if (preselectedService && preselectedService !== formData.service && status === "idle") {
    setFormData(prev => ({ ...prev, service: preselectedService }));
  }

  const validate = () => {
    const newErrors: Record<string, string> = {};
    if (!formData.name.trim()) newErrors.name = formContent.validation.nameRequired;
    if (!formData.email.trim()) newErrors.email = formContent.validation.emailRequired;
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) newErrors.email = formContent.validation.emailInvalid;
    if (!formData.service) newErrors.service = formContent.validation.serviceRequired;
    if (!formData.consent) newErrors.consent = formContent.validation.consentRequired;
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;
    setStatus("loading");
    const result = await submitAppointment(formData);
    setStatus(result.success ? "success" : "error");
    trackFormSubmit(result.success, formData.service);
  };

  if (status === "success") {
    return (
      <div id="appointment-form" className="section-padding bg-primary-light">
        <div className="container-narrow text-center">
          <CheckCircle className="w-16 h-16 text-primary mx-auto mb-4" />
          <h2 className="text-2xl font-bold mb-2">{formContent.success.title}</h2>
          <p className="text-muted-foreground">{formContent.success.message}</p>
        </div>
      </div>
    );
  }

  return (
    <section id="appointment-form" className="section-padding bg-primary-light">
      <div className="container-narrow">
        <div className="text-center mb-8">
          <h2 className="text-3xl font-bold mb-2">{formContent.title}</h2>
          <p className="text-muted-foreground">{formContent.subtitle}</p>
          <p className="text-sm text-primary mt-2">{clinic.responseNote}</p>
        </div>
        <form onSubmit={handleSubmit} className="bg-card rounded-xl p-6 md:p-8 shadow-lg space-y-6">
          {status === "error" && (
            <div className="flex items-center gap-3 p-4 bg-destructive/10 text-destructive rounded-lg">
              <AlertCircle className="w-5 h-5" />
              <p>{formContent.error.message}</p>
            </div>
          )}
          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <Label htmlFor="name">{formContent.fields.name.label} *</Label>
              <Input id="name" value={formData.name} onChange={e => setFormData(p => ({ ...p, name: e.target.value }))} placeholder={formContent.fields.name.placeholder} className={errors.name ? "border-destructive" : ""} />
              {errors.name && <p className="text-sm text-destructive mt-1">{errors.name}</p>}
            </div>
            <div>
              <Label htmlFor="email">{formContent.fields.email.label} *</Label>
              <Input id="email" type="email" value={formData.email} onChange={e => setFormData(p => ({ ...p, email: e.target.value }))} placeholder={formContent.fields.email.placeholder} className={errors.email ? "border-destructive" : ""} />
              {errors.email && <p className="text-sm text-destructive mt-1">{errors.email}</p>}
            </div>
            <div>
              <Label htmlFor="phone">{formContent.fields.phone.label}</Label>
              <Input id="phone" type="tel" value={formData.phone} onChange={e => setFormData(p => ({ ...p, phone: e.target.value }))} placeholder={formContent.fields.phone.placeholder} />
            </div>
            <div>
              <Label htmlFor="service">{formContent.fields.service.label} *</Label>
              <Select value={formData.service} onValueChange={v => setFormData(p => ({ ...p, service: v }))}>
                <SelectTrigger className={errors.service ? "border-destructive" : ""}><SelectValue placeholder={formContent.fields.service.placeholder} /></SelectTrigger>
                <SelectContent className="bg-popover z-50">
                  {services.map(s => <SelectItem key={s.id} value={s.id}>{s.title}</SelectItem>)}
                </SelectContent>
              </Select>
              {errors.service && <p className="text-sm text-destructive mt-1">{errors.service}</p>}
            </div>
          </div>
          <div>
            <Label htmlFor="preferredTime">{formContent.fields.preferredTime.label}</Label>
            <Input id="preferredTime" value={formData.preferredTime} onChange={e => setFormData(p => ({ ...p, preferredTime: e.target.value }))} placeholder={formContent.fields.preferredTime.placeholder} />
          </div>
          <div>
            <Label htmlFor="message">{formContent.fields.message.label}</Label>
            <Textarea id="message" value={formData.message} onChange={e => setFormData(p => ({ ...p, message: e.target.value }))} placeholder={formContent.fields.message.placeholder} rows={3} />
          </div>
          <div className="flex items-start gap-3">
            <Checkbox id="consent" checked={formData.consent} onCheckedChange={c => setFormData(p => ({ ...p, consent: !!c }))} className={errors.consent ? "border-destructive" : ""} />
            <Label htmlFor="consent" className="text-sm leading-relaxed">
              {formContent.consent.text} <a href={formContent.consent.linkHref} className="text-primary underline">{formContent.consent.linkText}</a>
            </Label>
          </div>
          {errors.consent && <p className="text-sm text-destructive -mt-4">{errors.consent}</p>}
          <Button type="submit" size="lg" disabled={status === "loading"} className="w-full btn-accent">
            {status === "loading" ? <><Loader2 className="w-5 h-5 animate-spin mr-2" />{formContent.submitting}</> : formContent.submit}
          </Button>
        </form>
      </div>
    </section>
  );
}
