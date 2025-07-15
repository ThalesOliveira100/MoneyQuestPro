
import { useState } from 'react';
import { Bell, Menu, User, Coins, Zap } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { mockUser } from '@/data/mockData';

interface HeaderProps {
  onMenuClick: () => void;
}

const Header = ({ onMenuClick }: HeaderProps) => {
  const [user] = useState(mockUser);

  const getXpProgress = () => {
    const currentLevelXp = user.level * 500;
    const nextLevelXp = (user.level + 1) * 500;
    const progress = ((user.xp) / (nextLevelXp - currentLevelXp)) * 100;
    return Math.min(progress, 100);
  };

  return (
    <header className="bg-white shadow-sm border-b sticky top-0 z-50">
      <div className="px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo e Menu */}
          <div className="flex items-center">
            <Button
              variant="ghost"
              size="icon"
              onClick={onMenuClick}
              className="md:hidden mr-2"
            >
              <Menu className="h-5 w-5" />
            </Button>
            <div className="flex items-center">
              <div className="bg-gradient-to-r from-blue-600 to-purple-600 text-white p-2 rounded-lg mr-3">
                <span className="font-bold text-lg">M</span>
              </div>
              <h1 className="text-xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                MoneyQuest
              </h1>
            </div>
          </div>

          {/* Stats do usuário */}
          <div className="flex items-center space-x-4">
            {/* Moedas */}
            <div className="flex items-center bg-yellow-50 px-3 py-1 rounded-full">
              <Coins className="h-4 w-4 text-yellow-600 mr-1" />
              <span className="text-sm font-semibold text-yellow-700">{user.coins}</span>
            </div>

            {/* XP e Level */}
            <div className="hidden sm:flex items-center space-x-3">
              <div className="flex items-center bg-blue-50 px-3 py-1 rounded-full">
                <Zap className="h-4 w-4 text-blue-600 mr-1" />
                <span className="text-sm font-semibold text-blue-700">Nível {user.level}</span>
              </div>
              
              <div className="flex flex-col items-end">
                <div className="w-20 bg-gray-200 rounded-full h-2">
                  <div 
                    className="bg-gradient-to-r from-blue-500 to-purple-500 h-2 rounded-full transition-all duration-300"
                    style={{ width: `${getXpProgress()}%` }}
                  ></div>
                </div>
                <span className="text-xs text-gray-500 mt-1">{user.xp} XP</span>
              </div>
            </div>

            {/* Notificações */}
            <Button variant="ghost" size="icon" className="relative">
              <Bell className="h-5 w-5" />
              <span className="absolute -top-1 -right-1 bg-red-500 text-white text-xs rounded-full h-5 w-5 flex items-center justify-center">
                3
              </span>
            </Button>

            {/* Avatar do usuário */}
            <Button variant="ghost" size="icon" className="rounded-full">
              <div className="w-8 h-8 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full flex items-center justify-center text-white">
                <span className="text-lg">{user.avatar}</span>
              </div>
            </Button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
