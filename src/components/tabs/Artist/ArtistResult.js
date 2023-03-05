import "./artist.css"
import ArtistCard from "./ArtistCard"

const ArtistResult = ({ result }) => {



    return (
        <div className="artist-result">

            <ArtistCard result={result} />

        </div>
    )
}

export default ArtistResult