import { motion } from 'framer-motion'

interface ConfettiProps {
  left: number
  delay: number
  duration: number
}

const CONFETTI_EMOJIS = ['🎉', '💕', '✨', '🌹', '💑', '❤️', '🎊', '💖']

export default function Confetti({ left, delay, duration }: ConfettiProps) {
  const emoji = CONFETTI_EMOJIS[Math.floor(Math.random() * CONFETTI_EMOJIS.length)]
  const rotation = Math.random() * 360
  const xOffset = (Math.random() - 0.5) * 100

  return (
    <motion.div
      initial={{ top: '-20px', left: `${left}%`, opacity: 1, rotate: rotation }}
      animate={{
        top: '110vh',
        left: `${left + xOffset}%`,
        opacity: 0,
        rotate: rotation + 360,
      }}
      transition={{
        duration: duration,
        delay: delay,
        ease: 'easeIn',
      }}
      className="fixed text-2xl pointer-events-none"
    >
      {emoji}
    </motion.div>
  )
}
