import React, { PropsWithChildren } from 'react'
import { render } from '@testing-library/react'
import type { RenderOptions } from '@testing-library/react'
import { configureStore } from '@reduxjs/toolkit'
import type { PreloadedState } from '@reduxjs/toolkit'
import { Provider } from 'react-redux'
import type { RootState } from '../app/store';
import offersReducer from '../features/offers/offersSlice';

export const initialState = {
  offers: {
    data: [],
    isLoading: false,
    filters: {
      text: '',
      make: [],
      showOnlyAvailable: false
    },
    selected: []
  }
};

interface ExtendedRenderOptions extends Omit<RenderOptions, 'queries'> {
  preloadedState?: PreloadedState<RootState>
  store?: any
}

export function renderWithProviders(
  ui: React.ReactElement,
  {
    preloadedState = initialState,
    store = configureStore({ reducer: { offers: offersReducer }, preloadedState }),
    ...renderOptions
  }: ExtendedRenderOptions = {}
) {
  function Wrapper({ children }: PropsWithChildren<{}>): JSX.Element {
    return <Provider store={store}>{children}</Provider>
  }

  return { store, ...render(ui, { wrapper: Wrapper, ...renderOptions }) }
}