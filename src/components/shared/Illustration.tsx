import { motion } from 'framer-motion'

const Illustration = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5, delay: 0.2 }}
      className="mt-8 flex justify-center"
    >
      <svg
        width="400"
        height="200"
        viewBox="0 0 400 200"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="opacity-20"
      >
        {/* Person sitting */}
        <circle cx="100" cy="120" r="25" stroke="currentColor" strokeWidth="2" fill="none" />
        <path
          d="M 100 145 L 100 160 L 85 175 L 115 175 L 100 160"
          stroke="currentColor"
          strokeWidth="2"
          fill="none"
        />
        <path
          d="M 85 155 L 70 165 M 115 155 L 130 165"
          stroke="currentColor"
          strokeWidth="2"
        />
        
        {/* Phone with dollar sign */}
        <rect x="120" y="100" width="40" height="60" rx="4" stroke="currentColor" strokeWidth="2" fill="none" />
        <text x="140" y="135" textAnchor="middle" fontSize="20" fill="currentColor">$</text>
        
        {/* Plant */}
        <path
          d="M 60 180 L 60 160 L 55 165 L 65 165 Z"
          stroke="currentColor"
          strokeWidth="2"
          fill="none"
        />
        <circle cx="55" cy="160" r="8" stroke="currentColor" strokeWidth="2" fill="none" />
        <circle cx="65" cy="160" r="8" stroke="currentColor" strokeWidth="2" fill="none" />
        
        {/* Large phone outline */}
        <rect x="200" y="80" width="120" height="100" rx="8" stroke="currentColor" strokeWidth="2" fill="none" />
        <rect x="210" y="100" width="100" height="15" rx="2" stroke="currentColor" strokeWidth="1" fill="none" />
        <rect x="210" y="125" width="100" height="15" rx="2" stroke="currentColor" strokeWidth="1" fill="none" />
        <rect x="210" y="150" width="100" height="15" rx="2" stroke="currentColor" strokeWidth="1" fill="none" />
        
        {/* Another plant */}
        <path
          d="M 340 180 L 340 160 L 335 165 L 345 165 Z"
          stroke="currentColor"
          strokeWidth="2"
          fill="none"
        />
        <circle cx="335" cy="160" r="8" stroke="currentColor" strokeWidth="2" fill="none" />
        <circle cx="345" cy="160" r="8" stroke="currentColor" strokeWidth="2" fill="none" />
      </svg>
    </motion.div>
  )
}

export default Illustration
