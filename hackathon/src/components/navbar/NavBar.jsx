import "./NavBar.scss";
import { NavLink } from "react-router-dom";
import Avatar from "./../../assets/icons/avatar.svg";
import Exit from "./../../assets/icons/exit.svg";
import PropTypes from "prop-types";
const NavBar = ({ show, setShow, user, exit }) => {
  const handleClick = () => {
    setShow((current) => !current);
  };
  const scrollContact = () => {
    setShow((current) => !current);
    window.scrollTo({ top: document.body.scrollHeight, behavior: "smooth" });
  };
  return (
    <div className="wrapper">
      <button className={show ? "menu__btn" : "menu__btn menu__btn--active"} onClick={handleClick}>
        <span></span>
      </button>
      <nav className="menu">
        <ul className={show ? "menu__list" : "menu__list menu__list--active"}>
          <li className="menu__list-item">
            <div>
              <img className="menu__list-img" src={Avatar} alt="icons avatar" />
              <div className="menu__list-info">
                <p className="menu__fullname">{`${user.user_first_name} ${user.user_last_name}`}</p>
                <p className="menu__email">{user.user_email}</p>
              </div>
            </div>
            <div className="header__user-exit">
              <img src={Exit} alt="exit icon" />
              <p className="exit__text" onClick={exit}>
                Выход
              </p>
            </div>
          </li>
          <hr />
          <li className="menu__list-item">
            <NavLink className="menu__list-link" to="/" onClick={handleClick}>
              Главная
            </NavLink>
          </li>
          <hr />
          <li className="menu__list-item">
            <NavLink className="menu__list-link" to="/events" onClick={handleClick}>
              Мероприятия
            </NavLink>
          </li>
          <hr />
          <li className="menu__list-item">
            <NavLink className="menu__list-link" to="/statement" onClick={handleClick}>
              Анонсы
            </NavLink>
          </li>
          <hr />
          <li className="menu__list-item">
            <NavLink className="menu__list-link" to="#" onClick={scrollContact}>
              Контакты
            </NavLink>
          </li>
          <hr />
        </ul>
      </nav>
    </div>
  );
};
NavBar.propTypes = {
  show: PropTypes.bool,
  setShow: PropTypes.func,
  user: PropTypes.object,
  exit: PropTypes.func,
};

export default NavBar;
