
import { User, Module, Achievement, PowerUp, RankingUser } from '@/types';

export const user: User = {
  id: "1",
  name: "João Silva",
  email: "joao.silva@email.com",
  password: "hashed_password",
  avatar: "👨‍💼",
  level: 5,
  xp: 2450,
  totalxp: 3200,
  coins: 180,
  streak: 7,
  completedModules: ["1"],
  completedLessons: ["1-1", "1-2"],
  achievements: [],
  powerUps: [
    {
      id: "1",
      name: "XP Boost",
      description: "Dobra os pontos XP por 30 minutos",
      icon: "⚡",
      price: 50,
      effect: "2x XP",
      quantity: 2
    },
    {
      id: "2", 
      name: "Streak Shield",
      description: "Protege sua sequência por 1 dia",
      icon: "🛡️",
      price: 30,
      effect: "Streak Protection",
      quantity: 1
    }
  ]
};

// Export mockUser as an alias for user to maintain compatibility
export const mockUser = user;

export const modules: Module[] = [
  {
    id: "1",
    title: "Introdução aos Investimentos",
    description: "Conceitos básicos sobre o mundo dos investimentos",
    icon: "📈",
    color: "from-blue-500 to-blue-700",
    unlocked: true,
    completed: true,
    lessons: [
      {
        id: "1-1",
        title: "O que são investimentos?",
        description: "Entenda os fundamentos dos investimentos e por que são importantes",
        videoUrl: "https://www.youtube.com/watch?v=bpz7-8qUVRk",
        duration: 300,
        xpReward: 50,
        coinReward: 10,
        completed: true,
        quiz: {
          id: "quiz-1-1",
          questions: [
            {
              id: "q1",
              question: "O que é um investimento?",
              options: [
                "Uma forma de gastar dinheiro",
                "Uma aplicação de recursos visando retorno futuro",
                "Um tipo de conta bancária",
                "Uma forma de guardar dinheiro em casa"
              ],
              correctAnswer: 1,
              explanation: "Investimento é a aplicação de recursos com o objetivo de obter retorno futuro."
            }
          ]
        }
      },
      {
        id: "1-2",
        title: "Tipos de investimentos",
        description: "Conheça os principais tipos de investimentos disponíveis no mercado",
        videoUrl: "https://example.com/video2",
        duration: 450,
        xpReward: 75,
        coinReward: 15,
        completed: true,
        quiz: {
          id: "quiz-1-2",
          questions: [
            {
              id: "q2",
              question: "Qual é a principal diferença entre renda fixa e renda variável?",
              options: [
                "Não há diferença",
                "Renda fixa tem retorno previsível, renda variável é imprevisível",
                "Renda variável é sempre melhor",
                "Renda fixa só existe no exterior"
              ],
              correctAnswer: 1,
              explanation: "Renda fixa oferece retorno mais previsível, enquanto renda variável tem maior volatilidade."
            }
          ]
        }
      },
      {
        id: "1-3",
        title: "Perfil de investidor",
        description: "Descubra qual é o seu perfil de investidor e como isso influencia suas escolhas",
        videoUrl: "https://example.com/video3",
        duration: 360,
        xpReward: 60,
        coinReward: 12,
        completed: false,
        quiz: {
          id: "quiz-1-3",
          questions: [
            {
              id: "q3",
              question: "O que define o perfil conservador?",
              options: [
                "Alta tolerância ao risco",
                "Baixa tolerância ao risco e preferência por segurança",
                "Investimentos apenas em ações",
                "Não investe nunca"
              ],
              correctAnswer: 1,
              explanation: "O perfil conservador prioriza a segurança e tem baixa tolerância ao risco."
            }
          ]
        }
      }
    ]
  },
  {
    id: "2",
    title: "Renda Fixa",
    description: "Aprenda sobre investimentos de renda fixa e suas características",
    icon: "🏦",
    color: "from-green-500 to-green-700",
    unlocked: true,
    completed: false,
    lessons: [
      {
        id: "2-1",
        title: "CDB e CDI",
        description: "Entenda o que são CDBs e como funcionam em relação ao CDI",
        videoUrl: "https://example.com/video4",
        duration: 420,
        xpReward: 70,
        coinReward: 14,
        completed: false,
        quiz: {
          id: "quiz-2-1",
          questions: [
            {
              id: "q4",
              question: "O que significa CDI?",
              options: [
                "Certificado de Depósito Interbancário",
                "Conta de Depósito Investimento",
                "Cadastro de Dados Individuais",
                "Centro de Distribuição de Informações"
              ],
              correctAnswer: 0,
              explanation: "CDI significa Certificado de Depósito Interbancário, uma taxa de referência do mercado."
            }
          ]
        }
      },
      {
        id: "2-2",
        title: "Tesouro Direto",
        description: "Conheça os títulos públicos e como investir no Tesouro Direto",
        videoUrl: "https://example.com/video5",
        duration: 480,
        xpReward: 80,
        coinReward: 16,
        completed: false,
        quiz: {
          id: "quiz-2-2",
          questions: [
            {
              id: "q5",
              question: "Qual a principal vantagem do Tesouro Direto?",
              options: [
                "Maior rentabilidade sempre",
                "Garantia do governo federal",
                "Sem imposto de renda",
                "Liquidez instantânea"
              ],
              correctAnswer: 1,
              explanation: "O Tesouro Direto tem a garantia do governo federal, sendo considerado muito seguro."
            }
          ]
        }
      },
      {
        id: "2-3",
        title: "LCI e LCA",
        description: "Aprenda sobre Letras de Crédito Imobiliário e do Agronegócio",
        videoUrl: "https://example.com/video6",
        duration: 390,
        xpReward: 65,
        coinReward: 13,
        completed: false,
        quiz: {
          id: "quiz-2-3",
          questions: [
            {
              id: "q6",
              question: "Qual a principal vantagem de LCI e LCA?",
              options: [
                "Maior rentabilidade",
                "Isenção de Imposto de Renda para pessoa física",
                "Liquidez diária",
                "Garantia internacional"
              ],
              correctAnswer: 1,
              explanation: "LCI e LCA são isentas de Imposto de Renda para pessoa física."
            }
          ]
        }
      },
      {
        id: "2-4",
        title: "Debêntures",
        description: "Entenda como funcionam as debêntures e seus riscos",
        videoUrl: "https://example.com/video7",
        duration: 510,
        xpReward: 85,
        coinReward: 17,
        completed: false,
        quiz: {
          id: "quiz-2-4",
          questions: [
            {
              id: "q7",
              question: "O que são debêntures?",
              options: [
                "Ações de empresas",
                "Títulos de dívida corporativa",
                "Fundos de investimento",
                "Moedas digitais"
              ],
              correctAnswer: 1,
              explanation: "Debêntures são títulos de dívida emitidos por empresas para captar recursos."
            }
          ]
        }
      }
    ]
  },
  {
    id: "3",
    title: "Renda Variável",
    description: "Mergulhe no mundo das ações e investimentos de renda variável",
    icon: "📊",
    color: "from-purple-500 to-purple-700",
    unlocked: true,
    completed: false,
    lessons: [
      {
        id: "3-1",
        title: "Mercado de Ações",
        description: "Introdução ao mercado de ações e como funciona a bolsa de valores",
        videoUrl: "https://example.com/video8",
        duration: 600,
        xpReward: 100,
        coinReward: 20,
        completed: false,
        quiz: {
          id: "quiz-3-1",
          questions: [
            {
              id: "q8",
              question: "O que é uma ação?",
              options: [
                "Um empréstimo para empresa",
                "Uma fração do capital de uma empresa",
                "Um tipo de conta bancária",
                "Uma moeda digital"
              ],
              correctAnswer: 1,
              explanation: "Uma ação representa uma fração do capital social de uma empresa."
            }
          ]
        }
      },
      {
        id: "3-2",
        title: "Análise Fundamentalista",
        description: "Aprenda a analisar empresas através de seus fundamentos",
        videoUrl: "https://example.com/video9",
        duration: 720,
        xpReward: 120,
        coinReward: 24,
        completed: false,
        quiz: {
          id: "quiz-3-2",
          questions: [
            {
              id: "q9",
              question: "O que é P/L (Preço sobre Lucro)?",
              options: [
                "Preço da ação dividido pelo lucro por ação",
                "Patrimônio dividido pelo lucro",
                "Preço dividido pela liquidez",
                "Produto dividido pelo lucro"
              ],
              correctAnswer: 0,
              explanation: "P/L é o preço da ação dividido pelo lucro por ação, indicando quantos anos levaria para recuperar o investimento."
            }
          ]
        }
      },
      {
        id: "3-3",
        title: "Análise Técnica",
        description: "Entenda como analisar gráficos e padrões de preços",
        videoUrl: "https://example.com/video10",
        duration: 660,
        xpReward: 110,
        coinReward: 22,
        completed: false,
        quiz: {
          id: "quiz-3-3",
          questions: [
            {
              id: "q10",
              question: "O que são suportes e resistências?",
              options: [
                "Tipos de ações",
                "Níveis de preço onde há pressão de compra ou venda",
                "Indicadores econômicos",
                "Tipos de gráficos"
              ],
              correctAnswer: 1,
              explanation: "Suportes e resistências são níveis de preço onde historicamente há pressão de compra ou venda."
            }
          ]
        }
      },
      {
        id: "3-4",
        title: "ETFs e Fundos",
        description: "Conheça os fundos de investimento e ETFs para diversificação",
        videoUrl: "https://example.com/video11",
        duration: 540,
        xpReward: 90,
        coinReward: 18,
        completed: false,
        quiz: {
          id: "quiz-3-4",
          questions: [
            {
              id: "q11",
              question: "O que é um ETF?",
              options: [
                "Exchange Traded Fund - fundo negociado em bolsa",
                "Empresa de Tecnologia Financeira",
                "Estratégia de Trading Forex",
                "Estrutura de Tributação Federal"
              ],
              correctAnswer: 0,
              explanation: "ETF é um Exchange Traded Fund, um fundo de investimento negociado em bolsa como uma ação."
            }
          ]
        }
      },
      {
        id: "3-5",
        title: "Gestão de Risco",
        description: "Aprenda estratégias para gerenciar riscos em investimentos",
        videoUrl: "https://example.com/video12",
        duration: 480,
        xpReward: 80,
        coinReward: 16,
        completed: false,
        quiz: {
          id: "quiz-3-5",
          questions: [
            {
              id: "q12",
              question: "O que é stop loss?",
              options: [
                "Uma estratégia para parar de investir",
                "Uma ordem para limitar perdas vendendo automaticamente",
                "Um tipo de imposto",
                "Uma taxa de corretagem"
              ],
              correctAnswer: 1,
              explanation: "Stop loss é uma ordem para vender automaticamente um ativo quando ele atinge um preço determinado, limitando perdas."
            }
          ]
        }
      }
    ]
  },
  {
    id: "4",
    title: "Criptomoedas",
    description: "Entenda o mundo das moedas digitais e blockchain",
    icon: "₿",
    color: "from-orange-500 to-orange-700",
    unlocked: false,
    completed: false,
    lessons: [
      {
        id: "4-1",
        title: "Bitcoin e Blockchain",
        description: "Introdução ao Bitcoin e tecnologia blockchain",
        videoUrl: "https://example.com/video13",
        duration: 480,
        xpReward: 80,
        coinReward: 16,
        completed: false,
        quiz: {
          id: "quiz-4-1",
          questions: [
            {
              id: "q13",
              question: "O que é blockchain?",
              options: [
                "Uma criptomoeda",
                "Uma tecnologia de registro distribuído",
                "Um tipo de banco",
                "Uma empresa de tecnologia"
              ],
              correctAnswer: 1,
              explanation: "Blockchain é uma tecnologia de registro distribuído que garante segurança e transparência."
            }
          ]
        }
      }
    ]
  }
];

