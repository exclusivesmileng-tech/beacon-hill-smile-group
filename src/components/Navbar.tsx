import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";

const navLinks = [
  { label: "Home", path: "/" },
  { label: "About", path: "/about" },
  { label: "Our Businesses", path: "/businesses" },
  { label: "Foundation", path: "/foundation" },
  { label: "Partners", path: "/partners" },
  { label: "Insights", path: "/insights" },
  { label: "Contact", path: "/contact" },
];

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();
  const isHome = location.pathname === "/";

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const transparent = isHome && !scrolled;

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        transparent
          ? "bg-transparent border-transparent"
          : "bg-white/95 backdrop-blur-md border-b border-border shadow-sm"
      }`}
    >
      <div className="container flex items-center justify-between h-16 md:h-20">
        <Link to="/" className="flex items-center">
          <img
            src={transparent ? "/images/logo_white.png" : "/images/logo.png"}
            alt="Beaconhill Smile Group"
            className="w-36 md:w-44 h-auto object-contain transition-opacity duration-300"
          />
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden lg:flex items-center gap-1">
          {navLinks.map((link) => (
            <Link
              key={link.path}
              to={link.path}
              className={`px-3 py-2 text-sm font-medium rounded-md transition-colors ${
                transparent
                  ? location.pathname === link.path
                    ? "text-white font-semibold"
                    : "text-white/80 hover:text-white"
                  : location.pathname === link.path
                    ? "text-primary bg-primary/5"
                    : "text-muted-foreground hover:text-foreground hover:bg-muted"
              }`}
            >
              {link.label}
            </Link>
          ))}
        </nav>

        <div className="hidden lg:flex items-center gap-3">
          <Button
            asChild
            size="sm"
            variant={transparent ? "outline" : "default"}
            className={transparent ? "border-white/60 text-white bg-transparent hover:bg-white/10 hover:text-white" : ""}
          >
            <Link to="/contact">Book Appointment</Link>
          </Button>
        </div>

        {/* Mobile toggle — hidden; bottom nav handles mobile navigation */}
        <button
          onClick={() => setOpen(!open)}
          className="hidden"
          aria-label="Toggle menu"
        >
          {open ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile Nav — hidden; replaced by MobileNav bottom tab bar */}
      {open && (
        <div className="hidden">
          <nav className="container py-4 flex flex-col gap-1">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                onClick={() => setOpen(false)}
                className={`px-4 py-3 text-sm font-medium rounded-lg transition-colors ${
                  location.pathname === link.path
                    ? "text-primary bg-primary/5"
                    : "text-muted-foreground hover:text-foreground hover:bg-muted"
                }`}
              >
                {link.label}
              </Link>
            ))}
            <div className="pt-3 border-t border-border mt-2">
              <Button asChild className="w-full">
                <Link to="/contact" onClick={() => setOpen(false)}>Book Appointment</Link>
              </Button>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Navbar;
