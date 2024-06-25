import React, { useState,useEffect}from 'react'
export default function Home(props) {
  const[articles,setArticles]=useState([])
  
  const [expanded, setExpanded] = useState({});
  const[page,setPages]=useState(1)
  const[border,setBorder]=useState({
    border:'1px solid gray'
  })
  
  const updatenews=async()=>{
    let url=`https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=${props.apikey}&page=${page}&pageSize=10`
    let data =await fetch(url)
    let response=await data.json()
    setArticles(response.articles)
    setPages(response.page)
    console.log(articles)                                                                                                                                                                                                                                                                                                                                                           
  }
  useEffect(()=>{
    updatenews()
  },[page])
  const arrow=(e,index)=>{     
    setExpanded({ ...expanded, [index]: !expanded[index] });
    //  index=Number(index)
    //  let outdiv=document.querySelector(`.outest${index}`)
    //  let innercontent=outdiv.innerHTML
    //  if(expanded){ 
    //   // console.log(expanded)
    //     console.log("i am inside if")
    //   outdiv.classList.add('expanded')
    //   outdiv.innerHTML+=`${articles[index].description}
    //                      <p><a  href=${articles[index] target="_blank" .url}>Read More</a><p>`
    //   }
    //   else{
    //   let outdiv=document.querySelector(`.outest${index}`)
    //   console.log(outdiv)
    //   outdiv.classList.remove('expanded')
    //   console.log(innercontent)
    //   outdiv.innerHtml=`${innercontent}`
    //   }
  //   index = Number(index);
  // let outdiv = document.querySelector(`.outest${index}`);
  // let innercontent = outdiv.innerHTML;

  // useEffect(() => {
  //   if (expanded) {
  //     console.log("i am inside if");
  //     outdiv.classList.add("expanded");
  //     outdiv.innerHTML += `<p>${articles[index].description}</p><p><a  href=${articles[index] target="_blank" .url}>Read More</a></p>`;
  //   } else {
  //     console.log("i am inside else");
  //     outdiv.classList.remove("expanded");
  //     outdiv.innerHTML = innercontent;
  //   }
  // }, [expanded]);

  // setExpanded(!expanded);
  }
  return (
    <>                                    
    <div  className={ `socialmedia `} style={{marginTop:'25px',marginBottom:'10px',display:'flex' ,padding:'40px',gap:'1rem',justifyContent:'center',alignItems:'center',paddingBottom:'20px'}}> 
    <div className={`${props.mode ==='dark'?'text-white':' text-dark'}`} style={{fontSize:'large'}}>Connect with us on -</div>
    <img width="40" height="40" src="https://img.icons8.com/ios-filled/50/facebook-new.png" alt="facebook-new"/>
    <img width="40" height="40" src="https://img.icons8.com/ios-filled/50/instagram-new--v1.png" alt="instagram-new--v1"/>
    <img width="40" height="40" src="https://img.icons8.com/ios-filled/50/twitter.png" alt="twitter"/>
    <img width="40" height="40" src="https://img.icons8.com/ios-filled/50/youtube-play.png" alt="youtube-play"/>
    <img width="40" height="40" src="https://img.icons8.com/ios-filled/50/linkedin.png" alt="linkedin"/>
    </div>
    <div className='boxx' style={{display:'flex',gap:'3rem', margin:'35px',marginTop:'0px',padding:'5px'}}>
        <div className={ `section1 ${props.mode ==='dark'?'text-white':'bg-light text-dark'}`} style={{
          display:'flex',padding:'10px',paddingLeft:'20px',justifyContent:'flex-start' ,flexDirection:'column'}}>
         <h1 className={ `top ${props.mode ==='dark'?'text-white':'bg-light text-dark'}`} style={{textAlign:'center'}}>Top Headlines</h1>
         {articles[9]&&<div className="newsbig">
          <h6 style={{fontSize:'larger',margin:'10px',marginLeft:'0px'}}><a className={`${props.mode ==='dark'?'text-white':' text-dark'}`}  href={articles[0].url} target="_blank"  style={{color:'black'}}>{articles[0].title}</a></h6>
          <img  width="500px" height="300px" src={articles[9].urlToImage}  />
          <p style={{fontSize:'large'}}>{articles[9].description}... </p>
          {/* <p style={{fontSize:'medium'}}>{articles[0].content.slice(0,120)}</p> */}
          <p>By-{articles[9].author?articles[9].author:'Unknown'}</p>
          <p>published At {articles[9].publishedAt?new Date(articles[9].publishedAt).toGMTString():'unknown'}</p>
         </div>}
        </div>
        {/*  rgb(15, 15, 44)*/}
        <div  className="section2" style={{display:'flex',gap:'1rem',flexDirection:'column', width:'600px'}}>
          <div  className="streaming" style={{backgroundColor:' rgb(86 100 121)',overflowX:'hidden',color:'white',padding:'15px',textAlign:'center',fontSize:'2rem'}}><p>Stream the Latest News</p></div>
          {articles[2] && <div className={`outest1 newsbox ${props.mode ==='dark'?'text-white':' text-dark'} `} style={{padding:'10px',display:'flex',flexDirection:'column',border:'1px solid gray',borderRadius:'10px',borderRadius:'10px'}}>

            <div className="outer1" style={{width:'550px',height:'80px',display:'flex',gap:'1rem', justifyContent:'center',alignContent:'center'}}>
            <div className="head1">{articles[2].title}</div>
            <img width="60px" height="60px" src={articles[2].urlToImage} alt="" />
            <svg xmlns="http://www.w3.org/2000/svg" onClick={(e)=>arrow(e,1)} width="35" height="20" fill="currentColor" className="bi bi-arrow-down" viewBox="0 0 16 16">
            <path fillRule="evenodd" d="M8 1a.5.5 0 0 1 .5.5v11.793l3.146-3.147a.5.5 0 0 1 .708.708l-4 4a.5.5 0 0 1-.708 0l-4-4a.5.5 0 0 1 .708-.708L7.5 13.293V1.5A.5.5 0 0 1 8 1"/>
            </svg>
          </div>
          {expanded[1] && (
            <div>
              <p>{articles[1].description}</p>
              <p>
                <a  href={articles[1].url} target="_blank" >Read More</a>
              </p>
            </div>
          )}
          
           </div>}
           {articles[2]&&<div  className={`outest2 newsbox ${props.mode ==='dark'?'text-white':' text-dark'} `} style={{padding:'10px',display:'flex',flexDirection:'column',border:'1px solid gray',borderRadius:'10px'}}>
            <div className="outer2" style={{width:'550px',height:'80px',display:'flex',gap:'1rem', justifyContent:'center',alignContent:'center'}}>
            <div className="head1">{articles[2].title}</div>
            <img width="60px" height="60px"  src={articles[2].urlToImage} alt="" />
            <svg xmlns="http://www.w3.org/2000/svg" onClick={(e)=>arrow(e,2)} width="35" height="20" fill="currentColor" className="bi bi-arrow-down" viewBox="0 0 16 16">
            <path fillRule="evenodd" d="M8 1a.5.5 0 0 1 .5.5v11.793l3.146-3.147a.5.5 0 0 1 .708.708l-4 4a.5.5 0 0 1-.708 0l-4-4a.5.5 0 0 1 .708-.708L7.5 13.293V1.5A.5.5 0 0 1 8 1"/>
            </svg>
           </div>
           {expanded[2] && (
            <div>
              <p>{articles[2].description}</p>
              <p>
                <a  href={articles[2].url} target="_blank" >Read More</a>
              </p>
            </div>
          )}
          
           </div>}
           {articles[3]&&<div  className={`outest3 newsbox ${props.mode ==='dark'?'text-white':' text-dark'} `} style={{padding:'10px',display:'flex',flexDirection:'column',border:'1px solid gray',borderRadius:'10px'}}>
            <div className="outer3" style={{width:'550px',height:'80px',display:'flex',gap:'1rem', justifyContent:'center',alignContent:'center'}}>
            <div className="head1">{articles[3].title}</div>
           <img width="60px" height="60px" src={articles[3].urlToImage} alt="" />
            <svg xmlns="http://www.w3.org/2000/svg" onClick={(e)=>arrow(e,3)} width="35" height="20" fill="currentColor" className="bi bi-arrow-down" viewBox="0 0 16 16">
            <path fillRule="evenodd" d="M8 1a.5.5 0 0 1 .5.5v11.793l3.146-3.147a.5.5 0 0 1 .708.708l-4 4a.5.5 0 0 1-.708 0l-4-4a.5.5 0 0 1 .708-.708L7.5 13.293V1.5A.5.5 0 0 1 8 1"/>
            </svg>
           </div>
           {expanded[3] && (
            <div>
              <p>{articles[3].description}</p>
              <p>
                <a  href={articles[3].url} target="_blank" >Read More</a>
              </p>
            </div>
          )}
          
           </div>}
          { articles[4] &&<div  className={`outest4 newsbox ${props.mode ==='dark'?'text-white':' text-dark'} `} style={{padding:'10px',display:'flex',flexDirection:'column',border:'1px solid gray',borderRadius:'10px'}}>
            <div className="outer4" style={{width:'550px',height:'80px',display:'flex',gap:'1rem', justifyContent:'center',alignContent:'center'}}>
            <div className="head1">{articles[4].title}</div>
            <img width="60px" height="60px" src={articles[4].urlToImage} alt="" />
            <svg xmlns="http://www.w3.org/2000/svg" onClick={(e)=>arrow(e,4)} width="35" height="20" fill="currentColor" className="bi bi-arrow-down" viewBox="0 0 16 16">
            <path fillRule="evenodd" d="M8 1a.5.5 0 0 1 .5.5v11.793l3.146-3.147a.5.5 0 0 1 .708.708l-4 4a.5.5 0 0 1-.708 0l-4-4a.5.5 0 0 1 .708-.708L7.5 13.293V1.5A.5.5 0 0 1 8 1"/>
            </svg>
          </div>
          {expanded[4] && (
            <div>
              <p>{articles[4].description}</p>
              <p>
                <a  href={articles[4].url} target="_blank" >Read More</a>
              </p>
            </div>
          )}
          
           </div>}
           { articles[5] &&<div  className={`outest5 newsbox ${props.mode ==='dark'?'text-white':' text-dark'} `} style={{padding:'10px',display:'flex',flexDirection:'column',border:'1px solid gray',borderRadius:'10px'}}>
            <div className="outer4" style={{width:'550px',height:'80px',display:'flex',gap:'1rem', justifyContent:'center',alignContent:'center'}}>
            <div className="head1">{articles[5].title}</div>
            <img width="60px" height="60px" src={articles[5].urlToImage} alt="" />
            <svg xmlns="http://www.w3.org/2000/svg" onClick={(e)=>arrow(e,5)} width="35" height="20" fill="currentColor" className="bi bi-arrow-down" viewBox="0 0 16 16">
            <path fillRule="evenodd" d="M8 1a.5.5 0 0 1 .5.5v11.793l3.146-3.147a.5.5 0 0 1 .708.708l-4 4a.5.5 0 0 1-.708 0l-4-4a.5.5 0 0 1 .708-.708L7.5 13.293V1.5A.5.5 0 0 1 8 1"/>
            </svg>
          </div>
          {expanded[5] && (
            <div>
              <p>{articles[5].description}</p>
              <p>
                <a  href={articles[5].url} target="_blank" >Read More</a>
              </p>
            </div>
          )}
          
           </div>}
        </div>
    </div>
    <div className={`emailanddonate ${props.mode ==='dark'?'bg-dark text-white':'  text-dark'} `} style={{...border,display:'flex', gap:'10rem' ,justifyContent:'center',margin:'90px',alignItems:'center',backgroundColor:'rgb(233, 233, 227)'}}>
    <div className="signin" style={{display:'flex', justifyContent:'center',gap:'2rem',padding:'20px',paddingLeft:'60px',margin:'20px',flexDirection:'column',height:'300px'}}>
      <h1>Never Miss A Story </h1>
      <p style={{fontSize:'larger'}}>Get the latest news every day and newspaper </p>
      <div className="signup" style={{display:'flex', flexDirection:'row'}}>
        <input style={{borderRadius:'4px'}} type="email" placeholder="Enter your email" />
        <button style={{marginLeft:'10px',backgroundColor:' rgb(209, 180, 13)',padding:'10px',borderRadius:'4px'}}>Sign Up</button>
      </div>
    </div>
    <div className="donate" style={{display:'flex',flexDirection:'column',justifyContent:'left',width:'500px'
    }}>
      <h3 >Donate To the Freedom of The Press Foundtaion</h3>
      <p>Our work to protect journalists and whistleblowers requires your support. 
        Please consider making a tax-deductible donation today.</p>
        <button style={{margin:'auto',fontSize:'large',width:'200px',backgroundColor:' rgb(211, 116, 93)',padding:'20px',borderRadius:'4px'}}>Donate Now</button>
    </div>
    </div>

    <div id="carouselExample" class="carousel slide" data-bs-ride="carousel" style={{margin:'auto'}}>
    <div id="carouselExample" class="carousel slide" style={{padding:'70px'}}>
  <div class="carousel-inner">
    {articles[0]&&<div class="carousel-item active">
      <img src={articles[0].urlToImage} class="d-block w-100 " />
      <div className="abovetext" style={{display:'flex',justifyContent:"center",alignItems:'center'}}>
        {/* <h1>{articles[0].source.name}</h1> */}
        <h1>{articles[0].title.slice(0,30)}...</h1> 
        <p>{articles[0].description}</p>
        <button style={{borderRadius:'50px',padding:'20px', backgroundColor:'white',color:'black'}}><a  href={articles[0].url} target="_blank"  style={{textDecoration:'none', color:'black'}}>Read More</a></button>
      </div>
    </div>}
    {articles[2]&&<div class="carousel-item">
      <img src={articles[2].urlToImage} class="d-block w-100 "  />
      <div className="abovetext" style={{display:'flex',justifyContent:"center",alignItems:'center'}}>
        {/* <h1>{articles[0].source.name}</h1> */}
        <h1>{articles[2].title.slice(0,30)}...</h1> 
        <p>{articles[2].description}</p>
        <button style={{borderRadius:'50px',padding:'20px', backgroundColor:'white',color:'black'}}><a  href={articles[0].url} target="_blank"  style={{textDecoration:'none', color:'black'}}>Read More</a></button>
      </div>
    </div>
    }
    {articles[3]&&<div class="carousel-item">
      <img src={articles[3].urlToImage} class="d-block w-100 "/>
      <div className="abovetext" style={{display:'flex',justifyContent:"center",alignItems:'center'}}>
        {/* <h1>{articles[0].source.name}</h1> */}
        <h1>{articles[3].title.slice(0,30)}...</h1> 
        <p>{articles[3].description}</p>
        <button style={{borderRadius:'50px',padding:'20px', backgroundColor:'white',color:'black'}}><a  href={articles[0].url} target="_blank"  style={{textDecoration:'none', color:'black'}}>Read More</a></button>
      </div>
    </div>}
  </div>
  <button class="carousel-control-prev" type="button" data-bs-target="#carouselExample" data-bs-slide="prev">
    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Previous</span>
  </button>
  <button class="carousel-control-next" type="button" data-bs-target="#carouselExample" data-bs-slide="next">
    <span class="carousel-control-next-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Next</span>
  </button>
</div>

</div>
<div className="footer">
  <div className="foot1"></div>
</div>
    </>
  )
}


