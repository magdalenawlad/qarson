import { screen, within } from '@testing-library/react';
import { renderWithProviders, initialState } from '../../test-utils';
import { Header } from '../../../common/components/Header';

test('renders correctly', () => {
  const { container } = renderWithProviders(<Header />);

  expect(container).toMatchSnapshot();
});

test('does not display counter when no items in the cart', () => {
  const { container } = renderWithProviders(<Header />);
  const counter = container.getElementsByClassName('counter');

  expect(counter.length).toBe(0);
});

test('display counter correctly when items in the cart', () => {
  const preloadedState = {
    ...initialState,
    offers: {
      ...initialState.offers,
      selected: [1, 2, 3]
    }
  };

  renderWithProviders(<Header />, { preloadedState });
  const { getByText } = within(screen.getByTestId('cart-counter'));
  
  expect(getByText('3')).toBeInTheDocument();
});