import React, {useState, Component } from "react";
const Newsitem=(props)=> {
   const [border,setBorder]=useState({
    
    border:'1px solid gray '
   })
   

    let { title, desc, imageurl, newsurl, author, time, source } = props;
    return (
      <> <div style={{ display: "flex",flexDirection:'column', padding: "30px" }}>
         <div  className={` card my-3 mx-3 ${props.mode ==='dark'?'bg-dark text-white':'bg-light text-dark'}`}  style={{ width: "290px", height: "500px" }} >
         <div style={{display:'flex',justifyContent:"flex-end",right:'0',position:'absolute'}}>
         <span class=" badge rounded-pill bg-danger" style={{left:'90%'}}>{source}</span>
         </div>
         <img src={imageurl}
              className="card-img-top"                                                            
              style={{ width: "290px", height: "180px" }}/>
              <div  className={ ` card-body `} style={{...border}} >
              <h5 className="card-title">{title}...</h5>
              <p className="card-text">{desc.slice(0,50)}...</p>
              <p className="">
                By {author} last updated {new Date(time).toGMTString()}
              </p>
              <a href={newsurl}
                target="_blank"
                className="btn text-light bg-dark"
              >
                Read More{" "}
              </a>
            </div>
          </div>          
        </div>
      </>
    );
  
}
export default Newsitem;
