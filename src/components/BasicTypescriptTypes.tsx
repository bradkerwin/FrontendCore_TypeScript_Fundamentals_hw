
const BasicTypescriptTypes = () => {

    let greeting: string = "Hello, TypeScript!";
    
    let numberList: number[] = [5, 10, 15];
    
    const calculateSum = (a: number, b: number) => {
        return a + b
    };

  return (
    <>
      <h1>{greeting}</h1>
      <ul>
        {numberList.map((number) => (
          <li>{number}</li>
        ))}
      </ul>
      <li>The sum of 5 and 10 is: {calculateSum(5, 10)}</li>
    </>
  )
}

export default BasicTypescriptTypes;