import styles from '../../styles/Users.module.css'

export const getStaticPaths = async () => {
    const res = await fetch('https://jsonplaceholder.typicode.com/users')
    const data = await res.json();

    const paths = data.map(user => {
        return {
            params: { id: user.id.toString() }
        }
    })
    return {
        paths, 
        fallback: false
    }
}

export const getStaticProps = async (context) => {
    const id = context.params.id;
    const res = await fetch('https://jsonplaceholder.typicode.com/users/' + id);
    const data = await res.json();

    return {
        props: { user: data }
    }
}

const Details = ({ user }) => {
    return (
        <div>
            <h1 className={ styles.title }>{ user.name }</h1>
            <p><span className={ styles.salmon }>Website: </span> { user.website}</p>
            <p><span className={ styles.salmon }>Email: </span> { user.email}</p>
            <p><span className={ styles.salmon }>City: </span> { user.address.city}</p>
            <p><span className={ styles.salmon }>Zip code: </span> { user.address.zipcode}</p>
        </div>

    );
}
export default Details;