const express = require("express");
const app = express();

const userRoutes = require("./Routes/userRoutes");

app.use(express.json());
//  user middleware
app.use("/", userRoutes);

// Start the server
app.listen(3000, () => {
  console.log("Server started on port 3000");
});
