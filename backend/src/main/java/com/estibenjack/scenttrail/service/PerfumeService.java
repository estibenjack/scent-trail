package com.estibenjack.scenttrail.service;

import com.estibenjack.scenttrail.entity.Perfume;
import com.estibenjack.scenttrail.enums.PerfumeAttributes;
import com.estibenjack.scenttrail.repository.PerfumeRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.Comparator;
import java.util.List;
import java.util.Optional;

@Service
public class PerfumeService {

    @Autowired
    private PerfumeRepository perfumeRepository;

    // get all perfumes
    public List<Perfume> getAllPerfumes() {
        List<Perfume> perfumes = perfumeRepository.findAll();
        perfumes.sort(Comparator.comparing(Perfume::getId));  // Sort by id in ascending order
        return perfumes;
    }

    //get perfume by id
    public Optional<Perfume> getPerfumeById(Long id) {
        return perfumeRepository.findById(id);
    }

    // add or update a perfume
    public Perfume savePerfume(Perfume perfume) {
        return perfumeRepository.save(perfume);
    }

    //delete a perfume by id
    public void deletePerfume(Long id) {
        perfumeRepository.deleteById(id);
    }

    // find perfumes by brand
    public List<Perfume> getPerfumesByBrand(String brand) {
        return perfumeRepository.findByBrand(brand);
    }

    // find perfumes by season
    public List<Perfume> getPerfumesBySeason(PerfumeAttributes.SeasonEnum season) {
        return perfumeRepository.findBySeason(season);
    }

    public List<Perfume> getPerfumesBySillage(PerfumeAttributes.SillageEnum sillage) {
        return perfumeRepository.findBySillage(sillage);
    }

    public List<Perfume> getPerfumesByLongevity(PerfumeAttributes.LongevityEnum longevity) {
        return perfumeRepository.findByLongevity(longevity);
    }

    public List<Perfume> getPerfumesbByRating(PerfumeAttributes.RatingEnum rating) {
        return perfumeRepository.findByRating(rating);
    }

    public Perfume updatePerfume(Long id, Perfume perfumeDetails) {
        Optional<Perfume> optionalPerfume = perfumeRepository.findById(id);
        if(optionalPerfume.isPresent()) {
            Perfume perfume = optionalPerfume.get();
            perfume.setName(perfumeDetails.getName());
            perfume.setBrand(perfumeDetails.getBrand());
            perfume.setSeason(perfumeDetails.getSeason());
            perfume.setSillage(perfumeDetails.getSillage());
            perfume.setLongevity(perfumeDetails.getLongevity());
            perfume.setRating(perfumeDetails.getRating());
            return perfumeRepository.save(perfume);
        }
        return null;
    }

    public Perfume partiallyUpdatePerfume(Long id, Perfume perfumeDetails) {
        Optional<Perfume> optionalPerfume = perfumeRepository.findById(id);
        if(optionalPerfume.isPresent()) {
            Perfume perfume = optionalPerfume.get();
            if(perfumeDetails.getName() != null) {
                perfume.setName(perfumeDetails.getName());
            }
            if(perfumeDetails.getBrand() != null) {
                perfume.setBrand(perfumeDetails.getBrand());
            }
            if(perfumeDetails.getSeason() != null) {
                perfume.setSeason(perfumeDetails.getSeason());
            }
            if(perfumeDetails.getSillage() != null) {
                perfume.setSillage(perfumeDetails.getSillage());
            }
            if(perfumeDetails.getLongevity() != null) {
                perfume.setLongevity(perfumeDetails.getLongevity());
            }
            if(perfumeDetails.getRating() != null) {
                perfume.setRating(perfumeDetails.getRating());
            }
            return perfumeRepository.save(perfume);
        }
        return null;
    }
}
