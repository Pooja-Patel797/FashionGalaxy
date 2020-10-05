import mongoose from "mongoose";

export class DbConnection {
  public static async initConnection() {
    process.env.DB_CONN_STR = `mongodb+srv://root:root@cluster0.w6npf.mongodb.net/FashionGalaxy?retryWrites=true&w=majority`;
    await DbConnection.connect(process.env.DB_CONN_STR);
  }

  public static async connect(connStr: any) {
    return mongoose
      .connect(connStr, {
        useNewUrlParser: true,
        useFindAndModify: true,
        useUnifiedTopology: true,
        dbName: "FashionGalaxy",
      })
      .then((data) => {
        console.log(`Successfully connected to ${connStr}`);
        // mongoose.connection.db.listCollections().toArray(function (err, names) {
        //   console.log(names);
        // });
      })
      .catch((error) => {
        console.error("Error connecting to database: ", error);
        return process.exit(1);
      });
  }

  public static setAutoReconnect() {
    mongoose.connection.on("disconnected", () =>
      DbConnection.connect(process.env.DB_CONN_STR)
    );
  }

  public static async disconnect() {
    await mongoose.connection.close();
  }
}
