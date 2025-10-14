#!/bin/bash

# Plant Saver & Accounting Website - Quick Start Script

echo "🚀 Starting Plant Saver & Accounting Website..."
echo ""
echo "📦 Checking if dependencies are installed..."

if [ ! -d "node_modules" ]; then
    echo "Installing dependencies..."
    npm install
else
    echo "✓ Dependencies already installed"
fi

echo ""
echo "🌐 Starting development server..."
echo "The website will open at http://localhost:3000"
echo ""
echo "Press Ctrl+C to stop the server"
echo ""

npm run dev

