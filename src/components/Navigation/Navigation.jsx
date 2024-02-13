import { NavLink } from "react-router-dom"
import css from './Navigation.module.css';
export const Navigation=   () => {
  
  return (
    <nav className={css.headerNav}>
    <NavLink
      className={({ isActive }) =>
        `${css.navLink} ${isActive ? css.active : ''}`
      }
      to="/"
    >
      Home
    </NavLink>
    <NavLink
      className={({ isActive }) =>
        `${css.navLink} ${isActive ? css.active : ''}`
      }
      to="/register"
    >
      Register
      </NavLink>
      <NavLink
      className={({ isActive }) =>
        `${css.navLink} ${isActive ? css.active : ''}`
      }
      to="/login"
    >
      Login
    </NavLink>
  </nav>
  )
}