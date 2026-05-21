import { Link } from "react-router-dom";
import { Snowflake, Phone, Mail, MapPin, Instagram } from "lucide-react";

const Footer = () => (
  <footer className="bg-primary text-primary-foreground">
    <div className="container mx-auto px-4 lg:px-8 py-16">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
        {/* Brand */}
        <div>
          <div className="flex items-center gap-2 mb-4">
            <Snowflake className="h-6 w-6 text-accent" />
            <span className="text-lg font-bold" style={{ fontFamily: "'Space Grotesk', sans-serif" }}>FreezeControl</span>
          </div>
          <p className="text-sm text-primary-foreground/70 leading-relaxed mb-4">
            Expert repair, installation, and servicing for all major HVAC systems and home appliances. Trusted by thousands of customers.
          </p>
          <a href="https://www.instagram.com/freezecontrol_?igsh=ODhjN3hjcGFlcjB4" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 text-sm text-primary-foreground/70 hover:text-accent transition-colors">
            <Instagram className="h-5 w-5" /> @freezecontrol_
          </a>
        </div>

        {/* Services */}
        <div>
          <h4 className="font-semibold mb-4 text-sm uppercase tracking-wider">Services</h4>
          <ul className="space-y-2 text-sm text-primary-foreground/70">
            <li><Link to="/services/ac" className="hover:text-accent transition-colors">AC Repair & Service</Link></li>
            <li><Link to="/services/refrigerator" className="hover:text-accent transition-colors">Refrigerator Repair & Service</Link></li>
            <li><Link to="/services/washing-machine" className="hover:text-accent transition-colors">Washing Machine Repair & Service</Link></li>
            <li><Link to="/products" className="hover:text-accent transition-colors">Parts & Products</Link></li>
          </ul>
        </div>

        {/* Quick Links */}
        <div>
          <h4 className="font-semibold mb-4 text-sm uppercase tracking-wider">Company</h4>
          <ul className="space-y-2 text-sm text-primary-foreground/70">
            <li><Link to="/" className="hover:text-accent transition-colors">Home</Link></li>
            <li><Link to="/contact" className="hover:text-accent transition-colors">Contact Us</Link></li>
            <li><Link to="/contact" className="hover:text-accent transition-colors">Book a Service</Link></li>
          </ul>
        </div>

        {/* Contact */}
        <div>
          <h4 className="font-semibold mb-4 text-sm uppercase tracking-wider">Contact</h4>
          <ul className="space-y-3 text-sm text-primary-foreground/70">
            <li className="flex items-center gap-2"><Phone className="h-4 w-4 text-accent" />+91 98452 03882</li>
            <li className="flex items-center gap-2"><Phone className="h-4 w-4 text-accent" />+91 80737 52688</li>

            <li className="flex items-center gap-2"><Mail className="h-4 w-4 text-accent" /> freezecontrol123@gmail.com</li>
            <li className="flex items-center gap-2"><Mail className="h-4 w-4 text-accent" /> freezecontrol1234@gmail.com</li>
            <li className="flex items-start gap-2"><MapPin className="h-4 w-4 text-accent mt-0.5" />No. 16/30, Ground &, 1st Floor, 16/30, Bannerghatta Rd, opposite Jayadeva Hospital, next to Vakil Square, KEB Colony, New Gurappana Palya, Jayanagara 9th Block, Jayanagar 9th Block, BTM 1st Stage, Bengaluru, Karnataka 560029</li>
          </ul>
        </div>
      </div>

      <div className="mt-12 pt-8 border-t border-primary-foreground/10 text-center text-xs text-primary-foreground/50">
        © {new Date().getFullYear()} FreezeControl. All rights reserved.
      </div>
    </div>
  </footer>
);

export default Footer;
