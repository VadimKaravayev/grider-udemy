const express = require("express");
const productsRepo = require("../../repositories/products");

//Templates
const productsNewTemplate = require("../../views/admin/products/new");
const productIndexTemplate = require("../../views/admin/products/index");
const productsEditTemplate = require("../../views/admin/products/edit");

//Validators
const { requireTitle, requirePrice } = require("./validators");
const multer = require("multer");
const { handleErrors, requireAuth } = require("./middlewares");

const router = express.Router();
const upload = multer({ storage: multer.memoryStorage() });

router.get("/admin/products", requireAuth, async (_, res) => {
  const products = await productsRepo.getAll();
  res.send(productIndexTemplate({ products }));
});

router.get("/admin/products/new", requireAuth, (_, res) => {
  res.send(productsNewTemplate({}));
});

router.post(
  "/admin/products/new",
  requireAuth,
  upload.single("image"),
  [requireTitle, requirePrice],
  handleErrors(productsNewTemplate),
  async (req, res) => {
    const image = req.file?.buffer.toString("base64");
    const { title, price } = req.body;
    await productsRepo.create({ title, price, image });

    res.redirect("/admin/products");
  }
);

router.get("/admin/products/:id/edit", requireAuth, async (req, res) => {
  const product = await productsRepo.getOne(req.params.id);

  res.send(!product ? "Product not found" : productsEditTemplate({ product }));
});

router.post(
  "/admin/products/:id/edit",
  requireAuth,
  upload.single("image"),
  [requireTitle, requirePrice],
  handleErrors(productsEditTemplate, async (req) => {
    const product = await productsRepo.getOne(req.params.id);
    return { product };
  }),
  async (req, res) => {
    const changes = req.body;

    if (req.file) {
      changes.image = req.file.buffer.toString("base64");
    }
    try {
      await productsRepo.update(req.params.id, changes);
    } catch (err) {
      return res.send("Item not found");
    }

    res.redirect("/admin/products");
  }
);

router.post("/admin/products/:id/delete", requireAuth, async (req, res) => {
  await productsRepo.delete(req.params.id);
  res.redirect("/admin/products");
});

module.exports = router;
