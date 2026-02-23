#!/bin/bash

# Fix Node.js version issue
# This script ensures Node.js 18 is used

echo "🔧 Fixing Node.js version..."

# Load nvm
export NVM_DIR="$HOME/.nvm"
[ -s "$NVM_DIR/nvm.sh" ] && \. "$NVM_DIR/nvm.sh"

# Remove any local node installations from PATH temporarily
export PATH=$(echo $PATH | tr ':' '\n' | grep -v '/\.local/node-v14' | tr '\n' ':' | sed 's/:$//')

# Use Node.js 18
nvm use 18

# Ensure nvm's node is first in PATH
export PATH="$NVM_DIR/versions/node/v18.20.8/bin:$PATH"

# Remove the problematic local node from PATH permanently for this session
export PATH=$(echo $PATH | tr ':' '\n' | grep -v '/\.local/node-v14' | tr '\n' ':' | sed 's/:$//')

# Verify
echo ""
echo "✅ Node.js version check:"
NODE_PATH=$(which node)
NODE_VERSION=$(node --version)
echo "   Location: $NODE_PATH"
echo "   Version: $NODE_VERSION"

if [[ "$NODE_VERSION" =~ ^v1[89]\. ]] || [[ "$NODE_VERSION" =~ ^v2[0-9]\. ]]; then
  echo ""
  echo "✅ Success! Node.js 18+ is now active."
  echo "   You can now run: npm run dev"
else
  echo ""
  echo "❌ Still using wrong version. Try running these commands manually:"
  echo "   unalias node 2>/dev/null;"
  echo "   export PATH=\"\$HOME/.nvm/versions/node/v18.20.8/bin:\$PATH\";"
  echo "   export PATH=\$(echo \$PATH | tr ':' '\n' | grep -v '/\.local/node-v14' | tr '\n' ':' | sed 's/:$//');"
  echo "   node --version"
fi
