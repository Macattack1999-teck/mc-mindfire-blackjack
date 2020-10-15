import React from 'react';
import BlackJackTable from './BlackJackTable';
import BottomPlayerIndicator from './BottomPlayerIndicator';

function App() {
  return (
    <div className="App" style={{ height: "100vh" }}>
      <BlackJackTable />
      <BottomPlayerIndicator />
    </div>
  );
}

export default App;
