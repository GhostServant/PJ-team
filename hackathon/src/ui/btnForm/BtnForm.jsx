import PropTypes from "prop-types";
import styles from "./BtnForm.module.scss";
const BtnForm = ({ text }) => {
  return <button className={styles.form__btn}>{text}</button>;
};
BtnForm.propTypes = {
  text: PropTypes.string,
};
export default BtnForm;
