import 'bootstrap/dist/css/bootstrap.min.css';
import { NavBarComponent } from './components/NavBarComponent'
import { Navigate,Routes, Route } from 'react-router-dom';
import { Home } from './pages/Home';
import { Menu } from './pages/Menu';
import { Reserva } from './pages/Reserva';
import "./App.css"
import { Footer } from './components/Footer';

function App() {
  return (
    <>
      <NavBarComponent />
      <Routes>
         <Route path="/" element={<Home />}/>
         <Route path="/menu" element={<Menu />}/>
         <Route path="/reservacion" element={<Reserva />}/>
      </Routes>
      <Footer />
    </>
  )
}

export default App
