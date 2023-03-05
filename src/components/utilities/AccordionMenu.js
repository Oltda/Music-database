
import Accordion from 'react-bootstrap/Accordion';
import "./accordion.css"
import Button from 'react-bootstrap/Button';

const AccordionMenu = ({ album }) => {

    return (


        <Accordion defaultActiveKey="0" flush>
            <Accordion.Item eventKey="0">
                <Accordion.Header>{album.name}</Accordion.Header>
                <Accordion.Body className='accordion-img-wrap'>
                    <div className='artist-name-wrap'>
                        <p className='artist-name'>
                            <strong>Artist:</strong> {album.artists[0]?.name}
                        </p>
                        <Button href={album.external_urls.spotify} variant="success">Spotify</Button>
                    </div>
                    <img src={album.images[1]?.url} alt="" />
                </Accordion.Body>
            </Accordion.Item>
            <Accordion.Item eventKey="1">
                <Accordion.Header>Details</Accordion.Header>
                <Accordion.Body>
                    <div className='artist-name-wrap'>
                        <p className='artist-name'>
                            <strong>Release Date:</strong> {album.release_date}
                        </p>
                        <p className='artist-name'>
                            <strong>Number of tracks:</strong> {album.total_tracks}
                        </p>
                    </div>

                </Accordion.Body>
            </Accordion.Item>
        </Accordion>
    )
}

export default AccordionMenu;