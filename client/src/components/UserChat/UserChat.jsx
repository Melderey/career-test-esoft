import { useState } from "react";
import { uniqueId } from "lodash";

import "./UserChat.css";
import CollapseBtn from "../СollapseBtn/СollapseBtn";

const UserChat = () => {
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
    <>
      {isChatShow ? (
        <div className="user-chat">
          <div className="bg-info p-2 rounded-top">
            <h3>Поддержка</h3>
            <p>Напишите ваше сообщение</p>
          </div>

          <div className="p-2 overflow-auto">
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
      ) : null}

      <CollapseBtn setIsChatShow={setIsChatShow} isChatShow={isChatShow} />
    </>
  );
};

export default UserChat;
