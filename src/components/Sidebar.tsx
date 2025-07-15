
import { useState } from 'react';
import { NavLink, useLocation } from 'react-router-dom';
import { 
  Home, 
  BookOpen, 
  Trophy, 
  ShoppingBag, 
  User, 
  Crown,
  TrendingUp,
  X
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';

interface SidebarProps {
  isOpen: boolean;
  onClose: () => void;
}

const navigation = [
  { name: 'Dashboard', href: '/', icon: Home },
  { name: 'Módulos', href: '/modules', icon: BookOpen },
  { name: 'Ranking', href: '/ranking', icon: Trophy },
  { name: 'Loja', href: '/shop', icon: ShoppingBag },
  { name: 'Perfil', href: '/profile', icon: User },
];

const Sidebar = ({ isOpen, onClose }: SidebarProps) => {
  const location = useLocation();

  return (
    <>
      {/* Overlay para mobile */}
      {isOpen && (
        <div 
          className="fixed inset-0 bg-black bg-opacity-50 z-40 md:hidden"
          onClick={onClose}
        />
      )}

      {/* Sidebar */}
      <aside className={cn(
        "fixed left-0 top-0 z-50 h-full w-64 bg-background border-r border-border shadow-lg transform transition-transform duration-300 ease-in-out md:translate-x-0 md:static md:inset-0",
        isOpen ? "translate-x-0" : "-translate-x-full"
      )}>
        <div className="flex flex-col h-full">
          {/* Header do Sidebar */}
          <div className="flex items-center justify-between p-4 border-b border-border md:hidden">
            <div className="flex items-center">
              <div className="bg-gradient-to-r from-blue-600 to-purple-600 text-white p-2 rounded-lg mr-3">
                <span className="font-bold text-lg">M</span>
              </div>
              <h2 className="text-lg font-semibold text-foreground">MoneyQuest</h2>
            </div>
            <Button variant="ghost" size="icon" onClick={onClose}>
              <X className="h-5 w-5" />
            </Button>
          </div>

          {/* Navegação */}
          <nav className="flex-1 px-4 py-6 space-y-2">
            {navigation.map((item) => {
              const isActive = location.pathname === item.href;
              return (
                <NavLink
                  key={item.name}
                  to={item.href}
                  onClick={onClose}
                  className={cn(
                    "flex items-center px-3 py-3 rounded-lg text-sm font-medium transition-colors",
                    isActive
                      ? "bg-primary/10 text-primary border-r-2 border-primary"
                      : "text-muted-foreground hover:bg-accent hover:text-accent-foreground"
                  )}
                >
                  <item.icon className={cn(
                    "mr-3 h-5 w-5",
                    isActive ? "text-primary" : "text-muted-foreground"
                  )} />
                  {item.name}
                </NavLink>
              );
            })}
          </nav>

          {/* Footer do Sidebar */}
          <div className="p-4 border-t border-border">
            <div className="bg-gradient-to-r from-blue-500 to-purple-500 rounded-lg p-4 text-white">
              <div className="flex items-center mb-2">
                <Crown className="h-5 w-5 mr-2" />
                <span className="font-semibold">MoneyQuest Pro</span>
              </div>
              <p className="text-xs opacity-90 mb-3">
                Desbloqueie recursos exclusivos e acelere seu aprendizado!
              </p>
              <Button 
                size="sm" 
                className="w-full bg-white text-blue-600 hover:bg-gray-100"
                onClick={() => window.location.href = '/upgrade'}
              >
                Fazer Upgrade
              </Button>
            </div>
          </div>
        </div>
      </aside>
    </>
  );
};

export default Sidebar;
