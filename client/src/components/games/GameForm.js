import { useState, useEffect } from 'react';
import { Button, Form } from 'react-bootstrap';

const GameForm = ({ addGame, platformId, setAdd, title, id, rating, image, updateGame, setEdit }) => {
  const [game, setGame] = useState({ title: '', rating: '', image: '' })

  useEffect( () => {
    if (id) {
      setGame({ title, rating, image })
    }
  }, [])

  const handleSubmit = (e) => {
    e.preventDefault()
    if (id) {
      updateGame(platformId, id, game)
      setEdit(false)
    } else {
      addGame(platformId, game)
      setAdd(false)
    }
    setGame({ title: '', rating: '', image: '' })
  }

  return (
    <>
      <Form onSubmit={handleSubmit}>
        <Form.Group className="mb-3">
          <Form.Label>Title</Form.Label>
          <Form.Control 
            type="text" 
            name='title'
            value={game.title}
            onChange={(e) => setGame({ ...game, title: e.target.value })}
            required
          />
        </Form.Group>
        <Form.Group className="mb-3">
          <Form.Label>Rating</Form.Label>
          <Form.Select 
            aria-label="rating" 
            name='rating'
            value={game.rating}
            onChange={(e) => setGame({ ...game, rating: e.target.value })}
          >
            <option value="EC">EC</option>
            <option value="E">E</option>
            <option value="E10">E 10+</option>
            <option value="T">T</option>
            <option value="M">M</option>
            <option value="RP">RP</option>
            <option value="AO">AO</option>
          </Form.Select>
        </Form.Group>
        <Form.Group className="mb-3">
          <Form.Label>Image</Form.Label>
          <Form.Control 
            type="text" 
            name='image'
            value={game.image}
            onChange={(e) => setGame({ ...game, image: e.target.value })}
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

export default GameForm;