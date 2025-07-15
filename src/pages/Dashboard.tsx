
import { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Progress } from '@/components/ui/progress';
import { mockUser, modules, achievements } from '@/data/mockData';
import { BookOpen, Trophy, Coins, Zap, TrendingUp, Clock, Target } from 'lucide-react';

const Dashboard = () => {
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

  const completedModules = modules.filter(m => m.completed).length;
  const totalLessons = modules.reduce((acc, module) => acc + module.lessons.length, 0);
  const completedLessons = user.completedLessons.length;

  return (
    <div className="p-6 space-y-6">
      {/* Welcome Section */}
      <div className="bg-gradient-to-r from-blue-500 to-purple-600 rounded-2xl p-6 text-white">
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-2xl font-bold mb-2">Olá, {user.name}! 👋</h1>
            <p className="text-blue-100 mb-4">
              Continue sua jornada de aprendizado em investimentos
            </p>
            <div className="flex items-center space-x-4">
              <div className="flex items-center bg-white bg-opacity-20 px-3 py-1 rounded-full">
                <Zap className="h-4 w-4 mr-1" />
                <span className="text-sm font-semibold">Sequência: {user.streak} dias</span>
              </div>
              <div className="flex items-center bg-white bg-opacity-20 px-3 py-1 rounded-full">
                <Trophy className="h-4 w-4 mr-1" />
                <span className="text-sm font-semibold">Nível {user.level}</span>
              </div>
            </div>
          </div>
          <div className="text-6xl opacity-20">
            {user.avatar}
          </div>
        </div>
      </div>

      {/* Stats Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">XP Total</CardTitle>
            <Zap className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{user.totalXp}</div>
            <p className="text-xs text-muted-foreground">
              {getXpToNextLevel()} XP para o próximo nível
            </p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Moedas</CardTitle>
            <Coins className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-yellow-600">{user.coins}</div>
            <p className="text-xs text-muted-foreground">
              Ganhe mais assistindo lições
            </p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Módulos</CardTitle>
            <BookOpen className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{completedModules}/{modules.length}</div>
            <p className="text-xs text-muted-foreground">
              Módulos completados
            </p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Lições</CardTitle>
            <Target className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{completedLessons}/{totalLessons}</div>
            <p className="text-xs text-muted-foreground">
              Lições completadas
            </p>
          </CardContent>
        </Card>
      </div>

      {/* Progress Section */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Level Progress */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center">
              <TrendingUp className="h-5 w-5 mr-2" />
              Progresso do Nível
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="flex justify-between items-center">
              <span className="text-sm font-medium">Nível {user.level}</span>
              <span className="text-sm text-muted-foreground">{user.xp} / {(user.level + 1) * 500} XP</span>
            </div>
            <Progress value={getXpProgress()} className="h-3" />
            <p className="text-sm text-muted-foreground">
              Continue estudando para alcançar o nível {user.level + 1}!
            </p>
          </CardContent>
        </Card>

        {/* Quick Actions */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center">
              <Clock className="h-5 w-5 mr-2" />
              Ações Rápidas
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-3">
            <Button className="w-full bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700">
              Continuar Estudando
            </Button>
            <Button variant="outline" className="w-full">
              Ver Ranking
            </Button>
            <Button variant="outline" className="w-full">
              Visitar Loja
            </Button>
          </CardContent>
        </Card>
      </div>

      {/* Recent Achievements */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center">
            <Trophy className="h-5 w-5 mr-2" />
            Conquistas Recentes
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {achievements.filter(a => a.unlocked).map((achievement) => (
              <div key={achievement.id} className="flex items-center p-3 bg-yellow-50 rounded-lg">
                <div className="text-2xl mr-3">{achievement.icon}</div>
                <div>
                  <h4 className="font-semibold text-sm">{achievement.title}</h4>
                  <p className="text-xs text-muted-foreground">{achievement.description}</p>
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default Dashboard;
