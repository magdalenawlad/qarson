import React, { useCallback } from 'react';
import { TextField } from '@mui/material';
import Checkbox from '@mui/material/Checkbox';
import SearchIcon from '@mui/icons-material/Search';
import { InputAdornment } from '@mui/material';
import { useDispatch, useSelector } from 'react-redux';
import { AppDispatch, RootState } from '../../../app/store';
import {
  changeTextFilter,
  changeMakeQuickFilter,
  changeShowOnlyAvailableFilter
} from '../offersSlice';
import { getMakeLogoPath } from '../helpers';
import { Make } from '../constants';
import './OffersSearch.scss';

export const OffersSearch = () => {
  const dispatch = useDispatch<AppDispatch>();
  const isLoading = useSelector((state: RootState) => state.offers.isLoading);
  const textFilter = useSelector((state: RootState) => state.offers.filters.text);
  const onlyAvailableFilter = useSelector((state: RootState) => state.offers.filters.showOnlyAvailable);
  const quickMakeFilters = useSelector((state: RootState) => state.offers.filters.make);

  const handleTextFilterChange = useCallback((event: React.ChangeEvent<HTMLInputElement>) =>
    dispatch(changeTextFilter(event.target.value)), []);

  const handleMakeQuickFilterChange = useCallback((name: Make, selected: boolean) =>
    dispatch(changeMakeQuickFilter({ name, selected })), []);

  const handleOnlyAvailableFilterChange = useCallback(() => {
    dispatch(changeShowOnlyAvailableFilter())}, []);

  return (
    <div className='search'>
      <div>
        <TextField
          fullWidth
          id='quick-filter-text'
          variant='outlined'
          value={textFilter}
          onChange={handleTextFilterChange}
          className='search-textfield'
          InputProps={{
            endAdornment:
              <InputAdornment position="end">
                <SearchIcon />
              </InputAdornment>
          }}
        />
      </div>
      <div className='search-quick-filters'>
        {quickMakeFilters && !!quickMakeFilters.length && (
          <div
            className='search-quick-filters__make'
            data-testid='search-quick-filters-make'
          >
            {quickMakeFilters.map(({ name, selected }) => (
              <div
                key={name}
                className={
                  `search-quick-filters__make__item ${selected ? 'search-quick-filters__make__item--selected': ''}`
                }
                data-testid='search-quick-filters-make__item'
                onClick={() => handleMakeQuickFilterChange(name, !selected)}
              >
                <img src={getMakeLogoPath(name)} />
              </div>
              )
            )}
          </div>
        )}
        {!isLoading && (
          <div className='availability-filter'>
            <Checkbox
              size='medium'
              className='availability-filter__checkbox'
              value={onlyAvailableFilter}
              onChange={handleOnlyAvailableFilterChange}
            />
            <div className='availability-filter__label'>Available now</div>
          </div>
        )}
      </div>
    </div>
  );
}
