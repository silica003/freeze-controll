import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { 
  Phone, 
  Mail, 
  MapPin, 
  Clock, 
  Send, 
  Instagram, 
  CheckCircle2, 
  X 
} from "lucide-react";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { 
  Select, 
  SelectContent, 
  SelectItem, 
  SelectTrigger, 
  SelectValue 
} from "@/components/ui/select";
import { useToast } from "@/hooks/use-toast";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const fadeUp = { 
  hidden: { opacity: 0, y: 30 }, 
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } } 
};

const stagger = { 
  visible: { transition: { staggerChildren: 0.1 } } 
};

const contactInfo = [
  { icon: Phone, label: "Phone", value: "+91 98452 03882" },
  { icon: Phone, label: "Phone", value: "+91 80737 52688" },
  { icon: Mail, label: "Email", value: "freezecontrol123@gmail.com" },
  { icon: Mail, label: "Email", value: "freezecontrol1234@gmail.com" },
  { icon: MapPin, label: "Main Branch", value: "No. 16/30, Bannerghatta Rd, Bengaluru, 560029" },
  { icon: MapPin, label: "2nd Branch", value: "2, 15th cross, CMH Rd, Halasuru, Bengaluru, 560008" },
  { 
    icon: Instagram, 
    label: "Instagram", 
    value: "@freezecontrol_", 
    link: "https://www.instagram.com/freezecontrol_?igsh=ODhjN3hjcGFlcjB4" 
  },
];

