import { useEffect, useState } from "react";
import FormBtn from "../../ui/formInput/FormInput";
import styles from "./SignIn.module.scss";
import request from "./../../services/axios.service";
import configApi from "../../config/api.json";
import { useNavigate } from "react-router-dom";
import BtnForm from "../../ui/btnForm/BtnForm";
import { Link } from "react-router-dom";
import { toast } from "react-toastify";
const SignUp = () => {
  const [user, setUser] = useState({
    password: "",
    username: "",
  });
  const [token, setToken] = useState({ auth_token: "" });
  const navigate = useNavigate();
  const handleChange = ({ target }) => {
    setUser((prevState) => ({ ...prevState, [target.name]: target.value }));
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const { data } = await request.post(configApi.auth, user);
      await setToken((preState) => ({ ...preState, auth_token: data.access_token }));
    } catch (error) {
      console.log(error);
    }
  };
  const getUserInfo = async () => {
    try {
      const { data } = await request.post(configApi.user, token);
      console.log(data.user.user_id);
      localStorage.setItem("user", JSON.stringify(data.user));
      navigate("/");
      toast.success("Вход успешно выполнен");
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    if (token.auth_token) {
      getUserInfo();
    }
  }, [token]);
  return (
    <div className={styles.container}>
      <div className={styles.container__inner}>
        <h1 className={styles.registration__title}>Авторизация</h1>
        <form className={styles.form} onSubmit={handleSubmit}>
          <FormBtn
            id={"username"}
            type={"text"}
            name={"username"}
            placeholder={"dkhil@sfedu.ru"}
            onChange={handleChange}
            labelText={"Почта"}
          />
          <FormBtn
            id={"password"}
            type={"password"}
            name={"password"}
            placeholder={"Пароль"}
            onChange={handleChange}
            labelText={"Пароль"}
          />
          <Link to="registration" className={styles.redirect}>
            <span>Регистрация</span>
          </Link>
          <BtnForm text={"Вход"} />
        </form>
      </div>
    </div>
  );
};

export default SignUp;
