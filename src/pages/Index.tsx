import React from 'react';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import Icon from '@/components/ui/icon';

const Index = () => {
  return (
    <div className="min-h-screen bg-moscow-light font-sf-text">
      {/* Background Image with Overlay */}
      <div 
        className="fixed inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.4)), url('img/e906ce42-8092-48ad-9f42-212a88a005ed.jpg')`
        }}
      />
      
      {/* Header */}
      <header className="relative z-10 p-4 md:p-6">
        <div className="flex items-center">
          <div className="flex items-center space-x-3">
            <div className="w-12 h-12 bg-telegram rounded-lg flex items-center justify-center">
              <Icon name="Building2" className="text-white" size={24} />
            </div>
            <div>
              <h1 className="text-white font-sf-pro font-semibold text-xl">Москвичи</h1>
              <p className="text-gray-300 text-sm">Сеть столичных медиа</p>
            </div>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="relative z-10 container mx-auto px-4 py-8 space-y-16">
        
        {/* Hero Section */}
        <section className="text-center space-y-8 py-12 md:py-20">
          <div className="animate-fade-in">
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-sf-pro font-bold text-white mb-4">
              Москвичи
            </h1>
            <h2 className="text-xl md:text-2xl text-gray-200 mb-6">
              Новости Москвы
            </h2>
            <p className="text-lg md:text-xl text-gray-300 max-w-2xl mx-auto mb-8">
              Сеть столичных медиа «Москвичи»
            </p>
            <Button 
              size="lg" 
              className="bg-telegram hover:bg-telegram-dark text-white px-8 py-4 text-lg font-semibold rounded-xl transition-all duration-300 hover:scale-105"
              onClick={() => window.open('https://t.me/Mos_Never_sleep', '_blank')}
            >
              <Icon name="Send" className="mr-2" size={20} />
              Подписаться в Telegram
            </Button>
          </div>
        </section>

        {/* About Section */}
        <section className="animate-slide-up">
          <Card className="bg-white/95 backdrop-blur-sm p-8 md:p-12 rounded-2xl shadow-2xl">
            <h2 className="text-3xl md:text-4xl font-sf-pro font-bold text-moscow-gray mb-8 text-center">
              Кто мы?
            </h2>
            <div className="space-y-6 text-moscow-gray">
              <p className="text-lg md:text-xl leading-relaxed">
                Мы — крупнейшая сеть районных Telegram-каналов Москвы.
              </p>
              <p className="text-lg leading-relaxed">
                Проект «Москвичи» объединяет все районы столицы в едином информационном пространстве:
              </p>
              <ul className="space-y-4 ml-4">
                <li className="flex items-start space-x-3">
                  <Icon name="MapPin" className="text-telegram mt-1 flex-shrink-0" size={20} />
                  <span className="text-base md:text-lg">
                    <strong>Канал каждого района Москвы</strong> — быть в курсе всех новостей своего района, присылать свои инфоповоды и фотографии
                  </span>
                </li>
                <li className="flex items-start space-x-3">
                  <Icon name="ShoppingBag" className="text-telegram mt-1 flex-shrink-0" size={20} />
                  <span className="text-base md:text-lg">
                    <strong>Канал Барахолки</strong> — купить, продать, обменять
                  </span>
                </li>
                <li className="flex items-start space-x-3">
                  <Icon name="Search" className="text-telegram mt-1 flex-shrink-0" size={20} />
                  <span className="text-base md:text-lg">
                    <strong>Каналы Бюро находок</strong> — если потеряли кошелёк, документы или убежала собака
                  </span>
                </li>
                <li className="flex items-start space-x-3">
                  <Icon name="MessageCircle" className="text-telegram mt-1 flex-shrink-0" size={20} />
                  <span className="text-base md:text-lg">
                    <strong>Окружные чаты</strong> — обсудить наболевшие вопросы благоустройства, парковок, безопасности и других тем, которые волнуют каждый микрорайон
                  </span>
                </li>
              </ul>
              <div className="pt-6 text-center">
                <Button 
                  variant="outline" 
                  size="lg"
                  className="border-telegram text-telegram hover:bg-telegram hover:text-white px-6 py-3 text-lg font-medium rounded-xl transition-all duration-300"
                  onClick={() => window.open('https://t.me/Moscvich_bot', '_blank')}
                >
                  <Icon name="Bot" className="mr-2" size={20} />
                  Найти медиа своего района: @Moscvich_bot
                </Button>
              </div>
            </div>
          </Card>
        </section>

        {/* Contacts Section */}
        <section className="animate-slide-up">
          <Card className="bg-white/95 backdrop-blur-sm p-8 md:p-12 rounded-2xl shadow-2xl">
            <h2 className="text-3xl md:text-4xl font-sf-pro font-bold text-moscow-gray mb-8 text-center">
              Контакты
            </h2>
            <div className="grid gap-6 md:gap-8">
              <div className="flex items-center space-x-4 p-4 rounded-xl bg-moscow-light/50">
                <div className="w-12 h-12 bg-telegram rounded-lg flex items-center justify-center flex-shrink-0">
                  <Icon name="Search" className="text-white" size={20} />
                </div>
                <div className="flex-1">
                  <p className="font-semibold text-moscow-gray">Найти канал своего района:</p>
                  <button 
                    onClick={() => window.open('https://t.me/Moscvich_bot', '_blank')}
                    className="text-telegram hover:text-telegram-dark font-medium transition-colors"
                  >
                    @Moscvich_bot
                  </button>
                </div>
              </div>
              
              <div className="flex items-center space-x-4 p-4 rounded-xl bg-moscow-light/50">
                <div className="w-12 h-12 bg-telegram rounded-lg flex items-center justify-center flex-shrink-0">
                  <Icon name="User" className="text-white" size={20} />
                </div>
                <div className="flex-1">
                  <p className="font-semibold text-moscow-gray">Админ:</p>
                  <button 
                    onClick={() => window.open('https://t.me/AdmChat_bot', '_blank')}
                    className="text-telegram hover:text-telegram-dark font-medium transition-colors"
                  >
                    @AdmChat_bot
                  </button>
                </div>
              </div>
              
              <div className="flex items-center space-x-4 p-4 rounded-xl bg-moscow-light/50">
                <div className="w-12 h-12 bg-telegram rounded-lg flex items-center justify-center flex-shrink-0">
                  <Icon name="Megaphone" className="text-white" size={20} />
                </div>
                <div className="flex-1">
                  <p className="font-semibold text-moscow-gray">Реклама:</p>
                  <button 
                    onClick={() => window.open('https://t.me/teleg_reklama_bot', '_blank')}
                    className="text-telegram hover:text-telegram-dark font-medium transition-colors"
                  >
                    @teleg_reklama_bot
                  </button>
                </div>
              </div>
            </div>
          </Card>
        </section>
      </main>

      {/* Footer */}
      <footer className="relative z-10 text-center py-8 text-gray-400">
        <p className="text-sm">
          © 2024 Москвичи — Сеть столичных медиа
        </p>
      </footer>
    </div>
  );
};

export default Index;