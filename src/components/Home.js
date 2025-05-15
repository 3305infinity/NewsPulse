// // // import React, { useState,useEffect}from 'react'
// // // export default function Home(props) {
// // //   const[articles,setArticles]=useState([])
// // //   const [expanded, setExpanded] = useState({});
// // //   const[page,setPages]=useState(1)
// // //   const[border,setBorder]=useState({
// // //     border:'1px solid gray'
// // //   })
// // //   const updatenews=async()=>{
// // //     let url=`https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=${props.apikey}&page=${page}&pageSize=10`
// // //     console.log(url);
// // //     let data =await fetch(url)
// // //     let response=await data.json()
// // //     setArticles(response.articles)
// // //     setPages(response.page)
// // //     console.log(articles)                                                                                                                                                                                                                                                                                                                                                           
// // //   }
// // //   useEffect(()=>{
// // //     updatenews()
// // //   },[page])
// // //   const arrow=(e,index)=>{     
// // //     setExpanded({ ...expanded, [index]: !expanded[index] });
    
// // //   }
// // //   return (
// // //     <>                                    
// // //     <div  className={ `socialmedia `} style={{marginTop:'25px',marginBottom:'10px',display:'flex' ,padding:'40px',gap:'1rem',justifyContent:'center',alignItems:'center',paddingBottom:'20px'}}> 
// // //     <div className={`${props.mode ==='dark'?'text-white':' text-dark'}`} style={{fontSize:'large'}}>Connect with us on -</div>
// // //     <img width="40" height="40" src="https://img.icons8.com/ios-filled/50/facebook-new.png" alt="facebook-new"/>
// // //     <img width="40" height="40" src="https://img.icons8.com/ios-filled/50/instagram-new--v1.png" alt="instagram-new--v1"/>
// // //     <img width="40" height="40" src="https://img.icons8.com/ios-filled/50/twitter.png" alt="twitter"/>
// // //     <img width="40" height="40" src="https://img.icons8.com/ios-filled/50/youtube-play.png" alt="youtube-play"/>
// // //     <img width="40" height="40" src="https://img.icons8.com/ios-filled/50/linkedin.png" alt="linkedin"/>
// // //     </div>
// // //     <div className='boxx' style={{display:'flex',gap:'3rem', margin:'35px',marginTop:'0px',padding:'5px'}}>
// // //         <div className={ `section1 ${props.mode ==='dark'?'text-white':'bg-light text-dark'}`} style={{
// // //           display:'flex',padding:'10px',paddingLeft:'20px',justifyContent:'flex-start' ,flexDirection:'column'}}>
// // //          <h1 className={ `top ${props.mode ==='dark'?'text-white':'bg-light text-dark'}`} style={{textAlign:'center'}}>Top Headlines</h1>
// // //          {articles[9]&&<div className="newsbig">
// // //           <h6 style={{fontSize:'larger',margin:'10px',marginLeft:'0px'}}><a className={`${props.mode ==='dark'?'text-white':' text-dark'}`}  href={articles[0].url} target="_blank"  style={{color:'black'}}>{articles[0].title}</a></h6>
// // //           <img  width="500px" height="300px" src={articles[9].urlToImage}  />
// // //           <p style={{fontSize:'large'}}>{articles[9].description}... </p>
// // //           {/* <p style={{fontSize:'medium'}}>{articles[0].content.slice(0,120)}</p> */}
// // //           <p>By-{articles[9].author?articles[9].author:'Unknown'}</p>
// // //           <p>published At {articles[9].publishedAt?new Date(articles[9].publishedAt).toGMTString():'unknown'}</p>
// // //          </div>}
// // //         </div>
// // //         {/*  rgb(15, 15, 44)*/}
// // //         <div  className="section2" style={{display:'flex',gap:'1rem',flexDirection:'column', width:'600px'}}>
// // //           <div  className="streaming" style={{backgroundColor:' rgb(86 100 121)',overflowX:'hidden',color:'white',padding:'15px',textAlign:'center',fontSize:'2rem'}}><p>Stream the Latest News</p></div>
// // //           {articles[2] && <div className={`outest1 newsbox ${props.mode ==='dark'?'text-white':' text-dark'} `} style={{padding:'10px',display:'flex',flexDirection:'column',border:'1px solid gray',borderRadius:'10px',borderRadius:'10px'}}>

// // //             <div className="outer1" style={{width:'550px',height:'80px',display:'flex',gap:'1rem', justifyContent:'center',alignContent:'center'}}>
// // //             <div className="head1">{articles[2].title}</div>
// // //             <img width="60px" height="60px" src={articles[2].urlToImage} alt="" />
// // //             <svg xmlns="http://www.w3.org/2000/svg" onClick={(e)=>arrow(e,1)} width="35" height="20" fill="currentColor" className="bi bi-arrow-down" viewBox="0 0 16 16">
// // //             <path fillRule="evenodd" d="M8 1a.5.5 0 0 1 .5.5v11.793l3.146-3.147a.5.5 0 0 1 .708.708l-4 4a.5.5 0 0 1-.708 0l-4-4a.5.5 0 0 1 .708-.708L7.5 13.293V1.5A.5.5 0 0 1 8 1"/>
// // //             </svg>
// // //           </div>
// // //           {expanded[1] && (
// // //             <div>
// // //               <p>{articles[1].description}</p>
// // //               <p>
// // //                 <a  href={articles[1].url} target="_blank" >Read More</a>
// // //               </p>
// // //             </div>
// // //           )}
          
