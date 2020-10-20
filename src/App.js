import React from "react";
import "./style.css";
import App15 from "./App15";
import { connect } from "react-redux";
import {postAction,singlePost} from "./store/actions/post.action";
const App = props => {
  return (
    <div>
      <hr />
      <button onClick={props.getPosts}>Get Posts</button>
      <hr />
      {props.err}
      <ul>
        {props.postList.map(post => {
          return <li onClick={()=>{
            props.getPost(post.id)
          }}>{post.title}</li>;
        })}
      </ul>
      <hr/>
      Title : {props.post.title}
    </div>
  );
};

const mapStateToProps = state => {
  console.log("The posts are ", state.posts);
  return {
    postList: state.posts,
    err : state.err,
    post : state.post
  };
};

const mapDispatchToProps = dispatch => {
  return {
    getPosts: () => {
      dispatch(postAction());
    },
    getPost : (id)=>{
      console.log('the id is ',id)
       dispatch(singlePost(id))
    }
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App);
