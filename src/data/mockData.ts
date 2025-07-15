import { Home, BookOpen, Trophy, ShoppingBag, User, Crown, TrendingUp } from 'lucide-react';

export interface User {
  id: string;
  name: string;
  email: string;
  avatar: string;
  level: number;
  xp: number;
  totalXp: number;
  coins: number;
  streak: number;
  completedLessons: string[];
}

export interface Module {
  id: string;
  title: string;
  description: string;
  icon: string;
  color: string;
  unlocked: boolean;
  completed: boolean;
  lessons: Lesson[];
}

export interface Lesson {
  id: string;
  title: string;
  description: string;
  duration: number;
  completed: boolean;
  xpReward: number;
  coinReward: number;
  quiz: Quiz;
}

export interface Quiz {
  questions: Question[];
}

export interface Question {
  id: string;
  question: string;
  options: string[];
  correct: number;
}

export interface Achievement {
  id: string;
  title: string;
  description: string;
  icon: string;
  xpReward: number;
  coinReward: number;
  unlocked: boolean;
}

export const mockUser: User = {
  id: '1',
  name: 'John Doe',
  email: 'john.doe@example.com',
  avatar: '😎',
  level: 5,
  xp: 320,
  totalXp: 2820,
  coins: 1250,
  streak: 5,
  completedLessons: ['1-1', '1-2', '2-1', '2-2', '3-1']
};

export const achievements: Achievement[] = [
  {
    id: '1',
    title: 'Primeiros Passos',
    description: 'Complete seu primeiro módulo',
    icon: '👣',
    xpReward: 100,
    coinReward: 20,
    unlocked: true
  },
  {
    id: '2',
    title: 'Investidor Iniciante',
    description: 'Alcance o nível 3',
    icon: '🌱',
    xpReward: 150,
    coinReward: 30,
    unlocked: true
  },
  {
    id: '3',
    title: 'Maratona de Estudos',
    description: 'Mantenha uma sequência de 7 dias',
    icon: '🗓️',
    xpReward: 200,
    coinReward: 40,
    unlocked: false
  },
  {
    id: '4',
    title: 'Mestre das Finanças',
    description: 'Complete todos os módulos',
    icon: '🏆',
    xpReward: 500,
    coinReward: 100,
    unlocked: false
  }
];

