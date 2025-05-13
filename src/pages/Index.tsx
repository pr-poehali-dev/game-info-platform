
import React from 'react';
import Navbar from '@/components/Navbar';
import FeaturedGames from '@/components/FeaturedGames';
import StatisticsSection from '@/components/StatisticsSection';
import PopularGames from '@/components/PopularGames';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';
import Icon from '@/components/ui/icon';

const Index = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <main className="flex-grow mt-16">
        {/* Герой-секция */}
        <section className="py-8">
          <div className="container mx-auto px-4">
            <FeaturedGames />
          </div>
        </section>
        
        {/* Статистика */}
        <StatisticsSection />
        
        {/* Популярные игры */}
        <PopularGames />
        
        {/* Информация о проекте */}
        <section className="py-16 bg-purple-dark/5">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-2xl md:text-4xl font-bold mb-6">Информационная система для игровой индустрии</h2>
                <p className="text-muted-foreground mb-6">
                  GameInfoHub — это платформа, которая собирает и структурирует данные об играх, разработчиках и издателях. 
                  Мы предоставляем удобный интерфейс для ввода, поиска и анализа информации об играх.
                </p>
                
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
                  <div className="flex items-start">
                    <div className="bg-purple/10 p-2 rounded-full mr-3">
                      <Icon name="Search" className="h-5 w-5 text-purple" />
                    </div>
                    <div>
                      <h3 className="font-semibold mb-1">Быстрый поиск</h3>
                      <p className="text-sm text-muted-foreground">
                        Находите нужную информацию в несколько кликов
                      </p>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <div className="bg-purple/10 p-2 rounded-full mr-3">
                      <Icon name="BarChart" className="h-5 w-5 text-purple" />
                    </div>
                    <div>
                      <h3 className="font-semibold mb-1">Статистика</h3>
                      <p className="text-sm text-muted-foreground">
                        Актуальная аналитика по играм и платформам
                      </p>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <div className="bg-purple/10 p-2 rounded-full mr-3">
                      <Icon name="Code" className="h-5 w-5 text-purple" />
                    </div>
                    <div>
                      <h3 className="font-semibold mb-1">API интеграция</h3>
                      <p className="text-sm text-muted-foreground">
                        Подключайтесь к нашим данным через API
                      </p>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <div className="bg-purple/10 p-2 rounded-full mr-3">
                      <Icon name="UsersRound" className="h-5 w-5 text-purple" />
                    </div>
                    <div>
                      <h3 className="font-semibold mb-1">Сообщество</h3>
                      <p className="text-sm text-muted-foreground">
                        Активное сообщество игроков и разработчиков
                      </p>
                    </div>
                  </div>
                </div>
                
                <Button size="lg">
                  Узнать больше
                  <Icon name="ArrowRight" className="ml-2 h-4 w-4" />
                </Button>
              </div>
              
              <div className="relative">
                <div className="absolute -z-10 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[300px] h-[300px] md:w-[400px] md:h-[400px] bg-purple/20 rounded-full blur-[80px]" />
                <img 
                  src="https://images.unsplash.com/photo-1542751371-adc38448a05e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80" 
                  alt="Игровая индустрия" 
                  className="rounded-xl shadow-lg w-full max-w-md mx-auto"
                />
              </div>
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
};

export default Index;
