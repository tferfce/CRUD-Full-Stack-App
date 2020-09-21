import React, {Component} from 'react';
import SupplierService from '../service/SupplierService'

class SupplierComponent extends Component{
    
    constructor(props){
        super (props)
        this.state = {
            suppliers: []
        }
        this.addSupplier = this.addSupplier.bind(this);
        this.editSupplier = this.editSupplier.bind(this);
        this.deleteSupplier = this.deleteSupplier.bind(this);
        this.searchSupplier = this.searchSupplier.bind(this);
        this.searchSupplier_by_vat = this.searchSupplier_by_vat.bind(this);
    }
    componentDidMount(){
        SupplierService.getSuppliers().then((response)=>{
            this.setState({ suppliers: response.data})
        })
    }
    viewSupplier(id){
        this.props.history.push(`/supplier-view/${id}`)
    }
    addSupplier(supplier){
        this.props.history.push('/addSupplier');
    }
    editSupplier(id){
        this.props.history.push(`/supplier/${id}`);
    }
    deleteSupplier(id){
        SupplierService.deleteSupplier(id).then(res =>{
            this.setState({suppliers: this.state.suppliers.filter(supplier => supplier.id !== id)});
        })
    }
    searchSupplier(companyName){
        this.props.history.push(`/supplier-search/${companyName}`);
    }
    searchSupplier_by_vat(vatNumber){
        this.props.history.push(`/supplier-search_by_vat/${vatNumber}`);
    }
    render(){
        return (
            <div>
                <h2 style = {{marginTop:"20px"}} className="text-center"> Supplier List</h2>
                <div style = {{marginTop:"50px"}}>
                <button className = "btn btn-info" onClick={this.addSupplier}> Add Supplier </button>
                <button style = {{marginLeft:"10px"}}  className = "btn btn-info" onClick={this.searchSupplier}> Search By Company</button>
                <button style = {{marginLeft:"10px"}}  className = "btn btn-info" onClick={this.searchSupplier_by_vat}> Search By Vat Number</button>
                <table className = "table table-striped table-bordered ">
                        <tr>
                            <td>id</td>
                            <td>Address</td>
                            <td>City</td>
                            <td>CompanyName</td>
                            <td>Country</td>
                            <td>FirstName</td>
                            <td>IRSOffice</td>
                            <td>LastName</td>
                            <td>VatNumber</td>
                            <td>ZipCode</td>
                            <td>Action#1</td>
                            <td>Action#2</td>
                            <td>Action#3</td>
                            
                        </tr>                     
                    <tbody>
                        {
                            this.state.suppliers.map(
                                supplier =>
                                <tr key = {supplier.id}>
                                    <td> {supplier.id}</td>
                                    <td> {supplier.address}</td>
                                    <td> {supplier.city}</td>
                                    <td> {supplier.companyName}</td>
                                    <td> {supplier.country}</td>
                                    <td> {supplier.firstName}</td>
                                    <td> {supplier.irsOffice}</td>
                                    <td> {supplier.lastName}</td>
                                    <td> {supplier.vatNumber}</td>
                                    <td> {supplier.zipCode}</td>
                                    <td>
                                        <button onClick = { ()=> this.editSupplier(supplier.id)} className="btn btn-info" >Update</button>                                                                            
                                    </td>
                                    <td><button onClick ={ () => this.deleteSupplier(supplier.id)} className="btn btn-danger">Delete</button></td>
                                    <td><button onClick={() => this.viewSupplier(supplier.id)} className ="btn btn-info" >View</button></td>
                                    
                                
                                </tr>
                            )
                        }
                    </tbody>
                </table>
            </div>
            </div>
        )
    }
}
export default SupplierComponent