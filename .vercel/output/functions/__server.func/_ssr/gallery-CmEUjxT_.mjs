import { r as reactExports, j as jsxRuntimeExports } from "../_libs/react.mjs";
import { u as useGallery } from "./useGallery-Cw85L-xC.mjs";
import { c as cn } from "./router-DMU1exWl.mjs";
import { B as BGZ } from "./BGZ-CG54wZoT.mjs";
import { u as useTranslation } from "../_libs/react-i18next.mjs";
import { m as motion, A as AnimatePresence } from "../_libs/framer-motion.mjs";
import { r as Camera, B as Building2, s as Award, j as ChevronRight, k as ChevronLeft, I as Instagram, X } from "../_libs/lucide-react.mjs";
import "../_libs/tanstack__react-query.mjs";
import "../_libs/tanstack__query-core.mjs";
import "./strapi-DoZBEunp.mjs";
import "../_libs/tanstack__react-router.mjs";
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
import "../_libs/clsx.mjs";
import "../_libs/tailwind-merge.mjs";
import "../_libs/radix-ui__react-switch.mjs";
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
const containerVariants = {
  hidden: {
    opacity: 0
  },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.1
    }
  }
};
const itemVariants = {
  hidden: {
    opacity: 0,
    y: 30
  },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      type: "spring",
      stiffness: 60,
      damping: 20
    }
  }
};
const cardHoverVariants = {
  rest: {
    y: 0,
    transition: {
      type: "spring",
      stiffness: 300,
      damping: 25
    }
  },
  hover: {
    y: -6,
    transition: {
      type: "spring",
      stiffness: 400,
      damping: 25
    }
  }
};
const CATS = ["All", "Cuisine", "Interiors", "Zellij & Details", "Atmosphere", "Events"];
function GalleryPage() {
  const {
    t,
    i18n
  } = useTranslation();
  const isRTL = i18n.dir() === "rtl";
  const {
    data: galleryData = [],
    isLoading
  } = useGallery();
  const [cat, setCat] = reactExports.useState("All");
  const [open, setOpen] = reactExports.useState(null);
  const [visibleCount, setVisibleCount] = reactExports.useState(6);
  const gallerySectionRef = reactExports.useRef(null);
  const catsRef = reactExports.useRef(null);
  const catButtonRefs = reactExports.useRef([]);
  const scrollCats = (direction) => {
    const currentIndex = CATS.indexOf(cat);
    const nextIndex = direction === "right" ? (currentIndex + 1) % CATS.length : (currentIndex - 1 + CATS.length) % CATS.length;
    setCat(CATS[nextIndex]);
    setVisibleCount(6);
    const container = catsRef.current;
    const button = catButtonRefs.current[nextIndex];
    if (container && button) {
      const left = button.offsetLeft - container.clientWidth / 2 + button.clientWidth / 2;
      container.scrollTo({
        left,
        behavior: "smooth"
      });
    }
  };
  const INSTAGRAM_PHOTOS = ["https://images.unsplash.com/photo-1541518763669-27fef04b14ea?w=400", "https://images.unsplash.com/photo-1539020140153-e479b8c22e70?w=400", "https://images.unsplash.com/photo-1514362545857-3bc16c4c7d1b?w=400", "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=400", "https://images.unsplash.com/photo-1519671482749-fd09be7ccebf?w=400", "https://images.unsplash.com/photo-1528605248644-14dd04022da1?w=400"];
  const items = galleryData.filter((g) => cat === "All" ? true : g.category === cat);
  const visibleItems = items.slice(0, visibleCount);
  const next = () => setOpen((i) => i === null ? null : (i + 1) % items.length);
  const prev = () => setOpen((i) => i === null ? null : (i - 1 + items.length) % items.length);
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { dir: i18n.dir(), className: "overflow-x-hidden", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("section", { className: "hero-section relative min-h-90 sm:h-[80dvh] overflow-hidden", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(motion.div, { className: "absolute inset-0 bg-cover bg-center bg-fixed", style: {
        backgroundImage: "url('https://images.unsplash.com/photo-1539020140153-e479b8c22e70')"
      }, initial: {
        scale: 1.1
      }, animate: {
        scale: 1
      }, transition: {
        duration: 2.5,
        ease: "easeOut"
      } }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute inset-0 bg-linear-to-b from-[#1a1510]/90 via-[#1a1510]/70 to-[#1a1510]" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute inset-0 opacity-[0.05]", style: {
        backgroundImage: `repeating-linear-gradient(45deg, transparent, transparent 20px, rgba(255,255,255,0.1) 20px, rgba(255,255,255,0.1) 21px), repeating-linear-gradient(-45deg, transparent, transparent 20px, rgba(255,255,255,0.1) 20px, rgba(255,255,255,0.1) 21px)`
      } }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "relative z-10 mx-auto w-[92%] max-w-350 px-4 sm:px-6 lg:px-8 pt-12 sm:pt-16 md:pt-20 lg:pt-24 pb-8 sm:pb-20 md:pb-24 lg:pb-28", children: /* @__PURE__ */ jsxRuntimeExports.jsxs(motion.div, { variants: containerVariants, initial: "hidden", animate: "show", className: "mx-auto max-w-3xl text-center", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs(motion.div, { variants: itemVariants, className: "mt-2 sm:mt-3 mb-2 sm:mb-3 flex items-center justify-center gap-2 sm:gap-3", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "h-px w-6 sm:w-8 md:w-10 bg-gold/60" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-[9px] sm:text-[10px] md:text-xs uppercase tracking-[0.25em] sm:tracking-[0.35em] text-gold/80", children: t("gallery.hero.badge") }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "h-px w-6 sm:w-8 md:w-10 bg-gold/60" })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs(motion.h1, { variants: itemVariants, className: "font-display text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl leading-[1.15] sm:leading-tight text-white", children: [
          t("gallery.hero.title_line1"),
          /* @__PURE__ */ jsxRuntimeExports.jsx("br", {}),
          /* @__PURE__ */ jsxRuntimeExports.jsx("em", { className: "not-italic text-gold", children: t("gallery.hero.title_line2") })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(motion.p, { variants: itemVariants, className: "mx-auto mt-3 sm:mt-4 md:mt-5 max-w-lg sm:max-w-xl md:max-w-2xl px-2 text-xs sm:text-sm md:text-base lg:text-lg leading-relaxed text-white/70", children: t("gallery.hero.description") }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs(motion.div, { variants: itemVariants, className: "mt-6 sm:mt-8 flex flex-wrap items-center justify-center gap-4 sm:gap-6 text-xs sm:text-sm text-white/60", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "flex items-center gap-1.5 sm:gap-2", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(Camera, { className: "h-3.5 w-3.5 sm:h-4 sm:w-4 text-gold" }),
            t("gallery.hero.stats.photos")
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "flex items-center gap-1.5 sm:gap-2", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(Building2, { className: "h-3.5 w-3.5 sm:h-4 sm:w-4 text-gold" }),
            t("gallery.hero.stats.collections")
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "flex items-center gap-1.5 sm:gap-2", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(Award, { className: "h-3.5 w-3.5 sm:h-4 sm:w-4 text-gold" }),
            t("gallery.hero.stats.awards")
          ] })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(motion.div, { variants: itemVariants, className: "sm:hidden mt-6", children: /* @__PURE__ */ jsxRuntimeExports.jsx(motion.button, { whileHover: {
          scale: 1.05
        }, whileTap: {
          scale: 0.95
        }, onClick: () => gallerySectionRef.current?.scrollIntoView({
          behavior: "smooth",
          block: "start"
        }), className: "link-menu  cursor-pointer mx-auto block rounded-sm border border-white/30 bg-transparent px-6 py-2.5 text-[10px] font-semibold uppercase tracking-[0.2em] text-white transition-colors hover:bg-white/10", children: t("gallery.hero.explore") }) })
      ] }) })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("section", { ref: gallerySectionRef, className: "relative z-10 bg-[#1a1510]/95 backdrop-blur-md border-b border-white/5", children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mx-auto max-w-7xl px-4 sm:px-6 lg:px-12", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center justify-between py-3 sm:py-4", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2 flex-1 min-w-0", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(motion.button, { whileHover: {
          scale: 1.1,
          backgroundColor: "rgba(255,255,255,0.1)"
        }, whileTap: {
          scale: 0.9
        }, onClick: () => scrollCats(isRTL ? "right" : "left"), "aria-label": isRTL ? "Next category" : "Previous category", className: "sm:hidden shrink-0 p-1.5 text-white/45 hover:text-gold active:text-gold transition-colors duration-300 cursor-pointer rounded-full", children: isRTL ? /* @__PURE__ */ jsxRuntimeExports.jsx(ChevronRight, { className: "h-5 w-5", strokeWidth: 2.5 }) : /* @__PURE__ */ jsxRuntimeExports.jsx(ChevronLeft, { className: "h-5 w-5", strokeWidth: 2.5 }) }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { ref: catsRef, className: "hide-scrollbar flex gap-2 overflow-x-auto scroll-smooth snap-x snap-mandatory px-1", dir: "ltr", children: CATS.map((c, index) => {
          const isActive = cat === c;
          return /* @__PURE__ */ jsxRuntimeExports.jsxs(motion.button, { ref: (el) => {
            catButtonRefs.current[index] = el;
          }, onClick: () => {
            setCat(c);
            setVisibleCount(6);
          }, layout: true, whileHover: {
            scale: 1.05
          }, whileTap: {
            scale: 0.95
          }, className: cn("relative shrink-0 rounded-sm px-3 sm:px-5 py-1.5 sm:py-2 text-[10px] sm:text-[11px] uppercase tracking-[0.12em] sm:tracking-[0.15em] font-medium transition-colors duration-200", isActive ? "text-gold-foreground" : "bg-white/5 text-white/60 hover:bg-white/10 hover:text-white border border-white/10"), children: [
            isActive && /* @__PURE__ */ jsxRuntimeExports.jsx(motion.div, { layoutId: "activeCategoryPill", className: "absolute inset-0 bg-gold rounded-sm", transition: {
              type: "spring",
              stiffness: 300,
              damping: 30
            } }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "relative z-10", children: c === "All" ? t("gallery.filter.all") : t(`gallery.categories.${c.toLowerCase().replace(/[\s&]+/g, "_")}`) })
          ] }, c);
        }) }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(motion.button, { whileHover: {
          scale: 1.1,
          backgroundColor: "rgba(255,255,255,0.1)"
        }, whileTap: {
          scale: 0.9
        }, onClick: () => scrollCats(isRTL ? "left" : "right"), "aria-label": isRTL ? "Previous category" : "Next category", className: "sm:hidden shrink-0 p-1.5 text-white/45 hover:text-gold active:text-gold transition-colors duration-300 cursor-pointer rounded-full", children: isRTL ? /* @__PURE__ */ jsxRuntimeExports.jsx(ChevronLeft, { className: "h-5 w-5", strokeWidth: 2.5 }) : /* @__PURE__ */ jsxRuntimeExports.jsx(ChevronRight, { className: "h-5 w-5", strokeWidth: 2.5 }) })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(motion.span, { initial: {
        opacity: 0
      }, animate: {
        opacity: 1
      }, transition: {
        delay: 0.5
      }, className: "hidden sm:block text-xs text-white/40 shrink-0 ml-4", children: t("gallery.filter.showing", {
        visible: visibleItems.length,
        total: items.length
      }) })
    ] }) }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative overflow-hidden bg-[#1a1510]", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "fixed inset-0 opacity-10 pointer-events-none", style: {
        backgroundImage: `url(${BGZ})`,
        backgroundRepeat: "repeat",
        backgroundSize: "650px"
      } }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute inset-0 bg-black/20 pointer-events-none" }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("section", { className: "relative bg-transparent py-10 sm:py-12 lg:py-16", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "pointer-events-none absolute inset-0 opacity-[0.05]", style: {
          backgroundImage: `
                repeating-linear-gradient(
                  45deg,
                  transparent,
                  transparent 20px,
                  rgba(255,255,255,0.05) 20px,
                  rgba(255,255,255,0.05) 21px
                ),
                repeating-linear-gradient(
                  -45deg,
                  transparent,
                  transparent 20px,
                  rgba(255,255,255,0.05) 20px,
                  rgba(255,255,255,0.05) 21px
                )
              `
        } }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-0", children: [
          isLoading ? /* @__PURE__ */ jsxRuntimeExports.jsx(motion.div, { initial: {
            opacity: 0
          }, animate: {
            opacity: 1
          }, className: "py-16 text-center text-sm text-white/60 sm:py-20", children: "Loading gallery..." }) : items.length === 0 ? /* @__PURE__ */ jsxRuntimeExports.jsx(motion.div, { initial: {
            opacity: 0,
            y: 20
          }, animate: {
            opacity: 1,
            y: 0
          }, className: "py-16 text-center text-sm text-white/60 sm:py-20", children: "No items found in this category." }) : /* @__PURE__ */ jsxRuntimeExports.jsx(motion.div, { layout: true, variants: containerVariants, initial: "hidden", whileInView: "show", viewport: {
            once: true,
            margin: "-50px"
          }, className: "grid grid-cols-1 gap-3 sm:grid-cols-2 sm:gap-4 lg:grid-cols-4 lg:grid-rows-[260px_260px_220px] lg:gap-6", children: /* @__PURE__ */ jsxRuntimeExports.jsx(AnimatePresence, { mode: "popLayout", children: visibleItems.map((g, i) => {
            const layoutType = i % 6;
            return /* @__PURE__ */ jsxRuntimeExports.jsxs(motion.button, { layout: true, variants: cardHoverVariants, initial: "rest", whileHover: "hover", onClick: () => setOpen(i), className: cn(
              "group relative block w-full overflow-hidden rounded-lg sm:rounded-xl shadow-xl",
              // Hero / Large Square
              layoutType === 0 && "col-span-1 sm:col-span-2 lg:col-span-2 lg:row-span-2 aspect-4/3 sm:aspect-3/2 lg:aspect-auto",
              // Small Square
              (layoutType === 1 || layoutType === 2) && "col-span-1 aspect-4/3 sm:aspect-square lg:aspect-auto",
              // Tall
              (layoutType === 3 || layoutType === 4) && "col-span-1 aspect-4/3 sm:aspect-square lg:aspect-auto",
              // Wide
              layoutType === 5 && "col-span-1 sm:col-span-2 lg:col-span-2 aspect-4/3 sm:aspect-3/2 lg:aspect-auto"
            ), children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(motion.img, { src: g.image, alt: g.title, loading: "lazy", className: "h-full w-full object-cover", whileHover: {
                scale: 1.08
              }, transition: {
                duration: 0.6,
                ease: "easeOut"
              } }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute inset-0 bg-linear-to-t from-[#1a1510] via-[#1a1510]/30 to-transparent" }),
              (layoutType === 0 || layoutType === 5) && /* @__PURE__ */ jsxRuntimeExports.jsx(motion.div, { initial: {
                opacity: 0,
                x: -10
              }, whileInView: {
                opacity: 1,
                x: 0
              }, viewport: {
                once: true
              }, transition: {
                delay: 0.2 + i * 0.05
              }, className: "absolute left-3 top-3 sm:left-4 sm:top-4" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute bottom-0 left-0 right-0 p-3 sm:p-4 lg:p-5", children: /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: cn("font-display dark text-white", layoutType === 0 || layoutType === 5 ? "text-base sm:text-lg lg:text-xl" : "text-sm sm:text-base"), children: g.title }) })
            ] }, g.id);
          }) }) }),
          visibleCount < items.length && !isLoading && /* @__PURE__ */ jsxRuntimeExports.jsxs(motion.div, { initial: {
            opacity: 0,
            y: 20
          }, whileInView: {
            opacity: 1,
            y: 0
          }, viewport: {
            once: true
          }, className: "mt-8 text-center sm:mt-10", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mb-3 text-[10px] text-white/40 sm:mb-4 sm:text-xs", children: t("gallery.load_more.count", {
              visible: visibleCount,
              total: items.length
            }) }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs(motion.button, { whileHover: {
              scale: 1.03
            }, whileTap: {
              scale: 0.98
            }, transition: {
              type: "spring",
              stiffness: 400,
              damping: 25
            }, onClick: () => setVisibleCount((c) => Math.min(c + 6, items.length)), className: "inline-flex items-center gap-1.5 rounded-sm bg-gold px-6 py-2.5 text-[10px] font-semibold uppercase tracking-[0.2em] text-gold-foreground shadow-xl sm:gap-2 sm:px-8 sm:py-3 sm:text-[11px]", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(Camera, { className: "h-3.5 w-3.5 sm:h-4 sm:w-4" }),
              t("gallery.load_more")
            ] })
          ] })
        ] })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("section", { className: "relative py-10 sm:py-12 lg:py-20 bg-transparent", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mx-auto max-w-7xl px-4 sm:px-6 lg:px-12", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 sm:gap-6 mb-8 sm:mb-10", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-[9px] sm:text-[10px] uppercase tracking-[0.3em] sm:tracking-[0.35em] text-gold/80 mb-1.5 sm:mb-2", children: t("gallery.instagram.handle") }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("h2", { className: "font-display text-2xl sm:text-3xl text-white", children: [
              t("gallery.instagram.title_line1"),
              /* @__PURE__ */ jsxRuntimeExports.jsx("br", {}),
              /* @__PURE__ */ jsxRuntimeExports.jsx("em", { className: "not-italic text-gold", children: t("gallery.instagram.title_line2") })
            ] })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("a", { href: "https://instagram.com/darmedina_ma", target: "_blank", rel: "noopener noreferrer", className: "inline-flex items-center gap-1.5 sm:gap-2 rounded-sm bg-gold px-5 sm:px-6 py-2.5 sm:py-3 text-[10px] sm:text-[11px] uppercase tracking-[0.2em] font-semibold text-gold-foreground transition-all hover:bg-gold/90 hover:shadow-lg hover:shadow-gold/20 shrink-0", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(Instagram, { className: "h-3.5 w-3.5 sm:h-4 sm:w-4" }),
            t("gallery.instagram.follow")
          ] })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid grid-cols-2 gap-2 sm:gap-3 sm:grid-cols-3 lg:grid-cols-6", children: INSTAGRAM_PHOTOS.map((photo, i) => /* @__PURE__ */ jsxRuntimeExports.jsxs(motion.a, { href: "https://instagram.com/darmedina_ma", target: "_blank", rel: "noopener noreferrer", initial: {
          opacity: 0,
          scale: 0.9
        }, whileInView: {
          opacity: 1,
          scale: 1
        }, viewport: {
          once: true
        }, transition: {
          delay: i * 0.05
        }, className: "group relative aspect-square overflow-hidden rounded-sm cursor-pointer", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("img", { src: photo, alt: `${t("gallery.instagram.photo_alt")} ${i + 1}`, loading: "lazy", className: "h-full w-full object-cover transition-transform duration-700 group-hover:scale-110" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute inset-0 light bg-[#1a1510]/60 opacity-0 transition-opacity group-hover:opacity-100 flex items-center justify-center", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Instagram, { className: "h-5 w-5 sm:h-6 sm:w-6 text-white" }) })
        ] }, i)) })
      ] }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(AnimatePresence, { children: open !== null && items[open] && /* @__PURE__ */ jsxRuntimeExports.jsxs(motion.div, { initial: {
        opacity: 0
      }, animate: {
        opacity: 1
      }, exit: {
        opacity: 0
      }, transition: {
        duration: 0.3
      }, onClick: () => setOpen(null), className: "fixed inset-0 z-50 flex items-center justify-center bg-black/95 backdrop-blur-md", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(motion.button, { whileHover: {
          scale: 1.1,
          backgroundColor: "rgba(255,255,255,0.2)"
        }, whileTap: {
          scale: 0.9
        }, onClick: (e) => {
          e.stopPropagation();
          setOpen(null);
        }, className: "absolute right-3 sm:right-5 top-3 sm:top-5 rounded-full border border-white/30 p-2 sm:p-2.5 text-white transition-colors", children: /* @__PURE__ */ jsxRuntimeExports.jsx(X, { className: "h-4 w-4 sm:h-5 sm:w-5" }) }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(motion.button, { whileHover: {
          scale: 1.1,
          backgroundColor: "rgba(255,255,255,0.2)"
        }, whileTap: {
          scale: 0.9
        }, onClick: (e) => {
          e.stopPropagation();
          prev();
        }, className: "absolute left-2 sm:left-5 top-1/2 -translate-y-1/2 rounded-full border border-white/30 p-2 sm:p-2.5 text-white transition-colors", children: /* @__PURE__ */ jsxRuntimeExports.jsx(ChevronLeft, { className: "h-5 w-5 sm:h-6 sm:w-6" }) }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(motion.button, { whileHover: {
          scale: 1.1,
          backgroundColor: "rgba(255,255,255,0.2)"
        }, whileTap: {
          scale: 0.9
        }, onClick: (e) => {
          e.stopPropagation();
          next();
        }, className: "absolute right-2 sm:right-5 top-1/2 -translate-y-1/2 rounded-full border border-white/30 p-2 sm:p-2.5 text-white transition-colors", children: /* @__PURE__ */ jsxRuntimeExports.jsx(ChevronRight, { className: "h-5 w-5 sm:h-6 sm:w-6" }) }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(motion.img, { initial: {
          opacity: 0,
          scale: 0.9
        }, animate: {
          opacity: 1,
          scale: 1
        }, exit: {
          opacity: 0,
          scale: 0.9
        }, transition: {
          type: "spring",
          stiffness: 300,
          damping: 25
        }, src: items[open]?.image, alt: items[open]?.title, onClick: (e) => e.stopPropagation(), className: "max-h-[85vh] sm:max-h-[88vh] max-w-[90vw] sm:max-w-[92vw] rounded-sm object-contain shadow-2xl" }, items[open]?.id)
      ] }) })
    ] })
  ] });
}
export {
  GalleryPage as component
};
