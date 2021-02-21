function GetChildren = () => {
    const handleChildClick = (child) => {
        // TODO check if child.children has stuff...
        setPrevious([...previous, parent.name])
        setParent(child)
      }
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

  export default GetChildren