import "./UserChat.css";
import CollapseBtn from "../СollapseBtn/СollapseBtn";
import { useState } from "react";

const UserChat = () => {
  const [isChatShow, setIsChatShow] = useState(false);
  return (
    <>
      {isChatShow ? (
        <div className="user-chat">
          <div>
            <h3>Поддержка</h3>
            <p> Будем рады ответить </p>
          </div>
          <div class="align-self-center">
            <button type="button" class="btn btn-outline-secondary">
              Задать вопрос
            </button>
          </div>
        </div>
      ) : null}

      <CollapseBtn setIsChatShow={setIsChatShow} isChatShow={isChatShow} />
    </>
  );
};

export default UserChat;
