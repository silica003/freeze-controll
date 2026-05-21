import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X, ChevronDown, Snowflake } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

const services = [
  { name: "AC Repair & Service", path: "/services/ac" },
  { name: "Refrigerator Repair & Service", path: "/services/refrigerator" },
  { name: "Washing Machine Repair & Service", path: "/services/washing-machine" },
];

const Navbar = () => {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);
  const location = useLocation();

  return (
    <header className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container mx-auto flex h-16 items-center justify-between px-4 lg:px-8">
        {/* Logo */}
        <Link to="/" className="flex items-center">
  <img 
    src="/fc.png" // Replace with your actual logo path (e.g., /public/logo.png)
    alt="FreezeControl Logo" 
    className="h-14 w-auto object-contain" 
    // If you need an exact pixel size, use: style={{ height: '40px' }}
  />
</Link>

        {/* Desktop Nav */}
        <nav className="hidden lg:flex items-center gap-8">
          <Link to="/" className={cn("text-sm font-medium transition-colors hover:text-primary", location.pathname === "/" ? "text-primary" : "text-muted-foreground")}>
            Home
          </Link>

          {/* Services Dropdown */}
          <div className="relative group">
            <button className="flex items-center gap-1 text-sm font-medium text-muted-foreground transition-colors hover:text-primary">
              Services <ChevronDown className="h-3.5 w-3.5" />
            </button>
            <div className="absolute top-full left-0 pt-2 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200">
              <div className="w-64 rounded-lg border border-border bg-card shadow-lg p-2">
                {services.map((s) => (
                  <Link key={s.path} to={s.path} className="block rounded-md px-3 py-2.5 text-sm text-foreground hover:bg-secondary transition-colors">
                    {s.name}
                  </Link>
                ))}
              </div>
            </div>
          </div>

          <Link to="/products" className={cn("text-sm font-medium transition-colors hover:text-primary", location.pathname === "/products" ? "text-primary" : "text-muted-foreground")}>
            Products
          </Link>
          <Link to="/contact" className={cn("text-sm font-medium transition-colors hover:text-primary", location.pathname === "/contact" ? "text-primary" : "text-muted-foreground")}>
            Contact
          </Link>
        </nav>

        <div className="hidden lg:block">
          <Button asChild className="bg-accent text-accent-foreground hover:bg-accent/90 font-semibold px-6">
            <Link to="/contact">Book a Service</Link>
          </Button>
        </div>

        {/* Mobile Toggle */}
        <button className="lg:hidden text-foreground" onClick={() => setMobileOpen(!mobileOpen)}>
          {mobileOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>

      {/* Mobile Menu */}
      {mobileOpen && (
        <div className="lg:hidden border-t border-border bg-background">
          <div className="container mx-auto px-4 py-4 space-y-1">
            <Link to="/" onClick={() => setMobileOpen(false)} className="block rounded-md px-3 py-2.5 text-sm font-medium hover:bg-secondary">Home</Link>
            <button onClick={() => setServicesOpen(!servicesOpen)} className="flex w-full items-center justify-between rounded-md px-3 py-2.5 text-sm font-medium hover:bg-secondary">
              Services <ChevronDown className={cn("h-4 w-4 transition-transform", servicesOpen && "rotate-180")} />
            </button>
            {servicesOpen && services.map((s) => (
              <Link key={s.path} to={s.path} onClick={() => setMobileOpen(false)} className="block rounded-md px-6 py-2 text-sm text-muted-foreground hover:bg-secondary">
                {s.name}
              </Link>
            ))}
            <Link to="/products" onClick={() => setMobileOpen(false)} className="block rounded-md px-3 py-2.5 text-sm font-medium hover:bg-secondary">Products</Link>
            <Link to="/contact" onClick={() => setMobileOpen(false)} className="block rounded-md px-3 py-2.5 text-sm font-medium hover:bg-secondary">Contact</Link>
            <div className="pt-2">
              <Button asChild className="w-full bg-accent text-accent-foreground hover:bg-accent/90 font-semibold">
                <Link to="/contact" onClick={() => setMobileOpen(false)}>Book a Service</Link>
              </Button>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};

export default Navbar;
