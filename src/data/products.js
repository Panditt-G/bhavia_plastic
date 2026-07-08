// All Products Data
const rawProducts = [
  // Cups & Glasses
  { id: 'plastic-tea-glass', name: 'Plastic Tea Glass', category: 'cups-glasses', emoji: '🍵', image: 'https://res.cloudinary.com/dwzz3cxt1/image/upload/f_auto,q_auto/bhavia/images/products/plastic-tea-glass.png', description: 'Plastic tea glass for daily use.', tags: ['plastic', 'tea', 'glass'] },
  { id: 'water-glass', name: 'Glass of Water', category: 'cups-glasses', emoji: '🥛', image: 'https://res.cloudinary.com/dwzz3cxt1/image/upload/f_auto,q_auto/bhavia/images/products/water-glass.png', description: 'Glass of water.', tags: ['water', 'glass'] },
  { id: 'paper-glass', name: 'Paper Glass', category: 'cups-glasses', emoji: '🥤', image: 'https://res.cloudinary.com/dwzz3cxt1/image/upload/f_auto,q_auto/bhavia/images/products/gen_paper_glass.png', description: 'Eco-friendly paper glass.', tags: ['paper', 'glass'] },

  // Food Packaging
  { id: 'letterpress-silver', name: 'Letterpress (Silver)', category: 'food-packaging', emoji: '🍱', image: 'https://res.cloudinary.com/dwzz3cxt1/image/upload/f_auto,q_auto/bhavia/images/products/gen_letterpress_silver.png', description: 'Silver letterpress for food packaging.', tags: ['silver', 'letterpress'] },
  { id: 'thermocol-drone', name: 'Thermocol Drone', category: 'food-packaging', emoji: '🥣', image: 'https://res.cloudinary.com/dwzz3cxt1/image/upload/f_auto,q_auto/bhavia/images/products/gen_thermocol_drone.png', description: 'Thermocol drone / bowls.', tags: ['thermocol', 'drone'] },
  { id: 'thermocol', name: 'Thermocol', category: 'food-packaging', emoji: '📦', image: 'https://res.cloudinary.com/dwzz3cxt1/image/upload/f_auto,q_auto/bhavia/images/products/thermocol-plates.png', description: 'Thermocol containers.', tags: ['thermocol'] },
  { id: 'silver-container', name: 'Silver Container', category: 'food-packaging', emoji: '🥡', image: 'https://res.cloudinary.com/dwzz3cxt1/image/upload/f_auto,q_auto/bhavia/images/products/gen_silver_container.png', description: 'Silver container for food.', tags: ['silver', 'container'] },
  { id: 'paper-trough', name: 'Paper Trough', category: 'food-packaging', emoji: '🍛', image: 'https://res.cloudinary.com/dwzz3cxt1/image/upload/f_auto,q_auto/bhavia/images/products/paper-containers.png', description: 'Paper trough.', tags: ['paper', 'trough'] },
  
  // Plates
  { id: 'breakfast-dish', name: 'Breakfast Dish', category: 'plates', emoji: '🍽️', image: 'https://res.cloudinary.com/dwzz3cxt1/image/upload/f_auto,q_auto/bhavia/images/products/gen_breakfast_dish.png', description: 'Breakfast dish plate.', tags: ['breakfast', 'dish', 'plate'] },

  // Household
  { id: 'candlestick', name: 'Candlestick', category: 'household', emoji: '🕯️', image: 'https://res.cloudinary.com/dwzz3cxt1/image/upload/f_auto,q_auto/bhavia/images/products/gen_candlestick.png', description: 'Candlestick.', tags: ['candlestick', 'candle'] },
  { id: 'bundle-of-cords', name: 'A Bundle of Cords', category: 'household', emoji: '🪢', image: 'https://res.cloudinary.com/dwzz3cxt1/image/upload/f_auto,q_auto/bhavia/images/products/gen_cords.png', description: 'A bundle of cords / rope.', tags: ['cord', 'bundle', 'rope'] },
  { id: 'plastic-bowl', name: 'Plastic Bowl', category: 'household', emoji: '🥣', image: 'https://res.cloudinary.com/dwzz3cxt1/image/upload/f_auto,q_auto/bhavia/images/products/gen_plastic_bowl.png', description: 'Plastic bowl.', tags: ['plastic', 'bowl'] },

  // Paper Products
  { id: 'table-roll', name: 'Table Roll', category: 'paper-products', emoji: '📜', image: 'https://res.cloudinary.com/dwzz3cxt1/image/upload/f_auto,q_auto/bhavia/images/products/paper-roll.png', description: 'Table roll.', tags: ['table', 'roll', 'paper'] },
  { id: 'silver-foil-paper', name: 'Silver Foil Paper', category: 'paper-products', emoji: '💿', image: 'https://res.cloudinary.com/dwzz3cxt1/image/upload/f_auto,q_auto/bhavia/images/products/foil-paper.png', description: 'Silver foil paper.', tags: ['silver', 'foil', 'paper'] },
  { id: 'paper-napkins', name: 'Paper Napkins', category: 'paper-products', emoji: '🧻', image: 'https://res.cloudinary.com/dwzz3cxt1/image/upload/f_auto,q_auto/bhavia/images/products/paper-napkins.png', description: 'Paper napkins.', tags: ['paper', 'napkins', 'tissue'] },

  // Packaging Materials
  { id: '50-micro-carry-bags', name: '50 Micro Carry Bags', category: 'packaging-materials', emoji: '🛍️', image: 'https://res.cloudinary.com/dwzz3cxt1/image/upload/f_auto,q_auto/bhavia/images/products/carry-bags.png', description: '50 micro carry bags.', tags: ['carry', 'bag', '50 micro'] },
  { id: 'grocery-bag', name: 'Grocery Bag', category: 'packaging-materials', emoji: '🛍️', image: 'https://res.cloudinary.com/dwzz3cxt1/image/upload/f_auto,q_auto/bhavia/images/products/paper-bags.png', description: 'Grocery bag.', tags: ['grocery', 'bag'] },

  // Cutlery
  { id: 'toothpick', name: 'Toothpick', category: 'cutlery', emoji: '🥢', image: 'https://res.cloudinary.com/dwzz3cxt1/image/upload/f_auto,q_auto/bhavia/images/products/gen_toothpick.png', description: 'Toothpick.', tags: ['toothpick'] },
  { id: 'plastic-spoon', name: 'Plastic Spoon', category: 'cutlery', emoji: '🥄', image: 'https://res.cloudinary.com/dwzz3cxt1/image/upload/f_auto,q_auto/bhavia/images/products/gen_plastic_spoon.png', description: 'Plastic spoon.', tags: ['plastic', 'spoon'] },
  { id: 'straw', name: 'Straw', category: 'cutlery', emoji: '🥤', image: 'https://res.cloudinary.com/dwzz3cxt1/image/upload/f_auto,q_auto/bhavia/images/products/gen_straw.png', description: 'Straw.', tags: ['straw'] },

  // Cleaning Supplies
  { id: 'kitchen-duster', name: 'Kitchen Duster', category: 'cleaning-supplies', emoji: '🧽', image: 'https://res.cloudinary.com/dwzz3cxt1/image/upload/f_auto,q_auto/bhavia/images/products/duster.png', description: 'Kitchen duster.', tags: ['kitchen', 'duster'] },
  { id: 'steel-grate', name: 'Steel Grate', category: 'cleaning-supplies', emoji: '🧼', image: 'https://res.cloudinary.com/dwzz3cxt1/image/upload/f_auto,q_auto/bhavia/images/products/steel-scrubber.png', description: 'Steel grate.', tags: ['steel', 'grate'] },
  { id: 'room-freshener', name: 'Room Freshener', category: 'cleaning-supplies', emoji: '💨', image: 'https://res.cloudinary.com/dwzz3cxt1/image/upload/f_auto,q_auto/bhavia/images/products/gen_room_freshener.png', description: 'Room freshener.', tags: ['room', 'freshener'] },
  { id: 'garbage-bag', name: 'Garbage Bag', category: 'cleaning-supplies', emoji: '🗑️', image: 'https://res.cloudinary.com/dwzz3cxt1/image/upload/f_auto,q_auto/bhavia/images/products/garbage-bags.png', description: 'Garbage bag.', tags: ['garbage', 'bag'] },
];

export const products = rawProducts;

export const getProductsByCategory = (categoryId) =>
  products.filter((p) => p.category === categoryId);

export const searchProducts = (query) => {
  const q = query.toLowerCase();
  return products.filter(
    (p) =>
      p.name.toLowerCase().includes(q) ||
      p.description.toLowerCase().includes(q) ||
      p.tags.some((t) => t.includes(q))
  );
};
