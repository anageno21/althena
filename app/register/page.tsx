"use client";

import React, { useEffect, useRef } from 'react';
import ProfileHeader from '@/components/ProfileHeader';
import RegisterHeroSlider from '@/components/RegisterHeroSlider';
import RegistrationForm from '@/components/RegistrationForm';
import Footer from '@/components/Footer'; // Εισαγωγή του Footer

export default function RegisterPage() {
  const headerRef = useRef<HTMLElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const updateHeaderHeight = () => {
      if (headerRef.current && contentRef.current) {
        const headerHeight = headerRef.current.offsetHeight;
        document.documentElement.style.setProperty('--header-height', `${headerHeight}px`);
        contentRef.current.style.paddingTop = `var(--header-height)`;
      }
    };

    const initialTimeout = setTimeout(updateHeaderHeight, 100);
    const resizeObserver = new ResizeObserver(updateHeaderHeight);
    if (headerRef.current) {
      resizeObserver.observe(headerRef.current);
    }
    window.addEventListener('resize', updateHeaderHeight);

    return () => {
      clearTimeout(initialTimeout);
      if (headerRef.current) {
        resizeObserver.unobserve(headerRef.current);
      }
      window.removeEventListener('resize', updateHeaderHeight);
    };
  }, []);

  return (
    <div className="flex flex-col min-h-screen bg-[#f2f1f0]">
      {/* ProfileHeader вверху */}
      <ProfileHeader ref={headerRef} />

      {/* Основное содержимое */}
      <div
        ref={contentRef}
        className="flex flex-col justify-start bg-[#f2f1f0] flex-grow"
      >
        {/* Register Hero Slider - Содержит форму в правой колонке */}
        <section className="w-full mb-10">
          <RegisterHeroSlider
            src="/images/section/registration4.jpg"
            title="Добро пожаловать на регистрацию"
            text="Создай свой аккаунт и начни путешествие сегодня."
          >
            <RegistrationForm />
          </RegisterHeroSlider>
        </section>
      </div>

      {/* Footer */}
      <Footer />
    </div>
  );
}