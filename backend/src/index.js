import DatabaseConnection from "./db/index.js";
import { app } from "./app.js";
import { ENV_VARS } from "./constant.js";

DatabaseConnection()
  .then(() => {
    app.listen(ENV_VARS.PORT, () => {
      console.log("Server is running at port", ENV_VARS.PORT);
    });
  })
  .catch((err) => {
    console.log("MongoDB Connection Fail", err);
  });
