import express from 'express'
import mongoose from 'mongoose'
import { port, dbURI } from './config/environment.js'
import router from './config/router.js'

const app = express()

// Enable CORS

const startServers = async () => {
  try {
    // mongoose connect
    await mongoose.connect(dbURI)
    console.log('Database connected successfully')
    // JSON parser
    
    app.use(express.json())
    // Logger
    app.use((req, _res, next) => {
      console.log(`Request received: ${req.method} - ${req.url}`)
      next()
    })
    // Router
    app.use('/api', router)
    // Catch all
    app.use((_req, res) => {
      res.status(404).json({ message: 'Route Not Found' })
    })
    // Starting server once database has connected
    app.listen(port, () => console.log(`Server up and running on port ${port}`))
  } catch (err) {
    console.log('Something has gone wrong')
    console.log(err)
  }
}
startServers()