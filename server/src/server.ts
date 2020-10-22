import "reflect-metadata";
import * as bodyParser from "body-parser";
import { InversifyExpressServer } from "inversify-express-utils";
import "./controllers/homeController";
import "./controllers/userController";
import "./controllers/productController";
import "./controllers/commentController";
import "./controllers/cartController";
import { DbConnection } from "./db/utils/db.connection";
import { ContainerConfigLoader } from "./config/container";

import cors from "cors";

// load everything needed to the Container
const container = ContainerConfigLoader.Load();

DbConnection.initConnection().then(() => {
  DbConnection.setAutoReconnect();

  // start the server
  const server = new InversifyExpressServer(container);

  server.setConfig((app) => {
    app.use(
      bodyParser.urlencoded({
        extended: true,
      })
    );
    app.use(bodyParser.json());
    app.use(cors());
  });

  const serverInstance = server.build();
  serverInstance.listen(8000);
  console.log(`Server started on port ${8000} :)`);
});
