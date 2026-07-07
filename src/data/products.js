// All Products Data
const rawProducts = [
  // Cups & Glasses
  { id: 'plastic-tea-glass', name: 'Plastic Tea Glass', category: 'cups-glasses', cloudinaryId: 'bhavia/cat_cups_glasses', description: 'Durable plastic tea glasses ideal for offices, events, and daily use. Available in bulk.', tags: ['plastic', 'tea', 'glass', 'cup'] },
  { id: 'water-glass', name: 'Water Glass', category: 'cups-glasses', cloudinaryId: 'bhavia/cat_cups_glasses', description: 'Clear disposable water glasses, perfect for weddings, parties, and functions.', tags: ['water', 'glass', 'clear'] },
  { id: 'paper-glass', name: 'Paper Glass', category: 'cups-glasses', cloudinaryId: 'bhavia/cat_cups_glasses', description: 'Eco-friendly paper glasses for hot and cold beverages. Biodegradable option.', tags: ['paper', 'glass', 'eco'] },
  { id: 'plastic-glass', name: 'Plastic Glass', category: 'cups-glasses', cloudinaryId: 'bhavia/cat_cups_glasses', description: 'Standard plastic glasses available in various sizes for all purposes.', tags: ['plastic', 'glass'] },
  { id: 'hot-beverage-cups', name: 'Hot Beverage Cups', category: 'cups-glasses', cloudinaryId: 'bhavia/cat_cups_glasses', description: 'Insulated paper cups for coffee, tea, and hot drinks. Prevents heat transfer.', tags: ['hot', 'coffee', 'cup', 'paper'] },

  // Plates
  { id: 'paper-plates', name: 'Paper Plates', category: 'plates', cloudinaryId: 'bhavia/cat_plates', description: 'Sturdy paper plates for dry and semi-wet food. Available in 6", 8", and 12" sizes.', tags: ['paper', 'plate'] },
  { id: 'thermocol-plates', name: 'Thermocol Plates', category: 'plates', cloudinaryId: 'bhavia/cat_plates', description: 'Lightweight thermocol plates, heat-resistant, ideal for hot food serving.', tags: ['thermocol', 'plate', 'foam'] },
  { id: 'silver-plates', name: 'Silver Plates', category: 'plates', cloudinaryId: 'bhavia/cat_plates', description: 'Premium silver foil plates with an elegant look. Perfect for weddings and celebrations.', tags: ['silver', 'foil', 'plate', 'premium'] },
  { id: 'areca-plates', name: 'Areca Plates', category: 'plates', cloudinaryId: 'bhavia/cat_plates', description: 'Natural areca palm leaf plates, 100% biodegradable and eco-friendly.', tags: ['areca', 'eco', 'natural', 'plate'] },
  { id: 'plastic-plates', name: 'Plastic Plates', category: 'plates', cloudinaryId: 'bhavia/cat_plates', description: 'Reusable and disposable plastic plates in various sizes. Bulk orders available.', tags: ['plastic', 'plate'] },

  // Food Packaging
  { id: 'thermocol-containers', name: 'Thermocol Containers', category: 'food-packaging', cloudinaryId: 'bhavia/cat_food_packaging', description: 'Insulated thermocol food containers to keep food warm. Available in multiple sizes.', tags: ['thermocol', 'container', 'food'] },
  { id: 'food-containers', name: 'Food Containers', category: 'food-packaging', cloudinaryId: 'bhavia/cat_food_packaging', description: 'General-purpose disposable food containers for restaurants and caterers.', tags: ['food', 'container'] },
  { id: 'plastic-containers', name: 'Plastic Containers', category: 'food-packaging', cloudinaryId: 'bhavia/cat_food_packaging', description: 'Airtight plastic containers for food storage and packaging. Multiple sizes available.', tags: ['plastic', 'container', 'airtight'] },
  { id: 'paper-containers', name: 'Paper Containers', category: 'food-packaging', cloudinaryId: 'bhavia/cat_food_packaging', description: 'Eco-friendly paper containers for food delivery and takeaway packaging.', tags: ['paper', 'container', 'eco'] },
  { id: 'lunch-boxes', name: 'Lunch Boxes', category: 'food-packaging', cloudinaryId: 'bhavia/cat_food_packaging', description: 'Disposable lunch boxes with secure lids for office meals and tiffin services.', tags: ['lunch', 'box', 'tiffin'] },
  { id: 'silver-containers', name: 'Silver Containers', category: 'food-packaging', cloudinaryId: 'bhavia/cat_food_packaging', description: 'Premium silver foil containers for catering. Ideal for wedding buffets and events.', tags: ['silver', 'foil', 'container', 'catering'] },

  // Paper Products
  { id: 'paper-napkins', name: 'Paper Napkins', category: 'paper-products', cloudinaryId: 'bhavia/cat_paper_products', description: 'Soft and absorbent paper napkins. Available in single-ply and two-ply. Bulk packs.', tags: ['paper', 'napkin', 'tissue'] },
  { id: 'kitchen-tissue', name: 'Kitchen Tissue', category: 'paper-products', cloudinaryId: 'bhavia/cat_paper_products', description: 'Strong multi-purpose kitchen tissue rolls for cleaning and food prep.', tags: ['kitchen', 'tissue', 'roll'] },
  { id: 'butter-paper', name: 'Butter Paper', category: 'paper-products', cloudinaryId: 'bhavia/cat_paper_products', description: 'Food-grade butter paper for baking, cooking, and food wrapping.', tags: ['butter', 'paper', 'baking'] },
  { id: 'foil-paper', name: 'Silver Foil Paper', category: 'paper-products', cloudinaryId: 'bhavia/cat_paper_products', description: 'Aluminium foil paper rolls for food wrapping, baking, and storage.', tags: ['foil', 'silver', 'aluminium'] },
  { id: 'paper-roll', name: 'Table Roll', category: 'paper-products', cloudinaryId: 'bhavia/cat_paper_products', description: 'Wide paper table rolls for restaurants and catering. Hygienic and disposable.', tags: ['table', 'roll', 'paper'] },
  { id: 'paper-bags', name: 'Paper Bags', category: 'paper-products', cloudinaryId: 'bhavia/cat_paper_products', description: 'Eco-friendly paper bags for retail and gift packaging. Custom sizes available.', tags: ['paper', 'bag', 'eco'] },

  // Cutlery
  { id: 'plastic-spoon', name: 'Plastic Spoons', category: 'cutlery', cloudinaryId: 'bhavia/cat_cutlery', description: 'Disposable plastic spoons for all events and restaurants. Available in bulk packs.', tags: ['spoon', 'plastic', 'cutlery'] },
  { id: 'fork', name: 'Plastic Forks', category: 'cutlery', cloudinaryId: 'bhavia/cat_cutlery', description: 'Sturdy disposable plastic forks. Ideal for catering and food service.', tags: ['fork', 'plastic', 'cutlery'] },
  { id: 'knife', name: 'Plastic Knives', category: 'cutlery', cloudinaryId: 'bhavia/cat_cutlery', description: 'Disposable plastic knives for food cutting at events and parties.', tags: ['knife', 'plastic', 'cutlery'] },
  { id: 'stirrers', name: 'Stirrers / Straws', category: 'cutlery', cloudinaryId: 'bhavia/cat_cutlery', description: 'Disposable stirrers and straws for beverages. Paper and plastic options available.', tags: ['stirrer', 'straw', 'plastic'] },
  { id: 'disposable-bowls', name: 'Disposable Bowls', category: 'cutlery', cloudinaryId: 'bhavia/cat_cutlery', description: 'Thermocol and plastic bowls for soups, desserts, and snacks.', tags: ['bowl', 'disposable', 'thermocol'] },

  // Packaging Materials
  { id: 'stretch-film', name: 'Stretch Film', category: 'packaging-materials', cloudinaryId: 'bhavia/cat_packaging_materials', description: 'Industrial stretch film rolls for pallet wrapping and secure packaging.', tags: ['stretch', 'film', 'wrap', 'industrial'] },
  { id: 'plastic-rolls', name: 'Plastic Rolls', category: 'packaging-materials', cloudinaryId: 'bhavia/cat_packaging_materials', description: 'Transparent plastic rolls for packaging and wrapping various products.', tags: ['plastic', 'roll', 'wrap'] },
  { id: 'tapes', name: 'Packing Tapes', category: 'packaging-materials', cloudinaryId: 'bhavia/cat_packaging_materials', description: 'Strong adhesive packing tapes for boxes and parcels. Various widths available.', tags: ['tape', 'packing', 'adhesive'] },
  { id: 'wrapping-materials', name: 'Wrapping Materials', category: 'packaging-materials', cloudinaryId: 'bhavia/cat_packaging_materials', description: 'Complete wrapping solutions for gifts, products, and food items.', tags: ['wrap', 'packaging', 'material'] },
  { id: 'carry-bags', name: 'Carry Bags (50 Micron)', category: 'packaging-materials', cloudinaryId: 'bhavia/cat_packaging_materials', description: '50-micron carry bags as per government standards. Available in multiple sizes.', tags: ['carry', 'bag', '50 micron', 'grocery'] },
  { id: 'packaging-rolls', name: 'Packaging Rolls', category: 'packaging-materials', cloudinaryId: 'bhavia/cat_packaging_materials', description: 'Multi-purpose packaging rolls for shops, markets, and businesses.', tags: ['packaging', 'roll'] },

  // Cleaning Supplies
  { id: 'garbage-bags', name: 'Garbage Bags', category: 'cleaning-supplies', cloudinaryId: 'bhavia/cat_cleaning', description: 'Heavy-duty garbage bags in black and colored options. Available in all sizes.', tags: ['garbage', 'bag', 'waste', 'dustbin'] },
  { id: 'cleaning-cloth', name: 'Cleaning Cloth', category: 'cleaning-supplies', cloudinaryId: 'bhavia/cat_cleaning', description: 'Microfiber and cotton cleaning cloths for surfaces, floors, and utensils.', tags: ['cleaning', 'cloth', 'wipe'] },
  { id: 'kitchen-duster', name: 'Kitchen Duster', category: 'cleaning-supplies', cloudinaryId: 'bhavia/cat_cleaning', description: 'Absorbent kitchen dusters for daily kitchen cleaning needs.', tags: ['kitchen', 'duster', 'cloth'] },
  { id: 'steel-scrubber', name: 'Steel Scrubber', category: 'cleaning-supplies', cloudinaryId: 'bhavia/cat_cleaning', description: 'Stainless steel scrubbers for tough cleaning tasks. Long-lasting durability.', tags: ['steel', 'scrubber', 'utensil'] },
  { id: 'room-freshener', name: 'Room Freshener', category: 'cleaning-supplies', cloudinaryId: 'bhavia/cat_cleaning', description: 'Fragrant room fresheners for homes, offices, and commercial spaces.', tags: ['room', 'freshener', 'fragrance', 'spray'] },
  { id: 'phenyl', name: 'Phenyl', category: 'cleaning-supplies', cloudinaryId: 'bhavia/cat_cleaning', description: 'Floor cleaning phenyl in various fragrances. Effective disinfectant.', tags: ['phenyl', 'floor', 'cleaner', 'disinfectant'] },

  // Household
  { id: 'candles', name: 'Candles', category: 'household', cloudinaryId: 'bhavia/cat_household', description: 'Quality candles in various sizes. Ideal for everyday use and occasions.', tags: ['candle', 'wax', 'light'] },
  { id: 'buckets', name: 'Plastic Buckets', category: 'household', cloudinaryId: 'bhavia/cat_household', description: 'Durable plastic buckets in multiple sizes for household and industrial use.', tags: ['bucket', 'plastic', 'storage'] },
  { id: 'storage-containers', name: 'Storage Containers', category: 'household', cloudinaryId: 'bhavia/cat_household', description: 'Airtight storage containers for kitchen and pantry organization.', tags: ['storage', 'container', 'airtight', 'kitchen'] },
  { id: 'plastic-bowls', name: 'Plastic Bowls', category: 'household', cloudinaryId: 'bhavia/cat_household', description: 'Versatile plastic bowls for kitchen use. Stackable and durable.', tags: ['plastic', 'bowl', 'kitchen'] },
  { id: 'ropes', name: 'Rope Bundles', category: 'household', cloudinaryId: 'bhavia/cat_household', description: 'Strong nylon and plastic rope bundles for multiple household uses.', tags: ['rope', 'bundle', 'nylon'] },
  { id: 'mops', name: 'Mops', category: 'household', cloudinaryId: 'bhavia/cat_household', description: 'Efficient floor mops for home and commercial cleaning.', tags: ['mop', 'floor', 'cleaning'] },

  // Festival
  { id: 'modak-boxes', name: 'Modak Boxes', category: 'festival', cloudinaryId: 'bhavia/cat_festival', description: 'Special Ganesh Chaturthi modak packaging boxes. Available in custom sizes.', tags: ['modak', 'box', 'ganesh', 'festival'] },
  { id: 'disposable-serving-items', name: 'Disposable Serving Items', category: 'festival', cloudinaryId: 'bhavia/cat_festival', description: 'Complete disposable serving sets for festival functions and large gatherings.', tags: ['serving', 'festival', 'disposable', 'event'] },
  { id: 'festival-packaging', name: 'Festival Packaging', category: 'festival', cloudinaryId: 'bhavia/cat_festival', description: 'Decorative packaging for festival sweets, gifts, and dry fruits.', tags: ['festival', 'packaging', 'sweet', 'gift'] },
  { id: 'gift-packaging', name: 'Gift Packaging', category: 'festival', cloudinaryId: 'bhavia/cat_festival', description: 'Beautiful gift boxes and wrapping materials for all occasions.', tags: ['gift', 'packaging', 'box', 'wrap'] },

  // New slider products
  { id: 'ortho-mattress', name: 'Orthopedic Mattress', category: 'household', cloudinaryId: 'bhavia/cat_household', description: 'Premium orthopedic mattress for maximum comfort and back support.', tags: ['mattress', 'bed', 'sleep', 'comfort', 'orthopedic'] },
  { id: 'mineral-water', name: 'Mineral Water Bottle Pack', category: 'household', cloudinaryId: 'bhavia/cat_household', description: 'Clean and safe packaged mineral water bottle crates for functions and events.', tags: ['water', 'mineral', 'drink', 'bottle'] },
  { id: 'floor-mat', name: 'Heavy Duty Floor Mat', category: 'household', cloudinaryId: 'bhavia/cat_household', description: 'Non-slip textured floor mats for heavy foot traffic areas, hotels, and halls.', tags: ['floor', 'mat', 'mats', 'anti-slip'] },
  { id: 'door-mat', name: 'Coir Welcome Door Mat', category: 'household', cloudinaryId: 'bhavia/cat_household', description: 'Eco-friendly natural coir door mats with clean welcome designs.', tags: ['door', 'mat', 'mats', 'welcome', 'coir'] },
  { id: 'garden-pots', name: 'Plastic Garden Pots', category: 'household', cloudinaryId: 'bhavia/cat_household', description: 'Durable and lightweight plastic plant pots for garden and indoor nurseries.', tags: ['pots', 'pot', 'plant', 'garden', 'nursery'] },
  { id: 'step-ladder', name: 'Aluminum Step Ladder', category: 'packaging-materials', cloudinaryId: 'bhavia/cat_packaging_materials', description: 'Heavy-duty folding aluminum step ladders for warehouse and store usage.', tags: ['ladder', 'step', 'aluminum', 'foldable'] },
  { id: 'fire-extinguisher', name: 'Safety Fire Extinguisher', category: 'cleaning-supplies', cloudinaryId: 'bhavia/cat_cleaning', description: 'Industrial and residential fire extinguishers and safety setups.', tags: ['fire', 'equipment', 'safety', 'extinguisher'] },
];

export const products = rawProducts.map((p) => ({
  ...p,
  cloudinaryId: `bhavia/products/${p.id}`,
}));

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
