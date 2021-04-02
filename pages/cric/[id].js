import cric from "."

const cricURL = 'https://cricapi.com/api'
const apiKEY = 'apikey=MdhmWyZAEDMytcLVHzKhs9Rrx0G2'

export const getStaticPaths = async() => {
    const res = await fetch(`${cricURL}/matches?${apiKEY}`)
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

export const getStaticProps = async (context) => {
    const id = context.params.id;
    const res = await fetch(`${cricURL}/cricketScore?unique_id=${id}&${apiKEY}`);
    const data = await res.json();
    // console.log(data);
  
    return {
        props: { cric: data }
    }
}

const Details = ({ cric }) => {
    return (
        <div>
            <h1>{cric["team-1"]} vs {cric["team-2"]}</h1>
            <h2>{cric.score}</h2>
        </div>
    );
}
 
export default Details;