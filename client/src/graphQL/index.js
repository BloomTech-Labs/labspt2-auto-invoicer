import axios from 'axios'

export const Post = query => {
  return axios.post('http://localhost:5000/graphql', query)
}

export const inputToString = input => {
  const data = [];
  for(let key in input) {
    data.push(`${key}: "${input[key]}"`)
  }
  input = data.join(", ");
  return input
}