import { Link, useRouterState } from "@tanstack/react-router";
import { useEffect, useRef, useState } from "react";
import { Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { cn } from "@/lib/utils";
import { useTranslation } from "react-i18next";
// Theme switching removed to maintain a single curated restaurant theme

const NAV = [
  { to: "/", labelKey: "nav.home" },
   { to: "/about", labelKey: "nav.about" },
  { to: "/menu", labelKey: "nav.menu" },
  { to: "/reservations", labelKey: "nav.reservations" },
  { to: "/gallery", labelKey: "nav.gallery" },
  { to: "/contact", labelKey: "nav.contact" },
] as const;

const LANGS = [
  { code: "en", label: "EN" },
  { code: "fr", label: "FR" },
  { code: "ar", label: "AR" },
] as const;

// Extracted NavLink component to organize code and avoid duplication
function NavLink({ item, path, currentLang, t, isMobile = false }: any) {
  const active = item.to === "/" ? path === "/" : path.startsWith(item.to);
  
  return (
    <Link
      to={item.to}
      className={cn(
        "relative uppercase tracking-[0.2em] font-medium transition-colors duration-300",
        isMobile ? "py-2 w-full text-center" : "",
        currentLang === "ar" 
          ? (isMobile ? "text-xs" : "text-sm") 
          : (isMobile ? "text-[10px]" : "text-[11px]"),
        active 
          ? "text-gold" 
          : "text-black/60 dark:text-white/60 hover:text-black dark:hover:text-white"
      )}
    >
      {t(item.labelKey)}
      {!isMobile && active && (
        <motion.div
          layoutId="nav-underline"
          className="absolute -bottom-2 left-0 right-0 h-px bg-gold"
          transition={{ type: "spring", stiffness: 380, damping: 30 }}
        />
      )}
    </Link>
  );
}

export function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const navbarRef = useRef<HTMLElement>(null);
  // theme is intentionally static; ThemeProvider provides a single theme.
  const path = useRouterState({ select: (s) => s.location.pathname });
  const { t, i18n } = useTranslation();

  const currentLang = (i18n.resolvedLanguage || i18n.language || "en").split("-")[0];

  const changeLanguage = (lng: string) => {
    i18n.changeLanguage(lng);
  };
  
  const isRTL = i18n.dir() === "rtl";

  // Reset mobile menu and scroll state when the route changes
  useEffect(() => {
    setOpen(false);
    setScrolled(false); 
  }, [path]);

  // Scroll effect to determine navbar background
  useEffect(() => {
    const handleScroll = () => {
      const hero = document.querySelector(".hero-section") as HTMLElement | null;
      
      if (!hero) {
        setScrolled(window.scrollY > 50);
        return;
      }

      const heroBottom = hero.getBoundingClientRect().bottom;
      setScrolled(heroBottom <= 100);
    };

    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    
    return () => window.removeEventListener("scroll", handleScroll);
  }, [path]); 

  useEffect(() => {
    if (!open) return;

    const handleClickOutside = (event: MouseEvent | TouchEvent) => {
      if (
        navbarRef.current &&
        !navbarRef.current.contains(event.target as Node)
      ) {
        setOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    document.addEventListener("touchstart", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
      document.removeEventListener("touchstart", handleClickOutside);
    };
  }, [open]);

  return (
   <header
  className={cn(
    "fixed inset-x-0 top-0 z-50 transition-all duration-500",
    `
      mx-4 mt-4 rounded-2xl
      bg-white/95 dark:bg-neutral-950/85
      backdrop-blur-sm
      shadow-md
    `
  )}
  ref={navbarRef}
>
      <div className="mx-auto flex h-14 sm:h-16 lg:h-20 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-12">
        
        {/* LOGO */}
        <Link to="/" className="flex items-center gap-2 sm:gap-3">
          <div className="flex h-8 w-8 sm:h-10 sm:w-10 items-center justify-center rounded-full border border-gold/60 bg-gold/10">
            <span className="font-display text-base sm:text-lg font-bold text-gold">D</span>
          </div>
          <div className="flex flex-col leading-none">
            <span className="font-display text-base sm:text-lg font-semibold text-black dark:text-white tracking-wide">
              Dar Medina
            </span>
            <span className="text-[8px] sm:text-[9px] uppercase tracking-[0.3em] text-gold/80">
              Marrakech
            </span>
          </div>
        </Link>

        {/* DESKTOP NAV */}
        <nav className="hidden items-center gap-8 lg:flex">
          {NAV.map((item) => (
            <NavLink 
              key={item.to} 
              item={item} 
              path={path} 
              currentLang={currentLang} 
              t={t} 
            />
          ))}
        </nav>

        {/* ACTIONS */}
        <div className="hidden items-center gap-6 lg:flex">
          {/* Language Switcher */}
          <div className="flex items-center gap-2">
            {LANGS.map((l) => {
              const isActive = currentLang === l.code;
              return (
                <button
                  key={l.code}
                  onClick={() => changeLanguage(l.code)}
                  className={cn(
                    "cursor-pointer text-[10px] uppercase tracking-wider font-medium transition-colors",
                    isActive ? "text-gold" : "text-black/40 dark:text-white/40 hover:text-black/70 dark:hover:text-white/70"
                  )}
                >
                  {l.label}
                </button>
              );
            })}
          </div>

          {/* Reserve Button */}
          <Link
            to="/reservations"
            hash="booking"
            className="rounded-sm bg-gold px-6 py-2.5 text-[10px] uppercase tracking-[0.2em] font-semibold text-gold-foreground transition-all hover:bg-gold/90 hover:shadow-lg hover:shadow-gold/20"
          >
            {t("nav.reserve")}
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setOpen((o) => !o)}
          className="rounded-sm border border-black/10 dark:border-white/10 p-2 text-black dark:text-white lg:hidden"
        >
          {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </div>

      {/* MOBILE MENU */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.2, ease: "easeInOut" }}
            className="lg:hidden overflow-hidden"
          >
            <div className="flex flex-col px-4 pb-4 pt-1 gap-2">
              {/* Links */}
              <nav className="flex flex-col items-center">
                {NAV.map((item) => (
                  <NavLink
                    key={item.to}
                    item={item}
                    path={path}
                    currentLang={currentLang}
                    t={t}
                    isMobile
                  />
                ))}
              </nav>

              {/* Divider */}
              <div className="h-px w-full bg-black/5 dark:bg-white/5 my-1" />

              {/* Controls Row */}
              <div className="flex items-center justify-between gap-2">
                {/* (theme switch removed) */}

                {/* Languages */}
                <div className="flex items-center gap-3">
                  {LANGS.map((l) => {
                    const isActive = currentLang === l.code;
                    return (
                      <button
                        key={l.code}
                        onClick={() => changeLanguage(l.code)}
                        className={cn(
                          "text-[9px] uppercase tracking-wider font-semibold transition-colors",
                          isActive ? "text-gold" : "text-black/40 dark:text-white/40"
                        )}
                      >
                        {l.label}
                      </button>
                    );
                  })}
                </div>
              </div>

              {/* CTA */}
              <Link
                to="/reservations"
                className="flex w-full items-center justify-center rounded-lg bg-gold px-4 py-2 text-[10px] font-semibold uppercase tracking-[0.2em] text-gold-foreground transition-all hover:bg-gold/90"
              >
                {t("nav.reserve")}
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}