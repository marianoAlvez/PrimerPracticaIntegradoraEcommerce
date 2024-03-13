const express = require('express');
const router = express.Router();
const CartService = require('../../services/db_services/carts.service');
const cartService = new CartManager();

// GET /api/carts/:cid
router.get("/:cid", async (req, res) => {
    try {
        const cid = req.params.cid;
        const cart = await cartService.getCartById(cid);
        res.send({ status: "success", payload: cart });
    } catch (error) {
        console.log(error);
        res.status(500).send({ status: "error",  error: error.message});
    }
});

// POST /api/carts
router.post("/", async (req, res) => {
    try {
        const newCart = await cartService.createCart();
        res.status(201).send({ status: "success", payload: newCart });
    } catch (error) {
        console.log(error);
        res.status(500).send({ status: "error",  error: error.message });
    }
});

// POST /api/carts/:cid/product/:pid
router.post("/:cid/product/:pid", async (req, res) => {
    const { cid, pid } = req.params;
    const { quantity } = req.body;

    try {
      const updatedCart = await cartService.addProductsToCart(cid, pid, quantity);
      res.status(201).send({ status: "success", payload: updatedCart });
    } catch (error) {
        res.status(500).send({ status: "error",  error: error.message });
    }
});

module.exports = router;