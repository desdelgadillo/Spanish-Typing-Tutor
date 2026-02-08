#!/bin/bash

echo "🚀 Spanish Typing Tutor - Gemini Setup"
echo "======================================"
echo ""

# Check if .env file exists
if [ -f .env ]; then
    echo "✅ .env file already exists"
    echo ""
    read -p "Do you want to update your API key? (y/n): " -n 1 -r
    echo ""
    if [[ ! $REPLY =~ ^[Yy]$ ]]; then
        echo "Skipping API key setup..."
    else
        read -p "Enter your Gemini API key: " api_key
        echo "GEMINI_API_KEY=$api_key" > .env
        echo "✅ API key updated!"
    fi
else
    echo "📝 Setting up .env file..."
    echo ""
    echo "Get your API key from: https://aistudio.google.com/app/apikey"
    echo ""
    read -p "Enter your Gemini API key: " api_key
    
    if [ -z "$api_key" ]; then
        echo "❌ No API key provided. Copying .env.example..."
        cp .env.example .env
        echo "⚠️  Please edit .env and add your API key manually"
    else
        echo "GEMINI_API_KEY=$api_key" > .env
        echo "✅ .env file created!"
    fi
fi

echo ""
echo "📦 Installing dependencies..."
npm install

echo ""
echo "✅ Setup complete!"
echo ""
echo "To start the server, run:"
echo "  npm start"
echo ""
echo "Then open: http://localhost:3000"
