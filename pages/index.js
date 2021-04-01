import Head from 'next/head'

import styles from '../styles/Home.module.css'
import Link from 'next/link'

export default function Home() {
    return (
        <>
            <Head>
                <title>Cric List | Home</title>
                <meta name="keywords" content="cricket" />
            </Head>
            <div>
                <h1 className={styles.title}>Homepage</h1>
                <p className={styles.text}>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Totam expedita doloremque libero ratione quaerat non mollitia labore vel cumque culpa fugiat eligendi officia obcaecati qui autem quidem, ipsam, explicabo illum!</p>
                <p className={styles.text}>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Totam expedita doloremque libero ratione quaerat non mollitia labore vel cumque culpa fugiat eligendi officia obcaecati qui autem quidem, ipsam, explicabo illum!</p>

                <Link href="/cric">
                    <a className={styles.btn}>See Cric List</a>
                </Link>
            </div>
        </>
    )
}
