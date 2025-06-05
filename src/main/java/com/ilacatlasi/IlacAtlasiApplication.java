package com.ilacatlasi;

import com.fasterxml.jackson.core.type.TypeReference;
import com.fasterxml.jackson.databind.ObjectMapper;
import com.ilacatlasi.model.Ilac;
import com.ilacatlasi.repository.IlacRepository;
import org.springframework.boot.CommandLineRunner;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.annotation.Bean;

import java.io.InputStream;
import java.util.List;

@SpringBootApplication
public class IlacAtlasiApplication {

    public static void main(String[] args) {
        SpringApplication.run(IlacAtlasiApplication.class, args);
    }

    @Bean
    CommandLineRunner yukleIlaclar(IlacRepository ilacRepository) {
        return args -> {
            ObjectMapper objectMapper = new ObjectMapper();
            TypeReference<List<Ilac>> typeReference = new TypeReference<>() {};
            InputStream inputStream = TypeReference.class.getResourceAsStream("/json/ilaclar.json");

            try {
                List<Ilac> ilaclar = objectMapper.readValue(inputStream, typeReference);
                ilacRepository.saveAll(ilaclar);
                System.out.println("✅ İlaç verileri başarıyla yüklendi.");
            } catch (Exception e) {
                System.out.println("❌ Veri yüklenirken hata oluştu: " + e.getMessage());
            }
        };
    }
}
