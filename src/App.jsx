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
         <Route path="/proyecto-4-react/" element={<Home />}/>
         <Route path="/proyecto-4-react/menu" element={<Menu />}/>
         <Route path="/proyecto-4-react/reservacion" element={<Reserva />}/>
      </Routes>
      <Footer />
    </>
  )
}

export default App
