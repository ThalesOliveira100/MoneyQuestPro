
import { useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { modules } from '@/data/mockData';
import LessonCard from '@/components/LessonCard';
import QuizModal from '@/components/QuizModal';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Progress } from '@/components/ui/progress';
import { ArrowLeft, Clock, Star, Users, BookOpen } from 'lucide-react';
import { cn } from '@/lib/utils';

const ModuleDetail = () => {
  const { moduleId } = useParams();
  const navigate = useNavigate();
  const [showQuiz, setShowQuiz] = useState(false);
  const [selectedLesson, setSelectedLesson] = useState<any>(null);

  const module = modules.find(m => m.id === moduleId);

  if (!module) {
    return (
      <div className="p-6 text-center">
        <h1 className="text-2xl font-bold text-gray-900">Módulo não encontrado</h1>
        <Button onClick={() => navigate('/modules')} className="mt-4">
          Voltar para Módulos
        </Button>
      </div>
    );
  }

  const completedLessons = module.lessons.filter(lesson => lesson.completed).length;
  const totalLessons = module.lessons.length;
  const progress = totalLessons > 0 ? (completedLessons / totalLessons) * 100 : 0;
  const totalDuration = module.lessons.reduce((acc, lesson) => acc + lesson.duration, 0);
  const totalXp = module.lessons.reduce((acc, lesson) => acc + lesson.xpReward, 0);

  const handleLessonClick = (lesson: any) => {
    setSelectedLesson(lesson);
    // Simulate watching video and then show quiz
    setTimeout(() => {
      setShowQuiz(true);
    }, 1000);
  };

  const handleQuizComplete = (score: number) => {
    console.log(`Quiz completed with score: ${score}/${selectedLesson.quiz.questions.length}`);
    setShowQuiz(false);
    setSelectedLesson(null);
    // Here you would update the lesson as completed
  };

  const formatDuration = (seconds: number) => {
    const hours = Math.floor(seconds / 3600);
    const minutes = Math.floor((seconds % 3600) / 60);
    if (hours > 0) {
      return `${hours}h ${minutes}min`;
    }
    return `${minutes} min`;
  };

  return (
    <div className="p-6 space-y-6">
      {/* Header */}
      <div className="flex items-center mb-6">
        <Button 
          variant="ghost" 
          onClick={() => navigate('/modules')}
          className="mr-4"
        >
          <ArrowLeft className="h-4 w-4 mr-2" />
          Voltar
        </Button>
      </div>

      {/* Module Info */}
      <div className={cn(
        "bg-gradient-to-r rounded-2xl p-8 text-white",
        module.color
      )}>
        <div className="flex items-start justify-between">
          <div>
            <div className="text-5xl mb-4">{module.icon}</div>
            <h1 className="text-3xl font-bold mb-2">{module.title}</h1>
            <p className="text-white/90 text-lg mb-6 max-w-2xl">
              {module.description}
            </p>
            
            <div className="flex flex-wrap gap-6">
              <div className="flex items-center bg-white/20 px-3 py-2 rounded-full">
                <BookOpen className="h-4 w-4 mr-2" />
                <span className="text-sm font-medium">{totalLessons} lições</span>
              </div>
              <div className="flex items-center bg-white/20 px-3 py-2 rounded-full">
                <Clock className="h-4 w-4 mr-2" />
                <span className="text-sm font-medium">{formatDuration(totalDuration)}</span>
              </div>
              <div className="flex items-center bg-white/20 px-3 py-2 rounded-full">
                <Star className="h-4 w-4 mr-2" />
                <span className="text-sm font-medium">{totalXp} XP total</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Progress Card */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center justify-between">
            <span>Progresso do Módulo</span>
            <span className="text-lg font-bold text-blue-600">{Math.round(progress)}%</span>
          </CardTitle>
        </CardHeader>
        <CardContent>
          <Progress value={progress} className="h-3 mb-4" />
          <div className="flex justify-between text-sm text-gray-600">
            <span>{completedLessons} de {totalLessons} lições completadas</span>
            <span>{totalLessons - completedLessons} restantes</span>
          </div>
        </CardContent>
      </Card>

      {/* Lessons */}
      <div className="space-y-6">
        <h2 className="text-2xl font-bold text-gray-900">Lições</h2>
        
        {totalLessons === 0 ? (
          <Card>
            <CardContent className="text-center py-12">
              <div className="text-6xl mb-4">🚀</div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">
                Conteúdo em Desenvolvimento
              </h3>
              <p className="text-gray-600 mb-4">
                Este módulo está sendo preparado com muito carinho para você!
              </p>
              <Button variant="outline">
                Me Notificar Quando Estiver Pronto
              </Button>
            </CardContent>
          </Card>
        ) : (
          <div className="grid gap-4">
            {module.lessons.map((lesson, index) => (
              <div key={lesson.id} className="flex items-center space-x-4">
                <div className="flex-shrink-0 w-8 h-8 bg-gray-100 rounded-full flex items-center justify-center text-sm font-semibold">
                  {index + 1}
                </div>
                <div className="flex-1">
                  <LessonCard lesson={lesson} onClick={() => handleLessonClick(lesson)} />
                </div>
              </div>
            ))}
          </div>
        )}
      </div>

      {/* Quiz Modal */}
      {showQuiz && selectedLesson && (
        <QuizModal
          isOpen={showQuiz}
          onClose={() => setShowQuiz(false)}
          quiz={selectedLesson.quiz}
          onComplete={handleQuizComplete}
        />
      )}
    </div>
  );
};

export default ModuleDetail;
