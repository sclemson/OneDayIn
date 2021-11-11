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
    ratings: [ ratingsSchema ]
  },
  {
    timestamps: true,
  }
)

recommendationSchema.virtual('averageRating').get(function () {
  if (!this.ratings.length) return 'Not rated yet'
  const sumOfRatings = this.ratings.reduce((acc, rating) => {
    if (!rating.rating) return acc
    return acc + rating.rating
  }, 0)
  console.log('SUM OF RATINGS', sumOfRatings)
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
  overview: { type: String, required: true, maxlength: 300 },
  primarylanguage: { type: String, required: true },
  eat: [hotspotSchema],
  drink: [hotspotSchema],
  see: [hotspotSchema],
  stay: [hotspotSchema],
  walk: [hotspotSchema],
  secret: [hotspotSchema],
  owner: { type: mongoose.Schema.ObjectId, ref: 'User', required: true },
  recommendations: [recommendationSchema]
})

// cnSchema.virtual('averageRating').get(function () {
//   if (!this.comments.length) return 'Not rated yet'
//   const sumOfRatings = this.comments.reduce((acc, comment) => {
//     if (!comment.rating) return acc
//     return acc + comment.rating
//   }, 0)
//   console.log('SUM OF RATINGS', sumOfRatings)
//   return (sumOfRatings / this.comments.length).toFixed(2)
// })

// cnSchema.set('toJSON', { virtuals: true })

// const CollectiveNoun = mongoose.model('CollectiveNoun', cnSchema)
// console.log(CollectiveNoun)

citySchema.plugin(uniqueValidator)

export default mongoose.model('City', citySchema)