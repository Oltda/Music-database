
import pink from "../../../images/sunset.png"
import records from "../../../images/records.jpg"
import spotify from "../../../images/spotify.png"
import "../home.css"



const Home = () => {

    return (
        <div className="home-wrapper">

            <div className="infor-wrapper">
                <h1>Look up artists & albums.</h1>
                <p>This website integrates Spotify API allowing you to obtain information from its database.</p>
                <p>For more information check <a className="spotify-link" href="https://developer.spotify.com/">Spotify&nbsp;for&nbsp;developers</a></p>
            </div>

        </div>
    )
}

export default Home;