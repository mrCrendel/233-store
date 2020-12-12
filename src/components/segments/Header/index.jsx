import React from 'react';
import ShoppingCartIcon from '../../icons/conponets/ShoppingCartIcon';

const Header = () => (
  <header className="header">
    <div className="container header__container">
      <div className="header_logo__wrapper">
        <a href="/" className="header_logo">Logo</a>
      </div>
      <div className="header_main">
        <div className="header_main__links">
          <a href="#link" className="header_main__link">Мужские</a>
          <a href="#link" className="header_main__link">Женские</a>
          <a href="#link" className="header_main__link">Детские</a>
          <a href="#link" className="header_main__link">Контакты</a>
        </div>
        <div className="header_main__shop_cart__wrapper">
          {/* eslint-disable-next-line react/button-has-type */}
          <button className="header_main__shop_cart">
            <ShoppingCartIcon /> (0)
          </button>
        </div>
      </div>
    </div>
  </header>
);

export default Header;
