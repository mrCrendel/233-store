import React from 'react';

const ProductItem = ({ product }) => {
  const firstImage = product?.variants[0].images[0].image;
  const productImages = product?.variants.images;
  const productColoursCount = product?.variants?.length;

  return (
    <div className="products_list__item">
      <div className="products_list__item__wrapper">
        <div className="products_list__item_images__wrapper">
          <img src={firstImage} alt="" className="products_list__item__main_image" />
        </div>
        <div className="products_list__item_details">
          <div className="products_list__item_detail__top">
            <div className="products_list__item_detail__category">
              {product?.category}
            </div>
          </div>
          <div className="products_list__item_detail__main">
            <div className="products_list__item_detail__name">{product?.name}</div>
            <div className="products_list__item_detail__price">{product?.price}</div>
          </div>
          <div className="products_list__item_detail__bottom">
            {productColoursCount} цветов
          </div>
        </div>
      </div>
      {/* eslint-disable-next-line max-len */}
      {/* eslint-disable-next-line jsx-a11y/anchor-has-content,jsx-a11y/control-has-associated-label */}
      <a href="#link" className="products_list__item_link" />
    </div>
  );
};

export default ProductItem;
