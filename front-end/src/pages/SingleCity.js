import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import CityInformation from '../components/CityInformation'
import { getCity } from '../helpers/api'

const SingleCity = () => {
  const [city, setCity] = useState([])
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
      {/* <p>
        <Link to={`/cities/${id}/edit`}>Edit this city!</Link>
        <button onClick={handleDeleteClick}>Delete this city!</button>
      </p> */}
      <CityInformation {...city} isHorizontal={true} />
    </section>
  )
}

export default SingleCity