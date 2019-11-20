const express = require("express");
const router = require("./router/userRouter");
const bodyParser = require("body-parser");

const app = express();
const cors = require("cors");

app.use(bodyParser.json());
app.use(cors());
router(app);
app.listen(4000, () => console.log("express server started"));
