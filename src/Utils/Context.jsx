import axios from "./Axios"
import { createContext, useState,useEffect } from "react"

export const ProductContext = createContext()
const Context = (props)=>{
    const [products,setProducts] = useState(JSON.parse(localStorage.getItem("products")) || null)
    // const getProducts = async()=>{
    //     try {
    //         const response = await axios.get('/products')  
    //         setProducts(response.data)
    //     } catch (error) {
    //         console.error(error)
    //     }
    // }
    // useEffect(()=>{
    //     getProducts()
    // },[])

    return (
        <ProductContext.Provider value={[products,setProducts]}>
            {props.children}
        </ProductContext.Provider>
    )
}
export default Context