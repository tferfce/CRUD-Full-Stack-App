import React from 'react';
import './App.css';
import SupplierComponent from '../src/components/SupplierComponent'
import HeaderComponent from './components/HeaderComponent';
import FooterComponent from './components/FooterComponent';
import {BrowserRouter as Router,Route,Switch} from 'react-router-dom';
import AddSupplierComponent from './components/AddSupplierComponent';
import UpdateSupplierComponent from './components/UpdateSupplierComponent';
import ViewComponent from './components/ViewComponent';
import SearchSupplier from './components/SearchSupplier';
import SearchSupplier2 from './components/SearchSupplier2';

function App() {
  return (
    <div className = "all">
      <Router>
        <div className ="container">
          <HeaderComponent/>
            <div className="container">
              <Switch>
                <Route path="/" exact component={SupplierComponent}></Route>
                <Route path = "/suppliers" component = {SupplierComponent}></Route>
                <Route path = "/addSupplier" component = {AddSupplierComponent}></Route>
                <Route path = "/supplier/:id" component = {UpdateSupplierComponent}></Route>
                <Route path = "/supplier-view/:id" component = {ViewComponent}></Route>
                <Route path = "/supplier-search/:companyName" component = {SearchSupplier}></Route>
                <Route path = "/supplier-search_by_vat/:vatNumber" component = {SearchSupplier2}></Route>  
                <SupplierComponent />
              </Switch>
            </div>
          <FooterComponent/>
        </div>
      </Router>
    </div>
  );
}

export default App;
