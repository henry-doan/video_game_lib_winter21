import { Container, Row, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const NoteList = ({ notes, gameId, platformId }) => (
  <>
    <h1>All Notes</h1>
    <Container>
      <Row>
        { 
          notes.map( n => 
            <Col md={6}>
              <Link 
                to={`/${gameId}/notes/${n.id}`}
                state={{ platformId: platformId }}
              >
                {n.title}
              </Link>
            </Col>
          ) 
        }
      </Row>
    </Container>
  </>
)

export default NoteList;