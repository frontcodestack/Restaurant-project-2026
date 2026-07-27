import { r as reactExports, j as jsxRuntimeExports } from "../_libs/react.mjs";
import { L as Link } from "../_libs/tanstack__react-router.mjs";
import { B as BGZ } from "./BGZ-CG54wZoT.mjs";
import { a as chefImg, c as courtyardImg, s as spicesImg } from "./gallery-spices-C3f1oNX6.mjs";
import { u as useMenu } from "./useMenu-CkRVOVtN.mjs";
import { a as axios } from "../_libs/axios.mjs";
import { u as useTranslation } from "../_libs/react-i18next.mjs";
import { m as motion, A as AnimatePresence } from "../_libs/framer-motion.mjs";
import { e as Clock, b as MapPin, P as Phone, A as ArrowRight, i as Star, U as Users, v as Music, g as CircleCheck } from "../_libs/lucide-react.mjs";
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
import "../_libs/tanstack__react-query.mjs";
import "../_libs/tanstack__query-core.mjs";
import "./strapi-DoZBEunp.mjs";
import "../_libs/form-data.mjs";
import "fs";
import "../_libs/combined-stream.mjs";
import "../_libs/delayed-stream.mjs";
import "path";
import "http";
import "https";
import "url";
import "../_libs/mime-types.mjs";
import "../_libs/mime-db.mjs";
import "../_libs/asynckit.mjs";
import "../_libs/es-set-tostringtag.mjs";
import "../_libs/get-intrinsic.mjs";
import "../_libs/es-object-atoms.mjs";
import "../_libs/es-errors.mjs";
import "../_libs/math-intrinsics.mjs";
import "../_libs/gopd.mjs";
import "../_libs/es-define-property.mjs";
import "../_libs/has-symbols.mjs";
import "../_libs/get-proto.mjs";
import "../_libs/dunder-proto.mjs";
import "../_libs/call-bind-apply-helpers.mjs";
import "../_libs/function-bind.mjs";
import "../_libs/hasown.mjs";
import "../_libs/has-tostringtag.mjs";
import "../_libs/proxy-from-env.mjs";
import "../_libs/https-proxy-agent.mjs";
import "net";
import "tls";
import "assert";
import "../_libs/debug.mjs";
import "../_libs/ms.mjs";
import "tty";
import "../_libs/supports-color.mjs";
import "os";
import "../_libs/has-flag.mjs";
import "../_libs/agent-base.mjs";
import "events";
import "http2";
import "../_libs/follow-redirects.mjs";
import "zlib";
import "../_libs/use-sync-external-store.mjs";
import "../_libs/motion-dom.mjs";
import "../_libs/motion-utils.mjs";
const heroImg = "/assets/hero-riad-CL9VajOJ.jpg";
const lanternsImg = "/assets/gallery-lanterns-B4enZmGW.jpg";
const containerVariants = {
  hidden: {
    opacity: 0
  },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.12,
      delayChildren: 0.1
    }
  }
};
const itemVariants = {
  hidden: {
    opacity: 0,
    y: 40
  },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      type: "spring",
      stiffness: 60,
      damping: 20,
      duration: 0.8
    }
  }
};
const imageRevealVariants = {
  hidden: {
    opacity: 0,
    scale: 1.1
  },
  show: {
    opacity: 1,
    scale: 1,
    transition: {
      duration: 1.2,
      ease: [0.22, 1, 0.36, 1]
    }
  }
};
const heroTextVariants = {
  hidden: {
    opacity: 0,
    y: 60
  },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      type: "spring",
      stiffness: 50,
      damping: 25,
      duration: 1
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
const TIMES = ["19:00", "19:30", "20:00", "20:30", "21:00", "21:30"];
function Counter({
  to,
  suffix = ""
}) {
  const [val, setVal] = reactExports.useState(0);
  const ref = reactExports.useRef(null);
  reactExports.useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const io = new IntersectionObserver(([e]) => {
      if (!e.isIntersecting) return;
      const start = performance.now();
      const dur = 2e3;
      const step = (t) => {
        const p = Math.min(1, (t - start) / dur);
        setVal(Math.round(to * (1 - Math.pow(1 - p, 3))));
        if (p < 1) requestAnimationFrame(step);
      };
      requestAnimationFrame(step);
      io.disconnect();
    }, {
      threshold: 0.3
    });
    io.observe(el);
    return () => io.disconnect();
  }, [to]);
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(motion.span, { ref, initial: {
    opacity: 0,
    scale: 0.5
  }, whileInView: {
    opacity: 1,
    scale: 1
  }, viewport: {
    once: true
  }, transition: {
    type: "spring",
    stiffness: 200,
    damping: 15
  }, children: [
    val,
    suffix
  ] });
}
function SectionLabel({
  text,
  light = false
}) {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(motion.div, { variants: itemVariants, className: "flex items-center justify-center gap-4 mb-3", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: `h-px w-8 ${light ? "bg-foreground/30" : "bg-gold/50"}` }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: `text-[10px] uppercase tracking-[0.35em] ${light ? "text-foreground/60" : "text-gold/80"}`, children: text }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: `h-px w-8 ${light ? "bg-foreground/30" : "bg-gold/50"}` })
  ] });
}
function Index() {
  const {
    t,
    i18n
  } = useTranslation();
  const {
    data: menu = []
  } = useMenu();
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
  const featured = menu.filter((m) => m.popular).slice(0, 3);
  const [sent, setSent] = reactExports.useState(false);
  const [form, setForm] = reactExports.useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    date: "",
    time: "19:30",
    guests: 2,
    notes: ""
  });
  const [err, setErr] = reactExports.useState(null);
  const update = (k, v) => setForm((f) => ({
    ...f,
    [k]: v
  }));
  const today = (/* @__PURE__ */ new Date()).toISOString().slice(0, 10);
  const submit = async (e) => {
    e.preventDefault();
    setErr(null);
    if (!form.firstName.trim() || !form.lastName.trim() || !form.email.includes("@") || !form.date) {
      setErr(t("home.booking.error") || "Please fill in all required fields.");
      return;
    }
    try {
      const response = await axios.post("http://localhost:5000/send-reservation-email", form);
      if (response.data.success) {
        setSent(true);
        setForm({
          firstName: "",
          lastName: "",
          email: "",
          phone: "",
          date: "",
          time: "19:30",
          guests: 2,
          notes: ""
        });
      }
    } catch (err2) {
      console.error(err2);
      setErr(t("home.booking.submit_error") || "Something went wrong. Please try again.");
    }
  };
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("section", { className: "hero-section relative min-h-screen overflow-hidden", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(motion.img, { src: heroImg, alt: t("home.hero.image_alt"), className: "absolute inset-0 h-full w-full object-cover", fetchPriority: "high", initial: {
        scale: 1.15
      }, animate: {
        scale: 1
      }, transition: {
        duration: 2.5,
        ease: "easeOut"
      } }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute inset-0 bg-linear-to-b from-black/50 via-black/30 to-black/70" }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative z-10 flex flex-col items-center justify-center min-h-screen px-6 text-center", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs(motion.div, { variants: containerVariants, initial: "hidden", animate: "show", className: "max-w-4xl", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(motion.p, { variants: heroTextVariants, className: "text-gold/80 text-sm mb-3 font-display italic", children: "— طعم من أصالة —" }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs(motion.h1, { variants: heroTextVariants, className: "font-display text-5xl leading-[1.1] text-white sm:text-6xl md:text-7xl lg:text-8xl", children: [
            t("home.hero.title_line1"),
            /* @__PURE__ */ jsxRuntimeExports.jsx("br", {}),
            /* @__PURE__ */ jsxRuntimeExports.jsx("em", { className: "not-italic text-gold", children: t("home.hero.title_line2") })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(motion.p, { variants: heroTextVariants, className: "mt-4 max-w-2xl mx-auto text-base leading-relaxed text-white/70 sm:text-lg", children: t("home.hero.description") }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs(motion.div, { variants: heroTextVariants, className: "mt-8 flex flex-wrap items-center justify-center gap-4", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(Link, { to: "/reservations", className: "inline-flex items-center gap-2 rounded-sm bg-gold px-8 py-3.5 text-[11px] uppercase tracking-[0.2em] font-semibold text-gold-foreground shadow-xl transition-transform hover:scale-[1.03]", children: t("home.hero.cta_primary") }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(Link, { to: "/menu", className: "inline-flex link-menu items-center gap-2 rounded-sm border border-white/40 bg-transparent px-8 py-3.5 text-[11px] uppercase tracking-[0.2em] font-semibold text-white transition-colors hover:bg-white/10", children: t("home.hero.cta_secondary") })
          ] })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs(motion.div, { initial: {
          opacity: 0,
          y: 20
        }, animate: {
          opacity: 1,
          y: 0
        }, transition: {
          delay: 1.2,
          duration: 0.8
        }, className: "absolute bottom-0 left-0 right-0 flex flex-wrap items-center justify-center gap-6 border-t border-white/20 bg-black/40 backdrop-blur-sm px-6 py-3 text-xs text-white/70", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "flex items-center gap-2", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(Clock, { className: "h-3.5 w-3.5 text-gold" }),
            t("home.hero.open_hours")
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "flex items-center gap-2", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(MapPin, { className: "h-3.5 w-3.5 text-gold" }),
            t("home.hero.location")
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "flex items-center gap-2", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(Phone, { className: "h-3.5 w-3.5 text-gold" }),
            "+212 524 389 214"
          ] })
        ] })
      ] })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative overflow-hidden dark:bg-[#1a1510]", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "fixed inset-0 opacity-10 pointer-events-none", style: {
        backgroundImage: `url(${BGZ})`,
        backgroundRepeat: "repeat",
        backgroundSize: "650px"
      } }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute inset-0 dark:bg-black/20 bg-white/90 pointer-events-none" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("section", { className: "light relative py-10 sm:py-12 dark:bg-transparent", children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "relative mx-auto max-w-7xl px-6 lg:px-12", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid gap-10 lg:grid-cols-2 lg:items-center lg:gap-16", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs(motion.div, { variants: containerVariants, initial: "hidden", whileInView: "show", viewport: {
          once: true,
          margin: "-100px"
        }, className: "relative", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(motion.div, { variants: imageRevealVariants, className: "relative mx-auto max-w-md overflow-hidden rounded-t-[50%] rounded-b-lg border-4 border-gold/20 shadow-2xl", style: {
            clipPath: "polygon(0% 15%, 50% 0%, 100% 15%, 100% 100%, 0% 100%)"
          }, children: /* @__PURE__ */ jsxRuntimeExports.jsx("img", { src: chefImg, alt: t("home.chef.image_alt"), loading: "lazy", className: "h-full w-full object-cover" }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs(motion.div, { variants: itemVariants, className: "absolute -bottom-3 left-1/2 -translate-x-1/2 rounded-sm bg-[#1a1510] px-5 py-3 text-center shadow-xl", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "font-display text-2xl text-gold", children: "25+" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-[10px] uppercase tracking-widest text-white/60", children: t("home.chef.years_label") })
          ] })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs(motion.div, { variants: containerVariants, initial: "hidden", whileInView: "show", viewport: {
          once: true,
          margin: "-100px"
        }, children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(SectionLabel, { text: t("home.story.label") }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs(motion.h2, { variants: itemVariants, className: "font-display text-3xl leading-tight text-balance sm:text-4xl text-white", children: [
            t("home.story.title_line1"),
            /* @__PURE__ */ jsxRuntimeExports.jsx("br", {}),
            /* @__PURE__ */ jsxRuntimeExports.jsx("em", { className: "not-italic text-gold", children: t("home.story.title_line2") })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(motion.p, { variants: itemVariants, className: "mt-4 text-sm leading-relaxed text-white/80", children: t("home.chef.description") }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(motion.div, { variants: itemVariants, className: "mt-6 grid grid-cols-3 gap-3", children: [{
            n: 120,
            s: "+",
            l: t("home.stats.dishes")
          }, {
            n: 4.9,
            s: "",
            l: t("home.stats.rating")
          }, {
            n: 50,
            s: "k+",
            l: t("home.stats.guests")
          }].map((it) => /* @__PURE__ */ jsxRuntimeExports.jsxs(motion.div, { whileHover: {
            y: -4,
            borderColor: "rgba(255,215,0,0.4)"
          }, transition: {
            type: "spring",
            stiffness: 300,
            damping: 20
          }, className: "rounded-sm border border-white/20 bg-white/10 p-3 text-center backdrop-blur-sm", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "font-display text-xl text-white sm:text-2xl", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Counter, { to: it.n, suffix: it.s }) }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-0.5 text-[10px] uppercase tracking-widest text-white/70", children: it.l })
          ] }, it.l)) }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(motion.div, { variants: itemVariants, children: /* @__PURE__ */ jsxRuntimeExports.jsxs(Link, { to: "/about", className: "mt-6 inline-flex items-center gap-2 text-[11px] font-medium uppercase tracking-[0.2em] text-white transition-colors hover:text-gold group", children: [
            t("home.chef.story_link"),
            /* @__PURE__ */ jsxRuntimeExports.jsx(ArrowRight, { className: "h-3.5 w-3.5 transition-transform group-hover:translate-x-1" })
          ] }) })
        ] })
      ] }) }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("section", { className: "relative light py-10 sm:py-12 bg-transparent", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative mx-auto max-w-7xl px-6 lg:px-12", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs(motion.div, { variants: containerVariants, initial: "hidden", whileInView: "show", viewport: {
          once: true,
          margin: "-50px"
        }, className: "text-center mb-8", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(SectionLabel, { text: t("home.experience.label") }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs(motion.h2, { variants: itemVariants, className: "font-display text-3xl leading-tight text-balance text-white sm:text-4xl", children: [
            t("home.experience.title_line1"),
            /* @__PURE__ */ jsxRuntimeExports.jsx("br", {}),
            /* @__PURE__ */ jsxRuntimeExports.jsx("em", { className: "not-italic text-gold", children: t("home.experience.title_line2") })
          ] })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs(motion.div, { variants: containerVariants, initial: "hidden", whileInView: "show", viewport: {
          once: true,
          margin: "-50px"
        }, className: "grid gap-3 lg:grid-cols-[1.2fr_1fr]", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(motion.div, { variants: itemVariants, className: "relative aspect-4/3 overflow-hidden rounded-sm shadow-xl group", children: /* @__PURE__ */ jsxRuntimeExports.jsx(motion.img, { src: courtyardImg, alt: t("home.gallery.images.courtyard"), loading: "lazy", className: "h-full w-full object-cover", whileHover: {
            scale: 1.08
          }, transition: {
            duration: 0.7,
            ease: "easeOut"
          } }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid grid-cols-2 gap-3", children: [{
            src: lanternsImg,
            alt: t("home.gallery.images.lanterns")
          }, {
            src: spicesImg,
            alt: t("home.gallery.images.spices"),
            caption: t("home.gallery.captions.rooftop")
          }, {
            src: chefImg,
            alt: t("home.gallery.captions.live_music_alt"),
            caption: t("home.gallery.captions.live_music")
          }, {
            src: featured[0]?.image || courtyardImg,
            alt: t("home.gallery.captions.signature_dishes_alt"),
            caption: t("home.gallery.captions.signature_dishes")
          }].map((img, i) => /* @__PURE__ */ jsxRuntimeExports.jsx(motion.div, { variants: itemVariants, custom: i, className: "relative aspect-4/3 overflow-hidden rounded-sm shadow-lg group", children: /* @__PURE__ */ jsxRuntimeExports.jsx(motion.img, { src: img.src, alt: img.alt, loading: "lazy", className: "h-full w-full object-cover", whileHover: {
            scale: 1.08
          }, transition: {
            duration: 0.7,
            ease: "easeOut"
          } }) }, i)) })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(motion.div, { variants: itemVariants, initial: "hidden", whileInView: "show", viewport: {
          once: true
        }, className: "mt-8 text-center", children: /* @__PURE__ */ jsxRuntimeExports.jsxs(Link, { to: "/gallery", className: "inline-flex items-center gap-2 text-[11px] uppercase tracking-[0.2em] font-medium dark text-white hover:text-gold transition-colors group", children: [
          t("home.gallery.see_gallery"),
          /* @__PURE__ */ jsxRuntimeExports.jsx(ArrowRight, { className: "h-3.5 w-3.5 transition-transform group-hover:translate-x-1" })
        ] }) })
      ] }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("section", { className: "relative light overflow-hidden bg-transparent py-10 sm:py-12", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "py-10 sm:py-12", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mx-auto max-w-7xl px-6 lg:px-12", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs(motion.div, { variants: containerVariants, initial: "hidden", whileInView: "show", viewport: {
            once: true,
            margin: "-50px"
          }, className: "text-center mb-8", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(SectionLabel, { text: t("home.featured.label") }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs(motion.h2, { variants: itemVariants, className: "font-display text-3xl sm:text-4xl text-white", children: [
              t("home.featured.title_line1"),
              /* @__PURE__ */ jsxRuntimeExports.jsx("br", {}),
              /* @__PURE__ */ jsxRuntimeExports.jsx("em", { className: "not-italic text-gold", children: t("home.featured.title_line2") })
            ] })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(motion.div, { variants: containerVariants, initial: "hidden", whileInView: "show", viewport: {
            once: true,
            margin: "-50px"
          }, className: "grid gap-4 sm:grid-cols-2 lg:grid-cols-3", children: featured.map((dish, i) => /* @__PURE__ */ jsxRuntimeExports.jsx(motion.article, { custom: i, initial: "rest", whileHover: "hover", animate: "rest", variants: cardHoverVariants, className: "group relative overflow-hidden rounded-sm shadow-2xl", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative aspect-4/3 overflow-hidden", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(motion.img, { src: dish.image, alt: getName(dish), loading: "lazy", className: "h-full w-full object-cover", whileHover: {
              scale: 1.1
            }, transition: {
              duration: 0.6,
              ease: "easeOut"
            } }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute inset-0 bg-linear-to-t from-black/80 via-black/20 to-transparent" }),
            dish.popular && /* @__PURE__ */ jsxRuntimeExports.jsx(motion.span, { initial: {
              opacity: 0,
              x: -20
            }, whileInView: {
              opacity: 1,
              x: 0
            }, viewport: {
              once: true
            }, transition: {
              delay: 0.3 + i * 0.1,
              duration: 0.5
            }, className: "absolute left-4 top-4 rounded-sm bg-gold/90 px-3 py-1 text-[9px] font-semibold uppercase tracking-wider text-gold-foreground", children: t("home.featured.chefs_choice") }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "dark absolute inset-x-4 bottom-4 text-white", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "font-display text-lg leading-tight", children: getName(dish) }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "mt-1 text-sm font-medium text-gold", children: [
                t("home.featured.price_prefix"),
                dish.price,
                t("home.featured.price_suffix")
              ] })
            ] })
          ] }) }, dish.id)) }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(motion.div, { variants: itemVariants, initial: "hidden", whileInView: "show", viewport: {
            once: true
          }, className: "mt-8 text-center", children: /* @__PURE__ */ jsxRuntimeExports.jsxs(Link, { to: "/menu", className: "inline-flex items-center gap-2 rounded-sm border border-gold/40 px-8 py-2.5 text-[11px] uppercase tracking-[0.2em] font-medium text-gold hover:bg-gold/10 transition-colors group", children: [
            t("home.featured.view_menu"),
            /* @__PURE__ */ jsxRuntimeExports.jsx(ArrowRight, { className: "h-3.5 w-3.5 transition-transform group-hover:translate-x-1" })
          ] }) })
        ] }) }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "py-10 sm:py-12", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mx-auto max-w-7xl px-6 lg:px-12", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs(motion.div, { variants: containerVariants, initial: "hidden", whileInView: "show", viewport: {
            once: true,
            margin: "-50px"
          }, className: "text-center mb-8", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(SectionLabel, { text: t("home.testimonials.label") }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs(motion.h2, { variants: itemVariants, className: "font-display text-3xl sm:text-4xl text-white", children: [
              t("home.testimonials.title_line1"),
              /* @__PURE__ */ jsxRuntimeExports.jsx("br", {}),
              /* @__PURE__ */ jsxRuntimeExports.jsx("em", { className: "not-italic text-gold", children: t("home.testimonials.title_line2") })
            ] })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(motion.div, { variants: containerVariants, initial: "hidden", whileInView: "show", viewport: {
            once: true,
            margin: "-50px"
          }, className: "grid gap-4 md:grid-cols-3", children: [{
            q: t("home.testimonials.items.1.quote"),
            a: "Sophie Laurent",
            c: "Paris, France"
          }, {
            q: t("home.testimonials.items.2.quote"),
            a: "Amida & James Chen",
            c: "London, UK"
          }, {
            q: t("home.testimonials.items.3.quote"),
            a: "Marcus Dubowski",
            c: "New York City, USA"
          }].map((testimonial, i) => /* @__PURE__ */ jsxRuntimeExports.jsxs(motion.figure, { variants: itemVariants, custom: i, initial: "rest", whileHover: "hover", animate: "rest", className: "rounded-sm border border-white/10 bg-white/5 p-5 backdrop-blur-sm", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex gap-1 mb-3", children: Array.from({
              length: 5
            }).map((_, j) => /* @__PURE__ */ jsxRuntimeExports.jsx(motion.div, { initial: {
              opacity: 0,
              scale: 0
            }, whileInView: {
              opacity: 1,
              scale: 1
            }, viewport: {
              once: true
            }, transition: {
              delay: i * 0.1 + j * 0.05,
              type: "spring",
              stiffness: 300
            }, children: /* @__PURE__ */ jsxRuntimeExports.jsx(Star, { className: "h-3.5 w-3.5 fill-gold text-gold" }) }, j)) }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("blockquote", { className: "font-display text-sm italic text-white/90", children: [
              '"',
              testimonial.q,
              '"'
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("figcaption", { className: "mt-4 flex items-center gap-3", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "h-9 w-9 rounded-full bg-gold/20 flex items-center justify-center", children: /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-gold text-xs font-display font-bold", children: testimonial.a[0] }) }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-sm font-semibold text-white", children: testimonial.a }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-[10px] uppercase tracking-widest text-white/50", children: testimonial.c })
              ] })
            ] })
          ] }, i)) })
        ] }) })
      ] }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("section", { className: "relative light py-10 sm:py-12 overflow-hidden", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(motion.img, { src: courtyardImg, alt: t("home.cta.image_alt"), className: "absolute inset-0 h-full w-full object-cover", loading: "lazy", initial: {
          scale: 1.1
        }, whileInView: {
          scale: 1
        }, viewport: {
          once: true,
          margin: "-100px"
        }, transition: {
          duration: 1.5,
          ease: "easeOut"
        } }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute inset-0 bg-linear-to-r from-[#1a1510]/95 via-[#1a1510]/80 to-[#1a1510]/60" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "relative mx-auto max-w-7xl px-6 lg:px-12", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid gap-10 lg:grid-cols-2 lg:items-start", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs(motion.div, { variants: containerVariants, initial: "hidden", whileInView: "show", viewport: {
            once: true,
            margin: "-50px"
          }, children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(SectionLabel, { text: t("home.reservations.label") }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs(motion.h2, { variants: itemVariants, className: "font-display text-3xl leading-tight text-balance sm:text-4xl dark text-white", children: [
              t("home.reservations.title_line1"),
              /* @__PURE__ */ jsxRuntimeExports.jsx("br", {}),
              /* @__PURE__ */ jsxRuntimeExports.jsx("em", { className: "not-italic text-gold", children: t("home.reservations.title_line2") })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(motion.p, { variants: itemVariants, className: "mt-4 max-w-md text-sm leading-relaxed dark text-white/70", children: t("home.cta.description") }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs(motion.div, { variants: itemVariants, className: "mt-6 space-y-3", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsxs(motion.div, { whileHover: {
                x: 4
              }, transition: {
                type: "spring",
                stiffness: 300,
                damping: 20
              }, className: "flex items-center gap-3", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex h-9 w-9 items-center justify-center rounded-full border border-gold/30", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Users, { className: "h-3.5 w-3.5 text-gold" }) }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm font-semibold dark text-white", children: t("home.reservations.private_dining_title") }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs dark text-white/50", children: t("home.reservations.private_dining_desc") })
                ] })
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs(motion.div, { whileHover: {
                x: 4
              }, transition: {
                type: "spring",
                stiffness: 300,
                damping: 20
              }, className: "flex items-center gap-3", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex h-9 w-9 items-center justify-center rounded-full border border-gold/30", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Music, { className: "h-3.5 w-3.5 text-gold" }) }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm font-semibold dark text-white", children: t("home.reservations.live_music_title") }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs dark text-white/50", children: t("home.reservations.live_music_desc") })
                ] })
              ] })
            ] })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs(motion.div, { variants: itemVariants, initial: "hidden", whileInView: "show", viewport: {
            once: true,
            margin: "-50px"
          }, layout: true, className: "rounded-2xl border bg-white dark:bg-[#1a1510]/95 p-8 backdrop-blur-xl shadow-2xl transition-colors duration-300 border-stone-200 dark:border-white/10", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(motion.h3, { layout: true, className: "font-display text-2xl font-bold text-stone-800 dark:text-white mb-6 transition-colors", children: t("home.booking.form_title") }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(AnimatePresence, { mode: "wait", children: sent ? /* @__PURE__ */ jsxRuntimeExports.jsxs(motion.div, { initial: {
              opacity: 0,
              y: 20,
              scale: 0.95
            }, animate: {
              opacity: 1,
              y: 0,
              scale: 1
            }, exit: {
              opacity: 0,
              y: -20,
              scale: 0.95
            }, transition: {
              type: "spring",
              stiffness: 300,
              damping: 25
            }, className: "flex flex-col items-center justify-center py-8 text-center", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative mb-5", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(motion.div, { initial: {
                  scale: 0
                }, animate: {
                  scale: 1
                }, transition: {
                  delay: 0.2,
                  type: "spring",
                  stiffness: 200,
                  damping: 15
                }, className: "absolute inset-0 bg-emerald-500/20 blur-2xl rounded-full" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx(motion.div, { initial: {
                  scale: 0,
                  rotate: -45
                }, animate: {
                  scale: 1,
                  rotate: 0
                }, transition: {
                  delay: 0.3,
                  type: "spring",
                  stiffness: 200,
                  damping: 15
                }, className: "relative flex h-14 w-14 items-center justify-center rounded-full bg-linear-to-br from-emerald-500 to-emerald-700 shadow-lg shadow-emerald-500/40", children: /* @__PURE__ */ jsxRuntimeExports.jsx(CircleCheck, { className: "h-7 w-7 text-white", strokeWidth: 2.2 }) })
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsx(motion.h2, { initial: {
                opacity: 0,
                y: 10
              }, animate: {
                opacity: 1,
                y: 0
              }, transition: {
                delay: 0.4
              }, className: "font-display text-xl sm:text-2xl lg:text-3xl text-stone-800 dark:text-white mb-2 tracking-tight", children: t("home.booking.success_title", {
                name: form.firstName
              }) }),
              /* @__PURE__ */ jsxRuntimeExports.jsx(motion.p, { initial: {
                opacity: 0,
                y: 10
              }, animate: {
                opacity: 1,
                y: 0
              }, transition: {
                delay: 0.5
              }, className: "max-w-md text-stone-500 dark:text-white/60 leading-relaxed text-sm mb-5", children: t("home.booking.success_description", {
                guests: form.guests,
                date: form.date,
                time: form.time,
                email: form.email
              }) }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs(motion.button, { initial: {
                opacity: 0,
                y: 10
              }, animate: {
                opacity: 1,
                y: 0
              }, transition: {
                delay: 0.6
              }, whileHover: {
                scale: 1.02
              }, whileTap: {
                scale: 0.98
              }, onClick: () => {
                setSent(false);
                setForm({
                  firstName: "",
                  lastName: "",
                  email: "",
                  phone: "",
                  date: "",
                  time: "19:30",
                  guests: 2,
                  notes: ""
                });
              }, className: "group inline-flex items-center gap-2 rounded-sm bg-gold px-6 py-2.5 text-[11px] uppercase tracking-[0.2em] font-semibold text-gold-foreground shadow-xl transition-transform focus:outline-none focus:ring-2 focus:ring-gold/40", children: [
                t("home.booking.make_another"),
                /* @__PURE__ */ jsxRuntimeExports.jsx(ArrowRight, { className: "h-4 w-4 transition-transform group-hover:translate-x-1" })
              ] })
            ] }, "success") : /* @__PURE__ */ jsxRuntimeExports.jsxs(motion.form, { initial: {
              opacity: 0
            }, animate: {
              opacity: 1
            }, exit: {
              opacity: 0
            }, className: "space-y-5", onSubmit: submit, children: [
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid grid-cols-1 sm:grid-cols-2 gap-4", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsxs(motion.div, { initial: {
                  opacity: 0,
                  x: -20
                }, animate: {
                  opacity: 1,
                  x: 0
                }, transition: {
                  delay: 0.1
                }, className: "group", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("label", { className: "text-xs uppercase tracking-widest text-stone-500 dark:text-white/50 mb-2 block transition-colors", children: [
                    t("home.booking.first_name"),
                    " ",
                    /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-red-500", children: "*" })
                  ] }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("input", { type: "text", value: form.firstName, onChange: (e) => update("firstName", e.target.value), placeholder: "Ahmed", className: "w-full rounded-lg border border-stone-300 dark:border-white/10 bg-stone-50 dark:bg-white/5 px-4 py-3 text-sm text-stone-800 dark:text-white placeholder:text-stone-400 dark:placeholder:text-white/30 focus:border-amber-500 dark:focus:border-amber-400 focus:ring-2 focus:ring-amber-500/20 dark:focus:ring-amber-400/20 focus:outline-none transition-all duration-200" })
                ] }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs(motion.div, { initial: {
                  opacity: 0,
                  x: 20
                }, animate: {
                  opacity: 1,
                  x: 0
                }, transition: {
                  delay: 0.15
                }, className: "group", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("label", { className: "text-xs uppercase tracking-widest text-stone-500 dark:text-white/50 mb-2 block transition-colors", children: [
                    t("home.booking.last_name"),
                    " ",
                    /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-red-500", children: "*" })
                  ] }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("input", { type: "text", value: form.lastName, onChange: (e) => update("lastName", e.target.value), placeholder: "Benali", className: "w-full rounded-lg border border-stone-300 dark:border-white/10 bg-stone-50 dark:bg-white/5 px-4 py-3 text-sm text-stone-800 dark:text-white placeholder:text-stone-400 dark:placeholder:text-white/30 focus:border-amber-500 dark:focus:border-amber-400 focus:ring-2 focus:ring-amber-500/20 dark:focus:ring-amber-400/20 focus:outline-none transition-all duration-200" })
                ] })
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs(motion.div, { initial: {
                opacity: 0,
                y: 20
              }, animate: {
                opacity: 1,
                y: 0
              }, transition: {
                delay: 0.2
              }, className: "group", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsxs("label", { className: "text-xs uppercase tracking-widest text-stone-500 dark:text-white/50 mb-2 block transition-colors", children: [
                  t("home.booking.email"),
                  " ",
                  /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-red-500", children: "*" })
                ] }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("input", { type: "email", value: form.email, onChange: (e) => update("email", e.target.value), placeholder: "ahmed@example.com", className: "w-full rounded-lg border border-stone-300 dark:border-white/10 bg-stone-50 dark:bg-white/5 px-4 py-3 text-sm text-stone-800 dark:text-white placeholder:text-stone-400 dark:placeholder:text-white/30 focus:border-amber-500 dark:focus:border-amber-400 focus:ring-2 focus:ring-amber-500/20 dark:focus:ring-amber-400/20 focus:outline-none transition-all duration-200" })
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs(motion.div, { initial: {
                opacity: 0,
                y: 20
              }, animate: {
                opacity: 1,
                y: 0
              }, transition: {
                delay: 0.25
              }, className: "group", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("label", { className: "text-xs uppercase tracking-widest text-stone-500 dark:text-white/50 mb-2 block transition-colors", children: t("reservations.form.phone") }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("input", { type: "tel", value: form.phone, onChange: (e) => update("phone", e.target.value), placeholder: "+212 6XX XXX XXX", className: "w-full rounded-lg border border-stone-300 dark:border-white/10 bg-stone-50 dark:bg-white/5 px-4 py-3 text-sm text-stone-800 dark:text-white placeholder:text-stone-400 dark:placeholder:text-white/30 focus:border-amber-500 dark:focus:border-amber-400 focus:ring-2 focus:ring-amber-500/20 dark:focus:ring-amber-400/20 focus:outline-none transition-all duration-200" })
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid grid-cols-1 sm:grid-cols-2 gap-4", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsxs(motion.div, { initial: {
                  opacity: 0,
                  y: 20
                }, animate: {
                  opacity: 1,
                  y: 0
                }, transition: {
                  delay: 0.3
                }, className: "group", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("label", { className: "text-xs uppercase tracking-widest text-stone-500 dark:text-white/50 mb-2 block transition-colors", children: [
                    t("home.booking.date"),
                    " ",
                    /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-red-500", children: "*" })
                  ] }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("input", { type: "date", value: form.date, min: today, onChange: (e) => update("date", e.target.value), className: "w-full rounded-lg border border-stone-300 dark:border-white/10 bg-stone-50 dark:bg-white/5 px-4 py-3 text-sm text-stone-800 dark:text-white focus:border-amber-500 dark:focus:border-amber-400 focus:ring-2 focus:ring-amber-500/20 dark:focus:ring-amber-400/20 focus:outline-none transition-all duration-200 [&::-webkit-calendar-picker-indicator]:dark:invert" })
                ] }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs(motion.div, { initial: {
                  opacity: 0,
                  y: 20
                }, animate: {
                  opacity: 1,
                  y: 0
                }, transition: {
                  delay: 0.35
                }, className: "group", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("label", { className: "text-xs uppercase tracking-widest text-stone-500 dark:text-white/50 mb-2 block transition-colors", children: [
                    t("home.booking.time"),
                    " ",
                    /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-red-500", children: "*" })
                  ] }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("select", { value: form.time, onChange: (e) => update("time", e.target.value), className: "w-full rounded-lg border border-stone-300 dark:border-white/10 bg-stone-50 dark:bg-white/5 px-4 py-3 text-sm text-stone-800 dark:text-white focus:border-amber-500 dark:focus:border-amber-400 focus:ring-2 focus:ring-amber-500/20 dark:focus:ring-amber-400/20 focus:outline-none transition-all duration-200 appearance-none cursor-pointer", children: TIMES.map((time) => /* @__PURE__ */ jsxRuntimeExports.jsx("option", { value: time, children: time }, time)) })
                ] })
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs(motion.div, { initial: {
                opacity: 0,
                y: 20
              }, animate: {
                opacity: 1,
                y: 0
              }, transition: {
                delay: 0.4
              }, className: "group", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("label", { className: "text-xs uppercase tracking-widest text-stone-500 dark:text-white/50 mb-2 block transition-colors", children: t("home.booking.guests") }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("select", { value: form.guests, onChange: (e) => update("guests", parseInt(e.target.value)), className: "w-full appearance-none rounded-sm border border-gray-200 dark:border-white/10 bg-gray-50 dark:bg-white/5 px-3 py-2 sm:py-2.5 text-sm text-gray-900 dark:text-white focus:border-gold/40 focus:outline-none focus:ring-1 focus:ring-gold/40", children: [
                  [1, 2, 3, 4, 5, 6, 7, 8, 9].map((num) => /* @__PURE__ */ jsxRuntimeExports.jsxs("option", { value: num, children: [
                    num,
                    " ",
                    num === 1 ? t("reservations.form.guest_one") : t("reservations.form.guest_other")
                  ] }, num)),
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("option", { value: 10, children: [
                    "10+ ",
                    t("reservations.form.guest_other")
                  ] })
                ] })
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs(motion.div, { initial: {
                opacity: 0,
                y: 20
              }, animate: {
                opacity: 1,
                y: 0
              }, transition: {
                delay: 0.45
              }, className: "group", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("label", { className: "text-xs uppercase tracking-widest text-stone-500 dark:text-white/50 mb-2 block transition-colors", children: t("home.booking.special_requests") }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("textarea", { rows: 3, value: form.notes, onChange: (e) => update("notes", e.target.value), placeholder: t("home.booking.special_requests_placeholder"), className: "w-full rounded-lg border border-stone-300 dark:border-white/10 bg-stone-50 dark:bg-white/5 px-4 py-3 text-sm text-stone-800 dark:text-white placeholder:text-stone-400 dark:placeholder:text-white/30 focus:border-amber-500 dark:focus:border-amber-400 focus:ring-2 focus:ring-amber-500/20 dark:focus:ring-amber-400/20 focus:outline-none resize-none transition-all duration-200" })
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsx(AnimatePresence, { children: err && /* @__PURE__ */ jsxRuntimeExports.jsx(motion.div, { initial: {
                opacity: 0,
                height: 0
              }, animate: {
                opacity: 1,
                height: "auto"
              }, exit: {
                opacity: 0,
                height: 0
              }, className: "rounded-lg bg-red-50 dark:bg-red-900/20 border border-red-200 dark:border-red-800/30 p-3 text-center overflow-hidden", children: /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs text-red-600 dark:text-red-400 font-medium", children: err }) }) }),
              /* @__PURE__ */ jsxRuntimeExports.jsx(motion.button, { initial: {
                opacity: 0,
                y: 20
              }, animate: {
                opacity: 1,
                y: 0
              }, transition: {
                delay: 0.5
              }, whileHover: {
                scale: 1.02,
                boxShadow: "0 20px 25px -5px rgb(255 215 0 / 0.3)"
              }, whileTap: {
                scale: 0.98
              }, type: "submit", className: "w-full rounded-lg bg-gold py-4 text-xs uppercase tracking-[0.25em] font-bold text-gold-foreground shadow-lg shadow-gold/25 transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-gold/50 focus:ring-offset-2 focus:ring-offset-white dark:focus:ring-offset-[#1a1510]", children: t("home.booking.confirm_button") })
            ] }, "form") })
          ] })
        ] }) })
      ] })
    ] })
  ] });
}
export {
  Index as component
};
