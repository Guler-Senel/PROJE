package com.ilacatlasi.model;

import jakarta.persistence.*;

@Entity
public class Ilac {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column(length = 1000)
    private String isimVeForm;

    @Column(length = 1000)
    private String kullanimAlani;

    @Column(length = 2000)
    private String yanEtkiler;

    @Column(length = 1000)
    private String halkDili;

    private String receteRengi;

    @Column(nullable = true)
    private Boolean recetesizAlinabilirMi;


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

    public String getHalkDili() {
        return halkDili;
    }

    public void setHalkDili(String halkDili) {
        this.halkDili = halkDili;
    }

    public String getReceteRengi() {
        return receteRengi;
    }

    public void setReceteRengi(String receteRengi) {
        this.receteRengi = receteRengi;
    }

    public Boolean getRecetesizAlinabilirMi() {
        return recetesizAlinabilirMi;
    }

    public void setRecetesizAlinabilirMi(Boolean recetesizAlinabilirMi) {
        this.recetesizAlinabilirMi = recetesizAlinabilirMi;
    }
}