// // //            </div>}
// // //            {articles[2]&&<div  className={`outest2 newsbox ${props.mode ==='dark'?'text-white':' text-dark'} `} style={{padding:'10px',display:'flex',flexDirection:'column',border:'1px solid gray',borderRadius:'10px'}}>
// // //             <div className="outer2" style={{width:'550px',height:'80px',display:'flex',gap:'1rem', justifyContent:'center',alignContent:'center'}}>
// // //             <div className="head1">{articles[2].title}</div>
// // //             <img width="60px" height="60px"  src={articles[2].urlToImage} alt="" />
// // //             <svg xmlns="http://www.w3.org/2000/svg" onClick={(e)=>arrow(e,2)} width="35" height="20" fill="currentColor" className="bi bi-arrow-down" viewBox="0 0 16 16">
// // //             <path fillRule="evenodd" d="M8 1a.5.5 0 0 1 .5.5v11.793l3.146-3.147a.5.5 0 0 1 .708.708l-4 4a.5.5 0 0 1-.708 0l-4-4a.5.5 0 0 1 .708-.708L7.5 13.293V1.5A.5.5 0 0 1 8 1"/>
// // //             </svg>
// // //            </div>
// // //            {expanded[2] && (
// // //             <div>
// // //               <p>{articles[2].description}</p>
// // //               <p>
// // //                 <a  href={articles[2].url} target="_blank" >Read More</a>
// // //               </p>
// // //             </div>
// // //           )}
          
// // //            </div>}
// // //            {articles[3]&&<div  className={`outest3 newsbox ${props.mode ==='dark'?'text-white':' text-dark'} `} style={{padding:'10px',display:'flex',flexDirection:'column',border:'1px solid gray',borderRadius:'10px'}}>
// // //             <div className="outer3" style={{width:'550px',height:'80px',display:'flex',gap:'1rem', justifyContent:'center',alignContent:'center'}}>
// // //             <div className="head1">{articles[3].title}</div>
// // //            <img width="60px" height="60px" src={articles[3].urlToImage} alt="" />
// // //             <svg xmlns="http://www.w3.org/2000/svg" onClick={(e)=>arrow(e,3)} width="35" height="20" fill="currentColor" className="bi bi-arrow-down" viewBox="0 0 16 16">
// // //             <path fillRule="evenodd" d="M8 1a.5.5 0 0 1 .5.5v11.793l3.146-3.147a.5.5 0 0 1 .708.708l-4 4a.5.5 0 0 1-.708 0l-4-4a.5.5 0 0 1 .708-.708L7.5 13.293V1.5A.5.5 0 0 1 8 1"/>
// // //             </svg>
// // //            </div>
// // //            {expanded[3] && (
// // //             <div>
// // //               <p>{articles[3].description}</p>
// // //               <p>
// // //                 <a  href={articles[3].url} target="_blank" >Read More</a>
// // //               </p>
// // //             </div>
// // //           )}
          
// // //            </div>}
// // //           { articles[4] &&<div  className={`outest4 newsbox ${props.mode ==='dark'?'text-white':' text-dark'} `} style={{padding:'10px',display:'flex',flexDirection:'column',border:'1px solid gray',borderRadius:'10px'}}>
// // //             <div className="outer4" style={{width:'550px',height:'80px',display:'flex',gap:'1rem', justifyContent:'center',alignContent:'center'}}>
// // //             <div className="head1">{articles[4].title}</div>
// // //             <img width="60px" height="60px" src={articles[4].urlToImage} alt="" />
// // //             <svg xmlns="http://www.w3.org/2000/svg" onClick={(e)=>arrow(e,4)} width="35" height="20" fill="currentColor" className="bi bi-arrow-down" viewBox="0 0 16 16">
// // //             <path fillRule="evenodd" d="M8 1a.5.5 0 0 1 .5.5v11.793l3.146-3.147a.5.5 0 0 1 .708.708l-4 4a.5.5 0 0 1-.708 0l-4-4a.5.5 0 0 1 .708-.708L7.5 13.293V1.5A.5.5 0 0 1 8 1"/>
// // //             </svg>
// // //           </div>
// // //           {expanded[4] && (
// // //             <div>
// // //               <p>{articles[4].description}</p>
// // //               <p>
// // //                 <a  href={articles[4].url} target="_blank" >Read More</a>
// // //               </p>
// // //             </div>
// // //           )}
          
// // //            </div>}
// // //            { articles[5] &&<div  className={`outest5 newsbox ${props.mode ==='dark'?'text-white':' text-dark'} `} style={{padding:'10px',display:'flex',flexDirection:'column',border:'1px solid gray',borderRadius:'10px'}}>
// // //             <div className="outer4" style={{width:'550px',height:'80px',display:'flex',gap:'1rem', justifyContent:'center',alignContent:'center'}}>
// // //             <div className="head1">{articles[5].title}</div>
// // //             <img width="60px" height="60px" src={articles[5].urlToImage} alt="" />
// // //             <svg xmlns="http://www.w3.org/2000/svg" onClick={(e)=>arrow(e,5)} width="35" height="20" fill="currentColor" className="bi bi-arrow-down" viewBox="0 0 16 16">
// // //             <path fillRule="evenodd" d="M8 1a.5.5 0 0 1 .5.5v11.793l3.146-3.147a.5.5 0 0 1 .708.708l-4 4a.5.5 0 0 1-.708 0l-4-4a.5.5 0 0 1 .708-.708L7.5 13.293V1.5A.5.5 0 0 1 8 1"/>
// // //             </svg>
// // //           </div>
// // //           {expanded[5] && (
// // //             <div>
// // //               <p>{articles[5].description}</p>
// // //               <p>
// // //                 <a  href={articles[5].url} target="_blank" >Read More</a>
// // //               </p>
// // //             </div>
// // //           )}
          
