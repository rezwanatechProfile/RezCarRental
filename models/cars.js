const mongoose = require('mongoose')

const carSchema = new mongoose.Schema({
    carName: {type: String, required: true},
    title: {type: String, required: true},
    ownerName: {type: String, required: true}, 
    rating: Number,
    img: {type: String},
    description: {type: String},
    features: [String],
    pricePerDay: {type: Number, required: true, min:1},
    guidelines: {type: String},
    dateFrom: {type: Date},
    dateTo: {type: Date},
    location: [{type: String}],
    isAvailable: Boolean,
    createdAt: {type: Date, required: true, default: Date.now},
    tag: Boolean,
    totalTrip: {type: String}
})

const Car = mongoose.model('Car', carSchema)
module.exports = Car


