import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

export const GameContext = React.createContext();
export const GameConsumer = GameContext.Consumer;

const GameProvider = ({ children }) => {
  const [games, setGames] = useState([])

  const getAllGames = (platformId) => {
    axios.get(`/api/platforms/${platformId}/games`)
      .then( res => setGames(res.data))
  }

  return (
    <GameContext.Provider value={{
      games,
      getAllGames: getAllGames, 
    }}>
      { children }
    </GameContext.Provider>
  )
}

export default GameProvider;