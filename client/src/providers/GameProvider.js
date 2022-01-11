import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

export const GameContext = React.createContext();
export const GameConsumer = GameContext.Consumer;

const GameProvider = ({ children }) => {
  const [games, setGames] = useState([])

  const navigate = useNavigate()

  const getAllGames = (platformId) => {
    axios.get(`/api/platforms/${platformId}/games`)
      .then( res => setGames(res.data))
      .catch( err => console.log(err))
  }

  const addGame = (platformId, game) => {
    axios.post(`/api/platforms/${platformId}/games`, { game } )
      .then( res => setGames([...games, res.data]))
      .catch( err => console.log(err))
  }

  const updateGame = (platformId, id, game) => {
    axios.put(`/api/platforms/${platformId}/games/${id}`, { game })
      .then( res => {
        const newUpdatedGames = games.map( g => {
          if (g.id === id) {
            return res.data
          }
          return g
        })
        setGames(newUpdatedGames)
        navigate(`/platforms/${platformId}`)
      })
      .catch( err => console.log(err))
  }

  return (
    <GameContext.Provider value={{
      games,
      getAllGames: getAllGames, 
      addGame: addGame, 
      updateGame: updateGame, 
    }}>
      { children }
    </GameContext.Provider>
  )
}

export default GameProvider;