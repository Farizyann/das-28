import { useRouter } from "next/router"
import axios from "axios";

export default function Details({user}) {
    const router = useRouter()
    // console.log(router);
    // console.log(router.query);
    console.log(user);
    
    
    return(
        <div>
            <h3>Details {user.name}</h3>
            <p>{user.address?.street}</p>
        </div>
    )
}
export const getServerSideProps = async ({params}) => {
    console.log('ok');
    const {data} = await axios.get('https://jsonplaceholder.typicode.com/users/'+params.id)
    return { props: {user: data} }
  } 
  