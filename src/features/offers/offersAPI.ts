import { response } from "./mockOffersResponse";
import { Offer } from "./offersSlice";

export interface FetchDataResponse {
  answer: string;
  dataGeneration: string;
  offers: Offer[];
}

// mock async request for offers data
export const fetchData = () => (
  new Promise<FetchDataResponse>((resolve) =>
    setTimeout(() => resolve(response), 1000)
  )
);
