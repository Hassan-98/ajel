import axios from 'axios';

axios.defaults.baseURL = process.env.REACT_APP_API_URL;

type AuthHeader = {
  authorization: string;
}

export const generateAuthHeaders = (): AuthHeader => {
  let token = localStorage.getItem('login-token');

  if (!token) return { 'authorization':  "" }

  return { 'authorization':  'Bearer ' + token }
}

export default axios;
