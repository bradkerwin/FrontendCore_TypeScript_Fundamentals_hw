import React from 'react'

type User = {
    name: string
    age: number
}

const users: User[] = [
    { name: 'Alice', age: 28 },
    { name: 'Bob', age: 34 },
    { name: 'Charlie', age: 25 },
  ];

const UserList: React.FC = () => {

  return (
    <>
        <h1>Users:</h1>
        <ul>
            {users.map((user, index) => (
                <li key={index}>
                    {user.name}, age {user.age}
                </li>
            ))}
        </ul>
    </>

  )
}

export default UserList