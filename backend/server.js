const express = require("express");
const app = express();

app.use(express.static("public"));

// Basit mock Discord API (stabil versiyon)
app.get("/api/discord", (req, res) => {
const id = req.query.id;

if (!id) {
return res.json({ error: "no id provided" });
}

// eski stabil mock sistem
res.json({
id: id,
username: "demo_user",
tag: "0001",
created: "2023-01-01",
status: "OK"
});
});

app.listen(3000, () => {
console.log("Server running on http://localhost:3000");
});
