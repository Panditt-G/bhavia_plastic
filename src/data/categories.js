// Product Categories Data
export const categories = [
  {
    id: 'cups-glasses',
    name: 'Disposable Cups & Glasses',
    emoji: '🥤',
    image: 'https://res.cloudinary.com/dwzz3cxt1/image/upload/f_auto,q_auto/bhavia/images/products/plastic-tea-glass.png',
    description: 'Wide range of disposable cups and glasses.',
    productCount: 3,
    products: ['plastic-tea-glass', 'water-glass', 'paper-glass'],
  },
  {
    id: 'plates',
    name: 'Disposable Plates',
    emoji: '🍽️',
    image: 'https://res.cloudinary.com/dwzz3cxt1/image/upload/f_auto,q_auto/bhavia/images/products/gen_breakfast_dish.png',
    description: 'Quality disposable plates.',
    productCount: 1,
    products: ['breakfast-dish'],
  },
  {
    id: 'food-packaging',
    name: 'Food Packaging',
    emoji: '🥡',
    image: 'https://res.cloudinary.com/dwzz3cxt1/image/upload/f_auto,q_auto/bhavia/images/products/paper-containers.png',
    description: 'Complete food packaging solutions.',
    productCount: 5,
    products: ['letterpress-silver', 'thermocol-drone', 'thermocol', 'silver-container', 'paper-trough'],
  },
  {
    id: 'paper-products',
    name: 'Paper Products',
    emoji: '🧻',
    image: 'https://res.cloudinary.com/dwzz3cxt1/image/upload/f_auto,q_auto/bhavia/images/products/paper-napkins.png',
    description: 'Essential paper products.',
    productCount: 3,
    products: ['table-roll', 'silver-foil-paper', 'paper-napkins'],
  },
  {
    id: 'cutlery',
    name: 'Plastic Cutlery',
    emoji: '🥄',
    image: 'https://res.cloudinary.com/dwzz3cxt1/image/upload/f_auto,q_auto/bhavia/images/products/gen_plastic_spoon.png',
    description: 'Disposable plastic cutlery.',
    productCount: 3,
    products: ['toothpick', 'plastic-spoon', 'straw'],
  },

];

export const getCategoryById = (id) => categories.find((c) => c.id === id);
