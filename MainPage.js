import React, { useState, useEffect } from "react"
import "./App.css"
import { Link } from 'react-router';
import APIHelper from "./APIHelper.js"

class App extends React.Component{
render() {
    return (
      <div>
        <header>
          This is MP!
        </header>
  
        <main>
          {this.props.children}
        </main>  
        
        <Link to="/SomePage">SP_mp</Link>
      </div>
    );
  }
}
export default App