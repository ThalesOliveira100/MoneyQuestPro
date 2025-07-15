
import { Module, User, Achievement, PowerUp, RankingUser } from '@/types';

export const mockUser: User = {
  id: "1",
  name: "João Silva",
  avatar: "👨‍💼",
  level: 3,
  xp: 450,
  totalXp: 1250,
  coins: 280,
  streak: 7,
  completedModules: ["fundamentos"],
  completedLessons: ["intro-investimentos", "risco-retorno", "diversificacao"],
  achievements: [],
  powerUps: []
};

export const modules: Module[] = [
  {
    id: "fundamentos",
    title: "Fundamentos de Investimentos",
    description: "Aprenda os conceitos básicos do mundo dos investimentos",
    icon: "📚",
    color: "from-blue-500 to-blue-600",
    unlocked: true,
    completed: false,
    lessons: [
      {
        id: "intro-investimentos",
        title: "Introdução aos Investimentos",
        description: "O que são investimentos e por que investir",
        videoUrl: "/videos/intro.mp4",
        duration: 300,
        xpReward: 50,
        coinReward: 10,
        completed: true,
        quiz: {
          id: "quiz-intro",
          questions: [
            {
              id: "q1",
              question: "Qual a principal diferença entre poupança e investimentos?",
              options: [
                "Não há diferença",
                "Investimentos têm maior potencial de retorno",
                "Poupança é mais arriscada",
                "Investimentos são mais seguros"
              ],
              correctAnswer: 1,
              explanation: "Investimentos geralmente oferecem maior potencial de retorno, mas com maior risco."
            }
          ]
        }
      },
      {
        id: "risco-retorno",
        title: "Risco vs Retorno",
        description: "Entenda a relação fundamental entre risco e retorno",
        videoUrl: "/videos/risco-retorno.mp4",
        duration: 420,
        xpReward: 75,
        coinReward: 15,
        completed: true,
        quiz: {
          id: "quiz-risco",
          questions: [
            {
              id: "q2",
              question: "Qual é a relação entre risco e retorno?",
              options: [
                "Maior risco, menor retorno",
                "Não há relação",
                "Maior risco, maior potencial de retorno",
                "Menor risco, maior retorno"
              ],
              correctAnswer: 2,
              explanation: "Geralmente, investimentos de maior risco oferecem maior potencial de retorno para compensar o risco assumido."
            }
          ]
        }
      }
    ]
  },
  {
    id: "criptomoedas",
    title: "Criptomoedas",
    description: "Descubra o mundo das moedas digitais",
    icon: "₿",
    color: "from-orange-500 to-orange-600",
    unlocked: true,
    completed: false,
    lessons: [
      {
        id: "intro-crypto",
        title: "O que são Criptomoedas",
        description: "Entenda os fundamentos das moedas digitais",
        videoUrl: "/videos/crypto-intro.mp4",
        duration: 480,
        xpReward: 100,
        coinReward: 20,
        completed: false,
        quiz: {
          id: "quiz-crypto",
          questions: [
            {
              id: "q3",
              question: "O que é Bitcoin?",
              options: [
                "Uma empresa de tecnologia",
                "Uma criptomoeda descentralizada",
                "Um banco digital",
                "Uma rede social"
              ],
              correctAnswer: 1,
              explanation: "Bitcoin é uma criptomoeda descentralizada que funciona em uma rede peer-to-peer."
            }
          ]
        }
      }
    ]
  },
  {
    id: "lci-lca",
    title: "LCI/LCA",
    description: "Letras de Crédito Imobiliário e do Agronegócio",
    icon: "🏠",
    color: "from-green-500 to-green-600",
    unlocked: false,
    completed: false,
    lessons: []
  },
  {
    id: "fiis",
    title: "Fundos Imobiliários",
    description: "Invista no mercado imobiliário através de FIIs",
    icon: "🏢",
    color: "from-purple-500 to-purple-600",
    unlocked: false,
    completed: false,
    lessons: []
  },
  {
    id: "fintechs",
    title: "Fintechs",
    description: "Tecnologia financeira e novos players do mercado",
    icon: "💳",
    color: "from-pink-500 to-pink-600",
    unlocked: false,
    completed: false,
    lessons: []
  },
  {
    id: "bolsa-acoes",
    title: "Bolsa de Valores e Ações",
    description: "Como funciona a bolsa e como investir em ações",
    icon: "📈",
    color: "from-red-500 to-red-600",
    unlocked: false,
    completed: false,
    lessons: []
  }
];

export const achievements: Achievement[] = [
  {
    id: "first-lesson",
    title: "Primeira Lição",
    description: "Complete sua primeira lição",
    icon: "🎯",
    xpReward: 50,
    coinReward: 25,
    unlocked: true
  },
  {
    id: "week-streak",
    title: "Sequência de 7 dias",
    description: "Estude por 7 dias consecutivos",
    icon: "🔥",
    xpReward: 200,
    coinReward: 100,
    unlocked: true
  },
  {
    id: "module-master",
    title: "Mestre do Módulo",
    description: "Complete um módulo inteiro",
    icon: "👑",
    xpReward: 300,
    coinReward: 150,
    unlocked: false
  }
];

export const powerUps: PowerUp[] = [
  {
    id: "double-xp",
    name: "XP Duplo",
    description: "Dobra o XP ganho na próxima lição",
    icon: "⚡",
    price: 50,
    effect: "double_xp",
    quantity: 0
  },
  {
    id: "hint-master",
    name: "Dica Mestra",
    description: "Revela a resposta correta em uma questão",
    icon: "💡",
    price: 30,
    effect: "hint",
    quantity: 0
  },
  {
    id: "time-freeze",
    name: "Congela Tempo",
    description: "Para o tempo durante um quiz",
    icon: "⏰",
    price: 40,
    effect: "time_freeze",
    quantity: 0
  }
];

export const weeklyRanking: RankingUser[] = [
  {
    id: "1",
    name: "João Silva",
    avatar: "👨‍💼",
    xp: 450,
    level: 3,
    position: 1
  },
  {
    id: "2",
    name: "Maria Santos",
    avatar: "👩‍💼",
    xp: 380,
    level: 2,
    position: 2
  },
  {
    id: "3",
    name: "Pedro Costa",
    avatar: "👨‍🎓",
    xp: 320,
    level: 2,
    position: 3
  },
  {
    id: "4",
    name: "Ana Silva",
    avatar: "👩‍🎓",
    xp: 280,
    level: 2,
    position: 4
  },
  {
    id: "5",
    name: "Carlos Oliveira",
    avatar: "👨‍💻",
    xp: 250,
    level: 1,
    position: 5
  }
];
