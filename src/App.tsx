import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";
// Импортируем новые страницы
import Dashboard from "./pages/Dashboard";
import DataEntry from "./pages/DataEntry";
import Search from "./pages/Search";
import Statistics from "./pages/Statistics";
import DatabaseInfo from "./pages/DatabaseInfo";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          {/* Добавляем маршруты для новых страниц */}
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/data-entry" element={<DataEntry />} />
          <Route path="/search" element={<Search />} />
          <Route path="/statistics" element={<Statistics />} />
          <Route path="/database-info" element={<DatabaseInfo />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
