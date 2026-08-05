import { createFileRoute } from "@tanstack/react-router";
import { Link } from "@tanstack/react-router";
import { motion, AnimatePresence, type Variants } from "framer-motion";
import {
  ArrowRight,
  Star,
  Clock,
  MapPin,
  Phone,
  Music,
  Users,
  CheckCircle2,
} from "lucide-react";
import { useEffect, useMemo, useRef, useState } from "react";
import { useTranslation } from "react-i18next";
import heroImg from "@/assets/hero-image.avif";
import BGZ from "@/assets/BGZ.svg";
import chefImg from "@/assets/chef.jpg";
import courtyardImg from "@/assets/gallery-courtyard.jpg";
import lanternsImg from "@/assets/gallery-lanterns.jpg";
import spicesImg from "@/assets/gallery-spices.jpg";
import { MENU } from "@/lib/menu-data";
import axios from "axios";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Dar Medina — Authentic Moroccan Cuisine in Marrakech" },
      {
        name: "description",
        content:
          "Slow-cooked tagines, hand-rolled couscous and warm Moroccan hospitality inside a century-old riad. Reserve your table at Dar Medina.",
      },
      {
        property: "og:title",
        content: "Dar Medina — Authentic Moroccan Cuisine",
      },
      {
        property: "og:description",
        content:
          "Slow-cooked tagines, hand-rolled couscous and warm Moroccan hospitality inside a century-old riad in Marrakech.",
      },
    ],
    links: [{ rel: "canonical", href: "/" }],
  }),
  component: Index,
});

// ==================== ANIMATION VARIANTS ====================

const containerVariants = {
  hidden: {
    opacity: 0,
  },

  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.12,
      delayChildren: 0.1,
    },
  },
} satisfies Variants;

const itemVariants = {
  hidden: {
    opacity: 0,
    y: 40,
  },

  show: {
    opacity: 1,
    y: 0,
    transition: {
      type: "spring",
      stiffness: 60,
      damping: 20,
      duration: 0.8,
    },
  },
} satisfies Variants;

const imageRevealVariants = {
  hidden: {
    opacity: 0,
    scale: 1.1,
  },

  show: {
    opacity: 1,
    scale: 1,
    transition: {
      duration: 1.2,
      ease: [0.22, 1, 0.36, 1] as const,
    },
  },
} satisfies Variants;

const heroTextVariants = {
  hidden: {
    opacity: 0,
    y: 60,
  },

  show: {
    opacity: 1,
    y: 0,
    transition: {
      type: "spring",
      stiffness: 50,
      damping: 25,
      duration: 1,
    },
  },
} satisfies Variants;

const cardHoverVariants = {
  rest: {
    y: 0,
    transition: {
      type: "spring",
      stiffness: 300,
      damping: 25,
    },
  },

  hover: {
    y: -8,
    transition: {
      type: "spring",
      stiffness: 400,
      damping: 25,
    },
  },
} satisfies Variants;

const TIMES = ["19:00", "19:30", "20:00", "20:30", "21:00", "21:30"];

// Local type to ensure compatibility with the rich UI expectations
type MenuDataItem = {
  id: string;
  name: string;
  name_fr?: string;
  name_ar?: string;
  price: number | string;
  popular?: boolean;
  image: string;
};

function Counter({
  to,
  suffix = "",
}: {
  to: number;
  suffix?: string;
}) {
  const [val, setVal] = useState(0);
  const ref = useRef<HTMLSpanElement>(null);
  
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const io = new IntersectionObserver(
      ([e]) => {
        if (!e.isIntersecting) return;
        const start = performance.now();
        const dur = 2000; // Slightly slower for premium feel
        const step = (t: number) => {
          const p = Math.min(1, (t - start) / dur);
          // Ease out cubic
          setVal(Math.round(to * (1 - Math.pow(1 - p, 3))));
          if (p < 1) requestAnimationFrame(step);
        };
        requestAnimationFrame(step);
        io.disconnect();
      },
      { threshold: 0.3 }
    );
    io.observe(el);
    return () => io.disconnect();
  }, [to]);
  
  return (
    <motion.span 
      ref={ref}
      initial={{ opacity: 0, scale: 0.5 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true }}
      transition={{ type: "spring", stiffness: 200, damping: 15 }}
    >
      {val}
      {suffix}
    </motion.span>
  );
}

function SectionLabel({
  text,
  light = false,
}: {
  text: string;
  light?: boolean;
}) {
  return (
    <motion.div 
      variants={itemVariants}
      className="flex items-center justify-center gap-4 mb-3"
    >
      <span
        className={`h-px w-8 ${light ? "bg-foreground/30" : "bg-gold/50"}`}
      />
      <span
        className={`text-[10px] uppercase tracking-[0.35em] ${
          light ? "text-foreground/60" : "text-gold/80"
        }`}
      >
        {text}
      </span>
      <span
        className={`h-px w-8 ${light ? "bg-foreground/30" : "bg-gold/50"}`}
      />
    </motion.div>
  );
}

