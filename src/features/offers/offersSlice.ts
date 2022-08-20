import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { fetchData } from './offersAPI';
import { Make } from './constants';

const PREFIX = 'offers';

export interface Offer {
  id: number;
  make: Make,
  model: string,
  engine: string,
  availability: boolean,
  photo?: string
};

export interface OffersState {
  data: Offer[];
  isLoading: boolean;
  filters: {
    text: string;
    make: {
      name: Make;
      selected: boolean;
    }[];
    showOnlyAvailable: boolean;
  },
  selected: number[];
}

const initialState: OffersState = {
  data: [],
  isLoading: false,
  filters: {
    text: '',
    make: [],
    showOnlyAvailable: false
  },
  selected: []
};

export const fetchOffers = createAsyncThunk(
  `${PREFIX}/fetchData`,
  async () => {
    const response = await fetchData();

    return response;
  }
);

const offersSlice = createSlice({
  name: 'offers',
  initialState,
  reducers: {
    addToCart(state, action) {
      state.selected = [...state.selected, action.payload];
    },
    removeFromCart(state, action) {
      state.selected = state.selected.filter((id) => id !== action.payload);
    },
    changeTextFilter(state, action) {
      state.filters.text = action.payload;
    },
    changeShowOnlyAvailableFilter(state) {
      state.filters.showOnlyAvailable = !state.filters.showOnlyAvailable;
    },
    changeMakeQuickFilter(state, action) {
      const { name, selected } = action.payload;
      state.filters.make = state.filters.make.map((make) => (
        name === make.name
          ? ({ name: make.name, selected })
          : make
      ))
    },
  },
  extraReducers: (builder) => {
    builder.addCase(fetchOffers.pending, (state) => {
      state.isLoading = true;
    });
    builder.addCase(fetchOffers.rejected, (state) => {
      state.isLoading = false;
    });
    builder.addCase(fetchOffers.fulfilled, (state, action) => {
      state.data = action.payload.offers;
      state.filters.make = Array
        .from(new Set(action.payload.offers.map(({ make }) => make)))
        .map(name => ({ name, selected: false }));
      state.isLoading = false;
    });
  },
});

export const {
  addToCart,
  removeFromCart,
  changeMakeQuickFilter,
  changeShowOnlyAvailableFilter,
  changeTextFilter
} = offersSlice.actions


export default offersSlice.reducer;
