export const dbConfig = {
  HOST: "localhost",
  USER: "root",
  PASSWORD: "root",
  DB: "FashionGalaxy",
  dialect: "mysql",
  pool: {
    max: 5,
    min: 0,
    acquire: 30000,
    idle: 10000,
  },
};

// //mongodb+srv://<username>:<password>@cluster0.w6npf.mongodb.net/<dbname>?retryWrites=true&w=majority
