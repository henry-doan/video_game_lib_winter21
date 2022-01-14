import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

export const NoteContext = React.createContext();
export const NoteConsumer = NoteContext.Consumer;

const NoteProvider = ({ children }) => {
  const [notes, setNotes] = useState([])
  
  const navigate = useNavigate()

  const getAllNotes = (gameId) => {
    axios.get(`/api/games/${gameId}/notes`)
      .then( res => setNotes(res.data))
      .catch( err => console.log(err))
  }

  const addNote = (platformId, gameId, note) => {
    axios.post(`/api/games/${gameId}/notes`, { note })
      .then( res => {
        navigate(`/${platformId}/games/${gameId}`)
        setNotes([...notes, res.data])
      })
      .catch( err => console.log(err))
  }

  const updateNote = (platformId, gameId, id, note) => {
    axios.put(`/api/games/${gameId}/notes/${id}`, { note })
      .then( res => {
        const newUpdatedNotes = notes.map( n => {
          if (n.id === id) {
            return res.data 
          }
          return n
        })
        setNotes(newUpdatedNotes)
        navigate(`/${platformId}/games/${gameId}`)
      })
      .catch( err => console.log(err))
  }

  const deleteNote = (platformId, gameId, id) => {
    axios.delete(`/api/games/${gameId}/notes/${id}`)
      .then( res => {
        setNotes(notes.filter(n => n.id !== id))
        navigate(`/${platformId}/games/${gameId}`)
      })
      .catch( err => console.log(err))
  }


  return(
    <NoteContext.Provider value={{
      notes,
      getAllNotes: getAllNotes, 
      addNote: addNote, 
      updateNote: updateNote,
      deleteNote: deleteNote
    }}>
      { children }
    </NoteContext.Provider>
  )
}

export default NoteProvider;