import CarWidget from '../CarWidget/CarWidget';
import './NavBar.css';

const NavBar = () => {
  return (
    <header>
        <h1>Letras fugaces</h1>
        <nav>
        <ul>
            <li>Biografías</li>
            <li>Ciencias</li>
            <li>Derecho</li>
            <li>Ficción</li>
            <li>Historia</li>
            <li>Medicina</li>
            <li>Novelas</li>
            <li>Superación personal</li>
        </ul>
    </nav>
    <CarWidget/>
    </header>
    
  )
}

export default NavBar