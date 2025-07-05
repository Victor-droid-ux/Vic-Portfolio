'use client'
import { clientReviews } from '@/Data/data'; // ✅ Check case sensitivity
import React from 'react'
import Carousel from 'react-multi-carousel'
import 'react-multi-carousel/lib/styles.css';
import ReviewCard from './ReviewCard';

const responsive = {
  desktop: { breakpoint: { max: 3000, min: 1324 }, items: 3 },
  tablet: { breakpoint: { max: 1324, min: 764 }, items: 2 },
  mobile: { breakpoint: { max: 764, min: 0 }, items: 1 },
};

const Sliders = () => {
  return (
    <section className="bg-[#0a0a0a] text-white py-10 px-6">
      <h2 className="text-3xl font-bold text-center mb-8">Client Reviews</h2>
      <Carousel
        arrows
        infinite
        autoPlaySpeed={5000}
        responsive={responsive}
      >
        {clientReviews.map((review) => (
          <div key={review.name} className="p-4">
            <ReviewCard review={review} />
          </div>
        ))}
      </Carousel>
    </section>
  );
};

export default Sliders;
