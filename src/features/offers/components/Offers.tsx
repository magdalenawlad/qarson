import React from 'react';
import { useSelector } from 'react-redux';
import { RootState } from '../../../app/store';
import { Offer } from './Offer';
import { OffersSearch } from './OffersSearch';
import './Offers.scss';
import { Make } from '../constants';

export const Offers = () => {
  const data = useSelector((state: RootState) => state.offers.data);
  const selectedOffers = useSelector((state: RootState) => state.offers.selected);
  const filters = useSelector((state: RootState) => state.offers.filters);
  const isLoading = useSelector((state: RootState) => state.offers.isLoading);

  const filteredData = () => {
    let result = data;
    const makeFiltersApplied = filters.make.find(({ selected }) => selected);

    if (makeFiltersApplied) {
      result = result.filter(({ make }) => {
        const searched = filters
          .make.find((({ name }) => {
            return name === make;
          }));

        return searched?.selected
      });
    }

    if (filters.text) {
      const { text } = filters;
      result = result.filter(({ make, model }) =>
        Make[make].toLowerCase().includes(text.toLowerCase())
          || model.toLowerCase().includes(text.toLowerCase()));
    }

    if (filters.showOnlyAvailable) {
      result = result.filter(({ availability }) => !!availability);
    }

    return result;
  };

  const carsToShow = filteredData();

  return (
    <>
      <OffersSearch />
      <div className='offers-container'>
        {isLoading ? (
          <div>Loading...</div>
        ): (
          <div className='offers'>
            {carsToShow && (
              <div className='offers-label'>
                Offers found: <span>{carsToShow.length}</span>
              </div>
            )}
            <div className='offers-list'>
              {carsToShow && carsToShow.map((item) => (
                <Offer
                  key={`item-${item.id}`}
                  selected={selectedOffers.indexOf(item.id) >=0}
                  {...item}
                />
              ))}
            </div>
          </div>
        )}
      </div>
    </>
  )
};
