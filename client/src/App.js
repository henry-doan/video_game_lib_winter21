import { Routes, Route } from 'react-router-dom';
import Home from './components/shared/Home';
import Nomatch from './components/shared/Nomatch';
import { Container } from 'react-bootstrap';
import MainNavbar from './components/shared/MainNavbar';
import Login from './components/auth/Login';
import Register from './components/auth/Register';
import FetchUser from './components/auth/FetchUser';
import ProtectedRoute from './components/auth/ProtectedRoute';
import Profile from './components/auth/Profile';
import Platforms from './components/platforms/Platforms';
import PlatformShow from './components/platforms/PlatformShow';
import GameShow from './components/games/GameShow';

const App = () => (
  <>
    <MainNavbar />
    <FetchUser>
      <Container>
        <>
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/' element={<ProtectedRoute />}>
              <Route path='/profile' element={<Profile />} />
              <Route path='/platforms' element={<Platforms />} />
              <Route path='/platforms/:platformId' element={<PlatformShow />} />
              <Route path='/:platformId/games/:gameId' element={<GameShow />} />
            </Route>
            <Route path='/login' element={<Login />} />
            <Route path='/register' element={<Register />} />
            <Route path='/*' element={<Nomatch />} />
          </Routes>
        </>
      </Container>
    </FetchUser>
  </>
)

export default App;
