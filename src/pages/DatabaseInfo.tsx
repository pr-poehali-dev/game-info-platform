
import React from 'react';
import { Link } from 'react-router-dom';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Separator } from '@/components/ui/separator';
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import Icon from '@/components/ui/icon';

// Данные о таблицах БД
const databaseTables = [
  {
    name: "games",
    description: "Основная таблица с информацией об играх",
    recordCount: 10842,
    size: "456 MB",
    lastUpdate: "15.05.2023 12:32:15",
    fields: [
      { name: "id", type: "INT", primary: true, foreign: false, description: "Уникальный идентификатор игры" },
      { name: "title", type: "VARCHAR(255)", primary: false, foreign: false, description: "Название игры" },
      { name: "release_date", type: "DATE", primary: false, foreign: false, description: "Дата выхода игры" },
      { name: "description", type: "TEXT", primary: false, foreign: false, description: "Описание игры" },
      { name: "developer_id", type: "INT", primary: false, foreign: true, description: "Идентификатор разработчика" },
      { name: "publisher_id", type: "INT", primary: false, foreign: true, description: "Идентификатор издателя" },
      { name: "age_rating", type: "VARCHAR(10)", primary: false, foreign: false, description: "Возрастной рейтинг" },
      { name: "created_at", type: "TIMESTAMP", primary: false, foreign: false, description: "Дата создания записи" },
      { name: "updated_at", type: "TIMESTAMP", primary: false, foreign: false, description: "Дата обновления записи" }
    ]
  },
  {
    name: "developers",
    description: "Таблица с информацией о разработчиках игр",
    recordCount: 1254,
    size: "78 MB",
    lastUpdate: "10.05.2023 09:15:22",
    fields: [
      { name: "id", type: "INT", primary: true, foreign: false, description: "Уникальный идентификатор разработчика" },
      { name: "name", type: "VARCHAR(255)", primary: false, foreign: false, description: "Название компании" },
      { name: "country", type: "VARCHAR(100)", primary: false, foreign: false, description: "Страна" },
      { name: "founded_year", type: "INT", primary: false, foreign: false, description: "Год основания" },
      { name: "website", type: "VARCHAR(255)", primary: false, foreign: false, description: "Веб-сайт" },
      { name: "description", type: "TEXT", primary: false, foreign: false, description: "Описание компании" },
      { name: "logo_url", type: "VARCHAR(255)", primary: false, foreign: false, description: "URL логотипа" },
      { name: "created_at", type: "TIMESTAMP", primary: false, foreign: false, description: "Дата создания записи" },
      { name: "updated_at", type: "TIMESTAMP", primary: false, foreign: false, description: "Дата обновления записи" }
    ]
  },
  {
    name: "publishers",
    description: "Таблица с информацией об издателях игр",
    recordCount: 726,
    size: "64 MB",
    lastUpdate: "12.05.2023 15:45:08",
    fields: [
      { name: "id", type: "INT", primary: true, foreign: false, description: "Уникальный идентификатор издателя" },
      { name: "name", type: "VARCHAR(255)", primary: false, foreign: false, description: "Название компании" },
      { name: "country", type: "VARCHAR(100)", primary: false, foreign: false, description: "Страна" },
      { name: "founded_year", type: "INT", primary: false, foreign: false, description: "Год основания" },
      { name: "website", type: "VARCHAR(255)", primary: false, foreign: false, description: "Веб-сайт" },
      { name: "description", type: "TEXT", primary: false, foreign: false, description: "Описание компании" },
      { name: "logo_url", type: "VARCHAR(255)", primary: false, foreign: false, description: "URL логотипа" },
      { name: "created_at", type: "TIMESTAMP", primary: false, foreign: false, description: "Дата создания записи" },
      { name: "updated_at", type: "TIMESTAMP", primary: false, foreign: false, description: "Дата обновления записи" }
    ]
  },
  {
    name: "platforms",
    description: "Таблица игровых платформ",
    recordCount: 42,
    size: "5 MB",
    lastUpdate: "08.05.2023 10:22:45",
    fields: [
      { name: "id", type: "INT", primary: true, foreign: false, description: "Уникальный идентификатор платформы" },
      { name: "name", type: "VARCHAR(100)", primary: false, foreign: false, description: "Название платформы" },
      { name: "manufacturer", type: "VARCHAR(100)", primary: false, foreign: false, description: "Производитель" },
      { name: "release_year", type: "INT", primary: false, foreign: false, description: "Год выпуска" },
      { name: "type", type: "VARCHAR(50)", primary: false, foreign: false, description: "Тип платформы" },
      { name: "created_at", type: "TIMESTAMP", primary: false, foreign: false, description: "Дата создания записи" },
      { name: "updated_at", type: "TIMESTAMP", primary: false, foreign: false, description: "Дата обновления записи" }
    ]
  },
  {
    name: "genres",
    description: "Справочник жанров игр",
    recordCount: 52,
    size: "3 MB",
    lastUpdate: "05.05.2023 14:10:33",
    fields: [
      { name: "id", type: "INT", primary: true, foreign: false, description: "Уникальный идентификатор жанра" },
      { name: "name", type: "VARCHAR(100)", primary: false, foreign: false, description: "Название жанра" },
      { name: "description", type: "TEXT", primary: false, foreign: false, description: "Описание жанра" },
      { name: "created_at", type: "TIMESTAMP", primary: false, foreign: false, description: "Дата создания записи" },
      { name: "updated_at", type: "TIMESTAMP", primary: false, foreign: false, description: "Дата обновления записи" }
    ]
  },
  {
    name: "game_platforms",
    description: "Связь между играми и платформами",
    recordCount: 19583,
    size: "156 MB",
    lastUpdate: "15.05.2023 12:32:15",
    fields: [
      { name: "id", type: "INT", primary: true, foreign: false, description: "Уникальный идентификатор связи" },
      { name: "game_id", type: "INT", primary: false, foreign: true, description: "Идентификатор игры" },
      { name: "platform_id", type: "INT", primary: false, foreign: true, description: "Идентификатор платформы" },
      { name: "release_date", type: "DATE", primary: false, foreign: false, description: "Дата выхода на платформе" },
      { name: "created_at", type: "TIMESTAMP", primary: false, foreign: false, description: "Дата создания записи" },
      { name: "updated_at", type: "TIMESTAMP", primary: false, foreign: false, description: "Дата обновления записи" }
    ]
  },
  {
    name: "game_genres",
    description: "Связь между играми и жанрами",
    recordCount: 24567,
    size: "185 MB",
    lastUpdate: "15.05.2023 12:32:15",
    fields: [
      { name: "id", type: "INT", primary: true, foreign: false, description: "Уникальный идентификатор связи" },
      { name: "game_id", type: "INT", primary: false, foreign: true, description: "Идентификатор игры" },
      { name: "genre_id", type: "INT", primary: false, foreign: true, description: "Идентификатор жанра" },
      { name: "created_at", type: "TIMESTAMP", primary: false, foreign: false, description: "Дата создания записи" },
      { name: "updated_at", type: "TIMESTAMP", primary: false, foreign: false, description: "Дата обновления записи" }
    ]
  }
];

