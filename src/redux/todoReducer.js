const initialState = {
    isLoading: false,
    DataTodo : [],
    
   
  }
  const checkin = (state = initialState, action) => {
    switch (action.type) {
      case 'GET_TODO_FULFILLED':
        return {
          ...state,
          isLoading: false,
          DataTodo: action.payload.data,
        }
      case 'GET_TODO_PENDING':
        return {
          ...state,
          isLoading: true
        }
      default:
        return state;
    }
  }
  export default todo;