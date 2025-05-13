
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Tabs, TabsList, TabsTrigger, TabsContent } from '@/components/ui/tabs';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Badge } from '@/components/ui/badge';
import { 
  Table, 
  TableBody, 
  TableCell, 
  TableHead, 
  TableHeader, 
  TableRow 
} from '@/components/ui/table';
import Icon from '@/components/ui/icon';

// Примерные данные для демонстрации
const gameData = [
  { id: 1, title: "Cyberpunk 2077", developer: "CD Projekt RED", publisher: "CD Projekt", releaseYear: 2020, genre: "RPG", platform: "PC, PlayStation, Xbox" },
  { id: 2, title: "The Witcher 3", developer: "CD Projekt RED", publisher: "CD Projekt", releaseYear: 2015, genre: "RPG", platform: "PC, PlayStation, Xbox, Switch" },
  { id: 3, title: "Red Dead Redemption 2", developer: "Rockstar Games", publisher: "Rockstar Games", releaseYear: 2018, genre: "Action-Adventure", platform: "PC, PlayStation, Xbox" },
  { id: 4, title: "God of War", developer: "Santa Monica Studio", publisher: "Sony", releaseYear: 2018, genre: "Action-Adventure", platform: "PlayStation, PC" },
  { id: 5, title: "The Legend of Zelda: BOTW", developer: "Nintendo", publisher: "Nintendo", releaseYear: 2017, genre: "Action-Adventure", platform: "Switch" },
];

// Возможные значения для фильтров
const genres = ["RPG", "Action-Adventure", "Shooter", "Strategy", "Simulator", "Sports", "Platform"];
const platforms = ["PC", "PlayStation", "Xbox", "Switch", "Mobile"];
const developers = ["CD Projekt RED", "Rockstar Games", "Santa Monica Studio", "Nintendo", "Ubisoft"];
const publishers = ["CD Projekt", "Rockstar Games", "Sony", "Nintendo", "Ubisoft"];
const years = [2023, 2022, 2021, 2020, 2019, 2018, 2017, 2016, 2015];

