import "bootstrap/dist/css/bootstrap.min.css";

import axios from 'axios'

import Container from 'react-bootstrap/Container'

import { Routes, Route } from 'react-router-dom'
import { useState, useEffect } from 'react'

import CartProvider from './CartContext'

import Header from './components/Header'
import NavbarComponent from "./components/Navbar";

// import pages
import Auth from './pages/Auth'
import NotFound from './pages/NotFound'
import PaymentComplete from './pages/PaymentComplete'
import ArtWorkStore from './pages/ArtWorkStore'
import Cancel from './pages/Cancel'


// localhost:3000 -> Home
// localhost:3000/success -> Success -> Home



function App() {
  const [user, setUser] = useState(null)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null);

  useEffect(() => {
    axios.get('/auth/authenticate')
      .then(res => {
        setUser(res.data.user);
        setLoading(false);
      })
      .catch(error => {
        setError(error.message || 'An error occurred during authentication');
        setLoading(false);
      });
  }, []);

  return (

    <>
      {loading ? (
        <h3 className="d-flex justify-content-center align-items-center vh-100">Loading...</h3>
      ) : (

        <>
          <Header user={user} setUser={setUser} />

          <CartProvider>
            <Container>
              <NavbarComponent></NavbarComponent>

              <Routes>



                <Route path="/register" element={<Auth isLogin={false} setUser={setUser} />} />
                <Route path="/login" element={<Auth isLogin={true} setUser={setUser} />} />

                {/* indicate what you will show based on what link the user is on */}
                <Route path="/" element={<ArtWorkStore user={user} />} />
                <Route path="/paymentcomplete" element={<PaymentComplete />} />
                <Route path="/cancel" element={<Cancel />} />

                <Route path="*" element={<NotFound />} />
              </Routes>

            </Container>
          </CartProvider>

        </>
      )}
    </>
  )
}

export default App;
