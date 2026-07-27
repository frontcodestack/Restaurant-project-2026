import { c as createRouter, a as createRootRouteWithContext, u as useRouter, L as Link, O as Outlet, H as HeadContent, S as Scripts, b as createFileRoute, l as lazyRouteComponent, d as useRouterState } from "../_libs/tanstack__react-router.mjs";
import { r as reactExports, j as jsxRuntimeExports } from "../_libs/react.mjs";
import { i as instance } from "../_libs/i18next.mjs";
import { b as QueryClient } from "../_libs/tanstack__query-core.mjs";
import { Q as QueryClientProvider } from "../_libs/tanstack__react-query.mjs";
import { c as clsx } from "../_libs/clsx.mjs";
import { t as twMerge } from "../_libs/tailwind-merge.mjs";
import { S as Switch$1, a as SwitchThumb } from "../_libs/radix-ui__react-switch.mjs";
import { F as FaWhatsapp } from "../_libs/react-icons.mjs";
import { u as useTranslation, i as initReactI18next } from "../_libs/react-i18next.mjs";
import { S as Sun, M as Moon, X, a as Menu, I as Instagram, F as Facebook, T as Twitter, Y as Youtube, b as MapPin, P as Phone, c as Mail, C as CalendarCheck } from "../_libs/lucide-react.mjs";
import { A as AnimatePresence, m as motion } from "../_libs/framer-motion.mjs";
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
import "../_libs/radix-ui__primitive.mjs";
import "../_libs/radix-ui__react-compose-refs.mjs";
import "../_libs/radix-ui__react-context.mjs";
import "../_libs/@radix-ui/react-use-controllable-state+[...].mjs";
import "../_libs/@radix-ui/react-use-layout-effect+[...].mjs";
import "../_libs/radix-ui__react-use-previous.mjs";
import "../_libs/radix-ui__react-use-size.mjs";
import "../_libs/radix-ui__react-primitive.mjs";
import "../_libs/radix-ui__react-slot.mjs";
import "../_libs/use-sync-external-store.mjs";
import "../_libs/motion-dom.mjs";
import "../_libs/motion-utils.mjs";
const nav$2 = { "home": "Home", "menu": "Menu", "about": "About", "gallery": "Gallery", "reservations": "Reservations", "contact": "Contact", "reserve": "Reserve", "reserve_table": "Reserve a Table", "common": { "language": "Language", "theme": "Theme" } };
const home$2 = { "hero": { "image_alt": "Dar Medina restaurant interior", "title_line1": "A Journey Through", "title_line2": "Moroccan Soul", "description": "Slow-cooked tagines, hand-rolled couscous and warm Moroccan hospitality inside a century-old riad.", "cta_primary": "Reserve Your Table", "cta_secondary": "View Our Menu", "open_hours": "Open Daily 12PM – 11PM", "location": "Marrakech Medina, Morocco", "phone": "+212 524 389 214" }, "story": { "label": "Our Story", "title_line1": "Born from the Heart", "title_line2": "of the Medina" }, "chef": { "image_alt": "Chef preparing traditional Moroccan cuisine", "years_label": "Years of Excellence", "description": "For over two decades, we've been serving authentic Moroccan dishes passed down through generations, using the finest local ingredients and traditional cooking methods.", "story_link": "Read Our Full Story" }, "stats": { "dishes": "Dishes", "rating": "Guest Rating", "guests": "Happy Guests" }, "experience": { "label": "The Experience", "title_line1": "Step Into Our", "title_line2": "World of Elegance" }, "gallery": { "images": { "courtyard": "Traditional Moroccan courtyard", "lanterns": "Decorative Moroccan lanterns", "spices": "Fresh Moroccan spices" }, "captions": { "rooftop": "Rooftop Sunset", "live_music": "Live Music", "live_music_alt": "Musicians performing traditional music", "signature_dishes": "Signature Dishes", "signature_dishes_alt": "Featured signature dishes" }, "see_gallery": "View Full Gallery" }, "featured": { "label": "Culinary Masterpieces", "title_line1": "Featured", "title_line2": "Signature Dishes", "chefs_choice": "Chef's Choice", "price_prefix": "", "price_suffix": "DH", "view_menu": "View Full Menu" }, "testimonials": { "label": "Guest Experiences", "title_line1": "Voices of Our", "title_line2": "Beloved Guests", "items": { "1": { "quote": "An unforgettable evening! The tagine was exquisite and the ambiance transported us straight to Morocco." }, "2": { "quote": "The best Moroccan food we've had outside of Morocco. Warm service and beautiful setting." }, "3": { "quote": "A culinary journey through Morocco. Every dish told a story. Highly recommend!" } } }, "reservations": { "label": "Reservations", "title_line1": "Reserve Your", "title_line2": "Moroccan Evening", "private_dining_title": "Private Dining", "private_dining_desc": "Exclusive rooms available", "live_music_title": "Live Gnawa Music", "live_music_desc": "Fri & Sat evenings" }, "cta": { "description": "Join us for an unforgettable evening of authentic Moroccan cuisine, live music, and warm hospitality in the heart of the Medina.", "image_alt": "Restaurant interior" }, "booking": { "form_title": "Book a Table", "first_name": "First Name", "last_name": "Last Name", "email": "Email", "date": "Date", "time": "Time", "guests": "Guests", "guest_options": { "1": "1 Guest", "2": "2 Guests", "3": "3 Guests", "4": "4 Guests", "5": "5 Guests", "6_plus": "6+ Guests" }, "special_requests": "Special Requests", "special_requests_placeholder": "Dietary requirements, special occasions...", "confirm_button": "Confirm Reservation" }, "footer": { "awards_label": "Awards & Recognition" } };
const menu$2 = { "hero": { "badge": "Authentic Moroccan Cuisine", "title_line1": "Our Culinary", "title_line2": "Journey", "description": "Discover our seasonal Moroccan menu: tagines, couscous, grills, pastilla, and traditional mint tea — slow-cooked and souk-fresh." }, "filter": { "all": "All" }, "categories": { "starters": "Starters", "tagines": "Tagines", "couscous": "Couscous", "grills": "Grills", "pastilla": "Pastilla", "seafood": "Seafood", "desserts": "Desserts", "drinks": "Drinks" }, "subtitle": { "cold_warm": "Cold & Warm", "starters": "Starters" }, "search": { "placeholder": "Search dishes..." }, "currency": "MAD", "item": { "popular": "Popular", "spicy": "Spicy", "vegetarian": "Vegetarian" }, "empty": 'No dishes found matching "{{query}}"' };
const about$2 = { "hero": { "badge": "Our Heritage", "title_line1": "Our Story,", "title_line2": "Our Heritage", "description": "A century-old riad, four generations of Marrakchi recipes and a team devoted to the slow rituals of Moroccan hospitality." }, "stats": { "years": "Years of Excellence", "michelin": "Michelin Stars", "guests": "Happy Guests", "dishes": "Signature Dishes" }, "story": { "badge": "Since 2009", "title_line1": "A Riad Steeped in", "title_line2": "Centuries of History", "images": { "riad_alt": "Riad Interior", "chef_alt": "Chef at work" }, "p1": "Nestled in the heart of Marrakech's ancient medina, Dar Medina stands as a testament to centuries of Moroccan culinary tradition. Our riad, dating back over 100 years, has been lovingly restored to preserve its authentic character while offering modern comforts.", "p2": "For four generations, the recipes that grace our tables have been passed down through family lines, each dish carrying the wisdom and love of those who came before. We source our ingredients from local souks, ensuring freshness and supporting our community.", "p3": "Every meal at Dar Medina is more than just dining—it's an invitation to experience the warmth of Moroccan hospitality, the artistry of traditional cooking, and the timeless beauty of our heritage.", "quote": "Cooking is not just about feeding the body, it's about nourishing the soul and preserving our cultural memory.", "quote_author": "Chef Hassan El Mansouri" }, "philosophy": { "badge": "Our Approach", "title_line1": "Our Culinary", "title_line2": "Philosophy", "description": "We believe in honoring tradition while embracing innovation, creating dishes that tell the story of Morocco's rich culinary heritage." }, "principles": { "seasonal": { "title": "Seasonal & Fresh", "desc": "We source ingredients daily from local markets, ensuring peak freshness and supporting sustainable agriculture." }, "technique": { "title": "Slow Cooking", "desc": "Traditional methods passed down through generations, allowing flavors to develop naturally over time." }, "spice": { "title": "Artisan Spices", "desc": "Hand-selected spice blends from Marrakech's famous souks, creating complex layers of flavor." }, "hospitality": { "title": "Heartfelt Service", "desc": "Every guest is treated as family, with warm Moroccan hospitality that makes you feel at home." } }, "chef": { "badge": "Master Chef", "title_line1": "Chef Hassan", "title_line2": "El Mansouri", "name_arabic": "الشيف حسن المنصوري", "image_alt": "Chef Hassan El Mansouri", "title": "Executive Chef", "since": "Since 2009", "p1": "Born into a family of Marrakchi cooks, Chef Hassan learned the art of Moroccan cuisine from his grandmother's kitchen. With over 25 years of experience, he has mastered the delicate balance of spices and techniques that define authentic Moroccan cooking.", "p2": "His philosophy centers on preserving traditional recipes while introducing subtle innovations that elevate the dining experience. Under his leadership, Dar Medina has earned recognition as one of Morocco's finest restaurants.", "badges": { "years": "Decades Experience", "michelin": "Michelin Stars", "top50": "World's Top 50" } }, "team": { "badge": "Our People", "title_line1": "The Dar Medina", "title_line2": "Family", "roles": { "executive_chef": "Executive Chef", "pastry": "Pastry Chef", "sommelier": "Tea Sommelier", "host": "Head of Hospitality" } }, "awards": { "badge": "Recognition", "title_line1": "Awards &", "title_line2": "Accolades", "items": { "michelin": { "title": "3 Michelin Stars", "desc": "Three consecutive years of culinary excellence" }, "worlds_best": { "title": "World's Best 50", "desc": "Ranked #27 in World's Best Restaurants" }, "best_morocco": { "title": "Best of Morocco", "desc": "Traditional Cuisine Category Winner" }, "green_star": { "title": "Green Star", "desc": "Sustainable gastronomy recognition" } } }, "design": { "badge": "Architecture", "title_line1": "Moroccan Design", "title_line2": "as Living Art", "description": "Every corner of Dar Medina tells a story through traditional Moroccan craftsmanship and architectural beauty.", "elements": { "zellij": { "title": "Zellij Tilework", "desc": "Intricate geometric patterns crafted by master artisans" }, "lighting": { "title": "Handcrafted Lighting", "desc": "Traditional brass lanterns" }, "ceilings": { "title": "Carved Ceilings", "desc": "Cedar wood craftsmanship" }, "arches": { "title": "Horseshoe Arches", "desc": "Classic Moroccan architecture" }, "plasterwork": { "title": "Arabesque Plasterwork", "desc": "Delicate ornamental designs" }, "ceramics": { "title": "Artisan Ceramics", "desc": "Hand-painted tableware from Fes artisans" } } }, "hospitality": { "badge": "Tradition", "title_line1": "The Art of", "title_line2": "Moroccan Hospitality", "description": "Experience the warmth and generosity that has defined Moroccan culture for centuries.", "welcome": { "title": "Warm Welcome", "desc": "Every guest is greeted with traditional Moroccan hospitality and mint tea upon arrival." }, "tea": { "title": "Mint Tea Ceremony", "desc": "The art of preparing and serving Moroccan mint tea, a symbol of friendship and welcome." }, "service": { "title": "Attentive Service", "desc": "Our staff anticipates your needs with discretion and genuine care for your comfort." }, "music": { "title": "Live Gnawa Music", "desc": "Traditional Moroccan music performances every Friday and Saturday evening." }, "ambiance": { "title": "Magical Ambiance", "desc": "Candlelit courtyards and intimate dining spaces create an unforgettable atmosphere." }, "private": { "title": "Private Dining", "desc": "Exclusive rooms available for special occasions and intimate gatherings." } }, "cta": { "badge": "Join Us", "title_line1": "Come Experience", "title_line2": "Dar Medina", "description": "Reserve your table and embark on a culinary journey through the heart of Morocco.", "reserve": "Reserve Your Table", "menu": "View Our Menu" } };
const gallery$2 = { "hero": { "badge": "Visual Journey", "title_line1": "Through Our", "title_line2": "Lens", "description": "Step inside Dar Medina — our riad interiors, candle-lit courtyard, spice-souk colours and signature dishes captured in every frame.", "stats": { "photos": "120+ Photographs", "collections": "5 Collections", "awards": "Award-Winning Spaces" }, "explore": "Explore Gallery" }, "featured": { "badge": "Featured", "main_alt": "Featured riad interior", "cuisine_alt": "Moroccan cuisine", "zellij_alt": "Zellij tilework details" }, "filter": { "all": "All", "showing": "Showing {{visible}} of {{total}} photos" }, "categories": { "cuisine": "Cuisine", "interiors": "Interiors", "zellij_details": "Zellij & Details", "atmosphere": "Atmosphere", "events": "Events" }, "load_more": "Load More Photos", "load_more.count": "{{visible}} OF {{total}}", "instagram": { "handle": "@DARMEDINA_MA", "title_line1": "Follow Our", "title_line2": "Visual Story", "follow": "Follow on Instagram", "photo_alt": "Instagram photo" } };
const reservations$2 = { "hero": { "badge": "Reservations", "title_line1": "Reserve Your", "title_line2": "Table", "description": "Secure your place for an unforgettable Moroccan dining experience in the heart of Marrakech's ancient medina." }, "info": { "hours": "Opening Hours", "hours_desc": "Lunch 12:00–15:00, Dinner 19:00–23:30", "large_parties": "Large Parties", "large_parties_desc": "Private courtyard available for groups of 10+", "dress_code": "Dress Code", "dress_code_desc": "Smart casual attire recommended", "reservation_policy": "Reservation Policy", "reservation_policy_desc": "Free cancellation up to 24 hours before." }, "form": { "badge": "Booking", "title_line1": "Book Your", "title_line2": "Evening", "guest_info": "Guest Information", "first_name": "First Name", "first_name_placeholder": "Ahmed", "last_name": "Last Name", "last_name_placeholder": "Benali", "email": "Email Address", "email_placeholder": "ahmed@example.com", "phone": "Phone Number", "phone_placeholder": "+212 600 000 000", "party_size": "Party Size", "party_size_desc": "How many guests will be dining?", "guest_one": "Guest", "guest_other": "Guests", "large_party_note": "For parties of 9+, please call to arrange special accommodations", "date_time": "Date & Time", "date": "Date", "time": "Time", "notes": "Special Requests", "notes_placeholder": "Dietary requirements, celebrations, seating preferences...", "error": "Please fill in all required fields correctly", "submit": "Confirm Reservation" }, "success": { "title": "Thank You, {{name}}!", "description": "Your reservation for {{guests}} {{guests, plural, one {guest} other {guests}}} on {{date}} at {{time}} has been confirmed. A confirmation email has been sent to {{email}}.", "button": "Make Another Reservation" }, "summary": { "title": "Reservation Summary", "date": "Date", "time": "Time", "guests": "Guests", "meal": "Meal Type", "lunch": "Lunch Service", "dinner": "Dinner Service", "cancellation_title": "Cancellation Policy", "cancellation_desc": "Free cancellation up to 24 hours before your reservation. Late cancellations may incur a fee.", "what_to_expect": "What to Expect", "expect_1": "Confirmation email within 1 hour", "expect_2": "Welcome drink upon arrival", "expect_3": "Personalized service throughout your evening" }, "why": { "badge": "Why Choose Us", "title_line1": "Why Reserve at", "title_line2": "Dar Medina", "michelin": { "title": "Michelin Excellence", "desc": "Three Michelin stars recognizing our commitment to culinary excellence" }, "hospitality": { "title": "Warm Hospitality", "desc": "Experience authentic Moroccan warmth and personalized service" }, "riad": { "title": "Historic Riad", "desc": "Dine in a century-old riad with stunning traditional architecture" }, "cuisine": { "title": "Authentic Cuisine", "desc": "Traditional recipes passed down through four generations" } }, "testimonials": { "badge": "Guest Reviews", "title": "What Our Guests Say", "items": { "1": { "quote": "The reservation process was seamless, and when we arrived, everything was perfect — the table, the flowers, the welcome. An evening we will never forget.", "author": "Sophie Laurent", "location": "Paris, France" }, "2": { "quote": "We celebrated our anniversary here and the team went above and beyond. The rooftop terrace at night with the city lights below — absolutely magical.", "author": "James Whitfield", "location": "London, UK" }, "3": { "quote": "The special surprise section was incredibly thoughtful. They remembered every detail — the vegetarian preferences, the birthday surprise, all so effortless.", "author": "Aisha Al-Rashid", "location": "Dubai, UAE" } } }, "help": { "badge": "Need Assistance?", "title_line1": "Need Help with Your", "title_line2": "Reservation?", "description": "Our team is here to help you plan the perfect dining experience. Contact us for special arrangements or questions.", "call": "Call Us Now", "email": "Email Us" } };
const contact$2 = { "hero": { "badge": "Get In Touch", "title_line1": "Find Us in", "title_line2": "Marrakech", "description": "Visit Dar Medina in the heart of the ancient medina. We're here to answer your questions and welcome you.", "location": "Medina, Marrakech", "hours": "Open Daily 12PM – 11PM" }, "cards": { "address": { "title": "Our Address", "text": "123 Derb Sidi Ahmed, Medina, Marrakech 40000, Morocco" }, "phone": { "title": "Call Us", "text": "+212 524 389 214", "link": "Call Now" }, "email": { "title": "Email Us", "text": "hello@darmedina.ma", "link": "Send Email" }, "hours": { "title": "Opening Hours", "lunch": "Lunch: 12:00 – 15:00", "dinner": "Dinner: 19:00 – 23:30", "open_daily": "Open Daily" } }, "map": { "badge": "Location", "title": "Dar Medina Location Map", "google_maps": "Google Maps", "apple_maps": "Apple Maps", "copy_address": "Copy Address" }, "form_section": { "badge": "Contact Form", "title_line1": "Send Us", "title_line2": "A Message", "visit_us": "Visit Us", "follow_us": "Follow Us" }, "form": { "tabs": { "general": "General Inquiry", "private": "Private Dining" }, "success_title": "Message Sent!", "success_desc": "Thank you for reaching out. We'll get back to you within 24 hours.", "first_name": "First Name", "first_name_placeholder": "Ahmed", "last_name": "Last Name", "last_name_placeholder": "Benali", "email": "Email Address", "email_placeholder": "ahmed@example.com", "phone": "Phone Number", "phone_placeholder": "+212 600 000 000", "subject": "Subject", "select_subject": "Select a subject", "subjects": { "reservation": "Reservation Inquiry", "private": "Private Dining Event", "general": "General Question", "feedback": "Feedback" }, "message": "Your Message", "message_placeholder": "Tell us how we can help you...", "privacy": "I agree to the privacy policy and consent to being contacted regarding my inquiry.", "submit": "Send Message" }, "cta": { "badge": "Ready to Visit?", "title_line1": "Ready to", "title_line2": "Experience Dar Medina?", "description": "Book your table today and discover the authentic flavors and warm hospitality of Moroccan cuisine.", "reserve": "Reserve Your Table", "inquiry": "Send Inquiry" } };
const footer$2 = { "description": "Authentic Moroccan cuisine in the heart of Marrakech's ancient medina. Experience centuries of culinary tradition in a stunning riad setting.", "navigation": { "title": "Navigation" }, "hours": { "title": "Opening Hours", "mon_thu": "Monday — Thursday", "mon_thu_time": "12PM — 12AM", "fri_sat": "Friday — Saturday", "fri_sat_time": "12PM — 1AM", "sunday": "Sunday", "sunday_time": "1PM — 11PM", "open_now": "Open Now" }, "contact": { "title": "Contact Us", "address": "123 Derb Sidi Ahmed, Medina, Marrakech 40000, Morocco" }, "newsletter": { "title": "Stay Updated", "description": "Subscribe to receive exclusive offers, seasonal menus, and special event invitations.", "placeholder": "Enter your email", "button": "Subscribe", "success": "Thank you for subscribing! Check your email for confirmation." }, "copyright": "© {{year}} Dar Medina. All rights reserved.", "privacy": "Privacy Policy", "terms": "Terms of Service", "crafted": "Crafted with ♥ in Marrakech" };
const en = {
  nav: nav$2,
  home: home$2,
  menu: menu$2,
  about: about$2,
  gallery: gallery$2,
  reservations: reservations$2,
  contact: contact$2,
  footer: footer$2
};
const nav$1 = { "home": "Accueil", "menu": "Menu", "about": "À propos", "gallery": "Galerie", "reservations": "Réservations", "contact": "Contact", "reserve": "Réserver", "reserve_table": "Réserver une Table", "common": { "language": "Langue", "theme": "Thème" } };
const home$1 = { "hero": { "image_alt": "Intérieur du restaurant Dar Medina", "title_line1": "Un Voyage à Travers", "title_line2": "l'Âme Marocaine", "description": "Tajines mijotés lentement, couscous roulé à la main et hospitalité marocaine chaleureuse dans un riad centenaire.", "cta_primary": "Réservez Votre Table", "cta_secondary": "Voir Notre Menu", "open_hours": "Ouvert Tous les Jours 12h – 23h", "location": "Médina de Marrakech, Maroc", "phone": "+212 524 389 214" }, "story": { "label": "Notre Histoire", "title_line1": "Né du Cœur", "title_line2": "de la Médina" }, "chef": { "image_alt": "Chef préparant la cuisine marocaine traditionnelle", "years_label": "Années d'Excellence", "description": "Depuis plus de deux décennies, nous servons des plats marocains authentiques transmis de génération en génération, utilisant les meilleurs ingrédients locaux et les méthodes de cuisson traditionnelles.", "story_link": "Lire Notre Histoire Complète" }, "stats": { "dishes": "Plats", "rating": "Note des Clients", "guests": "Clients Satisfaits" }, "experience": { "label": "L'Expérience", "title_line1": "Entrez dans Notre", "title_line2": "Monde d'Élégance" }, "gallery": { "images": { "courtyard": "Cour marocaine traditionnelle", "lanterns": "Lanternes marocaines décoratives", "spices": "Épices marocaines fraîches" }, "captions": { "rooftop": "Coucher de Soleil sur le Toit", "live_music": "Musique Live", "live_music_alt": "Musiciens jouant de la musique traditionnelle", "signature_dishes": "Plats Signature", "signature_dishes_alt": "Plats signature en vedette" }, "see_gallery": "Voir la Galerie Complète" }, "featured": { "label": "Chefs-d'Œuvre Culinaires", "title_line1": "Plats Signature", "title_line2": "En Vedette", "chefs_choice": "Choix du Chef", "price_prefix": "", "price_suffix": " DH", "view_menu": "Voir le Menu Complet" }, "testimonials": { "label": "Expériences des Clients", "title_line1": "Les Voix de Nos", "title_line2": "Chers Clients", "items": { "1": { "quote": "Une soirée inoubliable ! Le tajine était exquis et l'ambiance nous a transportés directement au Maroc." }, "2": { "quote": "La meilleure cuisine marocaine que nous ayons eue en dehors du Maroc. Service chaleureux et cadre magnifique." }, "3": { "quote": "Un voyage culinaire à travers le Maroc. Chaque plat racontait une histoire. Je recommande vivement !" } } }, "reservations": { "label": "Réservations", "title_line1": "Réservez Votre", "title_line2": "Soirée Marocaine", "private_dining_title": "Salle Privée", "private_dining_desc": "Salons exclusifs disponibles", "live_music_title": "Musique Gnawa Live", "live_music_desc": "Vendredis et samedis soirs" }, "cta": { "description": "Rejoignez-nous pour une soirée inoubliable de cuisine marocaine authentique, de musique live et d'hospitalité chaleureuse au cœur de la Médina.", "image_alt": "Intérieur du restaurant" }, "booking": { "form_title": "Réserver une Table", "first_name": "Prénom", "last_name": "Nom", "email": "Email", "date": "Date", "time": "Heure", "guests": "Convives", "guest_options": { "1": "1 Personne", "2": "2 Personnes", "3": "3 Personnes", "4": "4 Personnes", "5": "5 Personnes", "6_plus": "6+ Personnes" }, "special_requests": "Demandes Spéciales", "special_requests_placeholder": "Exigences alimentaires, occasions spéciales...", "confirm_button": "Confirmer la Réservation" }, "footer": { "awards_label": "Prix et Reconnaissances" } };
const menu$1 = { "hero": { "badge": "Cuisine Marocaine Authentique", "title_line1": "Notre Voyage", "title_line2": "Culinaire", "description": "Découvrez notre menu marocain saisonnier: tajines, couscous, grillades, pastilla et thé à la menthe traditionnel — mijoté et frais du souk." }, "filter": { "all": "Tout" }, "categories": { "starters": "Entrées", "tagines": "Tajines", "couscous": "Couscous", "grills": "Grillades", "pastilla": "Pastilla", "seafood": "Fruits de Mer", "desserts": "Desserts", "drinks": "Boissons" }, "subtitle": { "cold_warm": "Froid & Chaud", "starters": "Entrées" }, "search": { "placeholder": "Rechercher des plats..." }, "currency": "DH", "item": { "popular": "Populaire", "spicy": "Épicé", "vegetarian": "Végétarien" }, "empty": 'Aucun plat trouvé correspondant à "{{query}}"' };
const about$1 = { "hero": { "badge": "Notre Héritage", "title_line1": "Notre Histoire,", "title_line2": "Notre Héritage", "description": "Un riad centenaire, quatre générations de recettes marrakchies et une équipe dévouée aux rituels lents de l'hospitalité marocaine." }, "stats": { "years": "Années d'Excellence", "michelin": "Étoiles Michelin", "guests": "Clients Satisfaits", "dishes": "Plats Signature" }, "story": { "badge": "Depuis 2009", "title_line1": "Un Riad Imprégné de", "title_line2": "Siècles d'Histoire", "images": { "riad_alt": "Intérieur du Riad", "chef_alt": "Chef au travail" }, "p1": "Niché au cœur de la médina ancienne de Marrakech, Dar Medina témoigne de siècles de tradition culinaire marocaine. Notre riad, datant de plus de 100 ans, a été restauré avec amour pour préserver son caractère authentique tout en offrant des conforts modernes.", "p2": "Depuis quatre générations, les recettes qui ornent nos tables se transmettent de lignée en lignée, chaque plat portant la sagesse et l'amour de ceux qui nous ont précédés. Nous approvisionnons nos ingrédients dans les souks locaux, garantissant fraîcheur et soutien à notre communauté.", "p3": "Chaque repas au Dar Medina est plus qu'un simple repas — c'est une invitation à expérimenter la chaleur de l'hospitalité marocaine, l'art de la cuisine traditionnelle et la beauté intemporelle de notre patrimoine.", "quote": "Cuisiner ne consiste pas seulement à nourrir le corps, il s'agit de nourrir l'âme et de préserver notre mémoire culturelle.", "quote_author": "Chef Hassan El Mansouri" }, "philosophy": { "badge": "Notre Approche", "title_line1": "Notre Philosophie", "title_line2": "Culinaire", "description": "Nous croyons à l'honneur de la tradition tout en embrassant l'innovation, créant des plats qui racontent l'histoire du riche patrimoine culinaire du Maroc." }, "principles": { "seasonal": { "title": "Saisonnier & Frais", "desc": "Nous approvisionnons les ingrédients quotidiennement des marchés locaux, garantissant une fraîcheur optimale et soutenant l'agriculture durable." }, "technique": { "title": "Cuisson Lente", "desc": "Méthodes traditionnelles transmises de génération en génération, permettant aux saveurs de se développer naturellement avec le temps." }, "spice": { "title": "Épices Artisanales", "desc": "Mélanges d'épices sélectionnés à la main des célèbres souks de Marrakech, créant des couches complexes de saveur." }, "hospitality": { "title": "Service Chaleureux", "desc": "Chaque client est traité comme de la famille, avec une hospitalité marocaine chaleureuse qui vous fait sentir chez vous." } }, "chef": { "badge": "Chef Principal", "title_line1": "Chef Hassan", "title_line2": "El Mansouri", "name_arabic": "الشيف حسن المنصوري", "image_alt": "Chef Hassan El Mansouri", "title": "Chef Exécutif", "since": "Depuis 2009", "p1": "Né dans une famille de cuisiniers marrakchis, le Chef Hassan a appris l'art de la cuisine marocaine dans la cuisine de sa grand-mère. Avec plus de 25 ans d'expérience, il a maîtrisé l'équilibre délicat des épices et des techniques qui définissent la cuisine marocaine authentique.", "p2": "Sa philosophie centre sur la préservation des recettes traditionnelles tout en introduisant des innovations subtiles qui élèvent l'expérience culinaire. Sous sa direction, Dar Medina a été reconnu comme l'un des meilleurs restaurants du Maroc.", "badges": { "years": "Décennies d'Expérience", "michelin": "Étoiles Michelin", "top50": "Top 50 Mondial" } }, "team": { "badge": "Notre Équipe", "title_line1": "La Famille", "title_line2": "Dar Medina", "roles": { "executive_chef": "Chef Exécutif", "pastry": "Chef Pâtissier", "sommelier": "Sommelier de Thé", "host": "Directeur de l'Hospitalité" } }, "awards": { "badge": "Reconnaissance", "title_line1": "Prix &", "title_line2": "Distinctions", "items": { "michelin": { "title": "3 Étoiles Michelin", "desc": "Trois années consécutives d'excellence culinaire" }, "worlds_best": { "title": "Top 50 Mondial", "desc": "Classé #27 dans les Meilleurs Restaurants du Monde" }, "best_morocco": { "title": "Meilleur du Maroc", "desc": "Lauréat Catégorie Cuisine Traditionnelle" }, "green_star": { "title": "Étoile Verte", "desc": "Reconnaissance de la gastronomie durable" } } }, "design": { "badge": "Architecture", "title_line1": "Design Marocain", "title_line2": "comme Art Vivant", "description": "Chaque coin du Dar Medina raconte une histoire à travers l'artisanat marocain traditionnel et la beauté architecturale.", "elements": { "zellij": { "title": "Mosaïque Zellij", "desc": "Motifs géométriques complexes créés par des maîtres artisans" }, "lighting": { "title": "Éclairage Artisanal", "desc": "Lanternes traditionnelles en laiton" }, "ceilings": { "title": "Plafonds Sculptés", "desc": "Artisanat en bois de cèdre" }, "arches": { "title": "Arches en Fer à Cheval", "desc": "Architecture marocaine classique" }, "plasterwork": { "title": "Stuc Arabesque", "desc": "Motifs ornementaux délicats" }, "ceramics": { "title": "Céramique Artisanale", "desc": "Vaisselle peinte à la main par des artisans de Fès" } } }, "hospitality": { "badge": "Tradition", "title_line1": "L'Art de", "title_line2": "l'Hospitalité Marocaine", "description": "Découvrez la chaleur et la générosité qui définissent la culture marocaine depuis des siècles.", "welcome": { "title": "Accueil Chaleureux", "desc": "Chaque client est accueilli avec l'hospitalité marocaine traditionnelle et du thé à la menthe à l'arrivée." }, "tea": { "title": "Cérémonie du Thé à la Menthe", "desc": "L'art de préparer et servir le thé à la menthe marocain, symbole d'amitié et de bienvenue." }, "service": { "title": "Service Attentif", "desc": "Notre personnel anticipe vos besoins avec discrétion et un soin véritable pour votre confort." }, "music": { "title": "Musique Gnawa Live", "desc": "Spectacles de musique marocaine traditionnelle chaque vendredi et samedi soir." }, "ambiance": { "title": "Ambiance Magique", "desc": "Des cours illuminées aux bougies et des espaces de restauration intimes créent une atmosphère inoubliable." }, "private": { "title": "Salle Privée", "desc": "Salons exclusifs disponibles pour occasions spéciales et rassemblements intimes." } }, "cta": { "badge": "Rejoignez-nous", "title_line1": "Venez Découvrir", "title_line2": "Dar Medina", "description": "Réservez votre table et embarquez pour un voyage culinaire au cœur du Maroc.", "reserve": "Réservez Votre Table", "menu": "Voir Notre Menu" } };
const gallery$1 = { "hero": { "badge": "Voyage Visuel", "title_line1": "À Travers Notre", "title_line2": "Objectif", "description": "Entrez dans Dar Medina — nos intérieurs de riad, notre cour illuminée aux bougies, les couleurs du souk aux épices et nos plats signature capturés dans chaque image.", "stats": { "photos": "120+ Photographies", "collections": "5 Collections", "awards": "Espaces Primés" }, "explore": "Explorer la Galerie" }, "featured": { "badge": "En Vedette", "main_alt": "Intérieur du riad en vedette", "cuisine_alt": "Cuisine marocaine", "zellij_alt": "Détails de mosaïque zellij" }, "filter": { "all": "Tout", "showing": "Affichage de {{visible}} sur {{total}} photos" }, "categories": { "cuisine": "Cuisine", "interiors": "Intérieurs", "zellij_details": "Zellij & Détails", "atmosphere": "Atmosphère", "events": "Événements" }, "load_more": "Charger Plus de Photos", "load_more.count": "{{visible}} SUR {{total}}", "instagram": { "handle": "@DARMEDINA_MA", "title_line1": "Suivez Notre", "title_line2": "Histoire Visuelle", "follow": "Suivre sur Instagram", "photo_alt": "Photo Instagram" } };
const reservations$1 = { "hero": { "badge": "Réservations", "title_line1": "Réservez Votre", "title_line2": "Table", "description": "Réservez votre place pour une expérience culinaire marocaine inoubliable au cœur de la médina ancienne de Marrakech." }, "info": { "hours": "Heures d'Ouverture", "hours_desc": "Déjeuner 12:00–15:00, Dîner 19:00–23:30", "large_parties": "Grands Groupes", "large_parties_desc": "Cour privée disponible pour les groupes de 10+", "dress_code": "Code Vestimentaire", "dress_code_desc": "Tenue décontractée élégante recommandée", "reservation_policy": "Politique de réservation", "reservation_policy_desc": "Annulation gratuite jusqu'à 24 h avant." }, "form": { "badge": "Réservation", "title_line1": "Réservez Votre", "title_line2": "Soirée", "guest_info": "Informations des Invités", "first_name": "Prénom", "first_name_placeholder": "Ahmed", "last_name": "Nom", "last_name_placeholder": "Benali", "email": "Adresse Email", "email_placeholder": "ahmed@example.com", "phone": "Numéro de Téléphone", "phone_placeholder": "+212 600 000 000", "party_size": "Nombre d'Invités", "party_size_desc": "Combien d'invités vont dîner?", "guest_one": "Invité", "guest_other": "Invités", "large_party_note": "Pour les groupes de 9+, veuillez appeler pour organiser des arrangements spéciaux", "date_time": "Date & Heure", "date": "Date", "time": "Heure", "notes": "Demandes Spéciales", "notes_placeholder": "Exigences alimentaires, célébrations, préférences de place...", "error": "Veuillez remplir correctement tous les champs obligatoires", "submit": "Confirmer la Réservation" }, "success": { "title": "Merci, {{name}}!", "description": "Votre réservation pour {{guests}} {{guests, plural, one {invité} other {invités}}} le {{date}} à {{time}} a été confirmée. Un email de confirmation a été envoyé à {{email}}.", "button": "Faire Une Autre Réservation" }, "summary": { "title": "Résumé de la Réservation", "date": "Date", "time": "Heure", "guests": "Invités", "meal": "Type de Repas", "lunch": "Service Déjeuner", "dinner": "Service Dîner", "cancellation_title": "Politique d'Annulation", "cancellation_desc": "Annulation gratuite jusqu'à 24 heures avant votre réservation. Des frais peuvent s'appliquer pour les annulations tardives.", "what_to_expect": "À Quoi S'Attendre", "expect_1": "Email de confirmation dans l'heure", "expect_2": "Boisson de bienvenue à l'arrivée", "expect_3": "Service personnalisé tout au long de votre soirée" }, "why": { "badge": "Pourquoi Nous Choisir", "title_line1": "Pourquoi Réserver au", "title_line2": "Dar Medina", "michelin": { "title": "Excellence Michelin", "desc": "Trois étoiles Michelin reconnaissant notre engagement envers l'excellence culinaire" }, "hospitality": { "title": "Hospitalité Chaleureuse", "desc": "Découvrez la chaleur marocaine authentique et un service personnalisé" }, "riad": { "title": "Riad Historique", "desc": "Dînez dans un riad centenaire avec une architecture traditionnelle époustouflante" }, "cuisine": { "title": "Cuisine Authentique", "desc": "Recettes traditionnelles transmises sur quatre générations" } }, "testimonials": { "badge": "Avis des Clients", "title": "Ce Que Disent Nos Clients", "items": { "1": { "quote": "Le processus de réservation était fluide, et à notre arrivée, tout était parfait — la table, les fleurs, l'accueil. Une soirée que nous n'oublierons jamais.", "author": "Sophie Laurent", "location": "Paris, France" }, "2": { "quote": "Nous avons célébré notre anniversaire ici et l'équipe a fait plus que le nécessaire. La terrasse sur le toit la nuit avec les lumières de la ville en dessous — absolument magique.", "author": "James Whitfield", "location": "Londres, Royaume-Uni" }, "3": { "quote": "La section de surprise spéciale était incroyablement réfléchie. Ils se souvenaient de chaque détail — les préférences végétariennes, la surprise d'anniversaire, tout si facilement.", "author": "Aisha Al-Rashid", "location": "Dubaï, Émirats" } } }, "help": { "badge": "Besoin d'Aide?", "title_line1": "Besoin d'Aide pour Votre", "title_line2": "Réservation?", "description": "Notre équipe est là pour vous aider à planifier l'expérience culinaire parfaite. Contactez-nous pour des arrangements spéciaux ou des questions.", "call": "Appelez-Nous", "email": "Envoyez-Nous un Email" } };
const contact$1 = { "hero": { "badge": "Nous contacter", "title_line1": "Retrouvez-nous à", "title_line2": "Marrakech", "description": "Visitez Dar Medina au cœur de l'ancienne médina. Nous sommes à votre disposition pour répondre à vos questions et vous accueillir.", "location": "Médina, Marrakech", "hours": "Ouvert tous les jours de 12h à 23h" }, "cards": { "address": { "title": "Notre adresse", "text": "123 Derb Sidi Ahmed, Médina, Marrakech 40000, Maroc" }, "phone": { "title": "Appelez-nous", "text": "+212 524 389 214", "link": "Appeler" }, "email": { "title": "Envoyez-nous un e-mail", "text": "hello@darmedina.ma", "link": "Envoyer un e-mail" }, "hours": { "title": "Horaires d'ouverture", "lunch": "Déjeuner : 12h00 – 15h00", "dinner": "Dîner : 19h00 – 23h30", "open_daily": "Ouvert tous les jours" } }, "map": { "badge": "Emplacement", "title": "Plan de localisation de Dar Medina", "google_maps": "Google Maps", "apple_maps": "Apple Plans", "copy_address": "Copier l'adresse" }, "form_section": { "badge": "Formulaire de contact", "title_line1": "Envoyez-nous", "title_line2": "un message", "visit_us": "Rendez-nous visite", "follow_us": "Suivez-nous" }, "form": { "tabs": { "general": "Demande générale", "private": "Repas privé" }, "success_title": "Message envoyé !", "success_desc": "Merci de nous avoir contactés. Nous vous répondrons sous 24 heures.", "first_name": "Prénom", "first_name_placeholder": "Ahmed", "last_name": "Nom", "last_name_placeholder": "Benali", "email": "Adresse e-mail", "email_placeholder": "ahmed@example.com", "phone": "Numéro de téléphone", "phone_placeholder": "+212 600 000 000", "subject": "Sujet", "select_subject": "Sélectionnez un sujet", "subjects": { "reservation": "Demande de réservation", "private": "Événement privé", "general": "Question générale", "feedback": "Avis" }, "message": "Votre message", "message_placeholder": "Expliquez-nous comment nous pouvons vous aider...", "privacy": "J'accepte la politique de confidentialité et consens à être contacté concernant ma demande.", "submit": "Envoyer le message" }, "cta": { "badge": "Prêt à nous rendre visite ?", "title_line1": "Prêt à vivre", "title_line2": "l'expérience Dar Medina ?", "description": "Réservez votre table dès aujourd'hui et découvrez les saveurs authentiques et l'hospitalité chaleureuse de la cuisine marocaine.", "reserve": "Réserver une table", "inquiry": "Envoyer une demande" } };
const footer$1 = { "description": "Cuisine marocaine authentique au cœur de la médina ancienne de Marrakech. Découvrez des siècles de tradition culinaire dans un cadre de riad époustouflant.", "navigation": { "title": "Navigation" }, "hours": { "title": "Heures d'Ouverture", "mon_thu": "Lundi — Jeudi", "mon_thu_time": "12h — 00h", "fri_sat": "Vendredi — Samedi", "fri_sat_time": "12h — 01h", "sunday": "Dimanche", "sunday_time": "13h — 23h", "open_now": "Ouvert Maintenant" }, "contact": { "title": "Contactez-nous", "address": "123 Derb Sidi Ahmed, Médina, Marrakech 40000, Maroc" }, "newsletter": { "title": "Restez Informé", "description": "Abonnez-vous pour recevoir des offres exclusives, des menus saisonniers et des invitations à des événements spéciaux.", "placeholder": "Entrez votre email", "button": "S'abonner", "success": "Merci de vous être abonné ! Vérifiez votre email pour confirmation." }, "copyright": "© {{year}} Dar Medina. Tous droits réservés.", "privacy": "Politique de Confidentialité", "terms": "Conditions d'Utilisation", "crafted": "Fabriqué avec ♥ à Marrakech" };
const fr = {
  nav: nav$1,
  home: home$1,
  menu: menu$1,
  about: about$1,
  gallery: gallery$1,
  reservations: reservations$1,
  contact: contact$1,
  footer: footer$1
};
const nav = { "home": "الرئيسية", "menu": "القائمة", "about": "من نحن", "gallery": "المعرض", "reservations": "الحجوزات", "contact": "اتصل بنا", "reserve": "احجز", "reserve_table": "احجز طاولة", "common": { "language": "اللغة", "theme": "المظهر" } };
const home = { "hero": { "image_alt": "ديكور مطعم دار المدينة", "title_line1": "رحلة عبر", "title_line2": "روح المغرب", "description": "طواجن مطبوخة ببطء، كسكس مصنوع يدويًا وضيافة مغربية دافئة في رياض عمره قرن من الزمان.", "cta_primary": "احجز طاولتك", "cta_secondary": "شاهد قائمتنا", "open_hours": "مفتوح يوميًا 12 ظهرًا – 11 مساءً", "location": "مدينة مراكش القديمة، المغرب", "phone": "+212 524 389 214" }, "story": { "label": "قصتنا", "title_line1": "وُلدت من قلب", "title_line2": "المدينة العتيقة" }, "chef": { "image_alt": "الطاهي يحضر المأكولات المغربية التقليدية", "years_label": "سنوات من التميز", "description": "لأكثر من عقدين، نقدم أطباقًا مغربية أصيلة متوارثة عبر الأجيال، باستخدام أفضل المكونات المحلية وطرق الطهي التقليدية.", "story_link": "اقرأ قصتنا الكاملة" }, "stats": { "dishes": "طبق", "rating": "تقييم الضيوف", "guests": "ضيف سعيد" }, "experience": { "label": "التجربة", "title_line1": "ادخل إلى عالمنا", "title_line2": "من الأناقة" }, "gallery": { "images": { "courtyard": "فناء مغربي تقليدي", "lanterns": "فوانيس مغربية زخرفية", "spices": "توابل مغربية طازجة" }, "captions": { "rooftop": "غروب على السطح", "live_music": "موسيقى حية", "live_music_alt": "موسيقيون يؤدون موسيقى تقليدية", "signature_dishes": "أطباق مميزة", "signature_dishes_alt": "أطباق مميزة مختارة" }, "see_gallery": "عرض المعرض الكامل" }, "featured": { "label": "تحف الطهي", "title_line1": "أطباقنا", "title_line2": "المميزة", "chefs_choice": "اختيار الشيف", "price_prefix": "", "price_suffix": " درهم", "view_menu": "عرض القائمة الكاملة" }, "testimonials": { "label": "تجارب الضيوف", "title_line1": "أصوات ضيوفنا", "title_line2": "الأعزاء", "items": { "1": { "quote": "أمسية لا تُنسى! الطاجين كان رائعًا والأجواء نقلتنا مباشرة إلى المغرب." }, "2": { "quote": "أفضل طعام مغربي تناولناه خارج المغرب. خدمة دافئة وإعداد جميل." }, "3": { "quote": "رحلة طهي عبر المغرب. كل طبق يروي قصة. نوصي به بشدة!" } } }, "reservations": { "label": "الحجوزات", "title_line1": "احجز أمسيتك", "title_line2": "المغربية", "private_dining_title": "طاولات خاصة", "private_dining_desc": "غرف حصرية متاحة", "live_music_title": "موسيقى قناوة حية", "live_music_desc": "جمعة وسبت مساءً" }, "cta": { "description": "انضم إلينا لأمسية لا تُنسى من المأكولات المغربية الأصيلة والموسيقى الحية والضيافة الدافئة في قلب المدينة العتيقة.", "image_alt": "ديكور المطعم الداخلي" }, "booking": { "form_title": "احجز طاولة", "first_name": "الاسم الأول", "last_name": "اسم العائلة", "email": "البريد الإلكتروني", "date": "التاريخ", "time": "الوقت", "guests": "عدد الضيوف", "guest_options": { "1": "ضيف واحد", "2": "ضيفان", "3": "3 ضيوف", "4": "4 ضيوف", "5": "5 ضيوف", "6_plus": "6+ ضيوف" }, "special_requests": "طلبات خاصة", "special_requests_placeholder": "متطلبات غذائية، مناسبات خاصة...", "confirm_button": "تأكيد الحجز" }, "footer": { "awards_label": "الجوائز والتقدير" } };
const menu = { "hero": { "badge": "المأكولات المغربية الأصيلة", "title_line1": "رحلتنا", "title_line2": "الطهوية", "description": "اكتشف قائمتنا المغربية الموسمية: طواجن، كسكس، مشويات، باستيلا، وشاي بالنعناع التقليدي — مطبوخ ببطء وطازج من السوق." }, "filter": { "all": "الكل" }, "categories": { "starters": "المقبلات", "tagines": "الطواجن", "couscous": "الكسكس", "grills": "المشويات", "pastilla": "الباستيلا", "seafood": "المأكولات البحرية", "desserts": "الحلويات", "drinks": "المشروبات" }, "subtitle": { "cold_warm": "بارد و ساخن", "starters": "المقبلات" }, "search": { "placeholder": "ابحث عن الأطباق..." }, "currency": "درهم", "item": { "popular": "شائع", "spicy": "حار", "vegetarian": "نباتي" }, "empty": 'لم يتم العثور على أطباق تطابق "{{query}}"' };
const about = { "hero": { "badge": "تراثنا", "title_line1": "قصتنا،", "title_line2": "تراثنا", "description": "رياض عمره قرن، وأربعة أجيال من وصفات مراكشية وفريق متفانٍ في طقوس الضيافة المغربية البطيئة." }, "stats": { "years": "سنوات من التميز", "michelin": "نجوم ميشلان", "guests": "ضيف سعيد", "dishes": "أطباق مميزة" }, "story": { "badge": "منذ 2009", "title_line1": "رياض غارق في", "title_line2": "قرون من التاريخ", "images": { "riad_alt": "داخل الرياض", "chef_alt": "الشيف في العمل" }, "p1": "يقع دار المدينة في قلب المدينة القديمة بمراكش، ويقف كشاهد على قرون من التقاليد الطهوية المغربية. تم ترميم رياضنا الذي يعود لأكثر من 100 عام بحب للحفاظ على طابعه الأصيل مع تقديم وسائل الراحة الحديثة.", "p2": "لأربعة أجيال، انتقلت الوصفات التي تزين طاولاتنا عبر خطوط العائلة، كل طبق يحمل حكمة وحب من سبقونا. نحن نحضر مكوناتنا من الأسواق المحلية، مما يضمن الطازج ويدعم مجتمعنا.", "p3": "كل وجبة في دار المدينة هي أكثر من مجرد تناول الطعام - إنها دعوة لتجربة دفء الضيافة المغربية، وفن الطهي التقليدي، والجمال الخالد لتراثنا.", "quote": "الطهي ليس مجرد إطعام الجسد، إنه يتعلق بتغذية الروح والحفاظ على ذاكرتنا الثقافية.", "quote_author": "الشيف حسن المنصوري" }, "philosophy": { "badge": "نهجنا", "title_line1": "فلسفتنا", "title_line2": "الطهوية", "description": "نؤمن بتكريم التقاليد مع احتضان الابتكار، وخلق أطباق تروي قصة التراث الطهوي الغني للمغرب." }, "principles": { "seasonal": { "title": "موسمي وطازج", "desc": "نحضر المكونات يوميًا من الأسواق المحلية، مما يضمن أقصى درجات الطازج ويدعم الزراعة المستدامة." }, "technique": { "title": "الطهي البطيء", "desc": "طرق تقليدية متوارثة عبر الأجيال، تسمح للنكهات بالتطور بشكل طبيعي مع مرور الوقت." }, "spice": { "title": "توابل حرفية", "desc": "خلطات توابل مختارة يدويًا من أسواق مراكش الشهيرة، تخلق طبقات معقدة من النكهة." }, "hospitality": { "title": "خدمة من القلب", "desc": "يتم معاملة كل ضيف كعضو في العائلة، مع ضيافة مغربية دافئة تجعلك تشعر بأنك في بيتك." } }, "chef": { "badge": "الشيف الرئيسي", "title_line1": "الشيف حسن", "title_line2": "المنصوري", "name_arabic": "الشيف حسن المنصوري", "image_alt": "الشيف حسن المنصوري", "title": "الشيف التنفيذي", "since": "منذ 2009", "p1": "وُلد في عائلة من الطهاة المراكشيين، تعلم الشيف حسن فن الطهي المغربي من مطبخ جدته. مع أكثر من 25 عامًا من الخبرة، أتقن التوازن الدقيق للتوابل والتقنيات التي تحدد الطهي المغربي الأصيل.", "p2": "تركز فلسفته على الحفاظ على الوصفات التقليدية مع إدخال ابتكارات دقيقة ترفع من تجربة تناول الطعام. تحت قيادته، حصل دار المدينة على اعتراف كواحد من أرقى المطاعم في المغرب.", "badges": { "years": "عقود من الخبرة", "michelin": "نجوم ميشلان", "top50": "أفضل 50 في العالم" } }, "team": { "badge": "فريقنا", "title_line1": "عائلة", "title_line2": "دار المدينة", "roles": { "executive_chef": "الشيف التنفيذي", "pastry": "شيف الحلويات", "sommelier": "خبير الشاي", "host": "رئيس الضيافة" } }, "awards": { "badge": "التقدير", "title_line1": "الجوائز و", "title_line2": "الأوسمة", "items": { "michelin": { "title": "3 نجوم ميشلان", "desc": "ثلاث سنوات متتالية من التميز الطهوي" }, "worlds_best": { "title": "أفضل 50 في العالم", "desc": "احتل المرتبة 27 في أفضل مطاعم العالم" }, "best_morocco": { "title": "أفضل المغرب", "desc": "الفائز في فئة المطبخ التقليدي" }, "green_star": { "title": "النجم الأخضر", "desc": "اعتراف بالطهي المستدام" } } }, "design": { "badge": "العمارة", "title_line1": "التصميم المغربي", "title_line2": "كفن حي", "description": "كل زاوية في دار المدينة تروي قصة من خلال الحرف المغربية التقليدية والجمال المعماري.", "elements": { "zellij": { "title": "فسيفساء الزليج", "desc": "أنماط هندسية معقدة صنعها حرفيون مهرة" }, "lighting": { "title": "إضاءة مصنوعة يدويًا", "desc": "فوانيس نحاسية تقليدية" }, "ceilings": { "title": "أسقف منحوتة", "desc": "حرفة خشب الأرز" }, "arches": { "title": "أقواس حدوة الحصان", "desc": "عمارة مغربية كلاسيكية" }, "plasterwork": { "title": "زخارف الجص العربية", "desc": "تصاميم زخرفية دقيقة" }, "ceramics": { "title": "خزف حرفي", "desc": "أواني مائدة مرسومة يدويًا من حرفيي فاس" } } }, "hospitality": { "badge": "التقاليد", "title_line1": "فن", "title_line2": "الضيافة المغربية", "description": "اختبر الدفء والكرم الذي حدد الثقافة المغربية لقرون.", "welcome": { "title": "ترحيب دافئ", "desc": "يتم الترحيب بكل ضيف بالضيافة المغربية التقليدية وشاي النعناع عند الوصول." }, "tea": { "title": "طقوس شاي النعناع", "desc": "فن تحضير وتقديم شاي النعناع المغربي، رمز للصداقة والترحيب." }, "service": { "title": "خدمة يقظة", "desc": "يتوقع موظفونا احتياجاتك بتقدير واهتمام حقيقي براحتك." }, "music": { "title": "موسيقى قناوة حية", "desc": "عروض موسيقى مغربية تقليدية كل جمعة وسبت مساءً." }, "ambiance": { "title": "أجواء ساحرة", "desc": "الساحات المضاءة بالشموع وأماكن تناول الطعام الحميمة تخلق أجواءً لا تُنسى." }, "private": { "title": "طاولات خاصة", "desc": "غرف حصرية متاحة للمناسبات الخاصة والتجمعات الحميمة." } }, "cta": { "badge": "انضم إلينا", "title_line1": "تعال وجرب", "title_line2": "دار المدينة", "description": "احجز طاولتك وانطلق في رحلة طهوية عبر قلب المغرب.", "reserve": "احجز طاولتك", "menu": "شاهد قائمتنا" } };
const gallery = { "hero": { "badge": "رحلة بصرية", "title_line1": "من خلال", "title_line2": "عدستنا", "description": "ادخل إلى دار المدينة — ديكورات الرياض لدينا، الفناء المضاء بالشموع، ألوان سوق التوابل وأطباقنا المميزة الملتقطة في كل إطار.", "stats": { "photos": "+120 صورة", "collections": "5 مجموعات", "awards": "مساحات حائزة على جوائز" }, "explore": "استكشف المعرض" }, "featured": { "badge": "مميز", "main_alt": "ديكور الرياض المميز", "cuisine_alt": "المطبخ المغربي", "zellij_alt": "تفاصيل فسيفساء الزليج" }, "filter": { "all": "الكل", "showing": "عرض {{visible}} من {{total}} صورة" }, "categories": { "cuisine": "المطبخ", "interiors": "الديكورات", "zellij_details": "الزليج والتفاصيل", "atmosphere": "الأجواء", "events": "الفعاليات" }, "load_more": "تحميل المزيد من الصور", "load_more.count": "{{visible}} من {{total}}", "instagram": { "handle": "@DARMEDINA_MA", "title_line1": "تابع", "title_line2": "قصتنا البصرية", "follow": "تابع على إنستغرام", "photo_alt": "صورة إنستغرام" } };
const reservations = { "hero": { "badge": "الحجوزات", "title_line1": "احجز", "title_line2": "طاولتك", "description": "احجز مكانك لتجربة طعام مغربية لا تُنسى في قلب المدينة القديمة بمراكش." }, "info": { "hours": "ساعات العمل", "hours_desc": "الغداء 12:00–15:00، العشاء 19:00–23:30", "large_parties": "المجموعات الكبيرة", "large_parties_desc": "فناء خاص متاح للمجموعات من 10+", "dress_code": "قواعد اللباس", "dress_code_desc": "يُوصى باللباس الرسمي غير الرسمي", "reservation_policy": "سياسة الحجز", "reservation_policy_desc": "إلغاء مجاني حتى 24 ساعة قبل الموعد." }, "form": { "badge": "الحجز", "title_line1": "احجز", "title_line2": "أمسيتك", "guest_info": "معلومات الضيف", "first_name": "الاسم الأول", "first_name_placeholder": "أحمد", "last_name": "اسم العائلة", "last_name_placeholder": "بنعلي", "email": "البريد الإلكتروني", "email_placeholder": "ahmed@example.com", "phone": "رقم الهاتف", "phone_placeholder": "+212 600 000 000", "party_size": "عدد الضيوف", "party_size_desc": "كم عدد الضيوف الذين سيتناولون الطعام؟", "guest_one": "ضيف", "guest_other": "ضيوف", "large_party_note": "للمجموعات من 9+، يرجى الاتصال لترتيب ترتيبات خاصة", "date_time": "التاريخ والوقت", "date": "التاريخ", "time": "الوقت", "notes": "طلبات خاصة", "notes_placeholder": "متطلبات غذائية، احتفالات، تفضيلات الجلوس...", "error": "يرجى ملء جميع الحقول المطلوبة بشكل صحيح", "submit": "تأكيد الحجز" }, "success": { "title": "شكرًا لك، {{name}}!", "description": "تم تأكيد حجزك لـ {{guests}} {{guests, plural, one {ضيف} other {ضيوف}}} في {{date}} الساعة {{time}}. تم إرسال بريد تأكيد إلى {{email}}.", "button": "قم بحجز آخر" }, "summary": { "title": "ملخص الحجز", "date": "التاريخ", "time": "الوقت", "guests": "الضيوف", "meal": "نوع الوجبة", "lunch": "خدمة الغداء", "dinner": "خدمة العشاء", "cancellation_title": "سياسة الإلغاء", "cancellation_desc": "إلغاء مجاني حتى 24 ساعة قبل حجزك. قد تفرض رسوم على الإلغاءات المتأخرة.", "what_to_expect": "ما يمكن توقعه", "expect_1": "بريد تأكيد خلال ساعة واحدة", "expect_2": "مشروب ترحيبي عند الوصول", "expect_3": "خدمة شخصية طوال أمسياتك" }, "why": { "badge": "لماذا تختارنا", "title_line1": "لماذا تحجز في", "title_line2": "دار المدينة", "michelin": { "title": "تميز ميشلان", "desc": "ثلاث نجوم ميشلان تعترف بالتزامنا بالتميز الطهوي" }, "hospitality": { "title": "ضيافة دافئة", "desc": "اختبر الدفء المغربي الأصيل والخدمات الشخصية" }, "riad": { "title": "رياض تاريخي", "desc": "تناول الطعام في رياض عمره قرن مع هندسة معمارية تقليدية مذهلة" }, "cuisine": { "title": "مطبخ أصيل", "desc": "وصفات تقليدية متوارثة عبر أربعة أجيال" } }, "testimonials": { "badge": "تقييمات الضيوف", "title": "ماذا يقول ضيوفنا", "items": { "1": { "quote": "كانت عملية الحجز سلسة، وعندما وصلنا، كان كل شيء مثاليًا — الطاولة، الزهور، الترحيب. أمسية لن ننساها أبدًا.", "author": "صوفي لوران", "location": "باريس، فرنسا" }, "2": { "quote": "احتفلنا بذكرى زواجنا هنا وذهب الفريق إلى أبعد من ذلك. الشرفة العلوية في الليل مع أضواء المدينة أدناه — ساحرة تمامًا.", "author": "جيمس ويتفيلد", "location": "لندن، المملكة المتحدة" }, "3": { "quote": "كان قسم المفاجآت الخاصة مدروسًا بشكل لا يصدق. لقد تذكروا كل التفاصيل — التفضيلات النباتية، مفاجأة عيد الميلاد، كل شيء بسلاسة.", "author": "عائشة الراشد", "location": "دبي، الإمارات" } } }, "help": { "badge": "تحتاج مساعدة؟", "title_line1": "تحتاج مساعدة في", "title_line2": "حجزك؟", "description": "فريقنا هنا لمساعدتك في تخطيط تجربة تناول طعام مثالية. اتصل بنا للترتيبات الخاصة أو الأسئلة.", "call": "اتصل بنا الآن", "email": "راسلنا" } };
const contact = { "hero": { "badge": "تواصل معنا", "title_line1": "اعثر علينا في", "title_line2": "مراكش", "description": "زر دار المدينة في قلب المدينة العتيقة. يسعدنا الإجابة عن استفساراتك واستقبالك.", "location": "المدينة العتيقة، مراكش", "hours": "مفتوح يوميًا من 12:00 إلى 23:00" }, "cards": { "address": { "title": "عنواننا", "text": "123 درب سيدي أحمد، المدينة العتيقة، مراكش 40000، المغرب" }, "phone": { "title": "اتصل بنا", "text": "+212 524 389 214", "link": "اتصل الآن" }, "email": { "title": "راسلنا", "text": "hello@darmedina.ma", "link": "إرسال بريد إلكتروني" }, "hours": { "title": "ساعات العمل", "lunch": "الغداء: 12:00 – 15:00", "dinner": "العشاء: 19:00 – 23:30", "open_daily": "مفتوح يوميًا" } }, "map": { "badge": "الموقع", "title": "خريطة موقع دار المدينة", "google_maps": "خرائط Google", "apple_maps": "خرائط Apple", "copy_address": "نسخ العنوان" }, "form_section": { "badge": "نموذج التواصل", "title_line1": "أرسل لنا", "title_line2": "رسالة", "visit_us": "زرنا", "follow_us": "تابعنا" }, "form": { "tabs": { "general": "استفسار عام", "private": "حجز خاص" }, "success_title": "تم إرسال الرسالة!", "success_desc": "شكرًا لتواصلك معنا. سنرد عليك خلال 24 ساعة.", "first_name": "الاسم الأول", "first_name_placeholder": "أحمد", "last_name": "اسم العائلة", "last_name_placeholder": "بن علي", "email": "البريد الإلكتروني", "email_placeholder": "ahmed@example.com", "phone": "رقم الهاتف", "phone_placeholder": "+212 600 000 000", "subject": "الموضوع", "select_subject": "اختر موضوعًا", "subjects": { "reservation": "استفسار عن الحجز", "private": "فعالية خاصة", "general": "سؤال عام", "feedback": "ملاحظات" }, "message": "رسالتك", "message_placeholder": "أخبرنا كيف يمكننا مساعدتك...", "privacy": "أوافق على سياسة الخصوصية وأوافق على التواصل معي بخصوص استفساري.", "submit": "إرسال الرسالة" }, "cta": { "badge": "هل أنت مستعد للزيارة؟", "title_line1": "هل أنت مستعد", "title_line2": "لتجربة دار المدينة؟", "description": "احجز طاولتك اليوم واستمتع بالنكهات المغربية الأصيلة وكرم الضيافة.", "reserve": "احجز طاولتك", "inquiry": "إرسال استفسار" } };
const footer = { "description": "مطبخ مغربي أصيل في قلب المدينة القديمة بمراكش. اختبر قرونًا من التقاليد الطهوية في إطار رياض مذهل.", "navigation": { "title": "التنقل" }, "hours": { "title": "ساعات العمل", "mon_thu": "الاثنين — الخميس", "mon_thu_time": "12 ظهرًا — 12 صباحًا", "fri_sat": "الجمعة — السبت", "fri_sat_time": "12 ظهرًا — 1 صباحًا", "sunday": "الأحد", "sunday_time": "1 ظهرًا — 11 مساءً", "open_now": "مفتوح الآن" }, "contact": { "title": "اتصل بنا", "address": "123 درب سيدي أحمد، المدينة القديمة، مراكش 40000، المغرب" }, "copyright": "© {{year}} دار المدينة. جميع الحقوق محفوظة.", "privacy": "سياسة الخصوصية", "terms": "شروط الخدمة" };
const ar = {
  nav,
  home,
  menu,
  about,
  gallery,
  reservations,
  contact,
  footer
};
const STORAGE_KEY = "i18nextLng";
const SUPPORTED_LANGUAGES = [
  "en",
  "fr",
  "ar"
];
function getInitialLanguage() {
  if (typeof window === "undefined") {
    return "fr";
  }
  try {
    const saved = localStorage.getItem(STORAGE_KEY);
    if (saved) {
      const language = saved.split("-")[0];
      if (SUPPORTED_LANGUAGES.includes(language)) {
        return language;
      }
    }
  } catch (error) {
    console.warn("Unable to access localStorage.", error);
  }
  return "fr";
}
instance.use(initReactI18next);
instance.init({
  resources: {
    en: { translation: en },
    fr: { translation: fr },
    ar: { translation: ar }
  },
  lng: getInitialLanguage(),
  fallbackLng: "en",
  supportedLngs: SUPPORTED_LANGUAGES,
  load: "languageOnly",
  interpolation: {
    escapeValue: false
  },
  react: {
    useSuspense: false
  }
});
instance.on("languageChanged", (language) => {
  if (typeof window === "undefined") return;
  try {
    localStorage.setItem(STORAGE_KEY, language);
  } catch (error) {
    console.warn("Unable to save language.", error);
  }
});
const appCss = "/assets/styles-47a1h11w.css";
function reportLovableError(error, context = {}) {
  if (typeof window === "undefined") return;
  window.__lovableEvents?.captureException?.(
    error,
    {
      source: "react_error_boundary",
      route: window.location.pathname,
      ...context
    },
    {
      mechanism: "react_error_boundary",
      handled: false,
      severity: "error"
    }
  );
}
const ThemeContext = reactExports.createContext({
  theme: "dark",
  toggle: () => {
  }
});
function ThemeProvider({ children }) {
  const getInitialTheme = () => {
    if (typeof window !== "undefined") {
      const stored = localStorage.getItem("theme");
      if (stored === "light" || stored === "dark") {
        return stored;
      }
    }
    return "dark";
  };
  const [theme, setTheme] = reactExports.useState(getInitialTheme);
  reactExports.useEffect(() => {
    const root = document.documentElement;
    if (theme === "dark") {
      root.classList.add("dark");
      root.dataset.theme = "dark";
    } else {
      root.classList.remove("dark");
      root.dataset.theme = "light";
    }
    try {
      localStorage.setItem("theme", theme);
    } catch (err) {
      console.warn("⚠️ localStorage write failed. Your ad-blocker or browser privacy settings may be blocking it.", err);
    }
  }, [theme]);
  const toggle = () => {
    setTheme((prev) => prev === "dark" ? "light" : "dark");
  };
  return /* @__PURE__ */ jsxRuntimeExports.jsx(ThemeContext.Provider, { value: { theme, toggle }, children });
}
const useTheme = () => reactExports.useContext(ThemeContext);
function cn(...inputs) {
  return twMerge(clsx(inputs));
}
const Switch = reactExports.forwardRef(({ className, dir = "ltr", ...props }, ref) => {
  const isRTL = dir === "rtl";
  return /* @__PURE__ */ jsxRuntimeExports.jsx(
    Switch$1,
    {
      ref,
      className: cn(
        "peer inline-flex h-5 w-9 shrink-0 cursor-pointer items-center rounded-full border-2 border-transparent shadow-sm transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background disabled:cursor-not-allowed disabled:opacity-50 data-[state=checked]:bg-primary data-[state=unchecked]:bg-input",
        className
      ),
      ...props,
      children: /* @__PURE__ */ jsxRuntimeExports.jsx(
        SwitchThumb,
        {
          className: cn(
            "pointer-events-none block h-4 w-4 rounded-full bg-background shadow-lg ring-0 transition-transform",
            isRTL ? "data-[state=checked]:-translate-x-4 data-[state=unchecked]:translate-x-0" : "data-[state=checked]:translate-x-4 data-[state=unchecked]:translate-x-0"
          )
        }
      )
    }
  );
});
Switch.displayName = Switch$1.displayName;
const NAV = [
  { to: "/", labelKey: "nav.home" },
  { to: "/about", labelKey: "nav.about" },
  { to: "/menu", labelKey: "nav.menu" },
  { to: "/reservations", labelKey: "nav.reservations" },
  { to: "/gallery", labelKey: "nav.gallery" },
  { to: "/contact", labelKey: "nav.contact" }
];
const LANGS = [
  { code: "en", label: "EN" },
  { code: "fr", label: "FR" },
  { code: "ar", label: "AR" }
];
function NavLink({ item, path, currentLang, t, isMobile = false }) {
  const active = item.to === "/" ? path === "/" : path.startsWith(item.to);
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(
    Link,
    {
      to: item.to,
      className: cn(
        "relative uppercase tracking-[0.2em] font-medium transition-colors duration-300",
        isMobile ? "py-2 w-full text-center" : "",
        currentLang === "ar" ? isMobile ? "text-xs" : "text-sm" : isMobile ? "text-[10px]" : "text-[11px]",
        active ? "text-gold" : "text-black/60 dark:text-white/60 hover:text-black dark:hover:text-white"
      ),
      children: [
        t(item.labelKey),
        !isMobile && active && /* @__PURE__ */ jsxRuntimeExports.jsx(
          motion.div,
          {
            layoutId: "nav-underline",
            className: "absolute -bottom-2 left-0 right-0 h-px bg-gold",
            transition: { type: "spring", stiffness: 380, damping: 30 }
          }
        )
      ]
    }
  );
}
function Navbar() {
  const [open, setOpen] = reactExports.useState(false);
  const [scrolled, setScrolled] = reactExports.useState(false);
  const navbarRef = reactExports.useRef(null);
  const { theme, toggle } = useTheme();
  const path = useRouterState({ select: (s) => s.location.pathname });
  const { t, i18n: i18n2 } = useTranslation();
  const currentLang = (i18n2.resolvedLanguage || i18n2.language || "en").split("-")[0];
  const changeLanguage = (lng) => {
    i18n2.changeLanguage(lng);
  };
  const isRTL = i18n2.dir() === "rtl";
  reactExports.useEffect(() => {
    setOpen(false);
    setScrolled(false);
  }, [path]);
  reactExports.useEffect(() => {
    const handleScroll = () => {
      const hero = document.querySelector(".hero-section");
      if (!hero) {
        setScrolled(window.scrollY > 50);
        return;
      }
      const heroBottom = hero.getBoundingClientRect().bottom;
      setScrolled(heroBottom <= 100);
    };
    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, [path]);
  reactExports.useEffect(() => {
    if (!open) return;
    const handleClickOutside = (event) => {
      if (navbarRef.current && !navbarRef.current.contains(event.target)) {
        setOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    document.addEventListener("touchstart", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
      document.removeEventListener("touchstart", handleClickOutside);
    };
  }, [open]);
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(
    "header",
    {
      className: cn(
        "fixed inset-x-0 top-0 z-50 transition-all duration-500",
        scrolled || open ? `
            mx-4 mt-4 rounded-2xl
            bg-white/95 dark:bg-neutral-950/85
            backdrop-blur-2xl
            shadow-[0_4px_12px_rgba(15,81,50,0.04),0_16px_48px_rgba(15,81,50,0.10),0_32px_80px_rgba(0,0,0,0.08)]
          ` : `
            bg-white/80 dark:bg-transparent
            backdrop-blur-md
          `
      ),
      ref: navbarRef,
      children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mx-auto flex h-14 sm:h-16 lg:h-20 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-12", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs(Link, { to: "/", className: "flex items-center gap-2 sm:gap-3", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex h-8 w-8 sm:h-10 sm:w-10 items-center justify-center rounded-full border border-gold/60 bg-gold/10", children: /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "font-display text-base sm:text-lg font-bold text-gold", children: "D" }) }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-col leading-none", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "font-display text-base sm:text-lg font-semibold text-black dark:text-white tracking-wide", children: "Dar Medina" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-[8px] sm:text-[9px] uppercase tracking-[0.3em] text-gold/80", children: "Marrakech" })
            ] })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("nav", { className: "hidden items-center gap-8 lg:flex", children: NAV.map((item) => /* @__PURE__ */ jsxRuntimeExports.jsx(
            NavLink,
            {
              item,
              path,
              currentLang,
              t
            },
            item.to
          )) }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "hidden items-center gap-6 lg:flex", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2 rounded-full border border-black/10 dark:border-white/10 bg-black/5 dark:bg-white/5 px-3 py-2 text-[11px] text-black dark:text-white shadow-sm", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(Sun, { className: cn("h-4 w-4", theme === "light" ? "text-gold" : "text-white/40") }),
              /* @__PURE__ */ jsxRuntimeExports.jsx(Switch, { dir: isRTL ? "rtl" : "ltr", checked: theme === "dark", onCheckedChange: toggle, "aria-label": "Toggle theme" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx(Moon, { className: cn("h-4 w-4", theme === "dark" ? "text-gold" : "text-white") })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex items-center gap-2", children: LANGS.map((l) => {
              const isActive = currentLang === l.code;
              return /* @__PURE__ */ jsxRuntimeExports.jsx(
                "button",
                {
                  onClick: () => changeLanguage(l.code),
                  className: cn(
                    "cursor-pointer text-[10px] uppercase tracking-wider font-medium transition-colors",
                    isActive ? "text-gold" : "text-black/40 dark:text-white/40 hover:text-black/70 dark:hover:text-white/70"
                  ),
                  children: l.label
                },
                l.code
              );
            }) }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              Link,
              {
                to: "/reservations",
                hash: "booking",
                className: "rounded-sm bg-gold px-6 py-2.5 text-[10px] uppercase tracking-[0.2em] font-semibold text-gold-foreground transition-all hover:bg-gold/90 hover:shadow-lg hover:shadow-gold/20",
                children: t("nav.reserve")
              }
            )
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            "button",
            {
              onClick: () => setOpen((o) => !o),
              className: "rounded-sm border border-black/10 dark:border-white/10 p-2 text-black dark:text-white lg:hidden",
              children: open ? /* @__PURE__ */ jsxRuntimeExports.jsx(X, { className: "h-5 w-5" }) : /* @__PURE__ */ jsxRuntimeExports.jsx(Menu, { className: "h-5 w-5" })
            }
          )
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(AnimatePresence, { children: open && /* @__PURE__ */ jsxRuntimeExports.jsx(
          motion.div,
          {
            initial: { opacity: 0, height: 0 },
            animate: { opacity: 1, height: "auto" },
            exit: { opacity: 0, height: 0 },
            transition: { duration: 0.2, ease: "easeInOut" },
            className: "lg:hidden overflow-hidden",
            children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-col px-4 pb-4 pt-1 gap-2", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("nav", { className: "flex flex-col items-center", children: NAV.map((item) => /* @__PURE__ */ jsxRuntimeExports.jsx(
                NavLink,
                {
                  item,
                  path,
                  currentLang,
                  t,
                  isMobile: true
                },
                item.to
              )) }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "h-px w-full bg-black/5 dark:bg-white/5 my-1" }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center justify-between gap-2", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-1.5 rounded-full border border-black/10 dark:border-white/10 bg-black/5 dark:bg-white/5 px-2.5 py-1.5", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx(Sun, { className: cn("h-3 w-3", theme === "light" ? "text-gold" : "text-white/40") }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx(Switch, { dir: isRTL ? "rtl" : "ltr", checked: theme === "dark", onCheckedChange: toggle, "aria-label": "Toggle theme" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx(Moon, { className: cn("h-3 w-3", theme === "dark" ? "text-gold" : "text-black/40") })
                ] }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex items-center gap-3", children: LANGS.map((l) => {
                  const isActive = currentLang === l.code;
                  return /* @__PURE__ */ jsxRuntimeExports.jsx(
                    "button",
                    {
                      onClick: () => changeLanguage(l.code),
                      className: cn(
                        "text-[9px] uppercase tracking-wider font-semibold transition-colors",
                        isActive ? "text-gold" : "text-black/40 dark:text-white/40"
                      ),
                      children: l.label
                    },
                    l.code
                  );
                }) })
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsx(
                Link,
                {
                  to: "/reservations",
                  className: "flex w-full items-center justify-center rounded-lg bg-gold px-4 py-2 text-[10px] font-semibold uppercase tracking-[0.2em] text-gold-foreground transition-all hover:bg-gold/90",
                  children: t("nav.reserve")
                }
              )
            ] })
          }
        ) })
      ]
    }
  );
}
function Footer() {
  const { t } = useTranslation();
  return /* @__PURE__ */ jsxRuntimeExports.jsx("footer", { className: "relative bg-surface border-t border-gold/10", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mx-auto max-w-7xl px-6 py-12 lg:px-8", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid gap-10 lg:grid-cols-12", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "lg:col-span-4 space-y-4", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-3", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex h-9 w-9 items-center justify-center rounded-full border border-gold/40 bg-gold/5", children: /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "font-display text-base font-bold text-gold", children: "D" }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "font-display text-lg font-semibold text-foreground leading-tight", children: "Dar Medina" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-[9px] uppercase tracking-[0.25em] text-gold/70", children: "Marrakech" })
          ] })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm leading-relaxed text-foreground/60 max-w-xs", children: t("footer.description") }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex gap-2.5 pt-1", children: [Instagram, Facebook, Twitter, Youtube].map((Icon, i) => /* @__PURE__ */ jsxRuntimeExports.jsx(
          "a",
          {
            href: "#",
            className: "flex h-8 w-8 items-center justify-center rounded-full border border-border text-foreground/50 transition-all hover:border-gold hover:text-gold hover:bg-gold/5",
            children: /* @__PURE__ */ jsxRuntimeExports.jsx(Icon, { className: "h-3.5 w-3.5" })
          },
          i
        )) })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "lg:col-span-3", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("h4", { className: "text-[10px] uppercase tracking-[0.2em] text-gold/80 mb-4 font-semibold", children: t("footer.navigation.title") }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("ul", { className: "grid grid-cols-2 gap-x-4 gap-y-2.5", children: [
          { to: "/", labelKey: "nav.home" },
          { to: "/menu", labelKey: "nav.menu" },
          { to: "/about", labelKey: "nav.about" },
          { to: "/reservations", labelKey: "nav.reservations" },
          { to: "/gallery", labelKey: "nav.gallery" },
          { to: "/contact", labelKey: "nav.contact" }
        ].map((item) => /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: /* @__PURE__ */ jsxRuntimeExports.jsx(
          Link,
          {
            to: item.to,
            className: "text-sm text-foreground/60 transition-colors hover:text-gold",
            children: t(item.labelKey)
          }
        ) }, item.to)) })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "lg:col-span-5 grid gap-8 sm:grid-cols-2", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("h4", { className: "text-[10px] uppercase tracking-[0.2em] text-gold/80 mb-4 font-semibold", children: t("footer.hours.title") }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("ul", { className: "space-y-2 text-sm", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("li", { className: "flex justify-between text-foreground/60", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: t("footer.hours.mon_thu") }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-foreground/80 text-xs", children: "12PM — 12AM" })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("li", { className: "flex justify-between text-foreground/60", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: t("footer.hours.fri_sat") }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-foreground/80 text-xs", children: "12PM — 1AM" })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("li", { className: "flex justify-between text-foreground/60", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: t("footer.hours.sunday") }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-foreground/80 text-xs", children: "1PM — 11PM" })
            ] })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-3 flex items-center gap-2 text-xs text-gold/80", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "h-1.5 w-1.5 rounded-full bg-green-500 animate-pulse" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: t("footer.hours.open_now") })
          ] })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("h4", { className: "text-[10px] uppercase tracking-[0.2em] text-gold/80 mb-4 font-semibold", children: t("footer.contact.title") }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("ul", { className: "space-y-3", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("li", { className: "flex items-start gap-2.5", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(MapPin, { className: "mt-0.5 h-4 w-4 shrink-0 text-gold/80" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-sm text-foreground/60 leading-snug", children: t("footer.contact.address") })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("li", { className: "flex items-center gap-2.5", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(Phone, { className: "h-4 w-4 shrink-0 text-gold/80" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("a", { href: "tel:+212524389214", className: "text-sm text-foreground/60 hover:text-gold transition-colors", children: "+212 524 389 214" })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("li", { className: "flex items-center gap-2.5", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(Mail, { className: "h-4 w-4 shrink-0 text-gold/80" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("a", { href: "mailto:hello@darmedina.ma", className: "text-sm text-foreground/60 hover:text-gold transition-colors", children: "hello@darmedina.ma" })
            ] })
          ] })
        ] })
      ] })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-12 pt-6 border-t border-border flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-foreground/40", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { children: t("footer.copyright", { year: (/* @__PURE__ */ new Date()).getFullYear() }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex gap-6", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("a", { href: "#", className: "hover:text-gold transition-colors", children: t("footer.privacy") }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("a", { href: "#", className: "hover:text-gold transition-colors", children: t("footer.terms") })
      ] })
    ] })
  ] }) });
}
function FloatingActions() {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "fixed bottom-5 right-5 z-40 flex flex-col items-end gap-3", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs(
      motion.a,
      {
        initial: { opacity: 0, scale: 0.6 },
        animate: { opacity: 1, scale: 1 },
        transition: { delay: 0.5, type: "spring" },
        href: "https://wa.me/212524389214",
        target: "_blank",
        rel: "noopener noreferrer",
        "aria-label": "Chat on WhatsApp",
        className: "group relative flex h-14 w-14 items-center justify-center rounded-full bg-[#25D366] text-white shadow-xl shadow-[#25D366]/30 transition-all duration-300 hover:scale-110 hover:shadow-[#25D366]/50",
        children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(FaWhatsapp, { className: "h-8 w-8" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "pointer-events-none absolute right-16 hidden whitespace-nowrap rounded-full bg-foreground px-3 py-1.5 text-xs text-background shadow-lg group-hover:block", children: "Chat with us" })
        ]
      }
    ),
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      motion.div,
      {
        initial: { opacity: 0, x: 40 },
        animate: { opacity: 1, x: 0 },
        transition: { delay: 0.7 },
        className: "sm:hidden",
        children: /* @__PURE__ */ jsxRuntimeExports.jsxs(
          Link,
          {
            to: "/reservations",
            className: "flex items-center gap-2 rounded-full bg-gold px-5 py-3 text-sm font-semibold text-gold-foreground shadow-xl shadow-gold/30 transition-transform hover:scale-105",
            children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(CalendarCheck, { className: "h-4 w-4" }),
              "Reserve"
            ]
          }
        )
      }
    )
  ] });
}
function NotFoundComponent() {
  return /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex min-h-screen items-center justify-center bg-background px-4", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "max-w-md text-center", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("h1", { className: "text-7xl font-bold text-foreground", children: "404" }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "mt-4 text-xl font-semibold text-foreground", children: "Page not found" }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-2 text-sm text-muted-foreground", children: "The page you're looking for doesn't exist or has been moved." }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-6", children: /* @__PURE__ */ jsxRuntimeExports.jsx(
      Link,
      {
        to: "/",
        className: "inline-flex items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground hover:bg-primary/90",
        children: "Go home"
      }
    ) })
  ] }) });
}
function ErrorComponent({
  error,
  reset
}) {
  const router2 = useRouter();
  reactExports.useEffect(() => {
    reportLovableError(error, {
      boundary: "tanstack_root_error_component"
    });
  }, [error]);
  return /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex min-h-screen items-center justify-center bg-background px-4", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "max-w-md text-center", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("h1", { className: "text-xl font-semibold text-foreground", children: "This page didn't load" }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-2 text-sm text-muted-foreground", children: "Something went wrong. Try again or go home." }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-6 flex justify-center gap-2", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(
        "button",
        {
          onClick: () => {
            router2.invalidate();
            reset();
          },
          className: "rounded-md bg-primary px-4 py-2 text-sm text-primary-foreground hover:bg-primary/90",
          children: "Try again"
        }
      ),
      /* @__PURE__ */ jsxRuntimeExports.jsx(
        "a",
        {
          href: "/",
          className: "rounded-md border px-4 py-2 text-sm hover:bg-accent",
          children: "Go home"
        }
      )
    ] })
  ] }) });
}
const Route$6 = createRootRouteWithContext()({
  head: () => ({
    meta: [
      { charSet: "utf-8" },
      {
        name: "viewport",
        content: "width=device-width, initial-scale=1"
      },
      {
        title: "Dar Medina — Authentic Moroccan Cuisine in Marrakech"
      }
    ],
    links: [{ rel: "stylesheet", href: appCss }]
  }),
  shellComponent: RootShell,
  component: RootComponent,
  notFoundComponent: NotFoundComponent,
  errorComponent: ErrorComponent
});
function RootShell({ children }) {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("html", { lang: "fr", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("head", { children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(HeadContent, {}),
      /* @__PURE__ */ jsxRuntimeExports.jsx("link", { rel: "preconnect", href: "https://fonts.googleapis.com" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(
        "link",
        {
          rel: "preconnect",
          href: "https://fonts.gstatic.com",
          crossOrigin: ""
        }
      ),
      /* @__PURE__ */ jsxRuntimeExports.jsx(
        "link",
        {
          href: "https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&family=Playfair+Display:wght@500;600;700&family=Cormorant+Garamond:wght@500;600;700&family=Cairo:wght@300;400;500;600;700&display=swap",
          rel: "stylesheet"
        }
      )
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("body", { children: [
      children,
      /* @__PURE__ */ jsxRuntimeExports.jsx(Scripts, {})
    ] })
  ] });
}
function RootComponent() {
  const { queryClient: queryClient2 } = Route$6.useRouteContext();
  const [isReady, setIsReady] = reactExports.useState(false);
  reactExports.useEffect(() => {
    const updateHtmlAttributes = (language) => {
      const lang = (language || "fr").split("-")[0];
      document.documentElement.lang = lang;
      document.documentElement.dir = lang === "ar" ? "rtl" : "ltr";
    };
    updateHtmlAttributes(instance.language);
    instance.on("languageChanged", updateHtmlAttributes);
    setIsReady(true);
    return () => {
      instance.off("languageChanged", updateHtmlAttributes);
    };
  }, []);
  if (!isReady) {
    return null;
  }
  return /* @__PURE__ */ jsxRuntimeExports.jsx(QueryClientProvider, { client: queryClient2, children: /* @__PURE__ */ jsxRuntimeExports.jsx(ThemeProvider, { children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex min-h-screen flex-col", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(Navbar, {}),
    /* @__PURE__ */ jsxRuntimeExports.jsx("main", { className: "flex-1", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Outlet, {}) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(Footer, {}),
    /* @__PURE__ */ jsxRuntimeExports.jsx(FloatingActions, {})
  ] }) }) });
}
const $$splitComponentImporter$5 = () => import("./reservations-BvRVx6id.mjs");
const Route$5 = createFileRoute("/reservations")({
  head: () => ({
    meta: [{
      title: "Reserve a Table — Dar Medina"
    }, {
      name: "description",
      content: "Reserve your table at Dar Medina, Marrakech. Lunch 12:00–15:00, dinner 19:00–23:30. Private courtyard for groups."
    }, {
      property: "og:title",
      content: "Reserve a Table — Dar Medina"
    }, {
      property: "og:description",
      content: "Book your evening at Dar Medina, Marrakech."
    }],
    links: [{
      rel: "canonical",
      href: "/reservations"
    }]
  }),
  component: lazyRouteComponent($$splitComponentImporter$5, "component")
});
const $$splitComponentImporter$4 = () => import("./menu-DKDjxavl.mjs");
const Route$4 = createFileRoute("/menu")({
  head: () => ({
    meta: [{
      title: "Menu — Dar Medina"
    }, {
      name: "description",
      content: "Discover our seasonal Moroccan menu: tagines, couscous, grills, pastilla, and traditional mint tea — slow-cooked and souk-fresh."
    }, {
      property: "og:title",
      content: "Menu — Dar Medina"
    }, {
      property: "og:description",
      content: "Tagines, couscous, grills and Moroccan classics — slow-cooked and souk-fresh."
    }],
    links: [{
      rel: "canonical",
      href: "/menu"
    }]
  }),
  component: lazyRouteComponent($$splitComponentImporter$4, "component")
});
const $$splitComponentImporter$3 = () => import("./gallery-6omDW4RB.mjs");
const Route$3 = createFileRoute("/gallery")({
  head: () => ({
    meta: [{
      title: "Gallery — Dar Medina"
    }, {
      name: "description",
      content: "Step inside Dar Medina — our riad interiors, candle-lit courtyard, spice-souk colours and signature dishes."
    }, {
      property: "og:title",
      content: "Gallery — Dar Medina"
    }, {
      property: "og:description",
      content: "Step inside our riad — interiors, courtyard, food and details."
    }],
    links: [{
      rel: "canonical",
      href: "/gallery"
    }]
  }),
  component: lazyRouteComponent($$splitComponentImporter$3, "component")
});
const $$splitComponentImporter$2 = () => import("./contact-DNx8rjQI.mjs");
const Route$2 = createFileRoute("/contact")({
  head: () => ({
    meta: [{
      title: "Contact — Dar Medina"
    }, {
      name: "description",
      content: "Find Dar Medina in the heart of the Marrakech medina. Call, write or send us a WhatsApp message."
    }, {
      property: "og:title",
      content: "Contact — Dar Medina"
    }, {
      property: "og:description",
      content: "Visit, call or message Dar Medina in Marrakech."
    }],
    links: [{
      rel: "canonical",
      href: "/contact"
    }]
  }),
  component: lazyRouteComponent($$splitComponentImporter$2, "component")
});
const $$splitComponentImporter$1 = () => import("./about-CTyZrYOE.mjs");
const Route$1 = createFileRoute("/about")({
  head: () => ({
    meta: [{
      title: "Our Story — Dar Medina"
    }, {
      name: "description",
      content: "A century-old riad, four generations of Marrakchi recipes and a team devoted to the slow rituals of Moroccan hospitality."
    }, {
      property: "og:title",
      content: "Our Story — Dar Medina"
    }, {
      property: "og:description",
      content: "A century-old riad, four generations of Marrakchi recipes and a team devoted to slow Moroccan hospitality."
    }],
    links: [{
      rel: "canonical",
      href: "/about"
    }]
  }),
  component: lazyRouteComponent($$splitComponentImporter$1, "component")
});
const $$splitComponentImporter = () => import("./index-Dh3L9yl8.mjs");
const Route = createFileRoute("/")({
  head: () => ({
    meta: [{
      title: "Dar Medina — Authentic Moroccan Cuisine in Marrakech"
    }, {
      name: "description",
      content: "Slow-cooked tagines, hand-rolled couscous and warm Moroccan hospitality inside a century-old riad. Reserve your table at Dar Medina."
    }, {
      property: "og:title",
      content: "Dar Medina — Authentic Moroccan Cuisine"
    }, {
      property: "og:description",
      content: "Slow-cooked tagines, hand-rolled couscous and warm Moroccan hospitality inside a century-old riad in Marrakech."
    }],
    links: [{
      rel: "canonical",
      href: "/"
    }]
  }),
  component: lazyRouteComponent($$splitComponentImporter, "component")
});
const ReservationsRoute = Route$5.update({
  id: "/reservations",
  path: "/reservations",
  getParentRoute: () => Route$6
});
const MenuRoute = Route$4.update({
  id: "/menu",
  path: "/menu",
  getParentRoute: () => Route$6
});
const GalleryRoute = Route$3.update({
  id: "/gallery",
  path: "/gallery",
  getParentRoute: () => Route$6
});
const ContactRoute = Route$2.update({
  id: "/contact",
  path: "/contact",
  getParentRoute: () => Route$6
});
const AboutRoute = Route$1.update({
  id: "/about",
  path: "/about",
  getParentRoute: () => Route$6
});
const IndexRoute = Route.update({
  id: "/",
  path: "/",
  getParentRoute: () => Route$6
});
const rootRouteChildren = {
  IndexRoute,
  AboutRoute,
  ContactRoute,
  GalleryRoute,
  MenuRoute,
  ReservationsRoute
};
const routeTree = Route$6._addFileChildren(rootRouteChildren)._addFileTypes();
const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: 1e3 * 60 * 5,
      // 5 minutes
      gcTime: 1e3 * 60 * 30,
      // 30 minutes
      retry: 1,
      refetchOnWindowFocus: false
    }
  }
});
const getRouter = () => {
  const router2 = createRouter({
    routeTree,
    context: { queryClient },
    scrollRestoration: true,
    defaultPreloadStaleTime: 0
  });
  return router2;
};
const router = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  getRouter
}, Symbol.toStringTag, { value: "Module" }));
export {
  cn as c,
  router as r
};
