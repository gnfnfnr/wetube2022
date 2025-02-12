import "./db";
import "./models/Video";
import app from "./server";

//application 설정 - request에 어떻게 반응할 것인지

// application 외부와 연결
const PORT = 4000;
const handleListening = () =>
  console.log(`server listening on port http://localhost:${PORT}`);

app.listen(PORT, handleListening);
