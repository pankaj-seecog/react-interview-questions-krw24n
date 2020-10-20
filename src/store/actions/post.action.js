import axios from "axios";


export const postAction = () => {
  console.log('Inside postAction')
  return  (dispatch) => {
    console.log('Start calling api!')
    return axios.get("https://jsonplaceholder.typicode.com/posts/")
      .then(res => {
        console.log("The posts are ==>", res.data);
        dispatch({
          type: "POSTS",
          value: res.data.slice(0,2)
        });
      })
      .catch(err => {
        console.log("The error is ", err);
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
        console.log("The single post is ==>", res.data);
        dispatch({
          type: "POST",
          value: res.data
        });
      })
      .catch(err => {
        console.log("The error is ", err);
        dispatch({
          type:"ERR",
          value : err
        })

      });

  }
}
