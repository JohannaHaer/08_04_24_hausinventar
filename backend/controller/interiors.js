import express from "express";
import multer from "multer";
import { Interior } from "./../models/interior.js";

const router = express.Router();
const mult = multer();

router.get("/", async (req, res) => {
  try {
    const interiors = await Interior.find().lean();
    res.json(interiors);
  } catch (error) {
    console.error(error);
    res.sendStatus(404);
  }
});

router.get("/:category", async (req, res) => {
  const category = req.params.category;
  try {
    const interiors = await Interior.find({
      category: category.toString(),
    }).lean();
    res.json(interiors);
  } catch (error) {
    console.error(error);
    res.sendStatus(404);
  }
});

router.post("/", mult.none(), async (req, res) => {
  try {
    const newInterior = new Interior({
      title: req.body.title,
      room: req.body.room,
      image: req.body.image,
      description: req.body.description,
      category: req.body.category,
    });
    const result = await newInterior.save();
    res.status(201).json(result);
  } catch (error) {
    console.error(error);
    res.sendStatus(500);
  }
});

router.get("/details/:id", async (req, res) => {
  try {
    const id = req.params.id;
    const interior = await Interior.findById(id).lean();
    res.json(interior);
  } catch (error) {
    console.error(error);
    res.sendStatus(500);
  }
});

router.patch("/details/:id", mult.none(), async (req, res) => {
  try {
    const id = req.params.id;
    const interior = await Interior;
    const filter = { _id: id };
    const update = {
      title: req.body.title,
      room: req.body.room,
      image: req.body.image,
      description: req.body.description,
      category: req.body.category,
    };
    let doc = await interior.findOneAndUpdate(filter, update);
    res.json(update);
  } catch (error) {
    console.error(error);
    res.sendStatus(500);
  }
});

router.delete("/details/:id", async (req, res) => {
  try {
    const id = req.params.id;
    const interior = await Interior;
    const filter = { _id: id };
    let doc = await interior.findOneAndDelete(filter);
    res.json(doc);
  } catch (error) {
    console.error(error);
    res.sendStatus(500);
  }
});

export default router;
