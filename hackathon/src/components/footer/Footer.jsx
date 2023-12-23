import { Link } from "react-router-dom";
import styles from "./Footer.module.scss";
const Footer = () => {
  return (
    <footer className={styles.footer}>
      <hr />
      <div className={styles.footer__inner}>
        <ul className={styles.footer__list}>
          <li className={styles["footer__list-item"]}>г. Таганрог, пер. Некрасовский, 44.</li>
          <li className={styles["footer__list-item"]}>
            <Link to="mailto:info@ictis.sfedu.ru">info@events.sfedu.ru</Link>
          </li>
          <li className={styles["footer__list-item"]}>
            <Link to="tel:88634360450">8 (8634) 360-450</Link>
          </li>
        </ul>
        <h2 className={styles.footer__subtitle}>Сайт разработан студентами ИКТИБ</h2>
        <p className={styles.footer__more}>
          © 2015-2023, Институт компьютерных технологий и информационной безопасности ИТА ЮФУ
        </p>
      </div>
    </footer>
  );
};

export default Footer;
