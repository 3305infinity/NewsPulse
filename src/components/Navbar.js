import React ,{useState} from 'react';
import {Link } from 'react-router-dom'
const Navbar=(props)=> {
    let modepath=props.mode=='light'?"M12 8a4 4 0 1 1-8 0 4 4 0 0 1 8 0M8 0a.5.5 0 0 1 .5.5v2a.5.5 0 0 1-1 0v-2A.5.5 0 0 1 8 0m0 13a.5.5 0 0 1 .5.5v2a.5.5 0 0 1-1 0v-2A.5.5 0 0 1 8 13m8-5a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1 0-1h2a.5.5 0 0 1 .5.5M3 8a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1 0-1h2A.5.5 0 0 1 3 8m10.657-5.657a.5.5 0 0 1 0 .707l-1.414 1.415a.5.5 0 1 1-.707-.708l1.414-1.414a.5.5 0 0 1 .707 0m-9.193 9.193a.5.5 0 0 1 0 .707L3.05 13.657a.5.5 0 0 1-.707-.707l1.414-1.414a.5.5 0 0 1 .707 0m9.193 2.121a.5.5 0 0 1-.707 0l-1.414-1.414a.5.5 0 0 1 .707-.707l1.414 1.414a.5.5 0 0 1 0 .707M4.464 4.465a.5.5 0 0 1-.707 0L2.343 3.05a.5.5 0 1 1 .707-.707l1.414 1.414a.5.5 0 0 1 0 .708":"M6 .278a.77.77 0 0 1 .08.858 7.2 7.2 0 0 0-.878 3.46c0 4.021 3.278 7.277 7.318 7.277q.792-.001 1.533-.16a.79.79 0 0 1 .81.316.73.73 0 0 1-.031.893A8.35 8.35 0 0 1 8.344 16C3.734 16 0 12.286 0 7.71 0 4.266 2.114 1.312 5.124.06A.75.75 0 0 1 6 .278"
    return (
      <nav className="navbar navbar-expand-lg   bg-dark text-light"  style={{fontSize:'larger',padding:'20px',paddingLeft:'10px'}}>
      <div className="container-fluid bg-dark  fixed-top" style={{padding:'10px'}} >
     <Link className="navbar-brand t text-light " to="/" style={{fontSize:'2rem'}}>NewsPulse</Link>
     <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
     <span className="navbar-toggler-icon"></span>
     </button>
     <div className="collapse navbar-collapse" id="navbarNav">
      <ul className="navbar-nav text-light" style={{color:'white'}}>
        <li className="nav-item">
          <Link className=" active  t " aria-current="page" to="/home">Home</Link>
        </li>
        <li className="nav-item" >
          <Link className=" t"  to="/business">Business</Link>
        </li>
        <li className="nav-item">
          <Link className="  t" to="/entertainment">Entertainment</Link>
        </li>
        <li className="nav-item">
          <Link className="  t" to="/general">General</Link>
        </li>
        <li className="nav-item">
          <Link className="  t" to="/health">Health</Link>
        </li>
        <li className="nav-item">
          <Link className="  t" to="/science">Science</Link>
        </li>
        <li className="nav-item">
          <Link className="  t" to="/sports">Sports</Link>
        </li>
        <li className="nav-item">
          <Link className=" t" to="/technology">Technology</Link>
        </li>
      </ul>  
      <svg onClick={props.toggle} xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="currentColor" className="bi bi-moon mode" viewBox="0 0 16 16" style={{position:'absolute',right:'30'}}>
      <path className="modepath" d={modepath}    />
      </svg>
      </div>
  </div>
</nav>
  ) 
}
export default Navbar




