import { useState } from "react";
import DateFnsUtils from "@date-io/date-fns";
import { MuiPickersUtilsProvider, KeyboardDatePicker } from "@material-ui/pickers";
import Create from "./../../assets/icons/create.svg";
import Search from "./../../assets/icons/search.svg";
import ArrowBack from "./../../assets/icons/back.svg";
import styles from "./EventsList.module.scss";
import Select from "react-select";
import { useFetchInfoRoleQuery } from "../../store/role/roleSlice";
const EventsList = () => {
  const { data } = useFetchInfoRoleQuery();
  const [pick, setPick] = useState(false);
  const [category, setCategory] = useState(false);
  const [selectedDate, setSelectedDate] = useState({
    from: new Date(),
    to: new Date(),
    category: {},
  });
  console.log(data);
  const roleChange = (newCategory) => {
    console.log(newCategory);
    setSelectedDate((prevState) => ({ ...prevState, newCategory }));
  };
  const handleDateFrom = (date) => {
    setSelectedDate((prevState) => ({ ...prevState, from: date }));
  };
  const handleDateTo = (date) => {
    setSelectedDate((prevState) => ({ ...prevState, to: date }));
  };
  const getPick = () => {
    setPick((pick) => !pick);
  };
  const getCategory = () => {
    setCategory((category) => !category);
  };
  return (
    <div className={styles.events__container}>
      <div className={styles.events__top}>
        <h2 className={styles["events__top-title"]}>Мероприятия</h2>
        <button className={styles["events__top-btn"]}>Создать мероприятие</button>
        <img src={Create} className={styles.events__create} alt="create icon" />
      </div>
      <ul className={styles["events__list"]}>
        <li className={styles["events__list-item"]}>
          <div className={styles.event__search}>
            <input type="text" className={styles.search__input} placeholder="Поиск" />
            <img src={Search} alt="search icon" />
          </div>
          {pick || category ? (
            pick ? (
              <div className={styles.events__filter}>
                <img
                  src={ArrowBack}
                  className={styles.events__back}
                  onClick={getPick}
                  alt="arrow back"
                />
                <MuiPickersUtilsProvider utils={DateFnsUtils}>
                  <KeyboardDatePicker
                    label="С даты"
                    value={selectedDate.from}
                    onChange={handleDateFrom}
                  />
                </MuiPickersUtilsProvider>
                <MuiPickersUtilsProvider utils={DateFnsUtils}>
                  <KeyboardDatePicker
                    label="До даты"
                    value={selectedDate.to}
                    onChange={handleDateTo}
                  />
                </MuiPickersUtilsProvider>
              </div>
            ) : (
              <div className={styles.events__filter}>
                <img
                  src={ArrowBack}
                  className={styles.events__back}
                  onClick={getCategory}
                  alt="arrow back"
                />
                <Select
                  options={data}
                  onChange={roleChange}
                  value={selectedDate.category}
                  className={styles.select}
                  name="role"
                />
              </div>
            )
          ) : (
            <div className={styles.events__filter}>
              <button className={styles["events__date-btn"]} onClick={getPick}>
                Когда
              </button>
              <button className={styles["events__date-btn"]} onClick={getCategory}>
                Категория
              </button>
              <div className="events__filter-success">
                <button className={styles["events__search-btn"]}>Поиск</button>
                <button className={styles["events__reset-btn"]}>Сбросить</button>
              </div>
            </div>
          )}
        </li>
        <li className={styles["events__list-card"]}>
          <img
            src={
              "https://lh3.googleusercontent.com/_X4oEpRu4O-nv0KuFwJQV2zX5SLuwRg9fIM1_-Q29L50zDgRd2eLdEr0ZmLVk_cPLA4"
            }
            className={styles["events__list-img"]}
            alt="bg card"
          />
          <h3 className={styles["events__list-title"]}>Title titledvfvd vdf dfv vvgvgv</h3>
          <div className={styles["events__list-subtitle"]}>
            <p className={styles["events__list-date"]}>04/08/2023</p>
            <p className={styles["events__list-date"]}>25 фото</p>
          </div>
        </li>
        <li className={styles["events__list-card"]}>
          <img
            src={
              "https://lh3.googleusercontent.com/_X4oEpRu4O-nv0KuFwJQV2zX5SLuwRg9fIM1_-Q29L50zDgRd2eLdEr0ZmLVk_cPLA4"
            }
            className={styles["events__list-img"]}
            alt="bg card"
          />
          <h3 className={styles["events__list-title"]}>Title titledvfvd vdf dfv vvgvgv</h3>
          <div className={styles["events__list-subtitle"]}>
            <p className={styles["events__list-date"]}>04/08/2023</p>
            <p className={styles["events__list-date"]}>25 фото</p>
          </div>
        </li>
        <li className={styles["events__list-card"]}>
          <img
            src={
              "https://lh3.googleusercontent.com/_X4oEpRu4O-nv0KuFwJQV2zX5SLuwRg9fIM1_-Q29L50zDgRd2eLdEr0ZmLVk_cPLA4"
            }
            className={styles["events__list-img"]}
            alt="bg card"
          />
          <h3 className={styles["events__list-title"]}>Title titledvfvd vdf dfv vvgvgv</h3>
          <div className={styles["events__list-subtitle"]}>
            <p className={styles["events__list-date"]}>04/08/2023</p>
            <p className={styles["events__list-date"]}>25 фото</p>
          </div>
        </li>
        <li className={styles["events__list-card"]}>
          <img
            src={
              "https://lh3.googleusercontent.com/_X4oEpRu4O-nv0KuFwJQV2zX5SLuwRg9fIM1_-Q29L50zDgRd2eLdEr0ZmLVk_cPLA4"
            }
            className={styles["events__list-img"]}
            alt="bg card"
          />
          <h3 className={styles["events__list-title"]}>Title titledvfvd vdf dfv vvgvgv</h3>
          <div className={styles["events__list-subtitle"]}>
            <p className={styles["events__list-date"]}>04/08/2023</p>
            <p className={styles["events__list-date"]}>25 фото</p>
          </div>
        </li>
        <li className={styles["events__list-card"]}>
          <img
            src={
              "https://lh3.googleusercontent.com/_X4oEpRu4O-nv0KuFwJQV2zX5SLuwRg9fIM1_-Q29L50zDgRd2eLdEr0ZmLVk_cPLA4"
            }
            className={styles["events__list-img"]}
            alt="bg card"
          />
          <h3 className={styles["events__list-title"]}>Title titledvfvd vdf dfv vvgvgv</h3>
          <div className={styles["events__list-subtitle"]}>
            <p className={styles["events__list-date"]}>04/08/2023</p>
            <p className={styles["events__list-date"]}>25 фото</p>
          </div>
        </li>
        <li className={styles["events__list-card"]}>
          <img
            src={
              "https://lh3.googleusercontent.com/_X4oEpRu4O-nv0KuFwJQV2zX5SLuwRg9fIM1_-Q29L50zDgRd2eLdEr0ZmLVk_cPLA4"
            }
            className={styles["events__list-img"]}
            alt="bg card"
          />
          <h3 className={styles["events__list-title"]}>Title titledvfvd vdf dfv vvgvgv</h3>
          <div className={styles["events__list-subtitle"]}>
            <p className={styles["events__list-date"]}>04/08/2023</p>
            <p className={styles["events__list-date"]}>25 фото</p>
          </div>
        </li>
        <li className={styles["events__list-card"]}>
          <img
            src={
              "https://lh3.googleusercontent.com/_X4oEpRu4O-nv0KuFwJQV2zX5SLuwRg9fIM1_-Q29L50zDgRd2eLdEr0ZmLVk_cPLA4"
            }
            className={styles["events__list-img"]}
            alt="bg card"
          />
          <h3 className={styles["events__list-title"]}>Title titledvfvd vdf dfv vvgvgv</h3>
          <div className={styles["events__list-subtitle"]}>
            <p className={styles["events__list-date"]}>04/08/2023</p>
            <p className={styles["events__list-date"]}>25 фото</p>
          </div>
        </li>
        <li className={styles["events__list-card"]}>
          <img
            src={
              "https://lh3.googleusercontent.com/_X4oEpRu4O-nv0KuFwJQV2zX5SLuwRg9fIM1_-Q29L50zDgRd2eLdEr0ZmLVk_cPLA4"
            }
            className={styles["events__list-img"]}
            alt="bg card"
          />
          <h3 className={styles["events__list-title"]}>Title titledvfvd vdf dfv vvgvgv</h3>
          <div className={styles["events__list-subtitle"]}>
            <p className={styles["events__list-date"]}>04/08/2023</p>
            <p className={styles["events__list-date"]}>25 фото</p>
          </div>
        </li>
        <li className={styles["events__list-card"]}>
          <img
            src={
              "https://lh3.googleusercontent.com/_X4oEpRu4O-nv0KuFwJQV2zX5SLuwRg9fIM1_-Q29L50zDgRd2eLdEr0ZmLVk_cPLA4"
            }
            className={styles["events__list-img"]}
            alt="bg card"
          />
          <h3 className={styles["events__list-title"]}>Title titledvfvd vdf dfv vvgvgv</h3>
          <div className={styles["events__list-subtitle"]}>
            <p className={styles["events__list-date"]}>04/08/2023</p>
            <p className={styles["events__list-date"]}>25 фото</p>
          </div>
        </li>
        <li className={styles["events__list-card"]}>
          <img
            src={
              "https://lh3.googleusercontent.com/_X4oEpRu4O-nv0KuFwJQV2zX5SLuwRg9fIM1_-Q29L50zDgRd2eLdEr0ZmLVk_cPLA4"
            }
            className={styles["events__list-img"]}
            alt="bg card"
          />
          <h3 className={styles["events__list-title"]}>Title titledvfvd vdf dfv vvgvgv</h3>
          <div className={styles["events__list-subtitle"]}>
            <p className={styles["events__list-date"]}>04/08/2023</p>
            <p className={styles["events__list-date"]}>25 фото</p>
          </div>
        </li>
        <li className={styles["events__list-card"]}>
          <img
            src={
              "https://lh3.googleusercontent.com/_X4oEpRu4O-nv0KuFwJQV2zX5SLuwRg9fIM1_-Q29L50zDgRd2eLdEr0ZmLVk_cPLA4"
            }
            className={styles["events__list-img"]}
            alt="bg card"
          />
          <h3 className={styles["events__list-title"]}>Title titledvfvd vdf dfv vvgvgv</h3>
          <div className={styles["events__list-subtitle"]}>
            <p className={styles["events__list-date"]}>04/08/2023</p>
            <p className={styles["events__list-date"]}>25 фото</p>
          </div>
        </li>
      </ul>
    </div>
  );
};

export default EventsList;
