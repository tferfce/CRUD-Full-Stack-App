import React, { Component } from 'react';
import SupplierService from '../service/SupplierService';

class AddSupplierComponent extends Component {
    constructor(props){
        super (props)
        
        this.state = {
            address:'',
            city:'',
            companyName:'',
            country:'',
            firstName:'',
            irsOffice:'',
            lastName:'',
            vatNumber:'',
            zipCode:''
        }
        this.changeaddressHandler = this.changeaddressHandler.bind(this);
        this.changecityHandler = this.changecityHandler.bind(this);
        this.changecompanyNameHandler = this.changecompanyNameHandler.bind(this);
        this.changecountryHandler = this.changecountryHandler.bind(this);
        this.changefirstNameHandler = this.changefirstNameHandler.bind(this);
        this.changeirsOfficeHandler = this.changeirsOfficeHandler.bind(this);
        this.changelastNameHandler = this.changelastNameHandler.bind(this);
        this.changevatNumberHandler = this.changevatNumberHandler.bind(this);
        this.changezipCodeHandler = this.changezipCodeHandler.bind(this);
        this.saveSupplier = this.saveSupplier.bind(this);
    }

    saveSupplier = (e) =>{
        e.preventDefault();
        let supplier = {address: this.state.address,
                        city: this.state.city,
                        companyName: this.state.companyName,
                        country: this.state.country,
                        firstName: this.state.firstName,
                        irsOffice: this.state.irsOffice,
                        lastName: this.state.lastName,
                        vatNumber: this.state.vatNumber,
                        zipCode: this.state.zipCode};
        console.log('supplier =>' +JSON.stringify(supplier));
        SupplierService.addSupplier(supplier).then(res =>{
            this.props.history.push('/suppliers')
        })
    }

    cancel(){
        this.props.history.push('/suppliers'); 
    }
    changeaddressHandler = (event)=>{
        this.setState({address: event.target.value});
    }
    changecityHandler = (event)=>{
        this.setState({city: event.target.value});
    }
    changecompanyNameHandler = (event)=>{
        this.setState({companyName: event.target.value});
    }
    changecountryHandler = (event)=>{
        this.setState({country: event.target.value});
    }
    changefirstNameHandler = (event)=>{
        this.setState({firstName: event.target.value});
    }
    changeirsOfficeHandler = (event)=>{
        this.setState({irsOffice: event.target.value});
    }
    changelastNameHandler = (event)=>{
        this.setState({lastName: event.target.value});
    }
    changevatNumberHandler = (event)=>{
        this.setState({vatNumber: event.target.value});
    }
    changezipCodeHandler = (event)=>{
        this.setState({zipCode: event.target.value});
    }

    render() {
        return (
            <div>
                <div className="container">
                    <div className = "row">
                        <div className = "card col-md-6 offset-md-3 offset-md-3">
                            <h3 className ="text-center">Add Supplier</h3>
                            <div className = "card-body">
                                <form>
                                    <div className="form-group">
                                        <label>Address: </label>
                                        <input placeholder ="address" name = "address" className="form-control"
                                            value={this.state.address} onChange={this.changeaddressHandler}/>
                                    </div>
                                    <div className="form-group">
                                        <label>City: </label>
                                        <input placeholder ="city" name = "city" className="form-control"
                                            value={this.state.city} onChange={this.changecityHandler}/>
                                    </div>
                                    <div className="form-group">
                                        <label>Company Name: </label>
                                        <input placeholder ="companyName" name = "companyName" className="form-control"
                                            value={this.state.companyName} onChange={this.changecompanyNameHandler}/>
                                    </div>
                                    <div className="form-group">
                                        <label>Country: </label>
                                        <input placeholder ="country" name = "country" className="form-control"
                                            value={this.state.country} onChange={this.changecountryHandler}/>
                                    </div>
                                    <div className="form-group">
                                        <label>First Name: </label>
                                        <input placeholder ="firstName" name = "firstName" className="form-control"
                                            value={this.state.firstName} onChange={this.changefirstNameHandler}/>
                                    </div>
                                    <div className="form-group">
                                        <label>IRS Office: </label>
                                        <input placeholder ="irsOffice" name = "irsOffice" className="form-control"
                                            value={this.state.irsOffice} onChange={this.changeirsOfficeHandler}/>
                                    </div>
                                    <div className="form-group">
                                        <label>Last Name: </label>
                                        <input placeholder ="lastName" name = "lastName" className="form-control"
                                            value={this.state.lastName} onChange={this.changelastNameHandler}/>
                                    </div>
                                    <div className="form-group">
                                        <label>Vat Number: </label>
                                        <input placeholder ="vatNumber" name = "vatNumber" className="form-control"
                                            value={this.state.vatNumber} onChange={this.changevatNumberHandler}/>
                                    </div>
                                    <div className="form-group">
                                        <label>Zip Code: </label>
                                        <input placeholder ="zipCode" name = "zipCode" className="form-control"
                                            value={this.state.zipCode} onChange={this.changezipCodeHandler}/>
                                    </div>
                                    <button className ="btn btn-success" onClick={this.saveSupplier}>Save</button>
                                    <button className ="btn btn-danger" onClick={this.cancel.bind(this)} style ={{marginLeft: "10px"}}>cancel</button>
                                </form>
                                
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default AddSupplierComponent;