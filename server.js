const express = require("express");

const app = express();

const PORT = 3000;

// Serve frontend
app.use(express.static("public"));

// Home route
app.get("/", (req, res) => {
    res.sendFile(__dirname + "/public/index.html");
});

// Start server
app.listen(PORT, "0.0.0.0", () => {
    console.log(`BakeBloom running on http://localhost:${PORT}`);
});	
