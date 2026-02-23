import { motion, AnimatePresence } from 'framer-motion'
import { FormData } from '../types'
import Button from './shared/Button'

interface SuccessModalProps {
  formData: FormData
  onClose: () => void
}

const SuccessModal = ({ formData, onClose }: SuccessModalProps) => {
  const handleGoToHomepage = () => {
    // In a real app, this would navigate to the homepage
    window.location.href = '/'
  }

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4"
        onClick={onClose}
      >
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.9 }}
          transition={{ type: 'spring', duration: 0.5 }}
          onClick={(e) => e.stopPropagation()}
          className="bg-white rounded-2xl shadow-2xl p-8 max-w-md w-full"
        >
          <div className="text-center mb-6">
            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ type: 'spring', delay: 0.2, duration: 0.5 }}
              className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4"
            >
              <svg
                className="w-8 h-8 text-green-600"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={3}
                  d="M5 13l4 4L19 7"
                />
              </svg>
            </motion.div>
            <h2 className="text-2xl font-bold text-gray-800 mb-2">You're all set!</h2>
            <p className="text-gray-600">Here is a summary of your account details</p>
          </div>

          <div className="space-y-3 mb-6">
            <div className="flex justify-between items-center py-2 border-b border-gray-100">
              <span className="text-gray-600 font-medium">Account Type:</span>
              <span className="text-gray-800 font-semibold capitalize">
                {formData.accountType}
              </span>
            </div>
            <div className="flex justify-between items-center py-2 border-b border-gray-100">
              <span className="text-gray-600 font-medium">Email:</span>
              <span className="text-gray-800 font-semibold">
                {formData.email || `${formData.firstName.toLowerCase()}@example.com`}
              </span>
            </div>
            <div className="flex justify-between items-center py-2 border-b border-gray-100">
              <span className="text-gray-600 font-medium">Name:</span>
              <span className="text-gray-800 font-semibold">
                {formData.firstName} {formData.lastName}
              </span>
            </div>
            <div className="flex justify-between items-center py-2">
              <span className="text-gray-600 font-medium">Mobile Number:</span>
              <span className="text-gray-800 font-semibold">
                {formData.phoneNumber || 'N/A'}
              </span>
            </div>
          </div>

          <Button
            variant="primary"
            onClick={handleGoToHomepage}
            className="w-full"
          >
            Go to Homepage
          </Button>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  )
}

export default SuccessModal
