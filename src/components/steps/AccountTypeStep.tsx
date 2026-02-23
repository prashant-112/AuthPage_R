import { useState } from 'react'
import { motion } from 'framer-motion'
import Header from '../shared/Header'
import ContentCard from '../shared/ContentCard'
import Button from '../shared/Button'
import Illustration from '../shared/Illustration'
import { StepProps } from '../../types'

const AccountTypeStep = ({ formData, updateFormData, onNext, onBack }: StepProps) => {
  const [selectedType, setSelectedType] = useState<'personal' | 'business'>(formData.accountType)

  const handleSelect = (type: 'personal' | 'business') => {
    setSelectedType(type)
    updateFormData({ accountType: type })
  }

  const handleContinue = () => {
    updateFormData({ accountType: selectedType })
    onNext()
  }

  return (
    <div>
      <Header />
      <ContentCard title="To join us tell us what type of account you are opening">
        <div className="space-y-4">
          <motion.div
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            onClick={() => handleSelect('personal')}
            className={`flex items-center p-4 border-2 rounded-lg cursor-pointer transition-all duration-200 ${
              selectedType === 'personal'
                ? 'border-blue-600 bg-blue-50'
                : 'border-gray-200 hover:border-gray-300'
            }`}
          >
            <div className="flex items-center justify-center w-12 h-12 rounded-full bg-gray-100 mr-4">
              <svg
                className="w-6 h-6 text-gray-600"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
                />
              </svg>
            </div>
            <div className="flex-1">
              <label className="text-lg font-medium text-gray-800 cursor-pointer">
                Personal
              </label>
            </div>
            <div
              className={`w-5 h-5 rounded-full border-2 flex items-center justify-center ${
                selectedType === 'personal'
                  ? 'border-blue-600 bg-blue-600'
                  : 'border-gray-300'
              }`}
            >
              {selectedType === 'personal' && (
                <motion.div
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  className="w-2 h-2 rounded-full bg-white"
                />
              )}
            </div>
          </motion.div>

          <motion.div
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            onClick={() => handleSelect('business')}
            className={`flex items-center p-4 border-2 rounded-lg cursor-pointer transition-all duration-200 ${
              selectedType === 'business'
                ? 'border-blue-600 bg-blue-50'
                : 'border-gray-200 hover:border-gray-300'
            }`}
          >
            <div className="flex items-center justify-center w-12 h-12 rounded-full bg-gray-100 mr-4">
              <svg
                className="w-6 h-6 text-gray-600"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                />
              </svg>
            </div>
            <div className="flex-1">
              <label className="text-lg font-medium text-gray-800 cursor-pointer">
                Business
              </label>
            </div>
            <div
              className={`w-5 h-5 rounded-full border-2 flex items-center justify-center ${
                selectedType === 'business'
                  ? 'border-blue-600 bg-blue-600'
                  : 'border-gray-300'
              }`}
            >
              {selectedType === 'business' && (
                <motion.div
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  className="w-2 h-2 rounded-full bg-white"
                />
              )}
            </div>
          </motion.div>
        </div>
      </ContentCard>

      <div className="flex justify-between gap-4">
        <Button variant="secondary" onClick={onBack} className="flex-1">
          Back
        </Button>
        <Button variant="primary" onClick={handleContinue} className="flex-1">
          Continue
        </Button>
      </div>

      <Illustration />
    </div>
  )
}

export default AccountTypeStep