// Информация о связях между таблицами
const databaseRelations = [
  { from: "games", to: "developers", fromField: "developer_id", toField: "id", type: "Many-to-One" },
  { from: "games", to: "publishers", fromField: "publisher_id", toField: "id", type: "Many-to-One" },
  { from: "game_platforms", to: "games", fromField: "game_id", toField: "id", type: "Many-to-One" },
  { from: "game_platforms", to: "platforms", fromField: "platform_id", toField: "id", type: "Many-to-One" },
  { from: "game_genres", to: "games", fromField: "game_id", toField: "id", type: "Many-to-One" },
  { from: "game_genres", to: "genres", fromField: "genre_id", toField: "id", type: "Many-to-One" }
];

// Информация о хранении
const storageInfo = {
  totalSize: "947 MB",
  availableSpace: "14.8 GB",
  backupDate: "15.05.2023 00:00:00",
  backupSize: "842 MB",
  indexSize: "215 MB"
};

const DatabaseInfo: React.FC = () => {
  const [selectedTable, setSelectedTable] = React.useState<string | null>(null);
  
  // Получить выбранную таблицу
  const selectedTableData = databaseTables.find(table => table.name === selectedTable);
  
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <main className="flex-grow mt-16 py-12">
        <div className="container mx-auto px-4">
          <div className="flex justify-between items-center mb-8">
            <h1 className="text-3xl md:text-4xl font-bold">Сведения о базе данных</h1>
            <Link to="/dashboard">
              <Button variant="outline">
                <Icon name="ArrowLeft" className="mr-2 h-4 w-4" />
                Назад к панели
              </Button>
            </Link>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* Список таблиц */}
            <Card className="md:col-span-1">
              <CardHeader>
                <CardTitle>Таблицы базы данных</CardTitle>
                <CardDescription>
                  Выберите таблицу для просмотра структуры
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-2">
                  {databaseTables.map((table) => (
                    <Button
                      key={table.name}
                      variant={selectedTable === table.name ? "secondary" : "ghost"}
                      className="w-full justify-between text-left"
                      onClick={() => setSelectedTable(table.name)}
                    >
                      <div className="flex items-center gap-2">
                        <Icon name="Database" className="h-4 w-4" />
                        <span>{table.name}</span>
                      </div>
                      <Badge variant="outline">{table.recordCount.toLocaleString()}</Badge>
                    </Button>
                  ))}
                </div>
              </CardContent>
            </Card>
            
            {/* Информация о таблице */}
            <Card className="md:col-span-2">
              <CardHeader>
                <CardTitle>
                  {selectedTableData ? (
                    <span className="flex items-center gap-2">
                      <Icon name="Table" className="h-5 w-5 text-primary" />
                      Структура таблицы <code className="bg-muted px-1 py-0.5 rounded text-sm">{selectedTableData.name}</code>
                    </span>
                  ) : (
                    "Информация о таблице"
                  )}
                </CardTitle>
                <CardDescription>
                  {selectedTableData ? selectedTableData.description : "Выберите таблицу из списка слева"}
                </CardDescription>
              </CardHeader>
              <CardContent>
                {selectedTableData ? (
                  <div className="space-y-6">
                    <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                      <div className="bg-muted/50 p-3 rounded-lg">
                        <p className="text-sm text-muted-foreground mb-1">Записей</p>
                        <p className="text-xl font-bold">{selectedTableData.recordCount.toLocaleString()}</p>
                      </div>
                      <div className="bg-muted/50 p-3 rounded-lg">
                        <p className="text-sm text-muted-foreground mb-1">Размер</p>
                        <p className="text-xl font-bold">{selectedTableData.size}</p>
                      </div>
                      <div className="bg-muted/50 p-3 rounded-lg">
                        <p className="text-sm text-muted-foreground mb-1">Обновление</p>
                        <p className="text-xl font-bold">{selectedTableData.lastUpdate}</p>
                      </div>
                    </div>
                    
                    <div>
                      <h3 className="text-lg font-semibold mb-3">Поля таблицы</h3>
                      <Table>
                        <TableHeader>
                          <TableRow>
                            <TableHead>Имя поля</TableHead>
                            <TableHead>Тип</TableHead>
                            <TableHead>Описание</TableHead>
                            <TableHead className="text-right">Ключ</TableHead>
                          </TableRow>
                        </TableHeader>
                        <TableBody>
                          {selectedTableData.fields.map((field) => (
                            <TableRow key={field.name}>
                              <TableCell className="font-mono font-medium">{field.name}</TableCell>
                              <TableCell className="font-mono text-xs">{field.type}</TableCell>
                              <TableCell>{field.description}</TableCell>
                              <TableCell className="text-right">
                                {field.primary && <Badge className="mr-1 bg-yellow-500">PK</Badge>}
                                {field.foreign && <Badge className="bg-blue-500">FK</Badge>}
                              </TableCell>
                            </TableRow>
                          ))}
                        </TableBody>
                      </Table>
                    </div>
                    
                    <div>
                      <h3 className="text-lg font-semibold mb-3">Связи</h3>
                      <div className="space-y-2">
                        {databaseRelations
                          .filter(relation => relation.from === selectedTableData.name || relation.to === selectedTableData.name)
                          .map((relation, index) => (
                            <div key={index} className="flex items-center p-2 bg-muted/30 rounded-lg">
                              <div className="font-mono text-sm">{relation.from}</div>
                              <div className="mx-2 text-muted-foreground">
                                ({relation.fromField})
                              </div>
                              <Icon name="ArrowRight" className="h-4 w-4 mx-2" />
                              <div className="font-mono text-sm">{relation.to}</div>
                              <div className="mx-2 text-muted-foreground">
                                ({relation.toField})
                              </div>
                              <Badge variant="outline" className="ml-auto">{relation.type}</Badge>
                            </div>
                          ))}
                        
                        {databaseRelations
                          .filter(relation => relation.from === selectedTableData.name || relation.to === selectedTableData.name)
                          .length === 0 && (
                          <p className="text-muted-foreground text-center py-2">
                            Нет связей для этой таблицы
                          </p>
                        )}
                      </div>
                    </div>
                  </div>
                ) : (
                  <div className="flex flex-col items-center justify-center py-12 text-center">
                    <Icon name="Database" className="h-16 w-16 text-muted-foreground mb-4" />
                    <h3 className="text-lg font-medium mb-2">Выберите таблицу</h3>
                    <p className="text-muted-foreground max-w-md">
                      Выберите таблицу из списка слева для просмотра её структуры, полей и связей с другими таблицами
                    </p>
                  </div>
                )}
              </CardContent>
            </Card>
          </div>
          
          {/* Информация о хранении */}
          <Card className="mt-6">
            <CardHeader>
              <CardTitle>Информация о хранении</CardTitle>
              <CardDescription>
                Сведения о размере базы данных и резервных копиях
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-5 gap-4">
                <div className="bg-muted/50 p-3 rounded-lg">
                  <p className="text-sm text-muted-foreground mb-1">Общий размер БД</p>
                  <p className="text-xl font-bold">{storageInfo.totalSize}</p>
                </div>
                <div className="bg-muted/50 p-3 rounded-lg">
                  <p className="text-sm text-muted-foreground mb-1">Доступное место</p>
                  <p className="text-xl font-bold">{storageInfo.availableSpace}</p>
                </div>
                <div className="bg-muted/50 p-3 rounded-lg">
                  <p className="text-sm text-muted-foreground mb-1">Размер индексов</p>
                  <p className="text-xl font-bold">{storageInfo.indexSize}</p>
                </div>
                <div className="bg-muted/50 p-3 rounded-lg">
                  <p className="text-sm text-muted-foreground mb-1">Дата резервной копии</p>
                  <p className="text-xl font-bold">{storageInfo.backupDate}</p>
                </div>
                <div className="bg-muted/50 p-3 rounded-lg">
                  <p className="text-sm text-muted-foreground mb-1">Размер резервной копии</p>
                  <p className="text-xl font-bold">{storageInfo.backupSize}</p>
                </div>
              </div>
              
              <div className="mt-6 flex justify-end gap-4">
                <Button variant="outline">
                  <Icon name="RefreshCw" className="mr-2 h-4 w-4" />
                  Обновить статистику
                </Button>
                <Button variant="outline">
                  <Icon name="FileJson" className="mr-2 h-4 w-4" />
                  Экспорт схемы БД
                </Button>
                <Button>
                  <Icon name="Save" className="mr-2 h-4 w-4" />
                  Создать резервную копию
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default DatabaseInfo;
