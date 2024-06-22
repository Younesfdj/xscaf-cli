const express = require("express");
const setRouters = require("./routes/index.js");
const errorHandler = require("./middlewares/errors.js");
const log = require("./utils/logger.js");
require("dotenv").config();

const PORT = process.env.PORT || 3000;

const app = express();
app.use(express.json());

setRouters(app);

app.use(errorHandler);
app.listen(PORT, () => log.info(`Server is listening on port ${PORT}...`));
