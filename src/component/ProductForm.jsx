import React, { useState } from "react";

// const init = 

let ProductForm = ({getData}) =>{
    let [loding,setLoding] = useState(true)
    let [error,setError] = useState(false)
    let [formData,setFormData] = React.useState({
        title : "",
        gender : "",
        price : "",
        category : "",
        image : "",
    })
    // console.log(1)

    let handelChange = (e) =>{
        // console.log(e.value)
        let {name, value} = e.target;
        console.log(e.value)


        setFormData((prv) => ({...prv, [name] : value}));
    };
    let handleSubmit = () =>{
        fetch(`http://localhost:3002/list`,{
            method : "POST",
            body : JSON.stringify(formData),
      headers : {
        "content-type" : "application/json"
    }
        })
        .then((res) => res.json())
    .then((res) => getData())
    .catch((err)=> setError(true))
    document.querySelectorAll("input").value = "";
    }

    let {title,gender,price,category,image} = formData;

    return (<div className="form">
    <input  onChange={handelChange} type="text" name="title" placeholder="name"  value={title} />
    <input onChange={handelChange} type="number" name="price" placeholder="price"  value={price} />
    <input onChange={handelChange} type="text" name="category" placeholder="category"  value={category} />
    <input onChange={handelChange} type="text" name="image" placeholder="image link"  value={image} />
    <select  onChange={handelChange} name="gender" value={gender} >
        <option value="M">Male</option>
        <option value="F">Female</option>
    </select>
    <button onClick={handleSubmit}>SUBMIT</button>
    </div>)
}

export default ProductForm;