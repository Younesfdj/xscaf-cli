import express from "express";
import setRouters from "./routes/index.js";
import errorHandler from "./middlewares/errors.js";
import "dotenv/config";
import { log } from "./utils/logger.js";

const PORT = process.env.PORT || 3000;

const app = express();
app.use(express.json());

setRouters(app);

app.use(errorHandler);
app.listen(PORT, () => log.info(`Server is listening on port ${PORT}...`));
