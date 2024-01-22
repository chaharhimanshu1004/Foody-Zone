import React from 'react'
import "../styles/Card.css"

export default function Card({data}) {
  return (

    <div className='card'>
        <div className="left">
            <img src={data.image} alt='chicken'  />
        </div>
        <div className="right">
            <p className='heading'>{data.name}</p>
            <p className='desc'>{data.text}</p>
            <div className="price">
                ${data.price}
            </div>
        </div>
        
    </div>
  )
}
