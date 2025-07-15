
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { User, Crown, LogOut } from 'lucide-react';
import { Button } from '@/components/ui/button';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import { mockUser } from '@/data/mockData';

const ProfileDropdown = () => {
  const [user] = useState(mockUser);
  const navigate = useNavigate();

  const handleViewProfile = () => {
    navigate('/profile');
  };

  const handleUpgrade = () => {
    navigate('/shop');
  };

  const handleLogout = () => {
    // Aqui você implementaria a lógica de logout
    console.log('Logout clicked');
    navigate('/auth');
  };

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="ghost" size="icon" className="rounded-full">
          <div className="w-8 h-8 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full flex items-center justify-center text-white">
            <span className="text-lg">{user.avatar}</span>
          </div>
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="w-56" align="end">
        <div className="flex items-center space-x-2 p-2">
          <div className="w-8 h-8 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full flex items-center justify-center text-white">
            <span className="text-sm">{user.avatar}</span>
          </div>
          <div className="flex flex-col space-y-1">
            <p className="text-sm font-medium leading-none">{user.name}</p>
            <p className="text-xs leading-none text-muted-foreground">
              Nível {user.level} • {user.coins} moedas
            </p>
          </div>
        </div>
        <DropdownMenuSeparator />
        <DropdownMenuItem onClick={handleViewProfile}>
          <User className="mr-2 h-4 w-4" />
          <span>Ver perfil completo</span>
        </DropdownMenuItem>
        <DropdownMenuItem onClick={handleUpgrade}>
          <Crown className="mr-2 h-4 w-4" />
          <span>Fazer upgrade</span>
        </DropdownMenuItem>
        <DropdownMenuSeparator />
        <DropdownMenuItem onClick={handleLogout} className="text-red-600">
          <LogOut className="mr-2 h-4 w-4" />
          <span>Sair</span>
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
};

export default ProfileDropdown;
