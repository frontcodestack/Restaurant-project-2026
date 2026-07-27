import { z as zaalouk, t as tagine, c as couscous, g as grill, p as pastilla, a as tea } from "./dish-tea-BQIvIyxz.mjs";
const CATEGORIES = ["Starters", "Tagines", "Couscous", "Grills", "Desserts", "Drinks"];
const MENU = [
  { id: "zaalouk", name: "Zaalouk", description: "Smoky charred eggplant & tomato salad, cumin, fresh khobz bread.", price: 8, category: "Starters", image: zaalouk, popular: true },
  { id: "briouats", name: "Cheese Briouats", description: "Crisp filo triangles, goat cheese, orange-blossom honey.", price: 10, category: "Starters", image: zaalouk },
  { id: "harira", name: "Harira", description: "Slow-simmered lamb, lentil and tomato soup, fresh coriander.", price: 9, category: "Starters", image: zaalouk },
  { id: "lamb-tagine", name: "Lamb & Prune Tagine", description: "Slow-braised lamb shoulder, caramelized prunes, toasted almonds, saffron.", price: 26, category: "Tagines", image: tagine, popular: true },
  { id: "chicken-tagine", name: "Chicken Mqalli", description: "Free-range chicken, preserved lemon, violet olives, ginger broth.", price: 22, category: "Tagines", image: tagine },
  { id: "kefta-tagine", name: "Kefta M'kaouara", description: "Hand-rolled beef meatballs, tomato confit, two eggs cracked on top.", price: 20, category: "Tagines", image: tagine },
  { id: "seven-veg", name: "Couscous Seven Vegetables", description: "Friday's classic — feather-light semolina, garden vegetables, smen butter.", price: 21, category: "Couscous", image: couscous, popular: true },
  { id: "lamb-couscous", name: "Lamb Couscous", description: "Tender lamb shank, caramelised onions, raisins and chickpeas.", price: 25, category: "Couscous", image: couscous },
  { id: "mechoui", name: "Mechoui Lamb Shoulder", description: "Twelve-hour roasted shoulder, cumin salt, charred flatbread.", price: 32, category: "Grills", image: grill, popular: true },
  { id: "brochettes", name: "Mixed Brochettes", description: "Beef, lamb and merguez over olive-wood embers, harissa dip.", price: 24, category: "Grills", image: grill },
  { id: "pastilla", name: "Sweet Almond Pastilla", description: "Crisp warqa pastry, almond cream, cinnamon and orange blossom.", price: 11, category: "Desserts", image: pastilla, popular: true },
  { id: "msemen", name: "Honey Msemen", description: "Layered semolina pancake, wild thyme honey, fresh cream.", price: 9, category: "Desserts", image: pastilla },
  { id: "mint-tea", name: "Atay bi Naâna", description: "Gunpowder green tea, fresh spearmint, poured from on high.", price: 6, category: "Drinks", image: tea, popular: true },
  { id: "orange-juice", name: "Pressed Orange", description: "Souk-style fresh juice from Valencia oranges.", price: 5, category: "Drinks", image: tea },
  { id: "wine", name: "Domaine de Sahari", description: "Moroccan Gris de Boulaouane — light, mineral, perfect with tagine.", price: 12, category: "Drinks", image: tea }
];
export {
  CATEGORIES as C,
  MENU as M
};
