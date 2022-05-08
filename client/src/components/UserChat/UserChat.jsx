import "./UserChat.css";
import CollapseBtn from "../СollapseBtn/СollapseBtn";

const UserChat = () => {
  return (
    <>
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
      <CollapseBtn />
    </>
  );
};

export default UserChat;
