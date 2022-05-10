import { useState } from "react";
import { uniqueId } from "lodash";

import "./OperatorChat.css";

const OperatorChat = () => {
  const [isChatShow, setIsChatShow] = useState(false);
  const [text, setText] = useState("");
  const [textChat, setTextChat] = useState([]);

  const handleSubmitForm = (e) => {
    e.preventDefault();
    const newTextChat = [...textChat];

    newTextChat.push(text);
    setTextChat(newTextChat);
    setText("");
  };

  return (
    <div className="d-flex m-2">
      <div className="p-0 m-0 w-25 min-w operator-chat">
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
          <div className="bg-info p-2 rounded-top h-6">
            <h3>Пользователь ID</h3>
            <p>Карточка пользователя</p>
          </div>

          <div className="p-2 overflow-auto justify-content-sm-end">
            {textChat.map((el) => {
              return (
                <div key={uniqueId()}>
                  <p>{el}</p>
                </div>
              );
            })}
          </div>

          <form>
            <div className="align-self-center input-group">
              <input
                value={text}
                onChange={(e) => setText(e.target.value)}
                type="text"
                className="form-control rounded-0"
                placeholder="Введите сообщение"
                aria-label="Введите сообщение"
                aria-describedby="button-addon2"
              ></input>
              <button
                onClick={handleSubmitForm}
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

{
  /* <div class="col-12 col-lg-5 col-xl-3 border-right">

<div class="px-4 d-none d-md-block">
  <div class="d-flex align-items-center">
    <div class="flex-grow-1">
    </div>
  </div>
</div>

<a href="#" class="list-group-item list-group-item-action border-0">
  <div class="badge bg-success float-right">5</div>
  <div class="d-flex align-items-start">
    <div class="flex-grow-1 ml-3">
      Vanessa Tucker
      <div class="small"><span class="fas fa-circle chat-online"></span> Online</div>
    </div>
  </div>
</a>
<a href="#" class="list-group-item list-group-item-action border-0">
  <div class="badge bg-success float-right">2</div>
  <div class="d-flex align-items-start">
    <div class="flex-grow-1 ml-3">
      William Harris
      <div class="small"><span class="fas fa-circle chat-online"></span> Online</div>
    </div>
  </div>
</a>
<a href="#" class="list-group-item list-group-item-action border-0">
  <div class="d-flex align-items-start">
    <div class="flex-grow-1 ml-3">
      Sharon Lessman
      <div class="small"><span class="fas fa-circle chat-online"></span> Online</div>
    </div>
  </div>
</a>
<a href="#" class="list-group-item list-group-item-action border-0">
  <div class="d-flex align-items-start">
    <div class="flex-grow-1 ml-3">
      Christina Mason
      <div class="small"><span class="fas fa-circle chat-offline"></span> Offline</div>
    </div>
  </div>
</a>
<a href="#" class="list-group-item list-group-item-action border-0">
  <div class="d-flex align-items-start">
    <div class="flex-grow-1 ml-3">
      Fiona Green
      <div class="small"><span class="fas fa-circle chat-offline"></span> Offline</div>
    </div>
  </div>
</a>
<a href="#" class="list-group-item list-group-item-action border-0">
  <div class="d-flex align-items-start">
    <div class="flex-grow-1 ml-3">
      Doris Wilder
      <div class="small"><span class="fas fa-circle chat-offline"></span> Offline</div>
    </div>
  </div>
</a>
<a href="#" class="list-group-item list-group-item-action border-0">
  <div class="d-flex align-items-start">
    <div class="flex-grow-1 ml-3">
      Haley Kennedy
      <div class="small"><span class="fas fa-circle chat-offline"></span> Offline</div>
    </div>
  </div>
</a>
<a href="#" class="list-group-item list-group-item-action border-0">
  <div class="d-flex align-items-start">
    <div class="flex-grow-1 ml-3">
      Jennifer Chang
      <div class="small"><span class="fas fa-circle chat-offline"></span> Offline</div>
    </div>
  </div>
</a>

</div>  */
}
