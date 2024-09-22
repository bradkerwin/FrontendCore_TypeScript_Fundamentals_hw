import React from 'react'

const FilterNumbers = (number: number[]) => {
    const evensOnly = []
    for (let num = 0; num <= number.length - 1; num++) {
        if(num % 2 === 0) {
            evensOnly.push(num)
        }
    }


    return evensOnly
}
let numbersArray: number[] = [1, 4, 7, 11, 12, 18];

console.log(FilterNumbers(numbersArray));

export default FilterNumbers