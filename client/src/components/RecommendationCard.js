import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { addRating, deleteCityRecommendation, editRating } from '../helpers/api'
import { useHistory } from 'react-router'
import { getUserId, getToken } from '../helpers/auth'
import { OneStar, TwoStar, ThreeStar, FourStar, FiveStar } from './Stars'


const RecommendationCard = ({ cityId, _id, owner, title, location, text, price, valueRating, qualityRating, averageRating, ratings }) => {
  
  const [data, setData] = useState({
    rating: null
  })
  
  const [ userHasRated, setUserHasRated] = useState(false)
  const [userRating, setUserRating] = useState(null)
  const [userRatingId, setUserRatingId] = useState(null)
  const history = useHistory()
  const [isLoggedIn, setIsLoggedIn] = useState(false)
  console.log(owner._id)
  const userId = getUserId()

  useEffect(() => {

    if (getToken()) {
      setIsLoggedIn(true)
    } else {
      setIsLoggedIn(false)
    }


    const checkUserRating = ratings.filter(rating => rating.owner === userId)
    if (checkUserRating.length){
      setUserHasRated(true)
      setUserRating(checkUserRating[0].rating)
      setUserRatingId(checkUserRating[0]._id)
    }
  }, [])

  const handleError = (error) => {
    if (error.response) {
      console.log(error.response.data)
    }
  }

  const handleSuccessfulRating = () => {
    console.log('added rec')
    history.go(0)
  }

  const handleNumberChange = (event) => {
    const { name, value } = event.target
    setData({
      ...data,
      [name]: Number(value)
    })
  }
  
  const handleSubmit = async (event) => {
    event.preventDefault()
    addRating(cityId, _id, data).then(handleSuccessfulRating).catch(handleError)
  }

  const handleEdit = async (event) => {
    event.preventDefault()
    editRating(cityId, _id, userRatingId, data).then(handleSuccessfulRating).catch(handleError)
    console.log(data)
  }

  const handleDelete = async () => {
    deleteCityRecommendation(cityId, _id).then(handleSuccessfulRating).catch(handleError)
  }
  
  return (
    <div className='rec-page'>
      <div className='user-rec'>
        <div className='top-row'>
          <h2>{title}</h2>
          {userId === owner._id ?
            <div className='user-options'>
              <h6><Link to={`/cities/${cityId}/recommendations/edit/${_id}`}>Edit Your Recommendation</Link></h6>
              <h6><button onClick={handleDelete}>Delete</button></h6>
            </div>
            : <></>
          }
        </div>
        <div className='second-row'>
          <h4>{location}</h4>
        </div>
        <div className='third-row'>
          {text}
        </div>
        <div className='fourth-row'>
          { price === 1 ?
            <div className='user-rec-price'><i className="fas fa-coins"></i></div>
            : price === 2 ?
              <div className='user-rec-price'>
                <i className="fas fa-coins"></i>
                <i className="fas fa-coins"></i>
              </div>
              : price === 3 ?
                <div className='user-rec-price'>
                  <i className="fas fa-coins"></i>
                  <i className="fas fa-coins"></i>
                  <i className="fas fa-coins"></i>
                </div>
                :
                <></>
          }
          { valueRating === 1 ?
            <div className='user-rec-value'>
              <p>Value Rating: </p>
              <OneStar />
            </div>
            : valueRating === 2 ?
              <div className='user-rec-value'>
                <p>Value Rating: </p>
                <TwoStar />
              </div>
              : valueRating === 3 ?
                <div className='user-rec-value'>
                  <p>Value Rating: </p>
                  <ThreeStar />
                </div>
                : valueRating === 4 ?
                  <div className='user-rec-value'>
                    <p>Value Rating: </p>
                    <FourStar />
                  </div>
                  : valueRating === 5 ?
                    <div className='user-rec-value'>
                      <p>Value Rating: </p>
                      <FiveStar />
                    </div>
                    : <> </>
          }
          { qualityRating === 1 ?
            <div className='user-rec-quality'>
              <p>Quality Rating: </p>
              <OneStar />
            </div>
            : qualityRating === 2 ?
              <div className='user-rec-quality'>
                <p>Quality Rating: </p>
                <TwoStar />
              </div>
              : qualityRating === 3 ?
                <div className='user-rec-quality'>
                  <p>Quality Rating: </p>
                  <ThreeStar />
                </div>
                : qualityRating === 4 ?
                  <div className='user-rec-quality'>
                    <p>Quality Rating: </p>
                    <FourStar />
                  </div>
                  : qualityRating === 5 ?
                    <div className='user-rec-quality'>
                      <p>Quality Rating: </p>
                      <FiveStar />
                    </div>
                    : <> </>
          }
        </div>
        <div className='bottom-row'>
          { !averageRating ?
            <h6>Average Rating: Not Rated Yet</h6>
            :
            <h6>Average Rating: {averageRating}</h6>
          }
          {isLoggedIn ?
            !userHasRated ?
              <form className='rec-rating' onSubmit={handleSubmit}>
                <h6>Rate this recommendation:</h6>
                <div className='form-field'><input className='rating' name='rating' type='number' min='1' max='5' onChange={handleNumberChange} /></div>
                <div className='form-field'><input type='submit' className='submit' value='Submit' /></div>
              </form>
              :
              <form className='rec-rating' onSubmit={handleEdit}>
                <h6>Your current rating: {userRating}</h6>
                <div className='form-field'><input className='rating' name='rating' type='number' min='1' max='5' onChange={handleNumberChange} /></div>
                <div className='form-field'><input type='submit' className='submit' value='Change' /></div>
              </form>
            :
            <div><h6>Please log in to rate this recommendation</h6></div>
          }
          <h6>submitted by <Link to={`/profiles/${owner._id}`}>{owner.username}</Link></h6>
        </div>
      </div>
    </div>
  )
}

export default RecommendationCard
