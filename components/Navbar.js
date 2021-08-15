import Link from 'next/Link'
import Image from 'next/image'

const Navbar = () => {
    return(
        <nav>
            <div className="logo">
                <Image src="/logo.png" width={ 64 } height={ 64 }/>
            </div>
            <Link href="/"><a>Home</a></Link>
            <Link href="/about"><a>About</a></Link>
            <Link href="/users"><a>Users Listing</a></Link>
        </nav>

    );

}
export default Navbar;