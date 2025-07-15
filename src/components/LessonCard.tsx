
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
      <CardHeader className="pb-3">
        <div className="flex items-start justify-between">
          <div className="flex-1">
            <CardTitle className="text-lg font-semibold flex items-center">
              {lesson.title}
              {lesson.completed && (
                <CheckCircle className="h-5 w-5 text-green-500 ml-2" />
              )}
            </CardTitle>
            <CardDescription className="mt-1">{lesson.description}</CardDescription>
          </div>
          
          <div className="ml-4">
            {lesson.completed ? (
              <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center">
                <CheckCircle className="h-6 w-6 text-green-600" />
              </div>
            ) : (
              <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center">
                <Play className="h-6 w-6 text-blue-600" />
              </div>
            )}
          </div>
        </div>
      </CardHeader>

      <CardContent>
        <div className="flex items-center justify-between mb-4">
          <div className="flex items-center space-x-4 text-sm text-gray-600">
            <div className="flex items-center">
              <Clock className="h-4 w-4 mr-1" />
              {formatDuration(lesson.duration)}
            </div>
            <div className="flex items-center">
              <Star className="h-4 w-4 mr-1 text-yellow-500" />
              {lesson.xpReward} XP
            </div>
            <div className="flex items-center">
              <Coins className="h-4 w-4 mr-1 text-yellow-600" />
              {lesson.coinReward}
            </div>
          </div>
        </div>

        <Button 
          className={cn(
            "w-full",
            lesson.completed 
              ? "bg-green-600 hover:bg-green-700" 
              : "bg-blue-600 hover:bg-blue-700"
          )}
        >
          {lesson.completed ? 'Revisar' : 'Assistir'}
        </Button>
      </CardContent>
    </Card>
  );
};

export default LessonCard;
