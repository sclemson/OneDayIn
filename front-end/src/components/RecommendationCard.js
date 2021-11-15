import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { addRating } from '../helpers/api'
import { useHistory } from 'react-router'
import { getUserId } from '../helpers/auth'

const RecommendationCard = ({ cityId, _id, owner, title, location, text, price, valueRating, qualityRating, averageRating, ratings }) => {
  
  const [data, setData] = useState({
    rating: null
  })
  
  const [ userHasRated, setUserHasRated] = useState(false)
  const [userRating, setUserRating] = useState(null)
  const history = useHistory()

  useEffect(() => {
    const userId = getUserId()
    const checkUserRating = ratings.filter(rating => rating.owner === userId)
    console.log(checkUserRating)
    if (checkUserRating.length){
      setUserHasRated(true)
      setUserRating(checkUserRating[0].rating)
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
  
  return (
    <div className='rec-page'>
      <div className='user-rec'>
        <div className='top-row'>
          <h2>{title}</h2>
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
              <i className="fas fa-star"></i>
            </div>
            : valueRating === 2 ?
              <div className='user-rec-value'>
                <p>Value Rating: </p>
                <i className="fas fa-star"></i>
                <i className="fas fa-star"></i>
              </div>
              : valueRating === 3 ?
                <div className='user-rec-value'>
                  <p>Value Rating: </p>
                  <i className="fas fa-star"></i>
                  <i className="fas fa-star"></i>
                  <i className="fas fa-star"></i>
                </div>
                : valueRating === 4 ?
                  <div className='user-rec-value'>
                    <p>Value Rating: </p>
                    <i className="fas fa-star"></i>
                    <i className="fas fa-star"></i>
                    <i className="fas fa-star"></i>
                    <i className="fas fa-star"></i>
                  </div>
                  : valueRating === 5 ?
                    <div className='user-rec-value'>
                      <p>Value Rating: </p>
                      <i className="fas fa-star"></i>
                      <i className="fas fa-star"></i>
                      <i className="fas fa-star"></i>
                      <i className="fas fa-star"></i>
                      <i className="fas fa-star"></i>
                    </div>
                    : <> </>
          }
          { qualityRating === 1 ?
            <div className='user-rec-quality'>
              <p>Quality Rating: </p>
              <i className="fas fa-star"></i>
            </div>
            : qualityRating === 2 ?
              <div className='user-rec-quality'>
                <p>Quality Rating: </p>
                <i className="fas fa-star"></i>
                <i className="fas fa-star"></i>
              </div>
              : qualityRating === 3 ?
                <div className='user-rec-quality'>
                  <p>Quality Rating: </p>
                  <i className="fas fa-star"></i>
                  <i className="fas fa-star"></i>
                  <i className="fas fa-star"></i>
                </div>
                : qualityRating === 4 ?
                  <div className='user-rec-quality'>
                    <p>Quality Rating: </p>
                    <i className="fas fa-star"></i>
                    <i className="fas fa-star"></i>
                    <i className="fas fa-star"></i>
                    <i className="fas fa-star"></i>
                  </div>
                  : qualityRating === 5 ?
                    <div className='user-rec-quality'>
                      <p>Quality Rating: </p>
                      <i className="fas fa-star"></i>
                      <i className="fas fa-star"></i>
                      <i className="fas fa-star"></i>
                      <i className="fas fa-star"></i>
                      <i className="fas fa-star"></i>
                    </div>
                    : <> </>
          }
        </div>
        <div className='bottom-row'>
          { !averageRating ?
            <h6>Recommendation Rating: Not Rated Yet</h6>
            :
            <h6>Recommendation Rating: {averageRating}</h6>
          }
          {userHasRated === false ?
            <form className='rec-rating' onSubmit={handleSubmit}>
              <h6>Rate this recommendation:</h6>
              <div className='form-field'><input className='rating' name='rating' type='number' min='1' max='5' onChange={handleNumberChange} /></div>
              <div className='form-field'><input type='submit' className='submit' value='Submit' /></div>
            </form>
            :
            <div><h6>You rated this: {userRating}</h6></div>
          }
          <h6>submitted by <Link to={`/users/${owner._id}`}>{owner.username}</Link></h6>
        </div>
      </div>
    </div>
  )
}

export default RecommendationCard
