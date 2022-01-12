import React, {useState,useEffect} from 'react'
import styled from 'styled-components'
import { popularProducts } from '../Data'
import Product from './Product';
import axios from "axios";
const Container = styled.div`
display:flex;
padding: 20px;
flex-wrap:wrap;
justify-content:space-between;
`
const Products = ({cat,filter,sort}) => {
    const [products ,setProducts] =useState([]);
    const [filteredProducts ,setFilteredProducts] =useState([]);
    useEffect(() => {
       
        const getProducts = async ()=>{
            try{
 const res = await axios.get("http://localhost:5000/api/products?category = notebook")
 console.log(res);
            }
            catch(err){

            }
        }
        getProducts();


    }, [cat])
    return (
       <Container>
{
    popularProducts.map((item)=>(
       <Product item={item} key ={item.id}/>

    ))
}
       </Container>
    )
}

export default Products