function Index() {
  const { t, i18n } = useTranslation();
  
  // Replaced Strapi useMenu hook with static MENU data
  const menuData: MenuDataItem[] = useMemo(() => MENU.map((item: any, index: number) => ({
    id: item.id ?? String(index),
    name: item.name ?? "",
    name_fr: item.name_fr ?? item.name,
    name_ar: item.name_ar ?? item.name,
    price: item.price ?? 0,
    popular: item.popular ?? false,
    image: item.image ?? item.src ?? "",
  })), []);
  
  const getName = (dish: MenuDataItem) => {
    switch (i18n.language) {
      case "fr":
        return dish.name_fr || dish.name;
      case "ar":
        return dish.name_ar || dish.name;
      default:
        return dish.name;
    }
  };

  const featured = menuData.filter((m) => m.popular).slice(0, 3);

  // Booking form state
  const [sent, setSent] = useState(false);
  const [form, setForm] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    date: "",
    time: "19:30",
    guests: 2,
    notes: "",
  });
  const [err, setErr] = useState<string | null>(null);

  const update = (k: keyof typeof form, v: string | number) =>
    setForm((f) => ({ ...f, [k]: v }));

  const today = new Date().toISOString().slice(0, 10);

  const submit = async (e: React.FormEvent) => {
    e.preventDefault();
    setErr(null);

    if (
      !form.firstName.trim() ||
      !form.lastName.trim() ||
      !form.email.includes("@") ||
      !form.date
    ) {
      setErr(t("home.booking.error") || "Please fill in all required fields.");
      return;
    }

    try {
      const response = await axios.post(
        "http://localhost:5000/send-reservation-email",
        form
      );

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
          notes: "",
        });
      }
    } catch (err) {
      console.error(err);
      setErr(t("home.booking.submit_error") || "Something went wrong. Please try again.");
    }
  };

  return (
    <>
     <div
    className="fixed inset-0 -z-20 pointer-events-none"
    aria-hidden="true"
  >
    <div
      className="absolute inset-0 opacity-10"
      style={{
        backgroundImage: `url(${BGZ})`,
        backgroundRepeat: "repeat",
        backgroundSize: "650px",
      }}
    />

    {/* Global overlay for the shared background */}
    <div className="absolute inset-0 bg-white/90 dark:bg-black/20" />
  </div>
      {/* ==================== HERO ==================== */}
      <section className="hero-section relative min-h-screen overflow-hidden">
  <motion.img
    src={heroImg}
    alt={t("home.hero.image_alt")}
    className="absolute inset-0 h-full w-full object-cover"
    fetchPriority="high"
    initial={{ scale: 1.15 }}
    animate={{ scale: 1 }}
    transition={{ duration: 2.5, ease: "easeOut" }}
  />
  <div className="absolute inset-0 bg-linear-to-b from-black/50 via-black/30 to-black/70" />

  {/* Hero Content */}
  <div className="relative z-10 flex min-h-screen flex-col items-center justify-center px-4 pb-28 pt-20 text-center sm:px-6 sm:pb-24 md:pb-20">
    <motion.div
      variants={containerVariants}
      initial="hidden"
      animate="show"
      className="max-w-4xl"
    >
      <motion.p
        variants={heroTextVariants}
        className="font-display text-xs italic text-gold/80 sm:mt-5 sm:text-sm"
      >
        — طعم من أصالة —
      </motion.p>
      <motion.h1
        variants={heroTextVariants}
        className="font-display text-4xl leading-[1.1] text-white sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl"
      >
        {t("home.hero.title_line1")}
        <br />
        <em className="not-italic text-gold">{t("home.hero.title_line2")}</em>
      </motion.h1>
      <motion.p
        variants={heroTextVariants}
        className="mx-auto mt-3 max-w-xl px-2 text-sm leading-relaxed text-white/70 sm:mt-4 sm:max-w-2xl sm:px-0 sm:text-base md:text-lg"
      >
        {t("home.hero.description")}
      </motion.p>
      <motion.div
        variants={heroTextVariants}
        className="mt-6 flex w-full flex-col items-center justify-center gap-3 px-4 sm:mt-8 sm:flex-row sm:gap-4 sm:px-0"
      >
        <Link
          to="/reservations"
          className="inline-flex w-full items-center justify-center gap-2 rounded-sm bg-gold px-6 py-3 text-[10px] font-semibold uppercase tracking-[0.2em] text-gold-foreground shadow-xl transition-transform hover:scale-[1.03] sm:w-auto sm:px-8 sm:py-3.5 sm:text-[11px]"
        >
          {t("home.hero.cta_primary")}
        </Link>
        <Link
          to="/menu"
          className="link-menu inline-flex w-full items-center justify-center gap-2 rounded-sm border border-white/40 bg-transparent px-6 py-3 text-[10px] font-semibold uppercase tracking-[0.2em] text-white transition-colors hover:bg-white/10 sm:w-auto sm:px-8 sm:py-3.5 sm:text-[11px]"
        >
          {t("home.hero.cta_secondary")}
        </Link>
      </motion.div>
    </motion.div>
  </div>

  {/* Info bar */}
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ delay: 1.2, duration: 0.8 }}
    className="absolute bottom-0 left-0 right-0 flex flex-col items-center justify-center gap-3 border-t border-gray-50/20 bg-gray-950/40 px-4 py-4 text-xs text-white/70 backdrop-blur-sm sm:flex-row sm:gap-6 sm:px-6 sm:py-3"
  >
    <span className="flex items-center gap-2">
      <Clock className="h-3.5 w-3.5 text-gold" />
      {t("home.hero.open_hours")}
    </span>
    <span className="hidden h-3 w-px bg-white/20 sm:inline-block" />
    <span className="flex items-center gap-2">
      <MapPin className="h-3.5 w-3.5 text-gold" />
      {t("home.hero.location")}
    </span>
    <span className="hidden h-3 w-px bg-white/20 sm:inline-block" />
    <span className="flex items-center gap-2">
      <Phone className="h-3.5 w-3.5 text-gold" />
      212 000 000 000
    </span>
  </motion.div>
