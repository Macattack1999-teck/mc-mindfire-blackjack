import React from 'react';
import BlackJackTable from './BlackJackTable';
import BottomPlayerIndicator from './BottomPlayerIndicator';
import PointCalculatorProvider from '../Providers/PointCalculatorProvider';

function App() {
  return (
    <div className="App" style={{ height: "100vh" }}>
      <PointCalculatorProvider>
        <BlackJackTable />
        <BottomPlayerIndicator />
      </PointCalculatorProvider>
    </div>
  );
}

export default App;
