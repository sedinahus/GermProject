import React from 'react'
import FlowChart from './FlowChart'
import data from './data'

function App() {
  return (
    <div className="App">
      <FlowChart data={data} />
    </div>
  );
}

export default App;
