import React, { useContext } from 'react'
import {useEffect, useReducer, useState} from 'react'
import axios, { AxiosError } from 'axios';
import {IProduct} from '../model'
import { Products } from './Products';
import {LoadContext} from '../App'






const initialState = {
    data: [],
    error: ''
  }
  
  
  const reducer = (state: any, action: any) => {
    switch(action.type) {
      case 'FETCH_SUCCESS':
        return {
          data: action.payload,
          error: ''
        }
  
        case 'FETCH_ERROR':
          return {
            data: [],
            error: 'Errorr'
          }
  
          default: 
          return state
    }
  }
  


const ShopContent: React.FC = () => {

    const [currentPage, setCurrentPage] = useState(1);
    const [productPerPage, setProductPerPage] = useState(3)

    const [state , dispatch] = useReducer(reducer, initialState)
    // const [product, setProduct] = useState<IProduct[]>([])
     const [loading, setLoading] = useState(false)
   
    async function getProducts () {
     try {
       setLoading(true)
       const response = await axios.get<IProduct[]>('https://fakestoreapi.com/products')
       setLoading(false)
       dispatch({
         type: 'FETCH_SUCCESS',
         payload: response.data
       })
     } catch (e: unknown) {
         setLoading(false)
         const err = e as AxiosError
         dispatch({ type: 'FETCH_ERROR',  })
         
     }
    }
   
    useEffect (() => {
     getProducts()
    }, [])
   
    const copy = useContext(LoadContext)


  //  const indexOfLastProduct = currentPage * productPerPage;
  //  const indexOfFirsProduct = indexOfLastProduct - productPerPage;
  //  const currentProduct = state.data.slice(indexOfFirsProduct, indexOfLastProduct)


    return (
        <div className="container mx-auto max-w-2xl pt-5">
      {loading && <p className='text-center'> {copy} </p>}
      {
       // state.data.map(() => <Products product={state} key={state.data.id} />)
      state.data.map((product: IProduct) => <Products product={product}  key={product.id}/>)
      }
    </div>
    )
}

export default ShopContent