import vwLogo from '../../assets/images/carLogos/vw.svg';
import seatLogo from '../../assets/images/carLogos/seat.svg';
import renaultLogo from '../../assets/images/carLogos/renault.png';
import peugeotLogo from '../../assets/images/carLogos/peugeot.png';
import kiaLogo from '../../assets/images/carLogos/kia.png';
import skodaLogo from '../../assets/images/carLogos/skoda.png';

type EnumDictionary<T extends string | symbol | number, U> = {
  [K in T]: U;
};

export enum Make {
  Volkswagen = 'Volkswagen',
  Skoda = 'Skoda',
  Seat = 'Seat',
  Renualt ='Renualt',
  Pegeuot = 'Pegeuot',
  Kia = 'Kia'
}

export const MAKE_LOGO_PATH: EnumDictionary<Make, string> = {
  [Make.Volkswagen]: vwLogo,
  [Make.Skoda]: skodaLogo,
  [Make.Seat]: seatLogo,
  [Make.Renualt]: renaultLogo,
  [Make.Pegeuot]: peugeotLogo,
  [Make.Kia]: kiaLogo
};
