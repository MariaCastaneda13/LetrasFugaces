import CarWidget from '../CarWidget/CarWidget';
import './NavBar.css';
import {Link, NavLink} from "react-router-dom";

const NavBar = () => {
  return (
    <header>
      
      <Link to="/">
        <h1>Letras fugaces</h1>
        </Link>
        <nav>
        <ul>
            <li>
              <NavLink to={"/categoria/2"}>          
              Ciencias
              </NavLink>
              </li>
            <li>
              <NavLink to={"/categoria/1"}>
              Ficción
              </NavLink>
              </li> 
            <li>
              <NavLink to={"/categoria/2"}>
              Medicina
              </NavLink>
              </li>
            <li>
              <NavLink to={"/categoria/1"}>
              Novelas
              </NavLink>
              </li>
        </ul>
    
    </nav>
    <CarWidget/>
    </header>
    
  )
}

export default NavBar