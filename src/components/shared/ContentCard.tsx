import { motion } from 'framer-motion'
import { ReactNode } from 'react'

interface ContentCardProps {
  title: string
  children: ReactNode
}

const ContentCard = ({ title, children }: ContentCardProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.95 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.3 }}
      className="bg-white rounded-2xl shadow-xl p-8 mb-8"
    >
      <h3 className="text-xl font-semibold text-gray-800 mb-6">{title}</h3>
      {children}
    </motion.div>
  )
}

export default ContentCard
