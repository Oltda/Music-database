
import Accordion from 'react-bootstrap/Accordion';
import "./accordion.css"
import Button from 'react-bootstrap/Button';

const AccordionMenu = ({ album }) => {

    return (


        <Accordion defaultActiveKey="0" flush>
            <Accordion.Item eventKey="0">
                <Accordion.Header>{album.name}</Accordion.Header>
                <Accordion.Body className='accordion-img-wrap'>



                    <a href={album.external_urls.spotify}>
                        <img className='album-img' src={album.images[1]?.url} alt="" />
                    </a>

                </Accordion.Body>
            </Accordion.Item>
            <Accordion.Item eventKey="1">
                <Accordion.Header>Details</Accordion.Header>
                <Accordion.Body>
                    <div className='artist-name-wrap'>
                        <p className='artist-name'>
                            <strong>Artist:</strong>&nbsp;{album.artists[0]?.name}
                        </p>
                        <p className='artist-name'>
                            <strong>Release Date:</strong>&nbsp;{album.release_date}
                        </p>
                        <p className='artist-name'>
                            <strong>Number of tracks:</strong>&nbsp;{album.total_tracks}
                        </p>
                        <p className='artist-name'>
                            <strong>Album type:</strong>&nbsp;{album.album_type}
                        </p>
                    </div>

                </Accordion.Body>
            </Accordion.Item>
        </Accordion>
    )
}

export default AccordionMenu;