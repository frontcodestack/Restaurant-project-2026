import { CalendarCheck } from "lucide-react";
import { FaWhatsapp } from "react-icons/fa";
import { Link } from "@tanstack/react-router";
import { motion } from "framer-motion";

export function FloatingActions() {
  return (
    <div className="fixed bottom-5 right-5 z-40 flex flex-col items-end gap-3">
      {/* WhatsApp */}
      <motion.a
        initial={{ opacity: 0, scale: 0.6 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 0.5, type: "spring" }}
        href="https://wa.me/212524389214"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Chat on WhatsApp"
        className="group relative flex h-14 w-14 items-center justify-center rounded-full bg-[#25D366] text-white shadow-xl shadow-[#25D366]/30 transition-all duration-300 hover:scale-110 hover:shadow-[#25D366]/50"
      >
        <FaWhatsapp className="h-8 w-8" />

        <span className="pointer-events-none absolute right-16 hidden whitespace-nowrap rounded-full bg-foreground px-3 py-1.5 text-xs text-background shadow-lg group-hover:block">
          Chat with us
        </span>
      </motion.a>

     
    </div>
  );
}