import React from 'react'
import products from '../products'
import { useParams } from 'react-router-dom'
export default function Productdescscreen({match}) {
    const { ide } = useParams();
    const product = products.find(product=>product.id===ide)
  return (
    <div>
        <h1>ujihsdgfiogqwadof</h1>
        <h1>{product.name}</h1>
       {/* <h1>{ide}</h1>  */}
    </div>
  )
}
