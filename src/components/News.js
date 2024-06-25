/// ----------------with infinite scrolling bar and changes in loading gif
import React, { useState, useEffect } from 'react'
// import PropTypes from 'prop-types'
import Newsitem from './Newsitem'
import PropTypes from 'prop-types' 
import Spinner from './Spinner.js' 
import InfiniteScroll from 'react-infinite-scroll-component';
const News=(props)=> {
  const [articles,setArticles]=useState([])
  const [page,setPage]=useState(1)
  const [loading,setLoading]=useState(true)
  const [totalResults,setTotalResults]=useState(0)  
  const capitalize=(str)=>{
     return str.charAt(0).toUpperCase()+str.slice(1)
  }

  const updatepage=async()=>{
    props.setProgress(10);
    let url=`https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=${props.apikey}&page=${page}&pageSize=${props.pagesize}`
    setLoading(true)
    
     document.title=`${capitalize(props.category)}-NewsPulse`
    let data =await fetch(url);
    props.setProgress(30);
    let response= await data.json();
    props.setProgress(70);  
    setArticles(response.articles)
    setLoading(false)     
    setTotalResults(response.totalResults) 
    setPage(page)  
    
    props.setProgress(100);
  }
  useEffect(()=>{
    updatepage(); 
  },[])

  const fetchMoreData=async()=>{
    let url=`https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=${props.apikey}&page=${page+1}&pageSize=${props.pagesize}`
    setPage(page+1)
    let data =await fetch(url);
    // props.setProgress(30);
    let response= await data.json();
    // props.setProgress(50);  
    setArticles(articles.concat(response.articles))     
    setTotalResults(response.totalResults) 
     
    
    
    props.setProgress(100);
  }
    // handleprev=async()=>{
    //   // let url=`https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=2663ed632c7f4b6a8d2f106b9b6d6c82&page=${state.page-1}&pageSize=${props.pagesize}`
    //   // let data =await fetch(url);
    //   // let response= await data.json();
    //   // setState({
    //   // articles:response.articles,
    //   // page:state.page-1
    //   // })
    //   setState({
    //     page:state.page-1
    //   })
    //   updatepage();
    // }
    // handlenext=async()=>{
    //   // if(state.page<Math.ceil(state.totalResults/12)){
    //   // let url=`https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=2663ed632c7f4b6a8d2f106b9b6d6c82&page=${state.page+1}&pageSize=${props.pagesize}`
    //   // let data =await fetch(url);
    //   // let response= await data.json();
    //   // setState({
    //   // articles:response.articles,
    //   // page:state.page+1
    //   // })}
    //   // else{
    //   //  let btn =document.querySelector(".myclass")
    //   //   btn.disabled=true
    //   // } 
    //   if(state.page<Math.ceil(state.totalResults/12))
    //     {
    //       setState({
    //         page:state.page+1
    //       })
    //       updatepage();
    //     }
    //     else{
    //       let btn =document.querySelector(".myclass")
    //       btn.disabled=true
    //     }

    // } 

    return (
      <>      
      
      {/* <div style={{border:'solid grey 3px',margin:'30px',borderRadius:'10px'}}> */}
      <div>
      <h2  className={`${props.mode ==='dark'?'text-white':' text-dark'}`}  style={{textAlign:'center',margin:'60px',marginBottom:'30px'}}>NewsPulse-Top {capitalize(props.category)} Headlines</h2>
     { loading && <Spinner mode={props.mode}/>}
     
      <div style={{ margin:'auto',width:'80%'}}>
      <div   style={{display:'grid', gridTemplateColumns:'repeat(3,1fr)', justifyItems: 'center',alignItems:'center'}}>
          {/* display:'grid', gridTemplateColumns:'3',gridTemplateRows:'auto' */}
          {articles && !loading && articles.map((element)=>{
                return <div  className={`newsshowing `} >
                <Newsitem mode={props.mode} key={element.url} title={element.title?element.title.slice(0,50):""} desc={element.description?element.description.slice(0,120):""} imageurl={element.url?element.urlToImage:"https://www.hindustantimes.com/ht-img/img/2024/06/10/550x309/US-HUNTER-BIDEN-GUN-TRIAL-CONTINUES-IN-DELAWARE-10_1718034063663_1718034099459.jpg"} newsurl={element.url} 
                author={element.author?element.author:"unknown"} time={element.publishedAt?(element.publishedAt):'unknown'} source={element.source.name} ></Newsitem>
                </div>
          })}      
      </div>  
      </div>
      
      <InfiniteScroll
      dataLength={articles.length}
      next={fetchMoreData}
      hasMore={articles.length!=totalResults}                                                                                                                                                                                                                                                                    
      loader={<Spinner mode={props.mode}/>}
    />
    </div>
    </>

    )
  }


News.defaultProps={
  pagesize:5,
  country:'in',
  category:'general',
  totalResults:0
}
News.propTypes={
  country:PropTypes.string,
  pagesize:PropTypes.number,
  category:PropTypes.string
}
export default News;