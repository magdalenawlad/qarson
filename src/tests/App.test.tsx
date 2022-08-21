import { renderWithProviders } from './test-utils';
import App from '../App';

test('renders correctly', () => {
  const { container } = renderWithProviders(<App />);

  expect(container).toMatchSnapshot();
});
