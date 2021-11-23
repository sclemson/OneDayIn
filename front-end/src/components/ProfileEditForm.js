import React from 'react'
import { useState } from 'react'
import { useParams, useHistory } from 'react-router'
import { editUser } from '../helpers/api'


const ProfileEditForm = ({ username, email, location, bio, favouriteCity }) => {
  const { id } = useParams()
  const history = useHistory()

  const [data, setData] = useState({
    username: username,
    email: email,
    location: location,
    bio: bio,
    favouriteCity: favouriteCity
  })


  const handleError = (error) => {
    if (error.response) {
      console.log(error.response.data)
    }
  }

  const handleSuccessfulEdit = () => {
    console.log('edited bio')
    history.push(`/profiles/${id}`)
  }

  const handleChange = (event) => {
    const { name, value } = event.target
    setData({
      ...data,
      [name]: value
    })
  }

  const handleSubmit = async (event) => {
    event.preventDefault()
    console.log(data)
    editUser(id, data).then(handleSuccessfulEdit).catch(handleError)
  }

  return (
    <section>
      <>
        <form className='user-update-info' onSubmit={handleSubmit}>
          <div className='form-field'>
            <p>Username: <span className='current-info'>{username}</span></p>
            <input type='text' name='username' placeholder='edit username' onChange={handleChange}></input>
          </div>
          <div className='form-field'>
            <p>Email: <span className='current-info'>{email}</span></p>
            <input type='text' name='email' placeholder='edit email address' onChange={handleChange}></input>
          </div>
          <div className='form-field'>
            <p>Location: <span className='current-info'>{location}</span></p>
            <input type='text' name='location' placeholder='edit location' onChange={handleChange}></input>
          </div>
          <div className='form-field'>
            <p>Bio: <span className='current-info'>{bio}</span></p>
            <textarea type='text' name='bio' placeholder='edit your bio' onChange={handleChange}></textarea>
          </div>
          <div className='form-field'>
            <p>Favourite City: <span className='current-info'>{favouriteCity}</span></p>
            <input type='text' name='favouriteCity' placeholder='edit your favourite city' onChange={handleChange}></input>
          </div>
          <div className='submit-section'>
            <input type='submit' className='submit' value='Update Profile'></input>
          </div>
        </form>
      </>
    </section>
  )
  
}

export default ProfileEditForm
