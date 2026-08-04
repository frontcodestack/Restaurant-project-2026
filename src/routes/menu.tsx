import { createFileRoute } from "@tanstack/react-router";
import { motion, AnimatePresence, type Variants } from "framer-motion";
import { 
  Search, Star, ChefHat, Flame, Leaf, Wheat, Fish, Beef, Croissant, IceCream, Coffee, 
  ChevronLeft, ChevronRight 
} from "lucide-react";
import { useMemo, useState, useRef } from "react";
import { useTranslation } from "react-i18next";
import { MENU, CATEGORIES as STATIC_CATEGORIES, type MenuCategory } from "@/lib/menu-data";
import { cn } from "@/lib/utils";
import BGZ from "@/assets/BGZ.svg";

export const Route = createFileRoute("/menu")({
  head: () => ({
    meta: [
      { title: "Menu — Dar Medina" },
      { name: "description", content: "Discover our seasonal Moroccan menu: tagines, couscous, grills, pastilla, and traditional mint tea — slow-cooked and souk-fresh." },
      { property: "og:title", content: "Menu — Dar Medina" },
      { property: "og:description", content: "Tagines, couscous, grills and Moroccan classics — slow-cooked and souk-fresh." },
    ],
    links: [{ rel: "canonical", href: "/menu" }],
  }),
  component: MenuPage,
});

// ==================== ANIMATION VARIANTS ====================
const containerVariants = {
  hidden: {
    opacity: 0,
  },

  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.08,
      delayChildren: 0.1,
    },
  },
} satisfies Variants;

