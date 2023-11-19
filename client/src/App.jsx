import "bootstrap/dist/css/bootstrap.min.css";
import NavbarComponent from "./components/Navbar";
import { Container } from 'react-bootstrap'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Cancel from './pages/Cancel'
import ArtStore from './pages/ArtStore'
import PaymentComplete from './pages/PaymentComplete'


// localhost:3000 -> Home
// localhost:3000/success -> Success -> Home



function App() {
  return <Container>
    <NavbarComponent></NavbarComponent>
    <BrowserRouter>
      <Routes>
        <Route index element={<ArtStore />} />
        <Route path="paymentcomplete" element={<PaymentComplete />} />
        <Route path="cancel" element={<Cancel />} />
      </Routes>
    </BrowserRouter>
  </Container>
}

export default App;
