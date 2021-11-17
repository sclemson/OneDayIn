import React, { useEffect, useState } from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'

import Nav from './components/Nav'
// import Example from './components/Hamburger'
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
<<<<<<< HEAD
import OtherProfiles from './pages/OtherProfiles'
import EditRecommendation from './pages/EditRecommendation'
=======
import Footer from './components/Footer'
>>>>>>> development

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
        {/* <Example isLoggedIn={isLoggedIn} setIsLoggedIn={setIsLoggedIn}  
          user={user} setUser={setUser}/> */}
        <Nav isLoggedIn={isLoggedIn} setIsLoggedIn={setIsLoggedIn}  
          user={user} setUser={setUser}/>
        <Header />
      </header>
      <main>
        {/* In a switch, only the first route that matches is shown. */}
        <Switch>
          {/*
              Each of our routes has two props: a 'path' to match,
              and a 'component' to render when we do.
            */}
<<<<<<< HEAD
          <Route path='/cities/:id/recommendations/edit/:recId' component={EditRecommendation} />
=======
            
>>>>>>> development
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
          <Route path='/profiles/:id' component={OtherProfiles} />
          
          {/* By not specifying a path, we catch all. */}
          <Route component={NotFound} />
        </Switch>
      </main>
      <footer className="app-footer">
        <Footer />
      </footer>
    </Router>
  )
}

export default App