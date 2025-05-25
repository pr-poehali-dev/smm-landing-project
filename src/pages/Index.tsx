import React from "react";
import Icon from "@/components/ui/icon";

const Index = () => {
  const modules = [
    {
      title: "Основы SMM",
      lessons: [
        "Стратегия продвижения",
        "Анализ конкурентов",
        "Целевая аудитория",
      ],
    },
    {
      title: "Контент-маркетинг",
      lessons: ["Создание контента", "Визуал и дизайн", "Сторителлинг"],
    },
    {
      title: "Реклама в соцсетях",
      lessons: ["Facebook & Instagram Ads", "Таргетинг", "Аналитика ROI"],
    },
    {
      title: "Продвинутые техники",
      lessons: ["Автоматизация", "Влияние и репутация", "Кейсы и результаты"],
    },
  ];

  const testimonials = [
    {
      name: "Анна Соколова",
      role: "SMM-менеджер",
      text: "За 2 месяца увеличила продажи клиента на 300%. Курс дал четкую систему работы!",
      avatar:
        "https://images.unsplash.com/photo-1494790108755-2616b612b786?w=64&h=64&fit=crop&crop=face",
    },
    {
      name: "Дмитрий Волков",
      role: "Предприниматель",
      text: "Запустил собственный бренд в Instagram с нуля. Сейчас 50к подписчиков и стабильная прибыль.",
      avatar:
        "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=64&h=64&fit=crop&crop=face",
    },
    {
      name: "Елена Краснова",
      role: "Фрилансер",
      text: "Ушла с работы и зарабатываю в 2 раза больше. Курс окупился за первый месяц!",
      avatar:
        "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=64&h=64&fit=crop&crop=face",
    },
  ];

  return (
    <div className="min-h-screen bg-white font-sans">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-600 via-blue-700 to-blue-800 text-white py-20 px-4">
        <div className="max-w-6xl mx-auto text-center">
          <div className="inline-flex items-center bg-orange-500 text-white px-4 py-2 rounded-full text-sm font-medium mb-6">
            <Icon name="Zap" size={16} className="mr-2" />
            Старт новой группы через 3 дня
          </div>
          <h1 className="text-5xl md:text-6xl font-bold mb-6 leading-tight">
            Стань <span className="text-orange-400">SMM-экспертом</span>
            <br />
            за 8 недель
          </h1>
          <p className="text-xl md:text-2xl mb-8 text-blue-100 max-w-3xl mx-auto">
            Практический курс по продвижению в социальных сетях. От стратегии до
            первых продаж
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <button className="bg-orange-500 hover:bg-orange-600 text-white px-8 py-4 rounded-lg text-lg font-semibold transition-all transform hover:scale-105 flex items-center">
              <Icon name="Play" size={20} className="mr-2" />
              Начать обучение
            </button>
            <div className="text-blue-200">
              <div className="flex items-center justify-center mb-1">
                <Icon name="Users" size={16} className="mr-1" />
                <span className="text-sm">2,847 выпускников</span>
              </div>
              <div className="flex items-center justify-center">
                {[...Array(5)].map((_, i) => (
                  <Icon
                    key={i}
                    name="Star"
                    size={16}
                    className="text-yellow-400 fill-current"
                  />
                ))}
                <span className="ml-2 text-sm">4.9 из 5</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Course Program */}
      <section className="py-20 px-4 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Программа курса
            </h2>
            <p className="text-xl text-gray-600">
              4 модуля • 32 урока • 8 недель практики
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {modules.map((module, index) => (
              <div
                key={index}
                className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow"
              >
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 bg-gradient-to-r from-orange-500 to-orange-600 rounded-lg flex items-center justify-center text-white font-bold text-lg">
                    {index + 1}
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 ml-4">
                    {module.title}
                  </h3>
                </div>
                <ul className="space-y-3">
                  {module.lessons.map((lesson, lessonIndex) => (
                    <li
                      key={lessonIndex}
                      className="flex items-center text-gray-700"
                    >
                      <Icon
                        name="CheckCircle"
                        size={16}
                        className="text-blue-600 mr-3 flex-shrink-0"
                      />
                      {lesson}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Отзывы студентов
            </h2>
            <p className="text-xl text-gray-600">
              Реальные результаты наших выпускников
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="bg-white p-8 rounded-xl shadow-lg">
                <div className="flex items-center mb-6">
                  <img
                    src={testimonial.avatar}
                    alt={testimonial.name}
                    className="w-16 h-16 rounded-full object-cover"
                  />
                  <div className="ml-4">
                    <h4 className="font-bold text-gray-900">
                      {testimonial.name}
                    </h4>
                    <p className="text-gray-600 text-sm">{testimonial.role}</p>
                  </div>
                </div>
                <p className="text-gray-700 italic">"{testimonial.text}"</p>
                <div className="flex mt-4">
                  {[...Array(5)].map((_, i) => (
                    <Icon
                      key={i}
                      name="Star"
                      size={16}
                      className="text-yellow-400 fill-current"
                    />
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing */}
      <section className="py-20 px-4 bg-gradient-to-br from-blue-600 to-blue-800">
        <div className="max-w-4xl mx-auto text-center">
          <div className="bg-orange-500 text-white px-6 py-3 rounded-full text-lg font-bold mb-8 inline-block">
            🔥 Скидка 50% до конца недели
          </div>
          <h2 className="text-4xl font-bold text-white mb-8">
            Выберите свой тариф
          </h2>

          <div className="grid md:grid-cols-2 gap-8">
            {/* Basic Plan */}
            <div className="bg-white p-8 rounded-xl">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Базовый</h3>
              <div className="mb-6">
                <div className="text-gray-500 line-through text-lg">
                  ₽39,900
                </div>
                <div className="text-4xl font-bold text-blue-600">₽19,900</div>
                <div className="text-gray-600">Доступ к курсу на 6 месяцев</div>
              </div>
              <ul className="text-left space-y-3 mb-8">
                <li className="flex items-center">
                  <Icon
                    name="Check"
                    size={16}
                    className="text-green-500 mr-2"
                  />
                  32 видеоурока
                </li>
                <li className="flex items-center">
                  <Icon
                    name="Check"
                    size={16}
                    className="text-green-500 mr-2"
                  />
                  Домашние задания
                </li>
                <li className="flex items-center">
                  <Icon
                    name="Check"
                    size={16}
                    className="text-green-500 mr-2"
                  />
                  Чат с кураторами
                </li>
                <li className="flex items-center">
                  <Icon
                    name="Check"
                    size={16}
                    className="text-green-500 mr-2"
                  />
                  Сертификат о прохождении
                </li>
              </ul>
              <button className="w-full bg-blue-600 text-white py-4 rounded-lg font-semibold hover:bg-blue-700 transition-colors">
                Выбрать тариф
              </button>
            </div>

            {/* Premium Plan */}
            <div className="bg-white p-8 rounded-xl border-4 border-orange-500 relative">
              <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 bg-orange-500 text-white px-4 py-2 rounded-full text-sm font-bold">
                Популярный
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Премиум</h3>
              <div className="mb-6">
                <div className="text-gray-500 line-through text-lg">
                  ₽69,900
                </div>
                <div className="text-4xl font-bold text-orange-500">
                  ₽34,900
                </div>
                <div className="text-gray-600">Доступ к курсу навсегда</div>
              </div>
              <ul className="text-left space-y-3 mb-8">
                <li className="flex items-center">
                  <Icon
                    name="Check"
                    size={16}
                    className="text-green-500 mr-2"
                  />
                  Все из базового тарифа
                </li>
                <li className="flex items-center">
                  <Icon
                    name="Check"
                    size={16}
                    className="text-green-500 mr-2"
                  />
                  Индивидуальные консультации
                </li>
                <li className="flex items-center">
                  <Icon
                    name="Check"
                    size={16}
                    className="text-green-500 mr-2"
                  />
                  Помощь в трудоустройстве
                </li>
                <li className="flex items-center">
                  <Icon
                    name="Check"
                    size={16}
                    className="text-green-500 mr-2"
                  />
                  Доступ к закрытому комьюнити
                </li>
              </ul>
              <button className="w-full bg-orange-500 text-white py-4 rounded-lg font-semibold hover:bg-orange-600 transition-colors">
                Выбрать тариф
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12 px-4">
        <div className="max-w-6xl mx-auto text-center">
          <h3 className="text-2xl font-bold mb-4">Остались вопросы?</h3>
          <p className="text-gray-300 mb-6">
            Напишите нам в Telegram и получите консультацию
          </p>
          <a
            href="https://t.me/smm_course_support"
            className="inline-flex items-center bg-blue-500 hover:bg-blue-600 text-white px-8 py-4 rounded-lg font-semibold transition-colors"
          >
            <Icon name="MessageCircle" size={20} className="mr-2" />
            Написать в Telegram
          </a>
          <div className="mt-8 pt-8 border-t border-gray-800 text-gray-400 text-sm">
            <p>© 2024 SMM Академия. Все права защищены.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
