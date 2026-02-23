import { useState } from 'react'
import { motion } from 'framer-motion'
import Header from '../shared/Header'
import ContentCard from '../shared/ContentCard'
import Button from '../shared/Button'
import Illustration from '../shared/Illustration'
import { StepProps } from '../../types'

const NameStep = ({ formData, updateFormData, onNext, onBack }: StepProps) => {
  const [firstName, setFirstName] = useState(formData.firstName || '')
  const [lastName, setLastName] = useState(formData.lastName || '')
  const [errors, setErrors] = useState({ firstName: '', lastName: '' })

  const validateName = (name: string): string => {
    if (!name.trim()) {
      return 'This field is required'
    }
    if (name.trim().length < 2) {
      return 'Name must be at least 2 characters'
    }
    if (!/^[a-zA-Z\s'-]+$/.test(name.trim())) {
      return 'Name can only contain letters, spaces, hyphens, and apostrophes'
    }
    return ''
  }

  const handleFirstNameChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value
    setFirstName(value)
    setErrors({ ...errors, firstName: '' })
  }

  const handleLastNameChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value
    setLastName(value)
    setErrors({ ...errors, lastName: '' })
  }

  const handleContinue = () => {
    const firstNameError = validateName(firstName)
    const lastNameError = validateName(lastName)

    if (firstNameError || lastNameError) {
      setErrors({
        firstName: firstNameError,
        lastName: lastNameError,
      })
      return
    }

    updateFormData({
      firstName: firstName.trim(),
      lastName: lastName.trim(),
    })
    onNext()
  }

  return (
    <div>
      <Header />
      <ContentCard title="What is your name?">
        <div className="space-y-6">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              First Name
            </label>
            <input
              type="text"
              value={firstName}
              onChange={handleFirstNameChange}
              placeholder="Enter your first name"
              className={`w-full px-4 py-3 border-2 rounded-lg focus:outline-none focus:ring-2 transition-all duration-200 ${
                errors.firstName
                  ? 'border-red-500 focus:border-red-500 focus:ring-red-200'
                  : 'border-gray-200 focus:border-blue-600 focus:ring-blue-200'
              }`}
              onBlur={() => {
                if (firstName) {
                  setErrors({
                    ...errors,
                    firstName: validateName(firstName),
                  })
                }
              }}
            />
            {errors.firstName && (
              <motion.p
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                className="text-red-600 text-sm mt-2"
              >
                {errors.firstName}
              </motion.p>
            )}
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Last Name
            </label>
            <input
              type="text"
              value={lastName}
              onChange={handleLastNameChange}
              placeholder="Enter your last name"
              className={`w-full px-4 py-3 border-2 rounded-lg focus:outline-none focus:ring-2 transition-all duration-200 ${
                errors.lastName
                  ? 'border-red-500 focus:border-red-500 focus:ring-red-200'
                  : 'border-gray-200 focus:border-blue-600 focus:ring-blue-200'
              }`}
              onBlur={() => {
                if (lastName) {
                  setErrors({
                    ...errors,
                    lastName: validateName(lastName),
                  })
                }
              }}
            />
            {errors.lastName && (
              <motion.p
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                className="text-red-600 text-sm mt-2"
              >
                {errors.lastName}
              </motion.p>
            )}
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
          disabled={!firstName.trim() || !lastName.trim()}
        >
          Continue
        </Button>
      </div>

      <Illustration />
    </div>
  )
}

export default NameStep
