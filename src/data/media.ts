export type PhotoCategory = 'food-wine' | 'my-dishes' | 'piano';

export interface Photo {
  id: string;
  src: string;
  alt: string;
  category: PhotoCategory;
}

export const mediaPhotos: Photo[] = [
  // food-wine
  { id: 'amber', src: '/photos/food-wine/Amber.JPG', alt: 'Amber', category: 'food-wine' },
  { id: 'atomix', src: '/photos/food-wine/Atomix.jpg', alt: 'Atomix', category: 'food-wine' },
  { id: 'bastardo', src: '/photos/food-wine/BASTARDO.jpg', alt: 'Bastardo', category: 'food-wine' },
  { id: 'clodelaroche', src: '/photos/food-wine/clodelaroche.jpg', alt: 'Clos de la Roche', category: 'food-wine' },
  { id: 'ctbf1', src: '/photos/food-wine/CTBF1.jpg', alt: 'CTBF 1', category: 'food-wine' },
  { id: 'ctbf2', src: '/photos/food-wine/CTBF2.jpg', alt: 'CTBF 2', category: 'food-wine' },
  { id: 'ctbf3', src: '/photos/food-wine/CTBF3.jpg', alt: 'CTBF 3', category: 'food-wine' },
  { id: 'dqyuem_csj', src: '/photos/food-wine/dqyuem_csj.jpg', alt: 'Dqyuem CSJ', category: 'food-wine' },
  { id: 'kiln1', src: '/photos/food-wine/Kiln1.jpg', alt: 'Kiln 1', category: 'food-wine' },
  { id: 'kiln2', src: '/photos/food-wine/Kiln2.jpg', alt: 'Kiln 2', category: 'food-wine' },
  { id: 'krug_1985', src: '/photos/food-wine/krug_collection_1985.jpg', alt: 'Krug Collection 1985', category: 'food-wine' },
  { id: 'leflaive_bbm', src: '/photos/food-wine/leflaive_bbm.jpg', alt: 'Leflaive BBM', category: 'food-wine' },
  { id: 'salon_parantoux', src: '/photos/food-wine/salon_parantoux.jpg', alt: 'Salon Parantoux', category: 'food-wine' },
  { id: 'sushi1', src: '/photos/food-wine/Sushi1.jpg', alt: 'Sushi 1', category: 'food-wine' },
  { id: 'sushi2', src: '/photos/food-wine/Sushi2.jpg', alt: 'Sushi 2', category: 'food-wine' },
  { id: 'sushi3', src: '/photos/food-wine/Sushi3.jpg', alt: 'Sushi 3', category: 'food-wine' },
  { id: 'the-modern', src: '/photos/food-wine/The Modern.jpg', alt: 'The Modern', category: 'food-wine' },

  // my_dishes
  { id: 'hori_1', src: '/photos/my_dishes/hori_1.jpg', alt: 'Dish 1', category: 'my-dishes' },
  { id: 'hori_2_oyster', src: '/photos/my_dishes/hori_2_oyster.jpg', alt: 'Oyster', category: 'my-dishes' },
  { id: 'hori_3_lobster', src: '/photos/my_dishes/hori_3_lobster.jpg', alt: 'Lobster', category: 'my-dishes' },
  { id: 'hori_4_shrimp', src: '/photos/my_dishes/hori_4_shrimp.jpg', alt: 'Shrimp', category: 'my-dishes' },
  { id: 'vert_1', src: '/photos/my_dishes/vert_1.jpg', alt: 'Vert Dish 1', category: 'my-dishes' },
  { id: 'vert_2_chawanmushi', src: '/photos/my_dishes/vert_2_CHAWANMUSHI.jpg', alt: 'Chawanmushi', category: 'my-dishes' },
  { id: 'vert_3_lobster', src: '/photos/my_dishes/vert_3_lobster.jpg', alt: 'Vert Lobster', category: 'my-dishes' },
  { id: 'vert_4_pear', src: '/photos/my_dishes/vert_4_pear.jpg', alt: 'Pear Dessert', category: 'my-dishes' },

  // piano
  { id: 'hori_bio', src: '/photos/piano/hori_bio.JPG', alt: 'Piano Bio 1', category: 'piano' },
  { id: 'hori_bio1_mask', src: '/photos/piano/hori_bio1_mask.JPG', alt: 'Piano Bio Mask 1', category: 'piano' },
  { id: 'hori_bio2_mask', src: '/photos/piano/hori_bio2_mask.JPG', alt: 'Piano Bio Mask 2', category: 'piano' },
  { id: 'hori_black_white_fuzzy', src: '/photos/piano/hori_black_white_fuzzy.JPG', alt: 'Piano B&W', category: 'piano' },
  { id: 'hori_hands', src: '/photos/piano/hori_hands.JPG', alt: 'Piano Hands', category: 'piano' },
  { id: 'vert_bio1', src: '/photos/piano/vert_bio1.JPG', alt: 'Piano Vert Bio 1', category: 'piano' },
  { id: 'vert_bio2', src: '/photos/piano/vert_bio2.JPG', alt: 'Piano Vert Bio 2', category: 'piano' },


];
