import { useState } from 'react'
import { motion } from 'framer-motion'
import Header from '../shared/Header'
import ContentCard from '../shared/ContentCard'
import Button from '../shared/Button'
import Illustration from '../shared/Illustration'
import { StepProps } from '../../types'

const PhoneNumberStep = ({ formData, updateFormData, onNext, onBack }: StepProps) => {
  const [phoneNumber, setPhoneNumber] = useState(formData.phoneNumber || '524703921')
  const [error, setError] = useState('')
  const [isLoading, setIsLoading] = useState(false)

  const validatePhoneNumber = (phone: string): boolean => {
    // Remove any non-digit characters for validation
    const digitsOnly = phone.replace(/\D/g, '')
    return digitsOnly.length >= 10 && digitsOnly.length <= 15
  }

  const handlePhoneChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value
    setPhoneNumber(value)
    setError('')
  }

  const handleContinue = async () => {
    if (!phoneNumber.trim()) {
      setError('Phone number is required')
      return
    }

    if (!validatePhoneNumber(phoneNumber)) {
      setError('Please enter a valid phone number')
      return
    }

    setIsLoading(true)
    // Simulate API call
    await new Promise((resolve) => setTimeout(resolve, 1000))
    setIsLoading(false)
    
    updateFormData({ phoneNumber })
    onNext()
  }

  return (
    <div>
      <Header />
      <ContentCard title="OTP Verification">
        <div className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Phone Number
            </label>
            <div className="flex items-center border-2 rounded-lg focus-within:border-blue-600 focus-within:ring-2 focus-within:ring-blue-200 transition-all duration-200">
              <div className="flex items-center px-4 py-3 bg-gray-50 border-r-2 border-gray-200">
                <span className="text-2xl mr-2">🇺🇸</span>
                <span className="text-gray-700 font-medium">+1</span>
              </div>
              <input
                type="tel"
                value={phoneNumber}
                onChange={handlePhoneChange}
                placeholder="Enter your phone number"
                className="flex-1 px-4 py-3 border-0 focus:outline-none focus:ring-0 text-gray-800"
                onFocus={() => setError('')}
              />
            </div>
            {error && (
              <motion.p
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                className="text-red-600 text-sm mt-2"
              >
                {error}
              </motion.p>
            )}
          </div>
        </div>
      </ContentCard>

      <div className="flex justify-between gap-4">
        <Button variant="secondary" onClick={onBack} className="flex-1" disabled={isLoading}>
          Back
        </Button>
        <Button
          variant="primary"
          onClick={handleContinue}
          className="flex-1"
          loading={isLoading}
          disabled={!phoneNumber.trim()}
        >
          Continue
        </Button>
      </div>

      <Illustration />
    </div>
  )
}

export default PhoneNumberStep
