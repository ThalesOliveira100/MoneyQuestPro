
import { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { powerUps, mockUser } from '@/data/mockData';
import { ShoppingCart, Coins, Zap, Package } from 'lucide-react';
import { toast } from '@/hooks/use-toast';

const Shop = () => {
  const [user, setUser] = useState(mockUser);

  const handlePurchase = (powerUp: any) => {
    if (user.coins >= powerUp.price) {
      setUser(prev => ({
        ...prev,
        coins: prev.coins - powerUp.price,
        powerUps: [...prev.powerUps, { ...powerUp, quantity: 1 }]
      }));
      
      toast({
        title: "Compra realizada!",
        description: `Você comprou ${powerUp.name} por ${powerUp.price} moedas.`,
      });
    } else {
      toast({
        title: "Moedas insuficientes",
        description: "Você não tem moedas suficientes para esta compra.",
        variant: "destructive",
      });
    }
  };

  const handleUsePowerUp = (powerUp: any) => {
    if (powerUp.quantity > 0) {
      powerUp.quantity -= 1;

      if (powerUp.quantity === 0) {
        setUser(prev => ({
          ...prev,
          powerUps: prev.powerUps.filter((pu) => pu.id !== powerUp.id)
        }));
      }

      toast({
        title: "Power-up usado!",
        description: `Você usou ${powerUp.name}.`,
      });
    } else {
      toast({
        title: "Nenhum power-up disponível",
        description: `Você não tem mais ${powerUp.name} para usar.`,
      });
    }
  };

  return (
    <div className="p-6 space-y-6">
      {/* Header */}
      <div className="text-center">
        <h1 className="text-3xl font-bold text-gray-900 mb-2">Loja MoneyQuest</h1>
        <p className="text-gray-600 mb-4">
          Use suas moedas para comprar power-ups que irão te ajudar nos estudos!
        </p>
        
        {/* User Coins */}
        <div className="inline-flex items-center bg-yellow-50 px-6 py-3 rounded-full">
          <Coins className="h-6 w-6 text-yellow-600 mr-2" />
          <span className="text-2xl font-bold text-yellow-700">{user.coins}</span>
          <span className="text-yellow-600 ml-1">moedas</span>
        </div>
      </div>

      {/* Featured Section */}
      <Card className="bg-gradient-to-r from-purple-500 to-pink-500 text-white">
        <CardContent className="pt-6">
          <div className="flex items-center justify-between">
            <div>
              <h2 className="text-2xl font-bold mb-2">Oferta Especial!</h2>
              <p className="text-white/90 mb-4">
                Power-ups em promoção por tempo limitado
              </p>
              <Badge className="bg-white text-purple-600">
                -20% OFF
              </Badge>
            </div>
            <div className="text-6xl opacity-20">
              🎁
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Power-ups Grid */}
      <div className="space-y-6">
        <h2 className="text-2xl font-bold text-gray-900 flex items-center">
          <Package className="h-6 w-6 mr-2" />
          Power-ups Disponíveis
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {powerUps.map((powerUp) => (
            <Card key={powerUp.id} className="transition-all hover:shadow-lg">
              <CardHeader className="text-center">
                <div className="text-4xl mb-2">{powerUp.icon}</div>
                <CardTitle className="text-lg">{powerUp.name}</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-gray-600 text-sm text-center">
                  {powerUp.description}
                </p>
                
                <div className="flex items-center justify-center space-x-2">
                  <Coins className="h-5 w-5 text-yellow-600" />
                  <span className="text-2xl font-bold text-gray-900">{powerUp.price}</span>
                </div>
                
                <Button 
                  className="w-full bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700"
                  onClick={() => handlePurchase(powerUp)}
                  disabled={user.coins < powerUp.price}
                >
                  {user.coins >= powerUp.price ? (
                    <>
                      <ShoppingCart className="h-4 w-4 mr-2" />
                      Comprar
                    </>
                  ) : (
                    'Moedas Insuficientes'
                  )}
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>

      {/* My Power-ups */}
      <div className="space-y-6">
        <h2 className="text-2xl font-bold text-gray-900 flex items-center">
          <Zap className="h-6 w-6 mr-2" />
          Meus Power-ups
        </h2>
        
        {user.powerUps.length === 0 ? (
          <Card>
            <CardContent className="text-center py-12">
              <div className="text-6xl mb-4">📦</div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">
                Nenhum power-up ainda
              </h3>
              <p className="text-gray-600">
                Compre power-ups para melhorar sua experiência de aprendizado!
              </p>
            </CardContent>
          </Card>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {user.powerUps.map((powerUp, index) => (
              <Card key={index} className="bg-green-50 border-green-200">
                <CardContent className="pt-6">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center">
                      <div className="text-2xl mr-3">{powerUp.icon}</div>
                      <div>
                        <h4 className="font-semibold">{powerUp.name}</h4>
                        <p className="text-sm text-gray-600">Quantidade: {powerUp.quantity}</p>
                      </div>
                    </div>
                    
                    <Button 
                      size="sm" 
                      variant="outline"
                      onClick={() => handleUsePowerUp(powerUp)}
                      >
                      Usar
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        )}
      </div>

      {/* How to earn coins */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center">
            <Coins className="h-5 w-5 mr-2" />
            Como Ganhar Moedas
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="text-center p-4 bg-blue-50 rounded-lg">
              <div className="text-3xl mb-2">📚</div>
              <h4 className="font-semibold">Completar Lições</h4>
              <p className="text-sm text-gray-600">10-20 moedas por lição</p>
            </div>
            <div className="text-center p-4 bg-green-50 rounded-lg">
              <div className="text-3xl mb-2">🎯</div>
              <h4 className="font-semibold">Fazer Quizzes</h4>
              <p className="text-sm text-gray-600">5-15 moedas por quiz</p>
            </div>
            <div className="text-center p-4 bg-yellow-50 rounded-lg">
              <div className="text-3xl mb-2">🏆</div>
              <h4 className="font-semibold">Conquistar Achievements</h4>
              <p className="text-sm text-gray-600">25-150 moedas</p>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default Shop;
