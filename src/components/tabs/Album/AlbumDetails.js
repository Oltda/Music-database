import AccordionMenu from "../../utilities/AccordionMenu"
import "./album.css"

const AlbumDetails = ({ album }) => {

    return (
        <div className="album-details-wrap">
            <AccordionMenu album={album} />
        </div>
    )
}

export default AlbumDetails