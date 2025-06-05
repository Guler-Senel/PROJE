package com.ilacatlasi.model;

import jakarta.persistence.*;

@Entity
public class Ilac {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    private String isimVeForm; // Örnek: "Parol Tablet"

    private String kullanimAlani;

    private String yanEtkiler;

    private boolean recetesizAlinabilirMi;

    private String receteRengi;

    private String halkDili; // Örnek: "ateş düşürücü"

    // Getter ve Setter'lar
    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getIsimVeForm() {
        return isimVeForm;
    }

    public void setIsimVeForm(String isimVeForm) {
        this.isimVeForm = isimVeForm;
    }

    public String getKullanimAlani() {
        return kullanimAlani;
    }

    public void setKullanimAlani(String kullanimAlani) {
        this.kullanimAlani = kullanimAlani;
    }

    public String getYanEtkiler() {
        return yanEtkiler;
    }

    public void setYanEtkiler(String yanEtkiler) {
        this.yanEtkiler = yanEtkiler;
    }

    public boolean isRecetesizAlinabilirMi() {
        return recetesizAlinabilirMi;
    }

    public void setRecetesizAlinabilirMi(boolean recetesizAlinabilirMi) {
        this.recetesizAlinabilirMi = recetesizAlinabilirMi;
    }

    public String getReceteRengi() {
        return receteRengi;
    }

    public void setReceteRengi(String receteRengi) {
        this.receteRengi = receteRengi;
    }

    public String getHalkDili() {
        return halkDili;
    }

    public void setHalkDili(String halkDili) {
        this.halkDili = halkDili;
    }
}

