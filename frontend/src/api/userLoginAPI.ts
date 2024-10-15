import request from '../utils'

const userLoginAPI = async () => {
  try {
    const response = await request.get('/user-login');
    console.log(response)
    return response; 
  } catch (error) {
    console.error('Error during user login API request:', error);
  }
};

export default userLoginAPI;