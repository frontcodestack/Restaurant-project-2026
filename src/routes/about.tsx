import { createFileRoute, Link } from "@tanstack/react-router";
import { motion, AnimatePresence, type Variants } from "framer-motion";
import chefImg from "@/assets/chef.jpg";
import courtyardImg from "@/assets/gallery-courtyard.jpg";
import BGZ from "@/assets/BGZ.svg";
import spicesImg from "@/assets/gallery-spices.jpg";
import { useGallery } from "@/hooks/useGallery";
import type { GalleryCategory } from "@/types/gallery";
import { 
  Leaf, 
  Heart, 
  Sparkles, 
  Hand, 
  Clock, 
  Award, 
  Users, 
  UtensilsCrossed,
  Star,
  Coffee,
  Music,
  Gem,
  Lamp,
  Palette
} from "lucide-react";
import { useTranslation } from "react-i18next";


export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "Our Story — Dar Medina" },
      { name: "description", content: "A century-old riad, four generations of Marrakchi recipes and a team devoted to the slow rituals of Moroccan hospitality." },
      { property: "og:title", content: "Our Story — Dar Medina" },
      { property: "og:description", content: "A century-old riad, four generations of Marrakchi recipes and a team devoted to slow Moroccan hospitality." },
    ],
    links: [{ rel: "canonical", href: "/about" }],
  }),
  component: About,
});

// ==================== ANIMATION VARIANTS ====================

const containerVariants = {
  hidden: {
    opacity: 0,
  },

  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
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
      ease: [0.22, 1, 0.36, 1],
    },
  },
} satisfies Variants;

