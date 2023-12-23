import Logo1 from "./../../assets/logo/logo-1.png";
import Logo2 from "./../../assets/logo/logo-2.png";
import Avatar from "./../../assets/icons/avatar.svg";
import Exit from "./../../assets/icons/exit.svg";
import styles from "./Header.module.scss";
import { Link } from "react-router-dom";
import { NavLink, useLocation, useNavigate } from "react-router-dom";
import NavBar from "../navbar/NavBar";
import { useState } from "react";
import useWidth from "./../../hooks/useWidth";
const Header = () => {
  const [show, setShow] = useState(true);
  const { pathname } = useLocation();
  const user = localStorage.getItem("user") ? JSON.parse(localStorage.getItem("user")) : null;
  const navigate = useNavigate();
  const exit = () => {
    localStorage.removeItem("user");
    window.location.reload();
  };
  const { width } = useWidth();
  const scrollContact = () => {
    window.scrollTo({ top: document.body.scrollHeight, behavior: "smooth" });
  };
  return (
    <header className={styles.header__container}>
      <div className={styles["header__top-logo"]}>
        <Link to="/">
          <img src={Logo1} alt="logo" className={styles.header__logo} />
        </Link>
        <Link to="/">
          <img src={Logo2} alt="logo" className={styles.header__logo} />
        </Link>
        <h2 className={styles["header__logo-text"]}>
          SFEDU <span>.Event</span>
        </h2>
      </div>
      <nav className={styles.menu}>
        <ul className={styles.header__menu}>
          <li className={styles["header__menu-item"]}>
            <NavLink className={pathname === "/" ? styles.active : ""} to="/">
              Главная
            </NavLink>
          </li>
          <li className={styles["header__menu-item"]}>
            <NavLink className={pathname === "/events" ? styles.active : ""} to="/events">
              Мероприятия
            </NavLink>
          </li>
          <li className={styles["header__menu-item"]}>
            <NavLink className={pathname === "/calendar" ? styles.active : ""} to="/calendar">
              Календарь
            </NavLink>
          </li>
          <li className={styles["header__menu-item"]} onClick={scrollContact}>
            Контакты
          </li>
        </ul>
      </nav>
      {user ? (
        <div className={styles.header__user}>
          <Link to="/profile">
            <img src={Avatar} className={styles.header__avatar} alt="avatar icon" />
          </Link>
          <div className={styles["header__user-exit"]}>
            <img src={Exit} alt="exit icon" />
            <p className={styles.exit__text} onClick={exit}>
              Выход
            </p>
          </div>
        </div>
      ) : (
        <button className={styles.btn__auth} onClick={() => navigate("/auth")}>
          Авторизация
        </button>
      )}
      {user && width < 1000 && <NavBar show={show} setShow={setShow} user={user} exit={exit} />}
    </header>
  );
};

export default Header;
