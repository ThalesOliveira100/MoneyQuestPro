import { User } from '@/types';
import { fetchUserById } from '@/services/userService';
import { Menu } from 'lucide-react';
import { Button } from '@/components/ui/button';
import NotificationDropdown from './NotificationDropdown';
import ProfileDropdown from './ProfileDropdown';
import ThemeToggle from './ThemeToggle';
import { mockUser } from '@/data/mockData';
import { useEffect, useState } from 'react';
import { CURRENT_USER_ID } from '@/data/currentUser';

interface HeaderProps {
  onMenuClick: () => void;
}

const Header = ({ onMenuClick }: HeaderProps) => {
  const [user, setUser] = useState<User | null >(null);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    fetchUserById(CURRENT_USER_ID)
      .then((user) => setUser(user))
      .catch((err) => {
        console.error('Erro ao buscar usuário', err);
        setError('Não foi possível carregar os dados do usuário.');
      });
    }, []);

  if (error) return <p className="text-red-500">{error}</p>;
  if (!user) return <p>Carregando...</p>;
  
  return (
    <header className="bg-white dark:bg-gray-900 border-b border-gray-200 dark:border-gray-700 px-4 sm:px-6 h-16 flex items-center justify-between">
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
          <div className="text-2xl mr-2">💰</div>
          <h1 className="text-xl font-bold text-gray-900 dark:text-white hidden sm:block">
            MoneyQuest
          </h1>
        </div>
      </div>

      <div className="flex items-center space-x-2 sm:space-x-4">
        {/* User coins */}
        <div className="hidden sm:flex items-center bg-yellow-100 dark:bg-yellow-900 px-3 py-1 rounded-full">
          <div className="text-yellow-600 dark:text-yellow-400 mr-1">💲</div>
          <span className="text-sm font-semibold text-yellow-700 dark:text-yellow-300">{user.coins}</span>
        </div>

        {/* Theme Toggle */}
        <ThemeToggle />

        {/* Notifications */}
        <NotificationDropdown />

        {/* Profile */}
        <ProfileDropdown />
      </div>
    </header>
  );
};

export default Header;