function About() {
  const { t } = useTranslation();
  const { data: galleryData = [] } = useGallery();

  const STATS = [
    { value: "15+", label: t("about.stats.years"), icon: Clock },
    { value: "3", label: t("about.stats.michelin"), icon: Star },
    { value: "48K+", label: t("about.stats.guests"), icon: Users },
    { value: "120+", label: t("about.stats.dishes"), icon: UtensilsCrossed },
  ];

  const CULINARY_PRINCIPLES = [
    { 
      icon: Leaf, 
      titleKey: "about.principles.seasonal.title", 
      descKey: "about.principles.seasonal.desc",
      color: "text-green-400"
    },
    { 
      icon: Clock, 
      titleKey: "about.principles.technique.title", 
      descKey: "about.principles.technique.desc",
      color: "text-amber-400"
    },
    { 
      icon: Sparkles, 
      titleKey: "about.principles.spice.title", 
      descKey: "about.principles.spice.desc",
      color: "text-orange-400"
    },
    { 
      icon: Heart, 
      titleKey: "about.principles.hospitality.title", 
      descKey: "about.principles.hospitality.desc",
      color: "text-rose-400"
    },
  ];

  const TEAM = [
    { name: "Chef Hassan El Mansouri", roleKey: "about.team.roles.executive_chef", img: chefImg },
    { name: "Fatima Benouda", roleKey: "about.team.roles.pastry", img: chefImg },
    { name: "Omar Khalidi", roleKey: "about.team.roles.sommelier", img: chefImg },
    { name: "Nadia Tazi", roleKey: "about.team.roles.host", img: chefImg },
  ];

  const AWARDS = [
    {
      icon: Star,
      title: t("about.awards.items.michelin.title"),
      year: "2024",
      desc: t("about.awards.items.michelin.desc")
    },
    {
      icon: Award,
      title: t("about.awards.items.worlds_best.title"),
      year: "2023",
      desc: t("about.awards.items.worlds_best.desc")
    },
    {
      icon: Gem,
      title: t("about.awards.items.best_morocco.title"),
      year: "2024",
      desc: t("about.awards.items.best_morocco.desc")
    },
    {
      icon: Leaf,
      title: t("about.awards.items.green_star.title"),
      year: "2023",
      desc: t("about.awards.items.green_star.desc")
    },
  ];

  const DESIGN_ELEMENTS = [
    {
      img: galleryData[0]?.image || courtyardImg,
      title: t("about.design.elements.zellij.title"),
      desc: t("about.design.elements.zellij.desc"),
      featured: true,
      label: "Featured"
    },
    {
      img: galleryData[1]?.image || courtyardImg,
      title: t("about.design.elements.lighting.title"),
      desc: t("about.design.elements.lighting.desc"),
      featured: false
    },
    {
      img: galleryData[2]?.image || spicesImg,
      title: t("about.design.elements.ceilings.title"),
      desc: t("about.design.elements.ceilings.desc"),
      featured: false
    },
    {
      img: galleryData[3]?.image || courtyardImg,
      title: t("about.design.elements.arches.title"),
      desc: t("about.design.elements.arches.desc"),
      featured: false
    },
    {
      img: galleryData[5]?.image || courtyardImg,
      title: t("about.design.elements.ceramics.title"),
      desc: t("about.design.elements.ceramics.desc"),
      featured: true,
    },
    {
      img: galleryData[4]?.image || courtyardImg,
      label: "Signature",
      title: t("about.design.elements.plasterwork.title"),
      desc: t("about.design.elements.plasterwork.desc"),
      featured: false
    },
  ];

  const HOSPITALITY_FEATURES = [
    {
      icon: Hand,
      titleKey: "about.hospitality.welcome.title",
      descKey: "about.hospitality.welcome.desc"
    },
    {
      icon: Coffee,
      titleKey: "about.hospitality.tea.title",
      descKey: "about.hospitality.tea.desc"
    },
    {
      icon: Users,
      titleKey: "about.hospitality.service.title",
      descKey: "about.hospitality.service.desc"
    },
    {
      icon: Music,
      titleKey: "about.hospitality.music.title",
      descKey: "about.hospitality.music.desc"
    },
    {
      icon: Lamp,
      titleKey: "about.hospitality.ambiance.title",
      descKey: "about.hospitality.ambiance.desc"
    },
    {
      icon: Palette,
      titleKey: "about.hospitality.private.title",
      descKey: "about.hospitality.private.desc"
    },
  ];

  return (
    <>
      {/* ==================== HERO ==================== */}
      <section className="hero-section relative min-h-90 sm:h-[80dvh] overflow-hidden">
        <motion.div 
          className="absolute inset-0 bg-cover bg-center bg-fixed"
          style={{ backgroundImage: "url('https://images.unsplash.com/photo-1539020140153-e479b8c22e70')" }}
          initial={{ scale: 1.1 }}
          animate={{ scale: 1 }}
          transition={{ duration: 2.5, ease: "easeOut" }}
        />
        <div className="absolute inset-0 bg-linear-to-b from-[#1a1510]/90 via-[#1a1510]/70 to-[#1a1510]" />

        <div className="relative z-10 mx-auto w-[92%] max-w-350 px-4 sm:px-6 pt-14 sm:pt-16 md:pt-20 lg:pt-24 pb-8 sm:pb-20 md:pb-24 lg:pb-28">
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="show"
            className="mx-auto max-w-3xl text-center"
          >
            <motion.div variants={itemVariants} className="mt-2 sm:mt-3 mb-2 sm:mb-3 flex items-center justify-center gap-2 sm:gap-3">
              <span className="h-px w-6 sm:w-10 md:w-12 bg-gold/60" />
              <span className="text-[9px] sm:text-[10px] md:text-xs uppercase tracking-[0.25em] sm:tracking-[0.35em] text-gold/80">
                {t("about.hero.badge")}
              </span>
              <span className="h-px w-6 sm:w-10 md:w-12 bg-gold/60" />
            </motion.div>

            <motion.h1 variants={itemVariants} className="font-display text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl leading-[1.15] sm:leading-tight text-white">
              {t("about.hero.title_line1")}
              <br />
              <em className="not-italic text-gold">{t("about.hero.title_line2")}</em>
            </motion.h1>

            <motion.p variants={itemVariants} className="mx-auto mt-3 sm:mt-4 md:mt-5 max-w-lg sm:max-w-xl md:max-w-2xl text-xs sm:text-sm md:text-base lg:text-lg leading-relaxed text-white/70 px-2">
              {t("about.hero.description")}
            </motion.p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            transition={{ type: "spring", stiffness: 100, damping: 20, delay: 0.5 }}
            className="mt-6 sm:mt-0 sm:absolute sm:bottom-3 md:bottom-6 lg:bottom-8 sm:left-1/2 sm:z-20 sm:w-[92%] sm:max-w-3xl sm:-translate-x-1/2"
          >
            <div className="relative overflow-hidden rounded-2xl sm:rounded-full border border-white/10 bg-[#1a1510]/85 backdrop-blur-2xl shadow-[0_8px_32px_rgba(0,0,0,0.4)] mx-auto w-full max-w-2xl">
              <div className="absolute inset-x-0 top-0 h-px bg-linear-to-r from-transparent via-gold/30 to-transparent" />

              <div className="relative z-10 grid grid-cols-2 sm:flex sm:items-center sm:justify-between px-4 sm:px-4 md:px-6 lg:px-8 py-4 sm:py-2.5 md:py-3 gap-4 sm:gap-0">
                {STATS.map((stat, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.7 + i * 0.1, type: "spring", stiffness: 200, damping: 20 }}
                    className={`group flex flex-col items-center justify-center ${
                      i < 2 ? "sm:border-r border-white/10" : ""
                    } ${i >= 2 ? "border-t sm:border-t-0 border-white/10 pt-4 sm:pt-0" : ""}`}
                  >
                    <div className="flex items-center gap-2">
                      <stat.icon className="h-4 w-4 sm:h-3 sm:w-3 md:h-3.5 md:w-3.5 text-gold group-hover:text-gold/80 transition-colors duration-300 shrink-0" />
                      <span className="font-display text-base sm:text-[10px] md:text-sm lg:text-base text-white group-hover:text-gold transition-colors duration-300">
                        {stat.value}
                      </span>
                    </div>
                    <span className="mt-1 text-[10px] sm:text-[6px] md:text-[9px] lg:text-[10px] uppercase tracking-[0.15em] sm:tracking-[0.1rem] md:tracking-[0.15em] text-white/50 group-hover:text-white/60 transition-colors duration-300 text-center">
                      {stat.label}
                    </span>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      <div className="relative overflow-hidden dark:bg-[#1a1510]">
        <div
          className="fixed inset-0 opacity-10 pointer-events-none"
          style={{
            backgroundImage: `url(${BGZ})`,
            backgroundRepeat: "repeat",
            backgroundSize: "650px",
          }}
        />
        <div className="absolute inset-0 dark:bg-black/20 bg-white/90 pointer-events-none" />

        {/* ==================== STORY SECTION ==================== */}
        <section className="relative py-8 sm:py-12 md:py-16 lg:py-20 bg-transparent">
          <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-12">
            <div className="grid gap-8 sm:gap-10 md:gap-12 lg:grid-cols-2 lg:items-center">
              <motion.div
                variants={containerVariants}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true, margin: "-100px" }}
                className="relative"
              >
                <motion.div 
                  variants={imageRevealVariants}
                  className="relative aspect-4/3 sm:aspect-16/10 lg:aspect-auto overflow-hidden rounded-sm shadow-2xl"
                >
                  <img
                    src={courtyardImg}
                    alt={t("about.story.images.riad_alt")}
                    loading="lazy"
                    className="h-full w-full object-cover"
                  />
                  <div className="absolute inset-0 bg-linear-to-t from-[#1a1510]/40 to-transparent" />
                </motion.div>
                <motion.div 
                  variants={itemVariants}
                  className="hidden sm:block absolute -bottom-5 -right-5 md:-bottom-6 md:-right-6 lg:-bottom-8 lg:-right-8 h-20 w-20 md:h-32 md:w-32 lg:h-40 lg:w-40 overflow-hidden rounded-sm shadow-xl border-2 border-[#1a1510]"
                >
                  <img
                    src={spicesImg}
                    alt={t("about.story.images.chef_alt")}
                    loading="lazy"
                    className="h-full w-full object-cover"
                  />
                </motion.div>
              </motion.div>

              <motion.div
                variants={containerVariants}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true, margin: "-100px" }}
                className="sm:pt-4 lg:pt-0"
              >
                <motion.div variants={itemVariants} className="flex items-center gap-2 sm:gap-3 mb-3 sm:mb-4">
                  <span className="h-px w-6 sm:w-8 bg-gold/60" />
                  <span className="text-[10px] sm:text-xs uppercase tracking-[0.25em] sm:tracking-[0.35em] text-gold/80">
                    {t("about.story.badge")}
                  </span>
                </motion.div>
                <motion.h2 variants={itemVariants} className="font-display text-2xl sm:text-3xl md:text-4xl lg:text-5xl leading-[1.15] sm:leading-tight text-white">
                  {t("about.story.title_line1")}
                  <br />
                  <em className="not-italic text-gold">{t("about.story.title_line2")}</em>
                </motion.h2>

                <motion.div variants={itemVariants} className="mt-4 sm:mt-6 space-y-3 sm:space-y-4 text-sm sm:text-base lg:text-lg leading-relaxed text-white/60">
                  <p>{t("about.story.p1")}</p>
                  <p>{t("about.story.p2")}</p>
                  <p>{t("about.story.p3")}</p>
                </motion.div>

                <motion.div variants={itemVariants} className="mt-6 sm:mt-8 rounded-sm border-l-2 border-gold/40 bg-white/5 p-4 sm:p-6">
                  <blockquote className="font-display text-base sm:text-lg lg:text-xl italic text-white/80">
                    "{t("about.story.quote")}"
                  </blockquote>
                  <cite className="mt-2 sm:mt-3 block text-[10px] sm:text-xs uppercase tracking-widest text-gold not-italic">
                    — {t("about.story.quote_author")}
                  </cite>
                </motion.div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* ==================== CULINARY PHILOSOPHY ==================== */}
        <section className="relative py-6 sm:py-10 md:py-14 lg:py-16 bg-transparent">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-12">
            <motion.div
              variants={containerVariants}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, margin: "-50px" }}
              className="text-center mb-8 sm:mb-10 md:mb-14 lg:mb-16"
            >
              <motion.div variants={itemVariants} className="flex items-center justify-center gap-2 sm:gap-3 mb-3 sm:mb-4">
                <span className="h-px w-6 sm:w-8 bg-gold/60" />
                <span className="text-[10px] sm:text-xs uppercase tracking-[0.25em] sm:tracking-[0.35em] text-gold/80">
                  {t("about.philosophy.badge")}
                </span>
                <span className="h-px w-6 sm:w-8 bg-gold/60" />
              </motion.div>
              <motion.h2 variants={itemVariants} className="font-display text-2xl sm:text-3xl md:text-4xl lg:text-5xl leading-[1.15] sm:leading-tight text-white">
                {t("about.philosophy.title_line1")}
                <br />
                <em className="not-italic text-gold">{t("about.philosophy.title_line2")}</em>
              </motion.h2>
              <motion.p variants={itemVariants} className="mt-3 sm:mt-4 max-w-2xl mx-auto text-sm sm:text-base lg:text-lg text-white/60 px-2">
                {t("about.philosophy.description")}
              </motion.p>
            </motion.div>

            <motion.div
              variants={containerVariants}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, margin: "-50px" }}
              className="grid gap-3 sm:gap-4 md:gap-6 grid-cols-2 lg:grid-cols-4"
            >
              {CULINARY_PRINCIPLES.map((principle, i) => (
                <motion.div
                  key={i}
                  variants={itemVariants}
                  whileHover={{ y: -8, borderColor: "rgba(255,215,0,0.4)" }}
                  transition={{ type: "spring", stiffness: 300, damping: 25 }}
                  className="rounded-sm border border-white/10 bg-[#0f0c09] p-5 sm:p-6 lg:p-8 transition-colors"
                >
                  <div className={`mx-auto flex h-10 w-10 sm:h-11 sm:w-11 md:h-12 md:w-12 items-center justify-center rounded-sm bg-white/5 ${principle.color}`}>
                    <principle.icon className="h-4 w-4 sm:h-5 sm:w-5" />
                  </div>
                  <h3 className="mt-3 sm:mt-4 text-center font-display text-sm sm:text-lg lg:text-xl text-white">
                    {t(principle.titleKey)}
                  </h3>
                  <p className="mt-2 text-xs text-center sm:text-base leading-relaxed text-white/50">
                    {t(principle.descKey)}
                  </p>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </section>

        {/* ==================== CHEF SECTION ==================== */}
        <section className="relative py-6 sm:py-10 md:py-14 lg:py-16 bg-transparent">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-12">
            <div className="grid gap-8 sm:gap-10 md:gap-12 lg:grid-cols-2 lg:items-center">
              <motion.div
                variants={containerVariants}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true, margin: "-100px" }}
                className="order-2 lg:order-1 text-center lg:text-left"
              >
                <motion.div variants={itemVariants} className="flex items-center justify-center lg:justify-start gap-2 sm:gap-3 mb-3 sm:mb-4">
                  <span className="h-px w-6 sm:w-8 bg-gold/60" />
                  <span className="text-[10px] sm:text-xs uppercase tracking-[0.25em] sm:tracking-[0.35em] text-gold/80">
                    {t("about.chef.badge")}
                  </span>
                </motion.div>
                <motion.h2 variants={itemVariants} className="font-display text-2xl sm:text-3xl md:text-4xl lg:text-5xl leading-[1.15] sm:leading-tight text-white">
                  {t("about.chef.title_line1")}
                  <br />
                  <em className="not-italic text-gold">{t("about.chef.title_line2")}</em>
                </motion.h2>
                <motion.p variants={itemVariants} className="text-sm sm:text-base lg:text-lg text-gold/80 mt-2 mb-4 sm:mb-6">
                  {t("about.chef.name_arabic")}
                </motion.p>

                <motion.div variants={itemVariants} className="space-y-3 sm:space-y-4 text-sm sm:text-base lg:text-lg leading-relaxed text-white/60">
                  <p>{t("about.chef.p1")}</p>
                  <p>{t("about.chef.p2")}</p>
                </motion.div>

                <motion.div variants={itemVariants} className="mt-6 sm:mt-8 flex flex-wrap justify-center lg:justify-start gap-2 sm:gap-3">
                  <div className="rounded-sm bg-white/5 px-3 sm:px-4 py-2 text-xs sm:text-sm text-white/70">
                    <span className="text-gold font-display">3</span> {t("about.chef.badges.years")}
                  </div>
                  <div className="rounded-sm bg-white/5 px-3 sm:px-4 py-2 text-xs sm:text-sm text-white/70">
                    <Star className="inline h-3.5 w-3.5 sm:h-4 sm:w-4 text-gold mr-1" /> {t("about.chef.badges.michelin")}
                  </div>
                  <div className="rounded-sm bg-white/5 px-3 sm:px-4 py-2 text-xs sm:text-sm text-white/70">
                    <Award className="inline h-3.5 w-3.5 sm:h-4 sm:w-4 text-gold mr-1" /> {t("about.chef.badges.top50")}
                  </div>
                </motion.div>
              </motion.div>

              <motion.div
                variants={containerVariants}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true, margin: "-100px" }}
                className="relative order-1 lg:order-2"
              >
                <div className="relative mx-auto w-full max-w-sm sm:max-w-md md:max-w-lg lg:max-w-none">
                  <motion.div 
                    variants={imageRevealVariants}
                    className="relative aspect-4/5 sm:aspect-3/4 overflow-hidden rounded-sm shadow-2xl"
                  >
                    <img
                      src={chefImg}
                      alt={t("about.chef.image_alt")}
                      loading="lazy"
                      className="h-full w-full object-cover"
                    />
                    <div className="absolute inset-0 bg-linear-to-t from-[#1a1510]/60 to-transparent" />
                  </motion.div>

                  <motion.div 
                    variants={itemVariants}
                    className="absolute -bottom-3 left-1/2 -translate-x-1/2 sm:left-4 sm:translate-x-0 sm:-bottom-4 rounded-sm bg-gold px-4 sm:px-5 md:px-6 py-2 sm:py-2.5 md:py-3 shadow-xl text-center whitespace-nowrap"
                  >
                    <p className="text-[9px] sm:text-[10px] uppercase tracking-widest text-gold-foreground">
                      {t("about.chef.title")}
                    </p>
                    <p className="font-display text-sm sm:text-base text-gold-foreground">{t("about.chef.since")}</p>
                  </motion.div>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* ==================== TEAM SECTION ==================== */}
        <section className="relative py-6 sm:py-10 md:py-14 lg:py-16 bg-transparent">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-12">
            <motion.div
              variants={containerVariants}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, margin: "-50px" }}
              className="text-center mb-8 sm:mb-10 md:mb-14 lg:mb-16"
            >
              <motion.div variants={itemVariants} className="flex items-center justify-center gap-2 sm:gap-3 mb-3 sm:mb-4">
                <span className="h-px w-6 sm:w-8 bg-gold/60" />
                <span className="text-[10px] sm:text-xs uppercase tracking-[0.25em] sm:tracking-[0.35em] text-gold/80">
                  {t("about.team.badge")}
                </span>
                <span className="h-px w-6 sm:w-8 bg-gold/60" />
              </motion.div>
              <motion.h2 variants={itemVariants} className="font-display text-2xl sm:text-3xl md:text-4xl lg:text-5xl leading-[1.15] sm:leading-tight text-white">
                {t("about.team.title_line1")}
                <br />
                <em className="not-italic text-gold">{t("about.team.title_line2")}</em>
              </motion.h2>
            </motion.div>

            <motion.div
              variants={containerVariants}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, margin: "-50px" }}
              className="grid gap-4 sm:gap-6 md:gap-8 grid-cols-2 lg:grid-cols-4"
            >
              {TEAM.map((member, i) => (
                <motion.div
                  key={member.name}
                  variants={itemVariants}
                  whileHover={{ y: -8 }}
                  transition={{ type: "spring", stiffness: 300, damping: 25 }}
                  className="group text-center"
                >
                  <div className="aspect-3/4 overflow-hidden rounded-sm shadow-xl mb-3 sm:mb-4">
                    <motion.img
                      src={member.img}
                      alt={member.name}
                      loading="lazy"
                      className="h-full w-full object-cover"
                      whileHover={{ scale: 1.08 }}
                      transition={{ duration: 0.6, ease: "easeOut" }}
                    />
                  </div>
                  <h3 className="font-display text-sm sm:text-base md:text-lg lg:text-xl text-white px-1">
                    {member.name}
                  </h3>
                  <p className="text-[10px] sm:text-xs uppercase tracking-widest text-gold/80 mt-1">
                    {t(member.roleKey)}
                  </p>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </section>

        {/* ==================== AWARDS SECTION ==================== */}
        <section className="relative py-6 sm:py-6 md:py-10 lg:py-12 bg-transparent">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-12">
            <motion.div
              variants={containerVariants}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, margin: "-50px" }}
              className="text-center mb-8 sm:mb-10 md:mb-14 lg:mb-16"
            >
              <motion.div variants={itemVariants} className="flex items-center justify-center gap-2 sm:gap-3 mb-3 sm:mb-4">
                <span className="h-px w-6 sm:w-8 bg-gold/60" />
                <span className="text-[10px] sm:text-xs uppercase tracking-[0.25em] sm:tracking-[0.35em] text-gold/80">
                  {t("about.awards.badge")}
                </span>
                <span className="h-px w-6 sm:w-8 bg-gold/60" />
              </motion.div>
              <motion.h2 variants={itemVariants} className="font-display text-2xl sm:text-3xl md:text-4xl lg:text-5xl leading-[1.15] sm:leading-tight text-white">
                {t("about.awards.title_line1")}
                <br />
                <em className="not-italic text-gold">{t("about.awards.title_line2")}</em>
              </motion.h2>
            </motion.div>

            <motion.div
              variants={containerVariants}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, margin: "-50px" }}
              className="grid gap-3 sm:gap-4 md:gap-6 grid-cols-2 lg:grid-cols-4"
            >
              {AWARDS.map((award, i) => (
                <motion.div
                  key={i}
                  variants={itemVariants}
                  whileHover={{ y: -8, borderColor: "rgba(255,215,0,0.4)" }}
                  transition={{ type: "spring", stiffness: 300, damping: 25 }}
                  className="rounded-sm border border-white/10 bg-[#0f0c09] p-5 sm:p-6 lg:p-8 text-center transition-colors"
                >
                  <award.icon className="mx-auto h-6 w-6 sm:h-7 sm:w-7 md:h-8 md:w-8 text-gold" />
                  <h3 className="mt-3 sm:mt-4 font-display text-base sm:text-lg lg:text-xl text-white">
                    {award.title}
                  </h3>
                  <p className="mt-1 text-xs sm:text-sm text-gold/80">{award.year}</p>
                  <p className="mt-2 sm:mt-3 text-sm sm:text-base leading-relaxed text-white/50">
                    {award.desc}
                  </p>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </section>

        {/* ==================== DESIGN SECTION - RESPONSIVE BENTO GRID ==================== */}
        <section className="relative py-6 sm:py-6 md:py-10 lg:py-12 bg-transparent">
          <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-12">
            <motion.div
              variants={containerVariants}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, margin: "-50px" }}
              className="text-center mb-8 sm:mb-12 md:mb-16 lg:mb-20"
            >
              <motion.div variants={itemVariants} className="flex items-center justify-center gap-2 sm:gap-3 mb-3 sm:mb-4">
                <span className="h-px w-6 sm:w-10 bg-gold/60" />
                <span className="text-[10px] sm:text-xs uppercase tracking-[0.25em] sm:tracking-[0.35em] text-gold/80">
                  {t("about.design.badge")}
                </span>
                <span className="h-px w-6 sm:w-10 bg-gold/60" />
              </motion.div>
              <motion.h2 variants={itemVariants} className="font-display text-2xl sm:text-3xl md:text-4xl lg:text-5xl leading-[1.15] sm:leading-tight text-white">
                {t("about.design.title_line1")}
                <br />
                <em className="not-italic text-gold">{t("about.design.title_line2")}</em>
              </motion.h2>
              <motion.p variants={itemVariants} className="mt-4 sm:mt-5 md:mt-6 max-w-2xl mx-auto text-sm sm:text-base lg:text-lg leading-relaxed text-white/60 px-2">
                {t("about.design.description")}
              </motion.p>
            </motion.div>

            <motion.div
              variants={containerVariants}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, margin: "-50px" }}
              className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-0 grid grid-cols-1 gap-3 sm:gap-4 md:gap-5 lg:grid-cols-4 lg:grid-rows-[2fr_1fr_1fr] lg:gap-6 lg:h-[calc(100vh-var(--header-height,5rem))]"
            >
              {/* Item 1 - Large hero spanning 2x2 top-left */}
              <motion.div
                variants={itemVariants}
                className="relative group overflow-hidden rounded-lg sm:rounded-xl shadow-xl col-span-1 sm:col-span-2 lg:col-span-2 lg:row-span-2 aspect-4/3 sm:aspect-3/2 lg:aspect-auto"
              >
                <motion.img
                  src={DESIGN_ELEMENTS[0].img}
                  alt={DESIGN_ELEMENTS[0].title}
                  loading="lazy"
                  className="h-full w-full object-cover"
                  whileHover={{ scale: 1.08 }}
                  transition={{ duration: 0.7, ease: "easeOut" }}
                />
                <div className="absolute inset-0 bg-linear-to-t from-[#1a1510] via-[#1a1510]/40 to-transparent opacity-90" />
                <div className="absolute top-2 left-2 sm:top-3 sm:left-3 md:top-4 md:left-4">
                  <span className="inline-flex items-center gap-1 rounded-full bg-gold/20 backdrop-blur-sm border border-gold/30 px-2 py-0.5 text-[8px] sm:text-[9px] uppercase tracking-widest text-white">
                    <span className="h-1 w-1 rounded-full bg-white" /> {DESIGN_ELEMENTS[0].label}
                  </span>
                </div>
                <div className="absolute bottom-0 left-0 right-0 p-3 sm:p-4 md:p-5 lg:p-6">
                  <h3 className="font-display text-sm sm:text-base md:text-lg lg:text-xl text-gray-50 mb-0.5">
                    {DESIGN_ELEMENTS[0].title}
                  </h3>
                  <p className="text-[10px] sm:text-xs md:text-sm lg:text-base text-gray-50/80 leading-relaxed line-clamp-2">
                    {DESIGN_ELEMENTS[0].desc}
                  </p>
                </div>
              </motion.div>

              {/* Item 2 */}
              <motion.div
                variants={itemVariants}
                className="relative group overflow-hidden rounded-lg sm:rounded-xl shadow-xl col-span-1 aspect-4/3 sm:aspect-square lg:aspect-auto"
              >
                <motion.img
                  src={DESIGN_ELEMENTS[1].img}
                  alt={DESIGN_ELEMENTS[1].title}
                  loading="lazy"
                  className="h-full w-full object-cover"
                  whileHover={{ scale: 1.08 }}
                  transition={{ duration: 0.7, ease: "easeOut" }}
                />
                <div className="absolute inset-0 bg-linear-to-t from-[#1a1510] via-[#1a1510]/30 to-transparent" />
                <div className="absolute bottom-0 left-0 right-0 p-2 sm:p-3 md:p-4">
                  <h3 className="font-display text-xs sm:text-sm md:text-base text-gray-50 mb-0.5">
                    {DESIGN_ELEMENTS[1].title}
                  </h3>
                  <p className="text-[9px] sm:text-[10px] md:text-xs text-gray-50/70 leading-relaxed line-clamp-2">
                    {DESIGN_ELEMENTS[1].desc}
                  </p>
                </div>
              </motion.div>

              {/* Item 3 */}
              <motion.div
                variants={itemVariants}
                className="relative group overflow-hidden rounded-lg sm:rounded-xl shadow-xl col-span-1 aspect-4/3 sm:aspect-square lg:aspect-auto"
              >
                <motion.img
                  src={DESIGN_ELEMENTS[2].img}
                  alt={DESIGN_ELEMENTS[2].title}
                  loading="lazy"
                  className="h-full w-full object-cover"
                  whileHover={{ scale: 1.08 }}
                  transition={{ duration: 0.7, ease: "easeOut" }}
                />
                <div className="absolute inset-0 bg-linear-to-t from-[#1a1510] via-[#1a1510]/30 to-transparent" />
                <div className="absolute bottom-0 left-0 right-0 p-2 sm:p-3 md:p-4">
                  <h3 className="font-display text-xs sm:text-sm md:text-base text-gray-50 mb-0.5">
                    {DESIGN_ELEMENTS[2].title}
                  </h3>
                  <p className="text-[9px] sm:text-[10px] md:text-xs text-gray-50/70 leading-relaxed line-clamp-2">
                    {DESIGN_ELEMENTS[2].desc}
                  </p>
                </div>
              </motion.div>

              {/* Item 4 - Tall vertical card */}
              <motion.div
                variants={itemVariants}
                className="relative group overflow-hidden rounded-lg sm:rounded-xl shadow-xl col-span-1 sm:col-span-2 lg:col-span-1 lg:row-span-2 aspect-4/3 sm:aspect-3/2 lg:aspect-auto"
              >
                <motion.img
                  src={DESIGN_ELEMENTS[3].img}
                  alt={DESIGN_ELEMENTS[3].title}
                  loading="lazy"
                  className="h-full w-full object-cover"
                  whileHover={{ scale: 1.08 }}
                  transition={{ duration: 0.7, ease: "easeOut" }}
                />
                <div className="absolute inset-0 bg-linear-to-t from-[#1a1510] via-[#1a1510]/30 to-transparent" />
                <div className="absolute bottom-0 left-0 right-0 p-2 sm:p-3 md:p-4">
                  <h3 className="font-display text-xs sm:text-sm md:text-base text-gray-50 mb-0.5">
                    {DESIGN_ELEMENTS[3].title}
                  </h3>
                  <p className="text-[9px] sm:text-[10px] md:text-xs text-gray-50/70 leading-relaxed line-clamp-2">
                    {DESIGN_ELEMENTS[3].desc}
                  </p>
                </div>
              </motion.div>

              {/* Item 5 */}
              <motion.div
                variants={itemVariants}
                className="relative group overflow-hidden rounded-lg sm:rounded-xl shadow-xl col-span-1 lg:col-span-1 lg:row-span-2 aspect-4/3 sm:aspect-square lg:aspect-auto"
              >
                <motion.img
                  src={DESIGN_ELEMENTS[4].img}
                  alt={DESIGN_ELEMENTS[4].title}
                  loading="lazy"
                  className="h-full w-full object-cover"
                  whileHover={{ scale: 1.08 }}
                  transition={{ duration: 0.7, ease: "easeOut" }}
                />
                <div className="absolute inset-0 bg-linear-to-t from-[#1a1510] via-[#1a1510]/30 to-transparent" />
                <div className="absolute bottom-0 left-0 right-0 p-2 sm:p-3 md:p-4">
                  <h3 className="font-display text-xs sm:text-sm md:text-base text-gray-50 mb-0.5">
                    {DESIGN_ELEMENTS[4].title}
                  </h3>
                  <p className="text-[9px] sm:text-[10px] md:text-xs text-gray-50/70 leading-relaxed line-clamp-2">
                    {DESIGN_ELEMENTS[4].desc}
                  </p>
                </div>
              </motion.div>

              {/* Item 6 - Wide horizontal card bottom */}
              <motion.div
                variants={itemVariants}
                className="relative group overflow-hidden rounded-lg sm:rounded-xl shadow-xl col-span-1 sm:col-span-2 lg:col-span-2 aspect-4/3 sm:aspect-3/2 lg:aspect-auto"
              >
                <motion.img
                  src={DESIGN_ELEMENTS[5].img}
                  alt={DESIGN_ELEMENTS[5].title}
                  loading="lazy"
                  className="h-full w-full object-cover"
                  whileHover={{ scale: 1.08 }}
                  transition={{ duration: 0.7, ease: "easeOut" }}
                />
                <div className="absolute inset-0 bg-linear-to-t from-[#1a1510] via-[#1a1510]/40 to-transparent opacity-90" />
                <div className="absolute top-2 left-2 sm:top-3 sm:left-3 md:top-4 md:left-4">
                  <span className="inline-flex items-center gap-1 rounded-full bg-gold/20 backdrop-blur-sm border border-gold/30 px-2 py-0.5 text-[8px] sm:text-[9px] uppercase tracking-widest text-white">
                    <span className="h-1 w-1 rounded-full bg-white" /> {DESIGN_ELEMENTS[5].label}
                  </span>
                </div>
                <div className="absolute bottom-0 left-0 right-0 p-3 sm:p-4 md:p-5">
                  <h3 className="font-display text-sm sm:text-base md:text-lg text-gray-50 mb-0.5">
                    {DESIGN_ELEMENTS[5].title}
                  </h3>
                  <p className="text-[10px] sm:text-xs md:text-sm text-gray-50/80 leading-relaxed line-clamp-2">
                    {DESIGN_ELEMENTS[5].desc}
                  </p>
                </div>
              </motion.div>
            </motion.div>
          </div>
        </section>

        {/* ==================== HOSPITALITY SECTION ==================== */}
        <section className="relative py-6 sm:py-10 md:py-14 lg:py-16 bg-transparent">
          <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-12">
            <motion.div
              variants={containerVariants}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, margin: "-50px" }}
              className="text-center mb-8 sm:mb-10 md:mb-14 lg:mb-16"
            >
              <motion.div variants={itemVariants} className="flex items-center justify-center gap-2 sm:gap-3 mb-3 sm:mb-4">
                <span className="h-px w-6 sm:w-8 bg-gold/60" />
                <span className="text-[10px] sm:text-xs uppercase tracking-[0.25em] sm:tracking-[0.35em] text-gold/80">
                  {t("about.hospitality.badge")}
                </span>
                <span className="h-px w-6 sm:w-8 bg-gold/60" />
              </motion.div>
              <motion.h2 variants={itemVariants} className="font-display text-2xl sm:text-3xl md:text-4xl lg:text-5xl leading-[1.15] sm:leading-tight text-white">
                {t("about.hospitality.title_line1")}
                <br />
                <em className="not-italic text-gold">{t("about.hospitality.title_line2")}</em>
              </motion.h2>
              <motion.p variants={itemVariants} className="mt-3 sm:mt-4 max-w-2xl mx-auto text-sm sm:text-base lg:text-lg text-white/60 px-2">
                {t("about.hospitality.description")}
              </motion.p>
            </motion.div>

            <motion.div
              variants={containerVariants}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, margin: "-50px" }}
              className="grid gap-3 sm:gap-4 md:gap-6 grid-cols-2 lg:grid-cols-3"
            >
              {HOSPITALITY_FEATURES.map((feature, i) => (
                <motion.div
                  key={i}
                  variants={itemVariants}
                  whileHover={{ y: -8, borderColor: "rgba(255,215,0,0.4)", backgroundColor: "rgba(255,255,255,0.07)" }}
                  transition={{ type: "spring", stiffness: 300, damping: 25 }}
                  className="rounded-sm border border-white/10 bg-white/5 p-5 sm:p-6 lg:p-8 transition-colors"
                >
                  <feature.icon className="h-5 w-5 sm:h-6 sm:w-6 text-gold" />
                  <h3 className="mt-3 sm:mt-4 font-display text-base sm:text-lg lg:text-xl text-white">
                    {t(feature.titleKey)}
                  </h3>
                  <p className="mt-2 text-sm sm:text-base leading-relaxed text-white/50">
                    {t(feature.descKey)}
                  </p>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </section>

        {/* ==================== CTA SECTION ==================== */}
        <section className="relative py-10 sm:py-12 md:py-16 lg:py-20 bg-[#1a473a]/90">
          <div className="absolute inset-0 opacity-[0.1]" style={{
            backgroundImage: `repeating-linear-gradient(45deg, transparent, transparent 20px, rgba(255,255,255,0.1) 20px, rgba(255,255,255,0.1) 21px), repeating-linear-gradient(-45deg, transparent, transparent 20px, rgba(255,255,255,0.1) 20px, rgba(255,255,255,0.1) 21px)`,
          }} />

          <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-12">
            <motion.div
              variants={containerVariants}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, margin: "-50px" }}
              className="grid gap-6 sm:gap-8 md:gap-12 lg:grid-cols-2 lg:items-center"
            >
              <div>
                <motion.div variants={itemVariants} className="flex items-center gap-2 sm:gap-3 mb-3 sm:mb-4">
                  <span className="h-px w-6 sm:w-8 bg-gold/60" />
                  <span className="text-[10px] sm:text-xs uppercase tracking-[0.25em] sm:tracking-[0.35em] text-gold/80">
                    {t("about.cta.badge")}
                  </span>
                </motion.div>
                <motion.h2 variants={itemVariants} className="font-display text-2xl sm:text-3xl md:text-4xl lg:text-5xl leading-[1.15] sm:leading-tight text-gray-50">
                  {t("about.cta.title_line1")}
                  <br />
                  <em className="not-italic text-gold">{t("about.cta.title_line2")}</em>
                </motion.h2>
                <motion.p variants={itemVariants} className="mt-3 sm:mt-4 max-w-md text-sm sm:text-base lg:text-lg leading-relaxed text-gray-50/70">
                  {t("about.cta.description")}
                </motion.p>
              </div>

              <motion.div variants={itemVariants} className="flex flex-col sm:flex-row gap-3 sm:gap-4 lg:justify-end">
                <motion.div whileHover={{ scale: 1.03 }} whileTap={{ scale: 0.98 }} transition={{ type: "spring", stiffness: 400, damping: 25 }}>
                  <Link
                    to="/reservations"
                    className="inline-flex items-center justify-center gap-2 rounded-sm bg-gold px-6 sm:px-8 py-3.5 sm:py-4 text-xs sm:text-sm uppercase tracking-[0.2em] font-semibold text-gold-foreground shadow-xl min-h-12"
                  >
                    {t("about.cta.reserve")}
                  </Link>
                </motion.div>
                <motion.div whileHover={{ scale: 1.03 }} whileTap={{ scale: 0.98 }} transition={{ type: "spring", stiffness: 400, damping: 25 }}>
                  <Link
                    to="/menu"
                    className="inline-flex items-center justify-center gap-2 rounded-sm border border-white/30 bg-transparent px-6 sm:px-8 py-3.5 sm:py-4 text-xs sm:text-sm uppercase tracking-[0.2em] font-semibold text-white min-h-12"
                  >
                    {t("about.cta.menu")}
                  </Link>
                </motion.div>
              </motion.div>
            </motion.div>
          </div>
        </section>
      </div>
    </>
  );
}

function cn(...classes: (string | boolean | undefined)[]) {
  return classes.filter(Boolean).join(" ");
}