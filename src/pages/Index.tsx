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
    <div className="min-h-screen bg-black font-roboto text-digital-white overflow-hidden">
      {/* Background Elements */}
      <div className="fixed inset-0 z-0">
        <div className="absolute top-20 left-10 w-32 h-32 bg-digital-orange rounded-full opacity-20 floating-shape"></div>
        <div
          className="absolute top-40 right-20 w-24 h-24 bg-digital-blue rounded-lg opacity-30 floating-shape"
          style={{ animationDelay: "2s" }}
        ></div>
        <div
          className="absolute bottom-40 left-1/4 w-16 h-16 bg-digital-orange rounded-full opacity-25 floating-shape"
          style={{ animationDelay: "4s" }}
        ></div>
      </div>

      {/* Hero Section */}
      <section className="relative z-10 digital-gradient min-h-screen flex items-center py-20 px-4">
        <div className="max-w-7xl mx-auto text-center">
          <div className="inline-flex items-center bg-black/20 backdrop-blur-sm text-digital-white px-6 py-3 rounded-full text-sm font-medium mb-8 neon-glow">
            <Icon name="Zap" size={16} className="mr-2 text-digital-orange" />
            Старт новой группы через 3 дня
          </div>

          <h1 className="font-exo text-6xl md:text-8xl font-extrabold mb-8 leading-tight">
            Стань{" "}
            <span className="neon-text text-digital-orange">SMM-экспертом</span>
            <br />
            за 8 недель
          </h1>

          <p className="font-roboto text-xl md:text-2xl mb-12 text-digital-white/90 max-w-4xl mx-auto font-light">
            Практический курс по продвижению в социальных сетях. От стратегии до
            первых продаж
          </p>

          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
            <button className="bg-digital-orange hover:bg-digital-orange/90 text-black px-10 py-5 rounded-xl text-lg font-semibold transition-all transform hover:scale-105 flex items-center neon-glow font-exo">
              <Icon name="Play" size={24} className="mr-3" />
              Начать обучение
            </button>

            <div className="text-digital-white/80">
              <div className="flex items-center justify-center mb-2">
                <Icon name="Users" size={18} className="mr-2" />
                <span className="font-roboto">2,847 выпускников</span>
              </div>
              <div className="flex items-center justify-center">
                {[...Array(5)].map((_, i) => (
                  <Icon
                    key={i}
                    name="Star"
                    size={18}
                    className="text-digital-orange fill-current"
                  />
                ))}
                <span className="ml-2 font-roboto">4.9 из 5</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Course Program */}
      <section className="relative z-10 py-24 px-4 bg-gradient-to-b from-black to-gray-900">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-20">
            <h2 className="font-exo text-5xl font-bold text-digital-white mb-6 neon-text">
              Программа курса
            </h2>
            <p className="font-roboto text-xl text-digital-white/70">
              4 модуля • 32 урока • 8 недель практики
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {modules.map((module, index) => (
              <div
                key={index}
                className="bg-gradient-to-br from-gray-800/50 to-gray-900/50 backdrop-blur-sm p-8 rounded-2xl border border-digital-blue/30 hover:border-digital-orange/50 transition-all duration-300 pulse-glow"
              >
                <div className="flex items-center mb-6">
                  <div className="w-16 h-16 digital-gradient rounded-xl flex items-center justify-center text-digital-white font-bold text-xl font-exo neon-glow">
                    {index + 1}
                  </div>
                  <h3 className="font-exo text-2xl font-bold text-digital-white ml-6">
                    {module.title}
                  </h3>
                </div>
                <ul className="space-y-4">
                  {module.lessons.map((lesson, lessonIndex) => (
                    <li
                      key={lessonIndex}
                      className="flex items-center text-digital-white/80 font-roboto"
                    >
                      <Icon
                        name="CheckCircle"
                        size={18}
                        className="text-digital-orange mr-4 flex-shrink-0"
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
      <section className="relative z-10 py-24 px-4 bg-gradient-to-b from-gray-900 to-black">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-20">
            <h2 className="font-exo text-5xl font-bold text-digital-white mb-6 neon-text">
              Отзывы студентов
            </h2>
            <p className="font-roboto text-xl text-digital-white/70">
              Реальные результаты наших выпускников
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div
                key={index}
                className="bg-gradient-to-br from-gray-800/40 to-gray-900/40 backdrop-blur-sm p-8 rounded-2xl border border-digital-blue/20 hover:border-digital-orange/40 transition-all duration-300"
              >
                <div className="flex items-center mb-6">
                  <img
                    src={testimonial.avatar}
                    alt={testimonial.name}
                    className="w-16 h-16 rounded-full object-cover border-2 border-digital-orange/50"
                  />
                  <div className="ml-4">
                    <h4 className="font-exo font-bold text-digital-white text-lg">
                      {testimonial.name}
                    </h4>
                    <p className="text-digital-white/60 text-sm font-roboto">
                      {testimonial.role}
                    </p>
                  </div>
                </div>
                <p className="text-digital-white/80 italic font-roboto leading-relaxed">
                  "{testimonial.text}"
                </p>
                <div className="flex mt-6">
                  {[...Array(5)].map((_, i) => (
                    <Icon
                      key={i}
                      name="Star"
                      size={16}
                      className="text-digital-orange fill-current"
                    />
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing */}
      <section className="relative z-10 py-24 px-4 digital-gradient">
        <div className="max-w-6xl mx-auto text-center">
          <div className="bg-black/30 backdrop-blur-sm text-digital-white px-8 py-4 rounded-full text-lg font-bold mb-12 inline-block neon-glow font-exo">
            🔥 Скидка 50% до конца недели
          </div>

          <h2 className="font-exo text-5xl font-bold text-digital-white mb-12 neon-text">
            Выберите свой тариф
          </h2>

          <div className="grid md:grid-cols-2 gap-8">
            {/* Basic Plan */}
            <div className="bg-gradient-to-br from-gray-800/60 to-gray-900/60 backdrop-blur-sm p-10 rounded-2xl border border-digital-blue/30">
              <h3 className="font-exo text-3xl font-bold text-digital-white mb-6">
                Базовый
              </h3>
              <div className="mb-8">
                <div className="text-digital-white/50 line-through text-xl font-roboto">
                  ₽39,900
                </div>
                <div className="text-5xl font-bold text-digital-blue font-exo">
                  ₽19,900
                </div>
                <div className="text-digital-white/70 font-roboto">
                  Доступ к курсу на 6 месяцев
                </div>
              </div>
              <ul className="text-left space-y-4 mb-10">
                {[
                  "32 видеоурока",
                  "Домашние задания",
                  "Чат с кураторами",
                  "Сертификат о прохождении",
                ].map((feature, i) => (
                  <li
                    key={i}
                    className="flex items-center font-roboto text-digital-white/80"
                  >
                    <Icon
                      name="Check"
                      size={18}
                      className="text-digital-orange mr-3"
                    />
                    {feature}
                  </li>
                ))}
              </ul>
              <button className="w-full bg-digital-blue/80 hover:bg-digital-blue text-digital-white py-4 rounded-xl font-semibold transition-all transform hover:scale-105 font-exo text-lg">
                Выбрать тариф
              </button>
            </div>

            {/* Premium Plan */}
            <div className="bg-gradient-to-br from-gray-800/60 to-gray-900/60 backdrop-blur-sm p-10 rounded-2xl border-4 border-digital-orange/50 relative neon-glow">
              <div className="absolute -top-5 left-1/2 transform -translate-x-1/2 bg-digital-orange text-black px-6 py-3 rounded-full text-sm font-bold font-exo">
                Популярный
              </div>
              <h3 className="font-exo text-3xl font-bold text-digital-white mb-6">
                Премиум
              </h3>
              <div className="mb-8">
                <div className="text-digital-white/50 line-through text-xl font-roboto">
                  ₽69,900
                </div>
                <div className="text-5xl font-bold text-digital-orange font-exo neon-text">
                  ₽34,900
                </div>
                <div className="text-digital-white/70 font-roboto">
                  Доступ к курсу навсегда
                </div>
              </div>
              <ul className="text-left space-y-4 mb-10">
                {[
                  "Все из базового тарифа",
                  "Индивидуальные консультации",
                  "Помощь в трудоустройстве",
                  "Доступ к закрытому комьюнити",
                ].map((feature, i) => (
                  <li
                    key={i}
                    className="flex items-center font-roboto text-digital-white/80"
                  >
                    <Icon
                      name="Check"
                      size={18}
                      className="text-digital-orange mr-3"
                    />
                    {feature}
                  </li>
                ))}
              </ul>
              <button className="w-full bg-digital-orange hover:bg-digital-orange/90 text-black py-4 rounded-xl font-semibold transition-all transform hover:scale-105 neon-glow font-exo text-lg">
                Выбрать тариф
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="relative z-10 bg-black py-16 px-4 border-t border-digital-blue/20">
        <div className="max-w-6xl mx-auto text-center">
          <h3 className="font-exo text-3xl font-bold mb-6 text-digital-white">
            Остались вопросы?
          </h3>
          <p className="text-digital-white/60 mb-8 font-roboto text-lg">
            Напишите нам в Telegram и получите консультацию
          </p>
          <a
            href="https://t.me/smm_course_support"
            className="inline-flex items-center bg-digital-blue hover:bg-digital-blue/90 text-digital-white px-10 py-5 rounded-xl font-semibold transition-all transform hover:scale-105 pulse-glow font-exo text-lg"
          >
            <Icon name="MessageCircle" size={24} className="mr-3" />
            Написать в Telegram
          </a>
          <div className="mt-12 pt-8 border-t border-digital-blue/20 text-digital-white/40 text-sm font-roboto">
            <p>© 2024 SMM Академия. Все права защищены.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
