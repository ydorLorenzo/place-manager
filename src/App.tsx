import React, { ReactElement, useEffect, useState } from 'react';
import { Container, Nav } from 'react-bootstrap';
import PlaceList from './components/pages/places/Places';
import { Link, Redirect, Route, useHistory, useLocation } from 'react-router-dom';
import LoginBox from './components/pages/login/LoginBox';
import PlaceForm from './components/pages/places/CreatePlace';
import { logoutAction } from './redux/actions/auth';
import { useSelector } from 'react-redux';
import { RootState } from './redux/store';
import { useAppDispatch } from './types/hooks';

export default function App (): ReactElement {

  const { authenticated } = useSelector((state: RootState) => state.auth);
  const [token, setToken] = useState<string | null>('not-empty');
  const history = useHistory();
  const pathname = usePathname();
  const dispatch = useAppDispatch();

  useEffect(() => {
    setToken(localStorage.getItem('token'));
    if (!token && !authenticated) history.push('/login');
    if (authenticated && pathname === '/login') {
      history.push('/places');
    }
  }, [authenticated]);

  const onLogout = (e: any) => {
    e.preventDefault();
    dispatch(logoutAction());
  };

  return (
    <Container className="mt-5">
      <Nav className="justify-content-end">
        <Nav.Item>
          <Link to="/places" className='nav-link'>
            Home
          </Link>
        </Nav.Item>
        {
          (!!token || authenticated) &&
          <Nav.Item>
            <Link to="/places/add" className='nav-link'>Add
              place</Link>
          </Nav.Item>
        }
        {
          !token &&
          <Nav.Item>
            <Link to="/login" className='nav-link'>Login</Link>
          </Nav.Item>
        }
        {
          (!!token || authenticated) &&
          <Nav.Item>
            <a href="" className="nav-link" onClick={onLogout}>Logout</a>
          </Nav.Item>
        }
      </Nav>
      <Container>
        <Route path="/" exact render={() => (<Redirect to="/places"/>)}/>
        <Route path="/login" component={LoginBox}/>
        <Route path="/places" exact component={PlaceList}/>
        <Route path="/places/add" component={PlaceForm}/>
      </Container>
    </Container>
  );
}

function usePathname() {
  const location = useLocation();
  return location.pathname;
}