export const weeklyRanking: RankingUser[] = [
  {
    id: "1",
    name: "Ana Costa",
    avatar: "👩‍💼",
    xp: 3200,
    level: 6,
    position: 1
  },
  {
    id: "2", 
    name: "João Silva",
    avatar: "👨‍💼",
    xp: 2450,
    level: 5,
    position: 2
  },
  {
    id: "3",
    name: "Maria Santos",
    avatar: "👩‍🎓",
    xp: 2100,
    level: 4,
    position: 3
  }
];

export const powerUps: PowerUp[] = [
  {
    id: "1",
    name: "XP Boost",
    description: "Dobra os pontos XP por 30 minutos",
    icon: "⚡",
    price: 50,
    effect: "2x XP",
    quantity: 0
  },
  {
    id: "2",
    name: "Streak Shield", 
    description: "Protege sua sequência por 1 dia",
    icon: "🛡️",
    price: 30,
    effect: "Streak Protection",
    quantity: 0
  },
  {
    id: "3",
    name: "Coin Multiplier",
    description: "Triplica as moedas ganhas por 1 hora",
    icon: "💰",
    price: 75,
    effect: "3x Coins", 
    quantity: 0
  }
];

export const achievements: Achievement[] = [
  {
    id: "1",
    title: "Primeiro Passo",
    description: "Complete sua primeira lição",
    icon: "🎯",
    xpReward: 50,
    coinReward: 10,
    unlocked: true
  },
  {
    id: "2", 
    title: "Investidor Iniciante",
    description: "Complete o módulo de Introdução aos Investimentos",
    icon: "📈",
    xpReward: 100,
    coinReward: 25,
    unlocked: true
  }
];
