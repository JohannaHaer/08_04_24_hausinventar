import express from 'express'
import multer from 'multer'
import { Interior } from '../models/interior.js'

const router = express.Router()
const mult = multer()

router.get('/', async (req, res) => {
    try {
        const interiors = await Interior.find().lean()
        res.json(interiors)
    } catch (error) {
        console.error(error)
        res.sendStatus(404)
    }
})

router.get('/:category', async (req, res) => {
    console.log(req.params.category);
    try {
        const interiors = await Interior.find({
            "category": req.params.category,
        }).lean()
        res.json(interiors)
    } catch (error) {
        console.error(error)
        res.sendStatus(404)
    }
})

router.post('/', mult.none(), async (req, res) => {
    try {
        const newInterior = new Interior ({
            title: req.body.title,
            room: req.body.room,
            image: req.body.image,
            description: req.body.description,
            category: req.body.category
        })
        const result = await newInterior.save()
        res.status(201).json(result)
    } catch (error) {
        console.error(error)
        res.sendStatus(500)
    }
})

export default router