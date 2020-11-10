import express from "express";
import morgan from "morgan";

import { createRoles } from "./libs/initialSetup";

import productsRoutes from "./routes/products.routes";
import authRoutes from "./routes/auth.routes";

const app = express();
createRoles();

app.use(express.json());
app.use(morgan("dev"));

app.use("/products", productsRoutes);
app.use("/auth", authRoutes);

export default app;
