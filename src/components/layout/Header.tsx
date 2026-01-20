import { Link, useLocation } from "react-router-dom";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Menu,
  X,
  ChevronDown,
  Search,
  Home,
  Info,
  Briefcase,
  Layers,
  GraduationCap,
  Newspaper,
  Download,
  Phone,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import peimaLogo from "../../assets/peima-logo.png";

const navItems = [
  { name: "Home", path: "/", icon: Home },
  {
    name: "About Us",
    path: "/about",
    icon: Info,
    submenu: [
      { name: "Introduction", path: "/about" },
      { name: "Vision & Mission", path: "/about#vision" },
      { name: "Objectives", path: "/about#objectives" },
      { name: "Organogram", path: "/about#organogram" },
    ],
  },
  {
    name: "Projects",
    path: "/projects",
    icon: Briefcase,
    submenu: [
      { name: "PSSP", path: "/projects/pssp" },
      { name: "EdTech", path: "/projects/edtech" },
      { name: "Infrastructure", path: "/projects/infrastructure" },
    ],
  },
  {
    name: "Services",
    path: "/services",
    icon: Layers,
    submenu: [
      { name: "School Management", path: "/services#management" },
      { name: "Teacher Training", path: "/services#training" },
      { name: "Quality Assurance", path: "/services#quality" },
    ],
  },
  { name: "Training", path: "/training", icon: GraduationCap },
  { name: "News", path: "/news", icon: Newspaper },
  { name: "Downloads", path: "/downloads", icon: Download },
  { name: "Contact", path: "/contact", icon: Phone },
];

export function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);
  const [activeSubmenu, setActiveSubmenu] = useState<string | null>(null);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    setMobileMenuOpen(false);
  }, [location]);

  return (
    <>
      {/* Main Header */}
      <header
        className={`sticky top-0 z-50 transition-all duration-300 ${isScrolled ? "glass shadow-peima-md py-2" : "bg-white py-4"
          }`}
      >
        <div className="w-full px-4 lg:px-8">
          <div className="flex items-center justify-between">
            {/* Logo */}
            <Link to="/" className="flex items-center gap-3">
              <img src={peimaLogo} alt="PEIMA Logo" className="h-20 w-auto object-contain rounded-full" />
              <div className="hidden sm:block">
                <h1 className="text-3xl font-bold text-primary leading-tight">PEIMA</h1>
                <p className="text-xs sm:text-sm font-medium text-primary/80 leading-none tracking-wide">Punjab Education Initiative Management Authority</p>
              </div>
            </Link>

            {/* Desktop Navigation */}
            <nav className="hidden lg:flex items-center gap-6">
              {navItems.map((item) => (
                <div
                  key={item.name}
                  className="relative group"
                  onMouseEnter={() => item.submenu && setActiveSubmenu(item.name)}
                  onMouseLeave={() => setActiveSubmenu(null)}
                >
                  <Link
                    to={item.path}
                    className={`flex flex-col items-center gap-1 px-3 py-2 text-sm font-medium rounded-lg transition-all duration-300 group-hover:text-peima-gold ${location.pathname === item.path
                      ? "text-primary"
                      : "text-foreground"
                      }`}
                  >
                    <item.icon className="h-6 w-6" strokeWidth={1.5} />
                    <span className="text-base font-semibold">{item.name}</span>
                    {item.submenu && <ChevronDown className="h-3 w-3 absolute -right-2 top-1/2 opacity-0 group-hover:opacity-100 transition-opacity" />}
                  </Link>

                  {/* Submenu */}
                  <AnimatePresence>
                    {item.submenu && activeSubmenu === item.name && (
                      <motion.div
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: 10 }}
                        transition={{ duration: 0.2 }}
                        className="absolute top-full left-1/2 -translate-x-1/2 mt-1 w-56 bg-card rounded-xl shadow-peima-lg border border-border overflow-hidden z-50"
                      >
                        {item.submenu.map((subItem) => (
                          <Link
                            key={subItem.name}
                            to={subItem.path}
                            className="block px-4 py-3 text-sm text-foreground hover:bg-secondary hover:text-primary transition-colors"
                          >
                            {subItem.name}
                          </Link>
                        ))}
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              ))}
            </nav>

            {/* Right Actions */}
            <div className="flex items-center gap-3">
              <Button
                variant="ghost"
                size="icon"
                onClick={() => setSearchOpen(!searchOpen)}
                className="rounded-full"
              >
                <Search className="h-5 w-5" />
              </Button>

              <Link to="/admin">
                <Button className="hidden sm:flex bg-gradient-to-r from-peima-gold to-peima-gold-dark text-primary font-semibold hover:shadow-peima-gold transition-all">
                  Admin Portal
                </Button>
              </Link>

              {/* Mobile Menu Button */}
              <Button
                variant="ghost"
                size="icon"
                className="lg:hidden"
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              >
                {mobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
              </Button>
            </div>
          </div>

          {/* Search Bar */}
          <AnimatePresence>
            {searchOpen && (
              <motion.div
                initial={{ height: 0, opacity: 0 }}
                animate={{ height: "auto", opacity: 1 }}
                exit={{ height: 0, opacity: 0 }}
                className="overflow-hidden"
              >
                <div className="py-4">
                  <div className="relative max-w-xl mx-auto">
                    <Input
                      placeholder="Search for projects, news, downloads..."
                      className="pl-12 pr-4 py-6 rounded-full border-2 border-secondary focus:border-peima-gold input-focus"
                    />
                    <Search className="absolute left-4 top-1/2 -translate-y-1/2 h-5 w-5 text-muted-foreground" />
                  </div>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {mobileMenuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              className="lg:hidden bg-card border-t border-border overflow-hidden"
            >
              <nav className="container mx-auto px-4 py-4 space-y-2">
                {navItems.map((item) => (
                  <div key={item.name}>
                    <Link
                      to={item.path}
                      className={`flex items-center gap-3 px-4 py-3 rounded-lg font-medium transition-colors ${location.pathname === item.path
                        ? "bg-secondary text-primary"
                        : "text-foreground hover:bg-secondary/50"
                        }`}
                    >
                      <item.icon className="h-5 w-5" />
                      {item.name}
                    </Link>
                    {item.submenu && (
                      <div className="ml-4 mt-1 space-y-1">
                        {item.submenu.map((subItem) => (
                          <Link
                            key={subItem.name}
                            to={subItem.path}
                            className="block px-4 py-2 text-sm text-muted-foreground hover:text-primary transition-colors"
                          >
                            {subItem.name}
                          </Link>
                        ))}
                      </div>
                    )}
                  </div>
                ))}
                <Link to="/admin">
                  <Button className="w-full mt-4 bg-gradient-to-r from-peima-gold to-peima-gold-dark text-primary font-semibold">
                    Admin Portal
                  </Button>
                </Link>
              </nav>
            </motion.div>
          )}
        </AnimatePresence>
      </header>
    </>
  );
}
