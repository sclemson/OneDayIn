import mongoose from 'mongoose'
import uniqueValidator from 'mongoose-unique-validator'

const ratingsSchema = new mongoose.Schema(
  {
    rating: { type: Number, required: true, min: 1, max: 5 },
    owner: { type: mongoose.Schema.ObjectId, ref: 'User', required: true }
  }
)

// Recommendation schema
const recommendationSchema = new mongoose.Schema(
  {
    type: { type: String, required: true },
    title: { type: String, required: true },
    location: { type: String, required: true },
    text: { type: String, required: true, maxlength: 300 },
    price: { type: Number, required: true, min: 1, max: 3 },
    valueRating: { type: Number, required: true, min: 1, max: 5 },
    qualityRating: { type: Number, required: true, min: 1, max: 5 },
    owner: { type: mongoose.Schema.ObjectId, ref: 'User', required: true },
    city: {type: String, required: true },
    ratings: [ ratingsSchema ]
  },
  {
    timestamps: true,
  }
)

recommendationSchema.virtual('averageRating').get(function () {
  if (!this.ratings.length) return null
  const sumOfRatings = this.ratings.reduce((acc, rating) => {
    if (!rating.rating) return acc
    return acc + rating.rating
  }, 0)
  return (sumOfRatings / this.ratings.length).toFixed(1)
})

recommendationSchema.set('toJSON', { virtuals: true })

// Hotspot schema
const hotspotSchema = new mongoose.Schema({
    name: {type: String, required: true},
    location: {type: String, required: true},
    description: { type: String, maxlength: 200 } 
  })

// City schema
const citySchema = new mongoose.Schema({
  name: { type: String, required: true },
  country: { type: String, required: true },
  continent: { type: String, required: true },
  overview: { type: String, required: true, maxlength: 1000 },
  primarylanguage: { type: String, required: true },
  languagecode: { type: String, required: true },
  eat: [hotspotSchema],
  drink: [hotspotSchema],
  see: [hotspotSchema],
  stay: [hotspotSchema],
  walk: [hotspotSchema],
  secret: [hotspotSchema],
  owner: { type: mongoose.Schema.ObjectId, ref: 'User', required: true },
  recommendations: [recommendationSchema],
  thumbnailImage: { type: String, required: true },
  bannerImage: { type: String, required: true }
})


citySchema.plugin(uniqueValidator)

export default mongoose.model('City', citySchema)