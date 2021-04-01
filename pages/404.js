import Link from 'next/link'

const NotFound = () => {
    return (
        <div className="not-found">
            <h1>Oooops...</h1>
            <h2>This Page Does not Exist</h2>
            <p>Go Back to 
                <Link href="/">
                    <a>HomePage</a>
                </Link>
            </p>
        </div>
    );
}
 
export default NotFound;