export const modules: Module[] = [
  {
    id: '1',
    title: 'Fundamentos de Investimentos',
    description: 'Aprenda os conceitos básicos para começar a investir com segurança',
    icon: '💰',
    color: 'from-blue-500 to-blue-700',
    unlocked: true,
    completed: false,
    lessons: [
      {
        id: '1-1',
        title: 'O que são investimentos?',
        description: 'Conceitos básicos sobre investimentos e por que investir',
        duration: 480,
        completed: false,
        xpReward: 50,
        coinReward: 10,
        quiz: {
          questions: [
            {
              id: '1',
              question: 'O que é um investimento?',
              options: [
                'Uma forma de gastar dinheiro',
                'Uma aplicação de recursos visando retorno futuro',
                'Um tipo de empréstimo',
                'Uma doação'
              ],
              correct: 1
            }
          ]
        }
      },
      {
        id: '1-2',
        title: 'Perfil do Investidor',
        description: 'Descubra qual é o seu perfil de risco e como isso impacta seus investimentos',
        duration: 420,
        completed: false,
        xpReward: 50,
        coinReward: 10,
        quiz: {
          questions: [
            {
              id: '1',
              question: 'Qual perfil aceita maior risco em troca de maior retorno?',
              options: ['Conservador', 'Moderado', 'Arrojado', 'Nenhum'],
              correct: 2
            }
          ]
        }
      },
      {
        id: '1-3',
        title: 'Diversificação de Investimentos',
        description: 'A importância de não colocar todos os ovos na mesma cesta',
        duration: 360,
        completed: false,
        xpReward: 50,
        coinReward: 10,
        quiz: {
          questions: [
            {
              id: '1',
              question: 'Por que diversificar os investimentos?',
              options: [
                'Para reduzir riscos',
                'Para aumentar gastos',
                'Para complicar o portfólio',
                'Não é necessário'
              ],
              correct: 0
            }
          ]
        }
      },
      {
        id: '1-4',
        title: 'Renda Fixa vs Renda Variável',
        description: 'Entenda as diferenças entre os principais tipos de investimento',
        duration: 540,
        completed: false,
        xpReward: 60,
        coinReward: 12,
        quiz: {
          questions: [
            {
              id: '1',
              question: 'Qual característica define a renda fixa?',
              options: [
                'Retorno imprevisível',
                'Retorno previsível',
                'Sem garantias',
                'Alto risco sempre'
              ],
              correct: 1
            }
          ]
        }
      }
    ]
  },
  {
    id: '2',
    title: 'Criptomoedas',
    description: 'Descubra o mundo das moedas digitais e blockchain',
    icon: '₿',
    color: 'from-orange-500 to-orange-700',
    unlocked: true,
    completed: false,
    lessons: [
      {
        id: '2-1',
        title: 'O que é Bitcoin?',
        description: 'História e fundamentos da primeira criptomoeda',
        duration: 600,
        completed: false,
        xpReward: 60,
        coinReward: 15,
        quiz: {
          questions: [
            {
              id: '1',
              question: 'Quem criou o Bitcoin?',
              options: ['Satoshi Nakamoto', 'Elon Musk', 'Bill Gates', 'Mark Zuckerberg'],
              correct: 0
            }
          ]
        }
      },
      {
        id: '2-2',
        title: 'Blockchain: A Tecnologia por Trás',
        description: 'Como funciona a tecnologia que revolucionou as finanças',
        duration: 480,
        completed: false,
        xpReward: 55,
        coinReward: 12,
        quiz: {
          questions: [
            {
              id: '1',
              question: 'O que é blockchain?',
              options: [
                'Uma moeda digital',
                'Um livro-razão distribuído',
                'Um banco online',
                'Um tipo de ação'
              ],
              correct: 1
            }
          ]
        }
      },
      {
        id: '2-3',
        title: 'Altcoins: Além do Bitcoin',
        description: 'Conheça outras criptomoedas importantes do mercado',
        duration: 420,
        completed: false,
        xpReward: 50,
        coinReward: 10,
        quiz: {
          questions: [
            {
              id: '1',
              question: 'O que são altcoins?',
              options: [
                'Moedas físicas alternativas',
                'Todas as criptomoedas exceto Bitcoin',
                'Apenas Ethereum',
                'Moedas falsas'
              ],
              correct: 1
            }
          ]
        }
      },
      {
        id: '2-4',
        title: 'Carteiras Digitais e Segurança',
        description: 'Como armazenar suas criptomoedas com segurança',
        duration: 360,
        completed: false,
        xpReward: 45,
        coinReward: 8,
        quiz: {
          questions: [
            {
              id: '1',
              question: 'Qual é mais seguro para armazenar criptomoedas?',
              options: [
                'Exchange online',
                'Carteira fria (cold wallet)',
                'Notebook pessoal',
                'Papel escrito à mão'
              ],
              correct: 1
            }
          ]
        }
      }
    ]
  },
  {
    id: '3',
    title: 'LCI/LCA',
    description: 'Letras de Crédito: investimentos isentos de IR',
    icon: '🏦',
    color: 'from-green-500 to-green-700',
    unlocked: true,
    completed: false,
    lessons: [
      {
        id: '3-1',
        title: 'O que são LCI e LCA?',
        description: 'Entenda as Letras de Crédito Imobiliário e do Agronegócio',
        duration: 300,
        completed: false,
        xpReward: 40,
        coinReward: 8,
        quiz: {
          questions: [
            {
              id: '1',
              question: 'Qual a principal vantagem das LCI/LCA?',
              options: [
                'Alta liquidez',
                'Isenção de Imposto de Renda',
                'Rentabilidade muito alta',
                'Sem prazo mínimo'
              ],
              correct: 1
            }
          ]
        }
      },
      {
        id: '3-2',
        title: 'Rentabilidade e Prazos',
        description: 'Como calcular o retorno e escolher o prazo ideal',
        duration: 360,
        completed: false,
        xpReward: 45,
        coinReward: 9,
        quiz: {
          questions: [
            {
              id: '1',
              question: 'LCI/LCA geralmente seguem qual indexador?',
              options: ['IPCA', 'CDI', 'SELIC', 'Dólar'],
              correct: 1
            }
          ]
        }
      },
      {
        id: '3-3',
        title: 'Garantias e Riscos',
        description: 'Entenda as proteções e limitações destes investimentos',
        duration: 240,
        completed: false,
        xpReward: 35,
        coinReward: 7,
        quiz: {
          questions: [
            {
              id: '1',
              question: 'LCI/LCA são garantidas por qual órgão?',
              options: ['Banco Central', 'FGC', 'CVM', 'Governo Federal'],
              correct: 1
            }
          ]
        }
      }
    ]
  },
  {
    id: '4',
    title: 'Fundos Imobiliários (FIIs)',
    description: 'Invista no mercado imobiliário através da bolsa',
    icon: '🏢',
    color: 'from-purple-500 to-purple-700',
    unlocked: false,
    completed: false,
    lessons: [
      {
        id: '4-1',
        title: 'Introdução aos FIIs',
        description: 'O que são e como funcionam os Fundos Imobiliários',
        duration: 480,
        completed: false,
        xpReward: 50,
        coinReward: 10,
        quiz: {
          questions: [
            {
              id: '1',
              question: 'Qual a principal fonte de renda dos FIIs?',
              options: ['Dividendos', 'Aluguéis', 'Juros', 'Valorização'],
              correct: 1
            }
          ]
        }
      },
      {
        id: '4-2',
        title: 'Tipos de FIIs',
        description: 'Fundos de tijolo, papel e híbridos',
        duration: 420,
        completed: false,
        xpReward: 45,
        coinReward: 9,
        quiz: {
          questions: [
            {
              id: '1',
              question: 'FIIs de papel investem em quê?',
              options: [
                'Imóveis físicos',
                'Títulos do setor imobiliário',
                'Ações de empresas',
                'Moeda estrangeira'
              ],
              correct: 1
            }
          ]
        }
      }
    ]
  },
  {
    id: '5',
    title: 'Fintechs',
    description: 'As startups que estão revolucionando o sistema financeiro',
    icon: '📱',
    color: 'from-pink-500 to-pink-700',
    unlocked: false,
    completed: false,
    lessons: [
      {
        id: '5-1',
        title: 'O que são Fintechs?',
        description: 'Como a tecnologia está transformando as finanças',
        duration: 360,
        completed: false,
        xpReward: 40,
        coinReward: 8,
        quiz: {
          questions: [
            {
              id: '1',
              question: 'Fintech é a junção de quais palavras?',
              options: [
                'Finance + Technology',
                'Financial + Tech',
                'Firm + Technology',
                'Fund + Technical'
              ],
              correct: 0
            }
          ]
        }
      },
      {
        id: '5-2',
        title: 'Bancos Digitais vs Tradicionais',
        description: 'Vantagens e desvantagens de cada modelo',
        duration: 300,
        completed: false,
        xpReward: 35,
        coinReward: 7,
        quiz: {
          questions: [
            {
              id: '1',
              question: 'Principal vantagem dos bancos digitais?',
              options: [
                'Mais agências físicas',
                'Menores custos operacionais',
                'Atendimento presencial',
                'Produtos mais caros'
              ],
              correct: 1
            }
          ]
        }
      }
    ]
  },
  {
    id: '6',
    title: 'Bolsa de Valores',
    description: 'Como funciona o mercado de ações brasileiro',
    icon: '📈',
    color: 'from-red-500 to-red-700',
    unlocked: false,
    completed: false,
    lessons: [
      {
        id: '6-1',
        title: 'O que é a B3?',
        description: 'Conheça a bolsa de valores brasileira',
        duration: 420,
        completed: false,
        xpReward: 45,
        coinReward: 9,
        quiz: {
          questions: [
            {
              id: '1',
              question: 'B3 significa?',
              options: [
                'Brasil Bolsa Balcão',
                'Banco do Brasil Bolsa',
                'Bolsa Brasil Básico',
                'Brasil Banking Business'
              ],
              correct: 0
            }
          ]
        }
      },
      {
        id: '6-2',
        title: 'Horário de Funcionamento',
        description: 'Quando e como operar na bolsa',
        duration: 240,
        completed: false,
        xpReward: 30,
        coinReward: 6,
        quiz: {
          questions: [
            {
              id: '1',
              question: 'Qual o horário de funcionamento da B3?',
              options: [
                '8h às 16h',
                '9h às 17h',
                '10h às 17h',
                '24 horas'
              ],
              correct: 2
            }
          ]
        }
      }
    ]
  },
  {
    id: '7',
    title: 'Ações',
    description: 'Torne-se sócio das melhores empresas do país',
    icon: '📊',
    color: 'from-indigo-500 to-indigo-700',
    unlocked: false,
    completed: false,
    lessons: [
      {
        id: '7-1',
        title: 'O que são Ações?',
        description: 'Entenda como se tornar sócio de uma empresa',
        duration: 480,
        completed: false,
        xpReward: 50,
        coinReward: 10,
        quiz: {
          questions: [
            {
              id: '1',
              question: 'Ao comprar uma ação, você se torna?',
              options: [
                'Credor da empresa',
                'Sócio da empresa',
                'Funcionário da empresa',
                'Cliente da empresa'
              ],
              correct: 1
            }
          ]
        }
      },
      {
        id: '7-2',
        title: 'Tipos de Ações: ON vs PN',
        description: 'Diferenças entre ações ordinárias e preferenciais',
        duration: 360,
        completed: false,
        xpReward: 40,
        coinReward: 8,
        quiz: {
          questions: [
            {
              id: '1',
              question: 'Ações ON garantem qual direito?',
              options: [
                'Dividendos maiores',
                'Direito de voto',
                'Liquidez maior',
                'Menos risco'
              ],
              correct: 1
            }
          ]
        }
      },
      {
        id: '7-3',
        title: 'Análise Fundamentalista',
        description: 'Como analisar empresas para investir',
        duration: 600,
        completed: false,
        xpReward: 60,
        coinReward: 12,
        quiz: {
          questions: [
            {
              id: '1',
              question: 'P/L significa?',
              options: [
                'Preço por Lucro',
                'Patrimônio Líquido',
                'Preço por Litro',
                'Produto Líquido'
              ],
              correct: 0
            }
          ]
        }
      }
    ]
  }
];
