
import React from 'react';
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from '@/components/ui/carousel';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import Icon from '@/components/ui/icon';

interface FeaturedGame {
  id: number;
  title: string;
  imageUrl: string;
  description: string;
  genres: string[];
  rating: number;
  platforms: string[];
  releaseDate: string;
}

const featuredGames: FeaturedGame[] = [
  {
    id: 1,
    title: "Cyberpunk 2077",
    imageUrl: "https://images.unsplash.com/photo-1593305841991-05c297ba4575?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1280&q=80",
    description: "Cyberpunk 2077 — компьютерная игра в жанре action/RPG в открытом мире, разработанная и изданная польской студией CD Projekt.",
    genres: ["RPG", "Шутер", "Открытый мир"],
    rating: 9.1,
    platforms: ["PC", "PlayStation", "Xbox"],
    releaseDate: "10 декабря 2020"
  },
  {
    id: 2,
    title: "The Legend of Zelda: Tears of the Kingdom",
    imageUrl: "https://images.unsplash.com/photo-1628505048571-597db9238345?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1280&q=80",
    description: "Отправьтесь в эпическое приключение по землям и небесам Хайрула в продолжении игры The Legend of Zelda: Breath of the Wild.",
    genres: ["Приключение", "Открытый мир"],
    rating: 9.6,
    platforms: ["Nintendo Switch"],
    releaseDate: "12 мая 2023"
  },
  {
    id: 3,
    title: "Baldur's Gate 3",
    imageUrl: "https://images.unsplash.com/photo-1569701813229-33284b643e3c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1280&q=80",
    description: "Соберите отряд и вернитесь в Забытые Королевства в истории о дружбе, предательстве, жертве и выживании.",
    genres: ["RPG", "Пошаговая стратегия"],
    rating: 9.7,
    platforms: ["PC", "PlayStation 5", "Xbox Series X"],
    releaseDate: "3 августа 2023"
  }
];

const FeaturedGames: React.FC = () => {
  return (
    <div className="w-full overflow-hidden">
      <Carousel className="w-full">
        <CarouselContent>
          {featuredGames.map((game) => (
            <CarouselItem key={game.id}>
              <div className="relative w-full h-[500px] md:h-[600px] overflow-hidden rounded-xl">
                <div 
                  className="absolute inset-0 bg-cover bg-center"
                  style={{ backgroundImage: `url(${game.imageUrl})` }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background via-background/40 to-transparent" />
                
                <div className="absolute bottom-0 left-0 right-0 p-6 md:p-10 animate-slideUp">
                  <div className="flex flex-wrap gap-2 mb-3">
                    {game.genres.map((genre, index) => (
                      <Badge key={index} className="bg-primary/80 hover:bg-primary">
                        {genre}
                      </Badge>
                    ))}
                  </div>
                  
                  <h2 className="text-3xl md:text-5xl font-bold mb-3 text-white drop-shadow-md">
                    {game.title}
                  </h2>
                  
                  <p className="text-white/80 mb-4 max-w-2xl text-base md:text-lg">
                    {game.description}
                  </p>
                  
                  <div className="flex flex-wrap gap-6 mb-6 text-white/90">
                    <div className="flex items-center gap-2">
                      <Icon name="Calendar" className="w-5 h-5" />
                      <span>{game.releaseDate}</span>
                    </div>
                    
                    <div className="flex items-center gap-2">
                      <Icon name="Star" className="w-5 h-5 text-yellow-400" />
                      <span className="font-semibold">{game.rating.toFixed(1)}</span>
                    </div>
                    
                    <div className="flex items-center gap-2">
                      <Icon name="Monitor" className="w-5 h-5" />
                      <span>{game.platforms.join(', ')}</span>
                    </div>
                  </div>
                  
                  <div className="flex gap-4">
                    <Button size="lg" className="font-medium">
                      Подробнее
                      <Icon name="ArrowRight" className="ml-2 w-4 h-4" />
                    </Button>
                    <Button size="lg" variant="outline" className="border-white/20 text-white hover:bg-white/10 hover:text-white">
                      <Icon name="ListPlus" className="mr-2 w-4 h-4" />
                      В список
                    </Button>
                  </div>
                </div>
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
        <div className="absolute bottom-3 right-3">
          <CarouselPrevious className="relative -right-14 -translate-y-0" />
          <CarouselNext className="relative -translate-y-0" />
        </div>
      </Carousel>
    </div>
  );
};

export default FeaturedGames;
