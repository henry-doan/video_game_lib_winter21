import { useState, useEffect } from 'react';
import { Form, Button } from 'react-bootstrap';

const NoteForm = ({ gameId, addNote, setAdd, platformId, id, title, body, updateNote, setEditing }) => {
  const [note, setNote] = useState({ title: '', body: '' })

  useEffect( () => {
    if (id) {
      setNote({ title, body })
    }
  }, [])

  const handleSubmit = (e) => {
    e.preventDefault()
    if (id) {
      updateNote(platformId, gameId, id, note)
      setEditing(false)
    } else {
      addNote(platformId, gameId, note)
      setAdd(false)
    }
    setNote({ title: '', body: '' })
  }

  return (
    <>
      <Form onSubmit={handleSubmit}>
        <Form.Group className="mb-3">
          <Form.Label>Title</Form.Label>
          <Form.Control 
            type="text"
            name="title"
            value={note.title}
            onChange={(e) => setNote({...note, title: e.target.value})}
            required
          />
        </Form.Group>
        <Form.Group className="mb-3">
          <Form.Label>Body</Form.Label>
          <Form.Control
            as="textarea"
            row={3} 
            name="body"
            value={note.body}
            onChange={(e) => setNote({...note, body: e.target.value})}
            required
          />
        </Form.Group>
        <Button variant="primary" type="submit">
          Submit
        </Button>
      </Form>
    </>
  )
}

export default NoteForm;