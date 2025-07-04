"use client";

import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import Link from 'next/link';
import Image from 'next/image';
import * as z from 'zod';

const newsletterSchema = z.object({
  email: z.string().email('Пожалуйста, введите действительный email'),
});

type NewsletterFormData = z.infer<typeof newsletterSchema>;

const Footer: React.FC = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<NewsletterFormData>({
    resolver: zodResolver(newsletterSchema),
    defaultValues: {
      email: '',
    },
  });

  const onSubmit = (data: NewsletterFormData) => {
    console.log('Newsletter subscription:', data);
    reset();
  };

  return (
    <footer className="bg-[#f2f1f0] text-[#143B64] py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="flex flex-col items-center md:items-start">
            <Link href="/" className="flex-shrink-0 mb-4">
              <Image
                src="/images/logo/Logorgb.png"
                alt="Althéna"
                width={240}
                height={51.2}
                className="h-[25.6px] xs:h-8 sm:h-[38.4px] md:h-[44.8px] lg:h-[51.2px] max-w-[120px] xs:max-w-[160px] sm:max-w-[200px] lg:max-w-[240px] object-contain aspect-auto"
                style={{ objectFit: 'contain' }}
              />
            </Link>
            <p className="text-sm font-playfair text-center md:text-left">
              Поддержка вашего ментального здоровья с профессиональными психологами.
            </p>
          </div>

          <div className="flex flex-col items-center md:items-start">
            <h3 className="text-lg font-playfair font-semibold mb-4">Полезные ссылки</h3>
            <ul className="space-y-2 text-sm font-playfair">
              <li>
                <a href="/about" className="hover:text-[#edbfab] transition-colors duration-300">
                  О нас
                </a>
              </li>
              <li>
                <a href="/services" className="hover:text-[#edbfab] transition-colors duration-300">
                  Услуги
                </a>
              </li>
              <li>
                <a href="/contact" className="hover:text-[#edbfab] transition-colors duration-300">
                  Контакты
                </a>
              </li>
            </ul>
          </div>

          <div className="flex flex-col items-center md:items-start">
            <h3 className="text-lg font-playfair font-semibold mb-4">Политики</h3>
            <ul className="space-y-2 text-sm font-playfair">
              <li>
                <a href="/faq" className="hover:text-[#edbfab] transition-colors duration-300">
                  Часто задаваемые вопросы
                </a>
              </li>
              <li>
                <a href="/blog" className="hover:text-[#edbfab] transition-colors duration-300">
                  Блог / Статьи
                </a>
              </li>
              <li>
                <a href="/terms" className="hover:text-[#edbfab] transition-colors duration-300">
                  Условия использования
                </a>
              </li>
              <li>
                <a href="/privacy" className="hover:text-[#edbfab] transition-colors duration-300">
                  Политика конфиденциальности
                </a>
              </li>
              <li>
                <a href="/cookies" className="hover:text-[#edbfab] transition-colors duration-300">
                  Политика использования cookies
                </a>
              </li>
              <li>
                <a href="/gdpr" className="hover:text-[#edbfab] transition-colors duration-300">
                  GDPR / Согласие
                </a>
              </li>
            </ul>
          </div>

          <div className="flex flex-col items-center md:items-start">
            <h3 className="text-lg font-playfair font-semibold mb-4">Контакты</h3>
            <ul className="space-y-2 text-sm font-playfair mb-4">
              <li>
                Email: <a href="mailto:support@althena.com" className="hover:text-[#edbfab] transition-colors duration-300">support@althena.com</a>
              </li>
              <li>
                Телефон: <a href="tel:+1234567890" className="hover:text-[#edbfab] transition-colors duration-300">+1 234 567 890</a>
              </li>
              <li className="flex space-x-4 mt-4">
                <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="hover:text-[#edbfab] transition-colors duration-300">
                  <svg className="w-6 h-6" fill="#143B64" viewBox="0 0 24 24">
                    <path d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.879v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.892h-2.33v6.987C18.343 21.128 22 16.991 22 12z" />
                  </svg>
                </a>
                <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="hover:text-[#edbfab] transition-colors duration-300">
                  <svg className="w-6 h-6" fill="#143B64" viewBox="0 0 24 24">
                    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 11-2.88 0 1.44 1.44 0 012.88 0z" />
                  </svg>
                </a>
              </li>
            </ul>
            <div className="mt-4 w-full">
              <h3 className="text-lg font-playfair font-semibold mb-4">Подписка на рассылку</h3>
              <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-2">
                <input
                  type="email"
                  {...register('email')}
                  placeholder="Введите ваш email"
                  className="w-full p-2 rounded-[8px] text-[#143B64] text-sm focus:outline-none focus:ring-2 focus:ring-[#edbfab] bg-[#ffffff]"
                />
                {errors.email && (
                  <p className="text-red-500 text-xs mt-1">{errors.email.message}</p>
                )}
                <button
                  type="submit"
                  className="px-4 py-2 bg-[#8EB5BA] text-white rounded-[20px] font-playfair text-sm transition-colors duration-300 hover:bg-[#edbfab] hover:text-[#143B64]"
                >
                  Подписаться
                </button>
              </form>
            </div>
          </div>
        </div>

        <div className="mt-8 border-t border-[#143B64]/20 pt-4 text-center">
          <p className="text-sm font-playfair">
            © 2025 Althéna. Все права защищены.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
