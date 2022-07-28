import React from 'react'
import {Link, useParams} from 'react-router-dom'
import products from '../data'

const SingleProduct = () => {
  const {productId} = useParams();
  const singleProduct = products.find((product)=> product.id===productId);
  const {id, image, name} = singleProduct;
  
  return (
    <section className='section product'>
      <h3>{id}</h3>
      <h4>{name}</h4>
      <img src={image} alt={name}/>
      <Link to='/products' className='btn'>back to products</Link>
    </section>
  );
}

export default SingleProduct