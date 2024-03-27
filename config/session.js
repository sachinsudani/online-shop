const expressSession = require("express-session");
const mongoDBStore = require("connect-mongodb-session");

function createSessionStore() {
  const MongoDBStore = mongoDBStore(expressSession);

  const store = new MongoDBStore({
    uri: "mongodb://localhost:27017",
    databaseName: "online-shop",
    collection: "sessions",
  });

  return store;
}

function createSessionConfig() {
  return {
    secret: "super-secret",
    resave: false,
    saveUninitialized: false,
    store: createSessionStore(),
    cookie: {
      maxAge: 2 * 24 * 60 * 60 * 1000,
    },
  };
}

module.exports = createSessionConfig;
