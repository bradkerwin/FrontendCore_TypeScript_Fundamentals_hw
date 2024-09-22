import React from 'react'

const ColorList: React.FC = () => {

    let colorArray: string[] = ["blue", "red", "green"]


    return (
      <>
      <h1>Colors:</h1>
        <ul>
          {colorArray.map((color) => (
            <li>{color}</li>
          ))}
        </ul>
      </>
    )
}

export default ColorList;