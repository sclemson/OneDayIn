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
      const newRecommendation = { ...req.body, owner: req.currentUser._id, city: id, cityname: city.name }
      city.recommendations.push(newRecommendation)
      req.currentUser.recommendations.push(newRecommendation)
      await city.save({ validateModifiedOnly: true })
      await req.currentUser.save({ validateModifiedOnly: true })
      return res.status(200).json(city)
    } catch (err) {
      console.log(err)
      return res.status(404).json({ message: 'Something went wrong' })
    }
  }

  // GET A RECOMMENDATION
export const getRecommendation = async (req, res) => {
  try {
    const { id, recommendationId } = req.params
    const city = await City.findById(id)
    if (!city) throw new Error()
    console.log('City found')
    const recommendation = city.recommendations.id(recommendationId)
    if (!recommendation) throw new Error()
    console.log('Recommendation Found')
    return res.status(200).json(recommendation)
  } catch (err) {
    console.log(err)
    return res.status(404).json({ message: 'Something went wrong' })
  }
}

// EDIT A RECOMMENDATION
export const editRecommendation = async (req, res) => {
  try {
    const { id, recommendationId } = req.params
    const city = await City.findById(id)
    if (!city) throw new Error()
    console.log('City found')
    const recommendationToEdit = city.recommendations.id(recommendationId)
    if (!recommendationToEdit) throw new Error()
    console.log('Recommendation Found')
    Object.assign(recommendationToEdit, req.body)
    await city.save({ validateModifiedOnly: true })
    const user = req.currentUser
    const newUserRecommendations = user.recommendations.filter(rec => (rec.title !== recommendationToEdit.title && rec.location !== recommendationToEdit.location))
    user.recommendations = newUserRecommendations
    const editedRecommendation = {...recommendationToEdit, ...req.body, cityname: city.name}
    user.recommendations.push(editedRecommendation)
    await user.save({ validateModifiedOnly: true })
    return res.status(200).json(city)
  } catch (err) {
    console.log(err)
    return res.status(404).json({ message: 'Something went wrong' })
  }
}

// DELETE A RECOMMENDATION
export const DeleteRecommendation = async (req, res) => {
  try {
    const { id, recommendationId } = req.params
    const city = await City.findById(id)
    const user = req.currentUser
    if (!city) throw new Error()
    console.log('City found')
    const recommendationToDelete = city.recommendations.id(recommendationId)
    if (!recommendationToDelete) throw new Error()
    console.log('Recommendation Found')
    const newRecommendations = city.recommendations.filter(rec => rec._id !== recommendationToDelete._id)
    city.recommendations = newRecommendations
    const newUserRecommendations = user.recommendations.filter(rec => (rec.title !== recommendationToDelete.title && rec.location !== recommendationToDelete.location))
    user.recommendations = newUserRecommendations
    await city.save({ validateModifiedOnly: true })
    await user.save({ validateModifiedOnly: true })
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
    const city = await City.findById(id)
    const user= req.currentUser
    if (!city) throw new Error()
    console.log('City found')
    const recommendation = city.recommendations.id(recommendationId)
    console.log(recommendation)
    if (!recommendation) throw new Error()
    console.log('Recommendation Found')
    console.log(req.currentUser)
    const rating = { ...req.body, owner: req.currentUser._id }
    recommendation.ratings.push(rating)
    await city.save({ validateModifiedOnly: true })
    return res.status(200).json(city)
  } catch (err) {
    console.log(err)
    return res.status(404).json({ message: 'Something went wrong' })
  }
}

// EDIT A RATING
export const editARating = async (req, res) => {
  try {
    const { id, recommendationId, ratingId } = req.params
    console.log(recommendationId, ratingId)
    const city = await City.findById(id)
    if (!city) throw new Error()
    console.log('City found')
    const recommendation = city.recommendations.id(recommendationId)
    console.log(recommendation)
    if (!recommendation) throw new Error()
    console.log('Recommendation Found')
    const ratingToEdit = recommendation.ratings.id(ratingId)
    Object.assign(ratingToEdit, req.body)
    await city.save({ validateModifiedOnly: true })
    return res.status(200).json(city)
  } catch (err) {
    console.log(err)
    return res.status(404).json({ message: 'Something went wrong' })
  }
}