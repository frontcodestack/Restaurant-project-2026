import { c as createRouter, a as createRootRouteWithContext, u as useRouter, L as Link, O as Outlet, H as HeadContent, S as Scripts, b as createFileRoute, l as lazyRouteComponent, d as useRouterState } from "../_libs/tanstack__react-router.mjs";
import { r as reactExports, j as jsxRuntimeExports } from "../_libs/react.mjs";
import { b as QueryClient } from "../_libs/tanstack__query-core.mjs";
import { Q as QueryClientProvider } from "../_libs/tanstack__react-query.mjs";
import { c as clsx } from "../_libs/clsx.mjs";
import { t as twMerge } from "../_libs/tailwind-merge.mjs";
import { S as Switch$1, a as SwitchThumb } from "../_libs/radix-ui__react-switch.mjs";
import { u as useTranslation } from "../_libs/react-i18next.mjs";
import { S as Sun, M as Moon, X, a as Menu, I as Instagram, F as Facebook, T as Twitter, Y as Youtube, b as MapPin, P as Phone, c as Mail, d as MessageCircle, C as CalendarCheck } from "../_libs/lucide-react.mjs";
import { A as AnimatePresence, m as motion } from "../_libs/framer-motion.mjs";
import "../_libs/tanstack__router-core.mjs";
import "../_libs/tanstack__history.mjs";
import "../_libs/cookie-es.mjs";
import "../_libs/seroval.mjs";
import "../_libs/seroval-plugins.mjs";
import "node:stream/web";
import "node:stream";
import "../_libs/react-dom.mjs";
import "crypto";
import "async_hooks";
import "util";
import "stream";
import "../_libs/isbot.mjs";
import "../_libs/radix-ui__primitive.mjs";
import "../_libs/radix-ui__react-compose-refs.mjs";
import "../_libs/radix-ui__react-context.mjs";
import "../_libs/@radix-ui/react-use-controllable-state+[...].mjs";
import "../_libs/@radix-ui/react-use-layout-effect+[...].mjs";
import "../_libs/radix-ui__react-use-previous.mjs";
import "../_libs/radix-ui__react-use-size.mjs";
import "../_libs/radix-ui__react-primitive.mjs";
import "../_libs/radix-ui__react-slot.mjs";
import "../_libs/use-sync-external-store.mjs";
import "../_libs/motion-dom.mjs";
import "../_libs/motion-utils.mjs";
const appCss = "/assets/styles-C5YGUVom.css";
function reportLovableError(error, context = {}) {
  if (typeof window === "undefined") return;
  window.__lovableEvents?.captureException?.(
    error,
    {
      source: "react_error_boundary",
      route: window.location.pathname,
      ...context
    },
    {
      mechanism: "react_error_boundary",
      handled: false,
      severity: "error"
    }
  );
}
const ThemeContext = reactExports.createContext({
  theme: "dark",
  toggle: () => {
  }
});
function ThemeProvider({ children }) {
  const getInitialTheme = () => {
    if (typeof window !== "undefined") {
      const stored = localStorage.getItem("theme");
      if (stored === "light" || stored === "dark") {
        return stored;
      }
    }
    return "dark";
  };
  const [theme, setTheme] = reactExports.useState(getInitialTheme);
  reactExports.useEffect(() => {
    const root = document.documentElement;
    if (theme === "dark") {
      root.classList.add("dark");
      root.dataset.theme = "dark";
    } else {
      root.classList.remove("dark");
      root.dataset.theme = "light";
    }
    try {
      localStorage.setItem("theme", theme);
    } catch (err) {
      console.warn("⚠️ localStorage write failed. Your ad-blocker or browser privacy settings may be blocking it.", err);
    }
  }, [theme]);
  const toggle = () => {
    setTheme((prev) => prev === "dark" ? "light" : "dark");
  };
  return /* @__PURE__ */ jsxRuntimeExports.jsx(ThemeContext.Provider, { value: { theme, toggle }, children });
}
const useTheme = () => reactExports.useContext(ThemeContext);
function cn(...inputs) {
  return twMerge(clsx(inputs));
}
const Switch = reactExports.forwardRef(({ className, dir = "ltr", ...props }, ref) => {
  const isRTL = dir === "rtl";
  return /* @__PURE__ */ jsxRuntimeExports.jsx(
    Switch$1,
    {
      ref,
      className: cn(
        "peer inline-flex h-5 w-9 shrink-0 cursor-pointer items-center rounded-full border-2 border-transparent shadow-sm transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background disabled:cursor-not-allowed disabled:opacity-50 data-[state=checked]:bg-primary data-[state=unchecked]:bg-input",
        className
      ),
      ...props,
      children: /* @__PURE__ */ jsxRuntimeExports.jsx(
        SwitchThumb,
        {
          className: cn(
            "pointer-events-none block h-4 w-4 rounded-full bg-background shadow-lg ring-0 transition-transform",
            isRTL ? "data-[state=checked]:-translate-x-4 data-[state=unchecked]:translate-x-0" : "data-[state=checked]:translate-x-4 data-[state=unchecked]:translate-x-0"
          )
        }
      )
    }
  );
});
Switch.displayName = Switch$1.displayName;
const NAV = [
  { to: "/", labelKey: "nav.home" },
  { to: "/about", labelKey: "nav.about" },
  { to: "/menu", labelKey: "nav.menu" },
  { to: "/reservations", labelKey: "nav.reservations" },
  { to: "/gallery", labelKey: "nav.gallery" },
  { to: "/contact", labelKey: "nav.contact" }
];
const LANGS = [
  { code: "en", label: "EN" },
  { code: "fr", label: "FR" },
  { code: "ar", label: "AR" }
];
function NavLink({ item, path, currentLang, t, isMobile = false }) {
  const active = item.to === "/" ? path === "/" : path.startsWith(item.to);
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(
    Link,
    {
      to: item.to,
      className: cn(
        "relative uppercase tracking-[0.2em] font-medium transition-colors duration-300",
        isMobile ? "py-2 w-full text-center" : "",
        currentLang === "ar" ? isMobile ? "text-xs" : "text-sm" : isMobile ? "text-[10px]" : "text-[11px]",
        active ? "text-gold" : "text-black/60 dark:text-white/60 hover:text-black dark:hover:text-white"
      ),
      children: [
        t(item.labelKey),
        !isMobile && active && /* @__PURE__ */ jsxRuntimeExports.jsx(
          motion.div,
          {
            layoutId: "nav-underline",
            className: "absolute -bottom-2 left-0 right-0 h-px bg-gold",
            transition: { type: "spring", stiffness: 380, damping: 30 }
          }
        )
      ]
    }
  );
}
function Navbar() {
  const [open, setOpen] = reactExports.useState(false);
  const [scrolled, setScrolled] = reactExports.useState(false);
  const navbarRef = reactExports.useRef(null);
  const { theme, toggle } = useTheme();
  const path = useRouterState({ select: (s) => s.location.pathname });
  const { t, i18n } = useTranslation();
  const currentLang = (i18n.resolvedLanguage || i18n.language || "en").split("-")[0];
  const changeLanguage = (lng) => {
    i18n.changeLanguage(lng);
  };
  const isRTL = i18n.dir() === "rtl";
  reactExports.useEffect(() => {
    setOpen(false);
    setScrolled(false);
  }, [path]);
  reactExports.useEffect(() => {
    const handleScroll = () => {
      const hero = document.querySelector(".hero-section");
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
  reactExports.useEffect(() => {
    if (!open) return;
    const handleClickOutside = (event) => {
      if (navbarRef.current && !navbarRef.current.contains(event.target)) {
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
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(
    "header",
    {
      className: cn(
        "fixed inset-x-0 top-0 z-50 transition-all duration-500",
        scrolled || open ? `
            mx-4 mt-4 rounded-2xl
            bg-white/95 dark:bg-neutral-950/85
            backdrop-blur-2xl
            shadow-[0_4px_12px_rgba(15,81,50,0.04),0_16px_48px_rgba(15,81,50,0.10),0_32px_80px_rgba(0,0,0,0.08)]
          ` : `
            bg-white/80 dark:bg-transparent
            backdrop-blur-md
          `
      ),
      ref: navbarRef,
      children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mx-auto flex h-14 sm:h-16 lg:h-20 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-12", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs(Link, { to: "/", className: "flex items-center gap-2 sm:gap-3", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex h-8 w-8 sm:h-10 sm:w-10 items-center justify-center rounded-full border border-gold/60 bg-gold/10", children: /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "font-display text-base sm:text-lg font-bold text-gold", children: "D" }) }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-col leading-none", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "font-display text-base sm:text-lg font-semibold text-black dark:text-white tracking-wide", children: "Dar Medina" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-[8px] sm:text-[9px] uppercase tracking-[0.3em] text-gold/80", children: "Marrakech" })
            ] })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("nav", { className: "hidden items-center gap-8 lg:flex", children: NAV.map((item) => /* @__PURE__ */ jsxRuntimeExports.jsx(
            NavLink,
            {
              item,
              path,
              currentLang,
              t
            },
            item.to
          )) }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "hidden items-center gap-6 lg:flex", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2 rounded-full border border-black/10 dark:border-white/10 bg-black/5 dark:bg-white/5 px-3 py-2 text-[11px] text-black dark:text-white shadow-sm", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(Sun, { className: cn("h-4 w-4", theme === "light" ? "text-gold" : "text-white/40") }),
              /* @__PURE__ */ jsxRuntimeExports.jsx(Switch, { dir: isRTL ? "rtl" : "ltr", checked: theme === "dark", onCheckedChange: toggle, "aria-label": "Toggle theme" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx(Moon, { className: cn("h-4 w-4", theme === "dark" ? "text-gold" : "text-white") })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex items-center gap-2", children: LANGS.map((l) => {
              const isActive = currentLang === l.code;
              return /* @__PURE__ */ jsxRuntimeExports.jsx(
                "button",
                {
                  onClick: () => changeLanguage(l.code),
                  className: cn(
                    "cursor-pointer text-[10px] uppercase tracking-wider font-medium transition-colors",
                    isActive ? "text-gold" : "text-black/40 dark:text-white/40 hover:text-black/70 dark:hover:text-white/70"
                  ),
                  children: l.label
                },
                l.code
              );
            }) }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              Link,
              {
                to: "/reservations",
                hash: "booking",
                className: "rounded-sm bg-gold px-6 py-2.5 text-[10px] uppercase tracking-[0.2em] font-semibold text-gold-foreground transition-all hover:bg-gold/90 hover:shadow-lg hover:shadow-gold/20",
                children: t("nav.reserve")
              }
            )
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            "button",
            {
              onClick: () => setOpen((o) => !o),
              className: "rounded-sm border border-black/10 dark:border-white/10 p-2 text-black dark:text-white lg:hidden",
              children: open ? /* @__PURE__ */ jsxRuntimeExports.jsx(X, { className: "h-5 w-5" }) : /* @__PURE__ */ jsxRuntimeExports.jsx(Menu, { className: "h-5 w-5" })
            }
          )
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(AnimatePresence, { children: open && /* @__PURE__ */ jsxRuntimeExports.jsx(
          motion.div,
          {
            initial: { opacity: 0, height: 0 },
            animate: { opacity: 1, height: "auto" },
            exit: { opacity: 0, height: 0 },
            transition: { duration: 0.2, ease: "easeInOut" },
            className: "lg:hidden overflow-hidden",
            children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-col px-4 pb-4 pt-1 gap-2", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("nav", { className: "flex flex-col items-center", children: NAV.map((item) => /* @__PURE__ */ jsxRuntimeExports.jsx(
                NavLink,
                {
                  item,
                  path,
                  currentLang,
                  t,
                  isMobile: true
                },
                item.to
              )) }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "h-px w-full bg-black/5 dark:bg-white/5 my-1" }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center justify-between gap-2", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-1.5 rounded-full border border-black/10 dark:border-white/10 bg-black/5 dark:bg-white/5 px-2.5 py-1.5", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx(Sun, { className: cn("h-3 w-3", theme === "light" ? "text-gold" : "text-white/40") }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx(Switch, { dir: isRTL ? "rtl" : "ltr", checked: theme === "dark", onCheckedChange: toggle, "aria-label": "Toggle theme" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx(Moon, { className: cn("h-3 w-3", theme === "dark" ? "text-gold" : "text-black/40") })
                ] }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex items-center gap-3", children: LANGS.map((l) => {
                  const isActive = currentLang === l.code;
                  return /* @__PURE__ */ jsxRuntimeExports.jsx(
                    "button",
                    {
                      onClick: () => changeLanguage(l.code),
                      className: cn(
                        "text-[9px] uppercase tracking-wider font-semibold transition-colors",
                        isActive ? "text-gold" : "text-black/40 dark:text-white/40"
                      ),
                      children: l.label
                    },
                    l.code
                  );
                }) })
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsx(
                Link,
                {
                  to: "/reservations",
                  className: "flex w-full items-center justify-center rounded-lg bg-gold px-4 py-2 text-[10px] font-semibold uppercase tracking-[0.2em] text-gold-foreground transition-all hover:bg-gold/90",
                  children: t("nav.reserve")
                }
              )
            ] })
          }
        ) })
      ]
    }
  );
}
function Footer() {
  const { t } = useTranslation();
  return /* @__PURE__ */ jsxRuntimeExports.jsx("footer", { className: "relative bg-surface border-t border-gold/10", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mx-auto max-w-7xl px-6 py-12 lg:px-8", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid gap-10 lg:grid-cols-12", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "lg:col-span-4 space-y-4", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-3", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex h-9 w-9 items-center justify-center rounded-full border border-gold/40 bg-gold/5", children: /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "font-display text-base font-bold text-gold", children: "D" }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "font-display text-lg font-semibold text-foreground leading-tight", children: "Dar Medina" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-[9px] uppercase tracking-[0.25em] text-gold/70", children: "Marrakech" })
          ] })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm leading-relaxed text-foreground/60 max-w-xs", children: t("footer.description") }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex gap-2.5 pt-1", children: [Instagram, Facebook, Twitter, Youtube].map((Icon, i) => /* @__PURE__ */ jsxRuntimeExports.jsx(
          "a",
          {
            href: "#",
            className: "flex h-8 w-8 items-center justify-center rounded-full border border-border text-foreground/50 transition-all hover:border-gold hover:text-gold hover:bg-gold/5",
            children: /* @__PURE__ */ jsxRuntimeExports.jsx(Icon, { className: "h-3.5 w-3.5" })
          },
          i
        )) })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "lg:col-span-3", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("h4", { className: "text-[10px] uppercase tracking-[0.2em] text-gold/80 mb-4 font-semibold", children: t("footer.navigation.title") }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("ul", { className: "grid grid-cols-2 gap-x-4 gap-y-2.5", children: [
          { to: "/", labelKey: "nav.home" },
          { to: "/menu", labelKey: "nav.menu" },
          { to: "/about", labelKey: "nav.about" },
          { to: "/reservations", labelKey: "nav.reservations" },
          { to: "/gallery", labelKey: "nav.gallery" },
          { to: "/contact", labelKey: "nav.contact" }
        ].map((item) => /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: /* @__PURE__ */ jsxRuntimeExports.jsx(
          Link,
          {
            to: item.to,
            className: "text-sm text-foreground/60 transition-colors hover:text-gold",
            children: t(item.labelKey)
          }
        ) }, item.to)) })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "lg:col-span-5 grid gap-8 sm:grid-cols-2", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("h4", { className: "text-[10px] uppercase tracking-[0.2em] text-gold/80 mb-4 font-semibold", children: t("footer.hours.title") }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("ul", { className: "space-y-2 text-sm", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("li", { className: "flex justify-between text-foreground/60", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: t("footer.hours.mon_thu") }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-foreground/80 text-xs", children: "12PM — 12AM" })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("li", { className: "flex justify-between text-foreground/60", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: t("footer.hours.fri_sat") }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-foreground/80 text-xs", children: "12PM — 1AM" })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("li", { className: "flex justify-between text-foreground/60", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: t("footer.hours.sunday") }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-foreground/80 text-xs", children: "1PM — 11PM" })
            ] })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-3 flex items-center gap-2 text-xs text-gold/80", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "h-1.5 w-1.5 rounded-full bg-green-500 animate-pulse" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: t("footer.hours.open_now") })
          ] })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("h4", { className: "text-[10px] uppercase tracking-[0.2em] text-gold/80 mb-4 font-semibold", children: t("footer.contact.title") }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("ul", { className: "space-y-3", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("li", { className: "flex items-start gap-2.5", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(MapPin, { className: "mt-0.5 h-4 w-4 shrink-0 text-gold/80" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-sm text-foreground/60 leading-snug", children: t("footer.contact.address") })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("li", { className: "flex items-center gap-2.5", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(Phone, { className: "h-4 w-4 shrink-0 text-gold/80" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("a", { href: "tel:+212524389214", className: "text-sm text-foreground/60 hover:text-gold transition-colors", children: "+212 524 389 214" })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("li", { className: "flex items-center gap-2.5", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(Mail, { className: "h-4 w-4 shrink-0 text-gold/80" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("a", { href: "mailto:hello@darmedina.ma", className: "text-sm text-foreground/60 hover:text-gold transition-colors", children: "hello@darmedina.ma" })
            ] })
          ] })
        ] })
      ] })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-12 pt-6 border-t border-border flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-foreground/40", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { children: t("footer.copyright", { year: (/* @__PURE__ */ new Date()).getFullYear() }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex gap-6", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("a", { href: "#", className: "hover:text-gold transition-colors", children: t("footer.privacy") }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("a", { href: "#", className: "hover:text-gold transition-colors", children: t("footer.terms") })
      ] })
    ] })
  ] }) });
}
function FloatingActions() {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "fixed bottom-5 right-5 z-40 flex flex-col items-end gap-3", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs(
      motion.a,
      {
        initial: { opacity: 0, scale: 0.6 },
        animate: { opacity: 1, scale: 1 },
        transition: { delay: 0.5, type: "spring" },
        href: "https://wa.me/212524389214",
        target: "_blank",
        rel: "noreferrer",
        "aria-label": "Chat on WhatsApp",
        className: "group flex h-14 w-14 items-center justify-center rounded-full bg-[#25D366] text-white shadow-xl shadow-[#25D366]/30 transition-transform hover:scale-110",
        children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(MessageCircle, { className: "h-6 w-6" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "absolute right-16 hidden whitespace-nowrap rounded-full bg-foreground px-3 py-1.5 text-xs text-background group-hover:block", children: "Chat with us" })
        ]
      }
    ),
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      motion.div,
      {
        initial: { opacity: 0, x: 40 },
        animate: { opacity: 1, x: 0 },
        transition: { delay: 0.7 },
        className: "sm:hidden",
        children: /* @__PURE__ */ jsxRuntimeExports.jsxs(
          Link,
          {
            to: "/reservations",
            className: "flex items-center gap-2 rounded-full bg-gold px-5 py-3 text-sm font-semibold text-gold-foreground shadow-xl shadow-gold/30",
            children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(CalendarCheck, { className: "h-4 w-4" }),
              " Reserve"
            ]
          }
        )
      }
    )
  ] });
}
function NotFoundComponent() {
  return /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex min-h-screen items-center justify-center bg-background px-4", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "max-w-md text-center", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("h1", { className: "text-7xl font-bold text-foreground", children: "404" }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "mt-4 text-xl font-semibold text-foreground", children: "Page not found" }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-2 text-sm text-muted-foreground", children: "The page you're looking for doesn't exist or has been moved." }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-6", children: /* @__PURE__ */ jsxRuntimeExports.jsx(
      Link,
      {
        to: "/",
        className: "inline-flex items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground hover:bg-primary/90",
        children: "Go home"
      }
    ) })
  ] }) });
}
function ErrorComponent({ error, reset }) {
  const router2 = useRouter();
  reactExports.useEffect(() => {
    reportLovableError(error, { boundary: "tanstack_root_error_component" });
  }, [error]);
  return /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex min-h-screen items-center justify-center bg-background px-4", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "max-w-md text-center", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("h1", { className: "text-xl font-semibold text-foreground", children: "This page didn't load" }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-2 text-sm text-muted-foreground", children: "Something went wrong. Try again or go home." }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-6 flex gap-2 justify-center", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(
        "button",
        {
          onClick: () => {
            router2.invalidate();
            reset();
          },
          className: "rounded-md bg-primary px-4 py-2 text-sm text-primary-foreground hover:bg-primary/90",
          children: "Try again"
        }
      ),
      /* @__PURE__ */ jsxRuntimeExports.jsx(
        "a",
        {
          href: "/",
          className: "rounded-md border px-4 py-2 text-sm hover:bg-accent",
          children: "Go home"
        }
      )
    ] })
  ] }) });
}
const Route$6 = createRootRouteWithContext()({
  head: () => ({
    meta: [
      { charSet: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { title: "Dar Medina — Authentic Moroccan Cuisine in Marrakech" }
    ],
    links: [{ rel: "stylesheet", href: appCss }]
  }),
  shellComponent: RootShell,
  component: RootComponent,
  notFoundComponent: NotFoundComponent,
  errorComponent: ErrorComponent
});
function RootShell({ children }) {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("html", { lang: "en", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("head", { children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(HeadContent, {}),
      /* @__PURE__ */ jsxRuntimeExports.jsx("link", { rel: "preconnect", href: "https://fonts.googleapis.com" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("link", { rel: "preconnect", href: "https://fonts.gstatic.com", crossOrigin: "" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(
        "link",
        {
          href: "https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&family=Playfair+Display:wght@500;600;700&family=Cormorant+Garamond:wght@500;600;700&family=Cairo:wght@300;400;500;600;700&display=swap",
          rel: "stylesheet"
        }
      )
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("body", { children: [
      children,
      /* @__PURE__ */ jsxRuntimeExports.jsx(Scripts, {})
    ] })
  ] });
}
function RootComponent() {
  const { i18n, ready } = useTranslation();
  const { queryClient: queryClient2 } = Route$6.useRouteContext();
  const [isReady, setIsReady] = reactExports.useState(false);
  reactExports.useEffect(() => {
    const lang = (i18n.language || "en").split("-")[0];
    document.documentElement.lang = lang;
    document.documentElement.dir = lang === "ar" ? "rtl" : "ltr";
    setIsReady(true);
  }, [i18n.language]);
  if (!isReady) return null;
  return /* @__PURE__ */ jsxRuntimeExports.jsx(QueryClientProvider, { client: queryClient2, children: /* @__PURE__ */ jsxRuntimeExports.jsx(ThemeProvider, { children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex min-h-screen flex-col", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(Navbar, {}),
    /* @__PURE__ */ jsxRuntimeExports.jsx("main", { className: "flex-1", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Outlet, {}) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(Footer, {}),
    /* @__PURE__ */ jsxRuntimeExports.jsx(FloatingActions, {})
  ] }) }) });
}
const $$splitComponentImporter$5 = () => import("./reservations-BvRVx6id.mjs");
const Route$5 = createFileRoute("/reservations")({
  head: () => ({
    meta: [{
      title: "Reserve a Table — Dar Medina"
    }, {
      name: "description",
      content: "Reserve your table at Dar Medina, Marrakech. Lunch 12:00–15:00, dinner 19:00–23:30. Private courtyard for groups."
    }, {
      property: "og:title",
      content: "Reserve a Table — Dar Medina"
    }, {
      property: "og:description",
      content: "Book your evening at Dar Medina, Marrakech."
    }],
    links: [{
      rel: "canonical",
      href: "/reservations"
    }]
  }),
  component: lazyRouteComponent($$splitComponentImporter$5, "component")
});
const $$splitComponentImporter$4 = () => import("./menu-C3QgLH1J.mjs");
const Route$4 = createFileRoute("/menu")({
  head: () => ({
    meta: [{
      title: "Menu — Dar Medina"
    }, {
      name: "description",
      content: "Discover our seasonal Moroccan menu: tagines, couscous, grills, pastilla, and traditional mint tea — slow-cooked and souk-fresh."
    }, {
      property: "og:title",
      content: "Menu — Dar Medina"
    }, {
      property: "og:description",
      content: "Tagines, couscous, grills and Moroccan classics — slow-cooked and souk-fresh."
    }],
    links: [{
      rel: "canonical",
      href: "/menu"
    }]
  }),
  component: lazyRouteComponent($$splitComponentImporter$4, "component")
});
const $$splitComponentImporter$3 = () => import("./gallery-DGH5p4by.mjs");
const Route$3 = createFileRoute("/gallery")({
  head: () => ({
    meta: [{
      title: "Gallery — Dar Medina"
    }, {
      name: "description",
      content: "Step inside Dar Medina — our riad interiors, candle-lit courtyard, spice-souk colours and signature dishes."
    }, {
      property: "og:title",
      content: "Gallery — Dar Medina"
    }, {
      property: "og:description",
      content: "Step inside our riad — interiors, courtyard, food and details."
    }],
    links: [{
      rel: "canonical",
      href: "/gallery"
    }]
  }),
  component: lazyRouteComponent($$splitComponentImporter$3, "component")
});
const $$splitComponentImporter$2 = () => import("./contact-DNx8rjQI.mjs");
const Route$2 = createFileRoute("/contact")({
  head: () => ({
    meta: [{
      title: "Contact — Dar Medina"
    }, {
      name: "description",
      content: "Find Dar Medina in the heart of the Marrakech medina. Call, write or send us a WhatsApp message."
    }, {
      property: "og:title",
      content: "Contact — Dar Medina"
    }, {
      property: "og:description",
      content: "Visit, call or message Dar Medina in Marrakech."
    }],
    links: [{
      rel: "canonical",
      href: "/contact"
    }]
  }),
  component: lazyRouteComponent($$splitComponentImporter$2, "component")
});
const $$splitComponentImporter$1 = () => import("./about-DHHhb_Hm.mjs");
const Route$1 = createFileRoute("/about")({
  head: () => ({
    meta: [{
      title: "Our Story — Dar Medina"
    }, {
      name: "description",
      content: "A century-old riad, four generations of Marrakchi recipes and a team devoted to the slow rituals of Moroccan hospitality."
    }, {
      property: "og:title",
      content: "Our Story — Dar Medina"
    }, {
      property: "og:description",
      content: "A century-old riad, four generations of Marrakchi recipes and a team devoted to slow Moroccan hospitality."
    }],
    links: [{
      rel: "canonical",
      href: "/about"
    }]
  }),
  component: lazyRouteComponent($$splitComponentImporter$1, "component")
});
const $$splitComponentImporter = () => import("./index-CJYNaj8p.mjs");
const Route = createFileRoute("/")({
  head: () => ({
    meta: [{
      title: "Dar Medina — Authentic Moroccan Cuisine in Marrakech"
    }, {
      name: "description",
      content: "Slow-cooked tagines, hand-rolled couscous and warm Moroccan hospitality inside a century-old riad. Reserve your table at Dar Medina."
    }, {
      property: "og:title",
      content: "Dar Medina — Authentic Moroccan Cuisine"
    }, {
      property: "og:description",
      content: "Slow-cooked tagines, hand-rolled couscous and warm Moroccan hospitality inside a century-old riad in Marrakech."
    }],
    links: [{
      rel: "canonical",
      href: "/"
    }]
  }),
  component: lazyRouteComponent($$splitComponentImporter, "component")
});
const ReservationsRoute = Route$5.update({
  id: "/reservations",
  path: "/reservations",
  getParentRoute: () => Route$6
});
const MenuRoute = Route$4.update({
  id: "/menu",
  path: "/menu",
  getParentRoute: () => Route$6
});
const GalleryRoute = Route$3.update({
  id: "/gallery",
  path: "/gallery",
  getParentRoute: () => Route$6
});
const ContactRoute = Route$2.update({
  id: "/contact",
  path: "/contact",
  getParentRoute: () => Route$6
});
const AboutRoute = Route$1.update({
  id: "/about",
  path: "/about",
  getParentRoute: () => Route$6
});
const IndexRoute = Route.update({
  id: "/",
  path: "/",
  getParentRoute: () => Route$6
});
const rootRouteChildren = {
  IndexRoute,
  AboutRoute,
  ContactRoute,
  GalleryRoute,
  MenuRoute,
  ReservationsRoute
};
const routeTree = Route$6._addFileChildren(rootRouteChildren)._addFileTypes();
const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: 1e3 * 60 * 5,
      // 5 minutes
      gcTime: 1e3 * 60 * 30,
      // 30 minutes
      retry: 1,
      refetchOnWindowFocus: false
    }
  }
});
const getRouter = () => {
  const router2 = createRouter({
    routeTree,
    context: { queryClient },
    scrollRestoration: true,
    defaultPreloadStaleTime: 0
  });
  return router2;
};
const router = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  getRouter
}, Symbol.toStringTag, { value: "Module" }));
export {
  cn as c,
  router as r
};
