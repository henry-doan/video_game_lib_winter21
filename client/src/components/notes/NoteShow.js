import { useState, useEffect } from 'react';
import { NoteConsumer } from '../../providers/NoteProvider';
import axios from 'axios';
import { useParams, useLocation } from 'react-router-dom';
import { Card, Button, Modal } from 'react-bootstrap';
import NoteForm from './NoteForm';

const NoteShow = ({ updateNote, deleteNote }) => {
  const params = useParams()
  const { state } = useLocation()

  const [note, setNote] = useState({ title: '', body: '' })
  const [editing, setEditing] = useState(false)

  useEffect( () => {
    axios.get(`/api/games/${params.gameId}/notes/${params.noteId}`)
      .then( res => setNote(res.data))
      .catch(err => console.log(err))
  }, [])

  const { title, body } = note
  return (
    <>
      <Card>
        <Card.Header as="h5">Note</Card.Header>
        <Card.Body>
          <Card.Title>{title}</Card.Title>
          <Card.Text>
            {body}
          </Card.Text>
          <Button variant="primary" onClick={() => setEditing(true)}>Edit</Button>
          <Button variant="primary" onClick={() => deleteNote(state.platformId, params.gameId, params.noteId)}>Delete</Button>

          <Modal show={editing} onHide={() => setEditing(false)}>
            <Modal.Header closeButton>
              <Modal.Title>Edit Note</Modal.Title>
            </Modal.Header>
            <Modal.Body>
              <NoteForm 
                updateNote={updateNote}
                {...note}
                id={params.noteId}
                gameId={params.gameId}
                setEditing={setEditing}
                platformId={state.platformId}
              />
            </Modal.Body>
            <Modal.Footer>
              <Button variant="secondary" onClick={() => setEditing(false)}>
                Close
              </Button>
            </Modal.Footer>
          </Modal>
        </Card.Body>
      </Card>
    </>
  )
}

const ConnectedNoteShow = (props) => (
  <NoteConsumer>
    { value => <NoteShow {...props} {...value} />}
  </NoteConsumer>
)

export default ConnectedNoteShow;