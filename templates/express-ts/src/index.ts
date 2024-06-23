import { app } from "./app";
import { log } from "./utils/logger";

const PORT = process.env.PORT || 3000;

/**
 * Starts the server and listens on the specified port.
 * @param {number} PORT - The port number to listen on.
 */
app.listen(PORT, () => log.info(`Server is listening on port ${PORT}...`));
