import { NavLink } from "react-router-dom";

function Navbar (){
    return (
        <nav className='navbar'>
          <span className="menu"><i className="fa-solid fa-bars"></i></span>
          <ul>
            <NavLink to='/'><li>
              Acceuil
            </li></NavLink>
            <NavLink to='/test'><li>
              Cartes
            </li></NavLink>
            <NavLink to='/performances'><li>
              Performances
            </li></NavLink>
          </ul>
          <button> Log out</button>
      </nav>
    )
} 

export default Navbar;

