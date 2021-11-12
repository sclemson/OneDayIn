import React from 'react'
import { getUserName } from '../helpers/api'
import { useEffect, useState } from 'react'
import { useParams } from 'react-router'

const Profile = () => {
  const [user, setUser] = useState(null)
  const { id } = useParams()
  //   const history = useHistory()
  console.log(id)
  useEffect(() => {
    getUserName(id).then(setUser)
    console.log('single user page loaded', user)
  }, [id])
  return (
    <section>
      
      {user ? (
        <div>
          <h3>{user.username}</h3>
        </div>
      ) : (
        <div>
          <h4>Loading...</h4>
        </div>
      )}
    </section>
  )
  
}

export default Profile
