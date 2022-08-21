import React, { useCallback } from 'react';
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
import RemoveShoppingCartIcon from '@mui/icons-material/RemoveShoppingCart';
import { useDispatch } from 'react-redux';
import autoIcon from '../../../assets/images/car-placeholder.png';
import { Make } from '../constants';
import { addToCart, removeFromCart, Offer as OfferType } from '../offersSlice';
import './Offers.scss';

type Props = OfferType & { selected: boolean };

export const Offer = ({
  id,
  make,
  model,
  engine,
  availability,
  photo,
  selected
}: Props) => {
  const dispatch = useDispatch();

  const handleCartButtonClick = useCallback((id: number) => 
    selected ? dispatch(removeFromCart(id)) : dispatch(addToCart(id)), [selected]);
 
  return (
    <div
      className={`offer-card ${!availability ? 'offer-card--disabled' : ''}`}
      data-testid='offer-card'
    >
      {!availability && <div className="indicator">Unavailable</div>}
      {photo ? (
        <img data-testid="offer-photo" src={photo} alt="Auto" />
      ) : (
        <img data-testid="offer-photo" className="car-placeholder" src={autoIcon} alt="Auto" />
      )}
      <div className='offer-card__description'>
        <div className='offer-card__description__name'>{`${Make[make]} ${model}`}</div>
        <div>{engine}</div>
      </div>
      <div className='offer-card__footer'>
        <div className='offer-card__footer__price'>$559.99</div>
        <button
          disabled={!availability}
          className={`offer-card__footer__button ${selected ? 'offer-card__footer__button--selected': ''}`}
          onClick={() => handleCartButtonClick(id)}
        >
          {selected ? <RemoveShoppingCartIcon /> : <AddShoppingCartIcon />}
          {selected ? 'Remove' : 'Add'}
        </button>
      </div>
    </div>
  );
}
