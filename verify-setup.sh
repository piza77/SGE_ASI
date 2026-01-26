#!/bin/bash

echo "==================================="
echo "SGE ASI - Setup Verification"
echo "==================================="
echo ""

# Check Node.js
echo "✓ Checking Node.js..."
node --version

# Check npm
echo "✓ Checking npm..."
npm --version

# Check backend dependencies
echo ""
echo "✓ Backend dependencies:"
cd API && npm list --depth=0 2>/dev/null | head -20

# Check frontend dependencies
echo ""
echo "✓ Frontend dependencies:"
cd ../FRONT && npm list --depth=0 2>/dev/null | head -20

echo ""
echo "==================================="
echo "Setup verification complete!"
echo "==================================="
echo ""
echo "To start the system:"
echo "1. With Docker: docker-compose up --build"
echo "2. Manually:"
echo "   - Start MySQL server"
echo "   - cd API && npm run dev"
echo "   - cd FRONT && npm run dev"
echo ""