// // //            </div>}
// // //         </div>
// // //     </div>
    // <div className={`emailanddonate ${props.mode ==='dark'?'bg-dark text-white':'  text-dark'} `} style={{...border,display:'flex', gap:'10rem' ,justifyContent:'center',margin:'90px',alignItems:'center',backgroundColor:'rgb(233, 233, 227)'}}>
    // <div className="signin" style={{display:'flex', justifyContent:'center',gap:'2rem',padding:'20px',paddingLeft:'60px',margin:'20px',flexDirection:'column',height:'300px'}}>
    //   <h1>Never Miss A Story </h1>
    //   <p style={{fontSize:'larger'}}>Get the latest news every day and newspaper </p>
    //   <div className="signup" style={{display:'flex', flexDirection:'row'}}>
    //     <input style={{borderRadius:'4px'}} type="email" placeholder="Enter your email" />
    //     <button style={{marginLeft:'10px',backgroundColor:' rgb(209, 180, 13)',padding:'10px',borderRadius:'4px'}}>Sign Up</button>
    //   </div>
    // </div>
    // <div className="donate" style={{display:'flex',flexDirection:'column',justifyContent:'left',width:'500px'
    // }}>
    //   <h3 >Donate To the Freedom of The Press Foundtaion</h3>
    //   <p>Our work to protect journalists and whistleblowers requires your support. 
    //     Please consider making a tax-deductible donation today.</p>
    //     <button style={{margin:'auto',fontSize:'large',width:'200px',backgroundColor:' rgb(211, 116, 93)',padding:'20px',borderRadius:'4px'}}>Donate Now</button>
    // </div>
    // </div>

//     <div id="carouselExample" class="carousel slide" data-bs-ride="carousel" style={{margin:'auto'}}>
//     <div id="carouselExample" class="carousel slide" style={{padding:'70px'}}>
//   <div class="carousel-inner">
//     {articles[0]&&<div class="carousel-item active">
//       <img src={articles[0].urlToImage} class="d-block w-100 " />
//       <div className="abovetext" style={{display:'flex',justifyContent:"center",alignItems:'center'}}>
//         {/* <h1>{articles[0].source.name}</h1> */}
//         <h1>{articles[0].title.slice(0,30)}...</h1> 
//         <p>{articles[0].description}</p>
//         <button style={{borderRadius:'50px',padding:'20px', backgroundColor:'white',color:'black'}}><a  href={articles[0].url} target="_blank"  style={{textDecoration:'none', color:'black'}}>Read More</a></button>
//       </div>
//     </div>}
//     {articles[2]&&<div class="carousel-item">
//       <img src={articles[2].urlToImage} class="d-block w-100 "  />
//       <div className="abovetext" style={{display:'flex',justifyContent:"center",alignItems:'center'}}>
//         {/* <h1>{articles[0].source.name}</h1> */}
//         <h1>{articles[2].title.slice(0,30)}...</h1> 
//         <p>{articles[2].description}</p>
//         <button style={{borderRadius:'50px',padding:'20px', backgroundColor:'white',color:'black'}}><a  href={articles[0].url} target="_blank"  style={{textDecoration:'none', color:'black'}}>Read More</a></button>
//       </div>
//     </div>
//     }
//     {articles[3]&&<div class="carousel-item">
//       <img src={articles[3].urlToImage} class="d-block w-100 "/>
//       <div className="abovetext" style={{display:'flex',justifyContent:"center",alignItems:'center'}}>
//         {/* <h1>{articles[0].source.name}</h1> */}
//         <h1>{articles[3].title.slice(0,30)}...</h1> 
//         <p>{articles[3].description}</p>
//         <button style={{borderRadius:'50px',padding:'20px', backgroundColor:'white',color:'black'}}><a  href={articles[0].url} target="_blank"  style={{textDecoration:'none', color:'black'}}>Read More</a></button>
//       </div>
//     </div>}
//   </div>
//   <button class="carousel-control-prev" type="button" data-bs-target="#carouselExample" data-bs-slide="prev">
//     <span class="carousel-control-prev-icon" aria-hidden="true"></span>
//     <span class="visually-hidden">Previous</span>
//   </button>
//   <button class="carousel-control-next" type="button" data-bs-target="#carouselExample" data-bs-slide="next">
//     <span class="carousel-control-next-icon" aria-hidden="true"></span>
//     <span class="visually-hidden">Next</span>
//   </button>
// </div>
//  </div>
// // // <div className="footer">
// // //   <div className="foot1"></div>
// // // </div>
// // //     </>
// // //   )
// // // }



// // import React, { useState, useEffect } from 'react';
// // import './Home.css'; // We'll create this CSS file

