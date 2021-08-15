import Head from 'next/head'
import Link from 'next/Link'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <>
    <Head>
     <title>Users List | Home</title> 
     <meta name="keywords" content="users" />
     <link rel="icon" href="../../logo.png" />
    </Head>
   <div>
     <h1 className={ styles.title }>Homepage</h1>
     <p className={ styles.text }>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Praesentium eius numquam velit aliquam? Cupiditate dolor debitis atque, laboriosam, consequatur tenetur dolore, amet enim commodi illo ex itaque! Ullam nobis magni quibusdam reprehenderit deserunt! Error illo quia magnam cum neque labore minus distinctio reprehenderit. Voluptatem explicabo consequuntur distinctio necessitatibus sequi ratione?</p>
     <p className={ styles.text }>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Libero non quasi quos optio odio dicta mollitia vitae tempore beatae dolorum unde, nesciunt magnam iure delectus nam consequatur alias illum saepe vero reiciendis quidem. Molestiae tenetur temporibus officiis facere libero expedita quaerat impedit inventore qui? Temporibus incidunt ullam iusto in suscipit.</p>
     <Link href="/users"><a className={ styles.btn }>See Users Listing</a></Link>
   </div>
     </>
  )
}
