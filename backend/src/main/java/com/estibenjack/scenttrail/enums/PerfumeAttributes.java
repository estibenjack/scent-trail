package com.estibenjack.scenttrail.enums;

import com.fasterxml.jackson.annotation.JsonCreator;
import com.fasterxml.jackson.annotation.JsonValue;

public class PerfumeAttributes {

    public enum SeasonEnum {
        WINTER,
        SPRING,
        SUMMER,
        AUTUMN;

        @JsonCreator
        public static SeasonEnum fromString(String value) {
            return SeasonEnum.valueOf(value.toUpperCase());
        }

        @JsonValue
        public String toValue() {
            return this.name();
        }
    }

    public enum SillageEnum {
        INTIMATE,
        MODERATE,
        STRONG,
        ENORMOUS;

        @JsonCreator
        public static SillageEnum fromString(String value) {
            return SillageEnum.valueOf(value.toUpperCase());
        }

        @JsonValue
        public String toValue() {
            return this.name();
        }
    }

    public enum LongevityEnum {
        WEAK,
        MODERATE,
        LONG_LASTING,
        ETERNAL;

        @JsonCreator
        public static LongevityEnum fromString(String value) {
            return LongevityEnum.valueOf(value.toUpperCase());
        }

        @JsonValue
        public String toValue() {
            return this.name();
        }
    }

    public enum RatingEnum {
        ONE(1),
        TWO(2),
        THREE(3),
        FOUR(4),
        FIVE(5);

        private final int value;

        RatingEnum(int value) {
            this.value=value;
        }

        public int getValue() {
            return value;
        }

        @JsonCreator
        public static RatingEnum fromString(String value) {
            try {
                return RatingEnum.valueOf(value.toUpperCase());
            } catch (IllegalArgumentException e) {
                return RatingEnum.values()[Integer.parseInt(value) - 1];
            }
        }

        @JsonValue
        public String toValue() {
            return String.valueOf(this.value);
        }
    }

}