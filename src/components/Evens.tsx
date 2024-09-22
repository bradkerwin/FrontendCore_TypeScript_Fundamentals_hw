import React from 'react'
import FilterNumbers from './FilterNumbers'

let numbersArray: number[] = [1, 4, 7, 11, 12, 18];

const Evens = () => {
  return (
    <>
        <h3>Even numbers from this list: {numbersArray}</h3>

        <h3>Evens:</h3>
        {FilterNumbers(numbersArray)}
    </>
  )
}

export default Evens