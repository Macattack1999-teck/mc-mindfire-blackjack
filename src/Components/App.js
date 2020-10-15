import React from 'react';
import BlackJackTable from './BlackJackTable';
import BottomPlayerIndicator from './BottomPlayerInterface';
import PointCalculatorProvider from '../Providers/PointCalculatorProvider';
import CardsProvider from '../Providers/CardsProvider';
import CurrentTurnProvider from '../Providers/CurrentTurnProvider';

function App() {
  return (
    <div className="App" style={{ height: "100vh" }}>
      <CurrentTurnProvider>
        <CardsProvider>
          <PointCalculatorProvider>
            <BlackJackTable />
            <BottomPlayerIndicator />
          </PointCalculatorProvider>
        </CardsProvider>
      </CurrentTurnProvider>
    </div>
  );
}

export default App;
