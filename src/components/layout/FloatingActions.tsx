import { MessageCircle, CalendarCheck } from "lucide-react";
import { Link } from "@tanstack/react-router";
import { motion } from "framer-motion";

export function FloatingActions() {
  return (
    <div className="fixed bottom-5 right-5 z-40 flex flex-col items-end gap-3">
      <motion.a
        initial={{ opacity: 0, scale: 0.6 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 0.5, type: "spring" }}
        href="https://wa.me/212524389214"
        target="_blank"
        rel="noreferrer"
        aria-label="Chat on WhatsApp"
        className="group flex h-14 w-14 items-center justify-center rounded-full bg-[#25D366] text-white shadow-xl shadow-[#25D366]/30 transition-transform hover:scale-110"
      >
        <MessageCircle className="h-6 w-6" />
        <span className="absolute right-16 hidden whitespace-nowrap rounded-full bg-foreground px-3 py-1.5 text-xs text-background group-hover:block">
          Chat with us
        </span>
      </motion.a>
      <motion.div
        initial={{ opacity: 0, x: 40 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ delay: 0.7 }}
        className="sm:hidden"
      >
        <Link
          to="/reservations"
          className="flex items-center gap-2 rounded-full bg-gold px-5 py-3 text-sm font-semibold text-gold-foreground shadow-xl shadow-gold/30"
        >
          <CalendarCheck className="h-4 w-4" /> Reserve
        </Link>
      </motion.div>
    </div>
  );
}