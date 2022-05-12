import { useRef, useState } from "react";

import "./GuestChat.css";
import CollapseBtn from "../СollapseBtn/СollapseBtn";
import { GUEST } from "../../constants";
import textChatMap from "../../functions/textChatMap";
import Connect from "../../functions/connect";
import handleSubmitForm from "../../functions/handleSubmitForm";

const GuestChat = () => {
  const [isChatShow, setIsChatShow] = useState(false);
  const [value, setValue] = useState("");
  const [textChat, setTextChat] = useState([]);
  const socket = useRef();

  Connect(socket, textChat, setTextChat);

  return (
    <>
      {isChatShow ? (
        <div className="guest-chat">
          <div className="bg-info p-2 rounded-top">
            <h3>Поддержка</h3>
            <p>Напишите ваше сообщение</p>
          </div>

          <div className="p-2 container">{textChatMap(textChat, GUEST)}</div>

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
                  handleSubmitForm(event, value, setValue, GUEST, socket)
                }
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

export default GuestChat;
