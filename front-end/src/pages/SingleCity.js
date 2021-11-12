
import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import CityInformation from '../components/CityInformation'
import { getCity } from '../helpers/api'

const SingleCity = () => {
  const [city, setCity] = useState(null)
  const { id } = useParams()
  //   const history = useHistory()

  useEffect(() => {
    getCity(id).then(setCity)
  }, [id])
  
  console.log('single city page loaded', city)
  return (
    <section>
      {city ? 
        <CityInformation {...city} isHorizontal={true} />
<<<<<<< HEAD
        : 
=======
        :  
>>>>>>> development
        <div>
          <h4>Loading...</h4>
        </div>
      }
<<<<<<< HEAD
    </section>
=======
    </section>  
>>>>>>> development
  )
}

export default SingleCity
