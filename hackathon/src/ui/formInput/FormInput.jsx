import PropTypes from "prop-types";
import styles from "./FormInput.module.scss";
const FormBtn = ({ labelText, type, id, name, placeholder, onChange, error }) => {
  return (
    <label htmlFor="role" className={styles.form__label}>
      <p>{labelText}</p>
      <input
        className={styles.form__input}
        type={type}
        id={id}
        placeholder={placeholder}
        name={name}
        onChange={onChange}
      />
      {error[id] ? <p className={styles.error__message}>{error[id]}</p> : ""}
    </label>
  );
};
FormBtn.defaultProps = {
  error: {},
};
FormBtn.propTypes = {
  labelText: PropTypes.string,
  type: PropTypes.string,
  id: PropTypes.string,
  name: PropTypes.string,
  placeholder: PropTypes.string,
  onChange: PropTypes.func,
  error: PropTypes.object,
};

export default FormBtn;
