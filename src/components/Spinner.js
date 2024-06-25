import React, { Component } from 'react'
// import PropTypes from 'prop-types'
import Loading from './loading.gif'
const Spinner=(props)=> {
    return (
      // <div className="my-3" style={{display:'flex',justifyContent:'center',alignItems:'center'}}>
      //   <img src={Loading} alt="loading" style={{margin:'auto'}} />
      // </div>
      <div class={`spinner-border ${props.mode==='dark'?'text-light':'text-dark'}`} style={{marginLeft:'650px'}} role="status">

  <span class="visually-hidden">Loading...</span>
</div>
    )
 
}

export default Spinner
