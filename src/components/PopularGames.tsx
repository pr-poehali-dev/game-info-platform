
import React from 'react';
import GameCard from './GameCard';

interface Game {
  id: number;
  title: string;
  imageUrl: string;
  platforms: string[];
  genres: string[];
  rating: number;
  releaseYear: number;
}

const popularGames: Game[] = [
  {
    id: 1,
    title: "Grand Theft Auto V",
    imageUrl: "https://images.unsplash.com/photo-1593305841991-05c297ba4575?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80",
    platforms: ["PC", "PlayStation", "Xbox"],
    genres: ["Экшен", "Открытый мир"],
    rating: 9.5,
    releaseYear: 2013
  },
  {
    id: 2,
    title: "The Witcher 3: Wild Hunt",
    imageUrl: "https://images.unsplash.com/photo-1534423861386-85a16f5d13fd?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80",
    platforms: ["PC", "PlayStation", "Xbox", "Switch"],
    genres: ["RPG", "Открытый мир"],
    rating: 9.7,
    releaseYear: 2015
  },
  {
    id: 3,
    title: "Red Dead Redemption 2",
    imageUrl: "https://images.unsplash.com/photo-1536440136628-849c177e76a1?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80",
    platforms: ["PC", "PlayStation", "Xbox"],
    genres: ["Экшен", "Вестерн"],
    rating: 9.8,
    releaseYear: 2018
  },
  {
    id: 4,
    title: "God of War",
    imageUrl: "https://images.unsplash.com/photo-1605899435973-ca2d1a8431cf?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80",
    platforms: ["PlayStation", "PC"],
    genres: ["Экшен", "Приключения"],
    rating: 9.6,
    releaseYear: 2018
  },
  {
    id: 5,
    title: "Elden Ring",
    imageUrl: "https://images.unsplash.com/photo-1513127971914-6a8656fc9718?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80",
    platforms: ["PC", "PlayStation", "Xbox"],
    genres: ["RPG", "Соулслайк"],
    rating: 9.4,
    releaseYear: 2022
  },
  {
    id: 6,
    title: "The Legend of Zelda: Breath of the Wild",
    imageUrl: "https://images.unsplash.com/photo-1560419015-7c427e8ae5ba?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80",
    platforms: ["Switch"],
    genres: ["Приключения", "Открытый мир"],
    rating: 9.7,
    releaseYear: 2017
  },
  {
    id: 7,
    title: "Cyberpunk 2077",
    imageUrl: "https://images.unsplash.com/photo-1519669556878-63bdad8a1a49?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80",
    platforms: ["PC", "PlayStation", "Xbox"],
    genres: ["RPG", "Киберпанк"],
    rating: 8.5,
    releaseYear: 2020
  },
  {
    id: 8,
    title: "Horizon Zero Dawn",
    imageUrl: "https://images.unsplash.com/photo-1493711662062-fa541adb3fc8?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80",
    platforms: ["PlayStation", "PC"],
    genres: ["Экшен", "Открытый мир"],
    rating: 9.2,
    releaseYear: 2017
  }
];

const PopularGames: React.FC = () => {
  return (
    <section className="py-12">
      <div className="container mx-auto px-4">
        <h2 className="text-2xl md:text-3xl font-bold mb-8">Популярные игры</h2>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {popularGames.map(game => (
            <GameCard
              key={game.id}
              id={game.id}
              title={game.title}
              imageUrl={game.imageUrl}
              platforms={game.platforms}
              genres={game.genres}
              rating={game.rating}
              releaseYear={game.releaseYear}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default PopularGames;
