
import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import Icon from '@/components/ui/icon';

interface StatItem {
  icon: string;
  title: string;
  value: string | number;
  color: string;
}

const stats: StatItem[] = [
  {
    icon: 'Gamepad',
    title: 'Игр в базе',
    value: '10,842',
    color: 'bg-blue-500'
  },
  {
    icon: 'Buildings',
    title: 'Разработчиков',
    value: '1,254',
    color: 'bg-purple-500'
  },
  {
    icon: 'Store',
    title: 'Издателей',
    value: '726',
    color: 'bg-pink-500'
  },
  {
    icon: 'Layers',
    title: 'Жанров',
    value: '52',
    color: 'bg-amber-500'
  }
];

const StatisticsSection: React.FC = () => {
  return (
    <section className="py-12">
      <div className="container mx-auto px-4">
        <h2 className="text-2xl md:text-3xl font-bold mb-8 text-center">Статистика платформы</h2>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {stats.map((stat, index) => (
            <Card key={index} className="border shadow-sm hover:shadow-md transition-shadow">
              <CardContent className="p-6">
                <div className="flex items-center space-x-4">
                  <div className={`p-3 rounded-full ${stat.color}`}>
                    <Icon name={stat.icon} className="h-6 w-6 text-white" />
                  </div>
                  <div>
                    <p className="text-sm font-medium text-muted-foreground">{stat.title}</p>
                    <h3 className="text-2xl font-bold">{stat.value}</h3>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default StatisticsSection;
