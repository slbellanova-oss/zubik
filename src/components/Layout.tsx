import { Phone, Mail, MapPin, Menu, X } from "lucide-react";
import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";

export const ToothIcon = () => (
  <img src="/Logo.svg" alt="Зубик" width="28" height="28" className="inline-block" />
);

export const StarRating = () => (
  <div className="flex gap-0.5">
    {[...Array(5)].map((_, i) => (
      <svg key={i} className="w-5 h-5" fill="hsl(45, 93%, 58%)" viewBox="0 0 20 20">
        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
      </svg>
    ))}
  </div>
);

export const Bubble = ({ children, className = "" }: { children: React.ReactNode; className?: string }) => (
  <div className={`bg-background rounded-full px-4 py-2 shadow-lg text-sm font-semibold text-foreground whitespace-nowrap ${className}`}>
    {children}
  </div>
);

const navItems = [
  { label: "О нас", path: "/about" },
  { label: "Услуги", path: "/services" },
  { label: "Цены", path: "/prices" },
  { label: "Врачи", path: "/doctors" },
  { label: "Технологии", path: "/technology" },
  { label: "Запись", path: "/appointment" },
];

export const Header = () => {
  const navigate = useNavigate();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  
  return (
    <header className="bg-navy px-6 py-4 sticky top-0 z-50 shadow-md">
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        <Link 
          to="/" 
          className="flex items-center gap-2 text-navy-foreground hover:opacity-90 transition"
          onMouseEnter={() => window.dispatchEvent(new CustomEvent('cursor-hover-on'))}
          onMouseLeave={() => window.dispatchEvent(new CustomEvent('cursor-hover-off'))}
        >
          <ToothIcon />
          <div className="font-heading font-extrabold text-xl leading-tight">
            ЗУБиК
            <span className="block text-[10px] font-semibold tracking-widest opacity-80">СТОМАТОЛОГИЯ</span>
          </div>
        </Link>
        <nav className="hidden md:flex items-center gap-6 text-navy-foreground/80 text-sm font-medium">
          {navItems.map((item) => (
            <Link 
              key={item.path} 
              to={item.path} 
              className="relative hover:text-navy-foreground transition-colors group"
              onMouseEnter={() => window.dispatchEvent(new CustomEvent('cursor-hover-on'))}
              onMouseLeave={() => window.dispatchEvent(new CustomEvent('cursor-hover-off'))}
            >
              {item.label}
              <span className="absolute left-0 bottom-0 w-0 h-0.5 bg-lime transition-all duration-300 group-hover:w-full"></span>
            </Link>
          ))}
        </nav>
        <button
          onClick={() => navigate("/appointment")}
          className="hidden md:block bg-lime text-lime-foreground font-bold text-sm px-5 py-2.5 rounded-full hover:brightness-110 transition"
          onMouseEnter={() => window.dispatchEvent(new CustomEvent('cursor-hover-on'))}
          onMouseLeave={() => window.dispatchEvent(new CustomEvent('cursor-hover-off'))}
        >
          ЗАПИСАТЬСЯ НА ПРИЁМ
        </button>
        
        {/* Mobile menu button */}
        <button
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          className="md:hidden text-navy-foreground p-2"
          onMouseEnter={() => window.dispatchEvent(new CustomEvent('cursor-hover-on'))}
          onMouseLeave={() => window.dispatchEvent(new CustomEvent('cursor-hover-off'))}
        >
          {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>
      
      {/* Mobile menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden mt-4 pb-4 space-y-3">
          {navItems.map((item) => (
            <Link
              key={item.path}
              to={item.path}
              className="block text-navy-foreground/80 hover:text-navy-foreground transition-colors py-2"
              onClick={() => setIsMobileMenuOpen(false)}
              onMouseEnter={() => window.dispatchEvent(new CustomEvent('cursor-hover-on'))}
              onMouseLeave={() => window.dispatchEvent(new CustomEvent('cursor-hover-off'))}
            >
              {item.label}
            </Link>
          ))}
          <button
            onClick={() => {
              navigate("/appointment");
              setIsMobileMenuOpen(false);
            }}
            className="w-full bg-lime text-lime-foreground font-bold text-sm px-5 py-2.5 rounded-full hover:brightness-110 transition"
            onMouseEnter={() => window.dispatchEvent(new CustomEvent('cursor-hover-on'))}
            onMouseLeave={() => window.dispatchEvent(new CustomEvent('cursor-hover-off'))}
          >
            ЗАПИСАТЬСЯ НА ПРИЁМ
          </button>
        </div>
      )}
    </header>
  );
};

export const Footer = () => (
  <footer className="bg-navy text-navy-foreground py-10 px-6 lg:px-12">
    <div className="max-w-7xl mx-auto grid md:grid-cols-3 gap-8 items-start">
      <Link 
        to="/" 
        className="flex items-center gap-2"
        onMouseEnter={() => window.dispatchEvent(new CustomEvent('cursor-hover-on'))}
        onMouseLeave={() => window.dispatchEvent(new CustomEvent('cursor-hover-off'))}
      >
        <ToothIcon />
        <div className="font-heading font-extrabold text-xl leading-tight">
          ЗУБиК
          <span className="block text-[10px] font-semibold tracking-widest opacity-80">СТОМАТОЛОГИЯ</span>
        </div>
      </Link>
      <div className="space-y-3 text-sm">
        <div className="flex items-center gap-2 font-bold">
          <span className="text-lime">📋</span> ТАКТИКА ЛЕЧЕНИЯ
        </div>
        <div className="flex items-center gap-2 font-bold">
          <span className="text-lime">✨</span> ЭСТЕТИКА И ЛОГОПЕДИЯ
        </div>
      </div>
      <div className="space-y-3 text-sm opacity-80">
        <div className="flex items-center gap-2">
          <MapPin className="w-4 h-4 text-lime" />
          г. Сысерть, ул. Коммуны, д. 25
        </div>
        <div className="flex items-center gap-2">
          <Phone className="w-4 h-4 text-lime" />
          +7 (34374) 0-00-00
        </div>
        <div className="flex items-center gap-2">
          <Mail className="w-4 h-4 text-lime" />
          info@zubik.ru
        </div>
      </div>
    </div>
  </footer>
);

export const PageLayout = ({ children }: { children: React.ReactNode }) => (
  <div className="min-h-screen flex flex-col">
    <Header />
    <main className="flex-1">{children}</main>
    <Footer />
  </div>
);
