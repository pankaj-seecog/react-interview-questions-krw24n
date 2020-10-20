let iniState = {
  err: "",
  posts: []
};
const postReducer = (state = iniState, action) => {
  switch (action.type) {
    case "POSTS":
      console.log("Inside the reducer ", action);
      //Here in reducer we can perform the synchronous operations
      //All async operations are done in redux thunk
      return {
        ...state,
        posts: action.value
      };
    case "ERR":
      return {
        ...state,
        err: action.value
      };
  }
  return state;
};

export default postReducer;
