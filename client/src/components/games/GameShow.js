import { GameConsumer } from '../../providers/GameProvider';
import axios from 'axios';
import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { Image, Modal, Button } from 'react-bootstrap';
import GameForm from './GameForm';
import Notes from '../notes/Notes';

const GameShow = ({ updateGame, deleteGame }) => {
  const params = useParams()
  const [game, setGame] = useState({ title: '', image: '', rating: '' })
  const [editing, setEdit] = useState(false)

  useEffect(() => {
    axios.get(`/api/platforms/${params.platformId}/games/${params.gameId}`)
      .then( res => setGame(res.data))
      .catch( err => console.log(err))
  }, [])

  const { title, image, rating } = game
  return (
    <>
      <h1>{title}</h1>
      <h3>Rated: {rating}</h3>
      <Image src={image} roundedCircle style={{ width: '250px'}} />
      <Button variant="warning" onClick={() => setEdit(true)}>
        Edit
      </Button>
      <Button variant="danger" onClick={() => deleteGame(params.platformId, params.gameId)}>
        Delete
      </Button>
      <Notes gameId={params.gameId} />


      <Modal show={editing} onHide={() => setEdit(false)}>
        <Modal.Header closeButton>
          <Modal.Title>Editing</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <GameForm
            {...game}
            platformId={params.platformId}
            id={params.gameId}
            updateGame={updateGame}
            setEdit={setEdit}
          />
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={() => setEdit(false)}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  )
}

const ConnectedGameShow = (props) => (
  <GameConsumer>
    { value => <GameShow {...props} {...value} />}
  </GameConsumer>
)

export default ConnectedGameShow;