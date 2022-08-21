import { screen } from '@testing-library/react';
import { renderWithProviders } from '../../../test-utils';
import { Offer } from '../../../../features/offers/components/Offer';
import { Make } from '../../../../features/offers/constants';

const offerDefaultData = {
  id: 1,
  make: Make.Seat,
  model: 'Model',
  engine: 'Engine',
  availability: true,
  photo: 'src/photo.png',
  selected: false
}

test('renders correctly', () => {
  const {container } = renderWithProviders(<Offer {...offerDefaultData} />);

  expect(container).toMatchSnapshot();
});

test('displays correctly offer data', () => {
  renderWithProviders(<Offer {...offerDefaultData} />);

  expect(screen.getByText(/Seat Model/i)).toBeInTheDocument();
  expect(screen.getByText(/Engine/i)).toBeInTheDocument();
  expect(screen.getByText(/Add/i)).toBeInTheDocument();    
});

test('renders correctly when selected', () => {
  const data = { ...offerDefaultData, selected: true };
  renderWithProviders(<Offer {...data} />);

  expect(screen.getByText(/Remove/i)).toBeInTheDocument();  
});

test('renders Unavailable ribbon when offer is not available', () => {
  const data = { ...offerDefaultData, availability: false };
  renderWithProviders(<Offer {...data} />);

  expect(screen.getByText(/Unavailable/i)).toBeInTheDocument();  
});

test('diplays disabled Add button when offer is not available', async () => {
  const data = { ...offerDefaultData, availability: false };
  renderWithProviders(<Offer {...data} />);

  const footerButton = screen.getByRole('button');

  expect(footerButton).toBeDisabled();
});

test('displays Remove button when offer added to cart', () => {
  const data = { ...offerDefaultData, selected: true };
  renderWithProviders(<Offer {...data} />);

  expect(screen.getByTestId('RemoveShoppingCartIcon')).toBeInTheDocument(); 
});

test('displays Add button when offer not added to cart', () => {
  const data = { ...offerDefaultData };
  renderWithProviders(<Offer {...data} />);

  expect(screen.getByTestId('AddShoppingCartIcon')).toBeInTheDocument(); 
});

test('renders correct photo when path delivered', () => {
  const data = { ...offerDefaultData };
  renderWithProviders(<Offer {...data} />);

  expect(screen.getByTestId('offer-photo')).toHaveAttribute('src', 'src/photo.png');
});

test('renders photo placeholder when no photo path delivered', () => {
  const data = { ...offerDefaultData, photo: '' };
  renderWithProviders(<Offer {...data} />);

  expect(screen.getByTestId('offer-photo')).toHaveAttribute('src', 'car-placeholder.png');
});