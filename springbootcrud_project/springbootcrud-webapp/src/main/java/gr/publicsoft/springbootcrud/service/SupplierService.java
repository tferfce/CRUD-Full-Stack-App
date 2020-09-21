package gr.publicsoft.springbootcrud.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import gr.publicsoft.springbootcrud.entity.Supplier;
import gr.publicsoft.springbootcrud.repository.SupplierRepository;

@Service
public class SupplierService {
	@Autowired
	public SupplierRepository supplierRepository;
	
	public Supplier saveSupplier(Supplier supplier) {
		return supplierRepository.save(supplier);
	}
	
	public List<Supplier> saveSuppliers(List<Supplier> suppliers) {
		return supplierRepository.saveAll(suppliers);
	}
	
	public List<Supplier> getSuppliers(){
		return supplierRepository.findAll();
	}
	
	public Supplier getSupplierByCompanyName(String companyName) {
		
		return supplierRepository.findByCompanyName(companyName);
	}
	
	public Supplier getSupplierById(Long id) {
		return supplierRepository.findById(id).orElse(null);
	}
	
	public Supplier getSupplierByVatNumber(String vatNumber) {
		
		return supplierRepository.findByVatNumber(vatNumber);
	}
	
	public String deleteSupplier(long id) {
		supplierRepository.deleteById(id);
		return "supplier in "+id+" position removed!";
	}

}
