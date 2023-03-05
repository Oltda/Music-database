import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from "react-redux"
import { login, logout } from '../state/store'
import Button from 'react-bootstrap/Button';
import Nav from 'react-bootstrap/Nav';
const Login = () => {
    // const CLIENT_ID = process.env.REACT_APP_CLIENT_ID;
    // const REDIRECT_URI = process.env.REACT_APP_REDIRECT_URI
    // const AUTH_ENDPOINT = process.env.REACT_APP_AUTH_ENDPOINT
    // const RESPONSE_TYPE = process.env.REACT_APP_RESPONSE_TYPE


    const token = useSelector((state) => state.user.userToken)
    const dispatch = useDispatch();

    useEffect(() => {

        console.log(process.env.REACT_APP_REDIRECT_URI)
        const hash = window.location.hash
        let token = window.localStorage.getItem("token")

        if (!token && hash) {
            token = hash.substring(1).split('&').find(elem => elem.startsWith("access_token")).split("=")[1]

            window.location.hash = ""
            window.localStorage.setItem("token", token)

        }

        dispatch(login(token))

    }, [])

    const logoutUser = () => {

        dispatch(logout())
        window.localStorage.removeItem("token")
    }

    return (
        <>

            {!token ? (
                <Nav.Link href={`${process.env.REACT_APP_AUTH_ENDPOINT}?client_id=${process.env.REACT_APP_CLIENT_ID}&redirect_uri=${process.env.REACT_APP_REDIRECT_URI}&response_type=${process.env.REACT_APP_RESPONSE_TYPE}`}>Login</Nav.Link>

            ) : (
                <Nav.Link onClick={logoutUser}>Logout</Nav.Link>
            )}
            {/* <a className="btn btn-primary" href={`${AUTH_ENDPOINT}?client_id=${CLIENT_ID}&redirect_uri=${REDIRECT_URI}&response_type=${RESPONSE_TYPE}`} role="button">Login</a> */}

        </>
    )
}

export default Login;