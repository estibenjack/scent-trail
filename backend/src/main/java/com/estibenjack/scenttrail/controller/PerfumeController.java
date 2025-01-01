package com.estibenjack.scenttrail.controller;

import com.estibenjack.scenttrail.entity.Perfume;
import com.estibenjack.scenttrail.enums.PerfumeAttributes;
import com.estibenjack.scenttrail.service.PerfumeService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;

@RestController
@RequestMapping("/api/perfumes")
public class PerfumeController {

    @Autowired
    private PerfumeService perfumeService;

    // get all perfumes
    @GetMapping
    public List<Perfume> getAllPerfumes() {
        return perfumeService.getAllPerfumes();
    }

    // get perfume by id
    @GetMapping("/{id}")
    public Optional<Perfume> getPerfumeById(@PathVariable Long id) {
        return perfumeService.getPerfumeById(id);
    }

    // add a perfume
    @PostMapping
    public Perfume addPerfume(@RequestBody Perfume perfume) {
        return perfumeService.savePerfume(perfume);
    }

    // update a perfume
    @PutMapping("/{id}")
    public Perfume updatePerfume(@PathVariable Long id, @RequestBody Perfume perfumeDetails) {
        return perfumeService.updatePerfume(id, perfumeDetails);
    }

    // partially update a perfume
    @PatchMapping("/{id}")
    public Perfume partiallyUpdatePerfume(@PathVariable Long id, @RequestBody Perfume perfumeDetails) {
        return perfumeService.partiallyUpdatePerfume(id, perfumeDetails);
    }

    // delete a perfume
    @DeleteMapping("/{id}")
    public void deletePerfume(@PathVariable Long id) {
        perfumeService.deletePerfume(id);
    }

    // get perfumes by season
    @GetMapping("/season/{season}")
    public List<Perfume> getPerfumesBySeason(@PathVariable PerfumeAttributes.SeasonEnum season) {
        return perfumeService.getPerfumesBySeason(season);
    }

    // get perfumes by brand
    @GetMapping("/brand/{brand}")
    public List<Perfume> getPerfumesByBrand(@PathVariable String brand) {
        return perfumeService.getPerfumesByBrand(brand);
    }

    // get perfumes by sillage
    @GetMapping("/sillage/{sillage}")
    public List<Perfume> getPerfumesBySillage(@PathVariable PerfumeAttributes.SillageEnum sillage) {
        return perfumeService.getPerfumesBySillage(sillage);
    }

    // get perfumes by longevity
    @GetMapping("/longevity/{longevity}")
    public List<Perfume> getPerfumesByLongevity(@PathVariable PerfumeAttributes.LongevityEnum longevity) {
        return perfumeService.getPerfumesByLongevity(longevity);
    }

    // get perfumes by rating
    @GetMapping("/rating/{rating}")
    public List<Perfume> getPerfumesByRating(@PathVariable PerfumeAttributes.RatingEnum rating) {
        return perfumeService.getPerfumesbByRating(rating);
    }

}
