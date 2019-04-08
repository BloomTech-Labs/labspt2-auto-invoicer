import axios from 'axios'

// //production
export const Post = async query => {
  return axios.post('https://api.myautoinvoicer.com/graphql', query)
}

export const inputToString = input => {
  const data = [];
  for(let key in input) {
    data.push(`${key}: "${input[key]}"`)
  }
  input = data.join(", ");
  return input
}