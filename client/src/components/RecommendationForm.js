import React, { useState } from 'react'
import { addCityRecommendation } from '../helpers/api'
import { useHistory } from 'react-router'
import { Link } from 'react-router-dom'


const RecommendationForm = ({ name, country, bannerImage, _id }) => {

  const [data, setData] = useState({
    type: null,
    title: null,
    location: null,
    text: null,
    price: null,
    valueRating: null,
    qualityRating: null
  })

  const history = useHistory()
  const [error, setError] = useState(false)

  const handleError = (error) => {
    if (error.response) {
      console.log(error.response.data)
      setError(true)
    }
  }

  const handleSuccessfulRecommendation = () => {
    console.log('added rec')
    history.push(`/cities/${_id}/recommendations/${data.type}`)
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
    addCityRecommendation(_id, data).then(handleSuccessfulRecommendation).catch(handleError)
  }


  return (
    <div className='recommendation-page'>
      <div className='top-section' style={{ backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.15), rgba(0, 0, 0, 0.15)), url(${bannerImage})` }}>
        <h2><Link to={`/cities/${_id}`}>{name}</Link></h2>
        <h3>{country}</h3>
      </div>
      <div className='recommendation-form'>
        <form onSubmit={handleSubmit}>
          <h3>Add Recommendation</h3>
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
          <div className='form-field'><input id='title' name='title' type='text' placeholder='Name of Recommendation' onChange={handleChange}/></div>
          <div className='form-field'><input id='location' type='text' name='location' placeholder='Street / Area Name' onChange={handleChange}/></div>
          <div className='form-field'><textarea className='text-area' id='text' name='text' placeholder='Why are you recommending it?' onChange={handleChange}/></div>
          <div className='radio'>
            <div><label htmlFor='cheap'><i className="fas fa-coins"></i></label><input type='radio' id='cheap' name='price' value={1} onChange={handleNumberChange} /></div> 
            <div><label htmlFor='middle-price'><i className="fas fa-coins"></i><i className="fas fa-coins"></i></label><input type='radio' id='middle-price' name='price' value={2} onChange={handleNumberChange} /></div> 
            <div><label htmlFor='expensive'><i className="fas fa-coins"></i><i className="fas fa-coins"></i><i className="fas fa-coins"></i></label><input type='radio' id='expensive' name='price' value={3} onChange={handleNumberChange} /></div> 
          </div>
          <div className='form-field'><input id='valueRating' name='valueRating' type='number' min={1} max={5} placeholder='Value Rating' onChange={handleNumberChange}/></div>
          <div className='form-field'><input id='qualityRating' name='qualityRating' type='number' min={1} max={5} placeholder='Quality Rating' onChange={handleNumberChange}/></div>
          
          <div className= 'form-field-submit'>
            <input type='submit' id='submit' value='Submit' />
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

export default RecommendationForm