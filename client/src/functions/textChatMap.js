import { uniqueId } from "lodash";

const textChatMap = (textChat, typeUser) => {
  return textChat.map(({ text, type, date }) => {
    const textAlign = type === typeUser ? "text-right" : "text-left";
    const messageHeader = `${type} ${date}`;
    const headerStyle = `${textAlign} header-style`;

    return (
      <div key={uniqueId()} className="mt-3">
        <p className={headerStyle}>{messageHeader}</p>
        <p className={textAlign}>{text}</p>
      </div>
    );
  });
};

export default textChatMap;
