"use client";

import React from 'react';
import Link from 'next/link';

interface Slide {
  src?: string;
  title?: string;
  text?: string;
  link?: string;
  content?: React.ReactNode;
  alt?: string;
}

interface VKHeroSliderProps {
  slide1?: Slide;
  slide2?: Slide;
}

const VKHeroSlider: React.FC<VKHeroSliderProps> = ({ slide1, slide2 }) => {
  return (
    <div className="relative flex flex-col sm:flex-row gap-[8px] bg-[#f2f1f0]">
      {/* Πλαίσιο 1 (Αριστερό, 35%) */}
      <div className="w-full sm:w-[35%] rounded-tl-[8px] rounded-bl-[8px] rounded-tr-lg rounded-br-lg overflow-hidden min-h-[200px] relative group">
        {slide1?.src ? (
          <>
            <img
              src={slide1.src}
              alt={slide1.alt || "Slide 1"}
              className="w-full h-full object-cover transform scale-[1.7] object-right"
            />
            <div className="absolute top-1/2 -translate-y-1/2 w-full max-w-[520px] mx-auto left-0 right-0 !text-[#143B64] text-center z-[6] px-4 xs:px-6 sm:px-8 flex flex-col items-center justify-center opacity-100">
              {slide1.title && (
                <h2 className="text-[26px] xs:text-[33px] sm:text-[40px] md:text-[46px] lg:text-[48px] leading-none mb-5 whitespace-pre-line max-w-[520px] mx-auto !text-[#143B64] font-playfair">
                  {slide1.title}
                </h2>
              )}
              {slide1.text && (
                <div
                  className="text-base xs:text-base sm:text-lg leading-[1.3] max-w-[520px] mx-auto mb-5 !text-[#143B64]"
                  dangerouslySetInnerHTML={{ __html: slide1.text }}
                />
              )}
              {slide1.link && (
                <Link
                  href={slide1.link}
                  className="inline-block px-6 py-3 bg-[#8EB5BA] !text-white no-underline rounded-[30px] text-base mt-4 transition-colors duration-300 hover:bg-[#edbfab] hover:!text-[#143B64] shadow-md"
                >
                  Узнать больше
                </Link>
              )}
            </div>
          </>
        ) : (
          <div className="w-full h-full bg-gray-200 flex items-center justify-center">
            <p className="text-gray-500">No media provided</p>
          </div>
        )}
      </div>
      {/* Πλαίσιο 2 (Δεξί, 65%) */}
      <div className="w-full sm:w-[65%] rounded-tr-[8px] rounded-br-[8px] rounded-tl-lg rounded-bl-lg h-auto bg-[#f2f1f0] flex flex-col overflow-visible">
        {slide2?.src ? (
          <img
            src={slide2.src}
            alt="Slide 2"
            className="w-full h-full object-cover"
          />
        ) : slide2?.content ? (
          <div className="relative w-full max-w-full !text-[#143B64] text-left z-[6] pl-4 xs:pl-6 sm:pl-8 pr-12 xs:pr-14 sm:pr-16 pt-40 pb-8 flex flex-col items-start justify-start">
            {slide2.content}
          </div>
        ) : (
          <div className="relative w-full max-w-full !text-[#143B64] text-left z-[6] pl-4 xs:pl-6 sm:pl-8 pr-12 xs:pr-14 sm:pr-16 pt-40 pb-8 flex flex-col items-start justify-start">
            {slide2?.title && (
              <h2 className="text-[26px] xs:text-[33px] sm:text-[40px] md:text-[46px] lg:text-[48px] leading-none mb-5 whitespace-pre-line max-w-[800px] !text-[#143B64] font-playfair">
                {slide2.title}
              </h2>
            )}
            {slide2?.text && (
              <div
                className="text-base xs:text-base sm:text-lg leading-[1.3] mb-5 max-w-[800px] !text-[#143B64] w-full"
                dangerouslySetInnerHTML={{ __html: slide2.text }}
              />
            )}
            {slide2?.link && (
              <Link
                href={slide2.link}
                className="inline-block px-6 py-3 bg-[#8EB5BA] !text-white no-underline rounded-[30px] text-base mt-4 transition-colors duration-300 hover:bg-[#edbfab] hover:!text-[#143B64] shadow-md"
              >
                Узнать больше
              </Link>
            )}
          </div>
        )}
      </div>
    </div>
  );
};

export default VKHeroSlider;