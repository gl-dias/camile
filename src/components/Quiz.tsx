import { useState, useRef } from 'react'
import { motion } from 'framer-motion'
import { ChevronRight } from 'lucide-react'

interface QuizProps {
  onAnswer: (index: number) => void
  onComplete: () => void
  answers: number[]
}

interface Question {
  id: string
  text: string
  options: string[]
  hasFleeButton?: boolean
  fleeButtonIndex?: number
}

const QUESTIONS: Question[] = [
  {
    id: 'dream',
    text: 'Qual é o seu maior sonho?',
    options: [
      'Viajar pelo mundo',
      'Alcançar sucesso profissional',
      'Encontrar amor verdadeiro',
      'Deixar um legado positivo',
    ],
  },
  {
    id: 'laugh',
    text: 'O que te faz rir de verdade?',
    options: ['Memes', 'Humor absurdo', 'Piadas com amigos', 'Situações inesperadas'],
    hasFleeButton: true,
    fleeButtonIndex: 1,
  },
  {
    id: 'perfect_day',
    text: 'Como seria seu dia perfeito?',
    options: [
      'Relaxando em casa',
      'Explorando lugares novos',
      'Rodeada de pessoas queridas',
      'Fazendo o que ama',
    ],
  },
  {
    id: 'values',
    text: 'O que é mais importante para você?',
    options: [
      'Amigos e família',
      'Crescimento pessoal',
      'Liberdade e independência',
      'Fazer diferença no mundo',
    ],
  },
  {
    id: 'talent',
    text: 'Qual é o seu maior talento?',
    options: [
      'Criatividade',
      'Empatia',
      'Determinação',
      'Senso de humor',
    ],
  },
  {
    id: 'willing',
    text: 'Você toparia conhecer alguém interessante?',
    options: ['Claro!', 'Com certeza!', 'Muito sim!', 'Definitivamente sim!'],
  },
]

export default function Quiz({ onAnswer, onComplete, answers }: QuizProps) {
  const [fleePositions, setFleePositions] = useState<{ [key: string]: { x: number; y: number } }>({})
  const fleeButtonRef = useRef<HTMLButtonElement>(null)
  const currentQuestionIndex = answers.length
  const question = QUESTIONS[currentQuestionIndex]

  if (!question) {
    onComplete()
    return null
  }

  const handleFleeHover = (questionId: string) => {
    if (fleeButtonRef.current) {
      const randomX = (Math.random() - 0.5) * 200
      const randomY = (Math.random() - 0.5) * 200
      setFleePositions({
        ...fleePositions,
        [questionId]: { x: randomX, y: randomY },
      })
    }
  }

  const handleAnswer = (index: number) => {
    onAnswer(index)
  }

  const progress = ((currentQuestionIndex + 1) / QUESTIONS.length) * 100

  return (
    <div className="w-full h-screen flex flex-col items-center justify-center px-4 py-8">
      {/* Progress bar */}
      <div className="w-full max-w-2xl mb-8">
        <div className="flex justify-between items-center mb-2">
          <span className="text-sm font-semibold text-gray-600">
            Pergunta {currentQuestionIndex + 1} de {QUESTIONS.length}
          </span>
          <span className="text-sm font-semibold text-gray-600">{Math.round(progress)}%</span>
        </div>
        <div className="w-full bg-gray-200 rounded-full h-2">
          <motion.div
            initial={{ width: 0 }}
            animate={{ width: `${progress}%` }}
            transition={{ duration: 0.5 }}
            className="bg-gradient-to-r from-red-500 to-rose-500 h-2 rounded-full"
          />
        </div>
      </div>

      {/* Question */}
      <motion.div
        key={`question-${currentQuestionIndex}`}
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="w-full max-w-2xl mb-12"
      >
        <h2 className="text-3xl md:text-4xl font-bold text-gray-800 text-center mb-8">
          {question.text}
        </h2>

        {/* Options */}
        <div className="space-y-4">
          {question.options.map((option, index) => {
            const isFleeing = question.hasFleeButton && index === question.fleeButtonIndex
            const position = fleePositions[question.id] || { x: 0, y: 0 }

            return (
              <motion.button
                key={index}
                ref={isFleeing ? fleeButtonRef : null}
                onClick={() => !isFleeing && handleAnswer(index)}
                onMouseEnter={() => isFleeing && handleFleeHover(question.id)}
                animate={
                  isFleeing
                    ? {
                        x: position.x,
                        y: position.y,
                      }
                    : {}
                }
                transition={isFleeing ? { type: 'spring', stiffness: 300 } : {}}
                whileHover={!isFleeing ? { scale: 1.02, x: 10 } : {}}
                whileTap={!isFleeing ? { scale: 0.98 } : {}}
                className={`w-full p-4 rounded-lg font-semibold text-left transition-all flex items-center justify-between ${
                  isFleeing
                    ? 'bg-red-100 text-red-800 border-2 border-red-300 cursor-pointer hover:shadow-md'
                    : 'bg-white text-gray-800 border-2 border-gray-200 hover:border-red-400 hover:shadow-lg'
                }`}
              >
                <span>{option}</span>
                {!isFleeing && <ChevronRight className="w-5 h-5 ml-2" />}
              </motion.button>
            )
          })}
        </div>
      </motion.div>

      {/* Hint for flee button */}
      {question.hasFleeButton && (
        <motion.p
          animate={{ opacity: [0.5, 1, 0.5] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="text-sm text-gray-500 mt-8"
        >
          👀 Tente clicar na primeira opção...
        </motion.p>
      )}
    </div>
  )
}
