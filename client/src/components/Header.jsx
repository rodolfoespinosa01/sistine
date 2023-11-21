import axios from 'axios';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import Container from 'react-bootstrap/Container';
import { NavLink, useNavigate } from 'react-router-dom';

function Header({ user, setUser }) {
  const navigate = useNavigate();

  const logout = async (e) => {
    e.preventDefault();

    await axios.get('/auth/logout');

    setUser(null);
    navigate('/');
  };

  const headerStyle = {
    backgroundImage: "url('../../public/img/hero-resized-text.png')",
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    backgroundRepeat: 'no-repeat',
    paddingBottom: '325px',
    margin: '0 auto',
    maxWidth: '1200px'
  };

  const navBarStyle = {
    backgroundSize: 'contain',
    backgroundPosition: 'center',
    backgroundRepeat: 'no-repeat',
    margin: '0 auto',
    maxWidth: '1200px'
  };

  const buttonStyle = {
    display: 'flex',
    justifyContent: 'center',
  };

  return (
    <div>
      <div style={headerStyle}>
        {/* Hero Image */}
      </div>
      <Navbar expand="lg" className="bg-body-tertiary bg-warning-subtle" style={navBarStyle}>
        <Container fluid className='mx-auto'>
          <Nav className="ms-auto" style={buttonStyle}>
            {user ? (
              <>
                <Nav.Item>
                  <p>{user.email}</p>
                </Nav.Item>
                <Nav.Item>
                  <Nav.Link href="/logout" onClick={logout}>
                    Log Out
                  </Nav.Link>
                </Nav.Item>
              </>
            ) : (
              <>
                <Nav.Item>
                  <NavLink to="/register" className="nav-link">
                    Register
                  </NavLink>
                </Nav.Item>
                <Nav.Item>
                  <span className="nav-link">or</span>
                </Nav.Item>
                <Nav.Item>
                  <NavLink to="/login" className="nav-link">
                    Log In
                  </NavLink>
                </Nav.Item>
              </>
            )}
          </Nav>
        </Container>
      </Navbar>
    </div>
  );
}

export default Header;