</section>


        {/* ==================== OUR STORY ==================== */}
        <section className="light relative py-10 sm:py-12 dark:bg-transparent">
          <div className="relative mx-auto max-w-7xl px-6 lg:px-12">
            <div className="grid gap-10 lg:grid-cols-2 lg:items-center lg:gap-16">
              {/* Image */}
              <motion.div
                variants={containerVariants}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true, margin: "-100px" }}
                className="relative"
              >
                <motion.div 
                  variants={imageRevealVariants}
                  className="relative mx-auto max-w-md overflow-hidden rounded-t-[50%] rounded-b-lg border-4 border-gold/20 shadow-2xl"
                  style={{
                    clipPath: "polygon(0% 15%, 50% 0%, 100% 15%, 100% 100%, 0% 100%)",
                  }}
                >
                  <img
                    src={chefImg}
                    alt={t("home.chef.image_alt")}
                    loading="lazy"
                    className="h-full w-full object-cover"
                  />
                </motion.div>
                <motion.div 
                  variants={itemVariants}
                  className="absolute -bottom-3 left-1/2 -translate-x-1/2 rounded-sm bg-[#1a1510] px-5 py-3 text-center shadow-xl"
                >
                  <p className="font-display text-2xl text-gold">25+</p>
                  <p className="text-[10px] uppercase tracking-widest text-white/60">
                    {t("home.chef.years_label")}
                  </p>
                </motion.div>
              </motion.div>

              {/* Text */}
              <motion.div
                variants={containerVariants}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true, margin: "-100px" }}
              >
                <SectionLabel text={t("home.story.label")} />

                <motion.h2 
                  variants={itemVariants}
                  className="font-display text-3xl leading-tight text-balance sm:text-4xl text-white"
                >
                  {t("home.story.title_line1")}
                  <br />
                  <em className="not-italic text-gold">
                    {t("home.story.title_line2")}
                  </em>
                </motion.h2>

                <motion.p 
                  variants={itemVariants}
                  className="mt-4 text-sm leading-relaxed text-white/80"
                >
                  {t("home.chef.description")}
                </motion.p>

                {/* Stats */}
                <motion.div 
                  variants={itemVariants}
                  className="mt-6 grid grid-cols-3 gap-3"
                >
                  {[
                    { n: 120, s: "+", l: t("home.stats.dishes") },
                    { n: 4.9, s: "", l: t("home.stats.rating") },
                    { n: 50, s: "k+", l: t("home.stats.guests") },
                  ].map((it) => (
                    <motion.div
                      key={it.l}
                      whileHover={{ y: -4, borderColor: "rgba(255,215,0,0.4)" }}
                      transition={{ type: "spring", stiffness: 300, damping: 20 }}
                      className="rounded-sm border border-white/20 bg-white/10 p-3 text-center backdrop-blur-sm"
                    >
                      <div className="font-display text-xl text-white sm:text-2xl">
                        <Counter to={it.n} suffix={it.s} />
                      </div>
                      <div className="mt-0.5 text-[10px] uppercase tracking-widest text-white/70">
                        {it.l}
                      </div>
                    </motion.div>
                  ))}
                </motion.div>

                <motion.div variants={itemVariants}>
                  <Link
                    to="/about"
                    className="mt-6 inline-flex items-center gap-2 text-[11px] font-medium uppercase tracking-[0.2em] text-white transition-colors hover:text-gold group"
                  >
                    {t("home.chef.story_link")}
                    <ArrowRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-1" />
                  </Link>
                </motion.div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* ==================== THE EXPERIENCE / GALLERY ==================== */}
        <section className="relative light py-10 sm:py-12 bg-transparent">
          <div className="relative mx-auto max-w-7xl px-6 lg:px-12">
            <motion.div
              variants={containerVariants}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, margin: "-50px" }}
              className="text-center mb-8"
            >
              <SectionLabel text={t("home.experience.label")} />

              <motion.h2 
                variants={itemVariants}
                className="font-display text-3xl leading-tight text-balance text-white sm:text-4xl"
              >
                {t("home.experience.title_line1")}
                <br />
                <em className="not-italic text-gold">
                  {t("home.experience.title_line2")}
                </em>
              </motion.h2>
            </motion.div>

            {/* Gallery Grid */}
            <motion.div 
              variants={containerVariants}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, margin: "-50px" }}
              className="grid gap-3 lg:grid-cols-[1.2fr_1fr]"
            >
              {/* Large image */}
              <motion.div
                variants={itemVariants}
                className="relative aspect-4/3 overflow-hidden rounded-sm shadow-xl group"
              >
                <motion.img
                  src={courtyardImg}
                  alt={t("home.gallery.images.courtyard")}
                  loading="lazy"
                  className="h-full w-full object-cover"
                  whileHover={{ scale: 1.08 }}
                  transition={{ duration: 0.7, ease: "easeOut" }}
                />
              </motion.div>

              {/* 2x2 grid */}
              <div className="grid grid-cols-2 gap-3">
                {[
                  { src: lanternsImg, alt: t("home.gallery.images.lanterns") },
                  {
                    src: spicesImg,
                    alt: t("home.gallery.images.spices"),
                    caption: t("home.gallery.captions.rooftop"),
                  },
                  {
                    src: chefImg,
                    alt: t("home.gallery.captions.live_music_alt"),
                    caption: t("home.gallery.captions.live_music"),
                  },
                  {
                    src: featured[0]?.image || courtyardImg,
                    alt: t("home.gallery.captions.signature_dishes_alt"),
                    caption: t("home.gallery.captions.signature_dishes"),
                  },
                ].map((img, i) => (
                  <motion.div
                    key={i}
                    variants={itemVariants}
                    custom={i}
                    className="relative aspect-4/3 overflow-hidden rounded-sm shadow-lg group"
                  >
                    <motion.img
                      src={img.src}
                      alt={img.alt}
                      loading="lazy"
                      className="h-full w-full object-cover"
                      whileHover={{ scale: 1.08 }}
                      transition={{ duration: 0.7, ease: "easeOut" }}
                    />
                  </motion.div>
                ))}
              </div>
            </motion.div>

            <motion.div 
              variants={itemVariants}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true }}
              className="mt-8 text-center"
            >
              <Link
                to="/gallery"
                className="inline-flex items-center gap-2 text-[11px] uppercase tracking-[0.2em] font-medium dark text-white hover:text-gold transition-colors group"
              >
                {t("home.gallery.see_gallery")}
                <ArrowRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-1" />
              </Link>
            </motion.div>
          </div>
        </section>

        {/* ==================== FEATURED SIGNATURE DISHES ==================== */}
        <section className="relative light overflow-hidden bg-transparent py-10 sm:py-12">
          <div className="relative">
            <div className="py-10 sm:py-12">
              <div className="mx-auto max-w-7xl px-6 lg:px-12">
                <motion.div
                  variants={containerVariants}
                  initial="hidden"
                  whileInView="show"
                  viewport={{ once: true, margin: "-50px" }}
                  className="text-center mb-8"
                >
                  <SectionLabel text={t("home.featured.label")} />
                  <motion.h2 
                    variants={itemVariants}
                    className="font-display text-3xl sm:text-4xl text-white"
                  >
                    {t("home.featured.title_line1")}
                    <br />
                    <em className="not-italic text-gold">
                      {t("home.featured.title_line2")}
                    </em>
                  </motion.h2>
                </motion.div>

                <motion.div 
                  variants={containerVariants}
                  initial="hidden"
                  whileInView="show"
                  viewport={{ once: true, margin: "-50px" }}
                  className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3"
                >
                  {featured.map((dish, i) => (
                    <motion.article
                      key={dish.id}
                      custom={i}
                      initial="rest"
                      whileHover="hover"
                      animate="rest"
                      variants={cardHoverVariants}
                      className="group relative overflow-hidden rounded-sm shadow-2xl"
                    >
                      <div className="relative aspect-4/3 overflow-hidden">
                        <motion.img
                          src={dish.image}
                          alt={getName(dish)}
                          loading="lazy"
                          className="h-full w-full object-cover"
                          whileHover={{ scale: 1.1 }}
                          transition={{ duration: 0.6, ease: "easeOut" }}
                        />

                        <div className="absolute inset-0 bg-linear-to-t from-black/80 via-black/20 to-transparent" />

                        {dish.popular && (
                          <motion.span 
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.3 + (i * 0.1), duration: 0.5 }}
                            className="absolute left-4 top-4 rounded-sm bg-gold/90 px-3 py-1 text-[9px] font-semibold uppercase tracking-wider text-gold-foreground"
                          >
                            {t("home.featured.chefs_choice")}
                          </motion.span>
                        )}

                        <div className="dark absolute inset-x-4 bottom-4 text-white">
                          <h3 className="font-display text-lg leading-tight">
                            {getName(dish)}
                          </h3>
                          <p className="mt-1 text-sm font-medium text-gold">
                            {t("home.featured.price_prefix")}
                            {dish.price}
                            {t("home.featured.price_suffix")}
                          </p>
                        </div>
                      </div>
                    </motion.article>
                  ))}
                </motion.div>

                <motion.div 
                  variants={itemVariants}
                  initial="hidden"
                  whileInView="show"
                  viewport={{ once: true }}
                  className="mt-8 text-center"
                >
                  <Link
                    to="/menu"
                    className="inline-flex items-center gap-2 rounded-sm border border-gold/40 px-8 py-2.5 text-[11px] uppercase tracking-[0.2em] font-medium text-gold hover:bg-gold/10 transition-colors group"
                  >
                    {t("home.featured.view_menu")}
                    <ArrowRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-1" />
                  </Link>
                </motion.div>
              </div>
            </div>

            {/* ================= TESTIMONIALS ================= */}
            <div className="py-10 sm:py-12">
              <div className="mx-auto max-w-7xl px-6 lg:px-12">
                <motion.div
                  variants={containerVariants}
                  initial="hidden"
                  whileInView="show"
                  viewport={{ once: true, margin: "-50px" }}
                  className="text-center mb-8"
                >
                  <SectionLabel text={t("home.testimonials.label")} />
                  <motion.h2 
                    variants={itemVariants}
                    className="font-display text-3xl sm:text-4xl text-white"
                  >
                    {t("home.testimonials.title_line1")}
                    <br />
                    <em className="not-italic text-gold">
                      {t("home.testimonials.title_line2")}
                    </em>
                  </motion.h2>
                </motion.div>

                <motion.div 
                  variants={containerVariants}
                  initial="hidden"
                  whileInView="show"
                  viewport={{ once: true, margin: "-50px" }}
                  className="grid gap-4 md:grid-cols-3"
                >
                  {[
                    {
                      q: t("home.testimonials.items.1.quote"),
                      a: "Sophie Laurent",
                      c: "Paris, France",
                    },
                    {
                      q: t("home.testimonials.items.2.quote"),
                      a: "Amida & James Chen",
                      c: "London, UK",
                    },
                    {
                      q: t("home.testimonials.items.3.quote"),
                      a: "Marcus Dubowski",
                      c: "New York City, USA",
                    },
                  ].map((testimonial, i) => (
                    <motion.figure
                      key={i}
                      variants={itemVariants}
                      custom={i}
                      initial="rest"
                      whileHover="hover"
                      animate="rest"
                      
                      className="rounded-sm border border-white/10 bg-white/5 p-5 backdrop-blur-sm"
                    >
                      <div className="flex gap-1 mb-3">
                        {Array.from({ length: 5 }).map((_, j) => (
                          <motion.div
                            key={j}
                            initial={{ opacity: 0, scale: 0 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ delay: (i * 0.1) + (j * 0.05), type: "spring", stiffness: 300 }}
                          >
                            <Star className="h-3.5 w-3.5 fill-gold text-gold" />
                          </motion.div>
                        ))}
                      </div>

                      <blockquote className="font-display text-sm italic text-white/90">
                        "{testimonial.q}"
                      </blockquote>

                      <figcaption className="mt-4 flex items-center gap-3">
                        <div className="h-9 w-9 rounded-full bg-gold/20 flex items-center justify-center">
                          <span className="text-gold text-xs font-display font-bold">
                            {testimonial.a[0]}
                          </span>
                        </div>

                        <div>
                          <div className="text-sm font-semibold text-white">
                            {testimonial.a}
                          </div>
                          <div className="text-[10px] uppercase tracking-widest text-white/50">
                            {testimonial.c}
                          </div>
                        </div>
                      </figcaption>
                    </motion.figure>
                  ))}
                </motion.div>
              </div>
            </div>
          </div>
        </section>

        {/* ==================== RESERVE YOUR MOROCCAN EVENING ==================== */}
        <section className="relative light py-10 sm:py-12 overflow-hidden">
          <motion.img
            src={courtyardImg}
            alt={t("home.cta.image_alt")}
            className="absolute inset-0 h-full w-full object-cover"
            loading="lazy"
            initial={{ scale: 1.1 }}
            whileInView={{ scale: 1 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 1.5, ease: "easeOut" }}
          />
          <div className="absolute inset-0 bg-linear-to-r from-[#1a1510]/95 via-[#1a1510]/80 to-[#1a1510]/60" />

          <div className="relative mx-auto max-w-7xl px-6 lg:px-12">
            <div className="grid gap-10 lg:grid-cols-2 lg:items-start">
              {/* Left: Text */}
              <motion.div
                variants={containerVariants}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true, margin: "-50px" }}
              >
                <SectionLabel text={t("home.reservations.label")} />
                <motion.h2 
                  variants={itemVariants}
                  className="font-display text-3xl leading-tight text-balance sm:text-4xl dark text-white"
                >
                  {t("home.reservations.title_line1")}
                  <br />
                  <em className="not-italic text-gold">
                    {t("home.reservations.title_line2")}
                  </em>
                </motion.h2>
                <motion.p 
                  variants={itemVariants}
                  className="mt-4 max-w-md text-sm leading-relaxed dark text-white/70"
                >
                  {t("home.cta.description")}
                </motion.p>

                <motion.div variants={itemVariants} className="mt-6 space-y-3">
                  <motion.div 
                    whileHover={{ x: 4 }}
                    transition={{ type: "spring", stiffness: 300, damping: 20 }}
                    className="flex items-center gap-3"
                  >
                    <div className="flex h-9 w-9 items-center justify-center rounded-full border border-gold/30">
                      <Users className="h-3.5 w-3.5 text-gold" />
                    </div>
                    <div>
                      <p className="text-sm font-semibold dark text-white">
                        {t("home.reservations.private_dining_title")}
                      </p>
                      <p className="text-xs dark text-white/50">
                        {t("home.reservations.private_dining_desc")}
                      </p>
                    </div>
                  </motion.div>
                  <motion.div 
                    whileHover={{ x: 4 }}
                    transition={{ type: "spring", stiffness: 300, damping: 20 }}
                    className="flex items-center gap-3"
                  >
                    <div className="flex h-9 w-9 items-center justify-center rounded-full border border-gold/30">
                      <Music className="h-3.5 w-3.5 text-gold" />
                    </div>
                    <div>
                      <p className="text-sm font-semibold dark text-white">
                        {t("home.reservations.live_music_title")}
                      </p>
                      <p className="text-xs dark text-white/50">
                        {t("home.reservations.live_music_desc")}
                      </p>
                    </div>
                  </motion.div>
                </motion.div>
              </motion.div>

              {/* Right: Booking Form */}
              <motion.div
                variants={itemVariants}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true, margin: "-50px" }}
                layout
                className="rounded-2xl border bg-white dark:bg-[#1a1510]/95 p-8 backdrop-blur-xl shadow-2xl transition-colors duration-300 border-stone-200 dark:border-white/10"
              >
                <motion.h3 
                  layout
                  className="font-display text-2xl font-bold text-stone-800 dark:text-white mb-6 transition-colors"
                >
                  {t("home.booking.form_title")}
                </motion.h3>

                <AnimatePresence mode="wait">
                  {sent ? (
                    <motion.div
                      key="success"
                      initial={{ opacity: 0, y: 20, scale: 0.95 }}
                      animate={{ opacity: 1, y: 0, scale: 1 }}
                      exit={{ opacity: 0, y: -20, scale: 0.95 }}
                      transition={{ type: "spring", stiffness: 300, damping: 25 }}
                      className="flex flex-col items-center justify-center py-8 text-center"
                    >
                      <div className="relative mb-5">
                        <motion.div 
                          initial={{ scale: 0 }}
                          animate={{ scale: 1 }}
                          transition={{ delay: 0.2, type: "spring", stiffness: 200, damping: 15 }}
                          className="absolute inset-0 bg-emerald-500/20 blur-2xl rounded-full" 
                        />
                        <motion.div 
                          initial={{ scale: 0, rotate: -45 }}
                          animate={{ scale: 1, rotate: 0 }}
                          transition={{ delay: 0.3, type: "spring", stiffness: 200, damping: 15 }}
                          className="relative flex h-14 w-14 items-center justify-center rounded-full bg-linear-to-br from-emerald-500 to-emerald-700 shadow-lg shadow-emerald-500/40"
                        >
                          <CheckCircle2 className="h-7 w-7 text-white" strokeWidth={2.2} />
                        </motion.div>
                      </div>
                      <motion.h2 
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.4 }}
                        className="font-display text-xl sm:text-2xl lg:text-3xl text-stone-800 dark:text-white mb-2 tracking-tight"
                      >
                        {t("home.booking.success_title", { name: form.firstName })}
                      </motion.h2>
                      <motion.p 
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.5 }}
                        className="max-w-md text-stone-500 dark:text-white/60 leading-relaxed text-sm mb-5"
                      >
                        {t("home.booking.success_description", {
                          guests: form.guests,
                          date: form.date,
                          time: form.time,
                          email: form.email,
                        })}
                      </motion.p>
                      <motion.button
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.6 }}
                        whileHover={{ scale: 1.02 }}
                        whileTap={{ scale: 0.98 }}
                        onClick={() => {
                          setSent(false);
                          setForm({
                            firstName: "",
                            lastName: "",
                            email: "",
                            phone: "",
                            date: "",
                            time: "19:30",
                            guests: 2,
                            notes: "",
                          });
                        }}
                        className="group inline-flex items-center gap-2 rounded-sm bg-gold px-6 py-2.5 text-[11px] uppercase tracking-[0.2em] font-semibold text-gold-foreground shadow-xl transition-transform focus:outline-none focus:ring-2 focus:ring-gold/40"
                      >
                        {t("home.booking.make_another")}
                        <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                      </motion.button>
                    </motion.div>
                  ) : (
                    <motion.form 
                      key="form"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      exit={{ opacity: 0 }}
                      className="space-y-5" 
                      onSubmit={submit}
                    >
                      {/* Name Fields */}
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        <motion.div 
                          initial={{ opacity: 0, x: -20 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ delay: 0.1 }}
                          className="group"
                        >
                          <label className="text-xs uppercase tracking-widest text-stone-500 dark:text-white/50 mb-2 block transition-colors">
                            {t("home.booking.first_name")} <span className="text-red-500">*</span>
                          </label>
                          <input
                            type="text"
                            value={form.firstName}
                            onChange={(e) => update("firstName", e.target.value)}
                            placeholder="Ahmed"
                            className="w-full rounded-lg border border-stone-300 dark:border-white/10 bg-stone-50 dark:bg-white/5 px-4 py-3 text-sm text-stone-800 dark:text-white placeholder:text-stone-400 dark:placeholder:text-white/30 focus:border-amber-500 dark:focus:border-amber-400 focus:ring-2 focus:ring-amber-500/20 dark:focus:ring-amber-400/20 focus:outline-none transition-all duration-200"
                          />
                        </motion.div>
                        <motion.div 
                          initial={{ opacity: 0, x: 20 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ delay: 0.15 }}
                          className="group"
                        >
                          <label className="text-xs uppercase tracking-widest text-stone-500 dark:text-white/50 mb-2 block transition-colors">
                            {t("home.booking.last_name")} <span className="text-red-500">*</span>
                          </label>
                          <input
                            type="text"
                            value={form.lastName}
                            onChange={(e) => update("lastName", e.target.value)}
                            placeholder="Benali"
                            className="w-full rounded-lg border border-stone-300 dark:border-white/10 bg-stone-50 dark:bg-white/5 px-4 py-3 text-sm text-stone-800 dark:text-white placeholder:text-stone-400 dark:placeholder:text-white/30 focus:border-amber-500 dark:focus:border-amber-400 focus:ring-2 focus:ring-amber-500/20 dark:focus:ring-amber-400/20 focus:outline-none transition-all duration-200"
                          />
                        </motion.div>
                      </div>

                      {/* Email */}
                      <motion.div 
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.2 }}
                        className="group"
                      >
                        <label className="text-xs uppercase tracking-widest text-stone-500 dark:text-white/50 mb-2 block transition-colors">
                          {t("home.booking.email")} <span className="text-red-500">*</span>
                        </label>
                        <input
                          type="email"
                          value={form.email}
                          onChange={(e) => update("email", e.target.value)}
                          placeholder="ahmed@example.com"
                          className="w-full rounded-lg border border-stone-300 dark:border-white/10 bg-stone-50 dark:bg-white/5 px-4 py-3 text-sm text-stone-800 dark:text-white placeholder:text-stone-400 dark:placeholder:text-white/30 focus:border-amber-500 dark:focus:border-amber-400 focus:ring-2 focus:ring-amber-500/20 dark:focus:ring-amber-400/20 focus:outline-none transition-all duration-200"
                        />
                      </motion.div>

                      {/* Phone */}
                      <motion.div 
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.25 }}
                        className="group"
                      >
                        <label className="text-xs uppercase tracking-widest text-stone-500 dark:text-white/50 mb-2 block transition-colors">
                          {t("reservations.form.phone")}
                        </label>
                        <input
                          type="tel"
                          value={form.phone}
                          onChange={(e) => update("phone", e.target.value)}
                          placeholder="+212 6XX XXX XXX"
                          className="w-full rounded-lg border border-stone-300 dark:border-white/10 bg-stone-50 dark:bg-white/5 px-4 py-3 text-sm text-stone-800 dark:text-white placeholder:text-stone-400 dark:placeholder:text-white/30 focus:border-amber-500 dark:focus:border-amber-400 focus:ring-2 focus:ring-amber-500/20 dark:focus:ring-amber-400/20 focus:outline-none transition-all duration-200"
                        />
                      </motion.div>

                      {/* Date & Time */}
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        <motion.div 
                          initial={{ opacity: 0, y: 20 }}
                          animate={{ opacity: 1, y: 0 }}
                          transition={{ delay: 0.3 }}
                          className="group"
                        >
                          <label className="text-xs uppercase tracking-widest text-stone-500 dark:text-white/50 mb-2 block transition-colors">
                            {t("home.booking.date")} <span className="text-red-500">*</span>
                          </label>
                          <input
                            type="date"
                            value={form.date}
                            min={today}
                            onChange={(e) => update("date", e.target.value)}
                            className="w-full rounded-lg border border-stone-300 dark:border-white/10 bg-stone-50 dark:bg-white/5 px-4 py-3 text-sm text-stone-800 dark:text-white focus:border-amber-500 dark:focus:border-amber-400 focus:ring-2 focus:ring-amber-500/20 dark:focus:ring-amber-400/20 focus:outline-none transition-all duration-200 [&::-webkit-calendar-picker-indicator]:dark:invert"
                          />
                        </motion.div>
                        <motion.div 
                          initial={{ opacity: 0, y: 20 }}
                          animate={{ opacity: 1, y: 0 }}
                          transition={{ delay: 0.35 }}
                          className="group"
                        >
                          <label className="text-xs uppercase tracking-widest text-stone-500 dark:text-white/50 mb-2 block transition-colors">
                            {t("home.booking.time")} <span className="text-red-500">*</span>
                          </label>
                          <select
                            value={form.time}
                            onChange={(e) => update("time", e.target.value)}
                            className="w-full rounded-lg border border-stone-300 dark:border-white/10 bg-stone-50 dark:bg-white/5 px-4 py-3 text-sm text-stone-800 dark:text-white focus:border-amber-500 dark:focus:border-amber-400 focus:ring-2 focus:ring-amber-500/20 dark:focus:ring-amber-400/20 focus:outline-none transition-all duration-200 appearance-none cursor-pointer"
                          >
                            {TIMES.map((time) => (
                              <option key={time} value={time}>
                                {time}
                              </option>
                            ))}
                          </select>
                        </motion.div>
                      </div>

                      {/* Guests */}
                      <motion.div 
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.4 }}
                        className="group"
                      >
                        <label className="text-xs uppercase tracking-widest text-stone-500 dark:text-white/50 mb-2 block transition-colors">
                          {t("home.booking.guests")}
                        </label>
                        <select
                          value={form.guests}
                          onChange={(e) => update("guests", parseInt(e.target.value))}
                          className="w-full appearance-none rounded-sm border border-gray-200 dark:border-white/10 bg-gray-50 dark:bg-white/5 px-3 py-2 sm:py-2.5 text-sm text-gray-900 dark:text-white focus:border-gold/40 focus:outline-none focus:ring-1 focus:ring-gold/40"
                        >
                          {[1, 2, 3, 4, 5, 6, 7, 8, 9].map((num) => (
                            <option key={num} value={num}>
                              {num} {num === 1 ? t("reservations.form.guest_one") : t("reservations.form.guest_other")}
                            </option>
                          ))}
                          <option value={10}>10+ {t("reservations.form.guest_other")}</option>
                        </select>
                      </motion.div>

                      {/* Special Requests */}
                      <motion.div 
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.45 }}
                        className="group"
                      >
                        <label className="text-xs uppercase tracking-widest text-stone-500 dark:text-white/50 mb-2 block transition-colors">
                          {t("home.booking.special_requests")}
                        </label>
                        <textarea
                          rows={3}
                          value={form.notes}
                          onChange={(e) => update("notes", e.target.value)}
                          placeholder={t("home.booking.special_requests_placeholder")}
                          className="w-full rounded-lg border border-stone-300 dark:border-white/10 bg-stone-50 dark:bg-white/5 px-4 py-3 text-sm text-stone-800 dark:text-white placeholder:text-stone-400 dark:placeholder:text-white/30 focus:border-amber-500 dark:focus:border-amber-400 focus:ring-2 focus:ring-amber-500/20 dark:focus:ring-amber-400/20 focus:outline-none resize-none transition-all duration-200"
                        />
                      </motion.div>

                      {/* Error Message */}
                      <AnimatePresence>
                        {err && (
                          <motion.div
                            initial={{ opacity: 0, height: 0 }}
                            animate={{ opacity: 1, height: "auto" }}
                            exit={{ opacity: 0, height: 0 }}
                            className="rounded-lg bg-red-50 dark:bg-red-900/20 border border-red-200 dark:border-red-800/30 p-3 text-center overflow-hidden"
                          >
                            <p className="text-xs text-red-600 dark:text-red-400 font-medium">
                              {err}
                            </p>
                          </motion.div>
                        )}
                      </AnimatePresence>

                      {/* Submit Button */}
                      <motion.button
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.5 }}
                        whileHover={{ scale: 1.02, boxShadow: "0 20px 25px -5px rgb(255 215 0 / 0.3)" }}
                        whileTap={{ scale: 0.98 }}
                        type="submit"
                        className="w-full rounded-lg bg-gold py-4 text-xs uppercase tracking-[0.25em] font-bold text-gold-foreground shadow-lg shadow-gold/25 transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-gold/50 focus:ring-offset-2 focus:ring-offset-white dark:focus:ring-offset-[#1a1510]"
                      >
                        {t("home.booking.confirm_button")}
                      </motion.button>
                    </motion.form>
                  )}
                </AnimatePresence>
              </motion.div>
            </div>
          </div>
        </section>
     
    </>
  );
}