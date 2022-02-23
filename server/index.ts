import * as http from "http";
import App from "./app";
import { Logger } from "./logger/logger";

const PORT = 3002;

App.set("port", PORT);
const server = http.createServer(App);
server.listen(PORT);

const logger = new Logger();

server.on("listening", function (): void {
  const address = server.address();
  const bind =
    typeof address === "string" ? `pipe ${address}` : `port ${address.port}`;
  logger.info(`Listening to server on port ${bind}`);
});

module.exports = App;
