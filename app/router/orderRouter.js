const router = require("express").Router();
const { createOrder, getOrder } = require("../database/orders");
router.get("/:reference", async (req, res) => {
  const order = await getOrder(req.params.reference);
  if (!order) {
    return res.status(404).json({ status: "FAILED", error: "Order not found" });
  }
  return res.json({
    status: "OK",
    data: order,
  });
});

router.post("/", async (req, res) => {
  const orderData = req.body;
  const ref = (Math.random() + 1).toString(36).substring(7);
  orderData.ref = ref;
  const newOrder = await createOrder(orderData);
  return res.status(201).json({ status: "OK", data: newOrder });
});

module.exports = router;
