import { Container, Row, Col, Card, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const GameList = ({ games, platformId }) => {

  return (
    <>
      <Container>
        <Row xs={1} md={3}>
          { games.map( g => 
              <Col>
                <Card style={{ width: '18rem' }}>
                  <Card.Img variant="top" src={g.image} />
                  <Card.Body>
                    <Card.Title>{g.title}</Card.Title>
                    <Card.Text>
                      Rating: {g.rating}
                    </Card.Text>
                    <Link to={`/${platformId}/games/${g.id}`}>
                      <Button variant="primary">Show</Button>
                    </Link>
                  </Card.Body>
                </Card>
              </Col>
            )
          }
        </Row>
      </Container>
    </>
  )
}

export default GameList;