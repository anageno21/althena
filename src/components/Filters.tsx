"use client";

import React, { useState, useMemo } from 'react';
import Link from 'next/link';
import { FaSearch } from 'react-icons/fa';

// Тип для блога
interface Blog {
  image: string;
  title: string;
  date: string;
  category: string;
  serviceCategories: string;
  author: string;
  slug: string;
}

// Тип для props компонента Filters
interface FiltersProps {
  blogs: Blog[];
}

// Функция для усечения текста
const truncateText = (text: string, maxLength: number) => {
  if (text.length <= maxLength) return text;
  return text.substring(0, maxLength) + '...';
};

const Filters: React.FC<FiltersProps> = ({ blogs }) => {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('');
  const [selectedDate, setSelectedDate] = useState('');
  const [selectedAuthor, setSelectedAuthor] = useState('');

  // Извлечение уникальных категорий, дат и авторов из данных блогов
  const categories = useMemo(() => [...new Set(blogs.map(blog => blog.category))], [blogs]);
  const dates = useMemo(() => [...new Set(blogs.map(blog => blog.date))], [blogs]);
  const authors = useMemo(() => [...new Set(blogs.map(blog => blog.author))], [blogs]);

  // Фильтрация по всем критериям
  const filteredBlogs = useMemo(() => {
    let filtered = blogs;

    if (searchQuery) {
      const query = searchQuery.trim().toLowerCase();
      filtered = filtered.filter((blog: Blog) =>
        blog.title.toLowerCase().includes(query)
      );
    }

    if (selectedCategory) {
      filtered = filtered.filter((blog: Blog) => blog.category === selectedCategory);
    }

    if (selectedDate) {
      filtered = filtered.filter((blog: Blog) => blog.date === selectedDate);
    }

    if (selectedAuthor) {
      filtered = filtered.filter((blog: Blog) => blog.author === selectedAuthor);
    }

    console.log('Filtered Blogs:', filtered); // Лог для отладки
    return filtered;
  }, [searchQuery, selectedCategory, selectedDate, selectedAuthor, blogs]);

  // Разделение блогов на колонки (3 колонки для lg, 2 для sm, 1 для mobile)
  const columns = useMemo(() => {
    const col1: Blog[] = [];
    const col2: Blog[] = [];
    const col3: Blog[] = [];

    filteredBlogs.forEach((blog, index) => {
      if (index % 3 === 0) col1.push(blog);
      else if (index % 3 === 1) col2.push(blog);
      else col3.push(blog);
    });

    console.log('Columns:', { col1, col2, col3 }); // Лог для отладки
    return [col1, col2, col3];
  }, [filteredBlogs]);

  return (
    <div className="w-full bg-[rgba(217,210,204,0.5)] p-4 z-10 flex justify-center min-h-[150px] mb-0">
      <div className="w-full max-w-[1280px]">
        {/* Фильтры поиска */}
        <div className="flex flex-col sm:flex-row gap-4 mb-2">
          {/* Поле поиска */}
          <div className="flex-1 min-w-0 relative">
            <input
              type="text"
              placeholder="Поиск блогов..."
              className="w-full h-[36px] p-2 pl-10 text-sm border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-[#edbfab]"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
            <FaSearch className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
          </div>

          {/* Фильтр по категории */}
          <div className="flex-1 min-w-0">
            <select
              className="w-full h-[36px] p-2 text-sm border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-[#edbfab]"
              value={selectedCategory}
              onChange={(e) => setSelectedCategory(e.target.value)}
            >
              <option value="">Все категории</option>
              {categories.map((category, index) => (
                <option key={index} value={category}>
                  {category}
                </option>
              ))}
            </select>
          </div>

          {/* Фильтр по дате */}
          <div className="flex-1 min-w-0">
            <select
              className="w-full h-[36px] p-2 text-sm border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-[#edbfab]"
              value={selectedDate}
              onChange={(e) => setSelectedDate(e.target.value)}
            >
              <option value="">Все даты</option>
              {dates.map((date, index) => (
                <option key={index} value={date}>
                  {date}
                </option>
              ))}
            </select>
          </div>

          {/* Фильтр по автору */}
          <div className="flex-1 min-w-0">
            <select
              className="w-full h-[36px] p-2 text-sm border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-[#edbfab]"
              value={selectedAuthor}
              onChange={(e) => setSelectedAuthor(e.target.value)}
            >
              <option value="">Все авторы</option>
              {authors.map((author, index) => (
                <option key={index} value={author}>
                  {truncateText(author, 25)}
                </option>
              ))}
            </select>
          </div>
        </div>

        {/* Результаты поиска */}
        <div className="flex flex-col sm:flex-row gap-2">
          {columns.map((column, colIndex) => (
            <div key={colIndex} className="flex-1 flex flex-col gap-2">
              {column.map((blog) => (
                <Link href={blog.slug} key={blog.id} className="block">
                  <div className="bg-white rounded-lg transition-shadow relative hover:bg-gray-50 min-h-[200px] overflow-hidden">
                    {/* Изображение */}
                    <img
                      src={blog.image}
                      alt={blog.title}
                      className="w-full h-1/2 object-cover"
                    />
                    {/* Контент с padding только снизу и по бокам */}
                    <div className="p-4 pt-0">
                      <h3 className="text-xl font-bold mb-2">{blog.title}</h3>
                      <p className="text-xs text-gray-500 mb-1 leading-tight">
                        Категория: {blog.category}
                      </p>
                      <p className="text-xs text-gray-500 mb-1 leading-tight">
                        Услуги: {blog.serviceCategories}
                      </p>
                      <p className="text-xs text-gray-500 mb-1 leading-tight">
                        Автор: {blog.author}
                      </p>
                      <p className="text-xs text-gray-500 mb-1 leading-tight">
                        Дата: {blog.date}
                      </p>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          ))}
        </div>
        {filteredBlogs.length === 0 && (
          <p className="text-center text-gray-500 font-playfair mt-4">
            Блоги, соответствующие вашим критериям, не найдены.
          </p>
        )}
      </div>
    </div>
  );
};

export default Filters;