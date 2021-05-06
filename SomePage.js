import React, { useState, useEffect } from "react"
import "./App.css"
import { Link } from 'react-router';
import APIHelper from "./APIHelper.js"

class App extends React.Component{
render() {
    return (
      <div>
        <header>
          This is SomePage!
        </header>

        <main>
          {this.props.children}
        </main>  
        
        <Link href="/">App</Link>
      </div>
    );
  }
}
export default App