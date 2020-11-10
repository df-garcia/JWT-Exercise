import mongoose from "mongoose";

const DB_URL =
  "mongodb+srv://db_admin:db_admin@cluster0.q1umf.mongodb.net/jwt-exercise?retryWrites=true&w=majority";

mongoose
  .connect(DB_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useFindAndModify: true,
    useCreateIndex: true,
  })
  .then((db) => {})
  .catch((err) => console.log(err));
