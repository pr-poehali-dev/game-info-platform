
import React from 'react';
import { Link } from 'react-router-dom';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import Icon from '@/components/ui/icon';

// Примерные статистические данные
const databaseStats = {
  totalGames: 10842,
  totalDevelopers: 1254,
  totalPublishers: 726,
  totalPlatforms: 42,
  lastUpdate: "15.05.2023, 12:32"
};

const gamesByGenre = [
  { genre: "Экшен", count: 3256, percentage: 30.0 },
  { genre: "RPG", count: 1856, percentage: 17.1 },
  { genre: "Приключения", count: 1542, percentage: 14.2 },
  { genre: "Шутер", count: 1254, percentage: 11.6 },
  { genre: "Стратегия", count: 986, percentage: 9.1 },
  { genre: "Симулятор", count: 745, percentage: 6.9 },
  { genre: "Спорт", count: 542, percentage: 5.0 },
  { genre: "Головоломка", count: 425, percentage: 3.9 },
  { genre: "Прочие", count: 236, percentage: 2.2 }
];

const gamesByPlatform = [
  { platform: "PC", count: 8456, percentage: 43.2 },
  { platform: "PlayStation 4", count: 3458, percentage: 17.7 },
  { platform: "PlayStation 5", count: 1245, percentage: 6.4 },
  { platform: "Xbox One", count: 2856, percentage: 14.6 },
  { platform: "Xbox Series X/S", count: 1125, percentage: 5.7 },
  { platform: "Nintendo Switch", count: 1856, percentage: 9.5 },
  { platform: "Mobile", count: 584, percentage: 3.0 }
];

const gamesByYear = [
  { year: 2023, count: 356 },
  { year: 2022, count: 1245 },
  { year: 2021, count: 1356 },
  { year: 2020, count: 1124 },
  { year: 2019, count: 1038 },
  { year: 2018, count: 986 },
  { year: 2017, count: 842 },
  { year: 2016, count: 765 }
];

const Statistics: React.FC = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <main className="flex-grow mt-16 py-12">
        <div className="container mx-auto px-4">
          <div className="flex justify-between items-center mb-8">
            <h1 className="text-3xl md:text-4xl font-bold">Агрегированные данные</h1>
            <Link to="/dashboard">
              <Button variant="outline">
                <Icon name="ArrowLeft" className="mr-2 h-4 w-4" />
                Назад к панели
              </Button>
            </Link>
          </div>
          
          {/* Основная статистика */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
            <Card>
              <CardHeader>
                <CardTitle>Общая статистика базы данных</CardTitle>
                <CardDescription>
                  Ключевые показатели наполненности базы данных
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex items-center justify-between py-4 border-b">
                  <div className="flex items-center">
                    <div className="p-2 rounded-full bg-primary/10 mr-3">
                      <Icon name="Gamepad" className="h-5 w-5 text-primary" />
                    </div>
                    <span className="font-medium">Всего игр</span>
                  </div>
                  <span className="text-2xl font-bold">{databaseStats.totalGames.toLocaleString()}</span>
                </div>
                
                <div className="flex items-center justify-between py-4 border-b">
                  <div className="flex items-center">
                    <div className="p-2 rounded-full bg-primary/10 mr-3">
                      <Icon name="Code" className="h-5 w-5 text-primary" />
                    </div>
                    <span className="font-medium">Разработчиков</span>
                  </div>
                  <span className="text-2xl font-bold">{databaseStats.totalDevelopers.toLocaleString()}</span>
                </div>
                
                <div className="flex items-center justify-between py-4 border-b">
                  <div className="flex items-center">
                    <div className="p-2 rounded-full bg-primary/10 mr-3">
                      <Icon name="Building" className="h-5 w-5 text-primary" />
                    </div>
                    <span className="font-medium">Издателей</span>
                  </div>
                  <span className="text-2xl font-bold">{databaseStats.totalPublishers.toLocaleString()}</span>
                </div>
                
                <div className="flex items-center justify-between py-4">
                  <div className="flex items-center">
                    <div className="p-2 rounded-full bg-primary/10 mr-3">
                      <Icon name="Monitor" className="h-5 w-5 text-primary" />
                    </div>
                    <span className="font-medium">Платформ</span>
                  </div>
                  <span className="text-2xl font-bold">{databaseStats.totalPlatforms.toLocaleString()}</span>
                </div>
                
                <div className="mt-4 text-right text-sm text-muted-foreground">
                  Последнее обновление: {databaseStats.lastUpdate}
                </div>
              </CardContent>
            </Card>
            
            <Card>
              <CardHeader>
                <CardTitle>Игры по годам</CardTitle>
                <CardDescription>
                  Количество игр, выпущенных за последние годы
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="h-[280px] flex items-end gap-2">
                  {gamesByYear.map((item) => (
                    <div key={item.year} className="flex-1 flex flex-col items-center">
                      <div 
                        className="w-full bg-primary/80 hover:bg-primary transition-all rounded-t-sm relative group"
                        style={{ 
                          height: `${(item.count / Math.max(...gamesByYear.map(i => i.count))) * 200}px` 
                        }}
                      >
                        <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-full bg-secondary text-secondary-foreground px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity text-xs whitespace-nowrap">
                          {item.count} игр
                        </div>
                      </div>
                      <span className="mt-2 text-xs font-medium">{item.year}</span>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
          
          {/* Таблицы статистики */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <Card>
              <CardHeader>
                <CardTitle>Игры по жанрам</CardTitle>
                <CardDescription>
                  Распределение игр по жанрам
                </CardDescription>
              </CardHeader>
              <CardContent>
                <Table>
                  <TableHeader>
                    <TableRow>
                      <TableHead>Жанр</TableHead>
                      <TableHead className="text-right">Количество</TableHead>
                      <TableHead className="text-right">%</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {gamesByGenre.map((item) => (
                      <TableRow key={item.genre}>
                        <TableCell className="font-medium">{item.genre}</TableCell>
                        <TableCell className="text-right">{item.count.toLocaleString()}</TableCell>
                        <TableCell className="text-right">{item.percentage.toFixed(1)}%</TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </CardContent>
            </Card>
            
            <Card>
              <CardHeader>
                <CardTitle>Игры по платформам</CardTitle>
                <CardDescription>
                  Распределение игр по платформам
                </CardDescription>
              </CardHeader>
              <CardContent>
                <Table>
                  <TableHeader>
                    <TableRow>
                      <TableHead>Платформа</TableHead>
                      <TableHead className="text-right">Количество</TableHead>
                      <TableHead className="text-right">%</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {gamesByPlatform.map((item) => (
                      <TableRow key={item.platform}>
                        <TableCell className="font-medium">{item.platform}</TableCell>
                        <TableCell className="text-right">{item.count.toLocaleString()}</TableCell>
                        <TableCell className="text-right">{item.percentage.toFixed(1)}%</TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </CardContent>
            </Card>
          </div>
          
          {/* Кнопки экспорта */}
          <div className="mt-8 flex justify-end gap-4">
            <Button variant="outline">
              <Icon name="FileJson" className="mr-2 h-4 w-4" />
              Экспорт в JSON
            </Button>
            <Button variant="outline">
              <Icon name="FileSpreadsheet" className="mr-2 h-4 w-4" />
              Экспорт в CSV
            </Button>
            <Button variant="outline">
              <Icon name="Printer" className="mr-2 h-4 w-4" />
              Печать
            </Button>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default Statistics;
