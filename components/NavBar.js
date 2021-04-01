import Link from 'next/link'

const NavBar = () => {
    return (
        <nav>
            <div className="logo">
                <h1>Cric List</h1>
            </div>
            <Link href="/"><a>Home</a></Link>
            <Link href="/about"><a>About</a></Link>
            <Link href="/cric"><a>Cric List</a></Link>
        </nav>
    );
}
 
export default NavBar;