const itemVariants = {
  hidden: {
    opacity: 0,
    y: 30,
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

const categoryIcons: Record<string, any> = {
  "Starters": Flame,
  "Tagines": ChefHat,
  "Couscous": Wheat,
  "Grills": Flame,
  "Pastilla": Croissant,
  "Seafood": Fish,
  "Desserts": IceCream,
  "Drinks": Coffee,
};

// Local type to ensure compatibility with the rich UI expectations
type MenuDataItem = {
  id: string;
  name: string;
  name_fr?: string;
  name_ar?: string;
  description: string;
  description_fr?: string;
  description_ar?: string;
  price: number | string;
  category: string;
  image: string;
  popular?: boolean;
  spicy?: boolean;
  vegetarian?: boolean;
  rating?: number;
};

function MenuPage() {
  const { t, i18n } = useTranslation();
  const isRTL = i18n.dir() === 'rtl';
  
  // Replaced Strapi useMenu hook with static MENU data
  // Mapped to ensure all expected properties exist for the rich UI
  const menuData: MenuDataItem[] = useMemo(() => MENU.map((item: any, index: number) => ({
    id: item.id ?? String(index),
    name: item.name ?? "",
    name_fr: item.name_fr ?? item.name,
    name_ar: item.name_ar ?? item.name,
    description: item.description ?? "",
    description_fr: item.description_fr ?? item.description,
    description_ar: item.description_ar ?? item.description,
    price: item.price ?? 0,
    category: item.category ?? "Other",
    image: item.image ?? item.src ?? "",
    popular: item.popular ?? false,
    spicy: item.spicy ?? false,
    vegetarian: item.vegetarian ?? false,
    rating: item.rating ?? 4.5,
  })), []);

  const getName = (dish: MenuDataItem) => {
    switch (i18n.language) {
      case "fr": return dish.name_fr || dish.name;
      case "ar": return dish.name_ar || dish.name;
      default: return dish.name;
    }
  };

  const getDescription = (dish: MenuDataItem) => {
    switch (i18n.language) {
      case "fr": return dish.description_fr || dish.description;
      case "ar": return dish.description_ar || dish.description;
      default: return dish.description;
    }
  };

  const [cat, setCat] = useState<string | "All">("All");
  
  const CATEGORIES = ["All", ...STATIC_CATEGORIES];
  
  const [q, setQ] = useState("");

  const menuSectionRef = useRef<HTMLElement | null>(null);
  const catsRef = useRef<HTMLDivElement>(null);
  const catButtonRefs = useRef<(HTMLButtonElement | null)[]>([]);

  const scrollCats = (direction: "left" | "right") => {
    const currentIndex = CATEGORIES.indexOf(cat);
    const nextIndex =
      direction === "right"
        ? (currentIndex + 1) % CATEGORIES.length
        : (currentIndex - 1 + CATEGORIES.length) % CATEGORIES.length;

    setCat(CATEGORIES[nextIndex]);

    const container = catsRef.current;
    const button = catButtonRefs.current[nextIndex];

    if (container && button) {
      const left =
        button.offsetLeft -
        container.clientWidth / 2 +
        button.clientWidth / 2;

      container.scrollTo({
        left,
        behavior: "smooth",
      });
    }
  };

  const items = useMemo(() => {
    return menuData.filter((m) => (cat === "All" ? true : m.category === cat))
     .filter((m) =>
      q.trim()
        ? (getName(m) + " " + getDescription(m)).toLowerCase().includes(q.toLowerCase())
        : true
    );
  }, [cat, q, menuData]);

  return (
    <>
      {/* ==================== HERO ==================== */}
      <section className="hero-section relative  min-h-70 sm:h-[80dvh] overflow-hidden">
        <motion.div 
          className="absolute inset-0 bg-cover bg-center bg-fixed"
          style={{ backgroundImage: "url('https://images.unsplash.com/photo-1511690743698-d9d85f2fbf38')" }}
          initial={{ scale: 1.1 }}
          animate={{ scale: 1 }}
          transition={{ duration: 2.5, ease: "easeOut" }}
        />
        <div className="absolute inset-0  bg-linear-to-b from-[#1a1510]/90 via-[#1a1510]/70 to-[#1a1510]" />

        <div
          className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage: `repeating-linear-gradient(45deg, transparent, transparent 20px, rgba(255,255,255,0.1) 20px, rgba(255,255,255,0.1) 21px), repeating-linear-gradient(-45deg, transparent, transparent 20px, rgba(255,255,255,0.1) 20px, rgba(255,255,255,0.1) 21px)`,
          }}
        />

        <div className="relative z-10 sm:mt-0 mt-5  mx-auto w-[92%] max-w-350 px-4 sm:px-6 lg:px-8 flex flex-col justify-center items-center min-h-70 sm:min-h-0 pt-6 sm:pt-16 md:pt-20 lg:pt-24 pb-6 sm:pb-16 md:pb-20 lg:pb-24">
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="show"
            className="mx-auto max-w-3xl text-center"
          >
            <motion.div variants={itemVariants} className="mt-2 sm:mt-3 mb-2 sm:mb-3 flex items-center justify-center gap-2 sm:gap-3">
              <span className="h-px w-6 sm:w-10 md:w-12 bg-gold/60" />
              <span className="text-[8px] sm:text-[10px] md:text-xs  whitespace-nowrap uppercase tracking-[0.25em] sm:tracking-[0.35em] text-gold/80">
                {t("menu.hero.badge")}
              </span>
              <span className="h-px w-6 sm:w-10 md:w-12 bg-gold/60" />
            </motion.div>

            <motion.h1 variants={itemVariants} className="font-display text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl leading-[1.15] sm:leading-tight text-white">
              {t("menu.hero.title_line1")}
              <br />
              <em className="not-italic text-gold">
                {t("menu.hero.title_line2")}
              </em>
            </motion.h1>

            <motion.p variants={itemVariants} className="mx-auto mt-3 sm:mt-4 md:mt-5 max-w-lg sm:max-w-xl md:max-w-2xl px-2 text-xs sm:text-sm md:text-base lg:text-lg leading-relaxed text-white/70">
              {t("menu.hero.description")}
            </motion.p>
          </motion.div>
        </div>
      </section>

      {/* ==================== CATEGORY NAVIGATION ==================== */}
      <section
        ref={menuSectionRef}
        className="relative z-10 bg-[#1a1510]/95 backdrop-blur-md border-b border-white/5"
      >
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-12">
          <div className="flex items-center justify-between py-3 sm:py-4">
            <div className="flex items-center gap-2 flex-1 min-w-0">
              <motion.button
                whileHover={{ scale: 1.1, backgroundColor: "rgba(255,255,255,0.1)" }}
                whileTap={{ scale: 0.9 }}
                onClick={() => scrollCats(isRTL ? "right" : "left")}
                aria-label={isRTL ? "Next category" : "Previous category"}
                className="sm:hidden shrink-0 p-1.5 text-white/45 hover:text-gold active:text-gold transition-colors duration-300 cursor-pointer rounded-full"
              >
                {isRTL ? (
                  <ChevronRight className="h-5 w-5" strokeWidth={2.5} />
                ) : (
                  <ChevronLeft className="h-5 w-5" strokeWidth={2.5} />
                )}
              </motion.button>

              <div
                ref={catsRef}
                className="hide-scrollbar flex gap-2 overflow-x-auto scroll-smooth snap-x snap-mandatory px-1"
                dir="ltr"
              >
                {CATEGORIES.map((c, index) => {
                  const Icon = c === "All" ? null : (categoryIcons[c] || ChefHat);
                  const isActive = cat === c;

                  return (
                    <motion.button
                      key={c}
                      ref={(el) => { catButtonRefs.current[index] = el; }}
                      onClick={() => setCat(c)}
                      layout
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      className={cn(
                        "relative shrink-0 cursor-pointer rounded-sm px-3 sm:px-5 py-1.5 sm:py-2 text-[10px] sm:text-[11px] uppercase tracking-[0.12em] sm:tracking-[0.15em] font-medium transition-colors duration-200 flex items-center gap-2",
                        isActive ? "text-gold-foreground" : "light:bg-gray-50/70 light:text-slate-600 border light:border-slate-200/60 bg-white/5 text-white/60 hover:bg-white/10 hover:text-white border border-white/10"
                      )}
                    >
                      {isActive && (
                        <motion.div
                          layoutId="activeCategoryPill"
                          className="absolute inset-0 bg-gold rounded-sm"
                          transition={{ type: "spring", stiffness: 300, damping: 30 }}
                        />
                      )}
                      <span className="relative z-10 flex items-center gap-2">
                        {Icon && <Icon className="h-3.5 w-3.5" />}
                        {c === "All"
                          ? t("menu.filter.all")
                          : t(`menu.categories.${c.toLowerCase().replace(/[\s-]+/g, "_")}`)}
                      </span>
                    </motion.button>
                  );
                })}
              </div>

              <motion.button
                whileHover={{ scale: 1.1, backgroundColor: "rgba(255,255,255,0.1)" }}
                whileTap={{ scale: 0.9 }}
                onClick={() => scrollCats(isRTL ? "left" : "right")}
                aria-label={isRTL ? "Previous category" : "Next category"}
                className="sm:hidden shrink-0 p-1.5 text-white/45 hover:text-gold active:text-gold transition-colors duration-300 cursor-pointer rounded-full"
              >
                {isRTL ? (
                  <ChevronLeft className="h-5 w-5" strokeWidth={2.5} />
                ) : (
                  <ChevronRight className="h-5 w-5" strokeWidth={2.5} />
                )}
              </motion.button>
            </div>

            <motion.span 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5 }}
              className="hidden sm:block text-xs text-white/40 shrink-0 ml-4"
            >
              {t("gallery.filter.showing", { visible: items.length, total: menuData.length })}
            </motion.span>
          </div>
        </div>
      </section>
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

      {/* ==================== MENU CONTENT ==================== */}
      <section className="relative light py-14 bg-[#1a1510]">
      
       
        <div className="relative mx-auto max-w-7xl px-6 lg:px-12">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ type: "spring", stiffness: 60, damping: 20 }}
            className="mb-8 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between"
          >
            <div>
              <motion.p 
                initial={{ opacity: 0, x: -10 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1 }}
                className="text-[10px] uppercase tracking-[0.35em] text-gold/80 mb-2"
              >
                {cat === "All" ? t("menu.categories.starters") : t(`menu.categories.${cat.toLowerCase().replace(/[\s-]+/g, '_')}`)}
              </motion.p>
              <motion.h2 
                initial={{ opacity: 0, x: -10 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 }}
                className="font-display text-3xl text-white sm:text-4xl"
              >
                {cat === "All" ? t("menu.subtitle.cold_warm") : t(`menu.categories.${cat.toLowerCase().replace(/[\s-]+/g, '_')}`)}
                <em className="not-italic text-gold"> {cat === "All" ? t("menu.subtitle.starters") : ""}</em>
              </motion.h2>
            </div>
            
            <motion.div 
              initial={{ opacity: 0, x: 10 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="relative w-full sm:w-72 group"
            >
              <Search className="pointer-events-none absolute left-4 top-1/2 h-4 w-4 -translate-y-1/2 text-white/40 group-focus-within:text-gold transition-colors duration-300" />
              <input
                value={q}
                onChange={(e) => setQ(e.target.value)}
                placeholder={t("menu.search.placeholder")}
                className="w-full rounded-sm border border-white/10 bg-white/5 py-3 pl-11 pr-4 text-sm text-white placeholder:text-white/40 focus:border-gold/50 focus:outline-none focus:bg-white/10 transition-all duration-300"
              />
            </motion.div>
          </motion.div>

          {/* Menu Grid */}
          <AnimatePresence mode="popLayout">
            {items.length === 0 ? (
              <motion.p
                key="empty"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                className="py-20 text-center text-white/40"
              >
                {t("menu.empty", { query: q })}
              </motion.p>
            ) : (
              <motion.div 
                layout 
                variants={containerVariants}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true, margin: "-50px" }}
                className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3"
              >
                {items.map((dish, index) => (
                  <motion.article
                    layout
                    key={dish.id}
                    variants={cardHoverVariants}
                    initial="rest"
                    whileHover="hover"
                    className="group relative overflow-hidden rounded-sm border border-white/10 bg-[#1a1510] transition-colors duration-300 hover:border-gold/30 hover:shadow-2xl hover:shadow-gold/5"
                  >
                    {/* Image */}
                    <div className="relative aspect-4/3 overflow-hidden">
                      <motion.img
                        src={dish.image}
                        alt={getName(dish)}
                        loading="lazy"
                        className="h-full w-full object-cover"
                        whileHover={{ scale: 1.08 }}
                        transition={{ duration: 0.6, ease: "easeOut" }}
                      />
                      <div className="absolute inset-0 bg-linear-to-t from-[#1a1510] via-transparent to-transparent" />
                      
                      {/* Badges */}
                      <div className="absolute left-4 top-4 flex gap-2">
                        {dish.popular && (
                          <motion.span 
                            initial={{ opacity: 0, x: -10 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.3 + (index * 0.05) }}
                            className="inline-flex items-center gap-1 rounded-sm bg-gold/90 px-3 py-1 text-[9px] font-semibold uppercase tracking-wider text-gold-foreground shadow-lg"
                          >
                            <Star className="h-3 w-3 fill-current" /> {t("menu.item.popular")}
                          </motion.span>
                        )}
                        {dish.spicy && (
                          <motion.span 
                            initial={{ opacity: 0, x: -10 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.4 + (index * 0.05) }}
                            className="inline-flex items-center gap-1 rounded-sm bg-red-900/90 px-3 py-1 text-[9px] font-semibold uppercase tracking-wider text-white shadow-lg"
                          >
                            <Flame className="h-3 w-3 fill-current" /> {t("menu.item.spicy")}
                          </motion.span>
                        )}
                        {dish.vegetarian && (
                          <motion.span 
                            initial={{ opacity: 0, x: -10 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.5 + (index * 0.05) }}
                            className="inline-flex items-center gap-1 rounded-sm bg-green-900/90 px-3 py-1 text-[9px] font-semibold uppercase tracking-wider text-white shadow-lg"
                          >
                            <Leaf className="h-3 w-3 fill-current" /> {t("menu.item.vegetarian")}
                          </motion.span>
                        )}
                      </div>

                      {/* Price */}
                      <motion.div 
                        initial={{ opacity: 0, y: -10 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.2 + (index * 0.05) }}
                        className="absolute right-4 top-4 rounded-sm bg-[#1a1510]/90 backdrop-blur-sm px-3 py-1.5 border border-white/10 shadow-lg"
                      >
                        <span className="font-display text-lg text-gold">{dish.price} {t("menu.currency")}</span>
                      </motion.div>
                    </div>

                    {/* Content */}
                    <div className="p-5">
                      <div className="mb-3 flex items-start justify-between gap-3">
                        <motion.h3 
                          className="font-display text-xl leading-tight text-white group-hover:text-gold transition-colors duration-300"
                        >
                          {getName(dish)}
                        </motion.h3>
                      </div>
                      <p className="mb-4 line-clamp-2 text-sm leading-relaxed text-white/60">
                        {getDescription(dish)}
                      </p>
                      
                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-1">
                          {[...Array(5)].map((_, i) => (
                            <motion.div
                              key={i}
                              initial={{ opacity: 0, scale: 0 }}
                              whileInView={{ opacity: 1, scale: 1 }}
                              viewport={{ once: true }}
                              transition={{
                                delay: 0.1 + i * 0.03,
                                duration: 0.2,
                                type: "spring",
                                stiffness: 500,
                                damping: 15,
                              }}
                            >
                              <Star
                                className={cn(
                                  "h-3.5 w-3.5",
                                  i < Math.floor(dish.rating || 4.5)
                                    ? "fill-gold text-gold"
                                    : "text-white/20"
                                )}
                              />
                            </motion.div>
                          ))}
                          <motion.span
                            initial={{ opacity: 0, x: -4 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{
                              delay: 0.28 + index * 0.03,
                              duration: 0.25,
                              ease: "easeOut",
                            }}
                            className="ml-2 text-xs font-medium text-slate-500"
                          >
                            ({dish.rating || 24})
                          </motion.span>
                        </div>
                      </div>
                    </div>
                  </motion.article>
                ))}
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </section>
    </>
  );
}