package gr.publicsoft.springbootcrud.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import gr.publicsoft.springbootcrud.entity.Supplier;


public interface SupplierRepository extends JpaRepository<Supplier, Long> {
	
	Supplier findByCompanyName(String companyName);
	Supplier findByVatNumber(String vatNumber);
}
