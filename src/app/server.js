import bodyParser from "body-parser";
import express from "express";
import { publicRouter } from "../routes/public-route.js";
import { errorMiddleware } from "../middlewares/error-middleware.js";
import { __dirname } from "../utils/file-locator.js";
import expressEjsLayouts from "express-ejs-layouts";

export const app = express();

app.set("view engine", "ejs");
app.set("views", __dirname + "/../views");
app.use(expressEjsLayouts); // Tambahkan middleware express-ejs-layouts
app.set("layout", "layout");

app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static("public"));

app.use(publicRouter);

app.use(errorMiddleware);
