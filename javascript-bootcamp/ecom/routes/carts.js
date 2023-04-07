const express = require("express");
const cartsRepo = require("./../repositories/carts");
const productsRepo = require("./../repositories/products");
const cartShowTemplate = require("./../views/carts/show");

const router = express.Router();

// Receive a post request to add an item to a cart
const createCart = async (session) => {
  const cart = await cartsRepo.createCart({ items: [] });
  session.cartId = cart.id;
  return cart;
};
const getOrCreateCart = async (session) => {
  const { cartId } = session;
  return cartId ? await cartsRepo.getOne(cartId) : await createCart(session);
};

router.post("/cart/products", async (req, res) => {
  const cart = await getOrCreateCart(req.session);
  const existingItem = cart.items.find(
    (item) => item.id === req.body.productId
  );
  if (existingItem) {
    existingItem.quantity++;
  } else {
    cart.items.push({ id: req.body.productId, quantity: 1 });
  }
  await cartsRepo.update(cart.id, { items: cart.items });
  res.redirect("/cart");
});

// Recieve a GET request to show all items in cart

router.get("/cart", async (req, res) => {
  const { cartId } = req.session;

  if (!cartId) {
    return res.redirect("/");
  }
  const cart = await cartsRepo.getOne(cartId);
  const items = await cart.items.reduce(async (acc, item) => {
    const product = await productsRepo.getOne(item.id);
    const newItem = { ...item, ...{ product } };
    const awaitedAcc = await acc;
    awaitedAcc.push(newItem);

    return awaitedAcc;
  }, Promise.resolve([]));

  res.send(cartShowTemplate({ items: items }));
});

// Receive a POST request to delete an item from a cart
router.post("/cart/products/delete", async (req, res) => {
  const { itemId } = req.body;
  const cart = await cartsRepo.getOne(req.session.cartId);
  const items = cart.items.filter((item) => item.id !== itemId);

  await cartsRepo.update(req.session.cartId, { items });
  res.redirect("/cart");
});

module.exports = router;
