import express from 'express'
import multer from 'multer'
import { Interior } from '../models/interior.js'

const router = express.Router()

router.get('/', async (req, res) => {
    try {
        const interiors = await Interior.find().lean()
        res.json(interiors)
    } catch (error) {
        console.error(error)
        res.sendStatus(404)
    }
})

export default router