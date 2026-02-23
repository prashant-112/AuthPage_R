import { useState } from 'react'
import { motion } from 'framer-motion'
import Header from '../shared/Header'
import ContentCard from '../shared/ContentCard'
import Button from '../shared/Button'
import Illustration from '../shared/Illustration'
import { StepProps } from '../../types'

const PasswordStep = ({ formData, updateFormData, onNext, onBack }: StepProps) => {
  const [password, setPassword] = useState(formData.password || '')
  const [confirmPassword, setConfirmPassword] = useState(formData.confirmPassword || '')
  const [showPassword, setShowPassword] = useState(false)
  const [showConfirmPassword, setShowConfirmPassword] = useState(false)
  const [errors, setErrors] = useState({ password: '', confirmPassword: '' })
  const [touched, setTouched] = useState({ password: false, confirmPassword: false })

  const validatePassword = (pwd: string): string => {
    if (!pwd) {
      return 'Password is required'
    }
    if (pwd.length < 8 || pwd.length > 12) {
      return 'Must be at least 8-12 characters'
    }
    return ''
  }

  const validateConfirmPassword = (pwd: string, confirm: string): string => {
    if (!confirm) {
      return 'Please confirm your password'
    }
    if (pwd !== confirm) {
      return 'Both passwords must match'
    }
    return ''
  }

  const handlePasswordChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value
    setPassword(value)
    setErrors({
      password: touched.password ? validatePassword(value) : '',
      confirmPassword:
        touched.confirmPassword
          ? validateConfirmPassword(value, confirmPassword)
          : '',
    })
  }

  const handleConfirmPasswordChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value
    setConfirmPassword(value)
    setErrors({
      ...errors,
      confirmPassword: touched.confirmPassword
        ? validateConfirmPassword(password, value)
        : '',
    })
  }

  const handleContinue = () => {
    const passwordError = validatePassword(password)
    const confirmPasswordError = validateConfirmPassword(password, confirmPassword)

    if (passwordError || confirmPasswordError) {
      setTouched({ password: true, confirmPassword: true })
      setErrors({
        password: passwordError,
        confirmPassword: confirmPasswordError,
      })
      return
    }

    updateFormData({
      password,
      confirmPassword,
    })
    onNext()
  }

  return (
    <div>
      <Header />
      <ContentCard title="Create Password for your account">
        <div className="space-y-6">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Enter new password
            </label>
            <div className="relative">
              <input
                type={showPassword ? 'text' : 'password'}
                value={password}
                onChange={handlePasswordChange}
                placeholder="Enter new password"
                className={`w-full px-4 py-3 pr-12 border-2 rounded-lg focus:outline-none focus:ring-2 transition-all duration-200 ${
                  errors.password
                    ? 'border-red-500 focus:border-red-500 focus:ring-red-200'
                    : 'border-gray-200 focus:border-blue-600 focus:ring-blue-200'
                }`}
                onFocus={() => setTouched({ ...touched, password: true })}
                onBlur={() => {
                  setTouched({ ...touched, password: true })
                  setErrors({
                    ...errors,
                    password: validatePassword(password),
                  })
                }}
              />
              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-500 hover:text-gray-700 focus:outline-none"
                aria-label="Toggle password visibility"
              >
                {showPassword ? (
                  <svg
                    className="w-5 h-5"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M13.875 18.825A10.05 10.05 0 0112 19c-4.478 0-8.268-2.943-9.543-7a9.97 9.97 0 011.563-3.029m5.858.908a3 3 0 114.243 4.243M9.878 9.878l4.242 4.242M9.88 9.88l-3.29-3.29m7.532 7.532l3.29 3.29M3 3l3.59 3.59m0 0A9.953 9.953 0 0112 5c4.478 0 8.268 2.943 9.543 7a10.025 10.025 0 01-4.132 5.411m0 0L21 21"
                    />
                  </svg>
                ) : (
                  <svg
                    className="w-5 h-5"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                    />
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"
                    />
                  </svg>
                )}
              </button>
            </div>
            <p
              className={`text-sm mt-2 ${
                errors.password ? 'text-red-600' : 'text-gray-500'
              }`}
            >
              {errors.password || 'Must be at least 8-12 characters'}
            </p>
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Confirm password
            </label>
            <div className="relative">
              <input
                type={showConfirmPassword ? 'text' : 'password'}
                value={confirmPassword}
                onChange={handleConfirmPasswordChange}
                placeholder="Confirm password"
                className={`w-full px-4 py-3 pr-12 border-2 rounded-lg focus:outline-none focus:ring-2 transition-all duration-200 ${
                  errors.confirmPassword
                    ? 'border-red-500 focus:border-red-500 focus:ring-red-200'
                    : 'border-gray-200 focus:border-blue-600 focus:ring-blue-200'
                }`}
                onFocus={() => setTouched({ ...touched, confirmPassword: true })}
                onBlur={() => {
                  setTouched({ ...touched, confirmPassword: true })
                  setErrors({
                    ...errors,
                    confirmPassword: validateConfirmPassword(password, confirmPassword),
                  })
                }}
              />
              <button
                type="button"
                onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-500 hover:text-gray-700 focus:outline-none"
                aria-label="Toggle password visibility"
              >
                {showConfirmPassword ? (
                  <svg
                    className="w-5 h-5"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M13.875 18.825A10.05 10.05 0 0112 19c-4.478 0-8.268-2.943-9.543-7a9.97 9.97 0 011.563-3.029m5.858.908a3 3 0 114.243 4.243M9.878 9.878l4.242 4.242M9.88 9.88l-3.29-3.29m7.532 7.532l3.29 3.29M3 3l3.59 3.59m0 0A9.953 9.953 0 0112 5c4.478 0 8.268 2.943 9.543 7a10.025 10.025 0 01-4.132 5.411m0 0L21 21"
                    />
                  </svg>
                ) : (
                  <svg
                    className="w-5 h-5"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                    />
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"
                    />
                  </svg>
                )}
              </button>
            </div>
            <p
              className={`text-sm mt-2 ${
                errors.confirmPassword ? 'text-red-600' : 'text-gray-500'
              }`}
            >
              {errors.confirmPassword || 'Both passwords must match'}
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
          disabled={!password || !confirmPassword}
        >
          Continue
        </Button>
      </div>

      <Illustration />
    </div>
  )
}

export default PasswordStep
