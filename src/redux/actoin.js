import axios from 'axios'
export const getTodo = () => {
    return {
      type: 'GET_TODO',
      payload :axios.get('https://todos-restful-api.herokuapp.com/api/todos')
    }
  }