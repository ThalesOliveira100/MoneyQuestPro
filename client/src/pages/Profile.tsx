
import { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Progress } from '@/components/ui/progress';
import { Badge } from '@/components/ui/badge';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { mockUser, achievements, modules } from '@/data/mockData';
import { useNavigate } from 'react-router-dom';
import { toast } from '@/hooks/use-toast';
import { 
  User, 
  Trophy, 
  Target, 
  Calendar, 
  Zap, 
  BookOpen, 
  Coins,
  Edit,
  Settings,
  Share2
} from 'lucide-react';

const Profile = () => {
  const [user] = useState(mockUser);

  const getXpProgress = () => {
    const currentLevelXp = user.level * 500;
    const nextLevelXp = (user.level + 1) * 500;
    const progress = ((user.xp) / (nextLevelXp - currentLevelXp)) * 100;
    return Math.min(progress, 100);
  };

  const getXpToNextLevel = () => {
    const nextLevelXp = (user.level + 1) * 500;
    return nextLevelXp - user.totalXp;
  };

  const navigate = useNavigate();
  const [isOpen, setIsOpen] = useState(false);

  const handleViewProfileEdit = () => {
    navigate('/profile/edit');
    setIsOpen(false);
  }

  const handlerNotifyMe = () => {
    toast({
      title: "Notificação ativada!",
      description: "Você será notificado quando as configurações estiverem disponíveis.",
    });
  }

  const completedModules = modules.filter(m => m.completed).length;
  const totalLessons = modules.reduce((acc, module) => acc + module.lessons.length, 0);
  const completedLessons = user.completedLessons.length;

  const stats = [
    { label: 'XP Total', value: user.totalXp, icon: Zap, color: 'text-yellow-600' },
    { label: 'Nível Atual', value: user.level, icon: Trophy, color: 'text-blue-600' },
    { label: 'Moedas', value: user.coins, icon: Coins, color: 'text-green-600' },
    { label: 'Sequência', value: `${user.streak} dias`, icon: Calendar, color: 'text-red-600' },
  ];

  return (
    <div className="p-6 space-y-6">
      {/* Profile Header */}
      <Card className="bg-gradient-to-r from-blue-500 to-purple-600 text-white">
        <CardContent className="pt-6">
          <div className="flex items-center justify-between">
            <div className="flex items-center">
              <div className="w-20 h-20 bg-white/20 rounded-full flex items-center justify-center text-4xl mr-6">
                {user.avatar}
              </div>
              <div>
                <h1 className="text-3xl font-bold mb-2">{user.name}</h1>
                <div className="flex items-center space-x-4">
                  <Badge className="bg-white/20 text-white">
                    Nível {user.level}
                  </Badge>
                  <Badge className="bg-white/20 text-white">
                    {user.totalXp} XP
                  </Badge>
                </div>
                <p className="text-white/80 mt-2">
                  Estudante dedicado de investimentos digitais
                </p>
              </div>
            </div>
            <div className="flex flex-col space-y-2">
              <Button 
                variant="outline" 
                className="bg-white/10 border-white/20 text-white hover:bg-white/20"
                onClick={handleViewProfileEdit}
                >
                <Edit className="h-4 w-4 mr-2" />
                Editar
              </Button>
              {/* <Button variant="outline" className="bg-white/10 border-white/20 text-white hover:bg-white/20">
                <Share2 className="h-4 w-4 mr-2" />
                Compartilhar
              </Button> */}
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Stats Grid */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        {stats.map((stat, index) => (
          <Card key={index}>
            <CardContent className="pt-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-gray-600">{stat.label}</p>
                  <p className="text-2xl font-bold">{stat.value}</p>
                </div>
                <stat.icon className={`h-8 w-8 ${stat.color}`} />
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      {/* Level Progress */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center">
            <Target className="h-5 w-5 mr-2" />
            Progresso do Nível
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            <div className="flex justify-between items-center">
              <span className="text-lg font-semibold">Nível {user.level}</span>
              <span className="text-lg font-semibold">Nível {user.level + 1}</span>
            </div>
            <Progress value={getXpProgress()} className="h-4" />
            <div className="flex justify-between text-sm text-gray-600">
              <span>{user.xp} XP</span>
              <span>{getXpToNextLevel()} XP para o próximo nível</span>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Tabs Section */}
      <Tabs defaultValue="achievements" className="space-y-6">
        <TabsList className="grid w-full grid-cols-3">
          <TabsTrigger value="achievements">Conquistas</TabsTrigger>
          <TabsTrigger value="progress">Progresso</TabsTrigger>
          <TabsTrigger value="settings">Configurações</TabsTrigger>
        </TabsList>

        <TabsContent value="achievements" className="space-y-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {achievements.map((achievement) => (
              <Card key={achievement.id} className={achievement.unlocked ? 'bg-yellow-50 border-yellow-200' : 'bg-gray-50'}>
                <CardContent className="pt-6">
                  <div className="text-center">
                    <div className="text-4xl mb-3">{achievement.icon}</div>
                    <h3 className="font-semibold mb-1">{achievement.title}</h3>
                    <p className="text-sm text-gray-600 mb-3">{achievement.description}</p>
                    <div className="flex justify-center space-x-4 text-sm">
                      <span className="flex items-center">
                        <Zap className="h-4 w-4 mr-1 text-yellow-500" />
                        {achievement.xpReward} XP
                      </span>
                      <span className="flex items-center">
                        <Coins className="h-4 w-4 mr-1 text-yellow-600" />
                        {achievement.coinReward}
                      </span>
                    </div>
                    {achievement.unlocked && (
                      <Badge className="mt-2 bg-green-100 text-green-800">
                        Desbloqueado
                      </Badge>
                    )}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </TabsContent>

        <TabsContent value="progress" className="space-y-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Modules Progress */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center">
                  <BookOpen className="h-5 w-5 mr-2" />
                  Módulos
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="text-center">
                    <div className="text-3xl font-bold text-blue-600">{completedModules}/{modules.length}</div>
                    <p className="text-gray-600">Módulos completados</p>
                  </div>
                  <Progress value={(completedModules / modules.length) * 100} className="h-2" />
                </div>
              </CardContent>
            </Card>

            {/* Lessons Progress */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center">
                  <Target className="h-5 w-5 mr-2" />
                  Lições
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="text-center">
                    <div className="text-3xl font-bold text-green-600">{completedLessons}/{totalLessons}</div>
                    <p className="text-gray-600">Lições completadas</p>
                  </div>
                  <Progress value={(completedLessons / totalLessons) * 100} className="h-2" />
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Learning Streak */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center">
                <Calendar className="h-5 w-5 mr-2" />
                Sequência de Estudos
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-center">
                <div className="text-5xl mb-4">🔥</div>
                <div className="text-4xl font-bold text-red-600 mb-2">{user.streak} dias</div>
                <p className="text-gray-600 mb-4">Continue estudando para manter a sequência!</p>
                <div className="flex justify-center space-x-2">
                  {[...Array(7)].map((_, i) => (
                    <div
                      key={i}
                      className={`w-8 h-8 rounded-full flex items-center justify-center text-sm font-semibold ${
                        i < user.streak ? 'bg-red-500 text-white' : 'bg-gray-200 text-gray-400'
                      }`}
                    >
                      {i + 1}
                    </div>
                  ))}
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="settings" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center">
                <Settings className="h-5 w-5 mr-2" />
                Configurações da Conta
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="text-center py-12">
                <div className="text-6xl mb-4">⚙️</div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">
                  Configurações em Desenvolvimento
                </h3>
                <p className="text-gray-600 mb-4">
                  As configurações de perfil estarão disponíveis em breve!
                </p>
                <Button variant="outline" onClick={handlerNotifyMe}>
                  Me Notificar
                </Button>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  );
};

export default Profile;
