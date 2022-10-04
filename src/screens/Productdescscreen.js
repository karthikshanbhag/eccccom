import React from 'react'
import products from '../products'
import { useParams } from 'react-router-dom'
export default function Productdescscreen() {
    const {ide} = useParams();
    const disp = products.find(obj=>{
      return obj.id===2
    })
  return (
    <div>
        <h1>ujihsdgfiogqwadof</h1>
        <h1>{disp.name}</h1>
       {/* <h1>{ide}</h1>  */}
    </div>
  )
}
