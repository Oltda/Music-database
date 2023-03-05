import Search from "../../Search";
import { useSelector } from "react-redux";
import AlbumDetails from "./AlbumDetails";
import "./album.css"

const Albums = () => {
    const albums = useSelector((state) => state.user.albumsFound)

    return (
        <div>

            <Search tab={"album"} />
            <div className="album-result-wrap">
                {albums?.map((album) => (
                    <AlbumDetails key={album.id} album={album} />
                ))}
            </div>
        </div>
    )
}

export default Albums;