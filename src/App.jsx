import * as React from "react";
import './App.css'
const list = [
  {
    title : "React", 
    url : "http://reactjs.org/",
    author : "Jordan Walke",
    num_comments: 3,
    points: 4,
    objectID: 0,
  },
  {
    title: "Redux",
    url: "http://reduxjs.org/",
    author: "Dan Abramov, Andrew Clark",
    num_comments: 2,
    points: 5,
    objectID: 1,
  },
];
function App(){
  return (
    <div>
      <h1>My hacker stories</h1>
      <label htmlFor="search">Search:</label>
      <input id="search" type="text" />
      <hr />
      <ul>
        {list.map(function(item){
          return <li key={item.objectID}>{item.title}</li>
        })}
      </ul>
      <ul>
        {list.map(function(item){
          return(
            <li key={item.objectID}>
              <span>
                <a href={item.url}>{item.title}</a>
              </span>
              <span>{item.author}</span>
              <span>{item.num_comments}</span>
              <span>{item.points}</span>
            </li>
          );
        })};
      </ul>
    </div>
  );
}

export default App;