import exp from 'express';
import productmodel from '../Models/Product-Model.js';

export const productApp = exp.Router();

// CREATE PRODUCT
productApp.post('/products', async (req, res) => {
  let newProduct = req.body;
  let product = new productmodel(newProduct);

  await product.save();
  res.status(201).json({ message: "Product created successfully" });
});

// GET ALL PRODUCTS
productApp.get('/products', async (req, res) => {
  let productsList = await productmodel.find();
  res.json(productsList);
});

// GET PRODUCT BY ID
productApp.get('/products/:id', async (req, res) => {
  let objectId = req.params.id;

  let product = await productmodel.findById(objectId);

  if (!product) {
    return res.status(404).json({ message: "Product not found" });
  }

  res.status(200).json({
    message: "product found",
    payload: product
  });
});

// UPDATE PRODUCT
productApp.put('/products/:id', async (req, res) => {
  let objectId = req.params.id;
  let modifiedProduct = req.body;

  let updatedProduct = await productmodel.findByIdAndUpdate(
    objectId,
    modifiedProduct,
    { new: true }
  );

  if (!updatedProduct) {
    return res.status(404).json({ message: "Product not found" });
  }

  res.status(200).json({
    message: "product updated",
    payload: updatedProduct
  });
});

// DELETE PRODUCT
productApp.delete('/products/:id', async (req, res) => {
  let objectId = req.params.id;

  let deletedProduct = await productmodel.findByIdAndDelete(objectId);

  if (!deletedProduct) {
    return res.status(404).json({ message: "Product not found" });
  }

  res.status(200).json({
    message: "product deleted",
    payload: deletedProduct
  });
});
