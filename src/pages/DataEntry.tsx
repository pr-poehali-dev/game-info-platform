
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Tabs, TabsList, TabsTrigger, TabsContent } from '@/components/ui/tabs';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Badge } from '@/components/ui/badge';
import Icon from '@/components/ui/icon';

// Примерные данные для синхронизации
const platforms = ["PC", "PlayStation 5", "PlayStation 4", "Xbox Series X|S", "Xbox One", "Nintendo Switch", "Mobile"];
const genres = ["Экшен", "Приключения", "RPG", "Стратегия", "Симулятор", "Спортивная", "Гонки", "Шутер", "Платформер"];
const publishers = ["EA", "Ubisoft", "Activision Blizzard", "Sony Interactive", "Microsoft", "Nintendo", "2K Games"];
const developers = ["CD Projekt RED", "Naughty Dog", "Rockstar Games", "Bethesda", "Valve", "Blizzard", "343 Industries"];

const DataEntry: React.FC = () => {
  const [selectedGenres, setSelectedGenres] = useState<string[]>([]);
  const [selectedPlatforms, setSelectedPlatforms] = useState<string[]>([]);
  const [genre, setGenre] = useState<string>("");
  const [platform, setPlatform] = useState<string>("");

  const addGenre = () => {
    if (genre && !selectedGenres.includes(genre)) {
      setSelectedGenres([...selectedGenres, genre]);
      setGenre("");
    }
  };

  const removeGenre = (genreToRemove: string) => {
    setSelectedGenres(selectedGenres.filter(g => g !== genreToRemove));
  };

  const addPlatform = () => {
    if (platform && !selectedPlatforms.includes(platform)) {
      setSelectedPlatforms([...selectedPlatforms, platform]);
      setPlatform("");
    }
  };

  const removePlatform = (platformToRemove: string) => {
    setSelectedPlatforms(selectedPlatforms.filter(p => p !== platformToRemove));
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <main className="flex-grow mt-16 py-12">
        <div className="container mx-auto px-4">
          <div className="flex justify-between items-center mb-8">
            <h1 className="text-3xl md:text-4xl font-bold">Ввод и редактирование данных</h1>
            <Link to="/dashboard">
              <Button variant="outline">
                <Icon name="ArrowLeft" className="mr-2 h-4 w-4" />
                Назад к панели
              </Button>
            </Link>
          </div>
          
          <Tabs defaultValue="games" className="w-full">
            <TabsList className="grid grid-cols-4 mb-8">
              <TabsTrigger value="games">Игры</TabsTrigger>
              <TabsTrigger value="developers">Разработчики</TabsTrigger>
              <TabsTrigger value="publishers">Издатели</TabsTrigger>
              <TabsTrigger value="platforms">Платформы</TabsTrigger>
            </TabsList>
            
            {/* Таблица Игры */}
            <TabsContent value="games">
              <Card>
                <CardHeader>
                  <CardTitle>Информация об игре</CardTitle>
                  <CardDescription>
                    Добавление новой игры или редактирование существующей
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <form className="space-y-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div className="space-y-4">
                        <div>
                          <Label htmlFor="title">Название игры</Label>
                          <Input id="title" placeholder="Введите название игры" />
                        </div>
                        
                        <div>
                          <Label htmlFor="release-date">Дата выпуска</Label>
                          <Input id="release-date" type="date" />
                        </div>
                        
                        <div>
                          <Label htmlFor="developer">Разработчик</Label>
                          <Select>
                            <SelectTrigger>
                              <SelectValue placeholder="Выберите разработчика" />
                            </SelectTrigger>
                            <SelectContent>
                              {developers.map(dev => (
                                <SelectItem key={dev} value={dev}>{dev}</SelectItem>
                              ))}
                            </SelectContent>
                          </Select>
                        </div>
                        
                        <div>
                          <Label htmlFor="publisher">Издатель</Label>
                          <Select>
                            <SelectTrigger>
                              <SelectValue placeholder="Выберите издателя" />
                            </SelectTrigger>
                            <SelectContent>
                              {publishers.map(pub => (
                                <SelectItem key={pub} value={pub}>{pub}</SelectItem>
                              ))}
                            </SelectContent>
                          </Select>
                        </div>
                        
                        <div>
                          <Label htmlFor="age-rating">Возрастной рейтинг</Label>
                          <Select>
                            <SelectTrigger>
                              <SelectValue placeholder="Выберите рейтинг" />
                            </SelectTrigger>
                            <SelectContent>
                              <SelectItem value="3+">3+</SelectItem>
                              <SelectItem value="6+">6+</SelectItem>
                              <SelectItem value="12+">12+</SelectItem>
                              <SelectItem value="16+">16+</SelectItem>
                              <SelectItem value="18+">18+</SelectItem>
                            </SelectContent>
                          </Select>
                        </div>
                      </div>
                      
                      <div className="space-y-4">
                        <div>
                          <Label>Жанры</Label>
                          <div className="flex gap-2 mb-2">
                            <Select value={genre} onValueChange={setGenre}>
                              <SelectTrigger className="flex-1">
                                <SelectValue placeholder="Выберите жанр" />
                              </SelectTrigger>
                              <SelectContent>
                                {genres.map(g => (
                                  <SelectItem key={g} value={g}>{g}</SelectItem>
                                ))}
                              </SelectContent>
                            </Select>
                            <Button type="button" onClick={addGenre}>Добавить</Button>
                          </div>
                          <div className="flex flex-wrap gap-2 mt-2">
                            {selectedGenres.map(g => (
                              <Badge key={g} variant="secondary" className="flex items-center gap-1">
                                {g}
                                <button 
                                  type="button" 
                                  onClick={() => removeGenre(g)}
                                  className="ml-1 rounded-full hover:bg-primary/20 p-0.5"
                                >
                                  <Icon name="X" className="h-3 w-3" />
                                </button>
                              </Badge>
                            ))}
                          </div>
                        </div>
                        
                        <div>
                          <Label>Платформы</Label>
                          <div className="flex gap-2 mb-2">
                            <Select value={platform} onValueChange={setPlatform}>
                              <SelectTrigger className="flex-1">
                                <SelectValue placeholder="Выберите платформу" />
                              </SelectTrigger>
                              <SelectContent>
                                {platforms.map(p => (
                                  <SelectItem key={p} value={p}>{p}</SelectItem>
                                ))}
                              </SelectContent>
                            </Select>
                            <Button type="button" onClick={addPlatform}>Добавить</Button>
                          </div>
                          <div className="flex flex-wrap gap-2 mt-2">
                            {selectedPlatforms.map(p => (
                              <Badge key={p} variant="outline" className="flex items-center gap-1">
                                {p}
                                <button 
                                  type="button" 
                                  onClick={() => removePlatform(p)}
                                  className="ml-1 rounded-full hover:bg-muted p-0.5"
                                >
                                  <Icon name="X" className="h-3 w-3" />
                                </button>
                              </Badge>
                            ))}
                          </div>
                        </div>
                        
                        <div>
                          <Label htmlFor="description">Описание</Label>
                          <Textarea id="description" placeholder="Введите описание игры" rows={5} />
                        </div>
                      </div>
                    </div>
                    
                    <div className="flex justify-end gap-4">
                      <Button variant="outline" type="button">Отмена</Button>
                      <Button type="button">Сохранить</Button>
                    </div>
                  </form>
                </CardContent>
              </Card>
            </TabsContent>
            
            {/* Таблица Разработчики */}
            <TabsContent value="developers">
              <Card>
                <CardHeader>
                  <CardTitle>Информация о разработчике</CardTitle>
                  <CardDescription>
                    Добавление нового разработчика или редактирование существующего
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <form className="space-y-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div className="space-y-4">
                        <div>
                          <Label htmlFor="dev-name">Название компании</Label>
                          <Input id="dev-name" placeholder="Введите название компании" />
                        </div>
                        
                        <div>
                          <Label htmlFor="dev-founded">Год основания</Label>
                          <Input id="dev-founded" type="number" placeholder="Например, 2005" />
                        </div>
                        
                        <div>
                          <Label htmlFor="dev-country">Страна</Label>
                          <Input id="dev-country" placeholder="Введите страну" />
                        </div>
                        
                        <div>
                          <Label htmlFor="dev-website">Веб-сайт</Label>
                          <Input id="dev-website" placeholder="https://example.com" />
                        </div>
                      </div>
                      
                      <div className="space-y-4">
                        <div>
                          <Label htmlFor="dev-description">Описание</Label>
                          <Textarea id="dev-description" placeholder="Введите описание компании" rows={5} />
                        </div>
                        
                        <div>
                          <Label htmlFor="dev-logo">Логотип (URL)</Label>
                          <Input id="dev-logo" placeholder="Ссылка на изображение логотипа" />
                        </div>
                      </div>
                    </div>
                    
                    <div className="flex justify-end gap-4">
                      <Button variant="outline" type="button">Отмена</Button>
                      <Button type="button">Сохранить</Button>
                    </div>
                  </form>
                </CardContent>
              </Card>
            </TabsContent>
            
            {/* Таблица Издатели */}
            <TabsContent value="publishers">
              <Card>
                <CardHeader>
                  <CardTitle>Информация об издателе</CardTitle>
                  <CardDescription>
                    Добавление нового издателя или редактирование существующего
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <form className="space-y-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div className="space-y-4">
                        <div>
                          <Label htmlFor="pub-name">Название компании</Label>
                          <Input id="pub-name" placeholder="Введите название компании" />
                        </div>
                        
                        <div>
                          <Label htmlFor="pub-founded">Год основания</Label>
                          <Input id="pub-founded" type="number" placeholder="Например, 1995" />
                        </div>
                        
                        <div>
                          <Label htmlFor="pub-country">Страна</Label>
                          <Input id="pub-country" placeholder="Введите страну" />
                        </div>
                        
                        <div>
                          <Label htmlFor="pub-website">Веб-сайт</Label>
                          <Input id="pub-website" placeholder="https://example.com" />
                        </div>
                      </div>
                      
                      <div className="space-y-4">
                        <div>
                          <Label htmlFor="pub-description">Описание</Label>
                          <Textarea id="pub-description" placeholder="Введите описание компании" rows={5} />
                        </div>
                        
                        <div>
                          <Label htmlFor="pub-logo">Логотип (URL)</Label>
                          <Input id="pub-logo" placeholder="Ссылка на изображение логотипа" />
                        </div>
                      </div>
                    </div>
                    
                    <div className="flex justify-end gap-4">
                      <Button variant="outline" type="button">Отмена</Button>
                      <Button type="button">Сохранить</Button>
                    </div>
                  </form>
                </CardContent>
              </Card>
            </TabsContent>
            
            {/* Таблица Платформы */}
            <TabsContent value="platforms">
              <Card>
                <CardHeader>
                  <CardTitle>Информация о платформе</CardTitle>
                  <CardDescription>
                    Добавление новой платформы или редактирование существующей
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <form className="space-y-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div className="space-y-4">
                        <div>
                          <Label htmlFor="platform-name">Название платформы</Label>
                          <Input id="platform-name" placeholder="Введите название платформы" />
                        </div>
                        
                        <div>
                          <Label htmlFor="platform-manufacturer">Производитель</Label>
                          <Input id="platform-manufacturer" placeholder="Введите производителя" />
                        </div>
                        
                        <div>
                          <Label htmlFor="platform-release">Год выпуска</Label>
                          <Input id="platform-release" type="number" placeholder="Например, 2020" />
                        </div>
                      </div>
                      
                      <div className="space-y-4">
                        <div>
                          <Label htmlFor="platform-type">Тип платформы</Label>
                          <Select>
                            <SelectTrigger>
                              <SelectValue placeholder="Выберите тип" />
                            </SelectTrigger>
                            <SelectContent>
                              <SelectItem value="console">Игровая консоль</SelectItem>
                              <SelectItem value="pc">Персональный компьютер</SelectItem>
                              <SelectItem value="mobile">Мобильное устройство</SelectItem>
                              <SelectItem value="handheld">Портативная консоль</SelectItem>
                              <SelectItem value="other">Другое</SelectItem>
                            </SelectContent>
                          </Select>
                        </div>
                        
                        <div>
                          <Label htmlFor="platform-description">Описание</Label>
                          <Textarea id="platform-description" placeholder="Введите описание платформы" rows={5} />
                        </div>
                      </div>
                    </div>
                    
                    <div className="flex justify-end gap-4">
                      <Button variant="outline" type="button">Отмена</Button>
                      <Button type="button">Сохранить</Button>
                    </div>
                  </form>
                </CardContent>
              </Card>
            </TabsContent>
          </Tabs>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default DataEntry;
