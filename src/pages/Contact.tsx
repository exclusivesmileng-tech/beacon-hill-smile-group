import { useState } from "react";
import { Phone, Mail, MapPin, Clock, Send } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import Layout from "@/components/Layout";
import AnimatedSection from "@/components/AnimatedSection";
import { useToast } from "@/hooks/use-toast";

const Contact = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({ name: "", email: "", phone: "", service: "", message: "" });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({ title: "Appointment Request Sent", description: "We'll get back to you within 24 hours." });
    setFormData({ name: "", email: "", phone: "", service: "", message: "" });
  };

  return (
    <Layout>
      <section className="py-20 md:py-28 bg-secondary">
        <div className="container">
          <AnimatedSection className="max-w-3xl">
            <span className="inline-block text-xs font-semibold uppercase tracking-[0.15em] text-primary mb-3">Contact Us</span>
            <h1 className="font-display font-bold text-4xl md:text-5xl text-foreground leading-tight mb-6">Book an Appointment</h1>
            <p className="text-muted-foreground text-lg leading-relaxed">Schedule your visit or reach out to our team. We're here to help.</p>
          </AnimatedSection>
        </div>
      </section>

      <section className="py-20 md:py-28">
        <div className="container">
          <div className="grid lg:grid-cols-5 gap-12 lg:gap-16">
            <AnimatedSection className="lg:col-span-3">
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid sm:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-foreground mb-2">Full Name *</label>
                    <Input placeholder="Your name" required value={formData.name} onChange={(e) => setFormData({ ...formData, name: e.target.value })} />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-foreground mb-2">Email *</label>
                    <Input type="email" placeholder="your@email.com" required value={formData.email} onChange={(e) => setFormData({ ...formData, email: e.target.value })} />
                  </div>
                </div>
                <div className="grid sm:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-foreground mb-2">Phone</label>
                    <Input type="tel" placeholder="+234 xxx xxx xxxx" value={formData.phone} onChange={(e) => setFormData({ ...formData, phone: e.target.value })} />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-foreground mb-2">Service</label>
                    <select
                      className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
                      value={formData.service}
                      onChange={(e) => setFormData({ ...formData, service: e.target.value })}
                    >
                      <option value="">Select a service</option>
                      <option value="dental">Dental Care</option>
                      <option value="eye">Eye Care</option>
                      <option value="dermatology">Dermatology</option>
                      <option value="medical">Medical Services</option>
                      <option value="other">Other</option>
                    </select>
                  </div>
                </div>
                <div>
                  <label className="block text-sm font-medium text-foreground mb-2">Message</label>
                  <Textarea placeholder="Tell us about your needs..." rows={5} value={formData.message} onChange={(e) => setFormData({ ...formData, message: e.target.value })} />
                </div>
                <Button type="submit" size="lg" className="font-semibold">
                  <Send className="mr-2 w-4 h-4" /> Send Request
                </Button>
              </form>
            </AnimatedSection>

            <AnimatedSection delay={0.15} className="lg:col-span-2">
              <div className="bg-secondary rounded-2xl p-8 space-y-8">
                <h3 className="font-display font-bold text-xl text-foreground">Get in Touch</h3>
                <div className="space-y-6">
                  <div className="flex items-start gap-3">
                    <Phone className="w-5 h-5 text-primary mt-0.5 shrink-0" />
                    <div>
                      <div className="font-medium text-sm text-foreground">Phone</div>
                      <a href="tel:+2341234567890" className="text-sm text-muted-foreground hover:text-primary transition-colors">+234 123 456 7890</a>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <Mail className="w-5 h-5 text-primary mt-0.5 shrink-0" />
                    <div>
                      <div className="font-medium text-sm text-foreground">Email</div>
                      <a href="mailto:info@beaconhillsmile.com" className="text-sm text-muted-foreground hover:text-primary transition-colors">info@beaconhillsmile.com</a>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <MapPin className="w-5 h-5 text-primary mt-0.5 shrink-0" />
                    <div>
                      <div className="font-medium text-sm text-foreground">Main Office</div>
                      <p className="text-sm text-muted-foreground">Victoria Island, Lagos, Nigeria</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <Clock className="w-5 h-5 text-primary mt-0.5 shrink-0" />
                    <div>
                      <div className="font-medium text-sm text-foreground">Hours</div>
                      <p className="text-sm text-muted-foreground">Mon – Sat: 8am – 6pm</p>
                    </div>
                  </div>
                </div>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Contact;
