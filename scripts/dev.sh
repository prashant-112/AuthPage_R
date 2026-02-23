#!/bin/bash

# Load nvm
export NVM_DIR="$HOME/.nvm"
[ -s "$NVM_DIR/nvm.sh" ] && \. "$NVM_DIR/nvm.sh"

# Use Node.js 18
nvm use 18

# Verify Node version
NODE_VERSION=$(node --version)
echo "Using Node.js version: $NODE_VERSION"

# Check if Node version is 18 or higher
if [[ ! "$NODE_VERSION" =~ ^v1[89]\. ]] && [[ ! "$NODE_VERSION" =~ ^v2[0-9]\. ]]; then
  echo "Error: Node.js 18+ is required. Current version: $NODE_VERSION"
  echo "Please run: nvm use 18"
  exit 1
fi

# Run vite
exec vite "$@"
