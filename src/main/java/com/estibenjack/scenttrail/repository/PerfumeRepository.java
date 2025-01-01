package com.estibenjack.scenttrail.repository;

import com.estibenjack.scenttrail.entity.Perfume;
import com.estibenjack.scenttrail.enums.PerfumeAttributes;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface PerfumeRepository extends JpaRepository<Perfume, Long> {
    List<Perfume> findByBrand(String brand);

    List<Perfume> findBySeason(PerfumeAttributes.SeasonEnum season);

    List<Perfume> findBySillage(PerfumeAttributes.SillageEnum sillage);

    List<Perfume> findByLongevity(PerfumeAttributes.LongevityEnum longevity);

    List<Perfume> findByRating(PerfumeAttributes.RatingEnum rating);
    // add customer queries here if needed in future
    // PerfumeRepository extending JpaRepository means it has access to
    // built in methods like save(), findAll(), findById() etc.
}