// // export default function Home(props) {
// //   const [articles, setArticles] = useState([]);
// //   const [expanded, setExpanded] = useState({});
// //   const [page, setPages] = useState(1);
// //   const [loading, setLoading] = useState(true);
// //   const [error, setError] = useState(null);

// //   console.log('Home component props:', props);
// //   console.log('Current state:', { articles, page, expanded, loading, error });

// //   const updatenews = async () => {
// //     try {
// //       console.log('Fetching home page news...');
// //       setLoading(true);
// //       setError(null);
      
// //       console.log(url)
// //       let data = await fetch(url);
// //       if (!data.ok) {
// //         throw new Error(`HTTP error! status: ${data.status}`);
// //       }
// //       let response = await data.json();
// //       console.log('API response:', response);
      
// //       setArticles(response.articles);
// //       setPages(response.page);
// //     } catch (err) {
// //       console.error('Error fetching news:', err);
// //       setError(err.message);
// //     } finally {
// //       setLoading(false);
// //     }
// //   };

// //   useEffect(() => {
// //     console.log('Home component mounted or page changed');
// //     updatenews();
// //   }, [page]);

// //   const arrow = (e, index) => {     
// //     console.log('Toggling expanded state for index:', index);
// //     setExpanded(prev => ({ ...prev, [index]: !prev[index] }));
// //   };

// //   if (loading) {
// //     return <div className="home-loading">Loading...</div>;
// //   }

// //   if (error) {
// //     return <div className="home-error">Error: {error}</div>;
// //   }

// //   return (
// //     <div className={`home-container ${props.mode === 'dark' ? 'dark-mode' : ''}`}>
// //       {/* Social Media Section */}
// //       <div className="social-media">
// //         <div className="connect-text">Connect with us on -</div>
// //         <div className="social-icons">
// //           {['facebook', 'instagram', 'twitter', 'youtube', 'linkedin'].map((platform) => (
// //             <img 
// //               key={platform}
// //               src={`https://img.icons8.com/ios-filled/50/${platform}.png`} 
// //               alt={platform}
// //               className="social-icon"
// //             />
// //           ))}
// //         </div>
// //       </div>
      
// //       {/* Main News Grid */}
// //       <div className="news-grid">
// //         {/* Featured News Section */}
// //         <div className="featured-news">
// //           <h1>Top Headlines</h1>
// //           {articles[9] && (
// //             <div className="featured-article">
// //               <h6>
// //                 <a href={articles[0].url} target="_blank" rel="noopener noreferrer">
// //                   {articles[0].title}
// //                 </a>
// //               </h6>
// //               <img src={articles[9].urlToImage} alt={articles[9].title} />
// //               <p>{articles[9].description}...</p>
// //               <div className="article-meta">
// //                 <span>By {articles[9].author || 'Unknown'}</span>
// //                 <span>Published At {articles[9].publishedAt ? new Date(articles[9].publishedAt).toGMTString() : 'unknown'}</span>
// //               </div>
// //             </div>
// //           )}
// //         </div>
        
// //         {/* News Stream Section */}
// //         <div className="news-stream">
// //           <div className="stream-header">
// //             <p>Stream the Latest News</p>
// //           </div>
          
// //           {[1, 2, 3, 4, 5].map((index) => (
// //             articles[index] && (
// //               <div key={index} className={`news-box ${expanded[index] ? 'expanded' : ''}`}>
// //                 <div className="news-box-header" onClick={(e) => arrow(e, index)}>
// //                   <div className="news-title">{articles[index].title}</div>
// //                   <img src={articles[index].urlToImage} alt="" className="news-thumbnail" />
// //                   <div className={`arrow-icon ${expanded[index] ? 'up' : 'down'}`} />
// //                 </div>
// //                 {expanded[index] && (
// //                   <div className="news-expanded-content">
// //                     <p>{articles[index].description}</p>
// //                     <a href={articles[index].url} target="_blank" rel="noopener noreferrer">
// //                       Read More
// //                     </a>
// //                   </div>
// //                 )}
// //               </div>
// //             )
// //           ))}
// //         </div>
// //       </div>
      
// //       {/* Email and Donate Section */}
// //       <div className="cta-section">
// //         <div className="email-signup">
// //           <h2>Never Miss A Story</h2>
// //           <p>Get the latest news every day and newspaper</p>
// //           <div className="signup-form">
// //             <input type="email" placeholder="Enter your email" />
// //             <button>Sign Up</button>
// //           </div>
// //         </div>
        
// //         <div className="donate-section">
// //           <h3>Donate To the Freedom of The Press Foundation</h3>
// //           <p>Our work to protect journalists and whistleblowers requires your support. 
// //             Please consider making a tax-deductible donation today.</p>
// //           <button>Donate Now</button>
// //         </div>
// //       </div>
      
// //       {/* Carousel Section */}
// //       <div className="news-carousel">
// //         <div className="carousel-inner">
// //           {[0, 2, 3].map((index) => (
// //             articles[index] && (
// //               <div key={index} className="carousel-item">
// //                 <img src={articles[index].urlToImage} alt={articles[index].title} />
// //                 <div className="carousel-caption">
// //                   <h3>{articles[index].title.slice(0, 30)}...</h3>
// //                   <p>{articles[index].description}</p>
// //                   <a href={articles[index].url} target="_blank" rel="noopener noreferrer">
// //                     Read More
// //                   </a>
// //                 </div>
// //               </div>
// //             )
// //           ))}
// //         </div>
// //       </div>
// //     </div>
// //   );
// // }


