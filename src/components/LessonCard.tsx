
import { Lesson } from '@/types';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Play, CheckCircle, Clock, Star, Coins } from 'lucide-react';
import { cn } from '@/lib/utils';

interface LessonCardProps {
  lesson: Lesson;
  onClick: () => void;
}

const LessonCard = ({ lesson, onClick }: LessonCardProps) => {
  const formatDuration = (seconds: number) => {
    const minutes = Math.floor(seconds / 60);
    return `${minutes} min`;
  };

  return (
    <Card className="transition-all duration-300 hover:shadow-md cursor-pointer" onClick={onClick}>
      <CardHeader className="pb-2 sm:pb-3">
        <div className="flex items-start justify-between">
          <div className="flex-1 pr-2 sm:pr-4">
            <CardTitle className="text-base sm:text-lg font-semibold flex items-center">
              <span className="line-clamp-2">{lesson.title}</span>
              {lesson.completed && (
                <CheckCircle className="h-4 w-4 sm:h-5 sm:w-5 text-green-500 ml-2 flex-shrink-0" />
              )}
            </CardTitle>
            <CardDescription className="mt-1 text-xs sm:text-sm line-clamp-2">
              {lesson.description}
            </CardDescription>
          </div>
          
          <div className="flex-shrink-0">
            {lesson.completed ? (
              <div className="w-10 h-10 sm:w-12 sm:h-12 bg-green-100 rounded-full flex items-center justify-center">
                <CheckCircle className="h-5 w-5 sm:h-6 sm:w-6 text-green-600" />
              </div>
            ) : (
              <div className="w-10 h-10 sm:w-12 sm:h-12 bg-blue-100 rounded-full flex items-center justify-center">
                <Play className="h-5 w-5 sm:h-6 sm:w-6 text-blue-600" />
              </div>
            )}
          </div>
        </div>
      </CardHeader>

      <CardContent className="pt-0">
        <div className="flex flex-wrap items-center justify-between mb-3 sm:mb-4 gap-2">
          <div className="flex items-center space-x-3 sm:space-x-4 text-xs sm:text-sm text-gray-600">
            <div className="flex items-center">
              <Clock className="h-3 w-3 sm:h-4 sm:w-4 mr-1" />
              <span>{formatDuration(lesson.duration)}</span>
            </div>
            <div className="flex items-center">
              <Star className="h-3 w-3 sm:h-4 sm:w-4 mr-1 text-yellow-500" />
              <span>{lesson.xpReward} XP</span>
            </div>
            <div className="flex items-center">
              <Coins className="h-3 w-3 sm:h-4 sm:w-4 mr-1 text-yellow-600" />
              <span>{lesson.coinReward}</span>
            </div>
          </div>
        </div>

        <Button 
          className={cn(
            "w-full text-sm sm:text-base",
            lesson.completed 
              ? "bg-green-600 hover:bg-green-700" 
              : "bg-blue-600 hover:bg-blue-700"
          )}
          size="sm"
        >
          {lesson.completed ? 'Revisar' : 'Assistir'}
        </Button>
      </CardContent>
    </Card>
  );
};

export default LessonCard;
