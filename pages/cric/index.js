import styles from '../../styles/Cric.module.css'
import Link from 'next/link'

const cricURL = 'https://cricapi.com/api'
const apiKEY = 'apikey=MdhmWyZAEDMytcLVHzKhs9Rrx0G2'

export const getStaticProps = async() => {
    const res = await fetch(`${cricURL}/matches?${apiKEY}`)
    const data = await res.json()

    // console.log(data.matches);

    return {
        props: {crics: data.matches}
    }
}

const cric = ({ crics }) => {
    return (
        <div>
            <h1>Cric List</h1>
            {crics.map(cric => (
                <Link href={`/cric/${cric.unique_id}`} key={cric.unique_id}>
                    <a className={styles.single}>
                        <h3>{cric["team-1"]} vs {cric["team-2"]}</h3>
                        <h3>Starting time : {new Date(cric.dateTimeGMT).toLocaleString()}</h3>
                    </a>
                </Link>
            ))}
        </div>
    )
}

export default cric
