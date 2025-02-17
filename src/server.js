import express from "express";
import morgan from "morgan";
import rootRouter from "./routers/globalRouter";
import videoRouter from "./routers/videoRouter";
import userRouter from "./routers/userRouter";
import session from "express-session";
import { localMiddleware } from "./middlewares";

// application 생성
const app = express();
const logger = morgan("dev");

app.use(logger);
app.set("view engine", "pug");
app.set("views", process.cwd() + "/src/views");
app.use(express.urlencoded({ extended: true }));
app.use(session({
    secret: "hello",
    resave: true,
    saveUninitialized: true
}))
// app.use((req, res, next) => {
//     console.log(req.headers);
//     next();
// })

// app.use((req, res, next) => {
//     req.sessionStore.all((error, sessions) => {
//         console.log(sessions);
//         next();
//     });
// })

// app.get("/add-one",(res, req, next) => {
//     req.session.potato += 1;
//     return res.send(`${req.session.id} ${potato}`)

// })
app.use(localMiddleware)
app.use("/static", express.static("assets"));
app.use("/", rootRouter);
app.use("/users", userRouter);
app.use("/videos", videoRouter);

export default app;
