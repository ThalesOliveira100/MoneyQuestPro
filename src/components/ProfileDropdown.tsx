
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { User, Settings, Crown, LogOut } from 'lucide-react';
import { Button } from '@/components/ui/button';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import { Avatar, AvatarFallback } from '@/components/ui/avatar';
import { mockUser } from '@/data/mockData';

const ProfileDropdown = () => {
  const navigate = useNavigate();
  const [isOpen, setIsOpen] = useState(false);

  const handleViewProfile = () => {
    navigate('/profile');
    setIsOpen(false);
  };

  const handleEditProfile = () => {
    navigate('/profile/edit');
    setIsOpen(false);
  };

  const handleUpgrade = () => {
    navigate('/upgrade');
    setIsOpen(false);
  };

  const handleLogout = () => {
    console.log('Logout clicked');
    navigate('/auth');
    setIsOpen(false);
  };

  return (
    <DropdownMenu open={isOpen} onOpenChange={setIsOpen}>
      <DropdownMenuTrigger asChild>
        <Button variant="ghost" size="icon" className="h-9 w-9">
          <Avatar className="h-8 w-8">
            <AvatarFallback className="bg-primary text-primary-foreground text-sm">
              {mockUser.name.split(' ').map(n => n[0]).join('')}
            </AvatarFallback>
          </Avatar>
        </Button>
      </DropdownMenuTrigger>
      
      <DropdownMenuContent 
        className="w-56 bg-background border-border z-50" 
        align="end"
        sideOffset={8}
      >
        <DropdownMenuLabel className="text-foreground">
          <div className="flex flex-col space-y-1">
            <p className="text-sm font-medium">{mockUser.name}</p>
            <p className="text-xs text-muted-foreground">{mockUser.email}</p>
          </div>
        </DropdownMenuLabel>
        
        <DropdownMenuSeparator className="bg-border" />
        
        <DropdownMenuItem 
          onClick={handleViewProfile}
          className="text-foreground hover:bg-accent cursor-pointer"
        >
          <User className="mr-2 h-4 w-4" />
          Ver perfil completo
        </DropdownMenuItem>
        
        <DropdownMenuItem 
          onClick={handleEditProfile}
          className="text-foreground hover:bg-accent cursor-pointer"
        >
          <Settings className="mr-2 h-4 w-4" />
          Editar perfil
        </DropdownMenuItem>
        
        <DropdownMenuItem 
          onClick={handleUpgrade}
          className="text-foreground hover:bg-accent cursor-pointer"
        >
          <Crown className="mr-2 h-4 w-4 text-yellow-500" />
          Fazer upgrade
        </DropdownMenuItem>
        
        <DropdownMenuSeparator className="bg-border" />
        
        <DropdownMenuItem 
          onClick={handleLogout}
          className="text-red-600 hover:bg-red-50 dark:hover:bg-red-950 cursor-pointer"
        >
          <LogOut className="mr-2 h-4 w-4" />
          Sair
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
};

export default ProfileDropdown;
