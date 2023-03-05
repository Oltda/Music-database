//import records from '../../images/records.jpg'
import "./utilities.css"

const HeroImg = ({ picture }) => {

    return (
        <div className='hero-wrapper'>
            <div className="foreground" ></div>
            <img src={picture} alt="" />
            <h1 className="main-heading">Music Database</h1>
        </div>
    )
}

export default HeroImg;