import express from "express";

import bodyParser from "body-parser";
import router from "./routes/todos";

const app = express();

const PORT = 4000;

app.use(bodyParser.json());
app.use(express.json());

app.use("/", router);

app.listen(PORT, () => {
  console.log(`Server is running on  PORT ${PORT}`);
});
