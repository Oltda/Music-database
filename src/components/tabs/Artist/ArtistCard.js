import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import "./artist.css"
import anonym from "../../../images/anonym.jpg"

function ArtistCard({ result }) {



    const getImg = () => {
        return result.images[0] ? result.images[0].url : anonym;
    }


    return (

        <Card className='card' style={{ width: '15rem' }}>
            <div className='card-img-wrap'>
                <Card.Img variant="top" src={getImg()} />
            </div>

            <Card.Body>
                <Card.Title>{result.name}</Card.Title>
                <Card.Text className='card-text'>
                    {result.genres.map((genre, index) => (
                        <span key={index} className='genre'>{genre}</span>
                    ))}
                </Card.Text>
                <Button href={result.external_urls.spotify} variant="primary">Learn more</Button>
            </Card.Body>
        </Card>
    );
}

export default ArtistCard;