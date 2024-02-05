import * as React from "react";
function getTitle(title) {
  return title 
}
export default function App(){
  const title = "My app Title";
  const myObject = {
    name: "John Doe",
    age: 30,
    city: "New York",
  };
  return (
    <div>
      <h1>{getTitle("Hello React")}</h1>
      <label htmlFor="inputField">Input Field:</label>
      <input type="text" id="inputField" name="inputField" />
      <h2>My Object:</h2>
      <pre>{JSON.stringify(myObject, null, 2)}</pre>
    </div>

  )
}