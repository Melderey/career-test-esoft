import { useEffect } from "react";
import { PORT, USER_URL } from "../constants";

const Connect = (socket, textChat, setTextChat) => {
  useEffect(() => {
    socket.current = new WebSocket(USER_URL);
    socket.current.onopen = () => {
      console.log(`Подключение ws установленно на порту ${PORT}`);
    };
  }, []);

  useEffect(() => {
    socket.current.onmessage = (e) => {
      const message = JSON.parse(e.data);
      setTextChat([...textChat, message]);
    };
  }, [textChat]);
};

export default Connect;
