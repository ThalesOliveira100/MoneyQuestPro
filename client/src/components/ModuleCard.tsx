
import { Module } from '@/types';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Progress } from '@/components/ui/progress';
import { Lock, CheckCircle, Play } from 'lucide-react';
import { cn } from '@/lib/utils';

interface ModuleCardProps {
  module: Module;
  onClick: () => void;
}

const ModuleCard = ({ module, onClick }: ModuleCardProps) => {
  const completedLessons = module.lessons.filter(lesson => lesson.completed).length;
  const totalLessons = module.lessons.length;
  const progress = totalLessons > 0 ? (completedLessons / totalLessons) * 100 : 0;

  return (
    <Card className={cn(
      "relative overflow-hidden transition-all duration-300 hover:shadow-lg cursor-pointer",
      !module.unlocked && "opacity-60"
    )} onClick={module.unlocked ? onClick : undefined}>
      <div className={cn(
        "absolute inset-0 bg-gradient-to-br opacity-5",
        module.color
      )} />
      
      <CardHeader className="relative">
        <div className="flex items-start justify-between">
          <div className="flex items-center">
            <div className={cn(
              "w-12 h-12 rounded-lg flex items-center justify-center text-2xl mr-4 bg-gradient-to-br text-white",
              module.color
            )}>
              {module.icon}
            </div>
            <div>
              <CardTitle className="text-lg font-semibold">{module.title}</CardTitle>
              <CardDescription className="mt-1">{module.description}</CardDescription>
            </div>
          </div>
          
          <div className="flex flex-col items-center">
            {!module.unlocked ? (
              <Lock className="h-6 w-6 text-gray-400" />
            ) : module.completed ? (
              <CheckCircle className="h-6 w-6 text-green-500" />
            ) : (
              <Play className="h-6 w-6 text-blue-500" />
            )}
          </div>
        </div>
      </CardHeader>

      <CardContent className="relative">
        {module.unlocked && (
          <>
            <div className="flex justify-between items-center mb-2">
              <span className="text-sm text-gray-600">
                Progresso: {completedLessons}/{totalLessons} lições
              </span>
              <span className="text-sm font-semibold text-blue-600">
                {Math.round(progress)}%
              </span>
            </div>
            
            <Progress value={progress} className="h-2 mb-4" />
            
            <div className="flex justify-between items-center">
              <div className="text-sm text-gray-500">
                {totalLessons} {totalLessons === 1 ? 'lição' : 'lições'}
              </div>
              <Button 
                size="sm" 
                className={cn(
                  "bg-gradient-to-r text-white",
                  module.color
                )}
                disabled={!module.unlocked}
              >
                {progress > 0 ? 'Continuar' : 'Começar'}
              </Button>
            </div>
          </>
        )}
        
        {!module.unlocked && (
          <div className="text-center py-4">
            <p className="text-sm text-gray-500 mb-2">
              Complete os módulos anteriores para desbloquear
            </p>
            <Button disabled size="sm">
              Bloqueado
            </Button>
          </div>
        )}
      </CardContent>
    </Card>
  );
};

export default ModuleCard;
