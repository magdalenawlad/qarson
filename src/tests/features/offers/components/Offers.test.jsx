import React from 'react';
import { screen } from '@testing-library/react';
import { renderWithProviders, initialState } from '../../../test-utils';
import { Offers } from '../../../../features/offers/components/Offers.tsx';
import { response } from '../../../../features/offers/mockOffersResponse';
import { Make } from '../../../../features/offers/constants';

const preloadedStateDefault = {
  ...initialState,
  offers: {
    ...initialState.offers,
    data: response.offers
  }
};

test('renders correctly', () => {
  const preloadedState = preloadedStateDefault;

  const {container } = renderWithProviders(<Offers />, { preloadedState });

  expect(container).toMatchSnapshot();
});

test('displays loading indicator when in loading state', () => {
  const preloadedState = {
    ...preloadedStateDefault,
    offers: {
      ...preloadedStateDefault.offers,
      isLoading: true
    }
  };

  renderWithProviders(<Offers />, { preloadedState });

  expect(screen.getByText(/Loading.../i)).toBeInTheDocument();
});

test('displays correct message when no offers found', () => {
  const preloadedState = {
    ...preloadedStateDefault,
    offers: {
      ...preloadedStateDefault.offers,
      data: []
    }
  };
  renderWithProviders(<Offers />, { preloadedState });

  expect(screen.getByText(/Offers found:/i)).toBeInTheDocument();
  expect(screen.getByText(/0/i)).toBeInTheDocument();
});

test('displays correct number of offers', () => {
  const preloadedState = preloadedStateDefault;

  renderWithProviders(<Offers />, { preloadedState });

  expect(screen.getByText(/Offers found:/i)).toBeInTheDocument();
  expect(screen.getByText(/11/i)).toBeInTheDocument();
  expect(screen
    .queryAllByTestId('offer-card'))
    .toHaveLength(11);
});

test('displays correct number of offers when search filter applied', () => {
  const preloadedState = {
    ...preloadedStateDefault,
    offers: {
      ...preloadedStateDefault.offers,
      filters: {
        ...preloadedStateDefault.offers.filters,
        text: 'vol'
      }
    }
  };

  renderWithProviders(<Offers />, { preloadedState });

  expect(screen
    .queryAllByTestId('offer-card'))
    .toHaveLength(3);
});

test('displays correct number of offers when make quick filter applied', () => {
  const preloadedState = {
    ...preloadedStateDefault,
    offers: {
      ...preloadedStateDefault.offers,
      filters: {
        ...preloadedStateDefault.offers.filters,
        make: [
          { name: Make.Seat, selected: true },
          { name: Make.Pegeuot, selected: true },
          { name: Make.Volkswagen, selected: true }
        ]
      }
    }
  };

  renderWithProviders(<Offers />, { preloadedState });

  expect(screen
    .queryAllByTestId('offer-card'))
    .toHaveLength(6);
});

test('displays correct number of offers when availability filter aplied', () => {
  const preloadedState = {
    ...preloadedStateDefault,
    offers: {
      ...preloadedStateDefault.offers,
      filters: {
        ...preloadedStateDefault.offers.filters,
        showOnlyAvailable: true
      }
    }
  };

  renderWithProviders(<Offers />, { preloadedState });

  expect(screen
    .queryAllByTestId('offer-card'))
    .toHaveLength(6);
});
