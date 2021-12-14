const models = require('../database/models');

//post
const createUser = async (req, res) => {
  try{
	const user = await models.User.create(req.body);
	return res.status(201).json({user});  
  } catch(error){
  return res.status(500).json({ error: error.message });
  }
};

//get
const getAllUser = async (req, res) => {
  console.log('getting user');
  try{
	const user = await models.User.findAll({
	  include: []
});
	return res.status(200).json({ user });
  } catch(error) {
	return res.status(500).send(error.message);
  }
};

module.exports = {
  createUser,
  getAllUser
}
