import express from "express";
import { PORT } from "./constants.js";

const app = express();

app.listen(PORT, () => console.log(`Server started on port: ${PORT}`));
