import { jsxs, Fragment, jsx } from "react/jsx-runtime";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronRight, ChevronLeft, Coffee, IceCream, Fish, Croissant, Flame, Wheat, ChefHat, Search, Star, Leaf } from "lucide-react";
import { useState, useMemo, useRef } from "react";
import { useTranslation } from "react-i18next";
import { u as useMenu } from "./useMenu-CkRVOVtN.js";
import { c as cn } from "./router-DJDDa_aZ.js";
import { B as BGZ } from "./BGZ-CG54wZoT.js";
import "@tanstack/react-query";
import "./strapi-DoZBEunp.js";
import "@tanstack/react-router";
import "clsx";
import "tailwind-merge";
import "@radix-ui/react-switch";
const containerVariants = {
  hidden: {
    opacity: 0
  },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.08,
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
    y: -8,
    transition: {
      type: "spring",
      stiffness: 400,
      damping: 25
    }
  }
};
const categoryIcons = {
  "Starters": Flame,
  "Tagines": ChefHat,
  "Couscous": Wheat,
  "Grills": Flame,
  "Pastilla": Croissant,
  "Seafood": Fish,
  "Desserts": IceCream,
  "Drinks": Coffee
};
function MenuPage() {
  const {
    t,
    i18n
  } = useTranslation();
  const isRTL = i18n.dir() === "rtl";
  const getName = (dish) => {
    switch (i18n.language) {
      case "fr":
        return dish.name_fr || dish.name_en;
      case "ar":
        return dish.name_ar || dish.name_en;
      default:
        return dish.name_en;
    }
  };
  const getDescription = (dish) => {
    switch (i18n.language) {
      case "fr":
        return dish.description_fr || dish.description_en;
      case "ar":
        return dish.description_ar || dish.description_en;
      default:
        return dish.description_en;
    }
  };
  const {
    data: MENU = []
  } = useMenu();
  const [cat, setCat] = useState("All");
  const CATEGORIES = useMemo(() => ["All", ...new Set(MENU.map((item) => item.category))], [MENU]);
  const [q, setQ] = useState("");
  const menuSectionRef = useRef(null);
  const catsRef = useRef(null);
  const catButtonRefs = useRef([]);
  const scrollCats = (direction) => {
    const currentIndex = CATEGORIES.indexOf(cat);
    const nextIndex = direction === "right" ? (currentIndex + 1) % CATEGORIES.length : (currentIndex - 1 + CATEGORIES.length) % CATEGORIES.length;
    setCat(CATEGORIES[nextIndex]);
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
  const items = useMemo(() => {
    return MENU.filter((m) => cat === "All" ? true : m.category === cat).filter((m) => q.trim() ? (getName(m) + " " + getDescription(m)).toLowerCase().includes(q.toLowerCase()) : true);
  }, [cat, q, MENU]);
  return /* @__PURE__ */ jsxs(Fragment, { children: [
    /* @__PURE__ */ jsxs("section", { className: "hero-section relative min-h-70 sm:h-[80dvh] overflow-hidden", children: [
      /* @__PURE__ */ jsx(motion.div, { className: "absolute inset-0 bg-cover bg-center bg-fixed", style: {
        backgroundImage: "url('https://images.unsplash.com/photo-1511690743698-d9d85f2fbf38')"
      }, initial: {
        scale: 1.1
      }, animate: {
        scale: 1
      }, transition: {
        duration: 2.5,
        ease: "easeOut"
      } }),
      /* @__PURE__ */ jsx("div", { className: "absolute inset-0 bg-linear-to-b from-[#1a1510]/90 via-[#1a1510]/70 to-[#1a1510]" }),
      /* @__PURE__ */ jsx("div", { className: "absolute inset-0 opacity-[0.03]", style: {
        backgroundImage: `repeating-linear-gradient(45deg, transparent, transparent 20px, rgba(255,255,255,0.1) 20px, rgba(255,255,255,0.1) 21px), repeating-linear-gradient(-45deg, transparent, transparent 20px, rgba(255,255,255,0.1) 20px, rgba(255,255,255,0.1) 21px)`
      } }),
      /* @__PURE__ */ jsx("div", { className: "relative z-10 mx-auto w-[92%] max-w-350 px-4 sm:px-6 lg:px-8 flex flex-col justify-center items-center min-h-70 sm:min-h-0 pt-6 sm:pt-16 md:pt-20 lg:pt-24 pb-6 sm:pb-16 md:pb-20 lg:pb-24", children: /* @__PURE__ */ jsxs(motion.div, { variants: containerVariants, initial: "hidden", animate: "show", className: "mx-auto max-w-3xl text-center", children: [
        /* @__PURE__ */ jsxs(motion.div, { variants: itemVariants, className: "mt-2 sm:mt-3 mb-2 sm:mb-3 flex items-center justify-center gap-2 sm:gap-3", children: [
          /* @__PURE__ */ jsx("span", { className: "h-px w-6 sm:w-10 md:w-12 bg-gold/60" }),
          /* @__PURE__ */ jsx("span", { className: "text-[9px] sm:text-[10px] md:text-xs uppercase tracking-[0.25em] sm:tracking-[0.35em] text-gold/80", children: t("menu.hero.badge") }),
          /* @__PURE__ */ jsx("span", { className: "h-px w-6 sm:w-10 md:w-12 bg-gold/60" })
        ] }),
        /* @__PURE__ */ jsxs(motion.h1, { variants: itemVariants, className: "font-display text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl leading-[1.15] sm:leading-tight text-white", children: [
          t("menu.hero.title_line1"),
          /* @__PURE__ */ jsx("br", {}),
          /* @__PURE__ */ jsx("em", { className: "not-italic text-gold", children: t("menu.hero.title_line2") })
        ] }),
        /* @__PURE__ */ jsx(motion.p, { variants: itemVariants, className: "mx-auto mt-3 sm:mt-4 md:mt-5 max-w-lg sm:max-w-xl md:max-w-2xl px-2 text-xs sm:text-sm md:text-base lg:text-lg leading-relaxed text-white/70", children: t("menu.hero.description") })
      ] }) })
    ] }),
    /* @__PURE__ */ jsx("section", { ref: menuSectionRef, className: "relative z-10 bg-[#1a1510]/95 backdrop-blur-md border-b border-white/5", children: /* @__PURE__ */ jsx("div", { className: "mx-auto max-w-7xl px-4 sm:px-6 lg:px-12", children: /* @__PURE__ */ jsxs("div", { className: "flex items-center justify-between py-3 sm:py-4", children: [
      /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-2 flex-1 min-w-0", children: [
        /* @__PURE__ */ jsx(motion.button, { whileHover: {
          scale: 1.1,
          backgroundColor: "rgba(255,255,255,0.1)"
        }, whileTap: {
          scale: 0.9
        }, onClick: () => scrollCats(isRTL ? "right" : "left"), "aria-label": isRTL ? "Next category" : "Previous category", className: "sm:hidden shrink-0 p-1.5 text-white/45 hover:text-gold active:text-gold transition-colors duration-300 cursor-pointer rounded-full", children: isRTL ? /* @__PURE__ */ jsx(ChevronRight, { className: "h-5 w-5", strokeWidth: 2.5 }) : /* @__PURE__ */ jsx(ChevronLeft, { className: "h-5 w-5", strokeWidth: 2.5 }) }),
        /* @__PURE__ */ jsx("div", { ref: catsRef, className: "hide-scrollbar flex gap-2 overflow-x-auto scroll-smooth snap-x snap-mandatory px-1", dir: "ltr", children: CATEGORIES.map((c, index) => {
          const Icon = c === "All" ? null : categoryIcons[c] || ChefHat;
          const isActive = cat === c;
          return /* @__PURE__ */ jsxs(motion.button, { ref: (el) => {
            catButtonRefs.current[index] = el;
          }, onClick: () => setCat(c), layout: true, whileHover: {
            scale: 1.05
          }, whileTap: {
            scale: 0.95
          }, className: cn("relative shrink-0 cursor-pointer rounded-sm px-3 sm:px-5 py-1.5 sm:py-2 text-[10px] sm:text-[11px] uppercase tracking-[0.12em] sm:tracking-[0.15em] font-medium transition-colors duration-200 flex items-center gap-2", isActive ? "text-gold-foreground" : "light:bg-gray-50/70 light:text-slate-600 border light:border-slate-200/60 bg-white/5 text-white/60 hover:bg-white/10 hover:text-white border border-white/10"), children: [
            isActive && /* @__PURE__ */ jsx(motion.div, { layoutId: "activeCategoryPill", className: "absolute inset-0 bg-gold rounded-sm", transition: {
              type: "spring",
              stiffness: 300,
              damping: 30
            } }),
            /* @__PURE__ */ jsxs("span", { className: "relative z-10 flex items-center gap-2", children: [
              Icon && /* @__PURE__ */ jsx(Icon, { className: "h-3.5 w-3.5" }),
              c === "All" ? t("menu.filter.all") : t(`menu.categories.${c.toLowerCase().replace(/[\s-]+/g, "_")}`)
            ] })
          ] }, c);
        }) }),
        /* @__PURE__ */ jsx(motion.button, { whileHover: {
          scale: 1.1,
          backgroundColor: "rgba(255,255,255,0.1)"
        }, whileTap: {
          scale: 0.9
        }, onClick: () => scrollCats(isRTL ? "left" : "right"), "aria-label": isRTL ? "Previous category" : "Next category", className: "sm:hidden shrink-0 p-1.5 text-white/45 hover:text-gold active:text-gold transition-colors duration-300 cursor-pointer rounded-full", children: isRTL ? /* @__PURE__ */ jsx(ChevronLeft, { className: "h-5 w-5", strokeWidth: 2.5 }) : /* @__PURE__ */ jsx(ChevronRight, { className: "h-5 w-5", strokeWidth: 2.5 }) })
      ] }),
      /* @__PURE__ */ jsx(motion.span, { initial: {
        opacity: 0
      }, animate: {
        opacity: 1
      }, transition: {
        delay: 0.5
      }, className: "hidden sm:block text-xs text-white/40 shrink-0 ml-4", children: t("gallery.filter.showing", {
        visible: items.length,
        total: MENU.length
      }) })
    ] }) }) }),
    /* @__PURE__ */ jsxs("section", { className: "relative light py-14 bg-[#1a1510]", children: [
      /* @__PURE__ */ jsx("div", { className: "fixed inset-0 opacity-10 pointer-events-none", style: {
        backgroundImage: `url(${BGZ})`,
        backgroundRepeat: "repeat",
        backgroundSize: "650px"
      } }),
      /* @__PURE__ */ jsx("div", { className: "absolute inset-0 bg-black/20 pointer-events-none" }),
      /* @__PURE__ */ jsxs("div", { className: "relative mx-auto max-w-7xl px-6 lg:px-12", children: [
        /* @__PURE__ */ jsxs(motion.div, { initial: {
          opacity: 0,
          y: 20
        }, whileInView: {
          opacity: 1,
          y: 0
        }, viewport: {
          once: true,
          margin: "-50px"
        }, transition: {
          type: "spring",
          stiffness: 60,
          damping: 20
        }, className: "mb-8 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between", children: [
          /* @__PURE__ */ jsxs("div", { children: [
            /* @__PURE__ */ jsx(motion.p, { initial: {
              opacity: 0,
              x: -10
            }, whileInView: {
              opacity: 1,
              x: 0
            }, viewport: {
              once: true
            }, transition: {
              delay: 0.1
            }, className: "text-[10px] uppercase tracking-[0.35em] text-gold/80 mb-2", children: cat === "All" ? t("menu.categories.starters") : t(`menu.categories.${cat.toLowerCase().replace(/[\s-]+/g, "_")}`) }),
            /* @__PURE__ */ jsxs(motion.h2, { initial: {
              opacity: 0,
              x: -10
            }, whileInView: {
              opacity: 1,
              x: 0
            }, viewport: {
              once: true
            }, transition: {
              delay: 0.2
            }, className: "font-display text-3xl text-white sm:text-4xl", children: [
              cat === "All" ? t("menu.subtitle.cold_warm") : t(`menu.categories.${cat.toLowerCase().replace(/[\s-]+/g, "_")}`),
              /* @__PURE__ */ jsxs("em", { className: "not-italic text-gold", children: [
                " ",
                cat === "All" ? t("menu.subtitle.starters") : ""
              ] })
            ] })
          ] }),
          /* @__PURE__ */ jsxs(motion.div, { initial: {
            opacity: 0,
            x: 10
          }, whileInView: {
            opacity: 1,
            x: 0
          }, viewport: {
            once: true
          }, transition: {
            delay: 0.2
          }, className: "relative w-full sm:w-72 group", children: [
            /* @__PURE__ */ jsx(Search, { className: "pointer-events-none absolute left-4 top-1/2 h-4 w-4 -translate-y-1/2 text-white/40 group-focus-within:text-gold transition-colors duration-300" }),
            /* @__PURE__ */ jsx("input", { value: q, onChange: (e) => setQ(e.target.value), placeholder: t("menu.search.placeholder"), className: "w-full rounded-sm border border-white/10 bg-white/5 py-3 pl-11 pr-4 text-sm text-white placeholder:text-white/40 focus:border-gold/50 focus:outline-none focus:bg-white/10 transition-all duration-300" })
          ] })
        ] }),
        /* @__PURE__ */ jsx(AnimatePresence, { mode: "popLayout", children: items.length === 0 ? /* @__PURE__ */ jsx(motion.p, { initial: {
          opacity: 0,
          y: 20
        }, animate: {
          opacity: 1,
          y: 0
        }, exit: {
          opacity: 0,
          y: -20
        }, className: "py-20 text-center text-white/40", children: t("menu.empty", {
          query: q
        }) }, "empty") : /* @__PURE__ */ jsx(motion.div, { layout: true, variants: containerVariants, initial: "hidden", whileInView: "show", viewport: {
          once: true,
          margin: "-50px"
        }, className: "grid gap-5 sm:grid-cols-2 lg:grid-cols-3", children: items.map((dish, index) => /* @__PURE__ */ jsxs(motion.article, { layout: true, variants: cardHoverVariants, initial: "rest", whileHover: "hover", className: "group relative overflow-hidden rounded-sm border border-white/10 bg-[#1a1510] transition-colors duration-300 hover:border-gold/30 hover:shadow-2xl hover:shadow-gold/5", children: [
          /* @__PURE__ */ jsxs("div", { className: "relative aspect-4/3 overflow-hidden", children: [
            /* @__PURE__ */ jsx(motion.img, { src: dish.image, alt: getName(dish), loading: "lazy", className: "h-full w-full object-cover", whileHover: {
              scale: 1.08
            }, transition: {
              duration: 0.6,
              ease: "easeOut"
            } }),
            /* @__PURE__ */ jsx("div", { className: "absolute inset-0 bg-linear-to-t from-[#1a1510] via-transparent to-transparent" }),
            /* @__PURE__ */ jsxs("div", { className: "absolute left-4 top-4 flex gap-2", children: [
              dish.popular && /* @__PURE__ */ jsxs(motion.span, { initial: {
                opacity: 0,
                x: -10
              }, whileInView: {
                opacity: 1,
                x: 0
              }, viewport: {
                once: true
              }, transition: {
                delay: 0.3 + index * 0.05
              }, className: "inline-flex items-center gap-1 rounded-sm bg-gold/90 px-3 py-1 text-[9px] font-semibold uppercase tracking-wider text-gold-foreground shadow-lg", children: [
                /* @__PURE__ */ jsx(Star, { className: "h-3 w-3 fill-current" }),
                " ",
                t("menu.item.popular")
              ] }),
              dish.spicy && /* @__PURE__ */ jsxs(motion.span, { initial: {
                opacity: 0,
                x: -10
              }, whileInView: {
                opacity: 1,
                x: 0
              }, viewport: {
                once: true
              }, transition: {
                delay: 0.4 + index * 0.05
              }, className: "inline-flex items-center gap-1 rounded-sm bg-red-900/90 px-3 py-1 text-[9px] font-semibold uppercase tracking-wider text-white shadow-lg", children: [
                /* @__PURE__ */ jsx(Flame, { className: "h-3 w-3 fill-current" }),
                " ",
                t("menu.item.spicy")
              ] }),
              dish.vegetarian && /* @__PURE__ */ jsxs(motion.span, { initial: {
                opacity: 0,
                x: -10
              }, whileInView: {
                opacity: 1,
                x: 0
              }, viewport: {
                once: true
              }, transition: {
                delay: 0.5 + index * 0.05
              }, className: "inline-flex items-center gap-1 rounded-sm bg-green-900/90 px-3 py-1 text-[9px] font-semibold uppercase tracking-wider text-white shadow-lg", children: [
                /* @__PURE__ */ jsx(Leaf, { className: "h-3 w-3 fill-current" }),
                " ",
                t("menu.item.vegetarian")
              ] })
            ] }),
            /* @__PURE__ */ jsx(motion.div, { initial: {
              opacity: 0,
              y: -10
            }, whileInView: {
              opacity: 1,
              y: 0
            }, viewport: {
              once: true
            }, transition: {
              delay: 0.2 + index * 0.05
            }, className: "absolute right-4 top-4 rounded-sm bg-[#1a1510]/90 backdrop-blur-sm px-3 py-1.5 border border-white/10 shadow-lg", children: /* @__PURE__ */ jsxs("span", { className: "font-display text-lg text-gold", children: [
              dish.price,
              " ",
              t("menu.currency")
            ] }) })
          ] }),
          /* @__PURE__ */ jsxs("div", { className: "p-5", children: [
            /* @__PURE__ */ jsx("div", { className: "mb-3 flex items-start justify-between gap-3", children: /* @__PURE__ */ jsx(motion.h3, { className: "font-display text-xl leading-tight text-white group-hover:text-gold transition-colors duration-300", children: getName(dish) }) }),
            /* @__PURE__ */ jsx("p", { className: "mb-4 line-clamp-2 text-sm leading-relaxed text-white/60", children: getDescription(dish) }),
            /* @__PURE__ */ jsx("div", { className: "flex items-center justify-between", children: /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-1", children: [
              [...Array(5)].map((_, i) => /* @__PURE__ */ jsx(motion.div, { initial: {
                opacity: 0,
                scale: 0
              }, whileInView: {
                opacity: 1,
                scale: 1
              }, viewport: {
                once: true
              }, transition: {
                delay: 0.1 + i * 0.03,
                duration: 0.2,
                type: "spring",
                stiffness: 500,
                damping: 15
              }, children: /* @__PURE__ */ jsx(Star, { className: cn("h-3.5 w-3.5", i < Math.floor(dish.rating || 4.5) ? "fill-gold text-gold" : "text-white/20") }) }, i)),
              /* @__PURE__ */ jsxs(motion.span, { initial: {
                opacity: 0,
                x: -4
              }, whileInView: {
                opacity: 1,
                x: 0
              }, viewport: {
                once: true
              }, transition: {
                delay: 0.28 + index * 0.03,
                duration: 0.25,
                ease: "easeOut"
              }, className: "ml-2 text-xs font-medium text-slate-500", children: [
                "(",
                dish.rating || 24,
                ")"
              ] })
            ] }) })
          ] })
        ] }, dish.id)) }) })
      ] })
    ] })
  ] });
}
export {
  MenuPage as component
};
