const express = require("express");
const cors = require("cors");

// CORS 설정을 위한 헤더
const headers = {
  "Access-Control-Allow-Origin": "http://127.0.0.1:5500",
  "Access-Control-Allow-Methods": "OPTIONS, POST, GET, PUT, DELETE",
  "Access-Control-Allow-Headers": "Content-Type",
};

let data = { message: "여러분 화이팅!" };

const app = express();
app.use(cors(headers));

app.use(express.json());
app.use(express.text());

app.options("/", (req, res) => {
  return res.status(204).send("CORS preflight response");
});

app.get("/", (req, res) => {
  return res.status(200).send(JSON.stringify(data));
});

app.post("/", (req, res) => {
  data.message = req.body;
  return res.status(200).send(`받은 POST 데이터: ${req.body}`);
});

app.put("/", (req, res) => {
  data.message = req.body;
  return res.status(200).send(`업데이트된 데이터: ${req.body}`);
});

app.delete("/", (req, res) => {
  data = {};
  return res.status(200).send("데이터가 삭제되었습니다.");
});

app.listen(3000, () => {
  console.log("서버가 http://localhost:3000/ 에서 실행 중입니다.");
});
