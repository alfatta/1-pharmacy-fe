import React from 'react';
import { Button } from 'react-bootstrap';
import { useDispatch } from 'react-redux';
import { doLogout } from '../redux/actions/auth';

const Home = ({history, location}) => {
    const dispatch = useDispatch()
    const _doLogout = () => {
        dispatch(doLogout((err, res) => {
          if (err) {
            console.error(err)
          } else {
            console.log(res)
            history.replace('/login')
          }
        }))
      }
  return (
    <div>
      <h1>
        Ini halaman Home
      </h1>
      <Button variant="primary" onClick={ _doLogout }>
          Logout
      </Button>
    </div>
  );
}
 
export default Home;