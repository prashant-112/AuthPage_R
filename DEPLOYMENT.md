# Deployment Guide

## Quick Start

1. **Install Dependencies**
   ```bash
   npm install
   ```

2. **Run Development Server**
   ```bash
   npm run dev
   ```

3. **Build for Production**
   ```bash
   npm run build
   ```

## Deploy to Vercel

### Option 1: Using Vercel CLI

1. Install Vercel CLI:
   ```bash
   npm i -g vercel
   ```

2. Deploy:
   ```bash
   vercel
   ```

3. For production:
   ```bash
   vercel --prod
   ```

### Option 2: Using Vercel Dashboard

1. Push your code to GitHub
2. Go to [vercel.com](https://vercel.com)
3. Click "New Project"
4. Import your GitHub repository
5. Vercel will auto-detect Vite settings
6. Click "Deploy"

The `vercel.json` file is already configured for optimal deployment.

## Deploy to Netlify

1. Install Netlify CLI:
   ```bash
   npm i -g netlify-cli
   ```

2. Build the project:
   ```bash
   npm run build
   ```

3. Deploy:
   ```bash
   netlify deploy --prod --dir=dist
   ```

Or use Netlify's dashboard and connect your GitHub repository.

## Environment Variables

No environment variables are required for this project. All configuration is handled in the code.

## Build Output

The production build will be in the `dist` directory after running `npm run build`.

## Troubleshooting

- If build fails, ensure all dependencies are installed: `npm install`
- Check Node.js version (18+ recommended)
- Clear node_modules and reinstall if issues persist: `rm -rf node_modules package-lock.json && npm install`
