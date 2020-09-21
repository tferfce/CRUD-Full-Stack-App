import React, { Component } from 'react';
import SupplierService from '../service/SupplierService';
import { Link } from "react-router-dom"

class SearchSupplier2 extends Component {
    constructor(props){
        super (props);
        this.onSearchSupplier = this.onSearchSupplier.bind(this);
        this.state = {
            suppliers : [],
            currentSupplier :null,
            currentIndex: -1,
            vatNumber:''
        }
    }
    componentDidMount(){
        this.getSuppliers();     
    }

    getSuppliers(){
        SupplierService.getSuppliers().then(response =>{
            this.setState({
                suppliers: response.data
            })
            console.log(response.data);
        })
        .catch(e =>{
            console.log(e);
        });
    }
    refreshList() {
        this.getSuppliers();
        this.setState({
          currentSupplier: null,
          currentIndex: -1
        });
      }
      setActiveSupplier(supplier, index) {
        this.setState({
          currentSupplier: supplier,
          currentIndex: index
        });
      }

    onSearchSupplier(e) {
        const vatNumber = e.target.value;
        this.setState({
            vatNumber: vatNumber
        });
      }

    SearchSupplier(){
        SupplierService.getSupplierByV(this.state.vatNumber).then(res =>{
            this.setState({
                suppliers: res.data
            })
            console.log(res.data);
        })
        .catch(e=>{
            console.log(e);
        });
    }
    render() {
        const {vatNumber,suppliers,currentSupplier,currentIndex} = this.state;
        return (
                <div className="list row">
                    <div className="col-md-8">
                        <div className="input-group mb-3">
                            <div className="input-group mb-3">
                            <input type="text"className="form-control" placeholder="Search By Vat Number" value={vatNumber} onChange={this.onSearchSupplier}/>
                                <div className="input-group-append">
                                    <button className="btn btn-outline-secondary" type="button" onClick={this.vatNumber}>Search</button>
                                </div>
                            </div>                                          
                        </div>
                    </div>
                    <div className = "col-md-6">
                        <h4>Supplier List</h4>
                        <ul className="list-group">
                            {suppliers && suppliers.map((supplier,index)=>(
                                <li
                                className={
                                  "list-group-item " +
                                  (index === currentIndex ? "active" : "")
                                }
                                onClick={() => this.setActiveSupplier(supplier, index)}
                                key={index}
                              >
                                {supplier.vatNumber}
                              </li>
                            ))}
                        </ul>
                    </div>
                    <div className="col-md-6">
          {currentSupplier ? (
            <div>
              <h4>Supplier</h4>
              <div>
                <label>
                  <strong>Company Name:</strong>
                </label>{" "}
                {currentSupplier.companyName}
              </div>
              <div>
                <label>
                  <strong>Address:</strong>
                </label>{" "}
                {currentSupplier.address}
              </div>
              <div>
                <label>
                  <strong>City:</strong>
                </label>{" "}
                {currentSupplier.city}
              </div>
              <div>
                <label>
                  <strong>Country:</strong>
                </label>{" "}
                {currentSupplier.country}
              </div>
              <div>
                <label>
                  <strong>First Name:</strong>
                </label>{" "}
                {currentSupplier.firstName}
              </div>
              <div>
                <label>
                  <strong>IRS Office:</strong>
                </label>{" "}
                {currentSupplier.irsOffice}
              </div>
              <div>
                <label>
                  <strong>Last Name:</strong>
                </label>{" "}
                {currentSupplier.lastName}
              </div>
              <div>
                <label>
                  <strong>Vat Number:</strong>
                </label>{" "}
                {currentSupplier.vatNumber}
              </div>
              <div>
                <label>
                  <strong>Zip Code:</strong>
                </label>{" "}
                {currentSupplier.zipCode}
              </div>
              <Link
                to={"/supplier/" + currentSupplier.id}
                className="badge badge-warning">Edit</Link>
            </div>
          ) : (
            <div>
              <br />
              <p>Click on Supplier based on Var Number</p>
            </div>
          )}
        </div>
                </div>
                
        );
    }
}

export default SearchSupplier2;