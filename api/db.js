import mongoose from "mongoose";
const url = "mongodb://localhost/anime";

export default async function db() {
  try {
    await mongoose
      .connect(url)
      .then(() => console.log("¡Conectado a MongoDB!"))
      .catch((err) => console.log("¡Error al conectar a MongoDB!", err));
  } catch (err) {
    console.log(err);
  }
}
