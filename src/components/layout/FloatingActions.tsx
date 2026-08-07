import { Link } from "@tanstack/react-router";
import { FaWhatsapp } from "react-icons/fa";
import { CalendarCheck, Phone, Menu } from "lucide-react";

export function FloatingActions() {
  return (
    <>
      {/* Desktop corner action (kept subtle and static) */}
      <div className="hidden lg:flex fixed bottom-5 right-5 z-40 items-end">
        <a
          href="https://wa.me/212524389214"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Chat on WhatsApp"
          className="group relative flex h-12 w-12 items-center justify-center rounded-full bg-[#25D366] text-white shadow-md transition-shadow duration-150"
        >
          <FaWhatsapp className="h-6 w-6" />
        </a>
      </div>

      {/* Mobile sticky action bar (compact, non-intrusive) */}
      <nav
        aria-label="Mobile quick actions"
        className="fixed bottom-0 left-0 right-0 z-50 block lg:hidden"
      >
        <div className="mx-4 mb-4 rounded-lg bg-white/95 shadow-md backdrop-blur-sm px-3 py-2 flex items-center justify-between">
          <Link to="/menu" aria-label="View Menu" className="flex items-center gap-2 px-3 py-2 rounded-md text-sm font-medium text-gray-800">
            <Menu className="h-5 w-5 text-gold" />
            <span>Menu</span>
          </Link>

          <Link to="/reservations" aria-label="Reserve a Table" className="flex items-center gap-2 rounded-md bg-gold px-4 py-2 text-sm font-semibold text-gold-foreground shadow-sm">
            <CalendarCheck className="h-4 w-4" />
            <span>Reserve</span>
          </Link>

          <a href="tel:+212000000000" aria-label="Contact" className="flex items-center gap-2 px-3 py-2 rounded-md text-sm font-medium text-gray-800">
            <Phone className="h-4 w-4 text-gold" />
            <span>Contact</span>
          </a>
        </div>
      </nav>
    </>
  );
}