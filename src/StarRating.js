import React from "react";
import { FaStar } from "react-icons/fa";

export default function StarRating({
    totalStars = 5,
    selectedStars = 0,
    warna,
    onRate = f => f
    }) {
    const createArray = length => [...Array(length)]; 
    return (
        <>
            {createArray(totalStars).map((item, index) => (
                <FaStar
                    key={index}
                    color={selectedStars > index ? warna : "grey"}
                    selected={selectedStars > index}
                    size= "15"
                    onClick={() => onRate(index + 1)}
                />
            ))}
            <p className="review">
               {selectedStars} of {totalStars} stars
            </p>
      </>
    );
}