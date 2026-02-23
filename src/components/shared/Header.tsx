import { motion } from 'framer-motion'

const Header = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: -10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3 }}
      className="text-center mb-8"
    >
      <h1 className="text-3xl font-bold text-white mb-2">Let's get started</h1>
      <h2 className="text-2xl font-semibold text-white mb-2">Create your account</h2>
      <p className="text-white/80 text-sm">Follow the steps to create your account</p>
    </motion.div>
  )
}

export default Header
