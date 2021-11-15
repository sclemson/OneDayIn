import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router'
import { getCity } from '../helpers/api'
import RecommendationCard from '../components/RecommendationCard'
import { Link } from 'react-router-dom'

export const UserRecommendations = () => {
  
  const [ city, setCity ] = useState(null)
  const [ sortedRecommendations, setSortedRecommendations] = useState([])
  const { id, type } = useParams()
  console.log(id, type)

  useEffect(() => {

    const sortRecommendations = async (type) => {
      const selectedCity = await getCity(id)
      setCity(selectedCity)
      setSortedRecommendations(selectedCity.recommendations.filter(rec => rec.type === type)
        .sort((a, b) => (a.averageRating > b.averageRating) ? -1 : 1))
      console.log(sortedRecommendations)
    }

    sortRecommendations(type)
  }, [id])



  return (
    <section>
      {city ?
        <div className='user-rec-page'>
          <div className='top-section' style={{ backgroundImage: `url(${city.bannerImage})` }}>
            <h2>{city.name} </h2>
            <h3>{city.country}</h3>
          </div>
          <div className='type-section'>
            {type === 'eat' ?
              <i className="fas fa-utensils"></i>
              : type === 'drink' ?
                <i className="fas fa-glass-cheers"></i>
                : type === 'stay' ?
                  <i className="fas fa-bed"></i>
                  : type === 'see' ?
                    <i className="fas fa-binoculars"></i>
                    : type === 'walk' ?
                      <i className="fas fa-hiking"></i>
                      : type === 'secret' ?
                        <i className="fas fa-user-secret"></i>
                        : <></>
            }
            <h3>User Recommendations</h3>

          </div>
          <div className='user-recommendations'>
            <ul>
              {sortedRecommendations.map((rec) => (
                <li key={rec._id}>
                  <RecommendationCard {...rec} cityId={city._id}/>
                </li>
              ))}
            </ul>
          </div>
          <div className='add-suggestion'>
            <h4>Got a recommendation? <Link to={`/cities/${city._id}/recommendations`}>Add it here</Link> </h4>
          </div>
        </div>
        : 
        <div>
          <h4>Loading...</h4>
        </div>
      }
    </section>
  )
}
