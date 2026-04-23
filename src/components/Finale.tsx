import { motion } from 'framer-motion'
import { Heart, Sparkles } from 'lucide-react'
import Confetti from './Confetti'

interface FinaleProps {
  answers: number[]
}

export default function Finale({ answers }: FinaleProps) {
  // You can customize this with the actual name
  const herName = 'Camile'

  const confettiPieces = Array.from({ length: 50 }, (_, i) => ({
    id: i,
    left: Math.random() * 100,
    delay: Math.random() * 0.5,
    duration: 3 + Math.random() * 2,
  }))

  return (
    <div className="w-full h-screen flex flex-col items-center justify-center px-4 overflow-hidden relative">
      {/* Confetti */}
      {confettiPieces.map((piece) => (
        <Confetti key={piece.id} left={piece.left} delay={piece.delay} duration={piece.duration} />
      ))}

      {/* Main card */}
      <motion.div
        initial={{ opacity: 0, scale: 0.8, y: 50 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        transition={{ duration: 0.8, type: 'spring', stiffness: 100 }}
        className="max-w-md w-full"
      >
        <div className="bg-white rounded-3xl shadow-2xl p-8 md:p-12 text-center backdrop-blur-sm bg-opacity-95">
          {/* Animated heart */}
          <motion.div
            animate={{ scale: [1, 1.1, 1] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="mb-6"
          >
            <Heart className="w-20 h-20 mx-auto text-red-500 fill-red-500" />
          </motion.div>

          {/* Title */}
          <motion.h1
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3, duration: 0.6 }}
            className="text-3xl md:text-4xl font-bold text-gray-800 mb-4"
          >
            {herName},
          </motion.h1>

          {/* Subtitle with sparkle */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6, duration: 0.6 }}
            className="flex items-center justify-center gap-2 mb-6"
          >
            <Sparkles className="w-5 h-5 text-yellow-500" />
            <p className="text-gray-600">você está convidada para sair comigo!</p>
            <Sparkles className="w-5 h-5 text-yellow-500" />
          </motion.div>

          {/* Message */}
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.9, duration: 0.6 }}
            className="text-gray-700 text-lg mb-8 leading-relaxed"
          >
            Você parece ser alguém especial, e gostaria muito de conhecê-la melhor. Obrigado por responder este quiz comigo!
          </motion.p>

          {/* Decorative line */}
          <motion.div
            initial={{ scaleX: 0 }}
            animate={{ scaleX: 1 }}
            transition={{ delay: 1.2, duration: 0.6 }}
            className="h-1 bg-gradient-to-r from-transparent via-red-500 to-transparent mb-8 rounded-full"
          />

          {/* Action message */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.5, duration: 0.6 }}
          >
            <p className="text-sm text-gray-500 mb-6">
              Quiz concluído com sucesso! 🎉
            </p>

            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => window.location.reload()}
              className="px-6 py-3 bg-gradient-to-r from-red-500 to-rose-500 text-white font-semibold rounded-full shadow-lg hover:shadow-xl transition-shadow"
            >
              Fazer Novamente
            </motion.button>
          </motion.div>

          {/* Score */}
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.8, duration: 0.6 }}
            className="text-xs text-gray-400 mt-8"
          >
            Respostas dadas: {answers.length} de 6
          </motion.p>
        </div>
      </motion.div>

      {/* Floating hearts background */}
      {Array.from({ length: 6 }).map((_, i) => (
        <motion.div
          key={`float-${i}`}
          animate={{
            y: [0, -20, 0],
            x: [0, Math.sin(i) * 20, 0],
            opacity: [0, 0.3, 0],
          }}
          transition={{
            duration: 4 + i,
            repeat: Infinity,
            delay: i * 0.5,
          }}
          className="absolute text-red-400 text-4xl"
          style={{
            left: `${20 + i * 15}%`,
            top: '80%',
          }}
        >
          ❤️
        </motion.div>
      ))}
    </div>
  )
}
