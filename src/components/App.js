
import React,{useState,useEffect,useMemo} from "react";
import './../styles/App.css';

const App = () => {
  const [loading,setLoading]=useState(true);
  const [data,setData]=useState([]);
  useEffect(()=>{
    fetch("https://jsonplaceholder.typicode.com/posts").then((response)=>
    response.json().then((data)=>{setData(data);
      console.log(data);
    setLoading(false)}))
  },[]);

  const memoData=useMemo(()=>{
    if(!data){
      return <p>Loading...</p>;
    }
    else{
      return data;
    }
  },[data]);

  return (
   
      <ul>
    {memoData.map((post)=>
   (
   <li key={post.id}>
                  <strong>{post.title}</strong>
                  <p>{post.body}</p>
                </li>
   ))}
   </ul>
  
  )
}

export default App
