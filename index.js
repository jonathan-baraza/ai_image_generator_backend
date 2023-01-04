const express = require("express");
require("dotenv").config();
const app = express();
const PORT = process.env.PORT || 4000;
const openaiRoutes = require("./routes/openaiRoutes");
const cors = require("cors");
const errorHandler = require("./middlewares/errorMiddleware");

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use("/openai", openaiRoutes);
app.get("/", (req, res) => {
  res.send(
    "<h1>Welcome to the AI image generator</h1><p>Created by Jonathan Baraza</p>"
  );
});

app.use(errorHandler);

app.listen(PORT, () => console.log(`Server is running on port ${PORT}`));
