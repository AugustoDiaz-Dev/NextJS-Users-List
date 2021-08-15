import Head from 'next/head'
import styles from '../styles/Home.module.css'

const About = () => {
    return ( 
        <>
    <Head>
     <title>Users List | About</title> 
     <meta name="keywords" content="users" />
    </Head>
        <div>
            <h1 className={ styles.title }>About</h1>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Praesentium eius numquam velit aliquam? Cupiditate dolor debitis atque, laboriosam, consequatur tenetur dolore, amet enim commodi illo ex itaque! Ullam nobis magni quibusdam reprehenderit deserunt! Error illo quia magnam cum neque labore minus distinctio reprehenderit. Voluptatem explicabo consequuntur distinctio necessitatibus sequi ratione?</p>
            <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Libero non quasi quos optio odio dicta mollitia vitae tempore beatae dolorum unde, nesciunt magnam iure delectus nam consequatur alias illum saepe vero reiciendis quidem. Molestiae tenetur temporibus officiis facere libero expedita quaerat impedit inventore qui? Temporibus incidunt ullam iusto in suscipit.</p>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Praesentium eius numquam velit aliquam? Cupiditate dolor debitis atque, laboriosam, consequatur tenetur dolore, amet enim commodi illo ex itaque! Ullam nobis magni quibusdam reprehenderit deserunt! Error illo quia magnam cum neque labore minus distinctio reprehenderit. Voluptatem explicabo consequuntur distinctio necessitatibus sequi ratione?</p>
        </div>
        </>
     );
}
 
export default About;