import axios from "axios";


export const postAction = () => {
  return  (dispatch) => {
    return axios.get("https://jsonplaceholder.typicode.com/posts/")
      .then(res => {
        dispatch({
          type: "POSTS",
          value: res.data.slice(0,2)
        });
      })
      .catch(err => {
        dispatch({
          type:"ERR",
          value : err
        })

      });
  };
};

export const singlePost = (id)=>{
  return (dispatch)=>{

return axios.get(`https://jsonplaceholder.typicode.com/posts/${id}`).then(res => {
        dispatch({
          type: "POST",
          value: res.data
        });
      })
      .catch(err => {
        dispatch({
          type:"ERR",
          value : err
        })

      });

  }
}