// //       import React, { useState, useEffect } from 'react';
// // import './Home.css';

// // export default function Home(props) {
// //   const [articles, setArticles] = useState([]);
// //   const [expanded, setExpanded] = useState({});
// //   const [page, setPages] = useState(1);
// //   const [loading, setLoading] = useState(true);
// //   const [error, setError] = useState(null);

// //   const updatenews = async () => {
// //     try {
// //       setLoading(true);
// //       setError(null);
      
// //       const url = `http://api.mediastack.com/v1/news?access_key=${props.apikey}&keywords=${props.category}&countries=${props.country}`;
// //       // let url = `https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=${props.apikey}&page=${page}&pageSize=10`;
// //      console.log("the api at home.js is "+url)
// //       let data = await fetch(url);
      
// //       if (!data.ok) {
// //         throw new Error(`HTTP error! status: ${data.status}`);
// //       }
      
// //       let response = await data.json();
      
// //       if (!response.articles) {
// //         throw new Error('No articles found in response');
// //       }
      
// //       setArticles(response.data);
// //       setPages(response.page);
// //     } catch (err) {
// //       console.error('Error fetching news:', err);
// //       setError(err.message);
// //       setArticles([]); // Reset articles on error
// //     } finally {
// //       setLoading(false);
// //     }
// //   };

// //   useEffect(() => {
// //     updatenews();
// //   }, [page]);

// //   const arrow = (e, index) => {     
// //     setExpanded(prev => ({ ...prev, [index]: !prev[index] }));
// //   };

// //   if (loading) {
// //     return <div className="home-loading">Loading news...</div>;
// //   }

// //   if (error) {
// //     return <div className="home-error">Error: {error}</div>;
// //   }

// //   if (!articles || articles.length === 0) {
// //     return <div className="home-no-articles">No articles found</div>;
// //   }

// //   // Safe way to get article at index or fallback to first article
// //   const getArticle = (index) => {
// //     return articles[index] || articles[0] || {};
// //   };

// //   return (
// //     <div className={`home-container ${props.mode === 'dark' ? 'dark-mode' : ''}`}>
// //       {/* Social Media Section */}
// //       <div className="social-media">
// //         <div className="connect-text">Connect with us on -</div>
// //         <div className="social-icons">
// //           {['facebook', 'instagram', 'twitter', 'youtube', 'linkedin'].map((platform) => (
// //             <img 
// //               key={platform}
// //               src={`https://img.icons8.com/ios-filled/50/${platform}.png`} 
// //               alt={platform}
// //               className="social-icon"
// //             />
// //           ))}
// //         </div>
// //       </div>
      
// //       {/* Main News Grid */}
// //       <div className="news-grid">
// //         {/* Featured News Section */}
// //         <div className="featured-news">
// //           <h1>Top Headlines</h1>
// //           {articles.length > 0 && (
// //             <div className="featured-article">
// //               <h6>
// //                 <a href={getArticle(0).url} target="_blank" rel="noopener noreferrer">
// //                   {getArticle(0).title || 'No title available'}
// //                 </a>
// //               </h6>
// //               {getArticle(9).urlToImage && (
// //                 <img src={getArticle(9).urlToImage} alt={getArticle(9).title} />
// //               )}
// //               <p>{getArticle(9).description || 'No description available'}...</p>
// //               <div className="article-meta">
// //                 <span>By {getArticle(9).author || 'Unknown'}</span>
// //                 <span>Published At {getArticle(9).publishedAt ? 
// //                   new Date(getArticle(9).publishedAt).toGMTString() : 'unknown'}</span>
// //               </div>
// //             </div>
// //           )}
// //         </div>
        
// //         {/* News Stream Section */}
// //         <div className="news-stream">
// //           <div className="stream-header">
// //             <p>Stream the Latest News</p>
// //           </div>
          
// //           {[1, 2, 3, 4, 5].map((index) => (
// //             getArticle(index) && (
// //               <div key={index} className={`news-box ${expanded[index] ? 'expanded' : ''}`}>
// //                 <div className="news-box-header" onClick={(e) => arrow(e, index)}>
// //                   <div className="news-title">{getArticle(index).title || 'No title'}</div>
// //                   {getArticle(index).urlToImage && (
// //                     <img src={getArticle(index).urlToImage} alt="" className="news-thumbnail" />
// //                   )}
// //                   <div className={`arrow-icon ${expanded[index] ? 'up' : 'down'}`} />
// //                 </div>
// //                 {expanded[index] && (
// //                   <div className="news-expanded-content">
// //                     <p>{getArticle(index).description || 'No description available'}</p>
// //                     <a href={getArticle(index).url} target="_blank" rel="noopener noreferrer">
// //                       Read More
// //                     </a>
// //                   </div>
// //                 )}
// //               </div>
// //             )
// //           ))}
// //         </div>
// //       </div>
      
// //       {/* Email and Donate Section */}
// //       <div className="cta-section">
// //         <div className="email-signup">
// //           <h2>Never Miss A Story</h2>
// //           <p>Get the latest news every day and newspaper</p>
// //           <div className="signup-form">
// //             <input type="email" placeholder="Enter your email" />
// //             <button>Sign Up</button>
// //           </div>
// //         </div>
        
