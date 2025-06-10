package com.ilacatlasi.model;

import jakarta.persistence.*; // veya javax.persistence.*
import lombok.Data;

@Entity
@Data
public class Ilac {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    private String ad;
    private String kullanimAlani;
    private String yanEtkiler;
    private String kimlerKullanmamali;
    private boolean recetesizAlinabilirMi;
    private String receteRengi;
}
