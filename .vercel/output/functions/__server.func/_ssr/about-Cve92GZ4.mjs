import { j as jsxRuntimeExports } from "../_libs/react.mjs";
import { L as Link } from "../_libs/tanstack__react-router.mjs";
import { c as courtyardImg, s as spicesImg, a as chefImg } from "./chef-BzIPVwiL.mjs";
import { B as BGZ } from "./BGZ-CG54wZoT.mjs";
import { u as useQuery } from "../_libs/tanstack__react-query.mjs";
import { u as useTranslation } from "../_libs/react-i18next.mjs";
import { C as Clock, h as Star, U as Users, s as UtensilsCrossed, r as Award, G as Gem, L as Leaf, d as Sparkles, H as Heart, t as Hand, k as Coffee, u as Music, v as Lamp, w as Palette } from "../_libs/lucide-react.mjs";
import { m as motion } from "../_libs/framer-motion.mjs";
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
import "../_libs/tanstack__query-core.mjs";
import "../_libs/i18next.mjs";
import "../_libs/use-sync-external-store.mjs";
import "../_libs/motion-dom.mjs";
import "../_libs/motion-utils.mjs";
const STRAPI_URL = "http://localhost:1337";
const getStrapiMedia = (url) => {
  if (!url) return "/placeholder.webp";
  if (url.startsWith("http")) {
    return url;
  }
  return `${STRAPI_URL}${url.startsWith("/") ? url : `/${url}`}`;
};
const fetchGallery = async () => {
  const res = await fetch(
    `${STRAPI_URL}/api/galleries?populate[image][fields]=url`
  );
  if (!res.ok) {
    throw new Error("Failed to fetch gallery.");
  }
  const { data } = await res.json();
  return data.map((item) => ({
    id: item.id,
    documentId: item.documentId,
    title: item.title,
    category: item.category,
    ratio: item.ratio,
    image: getStrapiMedia(item.image?.url)
  }));
};
function useGallery() {
  return useQuery({
    queryKey: ["gallery"],
    queryFn: fetchGallery
  });
}
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
    y: 40
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
function About() {
  const {
    t
  } = useTranslation();
  const {
    data: galleryData = []
  } = useGallery();
  const STATS = [{
    value: "15+",
    label: t("about.stats.years"),
    icon: Clock
  }, {
    value: "3",
    label: t("about.stats.michelin"),
    icon: Star
  }, {
    value: "48K+",
    label: t("about.stats.guests"),
    icon: Users
  }, {
    value: "120+",
    label: t("about.stats.dishes"),
    icon: UtensilsCrossed
  }];
  const CULINARY_PRINCIPLES = [{
    icon: Leaf,
    titleKey: "about.principles.seasonal.title",
    descKey: "about.principles.seasonal.desc",
    color: "text-green-400"
  }, {
    icon: Clock,
    titleKey: "about.principles.technique.title",
    descKey: "about.principles.technique.desc",
    color: "text-amber-400"
  }, {
    icon: Sparkles,
    titleKey: "about.principles.spice.title",
    descKey: "about.principles.spice.desc",
    color: "text-orange-400"
  }, {
    icon: Heart,
    titleKey: "about.principles.hospitality.title",
    descKey: "about.principles.hospitality.desc",
    color: "text-rose-400"
  }];
  const TEAM = [{
    name: "Chef Hassan El Mansouri",
    roleKey: "about.team.roles.executive_chef",
    img: chefImg
  }, {
    name: "Fatima Benouda",
    roleKey: "about.team.roles.pastry",
    img: chefImg
  }, {
    name: "Omar Khalidi",
    roleKey: "about.team.roles.sommelier",
    img: chefImg
  }, {
    name: "Nadia Tazi",
    roleKey: "about.team.roles.host",
    img: chefImg
  }];
  const AWARDS = [{
    icon: Star,
    title: t("about.awards.items.michelin.title"),
    year: "2024",
    desc: t("about.awards.items.michelin.desc")
  }, {
    icon: Award,
    title: t("about.awards.items.worlds_best.title"),
    year: "2023",
    desc: t("about.awards.items.worlds_best.desc")
  }, {
    icon: Gem,
    title: t("about.awards.items.best_morocco.title"),
    year: "2024",
    desc: t("about.awards.items.best_morocco.desc")
  }, {
    icon: Leaf,
    title: t("about.awards.items.green_star.title"),
    year: "2023",
    desc: t("about.awards.items.green_star.desc")
  }];
  const DESIGN_ELEMENTS = [{
    img: galleryData[0]?.image || courtyardImg,
    title: t("about.design.elements.zellij.title"),
    desc: t("about.design.elements.zellij.desc"),
    featured: true,
    label: "Featured"
  }, {
    img: galleryData[1]?.image || courtyardImg,
    title: t("about.design.elements.lighting.title"),
    desc: t("about.design.elements.lighting.desc"),
    featured: false
  }, {
    img: galleryData[2]?.image || spicesImg,
    title: t("about.design.elements.ceilings.title"),
    desc: t("about.design.elements.ceilings.desc"),
    featured: false
  }, {
    img: galleryData[3]?.image || courtyardImg,
    title: t("about.design.elements.arches.title"),
    desc: t("about.design.elements.arches.desc"),
    featured: false
  }, {
    img: galleryData[5]?.image || courtyardImg,
    title: t("about.design.elements.ceramics.title"),
    desc: t("about.design.elements.ceramics.desc"),
    featured: true
  }, {
    img: galleryData[4]?.image || courtyardImg,
    label: "Signature",
    title: t("about.design.elements.plasterwork.title"),
    desc: t("about.design.elements.plasterwork.desc"),
    featured: false
  }];
  const HOSPITALITY_FEATURES = [{
    icon: Hand,
    titleKey: "about.hospitality.welcome.title",
    descKey: "about.hospitality.welcome.desc"
  }, {
    icon: Coffee,
    titleKey: "about.hospitality.tea.title",
    descKey: "about.hospitality.tea.desc"
  }, {
    icon: Users,
    titleKey: "about.hospitality.service.title",
    descKey: "about.hospitality.service.desc"
  }, {
    icon: Music,
    titleKey: "about.hospitality.music.title",
    descKey: "about.hospitality.music.desc"
  }, {
    icon: Lamp,
    titleKey: "about.hospitality.ambiance.title",
    descKey: "about.hospitality.ambiance.desc"
  }, {
    icon: Palette,
    titleKey: "about.hospitality.private.title",
    descKey: "about.hospitality.private.desc"
  }];
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
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
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative z-10 mx-auto w-[92%] max-w-350 px-4 sm:px-6 pt-14 sm:pt-16 md:pt-20 lg:pt-24 pb-8 sm:pb-20 md:pb-24 lg:pb-28", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs(motion.div, { variants: containerVariants, initial: "hidden", animate: "show", className: "mx-auto max-w-3xl text-center", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs(motion.div, { variants: itemVariants, className: "sm:mt-3 mt-5   mb-2 sm:mb-3 flex items-center justify-center gap-2 sm:gap-3", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "h-px w-6 sm:w-10 md:w-12 bg-gold/60" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-[9px] sm:text-[10px] md:text-xs uppercase tracking-[0.25em] sm:tracking-[0.35em] text-gold/80", children: t("about.hero.badge") }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "h-px w-6 sm:w-10 md:w-12 bg-gold/60" })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs(motion.h1, { variants: itemVariants, className: "font-display text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl leading-[1.15] sm:leading-tight text-white", children: [
            t("about.hero.title_line1"),
            /* @__PURE__ */ jsxRuntimeExports.jsx("br", {}),
            /* @__PURE__ */ jsxRuntimeExports.jsx("em", { className: "not-italic text-gold", children: t("about.hero.title_line2") })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(motion.p, { variants: itemVariants, className: "mx-auto mt-3 sm:mt-4 md:mt-5 max-w-lg sm:max-w-xl md:max-w-2xl text-xs sm:text-sm md:text-base lg:text-lg leading-relaxed text-white/70 px-2", children: t("about.hero.description") })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(motion.div, { initial: {
          opacity: 0,
          y: 30,
          scale: 0.95
        }, animate: {
          opacity: 1,
          y: 0,
          scale: 1
        }, transition: {
          type: "spring",
          stiffness: 100,
          damping: 20,
          delay: 0.5
        }, className: "mt-6 sm:mt-0 sm:absolute sm:bottom-3 md:bottom-6 lg:bottom-8 sm:left-1/2 sm:z-20 sm:w-[92%] sm:max-w-3xl sm:-translate-x-1/2", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative overflow-hidden rounded-2xl sm:rounded-full border border-gray-50/10 bg-[#1a1510]/85 backdrop-blur-2xl shadow-[0_8px_32px_rgba(0,0,0,0.4)] mx-auto w-full max-w-2xl", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute inset-x-0 top-0 h-px bg-linear-to-r from-transparent via-gold/30 to-transparent" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "relative z-10 grid grid-cols-2 sm:flex sm:items-center sm:justify-between px-4 sm:px-4 md:px-6 lg:px-8 py-4 sm:py-2.5 md:py-3 gap-4 sm:gap-0", children: STATS.map((stat, i) => /* @__PURE__ */ jsxRuntimeExports.jsxs(motion.div, { initial: {
            opacity: 0,
            y: 10
          }, animate: {
            opacity: 1,
            y: 0
          }, transition: {
            delay: 0.7 + i * 0.1,
            type: "spring",
            stiffness: 200,
            damping: 20
          }, className: `group flex flex-col items-center  justify-center ${i < 3 ? "sm:border-r border-gray-50/10" : ""} ${i >= 2 ? "border-t sm:border-t-0 border-gray-50/10 pt-4 sm:pt-0" : ""}`, children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2 ", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(stat.icon, { className: "h-4 w-4 sm:h-3 sm:w-3 md:h-3.5 md:w-3.5 text-gold group-hover:text-gold/80 transition-colors duration-300 shrink-0" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "font-display text-base sm:text-[10px] md:text-sm lg:text-base text-white group-hover:text-gold transition-colors duration-300", children: stat.value })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "mt-1 text-[10px] sm:mr-2 sm:text-[6px] md:text-[9px] lg:text-[10px] uppercase tracking-[0.15em] sm:tracking-[0.1rem] md:tracking-[0.15em] text-white/50 group-hover:text-white/60 transition-colors duration-300 text-center", children: stat.label })
          ] }, i)) })
        ] }) })
      ] })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative overflow-hidden dark:bg-[#1a1510]", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "fixed inset-0 opacity-10 pointer-events-none", style: {
        backgroundImage: `url(${BGZ})`,
        backgroundRepeat: "repeat",
        backgroundSize: "650px"
      } }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute inset-0 dark:bg-black/20 bg-white/90 pointer-events-none" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("section", { className: "relative py-8 sm:py-12 md:py-16 lg:py-20 bg-transparent", children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-12", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid gap-8 sm:gap-10 md:gap-12 lg:grid-cols-2 lg:items-center", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs(motion.div, { variants: containerVariants, initial: "hidden", whileInView: "show", viewport: {
          once: true,
          margin: "-100px"
        }, className: "relative", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs(motion.div, { variants: imageRevealVariants, className: "relative aspect-4/3 sm:aspect-16/10 lg:aspect-auto overflow-hidden rounded-sm shadow-2xl", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("img", { src: courtyardImg, alt: t("about.story.images.riad_alt"), loading: "lazy", className: "h-full w-full object-cover" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute inset-0 bg-linear-to-t from-[#1a1510]/40 to-transparent" })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(motion.div, { variants: itemVariants, className: "hidden sm:block absolute -bottom-5 -right-5 md:-bottom-6 md:-right-6 lg:-bottom-8 lg:-right-8 h-20 w-20 md:h-32 md:w-32 lg:h-40 lg:w-40 overflow-hidden rounded-sm shadow-xl border-2 border-[#1a1510]", children: /* @__PURE__ */ jsxRuntimeExports.jsx("img", { src: spicesImg, alt: t("about.story.images.chef_alt"), loading: "lazy", className: "h-full w-full object-cover" }) })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs(motion.div, { variants: containerVariants, initial: "hidden", whileInView: "show", viewport: {
          once: true,
          margin: "-100px"
        }, className: "sm:pt-4 lg:pt-0", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs(motion.div, { variants: itemVariants, className: "flex items-center gap-2 sm:gap-3 mb-3 sm:mb-4", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "h-px w-6 sm:w-8 bg-gold/60" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-[10px] sm:text-xs uppercase tracking-[0.25em] sm:tracking-[0.35em] text-gold/80", children: t("about.story.badge") })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs(motion.h2, { variants: itemVariants, className: "font-display text-2xl sm:text-3xl md:text-4xl lg:text-5xl leading-[1.15] sm:leading-tight text-white", children: [
            t("about.story.title_line1"),
            /* @__PURE__ */ jsxRuntimeExports.jsx("br", {}),
            /* @__PURE__ */ jsxRuntimeExports.jsx("em", { className: "not-italic text-gold", children: t("about.story.title_line2") })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs(motion.div, { variants: itemVariants, className: "mt-4 sm:mt-6 space-y-3 sm:space-y-4 text-sm sm:text-base lg:text-lg leading-relaxed text-white/60", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { children: t("about.story.p1") }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { children: t("about.story.p2") }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { children: t("about.story.p3") })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs(motion.div, { variants: itemVariants, className: "mt-6 sm:mt-8 rounded-sm border-l-2 border-gold/40 bg-white/5 p-4 sm:p-6", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("blockquote", { className: "font-display text-base sm:text-lg lg:text-xl italic text-white/80", children: [
              '"',
              t("about.story.quote"),
              '"'
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("cite", { className: "mt-2 sm:mt-3 block text-[10px] sm:text-xs uppercase tracking-widest text-gold not-italic", children: [
              "— ",
              t("about.story.quote_author")
            ] })
          ] })
        ] })
      ] }) }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("section", { className: "relative py-6 sm:py-10 md:py-14 lg:py-16 bg-transparent", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mx-auto max-w-7xl px-4 sm:px-6 lg:px-12", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs(motion.div, { variants: containerVariants, initial: "hidden", whileInView: "show", viewport: {
          once: true,
          margin: "-50px"
        }, className: "text-center mb-8 sm:mb-10 md:mb-14 lg:mb-16", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs(motion.div, { variants: itemVariants, className: "flex items-center justify-center gap-2 sm:gap-3 mb-3 sm:mb-4", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "h-px w-6 sm:w-8 bg-gold/60" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-[10px] sm:text-xs uppercase tracking-[0.25em] sm:tracking-[0.35em] text-gold/80", children: t("about.philosophy.badge") }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "h-px w-6 sm:w-8 bg-gold/60" })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs(motion.h2, { variants: itemVariants, className: "font-display text-2xl sm:text-3xl md:text-4xl lg:text-5xl leading-[1.15] sm:leading-tight text-white", children: [
            t("about.philosophy.title_line1"),
            /* @__PURE__ */ jsxRuntimeExports.jsx("br", {}),
            /* @__PURE__ */ jsxRuntimeExports.jsx("em", { className: "not-italic text-gold", children: t("about.philosophy.title_line2") })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(motion.p, { variants: itemVariants, className: "mt-3 sm:mt-4 max-w-2xl mx-auto text-sm sm:text-base lg:text-lg text-white/60 px-2", children: t("about.philosophy.description") })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(motion.div, { variants: containerVariants, initial: "hidden", whileInView: "show", viewport: {
          once: true,
          margin: "-50px"
        }, className: "grid gap-3 sm:gap-4 md:gap-6 grid-cols-2 lg:grid-cols-4", children: CULINARY_PRINCIPLES.map((principle, i) => /* @__PURE__ */ jsxRuntimeExports.jsxs(motion.div, { variants: itemVariants, whileHover: {
          y: -8,
          borderColor: "rgba(255,215,0,0.4)"
        }, transition: {
          type: "spring",
          stiffness: 300,
          damping: 25
        }, className: "rounded-sm border border-gray-50/10 bg-[#0f0c09] p-5 sm:p-6 lg:p-8 transition-colors", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: `mx-auto flex h-10 w-10 sm:h-11 sm:w-11 md:h-12 md:w-12 items-center justify-center rounded-sm bg-white/5 ${principle.color}`, children: /* @__PURE__ */ jsxRuntimeExports.jsx(principle.icon, { className: "h-4 w-4 sm:h-5 sm:w-5" }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "mt-3 sm:mt-4 text-center font-display text-sm sm:text-lg lg:text-xl text-white", children: t(principle.titleKey) }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-2 text-xs text-center sm:text-base leading-relaxed text-white/50", children: t(principle.descKey) })
        ] }, i)) })
      ] }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("section", { className: "relative py-6 sm:py-10 md:py-14 lg:py-16 bg-transparent", children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mx-auto max-w-7xl px-4 sm:px-6 lg:px-12", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid gap-8 sm:gap-10 md:gap-12 lg:grid-cols-2 lg:items-center", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs(motion.div, { variants: containerVariants, initial: "hidden", whileInView: "show", viewport: {
          once: true,
          margin: "-100px"
        }, className: "order-2 lg:order-1 text-center lg:text-left", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs(motion.div, { variants: itemVariants, className: "flex items-center justify-center lg:justify-start gap-2 sm:gap-3 mb-3 sm:mb-4", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "h-px w-6 sm:w-8 bg-gold/60" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-[10px] sm:text-xs uppercase tracking-[0.25em] sm:tracking-[0.35em] text-gold/80", children: t("about.chef.badge") })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs(motion.h2, { variants: itemVariants, className: "font-display text-2xl sm:text-3xl md:text-4xl lg:text-5xl leading-[1.15] sm:leading-tight text-white", children: [
            t("about.chef.title_line1"),
            /* @__PURE__ */ jsxRuntimeExports.jsx("br", {}),
            /* @__PURE__ */ jsxRuntimeExports.jsx("em", { className: "not-italic text-gold", children: t("about.chef.title_line2") })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(motion.p, { variants: itemVariants, className: "text-sm sm:text-base lg:text-lg text-gold/80 mt-2 mb-4 sm:mb-6", children: t("about.chef.name_arabic") }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs(motion.div, { variants: itemVariants, className: "space-y-3 sm:space-y-4 text-sm sm:text-base lg:text-lg leading-relaxed text-white/60", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { children: t("about.chef.p1") }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { children: t("about.chef.p2") })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs(motion.div, { variants: itemVariants, className: "mt-6 sm:mt-8 flex flex-wrap justify-center lg:justify-start gap-2 sm:gap-3", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "rounded-sm bg-white/5 px-3 sm:px-4 py-2 text-xs sm:text-sm text-white/70", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-gold font-display", children: "3" }),
              " ",
              t("about.chef.badges.years")
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "rounded-sm bg-white/5 px-3 sm:px-4 py-2 text-xs sm:text-sm text-white/70", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(Star, { className: "inline h-3.5 w-3.5 sm:h-4 sm:w-4 text-gold mr-1" }),
              " ",
              t("about.chef.badges.michelin")
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "rounded-sm bg-white/5 px-3 sm:px-4 py-2 text-xs sm:text-sm text-white/70", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(Award, { className: "inline h-3.5 w-3.5 sm:h-4 sm:w-4 text-gold mr-1" }),
              " ",
              t("about.chef.badges.top50")
            ] })
          ] })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(motion.div, { variants: containerVariants, initial: "hidden", whileInView: "show", viewport: {
          once: true,
          margin: "-100px"
        }, className: "relative order-1 lg:order-2", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative mx-auto w-full max-w-sm sm:max-w-md md:max-w-lg lg:max-w-none", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs(motion.div, { variants: imageRevealVariants, className: "relative aspect-4/5 sm:aspect-3/4 overflow-hidden rounded-sm shadow-2xl", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("img", { src: chefImg, alt: t("about.chef.image_alt"), loading: "lazy", className: "h-full w-full object-cover" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute inset-0 bg-linear-to-t from-[#1a1510]/60 to-transparent" })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs(motion.div, { variants: itemVariants, className: "absolute -bottom-3 left-1/2 -translate-x-1/2 sm:left-4 sm:translate-x-0 sm:-bottom-4 rounded-sm bg-gold px-4 sm:px-5 md:px-6 py-2 sm:py-2.5 md:py-3 shadow-xl text-center whitespace-nowrap", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-[9px] sm:text-[10px] uppercase tracking-widest text-gold-foreground", children: t("about.chef.title") }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "font-display text-sm sm:text-base text-gold-foreground", children: t("about.chef.since") })
          ] })
        ] }) })
      ] }) }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("section", { className: "relative py-6 sm:py-10 md:py-14 lg:py-16 bg-transparent", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mx-auto max-w-7xl px-4 sm:px-6 lg:px-12", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs(motion.div, { variants: containerVariants, initial: "hidden", whileInView: "show", viewport: {
          once: true,
          margin: "-50px"
        }, className: "text-center mb-8 sm:mb-10 md:mb-14 lg:mb-16", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs(motion.div, { variants: itemVariants, className: "flex items-center justify-center gap-2 sm:gap-3 mb-3 sm:mb-4", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "h-px w-6 sm:w-8 bg-gold/60" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-[10px] sm:text-xs uppercase tracking-[0.25em] sm:tracking-[0.35em] text-gold/80", children: t("about.team.badge") }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "h-px w-6 sm:w-8 bg-gold/60" })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs(motion.h2, { variants: itemVariants, className: "font-display text-2xl sm:text-3xl md:text-4xl lg:text-5xl leading-[1.15] sm:leading-tight text-white", children: [
            t("about.team.title_line1"),
            /* @__PURE__ */ jsxRuntimeExports.jsx("br", {}),
            /* @__PURE__ */ jsxRuntimeExports.jsx("em", { className: "not-italic text-gold", children: t("about.team.title_line2") })
          ] })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(motion.div, { variants: containerVariants, initial: "hidden", whileInView: "show", viewport: {
          once: true,
          margin: "-50px"
        }, className: "grid gap-4 sm:gap-6 md:gap-8 grid-cols-2 lg:grid-cols-4", children: TEAM.map((member, i) => /* @__PURE__ */ jsxRuntimeExports.jsxs(motion.div, { variants: itemVariants, whileHover: {
          y: -8
        }, transition: {
          type: "spring",
          stiffness: 300,
          damping: 25
        }, className: "group text-center", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "aspect-3/4 overflow-hidden rounded-sm shadow-xl mb-3 sm:mb-4", children: /* @__PURE__ */ jsxRuntimeExports.jsx(motion.img, { src: member.img, alt: member.name, loading: "lazy", className: "h-full w-full object-cover", whileHover: {
            scale: 1.08
          }, transition: {
            duration: 0.6,
            ease: "easeOut"
          } }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "font-display text-sm sm:text-base md:text-lg lg:text-xl text-white px-1", children: member.name }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-[10px] sm:text-xs uppercase tracking-widest text-gold/80 mt-1", children: t(member.roleKey) })
        ] }, member.name)) })
      ] }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("section", { className: "relative py-6 sm:py-6 md:py-10 lg:py-12 bg-transparent", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mx-auto max-w-7xl px-4 sm:px-6 lg:px-12", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs(motion.div, { variants: containerVariants, initial: "hidden", whileInView: "show", viewport: {
          once: true,
          margin: "-50px"
        }, className: "text-center mb-8 sm:mb-10 md:mb-14 lg:mb-16", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs(motion.div, { variants: itemVariants, className: "flex items-center justify-center gap-2 sm:gap-3 mb-3 sm:mb-4", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "h-px w-6 sm:w-8 bg-gold/60" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-[10px] sm:text-xs uppercase tracking-[0.25em] sm:tracking-[0.35em] text-gold/80", children: t("about.awards.badge") }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "h-px w-6 sm:w-8 bg-gold/60" })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs(motion.h2, { variants: itemVariants, className: "font-display text-2xl sm:text-3xl md:text-4xl lg:text-5xl leading-[1.15] sm:leading-tight text-white", children: [
            t("about.awards.title_line1"),
            /* @__PURE__ */ jsxRuntimeExports.jsx("br", {}),
            /* @__PURE__ */ jsxRuntimeExports.jsx("em", { className: "not-italic text-gold", children: t("about.awards.title_line2") })
          ] })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(motion.div, { variants: containerVariants, initial: "hidden", whileInView: "show", viewport: {
          once: true,
          margin: "-50px"
        }, className: "grid gap-3 sm:gap-4 md:gap-6 grid-cols-2 lg:grid-cols-4", children: AWARDS.map((award, i) => /* @__PURE__ */ jsxRuntimeExports.jsxs(motion.div, { variants: itemVariants, whileHover: {
          y: -8,
          borderColor: "rgba(255,215,0,0.4)"
        }, transition: {
          type: "spring",
          stiffness: 300,
          damping: 25
        }, className: "rounded-sm border border-white/10 bg-[#0f0c09] p-5 sm:p-6 lg:p-8 text-center transition-colors", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(award.icon, { className: "mx-auto h-6 w-6 sm:h-7 sm:w-7 md:h-8 md:w-8 text-gold" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "mt-3 sm:mt-4 font-display text-base sm:text-lg lg:text-xl text-white", children: award.title }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-1 text-xs sm:text-sm text-gold/80", children: award.year }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-2 sm:mt-3 text-sm sm:text-base leading-relaxed text-white/50", children: award.desc })
        ] }, i)) })
      ] }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("section", { className: "relative py-6 sm:py-6 md:py-10 lg:py-12 bg-transparent", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-12", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs(motion.div, { variants: containerVariants, initial: "hidden", whileInView: "show", viewport: {
          once: true,
          margin: "-50px"
        }, className: "text-center mb-8 sm:mb-12 md:mb-16 lg:mb-20", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs(motion.div, { variants: itemVariants, className: "flex items-center justify-center gap-2 sm:gap-3 mb-3 sm:mb-4", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "h-px w-6 sm:w-10 bg-gold/60" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-[10px] sm:text-xs uppercase tracking-[0.25em] sm:tracking-[0.35em] text-gold/80", children: t("about.design.badge") }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "h-px w-6 sm:w-10 bg-gold/60" })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs(motion.h2, { variants: itemVariants, className: "font-display text-2xl sm:text-3xl md:text-4xl lg:text-5xl leading-[1.15] sm:leading-tight text-white", children: [
            t("about.design.title_line1"),
            /* @__PURE__ */ jsxRuntimeExports.jsx("br", {}),
            /* @__PURE__ */ jsxRuntimeExports.jsx("em", { className: "not-italic text-gold", children: t("about.design.title_line2") })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(motion.p, { variants: itemVariants, className: "mt-4 sm:mt-5 md:mt-6 max-w-2xl mx-auto text-sm sm:text-base lg:text-lg leading-relaxed text-white/60 px-2", children: t("about.design.description") })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs(motion.div, { variants: containerVariants, initial: "hidden", whileInView: "show", viewport: {
          once: true,
          margin: "-50px"
        }, className: "mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-0 grid grid-cols-1 gap-3 sm:gap-4 md:gap-5 lg:grid-cols-4 lg:grid-rows-[2fr_1fr_1fr] lg:gap-6 lg:h-[calc(100vh-var(--header-height,5rem))]", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs(motion.div, { variants: itemVariants, className: "relative group overflow-hidden rounded-lg sm:rounded-xl shadow-xl col-span-1 sm:col-span-2 lg:col-span-2 lg:row-span-2 aspect-4/3 sm:aspect-3/2 lg:aspect-auto", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(motion.img, { src: DESIGN_ELEMENTS[0].img, alt: DESIGN_ELEMENTS[0].title, loading: "lazy", className: "h-full w-full object-cover", whileHover: {
              scale: 1.08
            }, transition: {
              duration: 0.7,
              ease: "easeOut"
            } }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute inset-0 bg-linear-to-t from-[#1a1510] via-[#1a1510]/40 to-transparent opacity-90" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute top-2 left-2 sm:top-3 sm:left-3 md:top-4 md:left-4", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "inline-flex items-center gap-1 rounded-full bg-gold/20 backdrop-blur-sm border border-gold/30 px-2 py-0.5 text-[8px] sm:text-[9px] uppercase tracking-widest text-white", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "h-1 w-1 rounded-full bg-white" }),
              " ",
              DESIGN_ELEMENTS[0].label
            ] }) }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "absolute bottom-0 left-0 right-0 p-3 sm:p-4 md:p-5 lg:p-6", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "font-display text-sm sm:text-base md:text-lg lg:text-xl text-gray-50 mb-0.5", children: DESIGN_ELEMENTS[0].title }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-[10px] sm:text-xs md:text-sm lg:text-base text-gray-50/80 leading-relaxed line-clamp-2", children: DESIGN_ELEMENTS[0].desc })
            ] })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs(motion.div, { variants: itemVariants, className: "relative group overflow-hidden rounded-lg sm:rounded-xl shadow-xl col-span-1 aspect-4/3 sm:aspect-square lg:aspect-auto", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(motion.img, { src: DESIGN_ELEMENTS[1].img, alt: DESIGN_ELEMENTS[1].title, loading: "lazy", className: "h-full w-full object-cover", whileHover: {
              scale: 1.08
            }, transition: {
              duration: 0.7,
              ease: "easeOut"
            } }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute inset-0 bg-linear-to-t from-[#1a1510] via-[#1a1510]/30 to-transparent" }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "absolute bottom-0 left-0 right-0 p-2 sm:p-3 md:p-4", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "font-display text-xs sm:text-sm md:text-base text-gray-50 mb-0.5", children: DESIGN_ELEMENTS[1].title }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-[9px] sm:text-[10px] md:text-xs text-gray-50/70 leading-relaxed line-clamp-2", children: DESIGN_ELEMENTS[1].desc })
            ] })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs(motion.div, { variants: itemVariants, className: "relative group overflow-hidden rounded-lg sm:rounded-xl shadow-xl col-span-1 aspect-4/3 sm:aspect-square lg:aspect-auto", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(motion.img, { src: DESIGN_ELEMENTS[2].img, alt: DESIGN_ELEMENTS[2].title, loading: "lazy", className: "h-full w-full object-cover", whileHover: {
              scale: 1.08
            }, transition: {
              duration: 0.7,
              ease: "easeOut"
            } }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute inset-0 bg-linear-to-t from-[#1a1510] via-[#1a1510]/30 to-transparent" }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "absolute bottom-0 left-0 right-0 p-2 sm:p-3 md:p-4", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "font-display text-xs sm:text-sm md:text-base text-gray-50 mb-0.5", children: DESIGN_ELEMENTS[2].title }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-[9px] sm:text-[10px] md:text-xs text-gray-50/70 leading-relaxed line-clamp-2", children: DESIGN_ELEMENTS[2].desc })
            ] })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs(motion.div, { variants: itemVariants, className: "relative group overflow-hidden rounded-lg sm:rounded-xl shadow-xl col-span-1 sm:col-span-2 lg:col-span-1 lg:row-span-2 aspect-4/3 sm:aspect-3/2 lg:aspect-auto", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(motion.img, { src: DESIGN_ELEMENTS[3].img, alt: DESIGN_ELEMENTS[3].title, loading: "lazy", className: "h-full w-full object-cover", whileHover: {
              scale: 1.08
            }, transition: {
              duration: 0.7,
              ease: "easeOut"
            } }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute inset-0 bg-linear-to-t from-[#1a1510] via-[#1a1510]/30 to-transparent" }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "absolute bottom-0 left-0 right-0 p-2 sm:p-3 md:p-4", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "font-display text-xs sm:text-sm md:text-base text-gray-50 mb-0.5", children: DESIGN_ELEMENTS[3].title }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-[9px] sm:text-[10px] md:text-xs text-gray-50/70 leading-relaxed line-clamp-2", children: DESIGN_ELEMENTS[3].desc })
            ] })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs(motion.div, { variants: itemVariants, className: "relative group overflow-hidden rounded-lg sm:rounded-xl shadow-xl col-span-1 lg:col-span-1 lg:row-span-2 aspect-4/3 sm:aspect-square lg:aspect-auto", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(motion.img, { src: DESIGN_ELEMENTS[4].img, alt: DESIGN_ELEMENTS[4].title, loading: "lazy", className: "h-full w-full object-cover", whileHover: {
              scale: 1.08
            }, transition: {
              duration: 0.7,
              ease: "easeOut"
            } }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute inset-0 bg-linear-to-t from-[#1a1510] via-[#1a1510]/30 to-transparent" }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "absolute bottom-0 left-0 right-0 p-2 sm:p-3 md:p-4", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "font-display text-xs sm:text-sm md:text-base text-gray-50 mb-0.5", children: DESIGN_ELEMENTS[4].title }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-[9px] sm:text-[10px] md:text-xs text-gray-50/70 leading-relaxed line-clamp-2", children: DESIGN_ELEMENTS[4].desc })
            ] })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs(motion.div, { variants: itemVariants, className: "relative group overflow-hidden rounded-lg sm:rounded-xl shadow-xl col-span-1 sm:col-span-2 lg:col-span-2 aspect-4/3 sm:aspect-3/2 lg:aspect-auto", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(motion.img, { src: DESIGN_ELEMENTS[5].img, alt: DESIGN_ELEMENTS[5].title, loading: "lazy", className: "h-full w-full object-cover", whileHover: {
              scale: 1.08
            }, transition: {
              duration: 0.7,
              ease: "easeOut"
            } }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute inset-0 bg-linear-to-t from-[#1a1510] via-[#1a1510]/40 to-transparent opacity-90" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute top-2 left-2 sm:top-3 sm:left-3 md:top-4 md:left-4", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "inline-flex items-center gap-1 rounded-full bg-gold/20 backdrop-blur-sm border border-gold/30 px-2 py-0.5 text-[8px] sm:text-[9px] uppercase tracking-widest text-white", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "h-1 w-1 rounded-full bg-white" }),
              " ",
              DESIGN_ELEMENTS[5].label
            ] }) }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "absolute bottom-0 left-0 right-0 p-3 sm:p-4 md:p-5", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "font-display text-sm sm:text-base md:text-lg text-gray-50 mb-0.5", children: DESIGN_ELEMENTS[5].title }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-[10px] sm:text-xs md:text-sm text-gray-50/80 leading-relaxed line-clamp-2", children: DESIGN_ELEMENTS[5].desc })
            ] })
          ] })
        ] })
      ] }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("section", { className: "relative py-6 sm:py-10 md:py-14 lg:py-16 bg-transparent", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-12", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs(motion.div, { variants: containerVariants, initial: "hidden", whileInView: "show", viewport: {
          once: true,
          margin: "-50px"
        }, className: "text-center mb-8 sm:mb-10 md:mb-14 lg:mb-16", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs(motion.div, { variants: itemVariants, className: "flex items-center justify-center gap-2 sm:gap-3 mb-3 sm:mb-4", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "h-px w-6 sm:w-8 bg-gold/60" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-[10px] sm:text-xs uppercase tracking-[0.25em] sm:tracking-[0.35em] text-gold/80", children: t("about.hospitality.badge") }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "h-px w-6 sm:w-8 bg-gold/60" })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs(motion.h2, { variants: itemVariants, className: "font-display text-2xl sm:text-3xl md:text-4xl lg:text-5xl leading-[1.15] sm:leading-tight text-white", children: [
            t("about.hospitality.title_line1"),
            /* @__PURE__ */ jsxRuntimeExports.jsx("br", {}),
            /* @__PURE__ */ jsxRuntimeExports.jsx("em", { className: "not-italic text-gold", children: t("about.hospitality.title_line2") })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(motion.p, { variants: itemVariants, className: "mt-3 sm:mt-4 max-w-2xl mx-auto text-sm sm:text-base lg:text-lg text-white/60 px-2", children: t("about.hospitality.description") })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(motion.div, { variants: containerVariants, initial: "hidden", whileInView: "show", viewport: {
          once: true,
          margin: "-50px"
        }, className: "grid gap-3 sm:gap-4 md:gap-6 grid-cols-2 lg:grid-cols-3", children: HOSPITALITY_FEATURES.map((feature, i) => /* @__PURE__ */ jsxRuntimeExports.jsxs(motion.div, { variants: itemVariants, whileHover: {
          y: -8,
          borderColor: "rgba(255,215,0,0.4)",
          backgroundColor: "rgba(255,255,255,0.07)"
        }, transition: {
          type: "spring",
          stiffness: 300,
          damping: 25
        }, className: "rounded-sm border border-white/10 bg-white/5 p-5 sm:p-6 lg:p-8 transition-colors", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(feature.icon, { className: "h-5 w-5 sm:h-6 sm:w-6 text-gold" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "mt-3 sm:mt-4 font-display text-base sm:text-lg lg:text-xl text-white", children: t(feature.titleKey) }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-2 text-sm sm:text-base leading-relaxed text-white/50", children: t(feature.descKey) })
        ] }, i)) })
      ] }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("section", { className: "relative py-10 sm:py-12 md:py-16 lg:py-20 bg-[#1a473a]/90", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute inset-0 opacity-[0.1]", style: {
          backgroundImage: `repeating-linear-gradient(45deg, transparent, transparent 20px, rgba(255,255,255,0.1) 20px, rgba(255,255,255,0.1) 21px), repeating-linear-gradient(-45deg, transparent, transparent 20px, rgba(255,255,255,0.1) 20px, rgba(255,255,255,0.1) 21px)`
        } }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-12", children: /* @__PURE__ */ jsxRuntimeExports.jsxs(motion.div, { variants: containerVariants, initial: "hidden", whileInView: "show", viewport: {
          once: true,
          margin: "-50px"
        }, className: "grid gap-6 sm:gap-8 md:gap-12 lg:grid-cols-2 lg:items-center", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs(motion.div, { variants: itemVariants, className: "flex items-center gap-2 sm:gap-3 mb-3 sm:mb-4", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "h-px w-6 sm:w-8 bg-gold/60" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-[10px] sm:text-xs uppercase tracking-[0.25em] sm:tracking-[0.35em] text-gold/80", children: t("about.cta.badge") })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs(motion.h2, { variants: itemVariants, className: "font-display text-2xl sm:text-3xl md:text-4xl lg:text-5xl leading-[1.15] sm:leading-tight text-gray-50", children: [
              t("about.cta.title_line1"),
              /* @__PURE__ */ jsxRuntimeExports.jsx("br", {}),
              /* @__PURE__ */ jsxRuntimeExports.jsx("em", { className: "not-italic text-gold", children: t("about.cta.title_line2") })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(motion.p, { variants: itemVariants, className: "mt-3 sm:mt-4 max-w-md text-sm sm:text-base lg:text-lg leading-relaxed text-gray-50/70", children: t("about.cta.description") })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs(motion.div, { variants: itemVariants, className: "flex flex-col sm:flex-row gap-3 sm:gap-4 lg:justify-end", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(motion.div, { whileHover: {
              scale: 1.03
            }, whileTap: {
              scale: 0.98
            }, transition: {
              type: "spring",
              stiffness: 400,
              damping: 25
            }, children: /* @__PURE__ */ jsxRuntimeExports.jsx(Link, { to: "/reservations", className: "inline-flex items-center justify-center gap-2 rounded-sm bg-gold px-6 sm:px-8 py-3.5 sm:py-4 text-xs sm:text-sm uppercase tracking-[0.2em] font-semibold text-gold-foreground shadow-xl min-h-12", children: t("about.cta.reserve") }) }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(motion.div, { whileHover: {
              scale: 1.03
            }, whileTap: {
              scale: 0.98
            }, transition: {
              type: "spring",
              stiffness: 400,
              damping: 25
            }, children: /* @__PURE__ */ jsxRuntimeExports.jsx(Link, { to: "/menu", className: "inline-flex items-center justify-center gap-2 rounded-sm border  border-gray-50/30 bg-transparent px-6 sm:px-8 py-3.5 sm:py-4 text-xs sm:text-sm uppercase tracking-[0.2em] font-semibold text-gray-50 min-h-12", children: t("about.cta.menu") }) })
          ] })
        ] }) })
      ] })
    ] })
  ] });
}
export {
  About as component
};
