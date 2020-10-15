import React from 'react';
import BlackJackTable from './BlackJackTable';
import BottomPlayerIndicator from './BottomPlayerIndicator';

function App() {
  return (
    <div className="App" style={{ height: "100vh" }}>
      <BlackJackTable />
      {/* <div style={{ backgroundColor: "#744A35", height: "10%" }}>

      </div> */}
      <BottomPlayerIndicator />
    </div>
  );
}

export default App;
