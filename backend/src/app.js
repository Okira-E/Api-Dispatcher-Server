const express = require("express");
const cors = require("cors");
const userRouter = require("./routes/users");
require("./db/mongo");

const app = express();

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(userRouter);

const PORT = process.env.PORT || 3200;
app.listen(PORT, () => {
    console.log(`App is now listening on port ${PORT}`);
});