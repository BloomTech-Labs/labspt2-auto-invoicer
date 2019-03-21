import axios from 'axios'

const Post = query => {
  return axios.post('http://localhost:5000/graphql', query)
}

export default Post