
import { useNavigate } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { ArrowLeft, Crown, Zap, Star, CheckCircle } from 'lucide-react';

const Upgrade = () => {
  const navigate = useNavigate();

  const proFeatures = [
    'Acesso ilimitado a todos os módulos',
    'Conteúdo exclusivo e avançado',
    'Mentoria personalizada',
    'Certificados de conclusão',
    'Simulador de investimentos',
    'Suporte prioritário',
    'Acesso antecipado a novos conteúdos',
    'Comunidade VIP de investidores'
  ];

  return (
    <div className="min-h-screen bg-background p-4 sm:p-6">
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <div className="flex items-center mb-6">
          <Button 
            variant="ghost" 
            onClick={() => navigate(-1)}
            className="mr-4"
            size="sm"
          >
            <ArrowLeft className="h-4 w-4 mr-2" />
            Voltar
          </Button>
        </div>

        {/* Hero Section */}
        <div className="text-center mb-8">
          <div className="w-20 h-20 bg-gradient-to-r from-yellow-400 to-yellow-600 rounded-full flex items-center justify-center mx-auto mb-4">
            <Crown className="h-10 w-10 text-white" />
          </div>
          <h1 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">
            MoneyQuest Pro
          </h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Acelere seu aprendizado em investimentos com recursos exclusivos e conteúdo premium
          </p>
        </div>

        {/* Status Card */}
        <Card className="mb-8 border-2 border-dashed border-muted-foreground/30">
          <CardContent className="pt-6">
            <div className="text-center">
              <div className="w-16 h-16 bg-muted/50 rounded-full flex items-center justify-center mx-auto mb-4">
                <Zap className="h-8 w-8 text-muted-foreground" />
              </div>
              <h2 className="text-2xl font-semibold text-foreground mb-2">
                Em Desenvolvimento
              </h2>
              <p className="text-muted-foreground mb-6">
                O MoneyQuest Pro ainda não está disponível, mas estamos trabalhando para 
                lançá-lo em breve com recursos incríveis!
              </p>
              <div className="bg-muted/30 rounded-lg p-4">
                <p className="text-sm text-muted-foreground">
                  <Star className="h-4 w-4 inline mr-1" />
                  Seja notificado quando o Pro estiver disponível
                </p>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Features Preview */}
        <Card>
          <CardHeader>
            <CardTitle className="text-center">
              O que você terá no MoneyQuest Pro
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {proFeatures.map((feature, index) => (
                <div key={index} className="flex items-center p-3 bg-muted/20 rounded-lg">
                  <CheckCircle className="h-5 w-5 text-green-500 mr-3 flex-shrink-0" />
                  <span className="text-sm">{feature}</span>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* CTA Section */}
        <div className="text-center mt-8">
          <Button size="lg" disabled className="mr-4">
            Em Breve
          </Button>
          <Button variant="outline" size="lg">
            Me Notificar
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Upgrade;
