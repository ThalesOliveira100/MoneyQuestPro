
import { useState } from 'react';
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from './components/Header';
import Sidebar from './components/Sidebar';
import Dashboard from './pages/Dashboard';
import Modules from './pages/Modules';
import ModuleDetail from './pages/ModuleDetail';
import Ranking from './pages/Ranking';
import Shop from './pages/Shop';
import Profile from './pages/Profile';
import Auth from './pages/Auth';
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Toaster />
        <Sonner />
        <BrowserRouter>
          <Routes>
            {/* Rota de autenticação sem layout */}
            <Route path="/auth" element={<Auth />} />
            
            {/* Rotas com layout */}
            <Route path="/*" element={
              <div className="min-h-screen bg-gray-50 flex w-full">
                <Sidebar isOpen={sidebarOpen} onClose={() => setSidebarOpen(false)} />
                
                <div className="flex-1 flex flex-col md:ml-64">
                  <Header onMenuClick={() => setSidebarOpen(true)} />
                  
                  <main className="flex-1 overflow-auto">
                    <Routes>
                      <Route path="/" element={<Dashboard />} />
                      <Route path="/modules" element={<Modules />} />
                      <Route path="/modules/:moduleId" element={<ModuleDetail />} />
                      <Route path="/ranking" element={<Ranking />} />
                      <Route path="/shop" element={<Shop />} />
                      <Route path="/profile" element={<Profile />} />
                      <Route path="*" element={<NotFound />} />
                    </Routes>
                  </main>
                </div>
              </div>
            } />
          </Routes>
        </BrowserRouter>
      </TooltipProvider>
    </QueryClientProvider>
  );
};

export default App;
