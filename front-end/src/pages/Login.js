import React, { useState } from 'react'
import { Link, useHistory } from 'react-router-dom'
import { login } from '../helpers/api'
import { setToken, setUserId } from '../helpers/auth'
import FormInput from '../components/FormInput'

const Login = ({ setIsLoggedIn }) => {
  // State variables to track user form input
  const [data, setData] = useState({
    username: '',
    password: ''
  })
  const [errorInfo, setErrorInfo] = useState({})
  const [isError, setIsError] = useState(false)
  // We need the routing history hook in order to send the user to the next page
  const history = useHistory()
  const handleSubmit = async (event) => {
    event.preventDefault()
    login(data).then(handleSuccessfulLogin).catch(handleError)
  }
  const handleSuccessfulLogin = ({ token, userId }) => {
    // We need to store the token for later
    setToken(token)
    setUserId(userId)
    // Set the App state variable isLoggedIn to true
    setIsLoggedIn(true)
    setIsError(false)
    // And finally, redirect the user
    history.push('/cities')
  }
  const handleError = (error) => {
    if (error.response) {
      setErrorInfo(error.response.data)
      setIsError(true)
    }
  }
  const handleFormChange = (event) => {
    const { name, value } = event.target
    setData({
      ...data,
      [name]: value
    })
  }
  const formInputProps = { data, errorInfo, handleFormChange }
  return (
    <section className="login">
      <form onSubmit={handleSubmit}>
        <h1>Sign In</h1>
        <FormInput
          placeholder='username'
          type='username'
          name='username'
          {...formInputProps}
        />
        <FormInput
          placeholder='password'
          type='password'
          name='Password'
          {...formInputProps}
        />
        <div className='submit-section'>
          <input type='submit' value='Login' />
        </div>
        {isError ? (
          <div className='error'>
            <p>There appears to have been an error. Please try again.</p>
          </div>
        ) : (
          <></>
        )}
      </form>
      <div className='signup'>
        <p> Not a Member? <Link to='/register'>Sign up here</Link>   
        </p>     
      </div>
    </section>
  )
}
export default Login