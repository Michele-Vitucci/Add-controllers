const express = require("express");
const app = express();
const planetsRoutes = require("./routes/planets");

app.use(express.json());
app.use("/api/planets", planetsRoutes);

app.listen(3000, () => {
  console.log("Server attivo su http://localhost:3000");
});
