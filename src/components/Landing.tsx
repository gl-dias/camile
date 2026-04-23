import { motion } from 'framer-motion'
import { Heart } from 'lucide-react'

interface LandingProps {
  onStart: () => void
}

export default function Landing({ onStart }: LandingProps) {
  return (
    <div className="w-full h-screen flex flex-col items-center justify-center px-4">
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.2 }}
        className="text-center"
      >
        <motion.div
          animate={{ scale: [1, 1.1, 1] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="mb-8"
        >
          <Heart className="w-24 h-24 mx-auto text-red-500 fill-red-500" />
        </motion.div>

        <h1 className="text-5xl md:text-7xl font-bold text-gray-800 mb-4">
          The Quiz
        </h1>

        <p className="text-xl md:text-2xl text-gray-600 mb-8 max-w-md mx-auto">
          Vamos começar? Tenho algumas perguntas importantes para fazer...
        </p>

        <motion.button
          onClick={onStart}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="px-8 py-4 bg-gradient-to-r from-red-500 to-rose-500 text-white font-bold text-lg rounded-full shadow-lg hover:shadow-xl transition-shadow"
        >
          Começar Desafio
        </motion.button>

        <motion.p
          animate={{ opacity: [0.5, 1, 0.5] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="mt-12 text-gray-500 text-sm"
        >
          ↓ Deslize para baixo ↓
        </motion.p>
      </motion.div>

      {/* Decorative elements */}
      <motion.div
        animate={{ y: [0, 20, 0] }}
        transition={{ duration: 3, repeat: Infinity }}
        className="absolute bottom-20 left-10 text-4xl opacity-30"
      >
        💕
      </motion.div>
      <motion.div
        animate={{ y: [0, -20, 0] }}
        transition={{ duration: 4, repeat: Infinity }}
        className="absolute top-20 right-10 text-4xl opacity-30"
      >
        ✨
      </motion.div>
      <motion.div
        animate={{ y: [0, 15, 0] }}
        transition={{ duration: 3.5, repeat: Infinity }}
        className="absolute bottom-32 right-20 text-4xl opacity-25"
      >
        🌹
      </motion.div>
    </div>
  )
}
