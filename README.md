# RootPay - Account Creation Form

A beautiful, interactive multi-step account creation form built with React, TypeScript, and modern web technologies.

## 🚀 Live Demo

[Deployed on Vercel](https://rootpay-account-creation.vercel.app)

## ⚠️ Important: Node.js Version Requirement

**This project requires Node.js 18 or higher.**

Before running the project, make sure you're using Node.js 18+:

```bash
# Check your current Node.js version
node --version

# If it's not 18+, switch to Node.js 18 using nvm
source ~/.nvm/nvm.sh
nvm use 18

# Verify the version
node --version  # Should show v18.x.x or higher
```

## 📋 Features

- **Multi-step Form Flow**: Smooth progression through 5 steps of account creation
- **Interactive States**: Hover, focus, active, and loading states on all interactive elements
- **Form Validation**: Comprehensive validation with real-time error feedback
- **Animations**: Smooth transitions and animations using Framer Motion
- **Responsive Design**: Works seamlessly across all device sizes
- **Accessibility**: Proper focus management and ARIA labels

## 🛠️ Tech Stack

- **React 18**: Modern React with hooks
- **TypeScript**: Type-safe development
- **Vite**: Fast build tool and dev server
- **Tailwind CSS**: Utility-first CSS framework
- **Framer Motion**: Animation library for smooth transitions

## 📁 Project Structure

```
RootPay/
├── src/
│   ├── components/
│   │   ├── shared/          # Reusable components
│   │   │   ├── Header.tsx
│   │   │   ├── ContentCard.tsx
│   │   │   ├── Button.tsx
│   │   │   └── Illustration.tsx
│   │   ├── steps/           # Step components
│   │   │   ├── AccountTypeStep.tsx
│   │   │   ├── PhoneNumberStep.tsx
│   │   │   ├── OTPStep.tsx
│   │   │   ├── NameStep.tsx
│   │   │   └── PasswordStep.tsx
│   │   └── SuccessModal.tsx
│   ├── types.ts             # TypeScript type definitions
│   ├── App.tsx              # Main application component
│   ├── main.tsx             # Application entry point
│   └── index.css            # Global styles
├── public/                  # Static assets
├── package.json
├── tsconfig.json
├── vite.config.ts
├── tailwind.config.js
└── .nvmrc                   # Node.js version specification
```

## 🎨 Design Implementation

### Step 1: Account Type Selection
- Radio button selection for Personal/Business accounts
- Visual feedback on selection
- Smooth hover and click animations

### Step 2: Phone Number Input
- Country code selector (currently US +1)
- Phone number validation
- Loading state during OTP send simulation

### Step 3: OTP Verification
- 4-digit OTP input with auto-focus
- Paste support for OTP codes
- Resend OTP functionality with cooldown timer
- Real-time validation

### Step 4: Name Input
- First and last name fields
- Character validation (letters, spaces, hyphens, apostrophes)
- Minimum length validation

### Step 5: Password Creation
- Password visibility toggle
- Password strength requirements (8-12 characters)
- Password confirmation matching
- Real-time validation feedback

### Success Modal
- Animated success checkmark
- Account summary display
- Smooth modal transitions

## 🎯 Key Features & Enhancements

### Interaction States
- **Hover**: Scale and color transitions on buttons and interactive elements
- **Focus**: Ring effects and border color changes on form inputs
- **Active**: Scale-down effect on button clicks
- **Loading**: Spinner animations during async operations
- **Disabled**: Visual feedback for disabled states

### Validation & Error Handling
- Real-time field validation
- Error messages with smooth animations
- Visual error indicators (red borders)
- Form-level validation before progression
- Empty state handling

### Animations
- Page transitions between steps (slide and fade)
- Button interactions (scale on hover/tap)
- Input focus animations
- Modal entrance/exit animations
- Success checkmark animation

### Code Quality
- TypeScript for type safety
- Component-based architecture
- Reusable shared components
- Clean separation of concerns
- Proper state management

## 🚀 Getting Started

### Prerequisites
- Node.js 18+ and npm/yarn/pnpm
- nvm (Node Version Manager) recommended

### Installation

1. **Switch to Node.js 18** (IMPORTANT):
   ```bash
   source ~/.nvm/nvm.sh
   nvm use 18
   # Or if you have .nvmrc: nvm use
   ```

2. Clone the repository:
   ```bash
   git clone <repository-url>
   cd RootPay
   ```

3. Install dependencies:
   ```bash
   npm install
   ```

4. Start the development server:
   ```bash
   npm run dev
   ```

5. Open your browser and navigate to `http://localhost:5173`

### Build for Production

```bash
npm run build
```

The production build will be in the `dist` directory.

### Preview Production Build

```bash
npm run preview
```

## 🔧 Troubleshooting

### "Unexpected token '??='" Error

This error means you're using Node.js 14 or lower. The `??=` operator requires Node.js 15+.

**Solution:**
```bash
# Load nvm
source ~/.nvm/nvm.sh

# Switch to Node.js 18
nvm use 18

# Verify
node --version  # Should show v18.x.x

# Now run the dev server
npm run dev
```

### Node Version Not Switching

If `nvm use 18` doesn't work, try:
```bash
# Make sure nvm is loaded in your shell
export NVM_DIR="$HOME/.nvm"
[ -s "$NVM_DIR/nvm.sh" ] && \. "$NVM_DIR/nvm.sh"

# Use Node.js 18
nvm use 18

# Set as default (optional)
nvm alias default 18
```

## 📦 Deployment

This project is configured for easy deployment on Vercel:

1. Push your code to GitHub
2. Import the project in Vercel
3. Vercel will automatically detect Vite and configure the build settings
4. Deploy!

The project includes a `vercel.json` configuration file for optimal deployment settings.

## 🎨 Styling Decisions

- **Color Scheme**: Blue primary color (#0ea5e9) matching the design, with dark blue background (#1e3a8a)
- **Typography**: System font stack for optimal performance and cross-platform consistency
- **Spacing**: Consistent spacing scale using Tailwind's default spacing
- **Border Radius**: Rounded corners (rounded-lg, rounded-2xl) for modern appearance
- **Shadows**: Subtle shadows for depth and elevation

## 🔧 Configuration Files

- `vite.config.ts`: Vite build configuration
- `tailwind.config.js`: Tailwind CSS customization
- `tsconfig.json`: TypeScript compiler options
- `vercel.json`: Vercel deployment configuration
- `.nvmrc`: Node.js version specification (18)

## 📝 Future Enhancements

- [ ] International phone number support with country flags
- [ ] Password strength meter
- [ ] Email verification step
- [ ] Social login options
- [ ] Form data persistence (localStorage)
- [ ] Progress indicator showing current step
- [ ] Keyboard navigation improvements
- [ ] Unit and integration tests

## 📄 License

This project is created for demonstration purposes.

## 👤 Author

Built with ❤️ for RootPay
