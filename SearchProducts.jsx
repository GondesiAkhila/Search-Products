import React,{useEffect,useState} from "react";
const SearchProducts=()=>{
    let [products,setProducts]=useState([]);
    let [change,setChange]=useState(" ");
    let search=(e)=>{e.target.value}
    useEffect(()=>{
        fetch("https://fakestoreapi.com/products ")
        .then(res=>res.json())
        .then(data=>setProducts(data))
    },[])
    return(
        <div>
            <input type="text" placeholder="Searc Products" onChange={search}/>
            {products.filter(res=>res.title.toLowerCase().includes(change)).map(data=><p>{data.title}</p>)}
        </div>
    )
}
export default SearchProducts