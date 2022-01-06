import { Container, Row, Col, Card, Button } from 'react-bootstrap';

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
                    <Button variant="primary">Go somewhere</Button>
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