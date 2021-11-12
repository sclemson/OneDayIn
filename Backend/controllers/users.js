import User from '../models/user.js'

export const getAllusers = async (_req, res) => {
  const users = await User.find()
  console.log('Cities', users)
  return res.status(200).json(users)
}

export const getUserProfile = async (req, res) => {
  try {
    const user = await User.findById(req.currentUser._id)
    if (!user) throw new Error()
    return res.status(200).json(user)
  } catch (err) {
    console.log(err)
    return res.status(404).json({ message: 'not found' })
  }
}