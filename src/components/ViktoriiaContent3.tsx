"use client";

import React, { useRef, useState } from 'react';
import BookingForm from './BookingForm';
import { expertsData } from '@/data/expertsData';

const ViktoriiaContent3: React.FC = () => {
  const viktoriia = expertsData.find((expert) => expert.name === "Виктория Котенко") || {
    id: 1,
    name: "Виктория Котенко",
    availability: {
      "2025-05-28": ["09:00", "10:00", "11:00", "14:00", "15:00"],
      "2025-05-29": ["10:00", "12:00", "14:00", "16:00"],
      "2025-05-30": ["09:30", "11:30", "13:30"],
    },
  };

  const videoRef = useRef<HTMLIFrameElement>(null);
  const modalVideoRef = useRef<HTMLIFrameElement>(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [isMuted, setIsMuted] = useState(false);
  const [volume, setVolume] = useState(1);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const togglePlay = () => {
    setIsPlaying(!isPlaying);
  };

  const toggleMute = () => {
    setIsMuted(!isMuted);
  };

  const handleVolumeChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newVolume = parseFloat(e.target.value);
    setVolume(newVolume);
    setIsMuted(newVolume === 0);
  };

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  return (
    <div className="max-w-full mx-auto pt-0 pb-8 mt-0">
      <div className="grid grid-cols-[40%_20%_40%] gap-2">
        {/* Πλαίσιο 1 (40%) - Στρογγύλεμα μόνο δεξιά */}
        <div className="bg-[rgba(142,181,186,0.4)] p-4 rounded-r-lg rounded-l-0">
          <p className="text-gray-600 text-sm pt-[15px] pr-[15px] pb-[15px] pl-[85px]">
            <strong className="text-xl">Почему мне можно доверять?</strong>
            <br /><br />
            У меня высшее психологическое образование и глубокая теоретическая база — за последние годы я прошла более 10 профессиональных обучений, в том числе по гештальт-подходу, КПТ, работе с психотравмой, тревожными и депрессивными состояниями, психосоматике, консультированию пар.
            <br /><br />
            До психологии я работала финансовым аналитиком и бухгалтером. Это научило меня видеть структуру там, где кажется — только хаос. Сейчас этот навык помогает мне работать с ментальными процессами: видеть неочевидное, выстраивать причинно-следственные связи, находить точки опоры.
            <br /><br />
            В терапии я не «учитель» и не «судья». Я — проводник, партнёр, внимательный собеседник. Иногда — зеркало. Иногда — поддержка. Но всегда — искренне заинтересованный человек рядом.
            <br /><br />
            Каждая история для меня уникальна. И если вы сейчас в поиске — возможно, именно с этой точки начинается ваш путь к себе.
          </p>
        </div>
        {/* Πλαίσιο 2 (20%) - Βίντεο, στρογγύλεμα σε όλες τις γωνίες */}
        <div className="bg-gray-100 p-0 rounded-lg relative overflow-hidden">
          <iframe
            ref={videoRef}
            src="https://drive.google.com/file/d/1X7iWWNG1plTqXqOgviaYD_RNwoHsEOrV/preview"
            title="VK Intro Video"
            frameBorder="0"
            allow="autoplay; fullscreen"
            allowFullScreen
            className="w-full h-full object-cover"
          ></iframe>
          <div className="absolute bottom-0 left-0 right-0 flex items-center justify-between px-4 py-2 bg-black bg-opacity-50">
            <button
              onClick={togglePlay}
              className="text-white hover:text-gray-300 focus:outline-none"
            >
              {isPlaying ? (
                <svg className="w-6 h-6" fill="#ffffff" viewBox="0 0 24 24">
                  <path d="M6 19h4V5H6v14zm8-14v14h4V5h-4z" />
                </svg>
              ) : (
                <svg className="w-6 h-6" fill="#ffffff" viewBox="0 0 24 24">
                  <path d="M8 5v14l11-7z" />
                </svg>
              )}
            </button>
            <div className="flex items-center space-x-2">
              <button
                onClick={toggleMute}
                className="text-white hover:text-gray-300 focus:outline-none"
              >
                {isMuted || volume === 0 ? (
                  <svg className="w-6 h-6" fill="#ffffff" viewBox="0 0 24 24">
                    <path d="M16.5 12c0-1.77-1.02-3.29-2.5-4.03v8.05c1.48-.73 2.5-2.25 2.5-4.02zM5 9v6h4l5 5V4L9 9H5z" />
                  </svg>
                ) : (
                  <svg className="w-6 h-6" fill="#ffffff" viewBox="0 0 24 24">
                    <path d="M3 9v6h4l5 5V4L7 9H3zm13.5 3c0-1.77-1.02-3.29-2.5-4.03v8.05c1.48-.73 2.5-2.25 2.5-4.02zM14 3.23v2.06c2.89.86 5 3.54 5 6.71s-2.11 5.85-5 6.71v2.06c4.01-.91 7-4.49 7-8.77s-2.99-7.86-7-8.77z" />
                  </svg>
                )}
              </button>
              <input
                type="range"
                min="0"
                max="1"
                step="0.01"
                value={volume}
                onChange={handleVolumeChange}
                className="w-16 h-1 bg-gray-300 rounded-lg appearance-none cursor-pointer [&::-webkit-slider-thumb]:bg-white [&::-webkit-slider-thumb]:w-4 [&::-webkit-slider-thumb]:h-4 [&::-webkit-slider-thumb]:rounded-full [&::-webkit-slider-thumb]:appearance-none [&::-moz-range-thumb]:bg-white [&::-moz-range-thumb]:w-4 [&::-moz-range-thumb]:h-4 [&::-moz-range-thumb]:rounded-full [&::-moz-range-thumb]:border-none"
                style={{ accentColor: '#ffffff' }}
              />
              <button
                onClick={openModal}
                className="text-white hover:text-gray-300 focus:outline-none"
              >
                <svg className="w-6 h-6" fill="#ffffff" viewBox="0 0 24 24">
                  <path d="M7 14H5v5h5v-2H7v-3zm-2-4h2V7h3V5H5v5zm12 7h-3v2h5v-5h-2v3zM14 5v2h3v3h2V5h-5z" />
                </svg>
              </button>
            </div>
          </div>
        </div>
        {/* Πλαίσιο 3 (40%) - Booking Form, στρογγύλεμα μόνο αριστερά */}
        <div className="bg-[rgba(237,191,171,0.3)] p-4 rounded-l-lg rounded-r-0">
          <BookingForm
            expertName={viktoriia.name}
            availability={viktoriia.availability}
            backgroundColor="transparent"
            expertId={viktoriia.id}
          />
        </div>
      </div>

      {/* Modal for the video */}
      {isModalOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-80 flex items-center justify-center z-50">
          <div className="relative w-[90%] max-w-[560px] aspect-[9/16] bg-black rounded-lg overflow-hidden">
            <iframe
              ref={modalVideoRef}
              src="https://drive.google.com/file/d/1X7iWWNG1plTqXqOgviaYD_RNwoHsEOrV/preview"
              title="VK Intro Video"
              frameBorder="0"
              allow="autoplay; fullscreen"
              allowFullScreen
              className="w-full h-full object-contain"
            ></iframe>
            <button
              onClick={closeModal}
              className="absolute top-2 right-2 text-white hover:text-gray-300 focus:outline-none"
            >
              <svg className="w-8 h-8" fill="#ffffff" viewBox="0 0 24 24">
                <path d="M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z" />
              </svg>
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default ViktoriiaContent3;