import { Link } from "@tanstack/react-router";
import { Instagram, Facebook, Twitter, Youtube, MapPin, Phone, Mail } from "lucide-react";
import { useTranslation } from "react-i18next";

export function Footer() {
  const { t } = useTranslation();

  return (
    <footer className="relative bg-surface border-t border-gold/10">
      <div className="mx-auto max-w-7xl px-6 py-12 lg:px-8">
        <div className="grid gap-10 lg:grid-cols-12">
          
          {/* Col 1: Brand & Socials */}
          <div className="lg:col-span-4 space-y-4">
            <div className="flex items-center gap-3">
              <div className="flex h-9 w-9 items-center justify-center rounded-full border border-gold/40 bg-gold/5">
                <span className="font-display text-base font-bold text-gold">D</span>
              </div>
              <div>
                <p className="font-display text-lg font-semibold text-foreground leading-tight">Dar Medina</p>
                <p className="text-[9px] uppercase tracking-[0.25em] text-gold/70">Marrakech</p>
              </div>
            </div>
            
            <p className="text-sm leading-relaxed text-foreground/60 max-w-xs">
              {t("footer.description")}
            </p>

            <div className="flex gap-2.5 pt-1">
              {[Instagram, Facebook, Twitter, Youtube].map((Icon, i) => (
                <a
                  key={i}
                  href="#"
                  className="flex h-8 w-8 items-center justify-center rounded-full border border-border text-foreground/50 transition-all hover:border-gold hover:text-gold hover:bg-gold/5"
                >
                  <Icon className="h-3.5 w-3.5" />
                </a>
              ))}
            </div>
          </div>

          {/* Col 2: Navigation */}
          <div className="lg:col-span-3">
            <h4 className="text-[10px] uppercase tracking-[0.2em] text-gold/80 mb-4 font-semibold">
              {t("footer.navigation.title")}
            </h4>
            {/* 2-column sub-grid to save vertical height */}
            <ul className="grid grid-cols-2 gap-x-4 gap-y-2.5">
              {[
                { to: "/", labelKey: "nav.home" },
                { to: "/menu", labelKey: "nav.menu" },
                { to: "/about", labelKey: "nav.about" },
                { to: "/reservations", labelKey: "nav.reservations" },
                { to: "/gallery", labelKey: "nav.gallery" },
                { to: "/contact", labelKey: "nav.contact" },
              ].map((item) => (
                <li key={item.to}>
                  <Link
                    to={item.to}
                    className="text-sm text-foreground/60 transition-colors hover:text-gold"
                  >
                    {t(item.labelKey)}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 3: Hours & Contact (Combined to reduce height) */}
          <div className="lg:col-span-5 grid gap-8 sm:grid-cols-2">
            
            {/* Hours */}
            <div>
              <h4 className="text-[10px] uppercase tracking-[0.2em] text-gold/80 mb-4 font-semibold">
                {t("footer.hours.title")}
              </h4>
              <ul className="space-y-2 text-sm">
                <li className="flex justify-between text-foreground/60">
                  <span>{t("footer.hours.mon_thu")}</span>
                  <span className="text-foreground/80 text-xs">12PM — 12AM</span>
                </li>
                <li className="flex justify-between text-foreground/60">
                  <span>{t("footer.hours.fri_sat")}</span>
                  <span className="text-foreground/80 text-xs">12PM — 1AM</span>
                </li>
                <li className="flex justify-between text-foreground/60">
                  <span>{t("footer.hours.sunday")}</span>
                  <span className="text-foreground/80 text-xs">1PM — 11PM</span>
                </li>
              </ul>
              <div className="mt-3 flex items-center gap-2 text-xs text-gold/80">
                <div className="h-1.5 w-1.5 rounded-full bg-green-500 animate-pulse" />
                <span>{t("footer.hours.open_now")}</span>
              </div>
            </div>

            {/* Contact */}
            <div>
              <h4 className="text-[10px] uppercase tracking-[0.2em] text-gold/80 mb-4 font-semibold">
                {t("footer.contact.title")}
              </h4>
              <ul className="space-y-3">
                <li className="flex items-start gap-2.5">
                  <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-gold/80" />
                  <span className="text-sm text-foreground/60 leading-snug">
                    {t("footer.contact.address")}
                  </span>
                </li>
                <li className="flex items-center gap-2.5">
                  <Phone className="h-4 w-4 shrink-0 text-gold/80" />
                  <a href="tel:212000000000" className="text-sm text-foreground/60 hover:text-gold transition-colors">
                    212 000 000 000
                  </a>
                </li>
                <li className="flex items-center gap-2.5">
                  <Mail className="h-4 w-4 shrink-0 text-gold/80" />
                  <a href="mailto:hello@darmedina.ma" className="text-sm text-foreground/60 hover:text-gold transition-colors">
                    hello@darmedina.ma
                  </a>
                </li>
              </ul>
            </div>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="mt-12 pt-6 border-t border-border flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-foreground/40">
          <p>
            {t("footer.copyright", { year: new Date().getFullYear() })}
          </p>
          <div className="flex gap-6">
            <a href="#" className="hover:text-gold transition-colors">
              {t("footer.privacy")}
            </a>
            <a href="#" className="hover:text-gold transition-colors">
              {t("footer.terms")}
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}