import React, { useState, useEffect } from 'react'
import Hotspot from './Hotspot'
import HotspotNoCoins from './HotspotNoCoins'
import SingleHotspot from './SingleHotspot'
import { Link } from 'react-router-dom'
import { getToken } from '../helpers/auth'


const CityInformation = ({
  _id,
  name,
  country,
  languagecode,
  overview,
  bannerImage,
  eat,
  drink,
  see,
  stay,
  walk,
  secret,
  recommendations
}) => {

  console.log(_id)

  const [isLoggedIn, setIsLoggedIn] = useState(false)

  useEffect(() => {
    // We consider the user "logged in" whenever the token is present…
    if (getToken()) {
      setIsLoggedIn(true)
    } else {
      setIsLoggedIn(false)
    }
  }, [])

  const sortedRecommendations = recommendations.sort((a, b) => (a.averageRating > b.averageRating ? -1 : 1))
  console.log(sortedRecommendations) 



  
  return (
    <div className='CityInformation'>
      <div className='top-section' style={{ backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.15), rgba(0, 0, 0, 0.15)), url(${bannerImage})` }}>
        <h2>{name} </h2>
        <h3>{country}</h3>
      </div>
      <div className='info-section'>
        <div className="overview"><p>{overview}</p></div>
        {languagecode === 'en' ?
          <></>
          :
          <div className='language'><p>Stuck for something to say? <a href={`https://www.duolingo.com/dictionary/${languagecode}`} target='_blank' rel='noreferrer'>Try this</a></p></div>
        }
      </div>
      <div className='hotspot-section'>
        <div className='hotspot-row'>
          <div className='hotspot-icon'>
            <i className="fas fa-utensils"></i>
          </div>
          <Hotspot arr={eat} />
        </div>
        <div className='hotspot-row'>
          <div className='hotspot-icon'>
            <i className="fas fa-glass-cheers"></i>
          </div>
          <Hotspot arr={drink} />
        </div>
        <div className='hotspot-row'>
          <div className='hotspot-icon'>
            <i className="fas fa-bed"></i>
          </div>
          <Hotspot arr={stay} />
        </div>
        <div className='hotspot-row'>
          <div className='hotspot-icon'>
            <i className="fas fa-binoculars"></i>
          </div>
          <HotspotNoCoins arr={see} />
        </div>
        <div className='hotspot-single'>
          <div className='hotspot'>
            <div className='hotspot-icon'>
              <i className="fas fa-hiking"></i>
            </div>
            <SingleHotspot arr={walk} />
          </div>
          <div className='hotspot'>
            <div className='hotspot-icon'>
              <i className="fas fa-user-secret"></i>
            </div>
            <SingleHotspot arr={secret} />
          </div>
        </div>
        <div className='top-rated'>
          <h3>Highest Rated User Recommendation:</h3>
          {sortedRecommendations.length > 0 ?
            <div className="top-suggestion">
              <div className='user-rec-icon'>
                {sortedRecommendations[0].type === 'eat' ?
                  <i className="fas fa-utensils"></i>
                  : sortedRecommendations[0].type === 'drink' ?
                    <i className="fas fa-glass-cheers"></i>
                    : sortedRecommendations[0].type === 'stay' ?
                      <i className="fas fa-bed"></i>
                      : sortedRecommendations[0].type === 'see' ?
                        <i className="fas fa-binoculars"></i>
                        : sortedRecommendations[0].type === 'walk' ?
                          <i className="fas fa-hiking"></i>
                          : sortedRecommendations[0].type === 'secret' ?
                            <i className="fas fa-user-secret"></i>
                            : <></>
                }
              </div>
              <div className='top-data'>
                <h6><Link to={`/cities/${_id}/recommendations/${sortedRecommendations[0].type}`}>{sortedRecommendations[0].title}</Link></h6>
                <p>{sortedRecommendations[0].location}</p>
                <div className='owner-info'>
                  <p>Average Rating: {sortedRecommendations[0].averageRating}</p>
                  <p className='owner'>Submitted by <Link to={`/profiles/${sortedRecommendations[0].owner._id}`}>{sortedRecommendations[0].owner.username}</Link></p>
                </div>
              </div>
            </div>
            : <p className='no-rating'>This city hasn&apos;t had any user recommendations yet</p>
          }
        </div>
      </div>
      <div className='user-suggestion-section'>
        <div className='user-suggestion'>
          <div className='user-top-row'>
            <h3>User Suggestions:</h3>
          </div>
         
          
          <div className='user-bottom-row'>
            <Link to={`/cities/${_id}/recommendations/eat`}><i className="fas fa-utensils"></i></Link>
            <Link to={`/cities/${_id}/recommendations/drink`}><i className="fas fa-glass-cheers"></i></Link>
            <Link to={`/cities/${_id}/recommendations/stay`}><i className="fas fa-bed"></i></Link>
            <Link to={`/cities/${_id}/recommendations/see`}><i className="fas fa-binoculars"></i></Link>
            <Link to={`/cities/${_id}/recommendations/walk`}><i className="fas fa-hiking"></i></Link>
            <Link to={`/cities/${_id}/recommendations/secret`}><i className="fas fa-user-secret"></i></Link>
          </div>  
          
        </div>
        {isLoggedIn ?
          <div className='add-suggestion'>
            <h4>Got a recommendation? <Link to={`/cities/${_id}/recommendations`}>Add it here</Link> </h4>
          </div>
          :
          <></>
        }
      </div>
    </div>
  )
}

export default CityInformation