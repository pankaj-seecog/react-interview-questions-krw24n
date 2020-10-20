import axios from "axios";


let postAction = () => {
  console.log('Inside postAction')
  return  (dispatch) => {
    console.log('Start calling api!')
    return axios.get("https://jsonplaceholder.typicode.com/posts/")
      .then(res => {
        console.log("The posts are ==>", res.data);
        dispatch({
          type: "POSTS",
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
  };
};

export default postAction;
