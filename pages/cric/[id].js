export const getStaticPaths = () => {
    const res = await fetch('https://cricapi.com/api/matches?apikey=MdhmWyZAEDMytcLVHzKhs9Rrx0G2')
    const data = await res.json()

    const paths = data.matches.map(match => {
        return {
            params: {id: match.unique_id.toString()}
        }
    })

    return {
        paths,
        fallback: false
    }
}

const Details = () => {
    return (
        <div>
            <h1>Match Details</h1>
        </div>
    );
}
 
export default Details;