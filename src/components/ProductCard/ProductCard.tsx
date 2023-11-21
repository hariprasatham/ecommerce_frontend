import { collectionItemsProps } from '@/lib/types'
import React from 'react'

function ProductCard({ item }:{item: collectionItemsProps}) {
    const { title, image, price, id } = item
  return (
      <div key={id}>
        <img src={image} alt={title} />
        <h3>{title}</h3>
        <p>{price}</p>
    </div>
  )
}

export default ProductCard