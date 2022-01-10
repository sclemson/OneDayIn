import React, { useState, useEffect } from 'react'
import WorldMap from 'react-world-map'
import { setContinent } from '../helpers/auth'
import { useHistory } from 'react-router'



const Home = () => {
  const [selected, onSelect] = useState(null)
  const history = useHistory()

  useEffect(() => {
    if (selected === null) return
    console.log(selected)
    setContinent(selected)
    history.push('/filteredcities')
  }, [selected])

  return (
    <>
      <div className="home-page">
        <h2>Where would you like to spend one day?</h2>
        <WorldMap selected={ selected } onSelect={ onSelect } />
      </div>
    </>
  )
}
  

export default Home