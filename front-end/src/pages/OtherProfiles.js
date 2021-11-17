import React from 'react'
import { getCities, getUserName } from '../helpers/api'
import { useEffect, useState } from 'react'
import { useParams } from 'react-router'
import { Link } from 'react-router-dom'
import ProfileRecommendations from '../components/ProfileRecommendations'

const OtherProfiles = () => {
  const [user, setUser] = useState(null)
  //const [cities, setCities] = useState([])
  const { id } = useParams()
  const [cityLink, setCityLink] = useState(false)
  const [linkedCities, setLinkedCities] = useState([])
  const [pageLoad, setPageLoad] = useState(false)

  useEffect(() => {
    
    const getData = async () => {
      const userDetails = await getUserName(id)
      setUser(userDetails)
      const cityDetails = await getCities()
      const checkForLink = cityDetails.filter(city => (city.name === userDetails.favouriteCity))
      setLinkedCities(checkForLink)
      if (checkForLink.length > 0) setCityLink(true)
      console.log(userDetails)
      setPageLoad(true)
    }

    getData()

  }, [id])

  return (
    <section>
      
      {pageLoad ? (
        <div className='profile-page'>
          <div className='profile-box'>
            <div className='top-row'>
              <h2>{user.username}</h2>
            </div>
            <div className='information-row'>
              <p>Recommendations:</p>
              <h3>{user.recommendations.length}</h3>
            </div>
            <div className='information-row'>
              <p>Location: </p>
              <h3>{user.location}</h3>
            </div>
            <div className='information-row'>
              <p>Bio:</p>
              <div className='user-bio'><p>{user.bio}</p></div>
            </div>
            <div className='information-row'>
              <p>Favourite City: </p>
              {cityLink ?
                <h3><Link to={`/cities/${linkedCities[0]._id}`}>{user.favouriteCity}</Link></h3>
                :
                <h3>{user.favouriteCity}</h3>
              }
            </div>
          </div>
          <div className='recommendations-list'>
            <ul>
              {user.recommendations.map((rec) => (
                <li key={rec._id}>
                  <ProfileRecommendations {...rec} />
                </li>
              ))}
            </ul>
          </div>
        </div>
      ) : (
        <div>
          <h4>Loading...</h4>
        </div>
      )}
    </section>
  )
  
}

export default OtherProfiles
