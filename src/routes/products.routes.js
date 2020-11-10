import { Router } from "express";
import * as productController from "../controllers/products.controller";
import { verifyToken, isModerator, isAdmin } from "../middlewares/authJWT";

const router = Router();

router.get("/", productController.getProducts);
router.post("/", [verifyToken, isModerator], productController.createProduct);
router.get("/:productId", productController.getProductById);
router.put(
  "/:productId",
  [verifyToken, isModerator],
  productController.updateProductById
);
router.delete(
  "/:productId",
  [verifyToken, isAdmin],
  productController.deleteProductById
);

export default router;
