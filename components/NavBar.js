import Link from 'next/link'
import Image from 'next/image';

const NavBar = () => {
    return (
        <nav>
            <div className="logo">
                <Image 
                    src="/cricket.png" 
                    alt="cricket"
                    height={80}
                    width={80}
                />
            </div>
            <Link href="/"><a>Home</a></Link>
            <Link href="/about"><a>About</a></Link>
            <Link href="/cric"><a>Cric List</a></Link>
        </nav>
    );
}
 
export default NavBar;