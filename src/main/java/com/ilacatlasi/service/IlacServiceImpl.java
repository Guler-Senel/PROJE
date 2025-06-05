package com.ilacatlasi.service;

import com.ilacatlasi.model.Ilac;
import com.ilacatlasi.repository.IlacRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class IlacServiceImpl implements IlacService {

    private final IlacRepository ilacRepository;

    @Autowired
    public IlacServiceImpl(IlacRepository ilacRepository) {
        this.ilacRepository = ilacRepository;
    }

    @Override
    public Ilac ilacKaydet(Ilac ilac) {
        return ilacRepository.save(ilac);
    }

    @Override
    public List<Ilac> tumunuGetir() {
        return ilacRepository.findAll();
    }
}

