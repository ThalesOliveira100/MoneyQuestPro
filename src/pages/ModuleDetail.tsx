
import { useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { modules } from '@/data/mockData';
import LessonCard from '@/components/LessonCard';
import QuizModal from '@/components/QuizModal';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Progress } from '@/components/ui/progress';
import { ArrowLeft, Clock, Star, BookOpen, Play, X } from 'lucide-react';
import { cn } from '@/lib/utils';

const ModuleDetail = () => {
  const { moduleId } = useParams();
  const navigate = useNavigate();
  const [showQuiz, setShowQuiz] = useState(false);
  const [selectedLesson, setSelectedLesson] = useState<any>(null);
  const [watchingVideo, setWatchingVideo] = useState(false);
  const [videoCompleted, setVideoCompleted] = useState(false);

  const module = modules.find(m => m.id === moduleId);

  if (!module) {
    return (
      <div className="p-4 sm:p-6 text-center">
        <h1 className="text-xl sm:text-2xl font-bold text-gray-900 dark:text-white">Módulo não encontrado</h1>
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
    setWatchingVideo(true);
    setVideoCompleted(false);
    
    // Simular duração do vídeo - marcar como completado após o tempo
    setTimeout(() => {
      setVideoCompleted(true);
    }, 3000); // 3 segundos para simular o vídeo
  };

  const handleCloseVideo = () => {
    setWatchingVideo(false);
    setVideoCompleted(false);
  };

  const handleStartQuiz = () => {
    setWatchingVideo(false);
    setShowQuiz(true);
  };

  const handleQuizComplete = (score: number) => {
    console.log(`Quiz completed with score: ${score}/${selectedLesson.quiz.questions.length}`);
    setShowQuiz(false);
    setSelectedLesson(null);
    setVideoCompleted(false);
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
    <div className="p-4 sm:p-6 space-y-4 sm:space-y-6 bg-gray-50 dark:bg-gray-900 min-h-screen">
      {/* Header */}
      <div className="flex items-center mb-4 sm:mb-6">
        <Button 
          variant="ghost" 
          onClick={() => navigate('/modules')}
          className="mr-2 sm:mr-4"
          size="sm"
        >
          <ArrowLeft className="h-4 w-4 mr-1 sm:mr-2" />
          <span className="hidden sm:inline">Voltar</span>
        </Button>
      </div>

      {/* Module Info */}
      <div className={cn(
        "bg-gradient-to-r rounded-xl sm:rounded-2xl p-4 sm:p-6 lg:p-8 text-white",
        module.color
      )}>
        <div className="flex items-start justify-between">
          <div className="flex-1">
            <div className="text-3xl sm:text-4xl lg:text-5xl mb-3 sm:mb-4">{module.icon}</div>
            <h1 className="text-xl sm:text-2xl lg:text-3xl font-bold mb-2">{module.title}</h1>
            <p className="text-white/90 text-sm sm:text-base lg:text-lg mb-4 sm:mb-6 max-w-2xl">
              {module.description}
            </p>
            
            <div className="flex flex-wrap gap-3 sm:gap-4 lg:gap-6">
              <div className="flex items-center bg-white/20 px-2 sm:px-3 py-1 sm:py-2 rounded-full">
                <BookOpen className="h-3 w-3 sm:h-4 sm:w-4 mr-1 sm:mr-2" />
                <span className="text-xs sm:text-sm font-medium">{totalLessons} lições</span>
              </div>
              <div className="flex items-center bg-white/20 px-2 sm:px-3 py-1 sm:py-2 rounded-full">
                <Clock className="h-3 w-3 sm:h-4 sm:w-4 mr-1 sm:mr-2" />
                <span className="text-xs sm:text-sm font-medium">{formatDuration(totalDuration)}</span>
              </div>
              <div className="flex items-center bg-white/20 px-2 sm:px-3 py-1 sm:py-2 rounded-full">
                <Star className="h-3 w-3 sm:h-4 sm:w-4 mr-1 sm:mr-2" />
                <span className="text-xs sm:text-sm font-medium">{totalXp} XP total</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Progress Card */}
      <Card className="dark:bg-gray-800 dark:border-gray-700">
        <CardHeader className="pb-3 sm:pb-4">
          <CardTitle className="flex items-center justify-between text-base sm:text-lg dark:text-white">
            <span>Progresso do Módulo</span>
            <span className="text-lg sm:text-xl font-bold text-blue-600 dark:text-blue-400">{Math.round(progress)}%</span>
          </CardTitle>
        </CardHeader>
        <CardContent>
          <Progress value={progress} className="h-2 sm:h-3 mb-3 sm:mb-4" />
          <div className="flex justify-between text-xs sm:text-sm text-gray-600 dark:text-gray-400">
            <span>{completedLessons} de {totalLessons} lições completadas</span>
            <span>{totalLessons - completedLessons} restantes</span>
          </div>
        </CardContent>
      </Card>

      {/* Video Player quando assistindo */}
      {watchingVideo && selectedLesson && (
        <Card className="border-blue-200 bg-blue-50 dark:bg-blue-900/20 dark:border-blue-700">
          <CardContent className="p-4 sm:p-6">
            <div className="text-center">
              <div className="flex justify-between items-center mb-4">
                <h3 className="text-lg sm:text-xl font-semibold text-blue-900 dark:text-blue-100">
                  Assistindo: {selectedLesson.title}
                </h3>
                <Button
                  variant="ghost"
                  size="icon"
                  onClick={handleCloseVideo}
                  className="text-blue-600 dark:text-blue-400 hover:bg-blue-100 dark:hover:bg-blue-800"
                >
                  <X className="h-5 w-5" />
                </Button>
              </div>
              
              <div className="w-16 h-16 sm:w-20 sm:h-20 bg-blue-100 dark:bg-blue-800 rounded-full flex items-center justify-center mx-auto mb-4">
                <Play className="h-8 w-8 sm:h-10 sm:w-10 text-blue-600 dark:text-blue-400" />
              </div>
              
              <p className="text-blue-700 dark:text-blue-300 text-sm sm:text-base mb-4">
                {videoCompleted ? 'Vídeo concluído! Você pode começar o teste agora.' : 'Reproduzindo vídeo...'}
              </p>
              
              <div className="w-full bg-blue-200 dark:bg-blue-800 rounded-full h-2 mb-4">
                <div className={cn(
                  "bg-blue-600 dark:bg-blue-400 h-2 rounded-full transition-all duration-1000",
                  videoCompleted ? "w-full" : "w-3/4 animate-pulse"
                )}></div>
              </div>

              {videoCompleted && (
                <Button
                  onClick={handleStartQuiz}
                  className="bg-green-600 hover:bg-green-700 text-white"
                >
                  Começar o Teste
                </Button>
              )}
            </div>
          </CardContent>
        </Card>
      )}

      {/* Lessons */}
      <div className="space-y-4 sm:space-y-6">
        <h2 className="text-xl sm:text-2xl font-bold text-gray-900 dark:text-white">Lições</h2>
        
        {totalLessons === 0 ? (
          <Card className="dark:bg-gray-800 dark:border-gray-700">
            <CardContent className="text-center py-8 sm:py-12">
              <div className="text-4xl sm:text-6xl mb-4">🚀</div>
              <h3 className="text-lg sm:text-xl font-semibold text-gray-900 dark:text-white mb-2">
                Conteúdo em Desenvolvimento
              </h3>
              <p className="text-gray-600 dark:text-gray-400 mb-4 text-sm sm:text-base">
                Este módulo está sendo preparado com muito carinho para você!
              </p>
              <Button variant="outline" size="sm">
                Me Notificar Quando Estiver Pronto
              </Button>
            </CardContent>
          </Card>
        ) : (
          <div className="space-y-3 sm:space-y-4">
            {module.lessons.map((lesson, index) => (
              <div key={lesson.id} className="flex items-center space-x-3 sm:space-x-4">
                <div className="flex-shrink-0 w-6 h-6 sm:w-8 sm:h-8 bg-gray-100 dark:bg-gray-700 rounded-full flex items-center justify-center text-xs sm:text-sm font-semibold dark:text-white">
                  {index + 1}
                </div>
                <div className="flex-1">
                  <LessonCard 
                    lesson={lesson} 
                    onClick={() => handleLessonClick(lesson)}
                  />
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
