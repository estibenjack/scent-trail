package com.estibenjack.scenttrail.entity;

import com.estibenjack.scenttrail.enums.PerfumeAttributes;
import com.fasterxml.jackson.annotation.JsonCreator;
import com.fasterxml.jackson.annotation.JsonPropertyOrder;
import jakarta.persistence.*;

@Entity
@Table(name = "perfumes")
@JsonPropertyOrder({"id", "name", "brand", "season", "sillage", "longevity", "rating"})
public class Perfume {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column(nullable = false)
    // @NotBlank
    private String name;

    @Column(nullable = false)
    // @NotBlank(message= "Brand is mandatory")
    private String brand;

    @Enumerated(EnumType.STRING)
    private PerfumeAttributes.SeasonEnum season;

    @Enumerated(EnumType.STRING)
    private PerfumeAttributes.SillageEnum sillage;

    @Enumerated(EnumType.STRING)
    private PerfumeAttributes.LongevityEnum longevity;

    @Enumerated(EnumType.STRING)
    private PerfumeAttributes.RatingEnum rating;

    // constructors
    public Perfume(){
        //default constructor
    }

    @JsonCreator
    public Perfume(
                   String name,
                   String brand,
                   PerfumeAttributes.SeasonEnum season,
                   PerfumeAttributes.SillageEnum sillage,
                   PerfumeAttributes.LongevityEnum longevity,
                   PerfumeAttributes.RatingEnum rating) {
        this.name = name;
        this.brand = brand;
        this.season = season;
        this.sillage = sillage;
        this.longevity = longevity;
        this.rating = rating;
    }

    public Perfume(Long id, String name, String brand) {
        this.id = id;
        this.name = name;
        this.brand = brand;
    }

    // getters & setters
    public Long getId() {
        return id;
    }

    public void setID(Long id) {
        this.id=id;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name=name;
    }

    public String getBrand() {
        return brand;
    }

    public void setBrand(String brand) {
        this.brand=brand;
    }

    public PerfumeAttributes.SeasonEnum getSeason() {
        return season;
    }

    public void setSeason(PerfumeAttributes.SeasonEnum season) {
        this.season=season;
    }

    public PerfumeAttributes.SillageEnum getSillage() {
        return sillage;
    }

    public void setSillage(PerfumeAttributes.SillageEnum sillage) {
        this.sillage=sillage;
    }

    public PerfumeAttributes.LongevityEnum getLongevity() {
        return longevity;
    }

    public void setLongevity(PerfumeAttributes.LongevityEnum longevity) {
        this.longevity=longevity;
    }

    public PerfumeAttributes.RatingEnum getRating() {
        return rating;
    }

    public void setRating(PerfumeAttributes.RatingEnum rating) {
        this.rating=rating;
    }
}