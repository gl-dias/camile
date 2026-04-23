import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import Landing from './components/Landing'
import Quiz from './components/Quiz'
import Finale from './components/Finale'

export type AppState = 'landing' | 'quiz' | 'finale'

function App() {
  const [state, setState] = useState<AppState>('landing')
  const [answers, setAnswers] = useState<number[]>([])

  const handleStartQuiz = () => {
    setState('quiz')
    setAnswers([])
  }

  const handleAnswer = (answerIndex: number) => {
    setAnswers([...answers, answerIndex])
  }

  const handleQuizComplete = () => {
    setState('finale')
  }

  return (
    <div className="w-full h-screen bg-gradient-to-br from-rose-50 via-pink-50 to-red-50 overflow-hidden">
      <AnimatePresence mode="wait">
        {state === 'landing' && (
          <motion.div
            key="landing"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5 }}
          >
            <Landing onStart={handleStartQuiz} />
          </motion.div>
        )}

        {state === 'quiz' && (
          <motion.div
            key="quiz"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.5 }}
          >
            <Quiz 
              onAnswer={handleAnswer} 
              onComplete={handleQuizComplete}
              answers={answers}
            />
          </motion.div>
        )}

        {state === 'finale' && (
          <motion.div
            key="finale"
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.95 }}
            transition={{ duration: 0.6 }}
          >
            <Finale answers={answers} />
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}

export default App
