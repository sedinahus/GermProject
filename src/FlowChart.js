import React from 'react'

function FlowChart(props) {
  const {data} = props
  /**
   * Set the State of the Application.
   */
  const [previous, setPrevious] = React.useState([])
  const [parent, setParent] = React.useState(data['Gram (+) rod'])
  /**
   * Set the States to its original value.
   */
  const handleReset = () => {
    setPrevious([])
    setParent(data['Gram (+) rod'])
  }
  /**
   * 3 Step process
   * 
   * Step 1: Check previous.length for a value of 0.
   * 
   * Step 2: Find the path of the previous parent.
   * 
   * Step 3: Set the State to its new values.
   */
  const handleGoBack = () => {
    if(previous.length === 0) {
      return
    }
    let newData = {}
    previous.forEach((path, index) => {
      if (index === 0) {
        newData = data[path] // data['Gram (+) rod']
      } else {
        newData = newData.children[path]
      }
    })
    setParent(newData)
    setPrevious(previous.slice(0, -1))
  }
  /**
   * 2 Step process
   * 
   * Step 1: Update previous with new value
   * 
   * Step 2: Update parent with new value
   */
  const handleChildClick = (child) => {
    setPrevious([...previous, parent.name])
    setParent(child)
  }
  /**
   * Convert parent.children to array.
   * 
   * 2 Step process
   * 
   * Step 1: Check if children exists -> return empty div.
   * 
   * Step 2: Return child.
   */
  const getChildren = () => {
    return Object.values(parent.children).map((child) => {
      if (!child.children) {
        return <div key={child.name} />
      }
      return (
        <div onClick={() => handleChildClick(child)} key={child.name}
        style={{
          backgroundColor: '#ebebeb',
          padding: 10,
          margin: 10,
          cursor: 'pointer'
        }}>
          <span>{child.name}</span>
        </div>
      )
    })
  }
  return (
    <div className="App">
      <button onClick={handleGoBack}>Go Back!</button>
      <button onClick={handleReset}>Reset</button>
      <div style={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center'
      }}>
       <h1>{parent.name}</h1>
        <div style={{display: 'flex'}}>
          {getChildren()}
        </div>
      </div>
    </div>
  );
}

export default FlowChart;