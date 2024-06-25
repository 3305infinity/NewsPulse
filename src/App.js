
import './App.css';
import React, { Component } from 'react';
import  News  from './components/News.js'
import Navbar from  './components/Navbar.js';
import Home from  './components/Home.js';
import LoadingBar from 'react-top-loading-bar'
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from "react-router-dom";

export default class App extends Component {
  pagesize=6
  apikey=process.env.react_app_news_api
  state={progress:0,
    mode:'light'
  }
  setProgress=(progress)=>{
    this.setState({ progress : progress});
  }
  toggle=()=>{
    if(this.state.mode==='light')
      {
        this.setState({mode:'dark'})
        document.body.style.backgroundColor='rgb(35 35 39)';
      }
      else {
        this.setState({mode:'light'})
        document.body.style.backgroundColor='#f9f8ff ';

      }
  }
  render() {
    return (
      <Router>
        <div>
        <LoadingBar
        height={4}
        color='#f11946'
        progress={this.state.progress}
      />                                                                                       
        <Navbar mode={this.state.mode} toggle={this.toggle}/>
       </div>
       {/* you shoukd write this.statee/.mode everywhere here csause this is working in class based  */}
        <Routes>
        <Route exact path="/" element={<Home mode={this.state.mode}  toggle={this.toggle} apikey={this.apikey} key="general" pagesize={6} country="in"  category="general" />}></Route>
          {/* <Route exact path="/" element={ < News mode={this.state.mode} toggle={this.toggle}  setProgress={this.setProgress} apikey={this.apikey} key="general" pagesize={6} country="in" category="general"/>}></Route> */}
          <Route exact path="/home" element={ < News mode={this.state.mode} toggle={this.toggle}  setProgress={this.setProgress} apikey={this.apikey} key="general" pagesize={6} country="in" category="general"/>}></Route>
          <Route exact path="/business" element={ < News mode={this.state.mode} toggle={this.toggle}  setProgress={this.setProgress} apikey={this.apikey} key="business" pagesize={6} country="in" category="business"/>}></Route>
          <Route exact path="/entertainment" element={ < News mode={this.state.mode} toggle={this.toggle}  setProgress={this.setProgress} apikey={this.apikey} key="entertainment" pagesize={6} country="in" category="entertainment"/>}></Route>
          <Route exact path="/general" element={ < News mode={this.state.mode} toggle={this.toggle}  setProgress={this.setProgress} apikey={this.apikey} key="general" pagesize={6} country="in" category="general"/>}></Route>
          <Route exact path="/health" element={ < News mode={this.state.mode} toggle={this.toggle}  setProgress={this.setProgress} apikey={this.apikey} key="health" pagesize={6} country="in" category="health"/>}></Route>
          <Route exact path="/science" element={ < News mode={this.state.mode} toggle={this.toggle}  setProgress={this.setProgress} apikey={this.apikey} key="science" pagesize={6} country="in" category="science"/>}></Route>
          <Route exact path="/sports" element={ < News mode={this.state.mode} toggle={this.toggle}  setProgress={this.setProgress} apikey={this.apikey} key="sports" pagesize={6} country="in" category="sports"/>}></Route>
          <Route exact path="/technology" element={ < News mode={this.state.mode} toggle={this.toggle}  setProgress={this.setProgress} apikey={this.apikey} key="technology" pagesize={6} country="in" category="technology"/>}></Route>
        </Routes>
      </Router>
    )  }
}
