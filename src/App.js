import logo from './logo.svg';
import './App.css';
import React from 'react';
import ProductForm from "./component/ProductForm"
import ListProduct from './component/ListProduct';

function App() {
  let [data,setData] = React.useState("")
  let [loding,setLoding] = React.useState(true)
    let [error,seError] = React.useState(false)
  let getData = () =>{
    setLoding(true);
    fetch(`http://localhost:3002/list`)
    .then((res) => res.json())
    .then((res) => setData(res));
    setLoding(false)
  }
  let handleDelete = (id) => {
    console.log(1)
    
    fetch(`http://localhost:3002/list/${id}`,{
      method : "DELETE",
      headers : {
        "content-type" : "application/json"
    }
    })
    .then((res) => res.json())
    .then((res) => getData())
  }

  React.useEffect(() =>{
    getData()
  },[])

return loding ? <h1>loding...</h1> : (<div className='App'>
  <ProductForm getData = {getData}/>
  <div className='formDiv'><ListProduct data = {data} handleDelete = {handleDelete} /></div>
  
 
</div>)
}

export default App;
