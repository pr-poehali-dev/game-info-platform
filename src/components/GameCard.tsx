
import React from 'react';
import { Link } from 'react-router-dom';
import { Badge } from '@/components/ui/badge';
import { Card } from '@/components/ui/card';
import Icon from '@/components/ui/icon';

interface GameCardProps {
  id: number;
  title: string;
  imageUrl: string;
  platforms: string[];
  genres: string[];
  rating: number;
  releaseYear: number;
}

const GameCard: React.FC<GameCardProps> = ({
  id,
  title,
  imageUrl,
  platforms,
  genres,
  rating,
  releaseYear,
}) => {
  const getPlatformIcon = (platform: string) => {
    switch (platform.toLowerCase()) {
      case 'pc':
        return 'Monitor';
      case 'playstation':
      case 'ps4':
      case 'ps5':
        return 'Gamepad2';
      case 'xbox':
        return 'Gamepad';
      case 'nintendo':
      case 'switch':
        return 'Tablet';
      case 'mobile':
        return 'Smartphone';
      default:
        return 'Disc';
    }
  };

  return (
    <Link to={`/game/${id}`}>
      <Card className="game-card h-full overflow-hidden border-0 bg-transparent">
        <div 
          className="w-full h-60 bg-cover bg-center"
          style={{ backgroundImage: `url(${imageUrl})` }}
        />
        
        <div className="game-card-overlay">
          <div className="flex items-center gap-2 mb-2">
            {platforms.slice(0, 3).map((platform, index) => (
              <div key={index} className="text-white">
                <Icon name={getPlatformIcon(platform)} className="w-4 h-4" />
              </div>
            ))}
            {platforms.length > 3 && (
              <div className="text-white text-xs">+{platforms.length - 3}</div>
            )}
            
            <div className="ml-auto flex items-center text-white">
              <Icon name="Star" className="w-4 h-4 text-yellow-400 mr-1" />
              <span className="font-medium">{rating.toFixed(1)}</span>
            </div>
          </div>
          
          <h3 className="text-white font-semibold text-lg line-clamp-2">{title}</h3>
          
          <div className="flex flex-wrap gap-1 mt-2">
            {genres.slice(0, 2).map((genre, index) => (
              <Badge 
                key={index} 
                variant="secondary" 
                className="bg-purple-dark/70 hover:bg-purple-dark text-white"
              >
                {genre}
              </Badge>
            ))}
            <Badge className="bg-transparent border border-white/30 text-white/80">
              {releaseYear}
            </Badge>
          </div>
        </div>
      </Card>
    </Link>
  );
};

export default GameCard;
