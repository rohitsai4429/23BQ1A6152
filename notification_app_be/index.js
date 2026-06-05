const express = require("express");
const cors = require("cors");
const logger = require("./logging_middleware/logger");
const notificationRoutes = require("./routes/notificationRoutes");
const app = express();

app.use(cors());
app.use(express.json());
app.use(logger);
app.use("/api", notificationRoutes);
app.get("/", (req, res) => {
    res.send("Notification Backend Running");
});

app.listen(3000, () => {
    console.log("Server running on port 3000");
});