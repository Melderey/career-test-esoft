import { useState, useRef } from "react";

import { OPERATOR } from "../../constants";

import "./OperatorChat.css";
import textChatMap from "../../functions/textChatMap";
import Connect from "../../functions/connect";
import handleSubmitForm from "../../functions/handleSubmitForm";

const OperatorChat = () => {
  const [value, setValue] = useState("");
  const [textChat, setTextChat] = useState([]);
  const socket = useRef();

  Connect(socket, textChat, setTextChat);

  return (
    <div className="d-flex m-2">
      <div className="p-0 m-0 w-25 operator-chat">
        <div className="m-0">
          <div className="bg-info p-2 rounded-top h-6">
            <h3>Список пользователей</h3>
          </div>

          <div>
            <ul className="list-group container p-0">
              <li className="list-group-item active" aria-current="true">
                Активный пользователь
              </li>
              <li className="list-group-item">Пользователь ID</li>
              <li className="list-group-item">Пользователь ID</li>
              <li className="list-group-item">Пользователь ID</li>
              <li className="list-group-item">Пользователь ID</li>
              <li className="list-group-item">Пользователь ID</li>
              <li className="list-group-item">Пользователь ID</li>
              <li className="list-group-item">Пользователь ID</li>
              <li className="list-group-item">Пользователь ID</li>
            </ul>
          </div>
        </div>
      </div>

      <div className="p-0 w-50 min-w">
        <div className="operator-chat m-0">
          <div className="bg-info p-3 rounded-top h-6">
            <h3>Пользователь ID</h3>
            <p>Карточка пользователя</p>
          </div>

          <div className="container">{textChatMap(textChat, OPERATOR)}</div>

          <form>
            <div className="align-self-center input-group">
              <input
                value={value}
                onChange={(e) => setValue(e.target.value)}
                type="text"
                className="form-control rounded-0"
                placeholder="Введите сообщение"
                aria-label="Введите сообщение"
                aria-describedby="button-addon2"
              ></input>

              <button
                onClick={(event) =>
                  handleSubmitForm(event, value, setValue, OPERATOR, socket)
                }
                className="btn btn-outline-secondary rounded-0"
                type="submit"
              >
                Ок
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default OperatorChat;
