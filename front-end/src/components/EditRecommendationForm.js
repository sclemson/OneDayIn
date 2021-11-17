import React, { useState } from 'react'
import { editCityRecommendation } from '../helpers/api'
import { useHistory } from 'react-router'


const EditRecommendationForm = ({ cityId, _id, type, title, location, text, price, valueRating, qualityRating }) => {

  const [data, setData] = useState({
    type: type,
    title: title,
    location: location,
    text: text,
    price: price,
    valueRating: valueRating,
    qualityRating: qualityRating
  })

  const history = useHistory()
  const [error, setError] = useState(false)

  const handleError = (error) => {
    if (error.response) {
      console.log(error.response.data)
      setError(true)
    }
  }

  const handleSuccessfulEdit = () => {
    console.log('edited rec')
    history.push(`/cities/${cityId}/recommendations/${data.type}`)
  }

  const handleChange = (event) => {
    const { name, value } = event.target
    setData({
      ...data,
      [name]: value
    })
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
    if (data.type === '-Select Type-') throw new Error()
    console.log(data)
    editCityRecommendation(cityId, _id, data).then(handleSuccessfulEdit).catch(handleError)
  }

  return (
    <div className='edit-recommendation'>
      <div className='recommendation-form'>
        <form onSubmit={handleSubmit}>
          <h3>Edit your recommendation:</h3>
          <div className='form-field'>
            <select className='select-type' id='type' name='type' onChange={handleChange}>
              <option>-Select Type-</option>
              <option value="eat">Eat</option>
              <option value="drink">Drink</option>
              <option value="stay">Stay</option>
              <option value="see">See</option>
              <option value="walk">Walk</option>
              <option value="secret">Secret</option>
            </select>
          </div>
          <div className='form-field'><input id='title' name='title' type='text' onChange={handleChange}/></div>
          <div className='form-field'><input id='location' type='text' name='location' placeholder='Street Name' onChange={handleChange}/></div>
          <div className='form-field'><textarea className='text-area' id='text' name='text' placeholder='Why are you recommending it?' onChange={handleChange}/></div>
          <div className='radio'>
            <div><label htmlFor='cheap'><i className="fas fa-coins"></i></label><input type='radio' id='cheap' name='price' value={1} onChange={handleNumberChange} /></div> 
            <div><label htmlFor='middle-price'><i className="fas fa-coins"></i><i className="fas fa-coins"></i></label><input type='radio' id='middle-price' name='price' value={2} onChange={handleNumberChange} /></div> 
            <div><label htmlFor='expensive'><i className="fas fa-coins"></i><i className="fas fa-coins"></i><i className="fas fa-coins"></i></label><input type='radio' id='expensive' name='price' value={3} onChange={handleNumberChange} /></div> 
          </div>
          <div className='form-field'><input id='valueRating' name='valueRating' type='number' min={1} max={5} placeholder='Value Rating' onChange={handleNumberChange}/></div>
          <div className='form-field'><input id='qualityRating' name='qualityRating' type='number' min={1} max={5} placeholder='Quality Rating' onChange={handleNumberChange}/></div>
          
          <div className= 'form-field'>
            <input type='submit' className='submit' value='Submit Recommendation' />
          </div>
        </form>
      </div>
      {error ? (
        <div className='error'>
          <p>It looks like something went wrong. Please try again.</p>
        </div>
      ) : (
        <></>
      )}
    </div>
  )
}

export default EditRecommendationForm