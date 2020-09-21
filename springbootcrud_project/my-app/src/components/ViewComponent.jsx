import React, { Component } from 'react';
import SupplierService from '../service/SupplierService';

class ViewComponent extends Component {
    constructor(props){
        super (props)
        this.state = {
            id: this.props.match.params.id,
            supplier :{}
        }
    }
    componentDidMount(){
        SupplierService.getSupplierById(this.state.id).then(res =>{
            this.setState({supplier:res.data});
        })
    }
    render() {
        return (
            <div>
            <div className= "card col-md-6 offset-md-3 offset-md-3">
                <h3 className = "text-center">View Supplier Details</h3>
                <div className = "card-body">
                    <div>
                        <div className = "row">
                        <label> Address : </label>
                        <div>{this.state.supplier.address}</div>
                        </div>
                        <div className = "row">
                        <label> City : </label>
                        <div>{this.state.supplier.city}</div>
                        </div>
                        <div className="row">
                        <label> Company Name : </label>
                        <div>{this.state.supplier.companyName}</div>
                        </div>
                        <div className="row">
                        <label> Country : </label>
                        <div>{this.state.supplier.country}</div>
                        </div>
                        <div className="row">
                        <label> First Name : </label>
                        <div>{this.state.supplier.firstName}</div>
                        </div>
                        <div className="row">
                        <label> IRS Office : </label>
                        <div>{this.state.supplier.irsOffice}</div>
                        </div>
                        <div className="row">
                        <label> Last Name : </label>
                        <div>{this.state.supplier.lastName}</div>
                        </div>
                        <div className="row">
                        <label> VAT Number : </label>
                        <div>{this.state.supplier.vatNumber}</div>
                        </div>
                        <div className="row">
                        <label> Zip Code : </label>
                        <div>{this.state.supplier.zipCode}</div>
                        </div>
                    </div>
                </div>
            </div>
            </div>
        );
    }
}

export default ViewComponent;