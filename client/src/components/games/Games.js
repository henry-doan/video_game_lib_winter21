import { useEffect, useState } from 'react';
import { GameConsumer } from '../../providers/GameProvider';
import GameList from './GameList';
import { useParams } from 'react-router-dom';
import GameForm from './GameForm';
import { Button, Modal } from 'react-bootstrap';

const Games = ({ getAllGames, games, addGame }) => {
  const [adding, setAdd] = useState(false);

  const params = useParams()

  useEffect( () => {
    getAllGames(params.platformId)
  }, [])

  return (
    <>
      <h1>All Games</h1>
      <Button variant="primary" onClick={() => setAdd(true)}>
        +
      </Button>

      <Modal show={adding} onHide={() => setAdd(false)}>
        <Modal.Header closeButton>
          <Modal.Title>Add Game</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <GameForm
            addGame={addGame}
            platformId={params.platformId}
            setAdd={setAdd}
          />
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={() => setAdd(false)}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
      <GameList games={games} platformId={params.platformId} />
    </>
  )
}

const ConnectedGames = (props) => (
  <GameConsumer>
    { value => <Games {...props} {...value} />}
  </GameConsumer>
)

export default ConnectedGames;