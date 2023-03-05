import Search from "../../Search";

import "./artist.css"
import { useSelector } from "react-redux"
import ArtistCard from "./ArtistCard";

const Artists = () => {
    const results = useSelector((state) => state.user.resultsFound)

    return (
        <div className="artists-wrapper">


            <Search tab={"artist"} />
            <div className="artist-results-wrap">
                {results ? (
                    results.map((result) => (
                        <ArtistCard key={result.id} result={result} />
                    ))
                ) : (
                    <></>
                )}
            </div>



        </div>
    )
}

export default Artists;