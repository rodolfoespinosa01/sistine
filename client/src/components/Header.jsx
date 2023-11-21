import axios from 'axios'

import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav';
import Container from 'react-bootstrap/Container'

import { NavLink, useNavigate } from 'react-router-dom'

function Header({ user, setUser }) {
  const navigate = useNavigate()

  const logout = async (e) => {
    e.preventDefault();

    await axios.get('/auth/logout')

    setUser(null)
    navigate('/')
  }

  return (
    <Navbar expand="lg" className="bg-body-tertiary bg-warning-subtle">
      <Container>
        <Navbar.Brand href="/"><img
          src="/img/logo.png"
          alt="Logo"
          style={{ width: '100px', height: 'auto' }}  // Adjust the width as needed
        /></Navbar.Brand>

        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
            {user ? (
              <>
                <p>{user.email}</p>
                <a href="/logout" onClick={logout}>Log Out</a>
              </>
            ) : (
              <>
                <NavLink to="/register">Register</NavLink>
                <span>or</span>
                <NavLink to="/login">Log In</NavLink>
              </>
            )}
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  )
}

export default Header