import "./footer.css"


const Footer = () => {


    return (
        <div className="footer">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
                <path fill="#2d8dd2" d="M0,224L60,208C120,192,240,160,360,138.7C480,117,600,107,720,122.7C840,139,960,181,1080,176C1200,171,1320,117,1380,90.7L1440,64L1440,320L1380,320C1320,320,1200,320,1080,320C960,320,840,320,720,320C600,320,480,320,360,320C240,320,120,320,60,320L0,320Z">
                </path>
            </svg>
            <div className='footer-info-wrap large'>
                <div className="contacts" >
                    <p>Contact</p>
                    <p>|</p>
                    <p>Github</p>
                    <p>|</p>
                    <p>Linkedin</p>
                </div>
                <div>©2023 | Daniel Olt</div>
            </div>

            <div className="footer-bottom phone">
                <div>Contact | Github | Linkedin</div>
                <div>©2023 | Daniel Olt</div>
            </div>
        </div>
    )
}
export default Footer;