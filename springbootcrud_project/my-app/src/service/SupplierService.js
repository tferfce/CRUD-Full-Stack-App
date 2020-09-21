import axios from 'axios';

const SUPPLIERS_REST_API = 'http://localhost:8080/suppliers';
const ADD_SUPPLIER_REST_API = 'http://localhost:8080/addSupplier';
const FIND_SUPPLIER_REST_API = 'http://localhost:8080/supplier';
const FIND_SUPPLIER_BY_C = 'http://localhost:8080/suppliersByC';
const FIND_SUPPLIER_BY_V = 'http://localhost:8080/suppliersByV';

class SupplierService{
    getSuppliers(){
        return axios.get(SUPPLIERS_REST_API);
    }

    addSupplier(supplier){
        return axios.post(ADD_SUPPLIER_REST_API,supplier);
    }

    getSupplierById(supplierId){
        return axios.get(FIND_SUPPLIER_REST_API+'/'+supplierId);
    }

    updateSupplier(supplier,supplierId){
        return axios.put(FIND_SUPPLIER_REST_API+'/'+supplierId, supplier);
    }
    deleteSupplier(supplierId){
        return axios.delete(FIND_SUPPLIER_REST_API+'/'+supplierId)
    }
    getSupplierByC(companyName){
        return axios.get(FIND_SUPPLIER_BY_C+'/'+companyName)
    }
    getSupplierByV(vatNumer){
        return axios.get(FIND_SUPPLIER_BY_V+'/'+vatNumer)
    }

}

export default new SupplierService();