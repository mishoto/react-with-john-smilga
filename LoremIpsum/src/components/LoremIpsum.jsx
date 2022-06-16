import React, {useState} from 'react'

const LoremIpsum = () => {

  const handleSubmit = ()=> {

  }
  return (
    <>
    <form className='lorem-form' onSubmit={handleSubmit}>
      <label htmlFor='amount'>paragraphs:</label>
      
    </form>
    <article className='lorem-text'>

    </article>
    </>
  )
}

export default LoremIpsum