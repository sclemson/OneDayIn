import React, { useEffect, useState } from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'

import Nav from './components/Nav'
import Header from './components/Header'
import { getToken } from './helpers/auth'
import About from './pages/About'
import CitiesList from './pages/CitiesList'
import SingleCity from './pages/SingleCity'
import Home from './pages/Home'
import Login from './pages/Login'
import NotFound from './pages/NotFound'
import Register from './pages/Register'
import Profile from './pages/Profile'
import AddRecommendation from './pages/AddRecommendation'
import { UserRecommendations } from './pages/UserRecommendations'

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false)
  const [user, setUser] = useState(null)

  useEffect(() => {
    // We consider the user "logged in" whenever the token is present…
    if (getToken()) {
      setIsLoggedIn(true)
    } else {
      setIsLoggedIn(false)
    }
  }, [])


  return (
    <Router>
      <header className='App-header'>
        <Header />
        <Nav isLoggedIn={isLoggedIn} setIsLoggedIn={setIsLoggedIn}  
          user={user} setUser={setUser}/>
      </header>
      <main>
        {/* In a switch, only the first route that matches is shown. */}
        <Switch>
          {/*
              Each of our routes has two props: a 'path' to match,
              and a 'component' to render when we do.
            */}
          <Route path='/cities/:id/recommendations/:type' component={UserRecommendations} />
          <Route path='/cities/:id/recommendations' component={AddRecommendation} />
          <Route path='/cities/:id' component={SingleCity} />
          <Route path='/cities' component={CitiesList} />
          <Route exact path='/' component={Home} />
          <Route path='/about' component={About} />
          <Route
            path='/login'
            component={(props) => (
              <Login {...props} setIsLoggedIn={setIsLoggedIn} />
            )}
          />
          <Route path='/register' component={Register} />
          <Route path='/users/:id' component={Profile} />
          
          {/* By not specifying a path, we catch all. */}
          <Route component={NotFound} />
        </Switch>
      </main>
    </Router>
  )
}

export default App