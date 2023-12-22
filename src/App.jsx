// import React from 'react'
import { TopNav } from "./components/TopNav"
import {  useState } from "react"
import { Header } from "./components/Header"
import { Cards } from "./Cards"
import { Footer } from "./Footer"
export const App = () => {
  let [cart,setCart] = useState(0)
  let handleclick = (event) =>{
    console.log(cart)
    if(event.target.innerText==="Add to Cart")
    {
      console.log("add")
      setCart(++cart)
      console.log(cart)
      event.target.innerText="Delete From Cart"
   }
  else{
    console.log("delete")
      if(cart!==0){
        setCart(--cart)
      }
      else{
        setCart(0)
      }
      event.target.innerText="Add to Cart"
      console.log(cart)
    }
}
  
  return (
    <>
     <TopNav Cart={cart}></TopNav> 
    <Header></Header>  
    <Cards  handleclick={handleclick}></Cards>
    <Footer></Footer>
    </>
  )
  }