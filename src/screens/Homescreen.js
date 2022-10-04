import React from 'react'
import Product from '../components/Product'
import products from '../products'
const Homescreen = () => {
  return (
    <div>
      <div className="row justify-content-center">
        {products.map(products=>{
            return <Product products={products}/>
        })}
      </div>
    </div>
  )
}

export default Homescreen
