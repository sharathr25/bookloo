import { Db } from "./db";
import { WebServer } from "./web";

const run = async (): Promise<undefined> => {
  await Db.connet();
  WebServer.listen();
};

run();
