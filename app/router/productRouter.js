const router = require("express").Router();
const { getAllProducts, getProduct } = require("../database/products");
router.get("/", async (req, res) => {
  const products = await getAllProducts();
  return res.json({ status: "OK", data: products });
});

router.get("/:productId", async (req, res) => {
  try {
    const { productId } = req.params;
    const product = await getProduct(productId);
    if (!product) {
      return res
        .status(404)
        .json({ status: "FAILED", error: "Product not found" });
    }
    return res.json({ status: "OK", data: product });
  } catch (error) {
    return res.status(400).json({ status: "FAILED", error: error.message });
  }
});

module.exports = router;
