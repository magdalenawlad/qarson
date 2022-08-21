import { screen, within } from '@testing-library/react';
import { renderWithProviders, initialState } from '../../../test-utils';
import { OffersSearch } from '../../../../features/offers/components/OffersSearch';
import { Make } from '../../../../features/offers/constants';

test('renders correctly', () => {
  const { container } = renderWithProviders(<OffersSearch />);

  expect(container).toMatchSnapshot();
});

test('renders correctly make quick filters', () => {
  const preloadedState = {
    ...initialState,
    offers: {
      ...initialState.offers,
      filters: {
        ...initialState.offers.filters,
        make: [
          {
            name: Make.Volkswagen,
            selected: false
          },
          {
            name: Make.Skoda,
            selected: false
          },
          {
            name: Make.Seat,
            selected: false
          }
        ]
      }
    }
  }

  renderWithProviders(<OffersSearch />, { preloadedState });

  const makeQuickFilters = screen.getByTestId('search-quick-filters-make');

  expect(makeQuickFilters).toBeInTheDocument();
  expect(within(makeQuickFilters)
    .queryAllByTestId('search-quick-filters-make__item'))
    .toHaveLength(3);
});

test('renders make quick filter with correct class when selected', () => {
  const preloadedState = {
    ...initialState,
    offers: {
      ...initialState.offers,
      filters: {
        ...initialState.offers.filters,
        make: [
          {
            name: Make.Volkswagen,
            selected: true
          }
        ]
      }
    }
  }

  renderWithProviders(<OffersSearch />, { preloadedState });

  const makeQuickFilters = screen.getByTestId('search-quick-filters-make');

  expect(within(makeQuickFilters)
    .queryByTestId('search-quick-filters-make__item'))
    .toHaveClass('search-quick-filters__make__item--selected');
});

test('renders availability filter unchecked when filter not applied', () => {
  const preloadedState = {
    ...initialState,
    offers: {
      ...initialState.offers,
      filters: {
        ...initialState.offers.filters,
        showOnlyAvailable: false
      }
    }
  }

  const { container } = renderWithProviders(<OffersSearch />, { preloadedState });
  const availabilityCheckbox =
    container.querySelector('.availability-filter__checkbox > input');

  expect(availabilityCheckbox).toHaveProperty('value', 'false');
});

test('renders availability filter unchecked when filter applied', () => {
  const preloadedState = {
    ...initialState,
    offers: {
      ...initialState.offers,
      filters: {
        ...initialState.offers.filters,
        showOnlyAvailable: true
      }
    }
  }

  const { container } = renderWithProviders(<OffersSearch />, { preloadedState });
  const availabilityCheckbox =
    container.querySelector('.availability-filter__checkbox > input');

  expect(availabilityCheckbox).toHaveProperty('value', 'true');
});

test('renders text filter with correct value when text applied', () => {
  const preloadedState = {
    ...initialState,
    offers: {
      ...initialState.offers,
      filters: {
        ...initialState.offers.filters,
        text: 'Sample search string'
      }
    }
  }
  
  const { container } = renderWithProviders(<OffersSearch />, { preloadedState });
  const input = container.querySelector('#quick-filter-text');

  expect(input).toHaveValue('Sample search string');
});