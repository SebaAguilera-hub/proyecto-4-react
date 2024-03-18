import 'bootstrap/dist/css/bootstrap.min.css';
import { NavBarComponent } from './components/NavBarComponent'
import { Navigate,Routes, Route } from 'react-router-dom';
import { Home } from './pages/Home';
import { About } from './pages/About';
import { Menu } from './pages/Menu';
import { Reserva } from './pages/Reserva';
import "./App.css"

function App() {
  return (
    <>
      <NavBarComponent />
      <Routes>
         <Route path="/" element={<Home />}/>
         <Route path="/about" element={<About />}/>
         <Route path="/menu" element={<Menu />}/>
         <Route path="/reservacion" element={<Reserva />}/>
      </Routes>
    </>
  )
}

export default App
