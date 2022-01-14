import { useState, useEffect } from 'react';
import { NoteConsumer } from '../../providers/NoteProvider';
import NoteList from './NoteList';
import NoteForm from './NoteForm';
import { Modal, Button } from 'react-bootstrap';
import { useParams } from 'react-router-dom';

const Notes = ({ notes, getAllNotes, gameId, addNote }) => {
  const [adding, setAdd] = useState(false)

  const params = useParams()

  useEffect( () => {
    getAllNotes(gameId)
  }, [])

  return (
    <>
      <br />
      <Button variant="primary" onClick={() => setAdd(true)}>
        + Notes
      </Button>
      <br />

      <Modal show={adding} onHide={() => setAdd(false)}>
        <Modal.Header closeButton>
          <Modal.Title>Add Note</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <NoteForm 
            platformId={params.platformId}
            addNote={addNote}
            gameId={gameId}
            setAdd={setAdd}
          />
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={() => setAdd(false)}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
      <NoteList 
        platformId={params.platformId}
        notes={notes}
        gameId={gameId}
      />
    </>
  )
}

const ConnectedNotes = (props) => (
  <NoteConsumer>
    { value => <Notes {...props} {...value} /> }
  </NoteConsumer>
)

export default ConnectedNotes;