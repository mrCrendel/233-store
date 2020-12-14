import React from 'react';
import ProductItem from './ProductItem';

const productListData = [
  {
    id: 1,
    name: 'product1',
    short_description: 'some short description',
    description: 'long description',
    category: 'мужской',
    price: 10,
    discount: 10,
    price_with_discount: 9,
    variants: [
      { id: 1,
        images: [
          { id: 1, image: 'https://placehold.it/400/400', small_image: 'https://placehold.it/80/80' },
          { id: 2, image: 'https://placehold.it/400/400', small_image: 'https://placehold.it/80/80' },
          { id: 3, image: 'https://placehold.it/400/400', small_image: 'https://placehold.it/80/80' }
        ]
      },
      { id: 2,
        images: [
          { id: 1, image: 'https://placehold.it/400/400', small_image: 'https://placehold.it/80/80' },
          { id: 2, image: 'https://placehold.it/400/400', small_image: 'https://placehold.it/80/80' },
          { id: 3, image: 'https://placehold.it/400/400', small_image: 'https://placehold.it/80/80' }
        ] }
    ]
  },
  {
    id: 1,
    name: 'product1',
    short_description: 'some short description',
    description: 'long description',
    category: 'мужской',
    price: 10,
    discount: 10,
    price_with_discount: 9,
    variants: [
      { id: 1,
        images: [
          { id: 1, image: 'https://placehold.it/400/400', small_image: 'https://placehold.it/80/80' },
          { id: 2, image: 'https://placehold.it/400/400', small_image: 'https://placehold.it/80/80' },
          { id: 3, image: 'https://placehold.it/400/400', small_image: 'https://placehold.it/80/80' }
        ]
      },
      { id: 2,
        images: [
          { id: 1, image: 'https://placehold.it/400/400', small_image: 'https://placehold.it/80/80' },
          { id: 2, image: 'https://placehold.it/400/400', small_image: 'https://placehold.it/80/80' },
          { id: 3, image: 'https://placehold.it/400/400', small_image: 'https://placehold.it/80/80' }
        ] }
    ]
  }
];

const ProductsList = () => (
  <div className="products">
    <div className="products_list">
      {productListData?.map((item) => <ProductItem key={item.id} product={item} />)}
    </div>
  </div>
);

export default ProductsList;
