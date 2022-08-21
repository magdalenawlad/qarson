import { screen } from '@testing-library/react';
import { renderWithProviders } from '../../test-utils';
import { Main } from '../../../common/components/Main';

test('renders correctly', () => {
  const { container } = renderWithProviders(<Main>Sample</Main>);

  expect(container).toMatchSnapshot();
});

test('renders children correctly', () => {
  renderWithProviders(
    <Main>
        <div>Sample child 1</div>
        <div>Sample child 2</div>
    </Main>
  );

  expect(screen.getByText(/Sample child 1/i)).toBeInTheDocument();
  expect(screen.getByText(/Sample child 2/i)).toBeInTheDocument();
});