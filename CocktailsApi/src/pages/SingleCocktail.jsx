import React, {useState, useEffect} from 'react'
import Loading from '../components/Loading'
import {useParams, Link} from 'react-router-dom'
import { useGlobalContext } from '../context'

const SingleCocktail = () => {
  const {id} = useParams();
  const {cocktails} = useGlobalContext();
  const {name, image, info, glass} = cocktails.find((item)=> id===item.id);
  
  

  return (
    <section className='section cocktail-section'>
      <Link to='/' className='btn btn-primary'>
        back home
      </Link>
      <h2 className='section-title'>{name}</h2>
      <div className='drink'>
        <img src={image} alt={name}></img>
        <div className='drink-info'>
          <p>
            <span className='drink-data'>name :</span> {name}
          </p>
          
          <p>
            <span className='drink-data'>info :</span> {info}
          </p>
          <p>
            <span className='drink-data'>glass :</span> {glass}
          </p>
          
          
        </div>
      </div>
    </section>
  );
}

export default SingleCocktail