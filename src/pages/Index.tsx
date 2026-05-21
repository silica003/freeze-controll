import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { Wrench, Thermometer, WashingMachine, ArrowRight, CheckCircle, Clock, Shield, Star } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import heroBg from "@/assets/hero-bg.jpg";
import acImg from "@/assets/ac.jpg";
import fridgeImg from "@/assets/refrigerator-service.jpg";
import wmImg from "@/assets/washing-machine-service.jpg";

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

const stagger = {
  visible: { transition: { staggerChildren: 0.15 } },
};

const brands = ["Voltas", "Blue Star", "Carrier", "LG", "Samsung", "Godrej", "Whirlpool", "Daikin", "Haier", "Trane"];

const services = [
  { icon: Thermometer, title: "AC Repair & Service", desc: "Expert repair, installation, servicing & cleaning for all AC types including Split, Cassette, Central, VRF & more.", path: "/services/ac", img: acImg },
  { icon: Wrench, title: "Refrigerator Repair", desc: "Complete repair and maintenance for Single Door, Double Door, and Deep Freezer refrigerators of all brands.", path: "/services/refrigerator", img: fridgeImg },
  { icon: WashingMachine, title: "Washing Machine Repair", desc: "Professional service for Fully Automatic and Semi-Automatic washing machines with quick turnaround.", path: "/services/washing-machine", img: wmImg },
];

const stats = [
  { icon: CheckCircle, value: "5,000+", label: "Services Completed" },
  { icon: Clock, value: "< 2 hrs", label: "Average Response" },
  { icon: Shield, value: "100%", label: "Service Warranty" },
  { icon: Star, value: "4.9/5", label: "Customer Rating" },
];

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      {/* Hero */}
      <section className="relative overflow-hidden bg-primary">
        <div className="absolute inset-0">
          <img src={heroBg} alt="HVAC technician installing AC unit" className="w-full h-full object-cover opacity-30" />
        </div>
        <div className="absolute inset-0 " />
        <div className="container mx-auto px-4 lg:px-8 py-24 lg:py-36 relative z-10">
          <motion.div initial="hidden" animate="visible" variants={stagger} className="max-w-2xl">
            <motion.p variants={fadeUp} className="text-accent font-semibold text-sm uppercase tracking-widest mb-4">
              Trusted HVAC & Appliance Experts
            </motion.p>
            <motion.h1 variants={fadeUp} className="text-4xl lg:text-6xl font-bold text-primary-foreground leading-tight mb-6">
              Expert HVAC & Appliance Solutions
            </motion.h1>
            <motion.p variants={fadeUp} className="text-lg text-primary-foreground/70 mb-8 leading-relaxed">
              Repair, Installation, and Service for all major brands. Fast response, certified technicians, and guaranteed satisfaction.
            </motion.p>
            <motion.div variants={fadeUp} className="flex flex-wrap gap-4">
              <Button asChild size="lg" className="bg-accent text-accent-foreground hover:bg-accent/90 font-semibold px-8">
                <Link to="/contact">Book a Service <ArrowRight className="ml-2 h-4 w-4" /></Link>
              </Button>
              <Button asChild variant="outline" size="lg" className="border-primary-foreground/20 text-black hover:bg-grey-400">
                <Link to="/products">View Products</Link>
              </Button>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Stats */}
      <section className="border-b border-border">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="grid grid-cols-2 lg:grid-cols-4">
            {stats.map((stat, i) => (
              <motion.div key={i} initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }}
                className="flex items-center gap-3 py-8 px-4 border-r last:border-r-0 border-border">
                <stat.icon className="h-8 w-8 text-accent flex-shrink-0" />
                <div>
                  <p className="text-xl font-bold text-foreground">{stat.value}</p>
                  <p className="text-xs text-muted-foreground">{stat.label}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* About */}
      <section className="py-20 lg:py-28">
        <div className="container mx-auto px-4 lg:px-8">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={stagger} className="max-w-3xl mx-auto text-center">
            <motion.p variants={fadeUp} className="text-accent font-semibold text-sm uppercase tracking-widest mb-3">About Us</motion.p>
            <motion.h2 variants={fadeUp} className="text-3xl lg:text-4xl font-bold text-foreground mb-6">
              Committed to Quality & Quick Response
            </motion.h2>
            <motion.p variants={fadeUp} className="text-muted-foreground leading-relaxed text-lg">
              FreezeControl has been delivering reliable HVAC and appliance solutions with certified technicians, genuine parts, and a commitment to customer satisfaction. We handle everything from routine maintenance to complex installations — quickly and professionally.
            </motion.p>
          </motion.div>
        </div>
      </section>

      {/* Services */}
      <section className="py-20 lg:py-28 bg-secondary">
        <div className="container mx-auto px-4 lg:px-8">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={stagger} className="text-center mb-14">
            <motion.p variants={fadeUp} className="text-accent font-semibold text-sm uppercase tracking-widest mb-3">What We Do</motion.p>
            <motion.h2 variants={fadeUp} className="text-3xl lg:text-4xl font-bold text-foreground">Our Services</motion.h2>
          </motion.div>

          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={stagger} className="grid md:grid-cols-3 gap-8">
            {services.map((s) => (
              <motion.div key={s.title} variants={fadeUp}>
                <Card className="h-full border-border/50 hover:shadow-lg transition-shadow duration-300 group overflow-hidden">
                  <div className="h-48 overflow-hidden">
                    <img src={s.img} alt={s.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                  </div>
                  <CardContent className="p-8">
                    <div className="w-14 h-14 rounded-lg bg-accent/10 flex items-center justify-center mb-6">
                      <s.icon className="h-7 w-7 text-accent" />
                    </div>
                    <h3 className="text-xl font-bold text-foreground mb-3">{s.title}</h3>
                    <p className="text-muted-foreground text-sm leading-relaxed mb-6">{s.desc}</p>
                    <Link to={s.path} className="inline-flex items-center text-sm font-semibold text-primary hover:text-accent transition-colors group-hover:gap-2 gap-1">
                      Learn More <ArrowRight className="h-4 w-4" />
                    </Link>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Brand Scroller */}
      <section className="py-16 border-t border-border">
        <div className="container mx-auto px-4 lg:px-8">
          <p className="text-center text-xs uppercase tracking-widest text-muted-foreground mb-10">Trusted by Major Brands</p>
          <div className="flex flex-wrap justify-center items-center gap-8 lg:gap-14">
            {brands.map((b) => (
              <span key={b} className="text-lg font-semibold text-muted-foreground/40 hover:text-muted-foreground transition-colors" style={{ fontFamily: "'Space Grotesk', sans-serif" }}>
                {b}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 lg:py-28 bg-primary">
        <div className="container mx-auto px-4 lg:px-8 text-center">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={stagger}>
            <motion.h2 variants={fadeUp} className="text-3xl lg:text-4xl font-bold text-primary-foreground mb-4">
              Need Expert Service Today?
            </motion.h2>
            <motion.p variants={fadeUp} className="text-primary-foreground/70 mb-8 max-w-lg mx-auto">
              Get fast, reliable service from certified technicians. Book your appointment now.
            </motion.p>
            <motion.div variants={fadeUp}>
              <Button asChild size="lg" className="bg-accent text-accent-foreground hover:bg-accent/90 font-semibold px-10">
                <Link to="/contact">Book a Service <ArrowRight className="ml-2 h-4 w-4" /></Link>
              </Button>
            </motion.div>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Index;
