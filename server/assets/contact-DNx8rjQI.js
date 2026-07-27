import { jsxs, jsx } from "react/jsx-runtime";
import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import { useTranslation } from "react-i18next";
import { B as BGZ } from "./BGZ-CG54wZoT.js";
import { MapPin, Clock, Phone, ArrowRight, Mail, Instagram, Facebook, Twitter, Youtube, CheckCircle2 } from "lucide-react";
import axios from "axios";
const BGC = "/assets/contactBg-dUAR7hRL.png";
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
    y: -8,
    borderColor: "rgba(255, 215, 0, 0.4)",
    transition: {
      type: "spring",
      stiffness: 400,
      damping: 25
    }
  }
};
function Contact() {
  const {
    t
  } = useTranslation();
  const [sent, setSent] = useState(false);
  const [err, setErr] = useState(null);
  const [f, setF] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    subject: "",
    message: ""
  });
  const update = (k, v) => setF((prev) => ({
    ...prev,
    [k]: v
  }));
  const submit = async (e) => {
    e.preventDefault();
    setErr(null);
    if (!f.firstName.trim() || !f.lastName.trim() || !f.email.includes("@") || !f.subject || !f.message.trim()) {
      setErr(t("contact.form.error") || "Please fill in all required fields.");
      return;
    }
    try {
      const response = await axios.post("http://localhost:5000/send-contact-email", f);
      if (response.data.success) {
        setSent(true);
        setF({
          firstName: "",
          lastName: "",
          email: "",
          phone: "",
          subject: "",
          message: ""
        });
      }
    } catch (error) {
      console.error(error);
      setErr(t("contact.form.submit_error") || "Something went wrong. Please try again.");
    }
  };
  return /* @__PURE__ */ jsxs("div", { className: "overflow-x-hidden", children: [
    /* @__PURE__ */ jsxs("section", { className: "hero-section relative min-h-90 sm:h-[80dvh] overflow-hidden", children: [
      /* @__PURE__ */ jsx(motion.div, { className: "absolute inset-0 bg-cover bg-center bg-fixed", style: {
        backgroundImage: `url(${BGC})`
      }, initial: {
        scale: 1.1
      }, animate: {
        scale: 1
      }, transition: {
        duration: 2.5,
        ease: "easeOut"
      } }),
      /* @__PURE__ */ jsx("div", { className: "absolute inset-0 bg-linear-to-b from-[#1a1510]/90 via-[#1a1510]/70 to-[#1a1510]" }),
      /* @__PURE__ */ jsx("div", { className: "absolute inset-0 opacity-[0.05]", style: {
        backgroundImage: `repeating-linear-gradient(45deg, transparent, transparent 20px, rgba(255,255,255,0.1) 20px, rgba(255,255,255,0.1) 21px), repeating-linear-gradient(-45deg, transparent, transparent 20px, rgba(255,255,255,0.1) 20px, rgba(255,255,255,0.1) 21px)`
      } }),
      /* @__PURE__ */ jsx("div", { className: "relative z-10 mx-auto w-[92%] max-w-350 px-4 sm:px-6 lg:px-8 pt-12 sm:pt-16 md:pt-20 lg:pt-24 pb-8 sm:pb-20 md:pb-24 lg:pb-28", children: /* @__PURE__ */ jsxs(motion.div, { variants: containerVariants, initial: "hidden", animate: "show", className: "mx-auto max-w-3xl text-center", children: [
        /* @__PURE__ */ jsxs(motion.div, { variants: itemVariants, className: "mt-2 sm:mt-3 mb-2 sm:mb-3 flex items-center justify-center gap-2 sm:gap-3", children: [
          /* @__PURE__ */ jsx("span", { className: "h-px w-6 sm:w-8 md:w-10 bg-gold/60" }),
          /* @__PURE__ */ jsx("span", { className: "text-[9px] sm:text-[10px] md:text-xs uppercase tracking-[0.25em] sm:tracking-[0.35em] text-gold/80", children: t("contact.hero.badge") }),
          /* @__PURE__ */ jsx("span", { className: "h-px w-6 sm:w-8 md:w-10 bg-gold/60" })
        ] }),
        /* @__PURE__ */ jsxs(motion.h1, { variants: itemVariants, className: "font-display text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl leading-[1.15] sm:leading-tight text-white", children: [
          t("contact.hero.title_line1"),
          /* @__PURE__ */ jsx("br", {}),
          /* @__PURE__ */ jsx("em", { className: "not-italic text-gold", children: t("contact.hero.title_line2") })
        ] }),
        /* @__PURE__ */ jsx(motion.p, { variants: itemVariants, className: "mx-auto mt-3 sm:mt-4 md:mt-5 max-w-lg sm:max-w-xl md:max-w-2xl px-2 text-xs sm:text-sm md:text-base lg:text-lg leading-relaxed text-white/70", children: t("contact.hero.description") }),
        /* @__PURE__ */ jsxs(motion.div, { variants: itemVariants, className: "mt-6 sm:mt-8 flex flex-wrap items-center justify-center gap-4 sm:gap-6 text-xs sm:text-sm text-white/60", children: [
          /* @__PURE__ */ jsxs("span", { className: "flex items-center gap-1.5 sm:gap-2", children: [
            /* @__PURE__ */ jsx(MapPin, { className: "h-3.5 w-3.5 sm:h-4 sm:w-4 text-gold" }),
            t("contact.hero.location")
          ] }),
          /* @__PURE__ */ jsxs("span", { className: "flex items-center gap-1.5 sm:gap-2", children: [
            /* @__PURE__ */ jsx(Clock, { className: "h-3.5 w-3.5 sm:h-4 sm:w-4 text-gold" }),
            t("contact.hero.hours")
          ] })
        ] })
      ] }) })
    ] }),
    /* @__PURE__ */ jsxs("div", { className: "relative overflow-hidden dark:bg-[#1a1510]", children: [
      /* @__PURE__ */ jsx("div", { className: "fixed inset-0 opacity-10 pointer-events-none", style: {
        backgroundImage: `url(${BGZ})`,
        backgroundRepeat: "repeat",
        backgroundSize: "650px"
      } }),
      /* @__PURE__ */ jsx("div", { className: "absolute inset-0 dark:bg-black/20 bg-white/90 pointer-events-none" }),
      /* @__PURE__ */ jsx("section", { className: "relative py-10 sm:py-12 lg:py-14 bg-transparent -mt-8 sm:-mt-10", children: /* @__PURE__ */ jsx("div", { className: "relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-12 z-10", children: /* @__PURE__ */ jsxs(motion.div, { variants: containerVariants, initial: "hidden", whileInView: "show", viewport: {
        once: true,
        margin: "-50px"
      }, className: "grid grid-cols-1 gap-3 sm:gap-4 sm:grid-cols-2 lg:grid-cols-4", children: [
        /* @__PURE__ */ jsxs(motion.div, { variants: cardHoverVariants, initial: "rest", whileHover: "hover", className: "rounded-sm border border-border bg-surface-panel p-4 sm:p-6 dark:border-white/10 dark:bg-[#1a1510] shadow-xl transition-colors", children: [
          /* @__PURE__ */ jsx("div", { className: "flex h-10 w-10 sm:h-12 sm:w-12 items-center justify-center rounded-sm bg-gold/20 mb-3 sm:mb-4 shrink-0", children: /* @__PURE__ */ jsx(MapPin, { className: "h-4 w-4 sm:h-5 sm:w-5 text-gold" }) }),
          /* @__PURE__ */ jsx("h3", { className: "font-display text-base sm:text-lg text-foreground dark:text-white mb-1.5 sm:mb-2", children: t("contact.cards.address.title") }),
          /* @__PURE__ */ jsx("p", { className: "text-xs sm:text-sm text-muted-foreground dark:text-white/60 leading-relaxed", children: t("contact.cards.address.text") })
        ] }),
        /* @__PURE__ */ jsxs(motion.div, { variants: cardHoverVariants, initial: "rest", whileHover: "hover", className: "rounded-sm border border-border bg-surface-panel p-4 sm:p-6 dark:border-white/10 dark:bg-[#1a1510] shadow-xl transition-colors", children: [
          /* @__PURE__ */ jsx("div", { className: "flex h-10 w-10 sm:h-12 sm:w-12 items-center justify-center rounded-sm bg-gold/20 mb-3 sm:mb-4 shrink-0", children: /* @__PURE__ */ jsx(Phone, { className: "h-4 w-4 sm:h-5 sm:w-5 text-gold" }) }),
          /* @__PURE__ */ jsx("h3", { className: "font-display text-base sm:text-lg text-foreground dark:text-white mb-1.5 sm:mb-2", children: t("contact.cards.phone.title") }),
          /* @__PURE__ */ jsx("p", { className: "text-xs sm:text-sm text-muted-foreground dark:text-white/60 leading-relaxed", children: t("contact.cards.phone.text") }),
          /* @__PURE__ */ jsxs(motion.a, { href: "tel:+212524389214", whileHover: {
            x: 4
          }, transition: {
            type: "spring",
            stiffness: 400,
            damping: 25
          }, className: "mt-2 inline-flex items-center gap-1 text-[10px] sm:text-xs text-gold hover:text-gold/80", children: [
            t("contact.cards.phone.link"),
            " ",
            /* @__PURE__ */ jsx(ArrowRight, { className: "h-3 w-3" })
          ] })
        ] }),
        /* @__PURE__ */ jsxs(motion.div, { variants: cardHoverVariants, initial: "rest", whileHover: "hover", className: "rounded-sm border border-border bg-surface-panel p-4 sm:p-6 dark:border-white/10 dark:bg-[#1a1510] shadow-xl transition-colors", children: [
          /* @__PURE__ */ jsx("div", { className: "flex h-10 w-10 sm:h-12 sm:w-12 items-center justify-center rounded-sm bg-gold/20 mb-3 sm:mb-4 shrink-0", children: /* @__PURE__ */ jsx(Mail, { className: "h-4 w-4 sm:h-5 sm:w-5 text-gold" }) }),
          /* @__PURE__ */ jsx("h3", { className: "font-display text-base sm:text-lg text-foreground dark:text-white mb-1.5 sm:mb-2", children: t("contact.cards.email.title") }),
          /* @__PURE__ */ jsx("p", { className: "text-xs sm:text-sm text-muted-foreground dark:text-white/60 leading-relaxed", children: t("contact.cards.email.text") }),
          /* @__PURE__ */ jsxs(motion.a, { href: "mailto:hello@darmedina.ma", whileHover: {
            x: 4
          }, transition: {
            type: "spring",
            stiffness: 400,
            damping: 25
          }, className: "mt-2 inline-flex items-center gap-1 text-[10px] sm:text-xs text-gold hover:text-gold/80", children: [
            t("contact.cards.email.link"),
            " ",
            /* @__PURE__ */ jsx(ArrowRight, { className: "h-3 w-3" })
          ] })
        ] }),
        /* @__PURE__ */ jsxs(motion.div, { variants: cardHoverVariants, initial: "rest", whileHover: "hover", className: "rounded-sm border border-border bg-surface-panel p-4 sm:p-6 dark:border-white/10 dark:bg-[#1a1510] shadow-xl transition-colors", children: [
          /* @__PURE__ */ jsx("div", { className: "flex h-10 w-10 sm:h-12 sm:w-12 items-center justify-center rounded-sm bg-gold/20 mb-3 sm:mb-4 shrink-0", children: /* @__PURE__ */ jsx(Clock, { className: "h-4 w-4 sm:h-5 sm:w-5 text-gold" }) }),
          /* @__PURE__ */ jsx("h3", { className: "font-display text-base sm:text-lg text-foreground dark:text-white mb-1.5 sm:mb-2", children: t("contact.cards.hours.title") }),
          /* @__PURE__ */ jsxs("div", { className: "text-xs sm:text-sm text-muted-foreground dark:text-white/60 space-y-1", children: [
            /* @__PURE__ */ jsx("p", { children: t("contact.cards.hours.lunch") }),
            /* @__PURE__ */ jsx("p", { children: t("contact.cards.hours.dinner") })
          ] })
        ] })
      ] }) }) }),
      /* @__PURE__ */ jsxs("section", { className: "relative py-8 sm:py-10 lg:py-12 bg-transparent", children: [
        /* @__PURE__ */ jsx("div", { className: "absolute inset-0 opacity-[0.05]", style: {
          backgroundImage: `repeating-linear-gradient(45deg, transparent, transparent 20px, rgba(255,255,255,0.05) 20px, rgba(255,255,255,0.05) 21px), repeating-linear-gradient(-45deg, transparent, transparent 20px, rgba(255,255,255,0.05) 20px, rgba(255,255,255,0.05) 21px)`
        } }),
        /* @__PURE__ */ jsx("div", { className: "relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-12 z-10", children: /* @__PURE__ */ jsxs(motion.div, { variants: containerVariants, initial: "hidden", whileInView: "show", viewport: {
          once: true,
          margin: "-50px"
        }, className: "flex flex-col items-center", children: [
          /* @__PURE__ */ jsxs(motion.div, { variants: itemVariants, className: "flex items-center justify-center gap-2 sm:gap-3 mb-3 sm:mb-4", children: [
            /* @__PURE__ */ jsx("span", { className: "h-px w-6 sm:w-8 bg-gold/60" }),
            /* @__PURE__ */ jsx("span", { className: "text-[9px] sm:text-[10px] uppercase tracking-[0.3em] sm:tracking-[0.35em] text-gold/80", children: t("contact.map.badge") }),
            /* @__PURE__ */ jsx("span", { className: "h-px w-6 sm:w-8 bg-gold/60" })
          ] }),
          /* @__PURE__ */ jsx(motion.h2, { variants: itemVariants, className: "font-display text-2xl sm:text-3xl md:text-4xl text-center text-gray-900 dark:text-white mb-6 sm:mb-8", children: t("contact.map.title") }),
          /* @__PURE__ */ jsx(motion.div, { variants: itemVariants, whileHover: {
            y: -4
          }, transition: {
            type: "spring",
            stiffness: 300,
            damping: 25
          }, className: "w-full max-w-5xl rounded-sm border border-gray-200/60 dark:border-white/10 bg-white dark:bg-[#1a1510]/90 backdrop-blur-md shadow-2xl p-2 sm:p-3 lg:p-4", children: /* @__PURE__ */ jsx("div", { className: "overflow-hidden rounded-sm border border-gray-200 dark:border-white/10 shadow-lg h-70 sm:h-87.5 lg:h-112.5", children: /* @__PURE__ */ jsx("iframe", { title: t("contact.map.title"), src: "https://www.google.com/maps?q=Marrakech,Morocco&z=13&output=embed", className: "w-full h-full rounded-sm grayscale-[0.15] hover:grayscale-0 transition-all duration-500", loading: "lazy", allowFullScreen: true, referrerPolicy: "no-referrer-when-downgrade" }) }) })
        ] }) })
      ] }),
      /* @__PURE__ */ jsxs("section", { className: "relative py-8 sm:py-10 lg:py-12 bg-transparent", children: [
        /* @__PURE__ */ jsx("div", { className: "absolute inset-0 opacity-[0.05]", style: {
          backgroundImage: `repeating-linear-gradient(45deg, transparent, transparent 20px, rgba(255,255,255,0.05) 20px, rgba(255,255,255,0.05) 21px), repeating-linear-gradient(-45deg, transparent, transparent 20px, rgba(255,255,255,0.05) 20px, rgba(255,255,255,0.05) 21px)`
        } }),
        /* @__PURE__ */ jsxs("div", { className: "relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-12 z-10", children: [
          /* @__PURE__ */ jsxs(motion.div, { variants: containerVariants, initial: "hidden", whileInView: "show", viewport: {
            once: true,
            margin: "-50px"
          }, className: "mb-6 sm:mb-8 text-center", children: [
            /* @__PURE__ */ jsxs(motion.div, { variants: itemVariants, className: "flex items-center justify-center gap-2 sm:gap-3 mb-3 sm:mb-4", children: [
              /* @__PURE__ */ jsx("span", { className: "h-px w-6 sm:w-8 bg-gold/60" }),
              /* @__PURE__ */ jsx("span", { className: "text-[9px] sm:text-[10px] uppercase tracking-[0.3em] sm:tracking-[0.35em] text-gold/80", children: t("contact.form_section.badge") }),
              /* @__PURE__ */ jsx("span", { className: "h-px w-6 sm:w-8 bg-gold/60" })
            ] }),
            /* @__PURE__ */ jsxs(motion.h2, { variants: itemVariants, className: "font-display text-2xl sm:text-3xl md:text-4xl text-gray-900 dark:text-white", children: [
              t("contact.form_section.title_line1"),
              /* @__PURE__ */ jsx("br", {}),
              /* @__PURE__ */ jsx("em", { className: "not-italic text-gold", children: t("contact.form_section.title_line2") })
            ] })
          ] }),
          /* @__PURE__ */ jsxs("div", { className: "grid grid-cols-1 gap-6 sm:gap-8 lg:gap-10 lg:grid-cols-[1fr_1.4fr]", children: [
            /* @__PURE__ */ jsxs(motion.div, { variants: containerVariants, initial: "hidden", whileInView: "show", viewport: {
              once: true,
              margin: "-50px"
            }, className: "space-y-4 sm:space-y-6", children: [
              /* @__PURE__ */ jsxs(motion.div, { variants: itemVariants, whileHover: {
                y: -4
              }, transition: {
                type: "spring",
                stiffness: 300,
                damping: 25
              }, className: "rounded-sm border border-gray-200/60 dark:border-white/10 bg-white dark:bg-[#1a1510]/90 backdrop-blur-md p-4 sm:p-6 shadow-2xl", children: [
                /* @__PURE__ */ jsx("h3", { className: "font-display text-base sm:text-lg text-gray-900 dark:text-white mb-3 sm:mb-4", children: t("contact.form_section.visit_us") }),
                /* @__PURE__ */ jsxs("div", { className: "space-y-3 sm:space-y-4 text-xs sm:text-sm", children: [
                  /* @__PURE__ */ jsxs("div", { className: "flex items-start gap-2.5 sm:gap-3", children: [
                    /* @__PURE__ */ jsx(MapPin, { className: "h-3.5 w-3.5 sm:h-4 sm:w-4 text-gold mt-0.5 shrink-0" }),
                    /* @__PURE__ */ jsxs("div", { className: "min-w-0", children: [
                      /* @__PURE__ */ jsx("p", { className: "text-gray-500 dark:text-white/50", children: t("contact.cards.address.title") }),
                      /* @__PURE__ */ jsx("p", { className: "text-gray-900 dark:text-white", children: t("contact.cards.address.text") })
                    ] })
                  ] }),
                  /* @__PURE__ */ jsxs("div", { className: "flex items-start gap-2.5 sm:gap-3", children: [
                    /* @__PURE__ */ jsx(Clock, { className: "h-3.5 w-3.5 sm:h-4 sm:w-4 text-gold mt-0.5 shrink-0" }),
                    /* @__PURE__ */ jsxs("div", { className: "min-w-0", children: [
                      /* @__PURE__ */ jsx("p", { className: "text-gray-500 dark:text-white/50", children: t("contact.cards.hours.open_daily") }),
                      /* @__PURE__ */ jsxs("p", { className: "text-gray-900 dark:text-white", children: [
                        t("contact.cards.hours.lunch"),
                        " • ",
                        t("contact.cards.hours.dinner")
                      ] })
                    ] })
                  ] })
                ] })
              ] }),
              /* @__PURE__ */ jsxs(motion.div, { variants: itemVariants, whileHover: {
                y: -4
              }, transition: {
                type: "spring",
                stiffness: 300,
                damping: 25
              }, className: "rounded-sm border border-gray-200/60 dark:border-white/10 bg-white dark:bg-[#1a1510]/90 backdrop-blur-md p-4 sm:p-6 shadow-2xl", children: [
                /* @__PURE__ */ jsx("h3", { className: "font-display text-base sm:text-lg text-gray-900 dark:text-white mb-3 sm:mb-4", children: t("contact.form_section.follow_us") }),
                /* @__PURE__ */ jsx("div", { className: "flex gap-2 sm:gap-3", children: [Instagram, Facebook, Twitter, Youtube].map((Icon, i) => /* @__PURE__ */ jsx(motion.a, { href: "#", whileHover: {
                  scale: 1.1,
                  borderColor: "rgba(255, 215, 0, 0.5)",
                  color: "#FFD700",
                  backgroundColor: "rgba(255, 215, 0, 0.05)"
                }, whileTap: {
                  scale: 0.95
                }, transition: {
                  type: "spring",
                  stiffness: 400,
                  damping: 25
                }, className: "flex h-9 w-9 sm:h-10 sm:w-10 items-center justify-center rounded-sm border border-gray-200 dark:border-white/10 text-gray-500 dark:text-white/50 transition-colors shrink-0", children: /* @__PURE__ */ jsx(Icon, { className: "h-3.5 w-3.5 sm:h-4 sm:w-4" }) }, i)) })
              ] })
            ] }),
            /* @__PURE__ */ jsx(motion.div, { variants: itemVariants, initial: "hidden", whileInView: "show", viewport: {
              once: true,
              margin: "-50px"
            }, children: /* @__PURE__ */ jsx("div", { className: "rounded-sm border border-gray-200/60 dark:border-white/10 bg-white dark:bg-[#1a1510]/90 backdrop-blur-md shadow-2xl overflow-hidden flex flex-col", children: /* @__PURE__ */ jsx("div", { className: "p-4 sm:p-5 lg:p-8 flex-1", children: /* @__PURE__ */ jsx(AnimatePresence, { mode: "wait", children: sent ? /* @__PURE__ */ jsxs(motion.div, { initial: {
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
            }, className: "flex flex-col items-center justify-center py-6 sm:py-8 text-center", children: [
              /* @__PURE__ */ jsxs("div", { className: "relative mb-5", children: [
                /* @__PURE__ */ jsx(motion.div, { initial: {
                  scale: 0
                }, animate: {
                  scale: 1
                }, transition: {
                  delay: 0.2,
                  type: "spring",
                  stiffness: 200,
                  damping: 15
                }, className: "absolute inset-0 bg-emerald-500/20 blur-2xl rounded-full" }),
                /* @__PURE__ */ jsx(motion.div, { initial: {
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
                }, className: "relative flex h-12 w-12 sm:h-14 sm:w-14 items-center justify-center rounded-full bg-linear-to-br from-emerald-500 to-emerald-700 shadow-lg shadow-emerald-500/40", children: /* @__PURE__ */ jsx(CheckCircle2, { className: "h-6 w-6 sm:h-7 sm:w-7 text-white", strokeWidth: 2.2 }) })
              ] }),
              /* @__PURE__ */ jsx(motion.h2, { initial: {
                opacity: 0,
                y: 10
              }, animate: {
                opacity: 1,
                y: 0
              }, transition: {
                delay: 0.4
              }, className: "font-display text-lg sm:text-xl md:text-2xl lg:text-3xl text-gray-900 dark:text-white mb-2 tracking-tight", children: t("contact.form.success_title") }),
              /* @__PURE__ */ jsx(motion.p, { initial: {
                opacity: 0,
                y: 10
              }, animate: {
                opacity: 1,
                y: 0
              }, transition: {
                delay: 0.5
              }, className: "max-w-md text-gray-500 dark:text-white/60 leading-relaxed text-xs sm:text-sm mb-5 px-4", children: t("contact.form.success_desc") }),
              /* @__PURE__ */ jsxs(motion.button, { initial: {
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
                setF({
                  firstName: "",
                  lastName: "",
                  email: "",
                  phone: "",
                  subject: "",
                  message: ""
                });
              }, className: "group inline-flex items-center gap-2 rounded-sm bg-gold px-5 sm:px-6 py-2.5 text-[10px] sm:text-[11px] uppercase tracking-[0.2em] font-semibold text-gold-foreground shadow-xl transition-transform focus:outline-none focus:ring-2 focus:ring-gold/40", children: [
                t("contact.form.send_another") || "Send Another Message",
                /* @__PURE__ */ jsx(ArrowRight, { className: "h-3.5 w-3.5 sm:h-4 sm:w-4 transition-transform group-hover:translate-x-1" })
              ] })
            ] }, "success") : /* @__PURE__ */ jsxs(motion.form, { variants: containerVariants, initial: "hidden", animate: "show", exit: {
              opacity: 0,
              y: -20
            }, onSubmit: submit, className: "space-y-3", children: [
              /* @__PURE__ */ jsxs(motion.div, { variants: itemVariants, className: "grid grid-cols-1 sm:grid-cols-2 gap-3", children: [
                /* @__PURE__ */ jsxs("div", { children: [
                  /* @__PURE__ */ jsxs("label", { className: "text-[9px] sm:text-[10px] uppercase tracking-widest text-gray-500 dark:text-white/50 mb-1 block", children: [
                    t("contact.form.first_name"),
                    " ",
                    /* @__PURE__ */ jsx("span", { className: "text-red-500", children: "*" })
                  ] }),
                  /* @__PURE__ */ jsx("input", { required: true, value: f.firstName, onChange: (e) => update("firstName", e.target.value), className: "w-full rounded-sm border border-gray-200 dark:border-white/10 bg-gray-50 dark:bg-white/5 px-3 py-2 sm:py-2.5 text-sm text-gray-900 dark:text-white placeholder:text-gray-400 dark:placeholder:text-white/30 focus:border-gold/40 focus:outline-none focus:ring-1 focus:ring-gold/40 transition-all duration-200", placeholder: t("contact.form.first_name_placeholder") })
                ] }),
                /* @__PURE__ */ jsxs("div", { children: [
                  /* @__PURE__ */ jsxs("label", { className: "text-[9px] sm:text-[10px] uppercase tracking-widest text-gray-500 dark:text-white/50 mb-1 block", children: [
                    t("contact.form.last_name"),
                    " ",
                    /* @__PURE__ */ jsx("span", { className: "text-red-500", children: "*" })
                  ] }),
                  /* @__PURE__ */ jsx("input", { required: true, value: f.lastName, onChange: (e) => update("lastName", e.target.value), className: "w-full rounded-sm border border-gray-200 dark:border-white/10 bg-gray-50 dark:bg-white/5 px-3 py-2 sm:py-2.5 text-sm text-gray-900 dark:text-white placeholder:text-gray-400 dark:placeholder:text-white/30 focus:border-gold/40 focus:outline-none focus:ring-1 focus:ring-gold/40 transition-all duration-200", placeholder: t("contact.form.last_name_placeholder") })
                ] })
              ] }),
              /* @__PURE__ */ jsxs(motion.div, { variants: itemVariants, className: "grid grid-cols-1 sm:grid-cols-2 gap-3", children: [
                /* @__PURE__ */ jsxs("div", { children: [
                  /* @__PURE__ */ jsxs("label", { className: "text-[9px] sm:text-[10px] uppercase tracking-widest text-gray-500 dark:text-white/50 mb-1 block", children: [
                    t("contact.form.email"),
                    " ",
                    /* @__PURE__ */ jsx("span", { className: "text-red-500", children: "*" })
                  ] }),
                  /* @__PURE__ */ jsx("input", { required: true, type: "email", value: f.email, onChange: (e) => update("email", e.target.value), className: "w-full rounded-sm border border-gray-200 dark:border-white/10 bg-gray-50 dark:bg-white/5 px-3 py-2 sm:py-2.5 text-sm text-gray-900 dark:text-white placeholder:text-gray-400 dark:placeholder:text-white/30 focus:border-gold/40 focus:outline-none focus:ring-1 focus:ring-gold/40 transition-all duration-200", placeholder: t("contact.form.email_placeholder") })
                ] }),
                /* @__PURE__ */ jsxs("div", { children: [
                  /* @__PURE__ */ jsx("label", { className: "text-[9px] sm:text-[10px] uppercase tracking-widest text-gray-500 dark:text-white/50 mb-1 block", children: t("contact.form.phone") }),
                  /* @__PURE__ */ jsx("input", { type: "tel", value: f.phone, onChange: (e) => update("phone", e.target.value), className: "w-full rounded-sm border border-gray-200 dark:border-white/10 bg-gray-50 dark:bg-white/5 px-3 py-2 sm:py-2.5 text-sm text-gray-900 dark:text-white placeholder:text-gray-400 dark:placeholder:text-white/30 focus:border-gold/40 focus:outline-none focus:ring-1 focus:ring-gold/40 transition-all duration-200", placeholder: t("contact.form.phone_placeholder") })
                ] })
              ] }),
              /* @__PURE__ */ jsxs(motion.div, { variants: itemVariants, children: [
                /* @__PURE__ */ jsxs("label", { className: "text-[9px] sm:text-[10px] uppercase tracking-widest text-gray-500 dark:text-white/50 mb-1 block", children: [
                  t("contact.form.subject"),
                  " ",
                  /* @__PURE__ */ jsx("span", { className: "text-red-500", children: "*" })
                ] }),
                /* @__PURE__ */ jsxs("div", { className: "relative", children: [
                  /* @__PURE__ */ jsxs("select", { required: true, value: f.subject, onChange: (e) => update("subject", e.target.value), className: "w-full appearance-none rounded-sm border border-gray-200 dark:border-white/10 bg-gray-50 dark:bg-white/5 px-3 py-2 sm:py-2.5 text-sm text-gray-900 dark:text-white focus:border-gold/40 focus:outline-none focus:ring-1 focus:ring-gold/40 transition-all duration-200 cursor-pointer", children: [
                    /* @__PURE__ */ jsx("option", { value: "", children: t("contact.form.select_subject") }),
                    /* @__PURE__ */ jsx("option", { value: "reservation", children: t("contact.form.subjects.reservation") }),
                    /* @__PURE__ */ jsx("option", { value: "private", children: t("contact.form.subjects.private") }),
                    /* @__PURE__ */ jsx("option", { value: "general", children: t("contact.form.subjects.general") }),
                    /* @__PURE__ */ jsx("option", { value: "feedback", children: t("contact.form.subjects.feedback") })
                  ] }),
                  /* @__PURE__ */ jsx("div", { className: "pointer-events-none absolute inset-y-0 right-0 flex items-center px-3 text-gray-400 dark:text-white/50", children: /* @__PURE__ */ jsx("svg", { xmlns: "http://www.w3.org/2000/svg", width: "16", height: "16", viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: "2", strokeLinecap: "round", strokeLinejoin: "round", children: /* @__PURE__ */ jsx("path", { d: "m6 9 6 6 6-6" }) }) })
                ] })
              ] }),
              /* @__PURE__ */ jsxs(motion.div, { variants: itemVariants, children: [
                /* @__PURE__ */ jsxs("label", { className: "text-[9px] sm:text-[10px] uppercase tracking-widest text-gray-500 dark:text-white/50 mb-1 block", children: [
                  t("contact.form.message"),
                  " ",
                  /* @__PURE__ */ jsx("span", { className: "text-red-500", children: "*" })
                ] }),
                /* @__PURE__ */ jsx("textarea", { required: true, rows: 4, value: f.message, onChange: (e) => update("message", e.target.value), className: "w-full rounded-sm border border-gray-200 dark:border-white/10 bg-gray-50 dark:bg-white/5 px-3 py-2 sm:py-2.5 text-sm text-gray-900 dark:text-white placeholder:text-gray-400 dark:placeholder:text-white/30 focus:border-gold/40 focus:outline-none focus:ring-1 focus:ring-gold/40 resize-none transition-all duration-200", placeholder: t("contact.form.message_placeholder") })
              ] }),
              /* @__PURE__ */ jsxs(motion.div, { variants: itemVariants, className: "flex items-start gap-2.5 sm:gap-3", children: [
                /* @__PURE__ */ jsx("input", { type: "checkbox", required: true, className: "mt-0.5 sm:mt-1 h-4 w-4 rounded border-gray-200 dark:border-white/10 bg-gray-50 dark:bg-white/5 text-gold focus:ring-gold shrink-0 cursor-pointer" }),
                /* @__PURE__ */ jsx("label", { className: "text-[10px] sm:text-xs text-gray-500 dark:text-white/50 leading-relaxed cursor-pointer", children: t("contact.form.privacy") })
              ] }),
              /* @__PURE__ */ jsx(AnimatePresence, { children: err && /* @__PURE__ */ jsx(motion.div, { initial: {
                opacity: 0,
                height: 0
              }, animate: {
                opacity: 1,
                height: "auto"
              }, exit: {
                opacity: 0,
                height: 0
              }, className: "rounded-sm bg-red-50 dark:bg-red-900/20 border border-red-200 dark:border-red-800/30 p-2.5 text-center overflow-hidden", children: /* @__PURE__ */ jsx("p", { className: "text-xs text-red-600 dark:text-red-400 font-medium", children: err }) }) }),
              /* @__PURE__ */ jsx(motion.div, { variants: itemVariants, children: /* @__PURE__ */ jsx(motion.button, { whileHover: {
                scale: 1.02,
                boxShadow: "0 20px 25px -5px rgb(255 215 0 / 0.3)"
              }, whileTap: {
                scale: 0.98
              }, type: "submit", className: "w-full rounded-sm bg-gold py-2.5 sm:py-3 text-[10px] sm:text-[11px] uppercase tracking-[0.2em] font-semibold text-gold-foreground shadow-xl transition-all focus:outline-none focus:ring-2 focus:ring-gold/40", children: t("contact.form.submit") }) })
            ] }, "form") }) }) }) })
          ] })
        ] })
      ] }),
      /* @__PURE__ */ jsxs("section", { className: "relative py-10 sm:py-12 lg:py-16 bg-[#1a3a2a]", children: [
        /* @__PURE__ */ jsx("div", { className: "absolute inset-0 opacity-[0.1]", style: {
          backgroundImage: `repeating-linear-gradient(45deg, transparent, transparent 20px, rgba(255,255,255,0.1) 20px, rgba(255,255,255,0.1) 21px), repeating-linear-gradient(-45deg, transparent, transparent 20px, rgba(255,255,255,0.1) 20px, rgba(255,255,255,0.1) 21px)`
        } }),
        /* @__PURE__ */ jsx("div", { className: "absolute inset-0 opacity-10 pointer-events-none", style: {
          backgroundImage: `url(${BGZ})`,
          backgroundRepeat: "repeat",
          backgroundSize: "650px"
        } }),
        /* @__PURE__ */ jsx("div", { className: "absolute inset-0 bg-black/20", "aria-hidden": true }),
        /* @__PURE__ */ jsx("div", { className: "relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-12 z-10", children: /* @__PURE__ */ jsxs(motion.div, { variants: containerVariants, initial: "hidden", whileInView: "show", viewport: {
          once: true,
          margin: "-50px"
        }, className: "grid grid-cols-1 gap-6 sm:gap-8 lg:grid-cols-2 lg:items-center", children: [
          /* @__PURE__ */ jsxs("div", { children: [
            /* @__PURE__ */ jsxs(motion.div, { variants: itemVariants, className: "flex items-center gap-2 sm:gap-3 mb-3 sm:mb-4", children: [
              /* @__PURE__ */ jsx("span", { className: "h-px w-6 sm:w-8 bg-gold/60" }),
              /* @__PURE__ */ jsx("span", { className: "text-[9px] sm:text-[10px] uppercase tracking-[0.3em] sm:tracking-[0.35em] text-gold/80", children: t("contact.cta.badge") })
            ] }),
            /* @__PURE__ */ jsxs(motion.h2, { variants: itemVariants, className: "font-display text-2xl sm:text-3xl md:text-4xl text-gray-50", children: [
              t("contact.cta.title_line1"),
              /* @__PURE__ */ jsx("br", {}),
              /* @__PURE__ */ jsx("em", { className: "not-italic text-gold", children: t("contact.cta.title_line2") })
            ] }),
            /* @__PURE__ */ jsx(motion.p, { variants: itemVariants, className: "mt-3 sm:mt-4 text-xs sm:text-sm text-gray-50/60 max-w-lg", children: t("contact.cta.description") })
          ] }),
          /* @__PURE__ */ jsxs(motion.div, { variants: itemVariants, className: "flex flex-col gap-3 sm:gap-4 lg:justify-end", children: [
            /* @__PURE__ */ jsx(motion.a, { href: "/reservations", whileHover: {
              scale: 1.03
            }, whileTap: {
              scale: 0.98
            }, transition: {
              type: "spring",
              stiffness: 400,
              damping: 25
            }, className: "inline-flex items-center justify-center gap-2 rounded-sm bg-gold px-6 sm:px-8 py-3 sm:py-4 text-xs sm:text-sm font-semibold uppercase tracking-[0.2em] text-gold-foreground shadow-lg", children: t("contact.cta.reserve") }),
            /* @__PURE__ */ jsx(motion.a, { href: "mailto:hello@darmedina.ma", whileHover: {
              scale: 1.03
            }, whileTap: {
              scale: 0.98
            }, transition: {
              type: "spring",
              stiffness: 400,
              damping: 25
            }, className: "inline-flex items-center justify-center gap-2 rounded-sm border border-white/30 bg-transparent px-6 sm:px-8 py-3 sm:py-4 text-xs sm:text-sm font-semibold text-white hover:bg-white/10 transition-colors", children: t("contact.cta.inquiry") })
          ] })
        ] }) })
      ] })
    ] })
  ] });
}
export {
  Contact as component
};
