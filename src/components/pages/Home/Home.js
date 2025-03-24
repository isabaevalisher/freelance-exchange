import React from "react";
import "bootstrap/dist/css/bootstrap.min.css"; // Импорт Bootstrap
import "./Home.css"; // Дополнительные стили

const Home = () => {
  const categories = [
    {
      title: "Разработка сайтов",
      description: "Создание сайтов любой сложности.",
      price: "120 000 тг",
    },
    {
      title: "Копирайтинг",
      description: "Создание текстов, которые продают.",
      price: "60 000 тг",
    },
    {
      title: "Анимации",
      description: "Создание 2D/3D анимации для вашего бизнеса.",
      price: "50 000 тг",
    },
    {
      title: "Маркетплейс",
      description: "Продвижение товаров в маркетплейсах.",
      price: "80 000 тг",
    },
    {
      title: "Аутсорсинг",
      description: "Поддержка IT-инфраструктуры.",
      price: "100 000 тг",
    },
    {
      title: "AI",
      description: "Настройка ИИ для бизнеса.",
      price: "250 000 тг",
    },
  ];

  const reviews = [
    {
      name: "Беназир Саидова",
      text: "Кто еще не работал с данным порталом, регистрируйтесь без сомнений!",
    },
    {
      name: "Малика Османова",
      text: "Удобный портал для фрилансеров, быстро нашла специалиста по SEO.",
    },
    {
      name: "Игорь Белоусов",
      text: "Отличный сайт, быстро нашел копирайтера.",
    },
  ];

  return (
    <div>
      {/* Header */}
      <header className="bg-light text-dark text-center py-5">
        <div className="container">
         
          <h1>TOP Специалисты</h1>
          <p className="lead">
            Биржи фриланса — интернет-платформы для удаленной подработки —
            помогают студентам получить первый источник дохода.
          </p>
        </div>
        
      </header>

      {/* Categories */}
      <section className="py-5">
        <div className="container">
          <h2 className="text-center mb-4">Выберите категорию вашего направления</h2>
          <div className="row g-4">
            {categories.map((category, index) => (
              <div className="col-md-4" key={index}>
                <div className="card h-100 shadow-sm">
                  <div className="card-body">
                    <h5 className="card-title">{category.title}</h5>
                    <p className="card-text">{category.description}</p>
                    <p className="text-primary fw-bold">{category.price}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Reviews */}
      <section className="bg-light py-5">
        <div className="container">
          <h2 className="text-center mb-4">Отзывы</h2>
          <div className="row g-4">
            {reviews.map((review, index) => (
              <div className="col-md-4" key={index}>
                <div className="card shadow-sm h-100">
                  <div className="card-body">
                    <blockquote className="blockquote">
                      <p className="mb-3">{review.text}</p>
                      <footer className="blockquote-footer">{review.name}</footer>
                    </blockquote>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-dark text-white text-center py-4">
        <div className="container">
          <p>Адрес: ул. Примерная, 123</p>
          <p>Телефон: +7 (123) 456-78-90</p>
          <p>Email: example@example.com</p>
        </div>
      </footer>
    </div>
  );
};

export default Home;
