import React from "react";
import "./style.css";
import App15 from "./App15";
import { connect } from "react-redux";
import postAction from "./store/actions/post.action";
const App = props => {
  return (
    <div>
      <hr />
      <button onClick={props.getPosts}>Get Posts</button>
      <hr />
      {props.err}
      <ul>
        {props.postList.map(post => {
          return <li>{post.title}</li>;
        })}
      </ul>
    </div>
  );
};

const mapStateToProps = state => {
  console.log("The posts are ", state.posts);
  return {
    postList: state.posts,
    err : state.err
  };
};

const mapDispatchToProps = dispatch => {
  return {
    getPosts: () => {
      dispatch(postAction());
    }
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App);
