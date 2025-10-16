
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
    <div>
   {loading?<p>Loading...</p> :
    (<div>
      {memoData.map((item)=>
      {
        <div>
          <h4>{item.title}</h4>
          <p>{item.body}</p>
          <small>User ID : {item.userId}</small>
          </div>
      })}
    </div>)}
    </div>
  )
}

export default App
