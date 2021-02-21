import React from 'react'
import FlowChart from './FlowChart'
import data from './data'

function App() {
  const [charge, setCharge] = React.useState('')
  const handleSetCharge = (selectedCharge) => {
    setCharge(selectedCharge)
  }
  if(charge === 'Positive') {
    return (
      <div className="App">
        <FlowChart data={data} />
      </div>
    );
  } else if (charge === 'Negative') {
    return (
      <div>
        <h1>Show Negative</h1>
      </div>
    )
  } else {
    return (
      <div style={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center'
      }}>
      <h1>Pick your Charge?</h1>
      <div style={{display: 'flex'}}>
      <div
      onClick={() => handleSetCharge('Positive')} style={{
          backgroundColor: '#ebebeb',
          padding: 10,
          margin: 10,
          cursor: 'pointer'
        }}>
        <span>Positive</span>
      </div>
      <div
      onClick={() => handleSetCharge('Negative')} style={{
          backgroundColor: '#ebebeb',
          padding: 10,
          margin: 10,
          cursor: 'pointer'
        }}>
        <span>Negative</span>
      </div>
    </div>
    </div>
    )
  }
}

export default App;