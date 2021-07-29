import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
// import Header from './components/Header/Header';
import Data from "./Data/sample.json";

function App() {
  return (
   
<div className="posts">
  {Data.map(post => {
    console.log(post)
    
    return(
      <>
      <p>{post.Payee.Name}</p>
      
      </>
    )
  })}
</div>

  );
}


export default App;
