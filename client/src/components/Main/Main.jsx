import { Link } from "react-router-dom";
import { GUEST_ROUTE, OPERATOR_ROUTE } from "../../constants";
import "./Main.css";

const Main = () => {
  return (
    <div className="parent">
      <div className="main m-3">
        <div className="bg-info p-3 text-center">
          <h3>Привет, меня зовут Миша!</h3>
        </div>

        <div className="mt-3">
          <p className="">
            Это чат онлайн-консультант, моё тестовое задание от Esoft.
          </p>
          <p className="">
            Жми на{" "}
            <Link to={GUEST_ROUTE} target="_blank">
              ссылку
            </Link>{" "}
            что бы запустить гостевой чат и{" "}
            <Link to={OPERATOR_ROUTE} target="_blank">
              сюда
            </Link>
            , что бы увидеть чат оператора!
          </p>
        </div>
      </div>
    </div>
  );
};

export default Main;
