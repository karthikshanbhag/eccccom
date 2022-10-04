import React from 'react'
import {Link} from 'react-router-dom'
export default function Product({products}) {
  console.log(products.id)
  return (
    <div className="col-md-3 m-5 card p-2">
    <div >
                <Link to={`/product/${ products.id}`}>
                <img src={products.image} className='img-fluid'/>
                <h1>{products.name}</h1>
                <h1>Rating : {products.rating}</h1>
                <h1>Price : {products.price}</h1>
                </Link>
                
            </div>
            </div>
  )
}
