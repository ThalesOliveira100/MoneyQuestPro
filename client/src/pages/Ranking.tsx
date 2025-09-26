
import { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Badge } from '@/components/ui/badge';
import { weeklyRanking, mockUser } from '@/data/mockData';
import { Trophy, Medal, Crown, TrendingUp, Users } from 'lucide-react';

const Ranking = () => {
  const [activeTab, setActiveTab] = useState('weekly');

  const getRankIcon = (position: number) => {
    switch (position) {
      case 1:
        return <Crown className="h-6 w-6 text-yellow-500" />;
      case 2:
        return <Medal className="h-6 w-6 text-gray-400" />;
      case 3:
        return <Medal className="h-6 w-6 text-yellow-600" />;
      default:
        return <div className="w-6 h-6 flex items-center justify-center text-sm font-bold text-gray-500">#{position}</div>;
    }
  };

  const getBadgeColor = (position: number) => {
    switch (position) {
      case 1:
        return "bg-gradient-to-r from-yellow-400 to-yellow-600";
      case 2:
        return "bg-gradient-to-r from-gray-300 to-gray-500";
      case 3:
        return "bg-gradient-to-r from-yellow-600 to-yellow-800";
      default:
        return "bg-gray-100";
    }
  };

  return (
    <div className="p-6 space-y-6">
      {/* Header */}
      <div className="text-center">
        <h1 className="text-3xl font-bold text-gray-900 mb-2">Ranking MoneyQuest</h1>
        <p className="text-gray-600">
          Compita com outros estudantes e suba no ranking!
        </p>
      </div>

      {/* User's Position */}
      <Card className="bg-gradient-to-r from-blue-500 to-purple-600 text-white">
        <CardContent className="pt-6">
          <div className="flex items-center justify-between">
            <div className="flex items-center">
              <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center text-2xl mr-4">
                {mockUser.avatar}
              </div>
              <div>
                <h3 className="font-semibold text-lg">{mockUser.name}</h3>
                <p className="text-white/80">Sua posição atual</p>
              </div>
            </div>
            <div className="text-right">
              <div className="flex items-center mb-1">
                <Trophy className="h-5 w-5 mr-2" />
                <span className="text-2xl font-bold">#1</span>
              </div>
              <p className="text-white/80 text-sm">{mockUser.xp} XP</p>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Tabs */}
      <Tabs value={activeTab} onValueChange={setActiveTab}>
        <TabsList className="grid w-full grid-cols-2">
          <TabsTrigger value="weekly">Semanal</TabsTrigger>
          <TabsTrigger value="monthly">Mensal</TabsTrigger>
        </TabsList>

        <TabsContent value="weekly" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center">
                <TrendingUp className="h-5 w-5 mr-2" />
                Ranking Semanal
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {weeklyRanking.map((user) => (
                  <div 
                    key={user.id}
                    className={`flex items-center justify-between p-4 rounded-lg transition-all hover:shadow-md ${
                      user.id === mockUser.id ? 'bg-blue-50 border-2 border-blue-200' : 'bg-gray-50'
                    }`}
                  >
                    <div className="flex items-center">
                      <div className="mr-4">
                        {getRankIcon(user.position)}
                      </div>
                      <div className="w-10 h-10 rounded-full flex items-center justify-center text-lg mr-4 bg-gradient-to-r from-blue-500 to-purple-500 text-white">
                        {user.avatar}
                      </div>
                      <div>
                        <h4 className="font-semibold flex items-center">
                          {user.name}
                          {user.id === mockUser.id && (
                            <Badge variant="secondary" className="ml-2">Você</Badge>
                          )}
                        </h4>
                        <p className="text-sm text-gray-600">Nível {user.level}</p>
                      </div>
                    </div>
                    <div className="text-right">
                      <div className="font-bold text-lg">{user.xp} XP</div>
                      <div className={`text-xs px-2 py-1 rounded-full text-white ${getBadgeColor(user.position)}`}>
                        #{user.position}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="monthly" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center">
                <Users className="h-5 w-5 mr-2" />
                Ranking Mensal
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-center py-12">
                <div className="text-6xl mb-4">🏆</div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">
                  Ranking em Construção
                </h3>
                <p className="text-gray-600 mb-4">
                  O ranking mensal estará disponível em breve!
                </p>
                <Button variant="outline">
                  Me Notificar
                </Button>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>

      {/* Rewards Info */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center">
            <Trophy className="h-5 w-5 mr-2" />
            Recompensas do Ranking
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="text-center p-4 bg-yellow-50 rounded-lg">
              <Crown className="h-8 w-8 text-yellow-500 mx-auto mb-2" />
              <h4 className="font-semibold">1º Lugar</h4>
              <p className="text-sm text-gray-600">500 moedas + badge exclusivo</p>
            </div>
            <div className="text-center p-4 bg-gray-50 rounded-lg">
              <Medal className="h-8 w-8 text-gray-400 mx-auto mb-2" />
              <h4 className="font-semibold">2º Lugar</h4>
              <p className="text-sm text-gray-600">300 moedas + badge especial</p>
            </div>
            <div className="text-center p-4 bg-yellow-50 rounded-lg">
              <Medal className="h-8 w-8 text-yellow-600 mx-auto mb-2" />
              <h4 className="font-semibold">3º Lugar</h4>
              <p className="text-sm text-gray-600">200 moedas + badge bronze</p>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default Ranking;
