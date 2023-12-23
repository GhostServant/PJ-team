import { useState } from "react";
import FormBtn from "../../ui/formInput/FormInput";
import styles from "./SignUp.module.scss";
import Select from "react-select";
import { useFetchInfoRoleQuery } from "../../store/role/roleSlice";
import Loader from "./../../ui/loader/Loader";
import request from "./../../services/axios.service";
import configApi from "../../config/api.json";
import { useNavigate } from "react-router-dom";
import BtnForm from "../../ui/btnForm/BtnForm";
const SignUp = () => {
  const { data, isLoading } = useFetchInfoRoleQuery();
  const [user, setUser] = useState({
    firstName: "",
    lastName: "",
    password: "",
    repeatPassword: "",
    email: "",
    role: {},
  });
  const navigate = useNavigate();
  const handleChange = ({ target }) => {
    console.log(target);
    setUser((prevState) => ({ ...prevState, [target.name]: target.value }));
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await request.post(configApi.register, user);
      navigate("/");
    } catch (error) {
      console.log(error);
    }
  };
  const roleChange = (select) => {
    setUser((prevState) => ({ ...prevState, role: { ...prevState.role, select } }));
  };
  return !isLoading ? (
    <div className={styles.container}>
      <div className={styles.container__inner}>
        <h1 className={styles.registration__title}>Регистрация</h1>
        <form className={styles.form} onSubmit={handleSubmit}>
          <Select
            options={data}
            onChange={roleChange}
            value={user.role.value}
            className={styles.select}
            name="role"
          />
          <FormBtn
            id={"email"}
            type={"text"}
            name={"email"}
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
          <FormBtn
            id={"repeatPassword"}
            type={"password"}
            name={"repeatPassword"}
            placeholder={"Подтвердите пароль"}
            onChange={handleChange}
            labelText={"Подтвердите пароль"}
          />
          <FormBtn
            id={"firstName"}
            type={"text"}
            name={"firstName"}
            placeholder={"Дмитрий"}
            onChange={handleChange}
            labelText={"Имя"}
          />
          <FormBtn
            id={"lastName"}
            type={"text"}
            name={"lastName"}
            placeholder={"Хиль"}
            onChange={handleChange}
            labelText={"Фамилия"}
          />
          <BtnForm text={"Регистрация"} />
        </form>
      </div>
    </div>
  ) : (
    <Loader />
  );
};

export default SignUp;
