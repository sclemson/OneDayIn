import React from 'react'
import { useParams } from 'react-router'
import { getCity } from '../helpers/api'
import { useState, useEffect } from 'react'
import RecommendationForm from '../components/RecommendationForm'

const AddRecommendation = () => {
  const { id } = useParams()
  
  const [city, setCity] = useState(null)

  useEffect(() => {
    getCity(id).then(setCity)
  }, [])


  return (
    <div>
      {city ?
        <div> 
          <RecommendationForm {...city} />
        </div>
        :
        <h4>Loading...</h4> }
      
    </div>
  )
}

export default AddRecommendation