import React from 'react'
import { useParams } from 'react-router'
import { getCity, getRecommendation } from '../helpers/api'
import { useState, useEffect } from 'react'
import EditRecommendationForm from '../components/EditRecommendationForm'

const EditRecommendation = () => {
  const { id, recId } = useParams()
  const [city, setCity] = useState(null)
  const [recommendation, setRecommendation] = useState(null)

  useEffect(() => {

    const getData = async() => {
      const cityData = await getCity(id)
      setCity(cityData)
      const recData = await getRecommendation(id, recId)
      setRecommendation(recData)
    }

    getData()
  }, [])


  return (
    <div>
      {recommendation ?
        <div className='recommendation-page'>
          <div className='top-section' style={{ backgroundImage: `url(${city.bannerImage})` }}>
            <h2>{city.name}</h2>
            <h3>{city.country}</h3>
          </div>
          <EditRecommendationForm {...recommendation} cityId={city._id}/>
          <div> 
          </div>
        </div>
        :
        <h4>Loading...</h4> }
      
    </div>
  )
}

export default EditRecommendation