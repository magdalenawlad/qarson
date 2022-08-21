import { Make } from '../../../features/offers/constants';
import { getMakeLogoPath } from '../../../features/offers/helpers';

test('provides correct path when logo is available', () => {
  const path = getMakeLogoPath(Make.Kia);

  expect(path).toBe('kia.png');
});