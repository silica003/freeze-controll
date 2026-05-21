import { motion } from "framer-motion";
import { Wrench, Settings, SprayCan, PackagePlus, DoorOpen, DoorClosed, Snowflake } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import fridgeImg from "@/assets/fridge.jpg";

import singleDoorImg from "@/assets/single-door.jpg"; // Replace with your image paths
import doubleDoorImg from "@/assets/double-door.avif";
import deepFreezerImg from "@/assets/deep-freeze.webp";

const fadeUp = { hidden: { opacity: 0, y: 30 }, visible: { opacity: 1, y: 0, transition: { duration: 0.6 } } };
const stagger = { visible: { transition: { staggerChildren: 0.1 } } };

const serviceTypes = [
  { icon: Wrench, label: "Repair" },
  { icon: PackagePlus, label: "Installation" },
  { icon: Settings, label: "Service" },
  { icon: SprayCan, label: "Cleaning" },
];

const fridgeTypes = [
  { 
    image: singleDoorImg, // Switched 'icon' to 'image'
    name: "Single Door", 
    desc: "Compact single door refrigerators ideal for small families and individual use." 
  },
  { 
    image: doubleDoorImg, 
    name: "Double Door", 
    desc: "Frost-free and direct cool double door refrigerators for medium to large families." 
  },
  { 
    image: deepFreezerImg, 
    name: "Deep Freezer", 
    desc: "Commercial and residential deep freezer units for bulk storage and preservation." 
  },
];

const RefrigeratorPage = () => (
  <div className="min-h-screen bg-background">
    <Navbar />

<section className="relative bg-primary py-20 lg:py-32 min-h-[700px] flex items-center justify-center overflow-hidden">  {/* Background Image */}
  <div className="absolute inset-0">
    <img src={fridgeImg} alt="Refrigerator Service" className="w-full h-full object-cover opacity-20" />
  </div>
  
  {/* Consistent Gradient Overlay */}
  <div className="absolute inset-0" />

  <div className="container mx-auto px-4 lg:px-8 relative z-10">
    {/* Centered Content Wrapper */}
    <motion.div 
      initial="hidden" 
      animate="visible" 
      variants={stagger} 
      className="max-w-4xl mx-auto text-center"
    >
      <motion.p 
        variants={fadeUp} 
        className="text-accent font-semibold text-base lg:text-lg uppercase tracking-[0.2em] mb-4"
      >
        Our Services
      </motion.p>
      
      {/* Bold, Larger Heading */}
      <motion.h1 
        variants={fadeUp} 
        className="text-5xl lg:text-7xl font-bold text-primary-foreground mb-6 leading-tight"
      >
        Refrigerator <br className="hidden md:block" /> Repair & Service
      </motion.h1>
      
      {/* Prominent Description Text */}
      <motion.p 
        variants={fadeUp} 
        className="text-primary-foreground/80 text-xl lg:text-2xl max-w-2xl mx-auto leading-relaxed"
      >
        Expert repair and maintenance for all refrigerator types. 
        Fast diagnostics, genuine parts, and guaranteed results.
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

    <section className="py-20 lg:py-28 bg-secondary/20">
  <div className="container mx-auto px-4 lg:px-8">
    
    <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={stagger} className="text-center mb-16">
      <motion.p variants={fadeUp} className="text-accent font-semibold text-sm uppercase tracking-widest mb-3">
        What We Cover
      </motion.p>
      <motion.h2 variants={fadeUp} className="text-4xl lg:text-5xl font-bold text-foreground">
        All Refrigerator Types
      </motion.h2>
    </motion.div>

    <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={stagger} className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
      {fridgeTypes.map((f, i) => (
        <motion.div key={f.name} variants={fadeUp}>
          <Card className="h-full overflow-hidden border border-border/50 bg-card rounded-xl group hover:shadow-2xl hover:border-accent/10 transition-all duration-300">
            {/* Image Container: Premium aspect ratio and hover effect */}
            <div className="aspect-[4/3] overflow-hidden">
              <img 
                src={f.image} 
                alt={f.name} 
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" 
              />
            </div>
            
            {/* Content Container: Centered text with padding */}
            <CardContent className="p-8 text-center relative">
              
              {/* Premium small accent dot on hover */}
              <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 w-3 h-3 bg-accent rounded-full opacity-0 group-hover:opacity-100 transition-opacity" />
              
              <h3 className="text-2xl font-bold text-foreground mb-3 leading-tight">
                {f.name}
              </h3>
              <p className="text-muted-foreground leading-relaxed text-base">
                {f.desc}
              </p>
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

export default RefrigeratorPage;
