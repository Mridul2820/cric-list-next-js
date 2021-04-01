import NavBar from "../components/NavBar";
import Footer from "../components/Footer";
import Link from 'next/link'

export default function Home() {
    return (
        <div>
            <NavBar />
            <h1>Homepage</h1>
            <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Totam expedita doloremque libero ratione quaerat non mollitia labore vel cumque culpa fugiat eligendi officia obcaecati qui autem quidem, ipsam, explicabo illum!</p>
            <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Totam expedita doloremque libero ratione quaerat non mollitia labore vel cumque culpa fugiat eligendi officia obcaecati qui autem quidem, ipsam, explicabo illum!</p>

            <Link href="/cric">
                <a>See Cric List</a>
            </Link>
            <Footer />
        </div>
    )
}
