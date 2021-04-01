import styles from '../../styles/Cric.module.css'

export const getStaticProps = async() => {
    const res = await fetch('https://cricapi.com/api/matches?apikey=MdhmWyZAEDMytcLVHzKhs9Rrx0G2')
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
                <div key={cric.unique_id}>
                    <a className={styles.single}>
                        <h3>{cric["team-1"]} vs {cric["team-2"]}</h3>
                        <h3>Starting time {new Date(cric.dateTimeGMT).toLocaleString()}</h3>
                    </a>
                </div>
            ))}
        </div>
    )
}

export default cric
