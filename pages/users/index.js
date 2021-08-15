import styles from '../../styles/Users.module.css'
import Head from 'next/head'
import Link from 'next/link'

export const getStaticProps = async () => {
    const res = await fetch('https://jsonplaceholder.typicode.com/users');
    const data = await res.json();

    return {
        props: { users: data }
    }
}
const Users = ( { users } ) => {
    return ( 
        <>
        <Head>
        <title>Users List | Users</title> 
        <meta name="keywords" content="users" />
        <link rel="icon" href="../../logo.png" />
       </Head>
        <div>
        <h1 className={ styles.title }>Users</h1>
        { users.map(user => (
        <Link href={'/users/' + user.id} key={ user.id }>
            <a className={ styles.single }>
                <h3>{ user.name }</h3>
            </a>
            </Link>
            ))}
        </div>
        </>
     );
}
 
export default Users;