import { useState, useRef, useEffect } from 'react'
import { motion } from 'framer-motion'
import Header from '../shared/Header'
import ContentCard from '../shared/ContentCard'
import Button from '../shared/Button'
import Illustration from '../shared/Illustration'
import { StepProps } from '../../types'

const OTPStep = ({ formData, updateFormData, onNext, onBack }: StepProps) => {
  const [otp, setOtp] = useState(formData.otp || '1232')
  const [error, setError] = useState('')
  const [isResending, setIsResending] = useState(false)
  const [resendCooldown, setResendCooldown] = useState(0)
  const inputRefs = useRef<(HTMLInputElement | null)[]>([])

  useEffect(() => {
    // Initialize input refs
    inputRefs.current = inputRefs.current.slice(0, 4)
  }, [])

  useEffect(() => {
    // Auto-focus first input
    if (inputRefs.current[0]) {
      inputRefs.current[0].focus()
    }
  }, [])

  const handleOtpChange = (index: number, value: string) => {
    if (value.length > 1) {
      // Handle paste
      const pastedValue = value.slice(0, 4)
      const newOtp = pastedValue.split('')
      const updatedOtp = [...otp.padEnd(4, ' ')]
      
      newOtp.forEach((char, i) => {
        if (index + i < 4 && /^\d$/.test(char)) {
          updatedOtp[index + i] = char
        }
      })
      
      setOtp(updatedOtp.join(''))
      setError('')
      
      // Focus next empty input or last input
      const nextIndex = Math.min(index + newOtp.length, 3)
      if (inputRefs.current[nextIndex]) {
        inputRefs.current[nextIndex].focus()
      }
      return
    }

    if (!/^\d$/.test(value) && value !== '') {
      return
    }

    const newOtp = otp.split('')
    newOtp[index] = value
    setOtp(newOtp.join(''))
    setError('')

    // Auto-focus next input
    if (value && index < 3) {
      inputRefs.current[index + 1]?.focus()
    }
  }

  const handleKeyDown = (index: number, e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Backspace' && !otp[index] && index > 0) {
      inputRefs.current[index - 1]?.focus()
    }
  }

  const handleContinue = () => {
    const otpValue = otp.replace(/\s/g, '')
    if (otpValue.length !== 4) {
      setError('Please enter the complete OTP')
      return
    }

    if (!/^\d{4}$/.test(otpValue)) {
      setError('OTP must contain only digits')
      return
    }

    updateFormData({ otp: otpValue })
    onNext()
  }

  const handleResend = async () => {
    if (resendCooldown > 0) return

    setIsResending(true)
    // Simulate API call
    await new Promise((resolve) => setTimeout(resolve, 1000))
    setIsResending(false)
    setResendCooldown(30)

    // Countdown timer
    const interval = setInterval(() => {
      setResendCooldown((prev) => {
        if (prev <= 1) {
          clearInterval(interval)
          return 0
        }
        return prev - 1
      })
    }, 1000)
  }

  return (
    <div>
      <Header />
      <ContentCard title="OTP Verification">
        <div className="space-y-6">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-4">
              Enter the OTP sent to your phone
            </label>
            <div className="flex gap-3 justify-center">
              {[0, 1, 2, 3].map((index) => (
                <motion.input
                  key={index}
                  ref={(el) => (inputRefs.current[index] = el)}
                  type="text"
                  inputMode="numeric"
                  maxLength={1}
                  value={otp[index] || ''}
                  onChange={(e) => handleOtpChange(index, e.target.value)}
                  onKeyDown={(e) => handleKeyDown(index, e)}
                  className="w-14 h-14 text-center text-2xl font-semibold border-2 rounded-lg focus:outline-none focus:border-blue-600 focus:ring-2 focus:ring-blue-200 transition-all duration-200"
                  whileFocus={{ scale: 1.05 }}
                />
              ))}
            </div>
            {error && (
              <motion.p
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                className="text-red-600 text-sm mt-2 text-center"
              >
                {error}
              </motion.p>
            )}
          </div>

          <div className="text-center">
            <p className="text-gray-600 text-sm">
              Did not receive OTP?{' '}
              <button
                onClick={handleResend}
                disabled={isResending || resendCooldown > 0}
                className="text-blue-600 hover:text-blue-700 font-medium disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
              >
                {isResending
                  ? 'Sending...'
                  : resendCooldown > 0
                  ? `Resend OTP (${resendCooldown}s)`
                  : 'Resend OTP'}
              </button>
            </p>
          </div>
        </div>
      </ContentCard>

      <div className="flex justify-between gap-4">
        <Button variant="secondary" onClick={onBack} className="flex-1">
          Back
        </Button>
        <Button
          variant="primary"
          onClick={handleContinue}
          className="flex-1"
          disabled={otp.replace(/\s/g, '').length !== 4}
        >
          Continue
        </Button>
      </div>

      <Illustration />
    </div>
  )
}

export default OTPStep