// //         <div className="donate-section">
// //           <h3>Donate To the Freedom of The Press Foundation</h3>
// //           <p>Our work to protect journalists and whistleblowers requires your support. 
// //             Please consider making a tax-deductible donation today.</p>
// //           <button>Donate Now</button>
// //         </div>
// //       </div>
      
// //       {/* Carousel Section */}
// //       <div className="news-carousel">
// //         <div className="carousel-inner">
// //           {[0, 2, 3].map((index) => (
// //             getArticle(index) && (
// //               <div key={index} className="carousel-item">
// //                 {getArticle(index).urlToImage && (
// //                   <img src={getArticle(index).urlToImage} alt={getArticle(index).title} />
// //                 )}
// //                 <div className="carousel-caption">
// //                   <h3>{(getArticle(index).title || '').slice(0, 30)}...</h3>
// //                   <p>{getArticle(index).description || ''}</p>
// //                   <a href={getArticle(index).url} target="_blank" rel="noopener noreferrer">
// //                     Read More
// //                   </a>
// //                 </div>
// //               </div>
// //             )
// //           ))}
// //         </div>
// //       </div>
// //     </div>
// //   );
// // }


// // import React, { useState, useEffect } from 'react';
// // import './Home.css';

// // export default function Home(props) {
// //   const [articles, setArticles] = useState([]);
// //   const [expanded, setExpanded] = useState({});
// //   const [page, setPage] = useState(1);
// //   const [loading, setLoading] = useState(true);
// //   const [error, setError] = useState(null);

// //   const updatenews = async () => {
// //     try {
// //       setLoading(true);
// //       setError(null);

// //       const url = `http://api.mediastack.com/v1/news?access_key=${props.apikey}&keywords=${props.category}&countries=${props.country}&limit=10&offset=${(page - 1) * 10}`;
// //       console.log("Fetching from:", url);
// //       const response = await fetch(url);

// //       if (!response.ok) {
// //         throw new Error(`HTTP error! status: ${response.status}`);
// //       }

// //       const data = await response.json();
// //       if (!data.data) throw new Error("No data found");

// //       setArticles(data.data);
// //     } catch (err) {
// //       console.error('Error fetching news:', err);
// //       setError(err.message);
// //       setArticles([]);
// //     } finally {
// //       setLoading(false);
// //     }
// //   };

// //   useEffect(() => {
// //     updatenews();
// //   }, [page]);

// //   const toggleExpand = (index) => {
// //     setExpanded(prev => ({ ...prev, [index]: !prev[index] }));
// //   };

// //   if (loading) return <div className="home-loading">Loading news...</div>;
// //   if (error) return <div className="home-error">Error: {error}</div>;
// //   if (!articles.length) return <div className="home-no-articles">No articles found</div>;
// import React, { useState, useEffect } from 'react';
// import './Home.css';

// export default function Home(props) {
//   const [articles, setArticles] = useState([]);
//   const [expanded, setExpanded] = useState({});
//   const [page, setPage] = useState(1);
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState(null);
//   const [lastFetchTime, setLastFetchTime] = useState(0);

//   const updatenews = async () => {
//     // Rate limiting - ensure at least 1 second between requests
//     const now = Date.now();
//     if (now - lastFetchTime < 1000) {
//       setError("Please wait before making another request");
//       setLoading(false);
//       return;
//     }

//     try {
//       setLoading(true);
//       setError(null);

//       const url = `http://api.mediastack.com/v1/news?access_key=${props.apikey}&keywords=${props.category}&countries=${props.country}&limit=10&offset=${(page - 1) * 10}`;
//       console.log("Fetching from:", url);
      
//       const response = await fetch(url);

//       if (!response.ok) {
//         if (response.status === 429) {
//           throw new Error("API rate limit exceeded. Please wait before making more requests.");
//         }
//         throw new Error(`HTTP error! status: ${response.status}`);
//       }

//       const data = await response.json();
//       if (!data.data) throw new Error("No data found");

//       setArticles(data.data);
//       setLastFetchTime(Date.now());
//     } catch (err) {
//       console.error('Error fetching news:', err);
//       setError(err.message);
//       setArticles([]);
//     } finally {
//       setLoading(false);
//     }
//   };

//   useEffect(() => {
//     updatenews();
//   }, [page]);

//   const toggleExpand = (index) => {
//     setExpanded(prev => ({ ...prev, [index]: !prev[index] }));
//   };

//   if (loading) return <div className="home-loading">Loading news...</div>;
//   if (error) return <div className="home-error">Error: {error}</div>;
//   if (!articles.length) return <div className="home-no-articles">No articles found</div>;

//   // ... rest of your component remains the same ...
//   const getArticle = (index) => articles[index] || {};

//   return (
//     <div className={`home-container ${props.mode === 'dark' ? 'dark-mode' : ''}`}>
//       {/* Social Media */}
//       <div className="social-media">
//         <div className="connect-text">Connect with us on -</div>
//         <div className="social-icons">
//           {['facebook', 'instagram', 'twitter', 'youtube', 'linkedin'].map(platform => (
//             <img key={platform} src={`https://img.icons8.com/ios-filled/50/${platform}.png`} alt={platform} />
//           ))}
//         </div>
//       </div>

