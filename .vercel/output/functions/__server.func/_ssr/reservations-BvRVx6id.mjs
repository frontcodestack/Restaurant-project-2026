import { r as reactExports, j as jsxRuntimeExports } from "../_libs/react.mjs";
import { B as BGZ } from "./BGZ-CG54wZoT.mjs";
import { a as axios } from "../_libs/axios.mjs";
import { u as useTranslation } from "../_libs/react-i18next.mjs";
import { m as motion, A as AnimatePresence } from "../_libs/framer-motion.mjs";
import { e as Clock, U as Users, f as Sparkles, C as CalendarCheck, g as CircleCheck, A as ArrowRight, P as Phone, h as ChefHat, i as Star, H as Heart, B as Building2, c as Mail } from "../_libs/lucide-react.mjs";
import "../_libs/form-data.mjs";
import "fs";
import "../_libs/combined-stream.mjs";
import "util";
import "stream";
import "../_libs/delayed-stream.mjs";
import "path";
import "http";
import "https";
import "url";
import "crypto";
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
const TIMES = ["12:30", "13:00", "13:30", "14:00", "19:00", "19:30", "20:00", "20:30", "21:00", "21:30"];
const REASONS = [{
  icon: Star,
  titleKey: "reservations.why.michelin.title",
  descKey: "reservations.why.michelin.desc"
}, {
  icon: Heart,
  titleKey: "reservations.why.hospitality.title",
  descKey: "reservations.why.hospitality.desc"
}, {
  icon: Building2,
  titleKey: "reservations.why.riad.title",
  descKey: "reservations.why.riad.desc"
}, {
  icon: ChefHat,
  titleKey: "reservations.why.cuisine.title",
  descKey: "reservations.why.cuisine.desc"
}];
function Reservations() {
  const {
    t
  } = useTranslation();
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
  const TESTIMONIALS = [{
    rating: 5,
    quote: t("reservations.testimonials.items.1.quote"),
    author: t("reservations.testimonials.items.1.author"),
    location: t("reservations.testimonials.items.1.location")
  }, {
    rating: 5,
    quote: t("reservations.testimonials.items.2.quote"),
    author: t("reservations.testimonials.items.2.author"),
    location: t("reservations.testimonials.items.2.location")
  }, {
    rating: 5,
    quote: t("reservations.testimonials.items.3.quote"),
    author: t("reservations.testimonials.items.3.author"),
    location: t("reservations.testimonials.items.3.location")
  }];
  const update = (k, v) => setForm((f) => ({
    ...f,
    [k]: v
  }));
  const submit = async (e) => {
    e.preventDefault();
    setErr(null);
    if (!form.firstName.trim() || !form.lastName.trim() || !form.email.includes("@") || !form.date) {
      setErr(t("reservations.form.error"));
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
      setErr("Something went wrong. Please try again.");
    }
  };
  const today = (/* @__PURE__ */ new Date()).toISOString().slice(0, 10);
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "overflow-x-hidden", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("section", { className: "hero-section relative min-h-90 sm:h-[80dvh] overflow-hidden", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(motion.div, { className: "absolute inset-0 bg-cover bg-center bg-fixed", style: {
        backgroundImage: "url('https://images.unsplash.com/photo-1414235077428-338989a2e8c0')"
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
          /* @__PURE__ */ jsxRuntimeExports.jsxs(motion.div, { variants: itemVariants, className: "mt-2 sm:mt-3 mb-2 sm:mb-3 flex items-center justify-center gap-2 sm:gap-3", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "h-px w-6 sm:w-10 md:w-12 bg-gold/60" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-[9px] sm:text-[10px] md:text-xs uppercase tracking-[0.25em] sm:tracking-[0.35em] text-gold/80", children: t("reservations.hero.badge") }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "h-px w-6 sm:w-10 md:w-12 bg-gold/60" })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs(motion.h1, { variants: itemVariants, className: "font-display text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl leading-[1.15] sm:leading-tight text-white", children: [
            t("reservations.hero.title_line1"),
            /* @__PURE__ */ jsxRuntimeExports.jsx("br", {}),
            /* @__PURE__ */ jsxRuntimeExports.jsx("em", { className: "not-italic text-gold", children: t("reservations.hero.title_line2") })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(motion.p, { variants: itemVariants, className: "mx-auto mt-1 sm:mt-2 sm:mb-6 md:mt-3 max-w-lg sm:max-w-xl md:max-w-2xl text-xs sm:text-sm md:text-base lg:text-lg leading-relaxed text-white/70 px-2", children: t("reservations.hero.description") })
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
        }, className: "mt-6 sm:mt-0 sm:absolute sm:bottom-3 md:bottom-6 lg:bottom-8 sm:left-1/2 sm:z-20 sm:w-[92%] sm:max-w-3xl sm:-translate-x-1/2", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative overflow-hidden rounded-2xl sm:rounded-full border border-white/10 bg-[#1a1510]/85 backdrop-blur-2xl shadow-[0_8px_32px_rgba(0,0,0,0.4)] mx-auto w-full", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute inset-x-0 top-0 h-px bg-linear-to-r from-transparent via-gold/30 to-transparent" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "relative z-10 grid grid-cols-2 sm:flex sm:items-center sm:justify-between px-3 sm:px-4 md:px-6 lg:px-8 py-4 sm:py-3 md:py-3.5 gap-3 sm:gap-0", children: [{
            icon: Clock,
            value: t("reservations.info.hours"),
            label: t("reservations.info.hours_desc")
          }, {
            icon: Users,
            value: t("reservations.info.large_parties"),
            label: t("reservations.info.large_parties_desc")
          }, {
            icon: Sparkles,
            value: t("reservations.info.dress_code"),
            label: t("reservations.info.dress_code_desc")
          }, {
            icon: CalendarCheck,
            value: t("reservations.info.reservation_policy"),
            label: t("reservations.info.reservation_policy_desc")
          }].map((stat, i) => /* @__PURE__ */ jsxRuntimeExports.jsxs(motion.div, { initial: {
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
          }, className: `group flex flex-col items-center justify-center ${i < 3 ? "sm:border-r border-white/10" : ""} ${i >= 2 ? "border-t sm:border-t-0 border-white/10 pt-4 sm:pt-0" : ""}`, children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(stat.icon, { className: "h-4 w-4 sm:h-3.5 sm:w-3.5 md:h-4 md:w-4 text-gold group-hover:text-gold/80 transition-colors duration-300 shrink-0" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "font-display text-sm sm:text-[11px] md:text-sm lg:text-base text-white group-hover:text-gold transition-colors duration-300 text-center leading-tight", children: stat.value })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "mt-1 text-[10px] sm:text-[7px] md:text-[9px] lg:text-[10px] uppercase tracking-[0.12em] sm:tracking-[0.08em] md:tracking-widest text-white/50 group-hover:text-white/60 transition-colors duration-300 text-center leading-tight", children: stat.label })
          ] }, i)) })
        ] }) })
      ] })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative overflow-hidden bg-[#1a1510]", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "fixed inset-0 opacity-10 pointer-events-none", style: {
        backgroundImage: `url(${BGZ})`,
        backgroundRepeat: "repeat",
        backgroundSize: "650px"
      } }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("section", { id: "booking", className: "relative py-8 sm:py-10 lg:py-12 bg-transparent overflow-hidden transition-colors duration-500", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "absolute inset-0 pointer-events-none overflow-hidden", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute top-[-30%] left-[-15%] w-[50vw] h-[50vw] rounded-full bg-gold/8 dark:bg-gold/5 blur-[120px]" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute top-[50%] right-[-15%] w-[40vw] h-[40vw] rounded-full bg-emerald-900/8 dark:bg-emerald-900/15 blur-[100px]" })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-10 z-10", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs(motion.div, { variants: containerVariants, initial: "hidden", whileInView: "show", viewport: {
            once: true,
            margin: "-50px"
          }, className: "mb-6 sm:mb-8 lg:mb-12 text-center", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(motion.div, { variants: itemVariants, className: "flex justify-center mb-3", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "inline-flex items-center gap-2", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "h-px w-6 sm:w-8 bg-linear-to-r from-transparent to-gold/60" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-[9px] uppercase tracking-[0.35em] text-gold font-medium", children: t("reservations.form.badge") }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "h-px w-6 sm:w-8 bg-linear-to-l from-transparent to-gold/60" })
            ] }) }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs(motion.h2, { variants: itemVariants, className: "font-display text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl text-gray-900 dark:text-white leading-[1.15] tracking-tight", children: [
              t("reservations.form.title_line1"),
              /* @__PURE__ */ jsxRuntimeExports.jsx("br", {}),
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "sm:hidden", children: " " }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("em", { className: "text-gold font-light italic", children: t("reservations.form.title_line2") })
            ] })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid grid-cols-1 gap-6 lg:gap-8 lg:grid-cols-3 items-start", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(motion.div, { layout: true, variants: itemVariants, initial: "hidden", whileInView: "show", viewport: {
              once: true,
              margin: "-50px"
            }, className: "lg:col-span-2 relative", children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "rounded-sm border border-gray-200/60 dark:border-white/10 bg-white dark:bg-[#1a1510]/90 backdrop-blur-md shadow-2xl overflow-hidden flex flex-col", children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "p-4 sm:p-5 lg:p-8 flex-1 overflow-y-auto sm:h-full", children: /* @__PURE__ */ jsxRuntimeExports.jsx(AnimatePresence, { mode: "wait", children: sent ? /* @__PURE__ */ jsxRuntimeExports.jsxs(motion.div, { initial: {
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
            }, className: "flex flex-col items-center justify-center py-8 sm:py-12 text-center", children: [
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
              }, className: "font-display text-lg sm:text-xl md:text-2xl lg:text-3xl text-gray-900 dark:text-white mb-2 tracking-tight", children: t("reservations.success.title", {
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
              }, className: "max-w-md text-gray-500 dark:text-white/60 leading-relaxed text-xs sm:text-sm mb-5 px-4", children: t("reservations.success.description", {
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
              }, className: "group inline-flex items-center gap-2 rounded-sm bg-gold px-5 sm:px-6 py-2.5 text-[10px] sm:text-[11px] uppercase tracking-[0.2em] font-semibold text-gold-foreground shadow-xl transition-transform focus:outline-none focus:ring-2 focus:ring-gold/40", children: [
                t("reservations.success.button"),
                /* @__PURE__ */ jsxRuntimeExports.jsx(ArrowRight, { className: "h-4 w-4 transition-transform group-hover:translate-x-1" })
              ] })
            ] }, "success") : /* @__PURE__ */ jsxRuntimeExports.jsxs(motion.form, { variants: containerVariants, initial: "hidden", animate: "show", exit: {
              opacity: 0,
              y: -20
            }, onSubmit: submit, className: "space-y-3 sm:space-y-4", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsxs(motion.div, { variants: itemVariants, className: "grid grid-cols-1 sm:grid-cols-2 gap-3", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("label", { className: "text-[9px] sm:text-[10px] uppercase tracking-widest text-gray-500 dark:text-white/50 mb-1 block", children: [
                    t("reservations.form.first_name"),
                    " ",
                    /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-red-500", children: "*" })
                  ] }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("input", { value: form.firstName, onChange: (e) => update("firstName", e.target.value), className: "w-full rounded-sm border border-gray-200 dark:border-white/10 bg-gray-50 dark:bg-white/5 px-3 py-2 sm:py-2.5 text-sm text-gray-900 dark:text-white placeholder:text-gray-400 dark:placeholder:text-white/30 focus:border-gold/40 focus:outline-none focus:ring-1 focus:ring-gold/40 transition-all duration-200", placeholder: t("reservations.form.first_name_placeholder") })
                ] }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("label", { className: "text-[9px] sm:text-[10px] uppercase tracking-widest text-gray-500 dark:text-white/50 mb-1 block", children: [
                    t("reservations.form.last_name"),
                    " ",
                    /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-red-500", children: "*" })
                  ] }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("input", { value: form.lastName, onChange: (e) => update("lastName", e.target.value), className: "w-full rounded-sm border border-gray-200 dark:border-white/10 bg-gray-50 dark:bg-white/5 px-3 py-2 sm:py-2.5 text-sm text-gray-900 dark:text-white placeholder:text-gray-400 dark:placeholder:text-white/30 focus:border-gold/40 focus:outline-none focus:ring-1 focus:ring-gold/40 transition-all duration-200", placeholder: t("reservations.form.last_name_placeholder") })
                ] })
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs(motion.div, { variants: itemVariants, className: "grid grid-cols-1 sm:grid-cols-2 gap-3", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("label", { className: "text-[9px] sm:text-[10px] uppercase tracking-widest text-gray-500 dark:text-white/50 mb-1 block", children: [
                    t("reservations.form.email"),
                    " ",
                    /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-red-500", children: "*" })
                  ] }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("input", { type: "email", value: form.email, onChange: (e) => update("email", e.target.value), className: "w-full rounded-sm border border-gray-200 dark:border-white/10 bg-gray-50 dark:bg-white/5 px-3 py-2 sm:py-2.5 text-sm text-gray-900 dark:text-white placeholder:text-gray-400 dark:placeholder:text-white/30 focus:border-gold/40 focus:outline-none focus:ring-1 focus:ring-gold/40 transition-all duration-200", placeholder: t("reservations.form.email_placeholder") })
                ] }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx("label", { className: "text-[9px] sm:text-[10px] uppercase tracking-widest text-gray-500 dark:text-white/50 mb-1 block", children: t("reservations.form.phone") }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("input", { type: "tel", value: form.phone, onChange: (e) => update("phone", e.target.value), className: "w-full rounded-sm border border-gray-200 dark:border-white/10 bg-gray-50 dark:bg-white/5 px-3 py-2 sm:py-2.5 text-sm text-gray-900 dark:text-white placeholder:text-gray-400 dark:placeholder:text-white/30 focus:border-gold/40 focus:outline-none focus:ring-1 focus:ring-gold/40 transition-all duration-200", placeholder: t("reservations.form.phone_placeholder") })
                ] })
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs(motion.div, { variants: itemVariants, className: "grid grid-cols-1 sm:grid-cols-2 gap-3", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("label", { className: "text-[9px] sm:text-[10px] uppercase tracking-widest text-gray-500 dark:text-white/50 mb-1 block", children: [
                    t("reservations.form.date"),
                    " ",
                    /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-red-500", children: "*" })
                  ] }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("input", { type: "date", value: form.date, min: today, onChange: (e) => update("date", e.target.value), className: "w-full rounded-sm border border-gray-200 dark:border-white/10 bg-gray-50 dark:bg-white/5 px-3 py-2 sm:py-2.5 text-sm text-gray-900 dark:text-white focus:border-gold/40 focus:outline-none focus:ring-1 focus:ring-gold/40 scheme-light dark:scheme-dark transition-all duration-200" })
                ] }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("label", { className: "text-[9px] sm:text-[10px] uppercase tracking-widest text-gray-500 dark:text-white/50 mb-1 block", children: [
                    t("reservations.form.time"),
                    " ",
                    /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-red-500", children: "*" })
                  ] }),
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative", children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx("select", { value: form.time, onChange: (e) => update("time", e.target.value), className: "w-full appearance-none rounded-sm border border-gray-200 dark:border-white/10 bg-gray-50 dark:bg-white/5 px-3 py-2 sm:py-2.5 text-sm text-gray-900 dark:text-white focus:border-gold/40 focus:outline-none focus:ring-1 focus:ring-gold/40 transition-all duration-200 cursor-pointer", children: TIMES.map((time) => /* @__PURE__ */ jsxRuntimeExports.jsx("option", { value: time, children: time }, time)) }),
                    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "pointer-events-none absolute inset-y-0 right-0 flex items-center px-3 text-gray-400 dark:text-white/50", children: /* @__PURE__ */ jsxRuntimeExports.jsx("svg", { xmlns: "http://www.w3.org/2000/svg", width: "16", height: "16", viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: "2", strokeLinecap: "round", strokeLinejoin: "round", children: /* @__PURE__ */ jsxRuntimeExports.jsx("path", { d: "m6 9 6 6 6-6" }) }) })
                  ] })
                ] })
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs(motion.div, { variants: itemVariants, className: "grid grid-cols-1 sm:grid-cols-2 gap-3", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "group relative", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx("label", { className: "text-[9px] sm:text-[10px] uppercase tracking-widest text-gray-500 dark:text-white/50 mb-1 block", children: t("reservations.form.party_size") }),
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative", children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsxs("select", { value: form.guests, onChange: (e) => update("guests", parseInt(e.target.value)), className: "w-full appearance-none rounded-sm border border-gray-200 dark:border-white/10 bg-gray-50 dark:bg-white/5 px-3 py-2 sm:py-2.5 text-sm text-gray-900 dark:text-white focus:border-gold/40 focus:outline-none focus:ring-1 focus:ring-gold/40 transition-all duration-200 cursor-pointer", children: [
                      [1, 2, 3, 4, 5, 6, 7, 8, 9].map((num) => /* @__PURE__ */ jsxRuntimeExports.jsxs("option", { value: num, children: [
                        num,
                        " ",
                        num === 1 ? t("reservations.form.guest_one") : t("reservations.form.guest_other")
                      ] }, num)),
                      /* @__PURE__ */ jsxRuntimeExports.jsxs("option", { value: 10, children: [
                        "10+ ",
                        t("reservations.form.guest_other")
                      ] })
                    ] }),
                    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "pointer-events-none absolute inset-y-0 right-0 flex items-center px-3 text-gray-400 dark:text-white/50", children: /* @__PURE__ */ jsxRuntimeExports.jsx("svg", { xmlns: "http://www.w3.org/2000/svg", width: "16", height: "16", viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: "2", strokeLinecap: "round", strokeLinejoin: "round", children: /* @__PURE__ */ jsxRuntimeExports.jsx("path", { d: "m6 9 6 6 6-6" }) }) })
                  ] }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx(AnimatePresence, { children: form.guests > 8 && /* @__PURE__ */ jsxRuntimeExports.jsxs(motion.p, { initial: {
                    opacity: 0,
                    height: 0
                  }, animate: {
                    opacity: 1,
                    height: "auto"
                  }, exit: {
                    opacity: 0,
                    height: 0
                  }, className: "mt-1.5 text-[10px] text-gold flex items-center gap-1.5 overflow-hidden", children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx(Phone, { className: "h-2.5 w-2.5" }),
                    t("reservations.form.large_party_note")
                  ] }) })
                ] }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx("label", { className: "text-[9px] sm:text-[10px] uppercase tracking-widest text-gray-500 dark:text-white/50 mb-1 block", children: t("reservations.form.notes") }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("textarea", { rows: 3, value: form.notes, onChange: (e) => update("notes", e.target.value), className: "w-full rounded-sm border border-gray-200 dark:border-white/10 bg-gray-50 dark:bg-white/5 px-3 py-2 sm:py-2.5 text-sm text-gray-900 dark:text-white placeholder:text-gray-400 dark:placeholder:text-white/30 focus:border-gold/40 focus:outline-none focus:ring-1 focus:ring-gold/40 resize-none transition-all duration-200", placeholder: t("reservations.form.notes_placeholder") })
                ] })
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
              }, className: "rounded-sm bg-red-50 dark:bg-red-900/20 border border-red-200 dark:border-red-800/30 p-2.5 text-center overflow-hidden", children: /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs text-red-600 dark:text-red-400 font-medium", children: err }) }) }),
              /* @__PURE__ */ jsxRuntimeExports.jsx(motion.div, { variants: itemVariants, children: /* @__PURE__ */ jsxRuntimeExports.jsx(motion.button, { whileHover: {
                scale: 1.02,
                boxShadow: "0 20px 25px -5px rgb(255 215 0 / 0.3)"
              }, whileTap: {
                scale: 0.98
              }, type: "submit", className: "w-full rounded-sm bg-gold py-2.5 sm:py-3 text-[10px] sm:text-[11px] uppercase tracking-[0.2em] font-semibold text-gold-foreground shadow-xl transition-all focus:outline-none focus:ring-2 focus:ring-gold/40", children: t("reservations.form.submit") }) })
            ] }, "form") }) }) }) }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-4 sm:space-y-6", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsxs(motion.div, { variants: itemVariants, initial: "hidden", whileInView: "show", viewport: {
                once: true,
                margin: "-50px"
              }, whileHover: {
                y: -4
              }, transition: {
                type: "spring",
                stiffness: 300,
                damping: 25
              }, className: "relative overflow-hidden rounded-sm bg-linear-to-br from-emerald-900 via-emerald-950 to-[#0a1f16] dark:from-emerald-950 dark:via-[#06120d] dark:to-[#030a07] p-4 sm:p-6 text-white shadow-xl shadow-emerald-900/40 border border-emerald-800/20 backdrop-blur-md", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute -top-16 -right-16 w-40 h-40 rounded-full bg-gold/10 blur-3xl" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute -bottom-16 -left-16 w-40 h-40 rounded-full bg-emerald-400/10 blur-3xl" }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2 mb-4 sm:mb-5 pb-3 border-b border-white/10", children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex h-7 w-7 sm:h-8 sm:w-8 items-center justify-center rounded-sm bg-white/10 backdrop-blur-sm shrink-0", children: /* @__PURE__ */ jsxRuntimeExports.jsx(ChefHat, { className: "h-3.5 w-3.5 sm:h-4 sm:w-4 text-gold" }) }),
                    /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "font-display text-base sm:text-lg text-gold tracking-tight", children: t("reservations.summary.title") })
                  ] }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "space-y-3 sm:space-y-4 text-xs sm:text-sm", children: [{
                    icon: CalendarCheck,
                    label: t("reservations.summary.date"),
                    value: form.date || "---"
                  }, {
                    icon: Clock,
                    label: t("reservations.summary.time"),
                    value: form.time
                  }, {
                    icon: Users,
                    label: t("reservations.summary.guests"),
                    value: `${form.guests} ${form.guests === 1 ? t("reservations.form.guest_one") : t("reservations.form.guest_other")}`
                  }, {
                    icon: ChefHat,
                    label: t("reservations.summary.meal"),
                    value: parseInt(form.time) < 17 ? t("reservations.summary.lunch") : t("reservations.summary.dinner")
                  }].map((item, idx) => /* @__PURE__ */ jsxRuntimeExports.jsxs(motion.div, { initial: {
                    opacity: 0,
                    x: 10
                  }, whileInView: {
                    opacity: 1,
                    x: 0
                  }, viewport: {
                    once: true
                  }, transition: {
                    delay: 0.1 * idx
                  }, className: "flex items-start gap-2 sm:gap-3", children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex h-7 w-7 sm:h-8 sm:w-8 items-center justify-center rounded-sm bg-white/10 shrink-0 border border-white/5", children: /* @__PURE__ */ jsxRuntimeExports.jsx(item.icon, { className: "h-3 w-3 sm:h-3.5 sm:w-3.5 text-gold" }) }),
                    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex-1 min-w-0", children: [
                      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-[9px] sm:text-[10px] uppercase tracking-[0.15em] text-emerald-200/60 mb-0.5", children: item.label }),
                      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs sm:text-sm font-medium text-gray-50 truncate capitalize", children: item.value })
                    ] })
                  ] }, idx)) })
                ] })
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs(motion.div, { variants: itemVariants, initial: "hidden", whileInView: "show", viewport: {
                once: true,
                margin: "-50px"
              }, whileHover: {
                y: -4
              }, transition: {
                type: "spring",
                stiffness: 300,
                damping: 25
              }, className: "rounded-sm border border-gray-200/60 dark:border-white/10 bg-white dark:bg-[#1a1510]/90 p-4 sm:p-6 backdrop-blur-md shadow-lg", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("h4", { className: "font-display text-sm sm:text-base text-gray-900 dark:text-white mb-3 sm:mb-4 tracking-tight", children: t("reservations.summary.what_to_expect") }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("ul", { className: "space-y-2 sm:space-y-3 text-xs sm:text-sm text-gray-600 dark:text-white/70", children: [1, 2, 3].map((num) => /* @__PURE__ */ jsxRuntimeExports.jsxs(motion.li, { initial: {
                  opacity: 0,
                  x: 10
                }, whileInView: {
                  opacity: 1,
                  x: 0
                }, viewport: {
                  once: true
                }, transition: {
                  delay: 0.1 * num
                }, className: "flex items-start gap-2", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex h-4 w-4 sm:h-5 sm:w-5 items-center justify-center rounded-full bg-emerald-100 dark:bg-emerald-900/30 shrink-0 mt-0.5", children: /* @__PURE__ */ jsxRuntimeExports.jsx(CircleCheck, { className: "h-2.5 w-2.5 sm:h-3 sm:w-3 text-emerald-600 dark:text-emerald-400" }) }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "leading-relaxed", children: t(`reservations.summary.expect_${num}`) })
                ] }, num)) })
              ] })
            ] })
          ] })
        ] })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("section", { className: "relative py-8 sm:py-10 lg:py-12 bg-transparent", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mx-auto max-w-7xl px-4 sm:px-6 lg:px-12", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs(motion.div, { variants: containerVariants, initial: "hidden", whileInView: "show", viewport: {
          once: true,
          margin: "-50px"
        }, className: "text-center mb-8 sm:mb-12", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs(motion.div, { variants: itemVariants, className: "flex items-center justify-center gap-2 sm:gap-3 mb-3 sm:mb-4", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "h-px w-6 sm:w-8 bg-gold/60" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-[9px] sm:text-[10px] uppercase tracking-[0.3em] sm:tracking-[0.35em] text-gold/80", children: t("reservations.why.badge") }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "h-px w-6 sm:w-8 bg-gold/60" })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs(motion.h2, { variants: itemVariants, className: "font-display text-2xl sm:text-3xl md:text-4xl text-white", children: [
            t("reservations.why.title_line1"),
            /* @__PURE__ */ jsxRuntimeExports.jsx("br", { className: "" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("em", { className: "not-italic text-gold", children: t("reservations.why.title_line2") })
          ] })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(motion.div, { variants: containerVariants, initial: "hidden", whileInView: "show", viewport: {
          once: true,
          margin: "-50px"
        }, className: "grid gap-4 sm:gap-6 grid-cols-2 lg:grid-cols-4", children: REASONS.map((reason, i) => /* @__PURE__ */ jsxRuntimeExports.jsxs(motion.div, { variants: itemVariants, whileHover: {
          y: -8,
          borderColor: "rgba(255,215,0,0.4)"
        }, transition: {
          type: "spring",
          stiffness: 300,
          damping: 25
        }, className: "rounded-sm border border-white/10 bg-[#0f0c09] p-4 sm:p-6 text-center transition-colors", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex h-10 w-10 sm:h-12 sm:w-12 items-center justify-center rounded-full bg-gold/20 mx-auto mb-3 sm:mb-4", children: /* @__PURE__ */ jsxRuntimeExports.jsx(reason.icon, { className: "h-4 w-4 sm:h-5 sm:w-5 text-gold" }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "font-display text-base sm:text-lg text-white mb-1 sm:mb-2", children: t(reason.titleKey) }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs sm:text-sm text-white/50 leading-relaxed", children: t(reason.descKey) })
        ] }, i)) })
      ] }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("section", { className: "relative py-8 sm:py-10 lg:py-12 bg-transparent", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mx-auto max-w-7xl px-4 sm:px-6 lg:px-12", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs(motion.div, { variants: containerVariants, initial: "hidden", whileInView: "show", viewport: {
          once: true,
          margin: "-50px"
        }, className: "text-center mb-8 sm:mb-12", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs(motion.div, { variants: itemVariants, className: "flex items-center justify-center gap-2 sm:gap-3 mb-3 sm:mb-4", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "h-px w-6 sm:w-8 bg-gold/60" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-[9px] sm:text-[10px] uppercase tracking-[0.3em] sm:tracking-[0.35em] text-gold/80", children: t("reservations.testimonials.badge") }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "h-px w-6 sm:w-8 bg-gold/60" })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(motion.h2, { variants: itemVariants, className: "font-display text-2xl sm:text-3xl md:text-4xl text-white", children: t("reservations.testimonials.title") })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(motion.div, { variants: containerVariants, initial: "hidden", whileInView: "show", viewport: {
          once: true,
          margin: "-50px"
        }, className: "grid grid-cols-1 gap-4 sm:gap-6 md:grid-cols-3", children: TESTIMONIALS.map((testimonial, i) => /* @__PURE__ */ jsxRuntimeExports.jsxs(motion.div, { variants: itemVariants, whileHover: {
          y: -8,
          borderColor: "rgba(255,215,0,0.4)"
        }, transition: {
          type: "spring",
          stiffness: 300,
          damping: 25
        }, className: "rounded-sm border border-white/10 bg-[#1a1510] p-4 sm:p-6 transition-colors", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex gap-1 mb-3 sm:mb-4", children: [...Array(testimonial.rating)].map((_, j) => /* @__PURE__ */ jsxRuntimeExports.jsx(motion.div, { initial: {
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
          }, children: /* @__PURE__ */ jsxRuntimeExports.jsx(Star, { className: "h-3.5 w-3.5 sm:h-4 sm:w-4 fill-gold text-gold" }) }, j)) }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("blockquote", { className: "text-xs sm:text-sm text-white/70 leading-relaxed mb-3 sm:mb-4 italic", children: [
            '"',
            testimonial.quote,
            '"'
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2 sm:gap-3", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "h-7 w-7 sm:h-8 sm:w-8 rounded-full bg-gold/20 flex items-center justify-center shrink-0", children: /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-gold text-[10px] sm:text-xs font-bold", children: testimonial.author[0] }) }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "min-w-0", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs sm:text-sm font-medium text-white truncate", children: testimonial.author }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-[10px] sm:text-xs text-white/50 truncate", children: testimonial.location })
            ] })
          ] })
        ] }, i)) })
      ] }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("section", { className: "relative py-10 sm:py-12 lg:py-16 bg-[#1a3a2a]/95", children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-12", children: /* @__PURE__ */ jsxRuntimeExports.jsxs(motion.div, { variants: containerVariants, initial: "hidden", whileInView: "show", viewport: {
        once: true,
        margin: "-50px"
      }, className: "grid grid-cols-1 gap-6 sm:gap-8 lg:grid-cols-2 lg:items-center", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs(motion.div, { variants: itemVariants, className: "flex items-center gap-2 sm:gap-3 mb-3 sm:mb-4", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "h-px w-6 sm:w-8 bg-gold/60" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-[9px] sm:text-[10px] uppercase tracking-[0.3em] sm:tracking-[0.35em] text-gold/80", children: t("reservations.help.badge") })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs(motion.h2, { variants: itemVariants, className: "font-display text-2xl sm:text-3xl md:text-4xl text-gray-200", children: [
            t("reservations.help.title_line1"),
            /* @__PURE__ */ jsxRuntimeExports.jsx("br", { className: "hidden" }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("em", { className: "not-italic text-gold", children: [
              " ",
              t("reservations.help.title_line2")
            ] })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(motion.p, { variants: itemVariants, className: "mt-3 sm:mt-4 text-xs sm:text-sm text-gray-200/60 max-w-lg", children: t("reservations.help.description") })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs(motion.div, { variants: itemVariants, className: "flex flex-col gap-3 sm:gap-4 lg:justify-end", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs(motion.a, { href: "tel:+212524389214", whileHover: {
            scale: 1.03
          }, whileTap: {
            scale: 0.98
          }, transition: {
            type: "spring",
            stiffness: 400,
            damping: 25
          }, className: "inline-flex items-center justify-center gap-2 sm:gap-3 rounded-sm bg-gold px-6 sm:px-8 py-3 sm:py-4 text-xs sm:text-sm font-semibold text-gold-foreground shadow-lg", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(Phone, { className: "h-3.5 w-3.5 sm:h-4 sm:w-4" }),
            t("reservations.help.call")
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs(motion.a, { href: "mailto:reservations@darmedina.ma", whileHover: {
            scale: 1.03
          }, whileTap: {
            scale: 0.98
          }, transition: {
            type: "spring",
            stiffness: 400,
            damping: 25
          }, className: "inline-flex items-center justify-center gap-2 sm:gap-3 rounded-sm border border-white/30 bg-transparent px-6 sm:px-8 py-3 sm:py-4 text-xs sm:text-sm font-semibold text-white hover:bg-white/10 transition-colors", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(Mail, { className: "h-3.5 w-3.5 sm:h-4 sm:w-4" }),
            t("reservations.help.email")
          ] })
        ] })
      ] }) }) })
    ] })
  ] });
}
export {
  Reservations as component
};
