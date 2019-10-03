import React, { Component } from "react";
import ProductIndex from "./products/ProductIndex"
import { Route} from 'react-router-dom';

const App = () => {
  
  return (
    <div>
      <h1>Online Store</h1>
      <Route exact path="/" component={ProductIndex} />
    </div>
  );
};
export default App;
