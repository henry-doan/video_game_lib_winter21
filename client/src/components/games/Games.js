import { useEffect } from 'react';
import { GameConsumer } from '../../providers/GameProvider';
import GameList from './GameList';
import { useParams } from 'react-router-dom';

const Games = ({ getAllGames, games }) => {
  const params = useParams()

  useEffect( () => {
    getAllGames(params.platformId)
  }, [])

  return (
    <>
      <h1>All Games</h1>
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