import express from "express";
import router from "./routes/index.routes";

const app = express();

app.use(express.json());

app.use(router);

app.listen(5000, () => {
  console.log(`Server is up and running on port 5000`);
});
