import express from "express";
import mongoose from "mongoose";
import { port, dbURI } from "./config/environment.js";
import router from "./config/router.js";
import path from "path"; // * <—- a new import from node

const app = express();

const __dirname = path.resolve(); // * this line has been added, note this has a double underscore before it

// Enable CORS

const startServers = async () => {
  try {
    // mongoose connect
    await mongoose.connect(dbURI);
    console.log("Database connected successfully");

    app.use(express.static(`${__dirname}/client/build`)); // * <— This line has been added before the express json middleware, it will allow the app to respond to a request with contents of this directory “build”, which will contain our React App code.
    // JSON parser

    app.use(express.json());
    // Logger
    app.use((req, _res, next) => {
      console.log(`Request received: ${req.method} - ${req.url}`);
      next();
    });
    // Router
    app.use("/api", router);

    app.use("/*", (_, res) =>
      res.sendFile(`${__dirname}/client/build/index.html`)
    ); // * <— This additional route handler has been added between the router and error handler middleware, it means that any incoming request that does not match a route in router should respond back with our frontend.

    // Catch all
    app.use((_req, res) => {
      res.status(404).json({ message: "Route Not Found" });
    });
    // Starting server once database has connected
    app.listen(port, () =>
      console.log(`Server up and running on port ${port}`)
    );
  } catch (err) {
    console.log("Something has gone wrong");
    console.log(err);
  }
};
startServers();
