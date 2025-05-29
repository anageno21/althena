export interface Expert {
  id: number;
  name: string;
  title: string;
  category: string;
  image: string;
  alt: string;
  profileLink: string;
  availability: { [date: string]: string[] }; // Διαθέσιμες ώρες ανά ημερομηνία (π.χ., "2025-05-28": ["09:00", "10:00"])
}

export const expertsData: Expert[] = [
  {
    id: 1,
    name: "Виктория Котенко",
    title: "Психолог-консультант",
    category: "Сертифицированный психотерапевт, эксперт по управлению стрессом и эмоциональной устойчивости",
    image: "/images/councillors/VK/Viktoriia Kotenko.jpg",
    alt: "Виктория Котенко",
    profileLink: "/experts/viktoriia-kotenko",
    availability: {
      "2025-05-28": ["09:00", "10:00", "11:00", "14:00", "15:00"],
      "2025-05-29": ["10:00", "12:00", "14:00", "16:00"],
      "2025-05-30": ["09:30", "11:30", "13:30"],
    },
  },
  {
    id: 2,
    name: "Тамара Кушина",
    title: "Интегративный психолог",
    category: "Гипнолог, RPT-терапевт",
    image: "/images/councillors/Tamara Kushina/Tamara Kushina1.jpg",
    alt: "Тамара Кушина",
    profileLink: "/experts/tamara-kushina",
    availability: {
      "2025-05-28": ["10:00", "11:00", "13:00", "16:00"],
      "2025-05-29": ["09:00", "11:00", "14:00"],
      "2025-05-30": ["10:30", "12:30", "15:30"],
    },
  },
  {
    id: 3,
    name: "Наталия Ахтырко",
    title: "Психолог, сексолог",
    category: "Педагог, интегративный подход",
    image: "/images/councillors/natalia-ahtyrko/natalia-ahtyrko.jpg",
    alt: "Наталия Ахтырко",
    profileLink: "/experts/natalia-ahtyrko",
    availability: {
      "2025-05-28": ["09:30", "12:00", "14:30", "17:00"],
      "2025-05-29": ["10:00", "12:00", "15:00"],
      "2025-05-30": ["11:00", "13:00", "16:00"],
    },
  },
];