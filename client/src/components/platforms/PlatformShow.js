import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import Moment from 'react-moment';
import { Button } from 'react-bootstrap';
import { PlatformConsumer } from '../../providers/PlatformProvider';
import PlatformForm from './PlatformForm';

const PlatformShow = ({ updatePlatform, deletePlatform }) => {
  const params = useParams();
  const [platform, setPlatform] = useState({ name: '', version: '', bought: '' })
  const [editing, setEdit] = useState(false)

  useEffect( () => {
    axios.get(`/api/platforms/${params.platformId}`)
      .then( res => setPlatform(res.data))
      .catch( err => console.log(err))
  }, [])

  const { name, version, bought, id } = platform
  return (
    <>
      { editing ? 
        <>
          <PlatformForm 
            {...platform}
            updatePlatform={updatePlatform}
          />
          <Button variant="warning" onClick={() => setEdit(false)}>Cancel</Button>
          <br />
        </>
        :
        <>
          <h1>Id: {params.platformId} {name}</h1>
          <h3>Version: {version}</h3>
          <h5>Bought:
            <Moment format='MM/DD/YYYY'>
              {bought}
            </Moment> 
          </h5>
          <Button 
            variant="warning" 
            onClick={() => setEdit(true)}
          >
            Edit
          </Button>
          <Button 
            variant="danger"
            onClick={() => deletePlatform(id)}
          >
            Delete
          </Button>
        </>
      }
    </>
  )
}

const ConnectedPlatformShow = (props) => (
  <PlatformConsumer>
    { value => <PlatformShow {...props} {...value} /> }
  </PlatformConsumer>
)

export default ConnectedPlatformShow;