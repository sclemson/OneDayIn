import express from 'express'
import {
  getAllCities,
  getSingleCity,
  addARecommendation,
} from '../controllers/cities.js'
import { registerUser, loginUser } from '../controllers/auth.js'
import { secureRoute } from './secureRoute.js'
import { getUserProfile } from '../controllers/users.js'

const router = express.Router()

router
  .route('/cities')
  .get(getAllCities)

router
  .route('/cities/:id')
  .get(getSingleCity)

router.route('/profile/').get(secureRoute, getUserProfile)

router.route('/register').post(registerUser)

router.route('/login').post(loginUser)

router.route('/cities/:id/recommendations').post(secureRoute, addARecommendation)

export default router