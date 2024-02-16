import { NavLink } from 'react-router-dom';
import css from './Navigation.module.css';
import { useSelector } from 'react-redux';
import { selectedIsLoggedIn } from '../../redux/Auth/authSelectors';

export const Navigation = () => {
  const isLoggedIn = useSelector(selectedIsLoggedIn);
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
      {isLoggedIn ? (
        <NavLink
          className={({ isActive }) =>
            `${css.navLink} ${isActive ? css.active : ''}`
          }
          to="/contacts"
        >
          Contacts
        </NavLink>
      ) : (
        <div className={css.containerAuth}>
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
        </div>
      )}
    </nav>
  );
};
