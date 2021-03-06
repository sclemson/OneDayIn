import express from 'express'
import {
  getAllCities,
  getSingleCity,
  addARecommendation,
  addARating,
  editARating,
  getRecommendation,
  editRecommendation,
  DeleteRecommendation
} from '../controllers/cities.js'
import { registerUser, loginUser } from '../controllers/auth.js'
import { secureRoute } from './secureRoute.js'
import { getAllusers, getUserProfile, editUserProfile } from '../controllers/users.js'

const router = express.Router()

router
  .route('/cities')
  .get(getAllCities)


router
  .route('/cities/:id')
  .get(getSingleCity)

router.route('/users').get(getAllusers)
router.route('/users/:id')
  .get(secureRoute, getUserProfile)
  .put(secureRoute, editUserProfile)

router.route('/register').post(registerUser)

router.route('/login').post(loginUser)

router.route('/cities/:id/recommendations').post(secureRoute, addARecommendation)

router.route('/cities/:id/recommendations/:recommendationId').post(secureRoute, addARating)
  .get(getRecommendation)
  .put(secureRoute, editRecommendation)
  .delete(secureRoute, DeleteRecommendation)

router.route('/cities/:id/recommendations/:recommendationId/ratings/:ratingId').put(secureRoute, editARating)

export default router