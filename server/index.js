const express = require("express");
const app = express();
const expressWs = require("express-ws")(app);
const aWss = expressWs.getWss();
const cors = require("cors");

const { PORT, CHAT_ROUTE } = require("./constants.js");

app.use(cors());
app.use(express.json());

app.ws(CHAT_ROUTE, (ws, req) => {
  ws.on("message", (message) => {
    message = JSON.parse(message);

    console.log(message);

    aWss.clients.forEach((client) => {
      client.send(JSON.stringify(message));
    });
  });
  console.log("Подключение к пользовательскому чату установлено");
});

app.listen(PORT, () => console.log(`Сервер запущен на порту ${PORT}`));
