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
    console.log('single city page loaded', city)
  }, [id])

  //   const handleDeleteClick = () => {
  //     deleteCheese(id)
  //       .then((data) => {
  //         console.log(data)
  //         // Redirect the user after a successful delete
  //         history.push('/cheeses')
  //       })
  //       .catch((err) => {
  //         console.error(err)
  //         alert(err)
  //       })
  //   }

  return (
    <section>
      {city ? 
        <CityInformation {...city} isHorizontal={true} />
        :  
        <div>
          <h4>Loading...</h4>
        </div>
      }
    </section>  
  )
}

export default SingleCity