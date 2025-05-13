
import React from 'react';
import { Link } from 'react-router-dom';
import Icon from '@/components/ui/icon';

const Footer: React.FC = () => {
  return (
    <footer className="bg-card border-t">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div>
            <Link to="/" className="flex items-center mb-4">
              <Icon name="GameController" className="w-6 h-6 text-primary mr-2" />
              <span className="text-xl font-montserrat font-bold tracking-tight">GameInfoHub</span>
            </Link>
            <p className="text-muted-foreground mb-4">
              Ваш надежный источник информации об играх, разработчиках и издателях.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-muted-foreground hover:text-foreground transition-colors">
                <Icon name="Twitter" className="h-5 w-5" />
              </a>
              <a href="#" className="text-muted-foreground hover:text-foreground transition-colors">
                <Icon name="Facebook" className="h-5 w-5" />
              </a>
              <a href="#" className="text-muted-foreground hover:text-foreground transition-colors">
                <Icon name="Instagram" className="h-5 w-5" />
              </a>
              <a href="#" className="text-muted-foreground hover:text-foreground transition-colors">
                <Icon name="Github" className="h-5 w-5" />
              </a>
            </div>
          </div>
          
          <div>
            <h3 className="font-semibold mb-4 text-lg">Навигация</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="text-muted-foreground hover:text-foreground transition-colors">
                  Главная
                </Link>
              </li>
              <li>
                <Link to="/games" className="text-muted-foreground hover:text-foreground transition-colors">
                  Все игры
                </Link>
              </li>
              <li>
                <Link to="/developers" className="text-muted-foreground hover:text-foreground transition-colors">
                  Разработчики
                </Link>
              </li>
              <li>
                <Link to="/publishers" className="text-muted-foreground hover:text-foreground transition-colors">
                  Издатели
                </Link>
              </li>
              <li>
                <Link to="/statistics" className="text-muted-foreground hover:text-foreground transition-colors">
                  Статистика
                </Link>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="font-semibold mb-4 text-lg">Дополнительно</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/api" className="text-muted-foreground hover:text-foreground transition-colors">
                  API
                </Link>
              </li>
              <li>
                <Link to="/about" className="text-muted-foreground hover:text-foreground transition-colors">
                  О проекте
                </Link>
              </li>
              <li>
                <Link to="/faq" className="text-muted-foreground hover:text-foreground transition-colors">
                  FAQ
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-muted-foreground hover:text-foreground transition-colors">
                  Контакты
                </Link>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="font-semibold mb-4 text-lg">Поддержка</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/help" className="text-muted-foreground hover:text-foreground transition-colors">
                  Центр помощи
                </Link>
              </li>
              <li>
                <Link to="/terms" className="text-muted-foreground hover:text-foreground transition-colors">
                  Условия использования
                </Link>
              </li>
              <li>
                <Link to="/privacy" className="text-muted-foreground hover:text-foreground transition-colors">
                  Политика конфиденциальности
                </Link>
              </li>
              <li>
                <Link to="/cookie" className="text-muted-foreground hover:text-foreground transition-colors">
                  Политика использования cookie
                </Link>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="border-t mt-8 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-muted-foreground text-sm mb-4 md:mb-0">
            &copy; {new Date().getFullYear()} GameInfoHub. Все права защищены.
          </p>
          <p className="text-muted-foreground text-sm">
            Сделано с <Icon name="Heart" className="inline h-4 w-4 text-red-500" /> в России
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
