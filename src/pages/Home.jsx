import React, {useEffect} from 'react';
import { Button } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import { doLogout } from '../redux/actions/auth';

const Home = ({history, location}) => {
  const userLogin = useSelector((state) => state.auth);
  const { isLogin } = userLogin;
  useEffect(() => {
    if(!isLogin){
      history.replace('/login')
    }
  }, [])
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
    </div>
  );
}
 
export default Home;