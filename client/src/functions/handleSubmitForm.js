const handleSubmitForm = async (event, value, setValue, typeUser, socket) => {
  event.preventDefault();

  const message = {
    type: typeUser,
    text: value,
    date: new Date().toLocaleString().slice(0, -3),
    event: "message",
  };

  await socket.current.send(JSON.stringify(message));
  setValue("");
};

export default handleSubmitForm;
