# Gemini API Setup for Spanish Typing Tutor

This Spanish Typing Tutor now uses **Google's Gemini API** for high-quality Text-to-Speech (TTS). This is simpler and more cost-effective than the previous Google Cloud setup.

## Quick Setup (5 minutes)

### 1. Get Your Gemini API Key

1. Visit [Google AI Studio](https://aistudio.google.com/app/apikey)
2. Sign in with your Google account
3. Click "Create API Key"
4. Copy your API key

### 2. Configure the Application

1. Create a `.env` file in the project root:
   ```bash
   cp .env.example .env
   ```

2. Edit `.env` and add your API key:
   ```
   GEMINI_API_KEY=your_actual_api_key_here
   ```

### 3. Install Dependencies

```bash
npm install
```

### 4. Start the Server

```bash
npm start
```

The app will be available at: `http://localhost:3000`

## What Changed?

### Before (Google Cloud)
- Required Google Cloud account with billing
- Complex authentication (gcloud CLI, service accounts)
- Multiple API endpoints
- Higher cost per use

### After (Gemini API)
- Simple API key authentication
- Free tier available (60 requests/minute)
- Unified endpoint
- Better voice quality with Gemini 2.0 Flash

## Voice Options

The app now uses Gemini-powered voices:

**English (for typing practice)**
- `en-US-Studio-O` - Female, high quality (default)
- `en-US-Studio-Q` - Male, high quality
- `en-US-Neural2-F` - Female, neural
- `en-US-Neural2-A` - Male, neural

**Spanish (for instructions)**
- `es-ES-Studio-F` - Female, high quality (default)
- `es-ES-Neural2-F` - Female, neural
- `es-ES-Wavenet-B` - Male, wavenet

## Troubleshooting

### "Gemini API not initialized" error
- Make sure you created the `.env` file
- Check that your API key is correct
- Restart the server after adding the key

### Audio not playing
- Click anywhere on the page to enable audio (browser security requirement)
- Check browser console for errors
- Try refreshing the page

### Rate limits
- Free tier: 60 requests/minute
- If you hit limits, wait a minute or upgrade your API key

## API Pricing (as of Jan 2026)

Gemini API TTS is significantly cheaper than Google Cloud TTS:
- Free tier: 60 requests/minute
- Paid tier: $0.00002 per character (much lower than Cloud TTS)

For a typing tutor with short phrases, you can easily stay within the free tier.

## Additional Resources

- [Gemini API Documentation](https://ai.google.dev/docs)
- [Audio Generation Guide](https://ai.google.dev/gemini-api/docs/audio)
- [API Pricing](https://ai.google.dev/pricing)

## Support

If you encounter issues:
1. Check the server console for detailed error messages
2. Verify your API key is correct
3. Ensure you're using a supported browser (Chrome, Edge, Firefox)
