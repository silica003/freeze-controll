import { useState } from "react";
import { motion } from "framer-motion";
import { Search } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

import imgCopperPipe from "@/assets/copper-pipe.webp";
import imgRefrigeratorGas from "@/assets/Refridgerator Gas.png";
import imgOutdoorStand from "@/assets/product-outdoor-stand.jpg";
import imgStabilizer from "@/assets/stablizer.jpg";
import imgAspinPump from "@/assets/Aspin Pump.png";
import imgIndoorUnits from "@/assets/product-indoor-units.jpg";
import imgCableWire from "@/assets/Cable Wire 1.png";
import imgVacuumPump from "@/assets/vaccum-pump.jpg";
import imgFoam from "@/assets/Super loan Foam .png";
import imgFloorStand from "@/assets/product-floor-stand.jpg";
import imgAcRemote from "@/assets/product-ac-remote.jpg";
import imgR290Gas from "@/assets/product-r290-gas.jpg";
import imgLpgCylinder from "@/assets/product-lpg-cylinder.jpg";
import imgCapacitors from "@/assets/capacitor.webp";
import acGas from "@/assets/ac-gas.png";
import ToolKit from "@/assets/_KIt 1.png";
import Compressor from "@/assets/_compressor.png";


import { Link } from "react-router-dom";

const fadeUp = { hidden: { opacity: 0, y: 30 }, visible: { opacity: 1, y: 0, transition: { duration: 0.5 } } };
const stagger = { visible: { transition: { staggerChildren: 0.06 } } };

const products = [
  { name: "Copper Pipe", img: imgCopperPipe },
  { name: "Refrigerator Gas", img: imgRefrigeratorGas },
  { name: "Outdoor Stand", img: imgOutdoorStand },
  { name: "Stabilizer", img: imgStabilizer },
  { name: "Aspin Pump", img: imgAspinPump },
  { name: "Indoor Units", img: imgIndoorUnits },
  { name: "Cable Wire", img: imgCableWire },
  { name: "Vacuum Pump", img: imgVacuumPump },
  { name: "Foam", img: imgFoam },
  { name: "Floor Stand", img: imgFloorStand },
  { name: "AC Remote", img: imgAcRemote },
  { name: "R 290 Gas", img: imgR290Gas },
  { name: "LPG Cylinders (Butane Gas)", img: imgLpgCylinder },
  { name: "Capacitors", img: imgCapacitors },
  { name: "ac Gas", img: acGas },
  { name: "Tool Kit", img: ToolKit },
  { name: "Compressor", img: Compressor },


];

const ProductsPage = () => {
  const [search, setSearch] = useState("");
  const filtered = products.filter((p) => p.name.toLowerCase().includes(search.toLowerCase()));

  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      <section className="bg-primary py-20 lg:py-28">
        <div className="container mx-auto px-4 lg:px-8">
          <motion.div initial="hidden" animate="visible" variants={stagger} className="max-w-2xl">
            <motion.p variants={fadeUp} className="text-accent font-semibold text-sm uppercase tracking-widest mb-3">Parts & Accessories</motion.p>
            <motion.h1 variants={fadeUp} className="text-4xl lg:text-5xl font-bold text-primary-foreground mb-4">Products & Parts</motion.h1>
            <motion.p variants={fadeUp} className="text-primary-foreground/70 text-lg">
              Genuine replacement parts and accessories for all HVAC and appliance systems.
            </motion.p>
          </motion.div>
        </div>
      </section>

      <section className="py-20 lg:py-28">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="max-w-md mx-auto mb-12 relative">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
            <Input placeholder="Search products..." value={search} onChange={(e) => setSearch(e.target.value)} className="pl-10" />
          </div>

          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={stagger} className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {filtered.map((p) => (
              <motion.div key={p.name} variants={fadeUp}>
                <Card className="h-full border-border/50 hover:shadow-md transition-shadow group overflow-hidden">
                  <CardContent className="p-6">
                    <div className="w-full h-40 rounded-md overflow-hidden mb-4">
                      <img src={p.img} alt={p.name} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                    </div>
                    <h3 className="font-semibold text-foreground mb-3">{p.name}</h3>
                    <Link to="/contact" className="w-full">
  <Button variant="outline" size="sm" className="w-full">
    Request Quote
  </Button>
</Link>                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </motion.div>

          {filtered.length === 0 && (
            <p className="text-center text-muted-foreground py-12">No products found matching "{search}"</p>
          )}
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default ProductsPage;
