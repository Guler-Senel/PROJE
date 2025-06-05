package com.ilacatlasi.controller;
import org.springframework.http.ResponseEntity;


import com.ilacatlasi.model.Ilac;
import com.ilacatlasi.repository.IlacRepository;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/ilaclar")
public class IlacController {

    private final IlacRepository ilacRepository;

    public IlacController(IlacRepository ilacRepository) {
        this.ilacRepository = ilacRepository;
    }

    // ✅ Tüm ilaçları getir
    @GetMapping
    public List<Ilac> getAllIlaclar() {
        return ilacRepository.findAll();
    }

    // ✅ Yeni ilaç oluştur
    @PostMapping
    public Ilac createIlac(@RequestBody Ilac ilac) {
        return ilacRepository.save(ilac);
    }
    @GetMapping("/ara")
    public List<Ilac> ara(@RequestParam String isimVeForm) {
        return ilacRepository.findByIsimVeFormContainingIgnoreCase(isimVeForm);
    }
    @GetMapping("/ara-yan-etki")
    public List<Ilac> ilaclariYanEtkiyeGoreAra(@RequestParam String yanEtki) {
        return ilacRepository.findByYanEtkilerContainingIgnoreCase(yanEtki);
    }


    // ✅// Reçete rengine göre filtreleme
    @GetMapping("/recete")
    public List<Ilac> getByReceteRengi(@RequestParam String receteRengi) {
        return ilacRepository.findByReceteRengiIgnoreCase(receteRengi);
    }
    @GetMapping("/recetesiz")
    public List<Ilac> getIlaclarByRecetesiz(@RequestParam boolean recetesiz) {
        return ilacRepository.findByRecetesizAlinabilirMi(recetesiz);
    }
    @GetMapping("/halkdili")
    public List<Ilac> getIlaclarByHalkDili(@RequestParam String halkDili) {
        return ilacRepository.findByHalkDiliContainingIgnoreCase(halkDili);
    }
    @DeleteMapping("/{id}")
    public void deleteIlac(@PathVariable Long id) {
    	 ilacRepository.deleteById(id);
    }
    @PutMapping("/{id}")
    public ResponseEntity<Ilac> updateIlac(@PathVariable Long id, @RequestBody Ilac yeniIlac) {
        return ilacRepository.findById(id)
            .map(ilac -> {
                ilac.setIsimVeForm(yeniIlac.getIsimVeForm());
                ilac.setKullanimAlani(yeniIlac.getKullanimAlani());
                ilac.setYanEtkiler(yeniIlac.getYanEtkiler());
                ilac.setRecetesizAlinabilirMi(yeniIlac.isRecetesizAlinabilirMi());
                ilac.setReceteRengi(yeniIlac.getReceteRengi());
                ilac.setHalkDili(yeniIlac.getHalkDili());
                Ilac guncellenmis = ilacRepository.save(ilac);
                return ResponseEntity.ok(guncellenmis);
            })
            .orElseGet(() -> ResponseEntity.notFound().build());
    }


}
