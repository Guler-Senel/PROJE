package com.ilacatlasi.repository;

import com.ilacatlasi.model.Ilac;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface IlacRepository extends JpaRepository<Ilac, Long> {

	List<Ilac> findByYanEtkilerContainingIgnoreCase(String yanEtki);
	List<Ilac> findByReceteRengiIgnoreCase(String receteRengi);
	List<Ilac> findByRecetesizAlinabilirMi(boolean recetesizAlinabilirMi);

	List<Ilac> findByHalkDiliContainingIgnoreCase(String halkDili);

	

    List<Ilac> findByIsimVeFormContainingIgnoreCase(String isimVeForm);
}
