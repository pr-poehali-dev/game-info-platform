import React from "react";
import { Link, useLocation } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import Icon from "@/components/ui/icon";

const Navbar: React.FC = () => {
  const location = useLocation();

  const isActive = (path: string) => {
    return location.pathname === path ? "active" : "";
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b py-3">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-8">
            <Link to="/" className="flex items-center">
              <Icon
                name="GameController"
                className="w-6 h-6 text-primary mr-2"
              />
              <span className="text-xl font-montserrat font-bold tracking-tight">
                GameInfoHub
              </span>
            </Link>

            <div className="hidden md:flex items-center space-x-6">
              <Link to="/" className={`navbar-link ${isActive("/")}`}>
                Главная
              </Link>
              <Link
                to="/dashboard"
                className={`navbar-link ${isActive("/dashboard") || location.pathname.includes("/dashboard") ? "active" : ""}`}
              >
                Система
              </Link>
              <Link
                to="/search"
                className={`navbar-link ${isActive("/search") || location.pathname.includes("/search") ? "active" : ""}`}
              >
                Поиск
              </Link>
              <Link
                to="/statistics"
                className={`navbar-link ${isActive("/statistics") || location.pathname.includes("/statistics") ? "active" : ""}`}
              >
                Статистика
              </Link>
              <Link to="/about" className={`navbar-link ${isActive("/about")}`}>
                О проекте
              </Link>
            </div>
          </div>

          <div className="flex items-center space-x-4">
            <div className="relative hidden md:block w-64">
              <Input type="text" placeholder="Поиск игр..." className="pl-10" />
              <Icon
                name="Search"
                className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground w-4 h-4"
              />
            </div>

            <Button variant="ghost" size="icon">
              <Icon name="Moon" className="w-5 h-5" />
            </Button>

            <Link to="/dashboard">
              <Button variant="default">
                <Icon name="LayoutDashboard" className="w-4 h-4 mr-2" />
                Система
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
