import Login from "../auth/Login"
import { chooseTab } from '../state/store'
import { useSelector, useDispatch } from "react-redux"
import { useEffect } from "react"
import Nav from 'react-bootstrap/Nav';
import NavDropdown from 'react-bootstrap/NavDropdown';

const Navbar = () => {

    const token = useSelector((state) => state.user.userToken)
    const dispatch = useDispatch()

    useEffect(() => {
    }, [token])



    return (
        <div>
            <Nav variant="tabs" defaultActiveKey="/home">
                <Nav.Item>
                    <Nav.Link onClick={(e) => {
                        e.preventDefault()
                        dispatch(chooseTab("home"))

                    }} href="/home">About</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                    <Nav.Link onClick={() => dispatch(chooseTab("artists"))} eventKey="link-1">Artist</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                    <Nav.Link onClick={() => dispatch(chooseTab("albums"))} eventKey="link-2">Albums</Nav.Link>
                </Nav.Item>
                <Login />
            </Nav>

        </div>
    )
}

export default Navbar