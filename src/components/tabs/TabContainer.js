import { useSelector } from "react-redux"
import Home from "./Home/Home"
import Artists from "./Artist/Artists"
import Albums from "./Album/Albums"
import Login from "../../auth/Login";
import HeroImg from "../utilities/HeroImg";
import records from "../../images/records.jpg"
import player from "../../images/player.jpg"
import guitar from "../../images/guitar.jpg"

import "./tabs.css"

const TabContainer = () => {
    const { tabChosen, userToken } = useSelector((state) => state.user)

    if (userToken) {
        if (tabChosen === "albums") {
            return (
                <div className="tab-wrapper">
                    <HeroImg picture={player} />
                    <Albums />
                </div>

            )
        }
        if (tabChosen === "artists") {
            return (
                <div className="tab-wrapper">
                    <HeroImg picture={guitar} />
                    <Artists />
                </div>
            )
        }
        return (
            <div className="tab-wrapper">
                <HeroImg picture={records} />
                <Home />

            </div>
        )
    } else {
        return (
            <div className="tab-wrapper">
                <HeroImg picture={records} />
                <Home />

            </div>
        )
    }


}

export default TabContainer