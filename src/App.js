import React, { Component } from 'react';
import Layout from './components/Layout/Layout';
import BurgerBuilder from './container/BurgerBuilder/BurgerBuilder';
import CheckOutSummary from './container/checkOut/checkOutSummary';
import {Route,Switch} from 'react-router-dom';
import Orders from './container/Orders/Orders';



class App extends Component {


  render() {
    return (
      <div>
          <Layout>
              <Switch>
              <Route path="/" exact component={BurgerBuilder}/>
              <Route path="/orders" exact component={Orders}/>
              <Route path="/checkOut" component={CheckOutSummary}/>
              </Switch>
          </Layout>


      </div>
    );
  }
}

export default App;
