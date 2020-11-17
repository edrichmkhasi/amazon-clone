import React from 'react';
import './Header.css';
import SearchIcon from '@material-ui/icons/Search';
import ShoppingBasketIcon from '@material-ui/icons/ShoppingBasket';

function Header() {
  return (
    <div className='header'>
      <img
        className='header_logo'
        src='http://pngimg.com/uploads/amazon/amazon_PNG11.png'
        alt='Amazon Logo'
      />

      <div className='header_search'>
        <input className='header_searchInput' type='text' />
        <SearchIcon className='header_searchIcon' />
      </div>

      <div className='header_nav'>
        <div className='header_option'>
          <span className='header_optionOne'>Hello </span>
          <span className='header_optionTwo'>Guest</span>
        </div>

        <div className='header_option'>
          <span className='header_optionOne'>Returns </span>
          <span className='header_optionTwo'>& Orders</span>
        </div>

        <div className='header_option'>
          <span className='header_optionOne'>Your </span>
          <span className='header_optionTwo'>Prime</span>
        </div>

        <div className='header_optionBasket'>
           <ShoppingBasketIcon />
           <span className='header_optionTwo header_basketCount'>0</span>
        </div>
      </div>
    </div>
  );
}

export default Header;
