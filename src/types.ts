export interface FormData {
  accountType: 'personal' | 'business'
  phoneNumber: string
  otp: string
  firstName: string
  lastName: string
  password: string
  confirmPassword: string
  email: string
}

export interface StepProps {
  formData: FormData
  updateFormData: (updates: Partial<FormData>) => void
  onNext: () => void
  onBack: () => void
}
