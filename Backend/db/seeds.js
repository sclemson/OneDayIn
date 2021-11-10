import mongoose from 'mongoose'
import { dbURI } from '../config/environment.js'
import City from '../models/city.js'
import citiesData from './data/citiesData.js'
import userData from './data/users.js'
import User from '../models/user.js'

const seedDatabase = async () => {
  try {
    // Connect to the database
    await mongoose.connect(dbURI)
    console.log('Database connected')

    // Drop the database (deleting the database)
    await mongoose.connection.db.dropDatabase()
    console.log('DB dropped')

    // Create users
    const users = await User.create(userData)
    console.log('Users added to the DB', users)

    const citiesWithOwners = citiesData.map(
      (city) => {
        city.owner = users[0]._id
        return city
      }
    )
    console.log('Cities with Owners ->', citiesWithOwners)

    // Seed that database with the data file that we import
    const citiesAdded = await City.create(
      citiesWithOwners
    )
    console.log(` ${citiesAdded.length} Cities added`)

    // Close our connection to the database
    await mongoose.connection.close()
    console.log('Bye')
  } catch (err) {
    console.log(err)

    // Close the connection to the database
    await mongoose.connection.close()
    console.log('Error. Database connection closed')
  }
}

seedDatabase()
