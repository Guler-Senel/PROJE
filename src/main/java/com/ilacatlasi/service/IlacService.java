package com.ilacatlasi.service;

import com.ilacatlasi.model.Ilac;
import java.util.List;

public interface IlacService {
    Ilac ilacKaydet(Ilac ilac);
    List<Ilac> tumunuGetir();
}

