const express = require("express");
const app = express();

app.use(express.json());

app.get("/", (req, res) => {
  res.send("AI Chat Bot is running 🚀");
});

app.post("/chat", (req, res) => {
  const userMessage = req.body.message;

  if (!userMessage) {
    return res.status(400).json({ reply: "No message received" });
  }

  res.json({
    reply: "You said: " + userMessage
  });
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log("Server running on port " + PORT);
});
