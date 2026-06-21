const express = require("express");
const cors = require("cors");

const app = express();
app.use(cors());
app.use(express.json());
app.use(express.static("public"));

app.use("/api/ip", require("./routes/ip"));
app.use("/api/dns", require("./routes/dns"));
app.use("/api/whois", require("./routes/whois"));
app.use("/api/discord", require("./routes/discord"));
app.use("/api/github", require("./routes/github"));

app.get("/", (req,res)=>{
res.sendFile(__dirname+"/public/index.html");
});

app.listen(3000, ()=>{
console.log("KEKEINTEL V5 RUNNING ON :3000");
});
