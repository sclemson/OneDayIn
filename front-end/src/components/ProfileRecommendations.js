import React from 'react'
import { Link } from 'react-router-dom'
import { OneStar, TwoStar, ThreeStar, FourStar, FiveStar } from './Stars'

const ProfileRecommendations = ({ city, type, title, cityname, text, price, valueRating, qualityRating }) => {
  
  

  return (
    
    <div className='recommendation'>
      <div className='top-row'>
        <h2><Link to={`/cities/${city}/recommendations/${type}`}>{title}</Link></h2>
      </div>
      <div className='second-row'>
        <h4><Link to={`/cities/${city}`}>{cityname}</Link></h4>
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
            <div><OneStar /></div>
          </div>
          : valueRating === 2 ?
            <div className='user-rec-value'>
              <p>Value Rating: </p>
              <div>
                <TwoStar />
              </div>
            </div>
            : valueRating === 3 ?
              <div className='user-rec-value'>
                <p>Value Rating: </p>
                <div>
                  <ThreeStar />
                </div>
              </div>
              : valueRating === 4 ?
                <div className='user-rec-value'>
                  <p>Value Rating: </p>
                  <div>
                    <FourStar />
                  </div>
                </div>
                : valueRating === 5 ?
                  <div className='user-rec-value'>
                    <p>Value Rating: </p>
                    <div>
                      <FiveStar />
                    </div>
                  </div>
                  : <> </>
        }
        { qualityRating === 1 ?
          <div className='user-rec-quality'>
            <p>Quality Rating: </p>
            <div><OneStar /></div>
          </div>
          : qualityRating === 2 ?
            <div className='user-rec-quality'>
              <p>Quality Rating: </p>
              <div>
                <TwoStar />
              </div>
            </div>
            : qualityRating === 3 ?
              <div className='user-rec-quality'>
                <p>Quality Rating: </p>
                <div>
                  <ThreeStar />
                </div>
              </div>
              : qualityRating === 4 ?
                <div className='user-rec-quality'>
                  <p>Quality Rating: </p>
                  <div>
                    <FourStar />
                  </div>
                </div>
                : qualityRating === 5 ?
                  <div className='user-rec-quality'>
                    <p>Quality Rating: </p>
                    <div>
                      <FiveStar />
                    </div>
                  </div>
                  : <> </>
        }
      </div>
    </div>
  
  )
}

export default ProfileRecommendations