const ContactPage = () => {
  const { toast } = useToast();
  const [showThankYou, setShowThankYou] = useState(false);
  const [formData, setFormData] = useState({ 
    name: "", 
    phone: "", 
    email: "", 
    service: "", 
    message: "" 
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const whatsappNumber = "919845203882";
    const messageText = `*New Service Request from Website*%0A%0A` +
      `*Name:* ${formData.name}%0A` +
      `*Phone:* ${formData.phone}%0A` +
      `*Email:* ${formData.email || "Not provided"}%0A` +
      `*Service Required:* ${formData.service || "General Inquiry"}%0A` +
      `*Details:* ${formData.message || "No additional details"}`;

    window.open(`https://wa.me/${whatsappNumber}?text=${messageText}`, "_blank");
    setShowThankYou(true);
    toast({ 
      title: "Opening WhatsApp...", 
      description: "Please click 'Send' in the WhatsApp window." 
    });
    setFormData({ name: "", phone: "", email: "", service: "", message: "" });
  };

  return (
    <div className="min-h-screen bg-background relative">
      <Navbar />

      <AnimatePresence>
        {showThankYou && (
          <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-background/80 backdrop-blur-sm">
            <motion.div 
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              className="bg-card border border-border p-8 rounded-2xl max-w-sm w-full text-center shadow-2xl relative"
            >
              <button 
                onClick={() => setShowThankYou(false)}
                className="absolute top-4 right-4 text-muted-foreground hover:text-foreground"
              >
                <X size={20} />
              </button>
              <div className="w-20 h-20 bg-green-500/10 rounded-full flex items-center justify-center mx-auto mb-6">
                <CheckCircle2 className="h-12 w-12 text-green-500" />
              </div>
              <h2 className="text-2xl font-bold mb-2">Thank You!</h2>
              <p className="text-muted-foreground mb-6">
                We've prepared your details. Please send the message on WhatsApp so our team can assist you immediately.
              </p>
              <Button onClick={() => setShowThankYou(false)} className="w-full">
                Back to Site
              </Button>
            </motion.div>
          </div>
        )}
      </AnimatePresence>

      <section className="bg-primary py-20 lg:py-28 text-white">
        <div className="container mx-auto px-4 lg:px-8">
          <motion.div initial="hidden" animate="visible" variants={stagger} className="max-w-2xl">
            <motion.p variants={fadeUp} className="text-accent font-semibold text-sm uppercase tracking-widest mb-3">
              Get In Touch
            </motion.p>
            <motion.h1 variants={fadeUp} className="text-4xl lg:text-5xl font-bold mb-4">
              Contact Us
            </motion.h1>
            <motion.p variants={fadeUp} className="text-primary-foreground/70 text-lg">
              Book a professional service or get a free consultation. Our team usually responds within 2 hours.
            </motion.p>
          </motion.div>
        </div>
      </section>

      <section className="py-20 lg:py-28">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="grid lg:grid-cols-5 gap-12">
            
            <motion.div 
              initial="hidden" 
              whileInView="visible" 
              viewport={{ once: true }} 
              variants={stagger} 
              className="lg:col-span-2 space-y-6"
            >
              {contactInfo.map((c, i) => (
                <motion.div key={i} variants={fadeUp} className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-lg bg-accent/10 flex items-center justify-center flex-shrink-0">
                    <c.icon className="h-5 w-5 text-accent" />
                  </div>
                  <div>
                    <p className="text-xs uppercase tracking-widest text-muted-foreground mb-1">
                      {c.label}
                    </p>
                    {c.link ? (
                      <a 
                        href={c.link} 
                        target="_blank" 
                        rel="noopener noreferrer" 
                        className="font-medium text-foreground hover:text-accent transition-colors underline-offset-4 hover:underline"
                      >
                        {c.value}
                      </a>
                    ) : (
                      <p className="font-medium text-foreground">{c.value}</p>
                    )}
                  </div>
                </motion.div>
              ))}

              {/* LIVE GOOGLE MAP EMBED */}
              <motion.div variants={fadeUp} className="mt-8 overflow-hidden rounded-xl border border-border">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3888.76179477614!2d77.59768997576566!3d12.919897016027163!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae150065a53f3b%3A0x8f9dfd7cc4238370!2sFreeze%20Control!5e0!3m2!1sen!2sin!4v1711545600000!5m2!1sen!2sin"
                  width="100%"
                  height="300"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Freeze Control Location"
                ></iframe>
              </motion.div>
            </motion.div>

            <motion.div 
              initial="hidden" 
              whileInView="visible" 
              viewport={{ once: true }} 
              variants={fadeUp} 
              className="lg:col-span-3"
            >
              <Card className="border-border/50 shadow-xl shadow-accent/5">
                <CardContent className="p-8">
                  <h3 className="text-xl font-bold text-foreground mb-6">Book a Service</h3>
                  <form onSubmit={handleSubmit} className="space-y-5">
                    <div className="grid sm:grid-cols-2 gap-5">
                      <Input 
                        placeholder="Full Name" 
                        value={formData.name} 
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })} 
                        required 
                      />
                      <Input 
                        placeholder="Phone Number" 
                        value={formData.phone} 
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })} 
                        required 
                      />
                    </div>
                    <Input 
                      type="email" 
                      placeholder="Email Address (Optional)" 
                      value={formData.email} 
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })} 
                    />
                    <Select 
                      value={formData.service} 
                      onValueChange={(v) => setFormData({ ...formData, service: v })}
                    >
                      <SelectTrigger>
                        <SelectValue placeholder="Select Service" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="AC Repair">AC Repair & Service</SelectItem>
                        <SelectItem value="Refrigerator Repair">Refrigerator Repair</SelectItem>
                        <SelectItem value="Washing Machine">Washing Machine Repair</SelectItem>
                        <SelectItem value="Parts Inquiry">Parts & Products</SelectItem>
                      </SelectContent>
                    </Select>
                    <Textarea 
                      placeholder="Describe the issue..." 
                      rows={4} 
                      value={formData.message} 
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })} 
                    />
                    <Button 
                      type="submit" 
                      size="lg" 
                      className="w-full bg-accent text-accent-foreground font-bold"
                    >
                      Request via WhatsApp <Send className="ml-2 h-4 w-4" />
                    </Button>
                  </form>
                </CardContent>
              </Card>
            </motion.div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default ContactPage;