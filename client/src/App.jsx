import Header from './components/Header.jsx';
import Footer from './components/Footer.jsx';
import Card from './components/Card.jsx';
import LoginForm from './components/LoginForm.jsx';

function App() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />

      <LoginForm />
        <Card />
        
      <Footer />
    </div>
  );
}

export default App