//       {/* News Grid */}
//       <div className="news-grid">
//         <div className="featured-news">
//           <h1>Top Headlines</h1>
//           {articles.length > 0 && (
//             <div className="featured-article">
//               <h6>
//                 <a href={getArticle(0).url} target="_blank" rel="noopener noreferrer">
//                   {getArticle(0).title}
//                 </a>
//               </h6>
//               {getArticle(0).image && (
//                 <img src={getArticle(0).image} alt={getArticle(0).title} />
//               )}
//               <p>{getArticle(0).description}</p>
//               <div className="article-meta">
//                 <span>By {getArticle(0).author || 'Unknown'}</span>
//                 <span>{new Date(getArticle(0).published_at).toGMTString()}</span>
//               </div>
//             </div>
//           )}
//         </div>

//         <div className="news-stream">
//           <div className="stream-header"><p>Stream the Latest News</p></div>
//           {[1, 2, 3, 4].map((index) => {
//             const article = getArticle(index);
//             return (
//               <div key={index} className={`news-box ${expanded[index] ? 'expanded' : ''}`}>
//                 <div className="news-box-header" onClick={() => toggleExpand(index)}>
//                   <div className="news-title">{article.title}</div>
//                   {article.image && <img src={article.image} alt="" className="news-thumbnail" />}
//                   <div className={`arrow-icon ${expanded[index] ? 'up' : 'down'}`} />
//                 </div>
//                 {expanded[index] && (
//                   <div className="news-expanded-content">
//                     <p>{article.description}</p>
//                     <a href={article.url} target="_blank" rel="noopener noreferrer">Read More</a>
//                   </div>
//                 )}
//               </div>
//             );
//           })}
//         </div>
//       </div>

//       {/* CTA Section */}
//       <div className="cta-section">
//         <div className="email-signup">
//           <h2>Never Miss A Story</h2>
//           <p>Get the latest news daily</p>
//           <div className="signup-form">
//             <input type="email" placeholder="Enter your email" />
//             <button>Sign Up</button>
//           </div>
//         </div>

//         <div className="donate-section">
//           <h3>Donate To Press Freedom</h3>
//           <p>Your support helps protect journalists worldwide. Please consider donating.</p>
//           <button>Donate Now</button>
//         </div>
//       </div>

//       {/* Carousel Section */}
//       <div className="news-carousel">
//         <div className="carousel-inner">
//           {[0, 1, 2].map((index) => {
//             const article = getArticle(index);
//             return (
//               <div key={index} className="carousel-item">
//                 {article.image && <img src={article.image} alt={article.title} />}
//                 <div className="carousel-caption">
//                   <h3>{article.title?.slice(0, 30)}...</h3>
//                   <p>{article.description}</p>
//                   <a href={article.url} target="_blank" rel="noopener noreferrer">Read More</a>
//                 </div>
//               </div>
//             );
//           })}
//         </div>
//       </div>
//     </div>
//   );
// }




import React, { useState, useEffect, useRef } from 'react';
import './Home.css';

