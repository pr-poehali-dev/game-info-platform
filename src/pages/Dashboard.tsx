
import React from 'react';
import { Link } from 'react-router-dom';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import Icon from '@/components/ui/icon';

const Dashboard: React.FC = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <main className="flex-grow mt-16 py-12">
        <div className="container mx-auto px-4">
          <h1 className="text-3xl md:text-4xl font-bold mb-8">Панель управления</h1>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {/* Ввод и редактирование данных */}
            <Card className="hover:shadow-md transition-shadow">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Icon name="Edit3" className="h-5 w-5 text-primary" />
                  Ввод и редактирование
                </CardTitle>
                <CardDescription>
                  Добавление и изменение информации об играх, разработчиках и издателях
                </CardDescription>
              </CardHeader>
              <CardContent>
                <p className="mb-6 text-muted-foreground">
                  Интерфейс для управления данными с синхронизацией между таблицами и проверкой целостности.
                </p>
                <Link to="/data-entry">
                  <Button className="w-full">
                    Перейти
                    <Icon name="ArrowRight" className="ml-2 h-4 w-4" />
                  </Button>
                </Link>
              </CardContent>
            </Card>
            
            {/* Поиск данных */}
            <Card className="hover:shadow-md transition-shadow">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Icon name="Search" className="h-5 w-5 text-primary" />
                  Поиск данных
                </CardTitle>
                <CardDescription>
                  Поиск по одной или нескольким таблицам с динамической фильтрацией
                </CardDescription>
              </CardHeader>
              <CardContent>
                <p className="mb-6 text-muted-foreground">
                  Расширенный поиск с использованием динамически обновляемых фильтров и связанных выпадающих списков.
                </p>
                <Link to="/search">
                  <Button className="w-full">
                    Перейти
                    <Icon name="ArrowRight" className="ml-2 h-4 w-4" />
                  </Button>
                </Link>
              </CardContent>
            </Card>
            
            {/* Агрегированные данные */}
            <Card className="hover:shadow-md transition-shadow">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Icon name="BarChart" className="h-5 w-5 text-primary" />
                  Агрегированные данные
                </CardTitle>
                <CardDescription>
                  Статистика и количественные показатели базы данных
                </CardDescription>
              </CardHeader>
              <CardContent>
                <p className="mb-6 text-muted-foreground">
                  Сводная информация о содержимом базы данных в виде таблиц и наглядных графиков.
                </p>
                <Link to="/statistics">
                  <Button className="w-full">
                    Перейти
                    <Icon name="ArrowRight" className="ml-2 h-4 w-4" />
                  </Button>
                </Link>
              </CardContent>
            </Card>
            
            {/* Сведения о БД */}
            <Card className="hover:shadow-md transition-shadow">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Icon name="Database" className="h-5 w-5 text-primary" />
                  Сведения о БД
                </CardTitle>
                <CardDescription>
                  Информация о структуре и состоянии базы данных
                </CardDescription>
              </CardHeader>
              <CardContent>
                <p className="mb-6 text-muted-foreground">
                  Детальная информация о таблицах, связях и целостности данных в системе.
                </p>
                <Link to="/database-info">
                  <Button className="w-full">
                    Перейти
                    <Icon name="ArrowRight" className="ml-2 h-4 w-4" />
                  </Button>
                </Link>
              </CardContent>
            </Card>
            
            {/* API Интеграция */}
            <Card className="hover:shadow-md transition-shadow">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Icon name="Code" className="h-5 w-5 text-primary" />
                  API Интеграция
                </CardTitle>
                <CardDescription>
                  Управление интеграцией с внешними API
                </CardDescription>
              </CardHeader>
              <CardContent>
                <p className="mb-6 text-muted-foreground">
                  Настройка и мониторинг автоматического получения данных через API (Steam, Epic Games и др.).
                </p>
                <Link to="/api-integration">
                  <Button className="w-full">
                    Перейти
                    <Icon name="ArrowRight" className="ml-2 h-4 w-4" />
                  </Button>
                </Link>
              </CardContent>
            </Card>
            
            {/* Экспорт данных */}
            <Card className="hover:shadow-md transition-shadow">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Icon name="Download" className="h-5 w-5 text-primary" />
                  Экспорт данных
                </CardTitle>
                <CardDescription>
                  Выгрузка и конвертирование данных
                </CardDescription>
              </CardHeader>
              <CardContent>
                <p className="mb-6 text-muted-foreground">
                  Инструменты для экспорта и конвертации данных в различные форматы (CSV, JSON, XML).
                </p>
                <Link to="/export">
                  <Button className="w-full">
                    Перейти
                    <Icon name="ArrowRight" className="ml-2 h-4 w-4" />
                  </Button>
                </Link>
              </CardContent>
            </Card>
          </div>
          
          <div className="mt-8 text-center">
            <Link to="/">
              <Button variant="outline" className="mr-4">
                <Icon name="Home" className="mr-2 h-4 w-4" />
                На главную
              </Button>
            </Link>
            <Button variant="destructive">
              <Icon name="LogOut" className="mr-2 h-4 w-4" />
              Выход из приложения
            </Button>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default Dashboard;
