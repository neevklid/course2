import React, { useState, useEffect } from "react"
import "./App.css"
import { Link } from 'react-router';
import APIHelper from "./APIHelper.js"

class App extends React.Component{
render() {
    return (
      <div>
        
  
        <main>
          {this.props.children}
        </main>  
        
      </div>
    );
  }
}
export default App