package com.ilacatlasi.service;

import com.fasterxml.jackson.core.type.TypeReference;
import com.fasterxml.jackson.databind.ObjectMapper;
import com.ilacatlasi.model.Ilac;
import com.ilacatlasi.repository.IlacRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.io.InputStream;
import java.util.List;

@Service
public class IlacJsonService {

    @Autowired
    private IlacRepository ilacRepository;

    public void jsonVerileriniVeritabaninaKaydet() {
        ObjectMapper mapper = new ObjectMapper();
        TypeReference<List<Ilac>> typeReference = new TypeReference<>() {};
        InputStream inputStream = getClass().getResourceAsStream("/json/ilaclar.json");

        try {
            List<Ilac> ilacListesi = mapper.readValue(inputStream, typeReference);
            ilacRepository.saveAll(ilacListesi);
            System.out.println("✅ JSON verileri başarıyla kaydedildi.");
        } catch (Exception e) {
            System.out.println("⚠️ Hata: JSON verisi okunamadı veya kaydedilemedi → " + e.getMessage());
        }
    }
}
