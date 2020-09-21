package gr.publicsoft.springbootcrud.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import gr.publicsoft.springbootcrud.entity.Supplier;
import gr.publicsoft.springbootcrud.service.SupplierService;

@RestController
@CrossOrigin(origins = "http://localhost:3000")
public class SupplierController {
	@Autowired
	private SupplierService service;
	
	@PostMapping("/addSupplier")
	public Supplier addSupplier(@RequestBody Supplier supplier) {
		return service.saveSupplier(supplier);
	}
	@PostMapping("/addSuppliers")
	public List<Supplier> addSuppliers(@RequestBody List<Supplier> suppliers){
		return service.saveSuppliers(suppliers);
	}
	@GetMapping("/suppliers")
	public List<Supplier> findAllSuppliers(){
		return service.getSuppliers();
	}
	
	@GetMapping("/suppliersByC/{companyName}")
	public Supplier findSupplierByCompanyName(@PathVariable String companyName) {
		return service.getSupplierByCompanyName(companyName);
	}
	@GetMapping("/supplier/{id}")
	public Supplier findSupplierById(@PathVariable Long id) {
		return service.getSupplierById(id);
	}
	
	@GetMapping("/suppliersByV/{vatNumber}")
	public Supplier findSupplierByVatNumber(@PathVariable String vatNumber) {
		return service.getSupplierByVatNumber(vatNumber);
	}
	@PutMapping("/supplier/{id}")
	public ResponseEntity<Supplier> updateSupplier(@PathVariable Long id, @RequestBody Supplier supplier) {
		Supplier existingSupplier = service.supplierRepository.findById(id).orElse(null);
		existingSupplier.setAddress(supplier.getAddress());
		existingSupplier.setCity(supplier.getCity());
		existingSupplier.setCompanyName(supplier.getCompanyName());
		existingSupplier.setCountry(supplier.getCountry());
		existingSupplier.setFirstName(supplier.getFirstName());
		existingSupplier.setIrsOffice(supplier.getIrsOffice());
		existingSupplier.setLastName(supplier.getLastName());
		existingSupplier.setVatNumber(supplier.getVatNumber());
		existingSupplier.setZipCode(supplier.getZipCode());
		Supplier updatedSupplier = service.supplierRepository.save(existingSupplier);
		return ResponseEntity.ok(updatedSupplier);
	}
	@DeleteMapping("/supplier/{id}")
	public String deleteSupplier(@PathVariable long id) {
		return service.deleteSupplier(id);
	}

}
