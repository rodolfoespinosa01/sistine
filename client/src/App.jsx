import "bootstrap/dist/css/bootstrap.min.css";
import NavbarComponent from "./components/Navbar";
import { Container } from 'react-bootstrap'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Cancel from './pages/Cancel'
import ArtWorkStore from './pages/ArtWorkStore'
import PaymentComplete from './pages/PaymentComplete'
import CartProvider from './CartContext'


// localhost:3000 -> Home
// localhost:3000/success -> Success -> Home



function App() {
  return (
    <CartProvider>
      <Container>
        <NavbarComponent></NavbarComponent>
        <BrowserRouter>
          <Routes>

            {/* indicate what you will show based on what link the user is on */}
            <Route index element={<ArtWorkStore />} />
            <Route path="paymentcomplete" element={<PaymentComplete />} />
            <Route path="cancel" element={<Cancel />} />
          </Routes>
        </BrowserRouter>
      </Container>
    </CartProvider>
  )
}

export default App;
