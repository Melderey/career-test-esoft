const express = require("express");
const app = express();
const expressWs = require("express-ws")(app);
const aWss = expressWs.getWss();
const cors = require("cors");

const { PORT, GUEST_ROUTE } = require("./constants.js");

app.use(cors());
app.use(express.json());

app.ws(GUEST_ROUTE, (ws, req) => {
  ws.on("message", (message) => {
    message = JSON.parse(message);

    console.log("aWss.clients ===", aWss.clients);

    aWss.clients.forEach((client) => {
      client.send(JSON.stringify(message));
    });
  });
  console.log("Подключение к пользовательскому чату установлено");
});

app.listen(PORT, () => console.log(`Сервер запущен на порту ${PORT}`));
