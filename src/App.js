import React,{useEffect,useState} from "react";
import "./style.css";
import { connect } from "react-redux";
import {postAction,singlePost} from "./store/actions/post.action";
const App = props => {
  const [name,setName]=useState(props.post.title);

useEffect(()=>{
  console.log("props is ",props)
},[name])

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
      Title : <input value={name} onChange={(evt)=>{
setName(evt.target.value)
      }}/>
    </div>
  );
};

const mapStateToProps = state => {
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
       dispatch(singlePost(id))
    }
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App);
