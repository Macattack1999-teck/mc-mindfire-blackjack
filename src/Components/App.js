import React from 'react';
import BlackJackTable from './BlackJackTable';
import BottomPlayerIndicator from './BottomPlayerIndicator';
import PointCalculatorProvider from '../Providers/PointCalculatorProvider';
import CardsProvider from '../Providers/CardsProvider';

function App() {
  return (
    <div className="App" style={{ height: "100vh" }}>
      <CardsProvider>
        <PointCalculatorProvider>
          <BlackJackTable />
          <BottomPlayerIndicator />
        </PointCalculatorProvider>
      </CardsProvider>
    </div>
  );
}

export default App;
