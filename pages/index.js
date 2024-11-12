import axios from "axios";
import Link from 'next/link'
import { useState } from "react";

export default function Home({users}) {
  console.log(users);
  const [clone, setClone] = useState([...users])
  return (
    <>
      <p>
        Welcome to Next
      </p>
      <table border={2}>
        <thead>
          <tr>
            <th>name</th>
            <th>username</th>
            <th>email</th>
            <th>see more</th>
          </tr>
        </thead>
        <tbody>
          {clone.map(elm => (
            <tr key={elm.id}>
              <td>{elm.name}</td>
              <td>{elm.username}</td>
              <td>{elm.email}</td>
              <td> <Link href={'/details/'+elm.id}>See</Link></td>
            </tr>
          ))}
        </tbody>
      </table>
    </>
  )
}

export const getStaticProps = async () => {
  console.log('ok');
  const {data} = await axios.get('https://jsonplaceholder.typicode.com/users')
  return { props: {users: data} }
} 