export default function Home(props) {
  const [articles, setArticles] = useState([]);
  const [expanded, setExpanded] = useState({});
  const [page, setPage] = useState(1);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const abortControllerRef = useRef(null);
  const isMountedRef = useRef(false);
  const[border,setBorder]=useState({
        border:'1px solid gray'
      })
  const updatenews = async () => {
    // Cancel previous request if exists
    if (abortControllerRef.current) {
      abortControllerRef.current.abort();
    }
    const controller = new AbortController();
    abortControllerRef.current = controller;
    
    try {
      setLoading(true);
      setError(null);
      
      const url = `https://api.mediastack.com/v1/news?access_key=${props.apikey}&keywords=${props.category}&countries=${props.country}&limit=10&offset=${(page - 1) * 10}`;
      console.log("Fetching from:", url);
      
      const response = await fetch(url, {
        signal: controller.signal
      });
      
      if (!response.ok) {
        if (response.status === 429) {
          throw new Error("API rate limit exceeded. Please wait before making more requests.");
        }
        throw new Error(`HTTP error! status: ${response.status}`);
      }

      const data = await response.json();
      if (!data.data) throw new Error("No data found");

      // Only update state if component is mounted
      if (isMountedRef.current) {
        setArticles(data.data);
      }
    } catch (err) {
      if (err.name !== 'AbortError' && isMountedRef.current) {
        console.error('Error fetching news:', err);
        setError(err.message);
        setArticles([]);
      }
    } finally {
      if (isMountedRef.current) {
        setLoading(false);
      }
    }
  };

  useEffect(() => {
    isMountedRef.current = true;
    updatenews();

    return () => {
      isMountedRef.current = false;
      abortControllerRef.current?.abort();
    };
  }, [page]);

  const toggleExpand = (index) => {
    setExpanded(prev => ({ ...prev, [index]: !prev[index] }));
  };

  const getArticle = (index) => articles[index] || {};
  
  if (loading) return <div className="home-loading">Loading news...</div>;
  if (error) return <div className="home-error">Error: {error}</div>;
  if (!articles.length) return <div className="home-no-articles">No articles found</div>;
  const fallbackImage="https://source.unsplash.com/random/800x400"

const getImage = (url) => {
// Return fallback if url is missing or broken-looking
if (!url || url === "null" || url.length < 10) return fallbackImage;
return url;
};

  return (
    <div className={`home-container ${props.mode === 'dark' ? 'dark-mode' : ''}`}>
      {/* Social Media */}
      <div className="social-media">
        <div className="connect-text">Connect with us on -</div>
        <div className="social-icons">
          {['facebook', 'instagram', 'twitter', 'youtube', 'linkedin'].map(platform => (
            <img 
              key={platform} 
              src={`https://img.icons8.com/ios-filled/50/${platform}.png`} 
              alt={platform} 
              className="social-icon"
            />
          ))}
        </div>
      </div>

      {/* News Grid */}
      <div className="news-grid">
        <div className="featured-news">
          <h1>Top Headlines</h1>
          {articles.length > 0 && (
            <div className="featured-article">
              <h6>
                <a href={getArticle(0).url} style={{textDecoration:'none'}} target="_blank" rel="noopener noreferrer">
                  {getArticle(0).title}
                </a>
              </h6>
              {getArticle(0).image && (
                <img 
                  src={getArticle(0).image} 
                  alt={getArticle(0).title} 
                  className="featured-image"
                />
              )}
              <p>{getArticle(0).description}</p>
              <div className="article-meta">
                <span>By {getArticle(0).author || 'Unknown'}</span>
                <span>{new Date(getArticle(0).published_at).toGMTString()}</span>
              </div>
            </div>
          )}
        </div>

        <div className="news-stream">
          <div className="stream-header"><p>Stream the Latest News</p></div>
          {[1, 2, 3, 4].map((index) => {
            const article = getArticle(index);
            return (
              <div key={index} className={`news-box ${expanded[index] ? 'expanded' : ''}`}>
                <div 
                  className="news-box-header" 
                  onClick={() => toggleExpand(index)}
                  role="button"
                  tabIndex="0"
                  aria-expanded={expanded[index]}
                >
                  <div className="news-title">{article.title}</div>
                  {article.image && (
                    <img 
                      src={article.image} 
                      alt="" 
                      className="news-thumbnail" 
                    />
                  )}
                  <div className={`arrow-icon ${expanded[index] ? 'up' : 'down'}`} />
                </div>
                {expanded[index] && (
                  <div className="news-expanded-content">
                    <p>{article.description}</p>
                    <a 
                      href={article.url} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="read-more-link"
                    >
                      Read More
                    </a>
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>

      
      <div className="cta-section">
        <div className="email-signup">
          <h2>Never Miss A Story</h2>
          <p>Get the latest news every day and newspaper</p>
          <div className="signup-form">
            <input 
              type="email" 
              placeholder="Enter your email" 
              className="email-input"
            />
            <button className="signup-button">Sign Up</button>
          </div>
        </div>

        <div className="donate-section">
          <h3>Donate To Press Freedom</h3>
          <p>Your support helps protect journalists worldwide. Please consider donating.</p>
          <button className="donate-button">Donate Now</button>
        </div>
      </div>

     
 <div id="carouselExample" className="carousel slide" data-bs-ride="carousel">
  <div className="carousel-inner">

    {articles[0] && (
      <div className="carousel-item active">
        <div
          className="carousel-bg"
          style={{ backgroundImage: `url(${getImage(articles[0].image)})`|| fallbackImage }}
        >

          <div className="overlay-content">
          {/* <img
  src={articles[0]?.urlToImage || fallbackImage}
  onError={(e) => (e.target.src = fallbackImage)}
  className="d-block w-100"
/> */}
            <h1>{articles[0].title.slice(0, 50)}...</h1>
            <p>{articles[0].description}</p>
            <a href={articles[0].url} target="_blank" rel="noopener noreferrer">
              <button>Read More</button>
            </a>
          </div>
        </div>
      </div>
    )}

    {articles[2] && (
      <div className="carousel-item">
        <div
          className="carousel-bg"
          style={{ backgroundImage: `url(${articles[2].image})`||"https://images.unsplash.com/photo-1546422904-90eab23c3d7e?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fG5ld3N8ZW58MHx8MHx8fDA%3D" }}
        >
          <div className="overlay-content">
            
            <h1>{articles[2].title.slice(0, 50)}...</h1>
            <p>{articles[2].description}</p>
            <a href={articles[2].url} target="_blank" rel="noopener noreferrer">
              <button>Read More</button>
            </a>
          </div>
        </div>
      </div>
    )}

    {articles[3] && (
      <div className="carousel-item">
        <div
          className="carousel-bg"
          style={{ backgroundImage: `url(${articles[3].image})`|| "https://images.unsplash.com/photo-1523995462485-3d171b5c8fa9?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8bmV3c3xlbnwwfHwwfHx8MA%3D%3D" }}
        >
          <div className="overlay-content">
            <h1>{articles[3].title.slice(0, 50)}...</h1>
            <p>{articles[3].description}</p>
            <a href={articles[3].url} target="_blank" rel="noopener noreferrer">
              <button>Read More</button>
            </a>
          </div>
        </div>
      </div>
    )}

  </div>

  <button className="carousel-control-prev" type="button" data-bs-target="#carouselExample" data-bs-slide="prev">
    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
    <span className="visually-hidden">Previous</span>
  </button>

  <button className="carousel-control-next" type="button" data-bs-target="#carouselExample" data-bs-slide="next">
    <span className="carousel-control-next-icon" aria-hidden="true"></span>
    <span className="visually-hidden">Next</span>
  </button>
</div>
    </div>
  );
}