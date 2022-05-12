import { useEffect, useRef, useState } from "react";

import "./GuestChat.css";
import CollapseBtn from "../СollapseBtn/СollapseBtn";
import { GUEST, PORT, USER_URL } from "../../constants";
import textChatMap from "../../functions/textChatMap";

const GuestChat = () => {
  const [isChatShow, setIsChatShow] = useState(false);
  const [value, setValue] = useState("");
  const [textChat, setTextChat] = useState([]);
  const socket = useRef();

  useEffect(() => {
    socket.current = new WebSocket(USER_URL);
    socket.current.onopen = () => {
      console.log(`Подключение ws установленно на порту ${PORT}`);
    };
  }, []);

  useEffect(() => {
    socket.current.onmessage = (e) => {
      const message = JSON.parse(e.data);

      console.log(message);
      setTextChat([...textChat, message]);
    };
  }, [textChat]);

  const handleSubmitForm = async (e) => {
    e.preventDefault();

    const message = {
      type: GUEST,
      text: value,
      date: new Date().toLocaleString().slice(0, -3),
      event: "message",
    };

    await socket.current.send(JSON.stringify(message));
    setValue("");
  };

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

export default GuestChat;
