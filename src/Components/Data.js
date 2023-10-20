import React, { useEffect,useState  } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
function App() {
  const [post,setPost]=useState([]);

useEffect(()=>{
    fetch("https://dummyjson.com/quotes")
    .then(response=>response.json())
    .then(data=>setPost(data.quotes.splice(0,10)))
    .catch((error) => console.error("Error fetching data:", error));
},[]);
  return (
    <div className="App">
        {post.map((s)=>
        <h1 style={{backgroundColor:"#f7f6d2"}}>{s.quote}</h1>
        )}
    </div>
  );
}

export default App;
