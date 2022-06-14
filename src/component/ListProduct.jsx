
import React from "react";

let ListProduct =({data,handleDelete}) =>{
    
    return(<>
    {
       
        !data ? console.log(data) :
        
        data.map((item) =>{
            
            return <div>
                <img src={item.image} alt="" />
                <h2>Name : {item.title}</h2>
                <p>Price : {item.price}</p>
                <p>{item.gender}</p>
                <p>{item.category}</p>
                <button onClick={()=>handleDelete(item.id)} >DELETE</button>

            </div>
        })
    }
    </>)


}

export default ListProduct;