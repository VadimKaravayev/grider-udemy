const express = require("express");
const bodyParser = require("body-parser");
const authRouter = require("./routes/admin/auth");
const cookieSession = require("cookie-session");
const myLogger = require("./middleware/logger");
const adminProductRouter = require("./routes/admin/products");
const productRouter = require("./routes/products");
const cartsRouter = require("./routes/carts");

const app = express();
app.use(express.static("public"));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cookieSession({ keys: ["khk989hkj4jkhskfhs"] }));
app.use(myLogger);
app.use(authRouter);
app.use(adminProductRouter);
app.use(productRouter);
app.use(cartsRouter);

app.listen(3000, () => console.log("Listening on 3000"));
