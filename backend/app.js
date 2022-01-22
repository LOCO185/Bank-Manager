const express = require("express");
const app = express();
const cors = require("cors");
const path = require("path");

const publicDirectory = path.join(__dirname, "client/build");
app.use(express.static(publicDirectory));

require("./src/db/mongoose");
const PORT = process.env.PORT || 5000;
const userRouter = require("./src/routes/user");


app.use(cors());
app.use(express.json());
app.use(userRouter);


app.listen(PORT, () => {
  console.log(`listening to port ${PORT}....`);
});
