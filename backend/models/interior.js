import mongoose, {Schema} from "mongoose"

const interiorSchema = new Schema ({
    title: {
        type: String,
        required: true
    },
    room: {
        type: String,
        required: true
    },
    image: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    category: {
        type: String,
        required: true
    }
})

export const Interior = mongoose.model('Interior', interiorSchema)