const Search: React.FC = () => {
  // Состояние для одиночного поиска
  const [singleFilter, setSingleFilter] = useState({
    type: "",
    value: ""
  });
  
  // Состояние для множественного поиска
  const [multiFilter, setMultiFilter] = useState({
    primary: {
      type: "",
      value: ""
    },
    secondary: {
      type: "",
      value: ""
    }
  });
  
  // Состояние для результатов
  const [results, setResults] = useState<typeof gameData>([]);
  const [hasSearched, setHasSearched] = useState(false);
  
  // Поиск по одной таблице
  const handleSingleSearch = () => {
    if (!singleFilter.type || !singleFilter.value) return;
    
    const filtered = gameData.filter(game => {
      switch(singleFilter.type) {
        case "title":
          return game.title.toLowerCase().includes(singleFilter.value.toLowerCase());
        case "developer":
          return game.developer === singleFilter.value;
        case "publisher":
          return game.publisher === singleFilter.value;
        case "genre":
          return game.genre === singleFilter.value;
        case "platform":
          return game.platform.includes(singleFilter.value);
        case "year":
          return game.releaseYear === parseInt(singleFilter.value);
        default:
          return true;
      }
    });
    
    setResults(filtered);
    setHasSearched(true);
  };
  
  // Поиск по двум таблицам
  const handleMultiSearch = () => {
    if (!multiFilter.primary.type || !multiFilter.primary.value ||
        !multiFilter.secondary.type || !multiFilter.secondary.value) return;
    
    const filtered = gameData.filter(game => {
      let matchesPrimary = false;
      let matchesSecondary = false;
      
      // Проверка первичного фильтра
      switch(multiFilter.primary.type) {
        case "developer":
          matchesPrimary = game.developer === multiFilter.primary.value;
          break;
        case "publisher":
          matchesPrimary = game.publisher === multiFilter.primary.value;
          break;
        case "genre":
          matchesPrimary = game.genre === multiFilter.primary.value;
          break;
        case "platform":
          matchesPrimary = game.platform.includes(multiFilter.primary.value);
          break;
        case "year":
          matchesPrimary = game.releaseYear === parseInt(multiFilter.primary.value);
          break;
        default:
          matchesPrimary = true;
      }
      
      // Проверка вторичного фильтра
      switch(multiFilter.secondary.type) {
        case "developer":
          matchesSecondary = game.developer === multiFilter.secondary.value;
          break;
        case "publisher":
          matchesSecondary = game.publisher === multiFilter.secondary.value;
          break;
        case "genre":
          matchesSecondary = game.genre === multiFilter.secondary.value;
          break;
        case "platform":
          matchesSecondary = game.platform.includes(multiFilter.secondary.value);
          break;
        case "year":
          matchesSecondary = game.releaseYear === parseInt(multiFilter.secondary.value);
          break;
        default:
          matchesSecondary = true;
      }
      
      return matchesPrimary && matchesSecondary;
    });
    
    setResults(filtered);
    setHasSearched(true);
  };
  
  // Получение данных для вторичного фильтра на основе первичного (симуляция зависимых фильтров)
  const getSecondaryOptions = () => {
    if (!multiFilter.primary.type || !multiFilter.primary.value) {
      return [];
    }
    
    // Здесь должна быть логика получения связанных данных на основе первичного фильтра
    // Для демонстрации возвращаем данные по типу вторичного фильтра
    switch(multiFilter.secondary.type) {
      case "developer":
        return developers;
      case "publisher":
        return publishers;
      case "genre":
        return genres;
      case "platform":
        return platforms;
      case "year":
        return years;
      default:
        return [];
    }
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <main className="flex-grow mt-16 py-12">
        <div className="container mx-auto px-4">
          <div className="flex justify-between items-center mb-8">
            <h1 className="text-3xl md:text-4xl font-bold">Поиск данных</h1>
            <Link to="/dashboard">
              <Button variant="outline">
                <Icon name="ArrowLeft" className="mr-2 h-4 w-4" />
                Назад к панели
              </Button>
            </Link>
          </div>
          
          <Tabs defaultValue="single" className="w-full">
            <TabsList className="grid grid-cols-2 mb-8">
              <TabsTrigger value="single">Поиск по одной таблице</TabsTrigger>
              <TabsTrigger value="multiple">Поиск по нескольким таблицам</TabsTrigger>
            </TabsList>
            
            {/* Поиск по одной таблице */}
            <TabsContent value="single">
              <Card className="mb-8">
                <CardHeader>
                  <CardTitle>Поиск по одному критерию</CardTitle>
                  <CardDescription>
                    Выберите тип и значение для поиска игр
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    <div>
                      <Label htmlFor="filter-type">Тип поиска</Label>
                      <Select 
                        value={singleFilter.type}
                        onValueChange={(value) => setSingleFilter({...singleFilter, type: value})}
                      >
                        <SelectTrigger id="filter-type">
                          <SelectValue placeholder="Выберите тип" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="title">Название игры</SelectItem>
                          <SelectItem value="developer">Разработчик</SelectItem>
                          <SelectItem value="publisher">Издатель</SelectItem>
                          <SelectItem value="genre">Жанр</SelectItem>
                          <SelectItem value="platform">Платформа</SelectItem>
                          <SelectItem value="year">Год выпуска</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                    
                    <div>
                      <Label htmlFor="filter-value">Значение</Label>
                      {singleFilter.type === "title" ? (
                        <Input 
                          id="filter-value" 
                          placeholder="Введите название"
                          value={singleFilter.value}
                          onChange={(e) => setSingleFilter({...singleFilter, value: e.target.value})}
                        />
                      ) : singleFilter.type === "developer" ? (
                        <Select 
                          value={singleFilter.value}
                          onValueChange={(value) => setSingleFilter({...singleFilter, value})}
                        >
                          <SelectTrigger id="filter-value">
                            <SelectValue placeholder="Выберите разработчика" />
                          </SelectTrigger>
                          <SelectContent>
                            {developers.map(dev => (
                              <SelectItem key={dev} value={dev}>{dev}</SelectItem>
                            ))}
                          </SelectContent>
                        </Select>
                      ) : singleFilter.type === "publisher" ? (
                        <Select 
                          value={singleFilter.value}
                          onValueChange={(value) => setSingleFilter({...singleFilter, value})}
                        >
                          <SelectTrigger id="filter-value">
                            <SelectValue placeholder="Выберите издателя" />
                          </SelectTrigger>
                          <SelectContent>
                            {publishers.map(pub => (
                              <SelectItem key={pub} value={pub}>{pub}</SelectItem>
                            ))}
                          </SelectContent>
                        </Select>
                      ) : singleFilter.type === "genre" ? (
                        <Select 
                          value={singleFilter.value}
                          onValueChange={(value) => setSingleFilter({...singleFilter, value})}
                        >
                          <SelectTrigger id="filter-value">
                            <SelectValue placeholder="Выберите жанр" />
                          </SelectTrigger>
                          <SelectContent>
                            {genres.map(genre => (
                              <SelectItem key={genre} value={genre}>{genre}</SelectItem>
                            ))}
                          </SelectContent>
                        </Select>
                      ) : singleFilter.type === "platform" ? (
                        <Select 
                          value={singleFilter.value}
                          onValueChange={(value) => setSingleFilter({...singleFilter, value})}
                        >
                          <SelectTrigger id="filter-value">
                            <SelectValue placeholder="Выберите платформу" />
                          </SelectTrigger>
                          <SelectContent>
                            {platforms.map(platform => (
                              <SelectItem key={platform} value={platform}>{platform}</SelectItem>
                            ))}
                          </SelectContent>
                        </Select>
                      ) : singleFilter.type === "year" ? (
                        <Select 
                          value={singleFilter.value}
                          onValueChange={(value) => setSingleFilter({...singleFilter, value})}
                        >
                          <SelectTrigger id="filter-value">
                            <SelectValue placeholder="Выберите год" />
                          </SelectTrigger>
                          <SelectContent>
                            {years.map(year => (
                              <SelectItem key={year} value={year.toString()}>{year}</SelectItem>
                            ))}
                          </SelectContent>
                        </Select>
                      ) : (
                        <Input id="filter-value" disabled placeholder="Сначала выберите тип" />
                      )}
                    </div>
                    
                    <div className="flex items-end">
                      <Button 
                        className="w-full" 
                        onClick={handleSingleSearch}
                        disabled={!singleFilter.type || !singleFilter.value}
                      >
                        <Icon name="Search" className="mr-2 h-4 w-4" />
                        Найти
                      </Button>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
            
            {/* Поиск по нескольким таблицам */}
            <TabsContent value="multiple">
              <Card className="mb-8">
                <CardHeader>
                  <CardTitle>Расширенный поиск</CardTitle>
                  <CardDescription>
                    Поиск по нескольким критериям с зависимыми списками
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div>
                        <Label>Первичный фильтр</Label>
                        <div className="grid grid-cols-2 gap-2 mt-2">
                          <Select 
                            value={multiFilter.primary.type}
                            onValueChange={(value) => setMultiFilter({
                              ...multiFilter, 
                              primary: {...multiFilter.primary, type: value, value: ""}
                            })}
                          >
                            <SelectTrigger>
                              <SelectValue placeholder="Тип" />
                            </SelectTrigger>
                            <SelectContent>
                              <SelectItem value="developer">Разработчик</SelectItem>
                              <SelectItem value="publisher">Издатель</SelectItem>
                              <SelectItem value="genre">Жанр</SelectItem>
                              <SelectItem value="platform">Платформа</SelectItem>
                              <SelectItem value="year">Год выпуска</SelectItem>
                            </SelectContent>
                          </Select>
                          
                          {multiFilter.primary.type ? (
                            <Select 
                              value={multiFilter.primary.value}
                              onValueChange={(value) => setMultiFilter({
                                ...multiFilter, 
                                primary: {...multiFilter.primary, value}
                              })}
                            >
                              <SelectTrigger>
                                <SelectValue placeholder="Значение" />
                              </SelectTrigger>
                              <SelectContent>
                                {multiFilter.primary.type === "developer" && developers.map(dev => (
                                  <SelectItem key={dev} value={dev}>{dev}</SelectItem>
                                ))}
                                {multiFilter.primary.type === "publisher" && publishers.map(pub => (
                                  <SelectItem key={pub} value={pub}>{pub}</SelectItem>
                                ))}
                                {multiFilter.primary.type === "genre" && genres.map(genre => (
                                  <SelectItem key={genre} value={genre}>{genre}</SelectItem>
                                ))}
                                {multiFilter.primary.type === "platform" && platforms.map(platform => (
                                  <SelectItem key={platform} value={platform}>{platform}</SelectItem>
                                ))}
                                {multiFilter.primary.type === "year" && years.map(year => (
                                  <SelectItem key={year} value={year.toString()}>{year}</SelectItem>
                                ))}
                              </SelectContent>
                            </Select>
                          ) : (
                            <Select disabled>
                              <SelectTrigger>
                                <SelectValue placeholder="Сначала выберите тип" />
                              </SelectTrigger>
                              <SelectContent>
                                <SelectItem value="">Выберите тип сначала</SelectItem>
                              </SelectContent>
                            </Select>
                          )}
                        </div>
                      </div>
                      
                      <div>
                        <Label>Вторичный фильтр</Label>
                        <div className="grid grid-cols-2 gap-2 mt-2">
                          <Select 
                            value={multiFilter.secondary.type}
                            onValueChange={(value) => setMultiFilter({
                              ...multiFilter, 
                              secondary: {...multiFilter.secondary, type: value, value: ""}
                            })}
                            disabled={!multiFilter.primary.type || !multiFilter.primary.value}
                          >
                            <SelectTrigger>
                              <SelectValue placeholder="Тип" />
                            </SelectTrigger>
                            <SelectContent>
                              <SelectItem value="developer">Разработчик</SelectItem>
                              <SelectItem value="publisher">Издатель</SelectItem>
                              <SelectItem value="genre">Жанр</SelectItem>
                              <SelectItem value="platform">Платформа</SelectItem>
                              <SelectItem value="year">Год выпуска</SelectItem>
                            </SelectContent>
                          </Select>
                          
                          {multiFilter.secondary.type ? (
                            <Select 
                              value={multiFilter.secondary.value}
                              onValueChange={(value) => setMultiFilter({
                                ...multiFilter, 
                                secondary: {...multiFilter.secondary, value}
                              })}
                            >
                              <SelectTrigger>
                                <SelectValue placeholder="Значение" />
                              </SelectTrigger>
                              <SelectContent>
                                {getSecondaryOptions().map(option => (
                                  <SelectItem key={option} value={typeof option === 'number' ? option.toString() : option}>
                                    {option}
                                  </SelectItem>
                                ))}
                              </SelectContent>
                            </Select>
                          ) : (
                            <Select disabled>
                              <SelectTrigger>
                                <SelectValue placeholder="Сначала выберите тип" />
                              </SelectTrigger>
                              <SelectContent>
                                <SelectItem value="">Выберите тип сначала</SelectItem>
                              </SelectContent>
                            </Select>
                          )}
                        </div>
                      </div>
                    </div>
                    
                    <div className="flex justify-end">
                      <Button 
                        onClick={handleMultiSearch}
                        disabled={
                          !multiFilter.primary.type || !multiFilter.primary.value ||
                          !multiFilter.secondary.type || !multiFilter.secondary.value
                        }
                      >
                        <Icon name="Search" className="mr-2 h-4 w-4" />
                        Выполнить поиск
                      </Button>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
          </Tabs>
          
          {/* Результаты поиска */}
          <Card>
            <CardHeader>
              <CardTitle>Результаты поиска</CardTitle>
              {hasSearched && (
                <CardDescription>
                  Найдено {results.length} {results.length === 1 ? 'игра' : 
                  (results.length >= 2 && results.length <= 4) ? 'игры' : 'игр'}
                </CardDescription>
              )}
            </CardHeader>
            <CardContent>
              {hasSearched ? (
                results.length > 0 ? (
                  <Table>
                    <TableHeader>
                      <TableRow>
                        <TableHead>Название</TableHead>
                        <TableHead>Разработчик</TableHead>
                        <TableHead>Издатель</TableHead>
                        <TableHead>Год</TableHead>
                        <TableHead>Жанр</TableHead>
                        <TableHead>Платформы</TableHead>
                        <TableHead className="text-right">Действия</TableHead>
                      </TableRow>
                    </TableHeader>
                    <TableBody>
                      {results.map((game) => (
                        <TableRow key={game.id}>
                          <TableCell className="font-medium">{game.title}</TableCell>
                          <TableCell>{game.developer}</TableCell>
                          <TableCell>{game.publisher}</TableCell>
                          <TableCell>{game.releaseYear}</TableCell>
                          <TableCell>
                            <Badge variant="outline">{game.genre}</Badge>
                          </TableCell>
                          <TableCell>
                            {game.platform.split(', ').map((p, i) => (
                              <Badge key={i} variant="secondary" className="mr-1 my-0.5">
                                {p}
                              </Badge>
                            ))}
                          </TableCell>
                          <TableCell className="text-right">
                            <Button variant="ghost" size="sm">
                              <Icon name="Eye" className="h-4 w-4" />
                            </Button>
                          </TableCell>
                        </TableRow>
                      ))}
                    </TableBody>
                  </Table>
                ) : (
                  <div className="text-center py-10">
                    <Icon name="Search" className="h-12 w-12 text-muted-foreground mx-auto mb-4" />
                    <h3 className="text-lg font-medium mb-2">Нет результатов</h3>
                    <p className="text-muted-foreground">
                      Попробуйте изменить параметры поиска для получения результатов
                    </p>
                  </div>
                )
              ) : (
                <div className="text-center py-10">
                  <Icon name="Filter" className="h-12 w-12 text-muted-foreground mx-auto mb-4" />
                  <h3 className="text-lg font-medium mb-2">Выполните поиск</h3>
                  <p className="text-muted-foreground">
                    Используйте фильтры выше для поиска нужных данных
                  </p>
                </div>
              )}
            </CardContent>
          </Card>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default Search;
