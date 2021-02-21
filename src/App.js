import React from 'react'
import data from './data'

function App() {
  const [previous, setPrevious] = React.useState([])
  const [parent, setParent] = React.useState(data[0])
  const handleGoBack = () => {
    if(previous.length === 0) {
      return
    }
    const newParent = previous[previous.length - 1]
    setParent(newParent)
    setPrevious(previous.filter(i => {
      return i.name !== newParent.name
    }))
  }
  const handleChildClick = (childObject) => {
    setPrevious([...previous, parent])
    setParent(childObject)
  }
  const getChildren = () => {
    return parent.children.map((child) => {
      const childObject = data.find((sibling) => {
        return sibling.name === child
      })
      return (
        <div onClick={() => handleChildClick(childObject)} key={childObject.name}>
          <h2>{childObject.name}</h2>
        </div>
      )
    })
  }
  return (
    <div className="App">
      <button onClick={handleGoBack}>Go Back!</button>
      <h1>parent: {parent.name}</h1>
      <div>
      {getChildren()}
      </div>
    </div>
  );
}

export default App;