import React, { ReactElement } from 'react';
import { Container, Nav } from 'react-bootstrap';
import PlaceList from './components/pages/places/Places';
import { BrowserRouter, Redirect, Route } from 'react-router-dom';
import LoginBox from './components/pages/login/LoginBox';
import PlaceForm from './components/pages/places/CreatePlace';
import { useAppDispatch } from './types/hooks';
import { userUnset } from './redux/actions/user';

export default function App (): ReactElement {
  const dispatch = useAppDispatch();

  const token = localStorage.getItem('token');

  const logout = () => {
    return dispatch(userUnset());
  };
  return (
    <BrowserRouter>
      <Container className="mt-5">
        <Nav className="justify-content-end">
          <Nav.Item>
            <Nav.Link href="/places" className={location.pathname === '/places' ? 'text-black-50' : ''}>Home</Nav.Link>
          </Nav.Item>
          {
            !!token &&
            <Nav.Item>
              <Nav.Link href="/places/add" className={location.pathname === '/places/add' ? 'text-black-50' : ''}>Add
                place</Nav.Link>
            </Nav.Item>
          }
          {
            !token &&
            <Nav.Item>
              <Nav.Link href="/login" className={location.pathname === '/login' ? 'text-black-50' : ''}>Login</Nav.Link>
            </Nav.Item>
          }
          {
            !!token &&
            <Nav.Item>
              <a className="nav-link" href="#" onClick={logout}>Logout</a>
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
    </BrowserRouter>
  );
}
