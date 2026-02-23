import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import AccountTypeStep from './components/steps/AccountTypeStep'
import PhoneNumberStep from './components/steps/PhoneNumberStep'
import OTPStep from './components/steps/OTPStep'
import NameStep from './components/steps/NameStep'
import PasswordStep from './components/steps/PasswordStep'
import SuccessModal from './components/SuccessModal'
import { FormData } from './types'

function App() {
  const [currentStep, setCurrentStep] = useState(1)
  const [formData, setFormData] = useState<FormData>({
    accountType: 'personal',
    phoneNumber: '',
    otp: '',
    firstName: '',
    lastName: '',
    password: '',
    confirmPassword: '',
    email: '',
  })
  const [showSuccessModal, setShowSuccessModal] = useState(false)

  const totalSteps = 5

  const handleNext = () => {
    if (currentStep < totalSteps) {
      setCurrentStep(currentStep + 1)
    } else {
      // Generate email from name for demo
      const email = `${formData.firstName.toLowerCase()}@example.com`
      setFormData({ ...formData, email })
      setShowSuccessModal(true)
    }
  }

  const handleBack = () => {
    if (currentStep > 1) {
      setCurrentStep(currentStep - 1)
    }
  }

  const updateFormData = (updates: Partial<FormData>) => {
    setFormData({ ...formData, ...updates })
  }

  const renderStep = () => {
    switch (currentStep) {
      case 1:
        return (
          <AccountTypeStep
            formData={formData}
            updateFormData={updateFormData}
            onNext={handleNext}
            onBack={handleBack}
          />
        )
      case 2:
        return (
          <PhoneNumberStep
            formData={formData}
            updateFormData={updateFormData}
            onNext={handleNext}
            onBack={handleBack}
          />
        )
      case 3:
        return (
          <OTPStep
            formData={formData}
            updateFormData={updateFormData}
            onNext={handleNext}
            onBack={handleBack}
          />
        )
      case 4:
        return (
          <NameStep
            formData={formData}
            updateFormData={updateFormData}
            onNext={handleNext}
            onBack={handleBack}
          />
        )
      case 5:
        return (
          <PasswordStep
            formData={formData}
            updateFormData={updateFormData}
            onNext={handleNext}
            onBack={handleBack}
          />
        )
      default:
        return null
    }
  }

  return (
    <div className="min-h-screen bg-[#1e3a8a] py-8 px-4">
      <div className="max-w-2xl mx-auto">
        <AnimatePresence mode="wait">
          <motion.div
            key={currentStep}
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -20 }}
            transition={{ duration: 0.3 }}
          >
            {renderStep()}
          </motion.div>
        </AnimatePresence>
      </div>
      {showSuccessModal && (
        <SuccessModal
          formData={formData}
          onClose={() => setShowSuccessModal(false)}
        />
      )}
    </div>
  )
}

export default App
