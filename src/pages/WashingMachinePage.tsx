import { motion } from "framer-motion";
import { Wrench, Settings, SprayCan, PackagePlus, RotateCw, Gauge } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import wmImg from "@/assets/washing.avif";

import fullyAutoImg from "@/assets/auto.webp";
import semiAutoImg from "@/assets/semi-auto.avif";

const fadeUp = { hidden: { opacity: 0, y: 30 }, visible: { opacity: 1, y: 0, transition: { duration: 0.6 } } };
const stagger = { visible: { transition: { staggerChildren: 0.1 } } };

const serviceTypes = [
  { icon: Wrench, label: "Repair" },
  { icon: PackagePlus, label: "Installation" },
  { icon: Settings, label: "Service" },
  { icon: SprayCan, label: "Cleaning" },
];



const machineTypes = [
  { 
    image: fullyAutoImg, 
    name: "Fully Automatic", 
    desc: "Expert repair for both Top-load and Front-load fully automatic washing machines. We handle sensor issues, drum repairs, and PCB troubleshooting." 
  },
  { 
    image: semiAutoImg, 
    name: "Semi-Automatic", 
    desc: "Reliable service for twin-tub semi-automatic units. Specialized in motor replacement, timer fixes, and water leakage solutions." 
  },
];

const WashingMachinePage = () => (
  <div className="min-h-screen bg-background">
    <Navbar />

   <section className="relative bg-primary py-20 lg:py-32 min-h-[700px] flex items-center justify-center overflow-hidden">
  <div className="absolute inset-0">
    <img src={wmImg} alt="Washing Machine Service" className="w-full h-full object-cover opacity-20" />
  </div>
  {/* Adjusted gradient for center focus */}
  <div className="absolute inset-0 " />
  
  <div className="container mx-auto px-4 lg:px-8 relative z-10">
    {/* Centered the container with mx-auto and added text-center */}
    <motion.div initial="hidden" animate="visible" variants={stagger} className="max-w-4xl mx-auto text-center">
      
      <motion.p variants={fadeUp} className="text-accent font-semibold text-base lg:text-lg uppercase tracking-[0.2em] mb-4">
        Our Services
      </motion.p>
      
      {/* Increased heading size to 6xl */}
      <motion.h1 variants={fadeUp} className="text-5xl lg:text-7xl font-bold text-primary-foreground mb-6 leading-tight">
        Washing Machine <br className="hidden md:block" /> Repair & Service
      </motion.h1>
      
      {/* Increased paragraph size to xl/2xl */}
      <motion.p variants={fadeUp} className="text-primary-foreground/80 text-xl lg:text-2xl max-w-2xl mx-auto leading-relaxed">
        Professional service for all washing machine types. Quick turnaround, expert diagnostics, and lasting repairs.
      </motion.p>
      
    </motion.div>
  </div>
</section>
    <section className="py-16 border-b border-border">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
          {serviceTypes.map((s, i) => (
            <motion.div key={s.label} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }}
              className="flex items-center gap-3 p-5 rounded-lg border border-border bg-card">
              <s.icon className="h-6 w-6 text-accent" />
              <span className="font-semibold text-foreground">{s.label}</span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>

    <section className="py-20 lg:py-28 bg-secondary/5">
  <div className="container mx-auto px-4 lg:px-8">
    
    <motion.div 
      initial="hidden" 
      whileInView="visible" 
      viewport={{ once: true }} 
      variants={stagger} 
      className="text-center mb-16"
    >
      <motion.p variants={fadeUp} className="text-accent font-semibold text-sm uppercase tracking-widest mb-3">
        Specialized Care
      </motion.p>
      <motion.h2 variants={fadeUp} className="text-4xl lg:text-5xl font-bold text-foreground">
        All Washing Machine Types
      </motion.h2>
    </motion.div>

    <motion.div 
      initial="hidden" 
      whileInView="visible" 
      viewport={{ once: true }} 
      variants={stagger} 
      className="grid md:grid-cols-2 gap-10 max-w-5xl mx-auto"
    >
      {machineTypes.map((m) => (
        <motion.div key={m.name} variants={fadeUp}>
          <Card className="group h-full overflow-hidden border-none bg-card shadow-lg hover:shadow-2xl transition-all duration-500 rounded-3xl">
            
            {/* Image Section - Tall Aspect Ratio */}
            <div className="relative aspect-[16/10] overflow-hidden">
              <img 
                src={m.image} 
                alt={m.name} 
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" 
              />
              {/* Overlay Gradient for a premium look */}
              <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent opacity-60" />
            </div>

            <CardContent className="p-10 text-center relative bg-card">
              {/* Floating Badge effect for the Title */}
              <div className="inline-block px-4 py-1 rounded-full bg-accent/10 text-accent text-xs font-bold uppercase tracking-tighter mb-4">
                Service & Repair
              </div>
              
              <h3 className="text-2xl lg:text-3xl font-bold text-foreground mb-4">
                {m.name}
              </h3>
              
              <p className="text-muted-foreground leading-relaxed text-lg">
                {m.desc}
              </p>

              {/* Decorative line that grows on hover */}
              <div className="mt-8 mx-auto w-12 h-1 bg-accent/20 rounded-full group-hover:w-24 group-hover:bg-accent transition-all duration-500" />
            </CardContent>
          </Card>
        </motion.div>
      ))}
    </motion.div>
  </div>
</section>

    <Footer />
  </div>
);

export default WashingMachinePage;
