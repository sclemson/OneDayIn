import City from '../models/city.js'

// GET ALL
export const getAllCities = async (_req, res) => {
  const cities = await City.find()
  console.log('Cities', cities)
  return res.status(200).json(cities)
}

// GET SINGLE BY ID
export const getSingleCity = async (req, res) => {
  try {
    const { id } = req.params
    const singleCity = await City.findById(id)
    //   .populate('owner')
      .populate('recommendations.owner')
    if (!singleCity) throw new Error()
    return res.status(200).json(singleCity)
  } catch (err) {
    console.log('City not found')
    console.log(err)
    return res.status(404).json({ message: 'City not found' })
  }
}

// ADD A RECOMMENDATION
export const addARecommendation = async (req, res) => {
    try {
      const { id } = req.params // get the id of the city
      const city = await City.findById(id)
      if (!city) throw new Error()
      const newRecommendation = { ...req.body, owner: req.currentUser._id }
      city.recommendations.push(newRecommendation)
      await city.save({ validateModifiedOnly: true })
      return res.status(200).json(city)
    } catch (err) {
      console.log(err)
      return res.status(404).json({ message: 'Something went wrong' })
    }
  }

// ADDING A RATING
export const addARating = async (req, res) => {
  try {
    const { id, recommendationId } = req.params
    console.log(recommendationId)
    const city = await City.findById(id)
    if (!city) throw new Error()
    console.log('City found')
    const recommendation = city.recommendations.id(recommendationId)
    console.log(recommendation)
    if (!recommendation) throw new Error()
    console.log('Recommendation Found')
    const rating = req.body
    recommendation.ratings.push(rating)
    await city.save({ validateModifiedOnly: true })
    return res.status(200).json(city)
  } catch (err) {
    console.log(err)
    return res.status(404).json({ message: 'Something went wrong' })
  }
}