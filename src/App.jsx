import { BrowserRouter, Routes, Route, NavLink } from 'react-router';
import Home from './components/Home';
import About from './components/About';
import Contact from './components/Contact';
import './App.css';

// Активне посилання отримує клас "active" — стилізується в App.css
function getNavLinkClass({ isActive }) {
  return isActive ? 'active' : '';
}

function App() {
  return (
    <BrowserRouter>
      <div id="homework">
        <h1>Домашнє завдання: React Router</h1>

        <nav>
          <NavLink to="/" end className={getNavLinkClass}>
            Головна
          </NavLink>
          <NavLink to="/about" className={getNavLinkClass}>
            Про нас
          </NavLink>
          <NavLink to="/contact" className={getNavLinkClass}>
            Контакти
          </NavLink>
        </nav>

        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </main>
      </div>
    </BrowserRouter>
  );
}

export default App;
