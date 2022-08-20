import React, { useEffect } from 'react';
import { Main } from './common/components/Main';
import { Offers } from './features/offers/components/Offers';
import { fetchOffers } from './features/offers/offersSlice';
import { useDispatch } from 'react-redux';
import { AppDispatch } from './app/store';
import { Header } from './common/components/Header';
import './styles/App.scss';

const App = () =>  {
  const dispatch = useDispatch<AppDispatch>();
  
  useEffect(() => {
    dispatch(fetchOffers());
  }, []);

  return (
    <div className="App">
      <Header />
      <Main>
        <Offers />
      </Main>
    </div>
  );
}

export default App;
