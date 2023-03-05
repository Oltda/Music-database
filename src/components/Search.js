import { useSelector, useDispatch } from "react-redux"
import { getResults, getAlbums } from "../state/store";
import { useState, useEffect } from "react"
import axios from "axios"
import Button from 'react-bootstrap/Button';
import "./utilities/utilities.css"

const Search = ({ tab }) => {
    const token = useSelector((state) => state.user.userToken)
    const dispatch = useDispatch()
    const [searchKey, setSearchKey] = useState("")


    const searchArtist = async (e) => {

        e.preventDefault()

        if (searchKey.trim().length) {
            const { data } = await axios.get("https://api.spotify.com/v1/search", {
                headers: {
                    Authorization: `Bearer ${token}`
                },
                params: {
                    q: searchKey,
                    type: tab
                }
            })
            if (tab === "artist") {
                dispatch(getResults(data.artists.items))
            } else {
                dispatch(getAlbums(data.albums.items))

            }

        }
    }



    return (
        <div className="search-wrapper">
            {tab === "artist" ?
                <h1>Artists</h1>
                :
                <h1>Albums</h1>
            }

            {token ?
                <form className="search-form" onSubmit={searchArtist}>
                    <input className="search-input" placeholder="Artist name..." onChange={(e) => setSearchKey(e.target.value)} type="text" />
                    {/* <button type="submit" >Search</button> */}
                    <Button type="submit" variant="outline-success">Search</Button>
                </form>
                : <h2>Please login</h2>

            }
        </div>
    )
}


export default Search;