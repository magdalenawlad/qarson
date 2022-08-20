import { FetchDataResponse } from "./offersAPI";
import { Make } from "./constants";

export const response: FetchDataResponse = {
  "answer": "200",
  "dataGeneration": "2021-05-21 12:00",
  "offers" : [
    {
      "id": 1,
      "make": Make.Volkswagen,
      "model": "Golf VII",
      "engine": "1.6 TDI",
      "availability": false,
      "photo": "https://cars.qarson.fr/60653/mandataire-auto-cd-fl030-ba75c5-bcp.jpg"
    },
    {
      "id": 2,
      "make": Make.Volkswagen,
      "model": "up!",
      "engine": "1.0 BMT",
      "availability": true,
      "photo": "https://cars.qarson.fr/51897/mandataire-auto-cd-fl030-1c5b73-bcp.jpg"
    },
    {
      "id": 3,
      "make": Make.Volkswagen,
      "model": "Polo VI",
      "engine": "1.0 TSI",
      "availability": false,
      "photo": "https://cars.qarson.fr/51897/mandataire-auto-cd-fl030-1c5b73-bcp.jpg"
    },
    {
      "id": 4,
      "make": Make.Skoda,
      "model": "Karoq",
      "engine": "1.6 TDI",
      "availability": true,
      "photo": "https://cars.qarson.fr/51250/face-arriere-droite-karoq-cd-lr120-e8b54a-bcp.jpg"
    },
    {
      "id": 5,
      "make": Make.Seat,
      "model": "Arona",
      "engine": "1.0 TSI",
      "availability": false,
      "photo": "https://cars.qarson.fr/41392/face-avant-gauche-30-deg-arona-lf30-5b531f-bcp.jpg"
    },
    {
      "id": 6,
      "make": Make.Renualt,
      "model": "Twingo",
      "engine": "1.0 Sce",
      "availability": true,
      "photo": "https://cars.qarson.fr/62030/mandataire-auto-cd-fl030-cfca76-bcp.jpg"
    },
    {
      "id": 7,
      "make": Make.Renualt,
      "model": "Clio",
      "engine": "1.0 Tce",
      "availability": false,
      "photo": "https://cars.qarson.fr/62030/mandataire-auto-cd-fl030-cfca76-bcp.jpg"
    },
    {
      "id": 8,
      "make": Make.Pegeuot,
      "model": "208",
      "engine": "1.2 PureTech",
      "availability": true,
      "photo": "https://cars.qarson.fr/54791/mandataire-auto-cd-fl030-af72bd-bcp.jpg"
    },
    {
      "id": 9,
      "make": Make.Pegeuot,
      "model": "208",
      "engine": "1.2 PureTech",
      "availability": false
    },
    {
      "id": 10,
      "make": Make.Kia,
      "model": "Rio",
      "engine": "1.25 CVVT",
      "availability": true
    },
    {
      "id": 11,
      "make": Make.Kia,
      "model": "Rio",
      "engine": "1.25 CVVT",
      "availability": true,
      "photo": "https://cars.qarson.fr/64881/mandataire-auto-cd-fl030-29e909-bcp.jpg"
    }
  ]
}
