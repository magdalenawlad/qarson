import React from 'react';
import { ShoppingCartSharp } from '@mui/icons-material';
import { useSelector } from 'react-redux';
import { RootState } from '../../app/store';
import logo from '../../assets/images/logo.png';

export const Header = () => {
  const selectedCarsCounter = useSelector((state: RootState) => state.offers.selected).length;
  return (
    <header>
      <div className='logo'>
        <img src={logo} alt='Qarson' />
      </div>
      <div className='icon'>
        <ShoppingCartSharp fontSize='large' />
        {!!selectedCarsCounter && <span className="counter">{selectedCarsCounter}</span>}
        </div>
    </header>
  );
};
