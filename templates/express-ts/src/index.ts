import { app } from "./app";
import { log } from "./utils/logger";
import "dotenv/config";

const PORT = process.env.PORT || 3000;

/**
 * Starts the server and listens on the specified port.
 */
app.listen(PORT, () => log.info(`Server is listening on port ${PORT}...`));
