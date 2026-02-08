# Vertex AI / Gemini TTS Setup Guide

This guide explains how to set up and use high-quality Vertex AI and Gemini Text-to-Speech voices with your Spanish Typing Tutor.

## Overview

The application now supports **two speech synthesis systems**:

1. **Standard Google Cloud Text-to-Speech** (via `/api/synthesize-speech`)
   - Wavenet voices (high quality)
   - Example: `en-US-Wavenet-F`, `en-US-Wavenet-D`

2. **Vertex AI Neural & Studio TTS** (via `/api/synthesize-speech-vertex`)
   - Neural2 voices (higher quality, more natural)
   - Studio voices (Gemini-powered, most natural)
   - Example: `en-US-Studio-O`, `es-ES-Studio-F`
   - Supports the latest generative speech models

## Prerequisites

1. **Google Cloud Account** with billing enabled
2. **Google Cloud Project** with the following APIs enabled:
   - Cloud Text-to-Speech API
   - Vertex AI API
3. **Application Default Credentials** set up on your machine

## Setup Steps

### 1. Create/Select a Google Cloud Project

```bash
# If you don't have gcloud CLI installed, install it:
# macOS: brew install --cask google-cloud-sdk

# Initialize gcloud and login
gcloud init

# Set your project (replace with your actual project ID)
gcloud config set project YOUR_PROJECT_ID
```

### 2. Enable Required APIs

```bash
# Enable Text-to-Speech API
gcloud services enable texttospeech.googleapis.com

# Enable Vertex AI API
gcloud services enable aiplatform.googleapis.com

# Verify APIs are enabled
gcloud services list --enabled
```

### 3. Set Up Application Default Credentials

```bash
# Authenticate with Application Default Credentials
gcloud auth application-default login

# This opens a browser to log in and saves credentials locally
# Credentials are typically saved to:
# ~/.config/gcloud/application_default_credentials.json
```

### 4. Install Node.js Dependencies

```bash
npm install
```

This installs `google-auth-library` alongside existing dependencies.

### 5. Start the Server

```bash
npm start
```

The server will now listen at `http://localhost:3000` and support both endpoints:
- `/api/synthesize-speech` — Standard Cloud TTS
- `/api/synthesize-speech-vertex` — Vertex AI Neural TTS

## Using Vertex AI Voices in the App

1. Click the **Configuración** (Settings) button in the app
2. When prompted, enter `yes` when asked to use Vertex AI voices
3. Select a voice from the list of Vertex AI Neural2 voices:
   - `en-US-Neural2-A` — Male voice
   - `en-US-Neural2-C` — Female voice  
   - `en-US-Neural2-E` — Male voice (alternative)
   - `en-US-Neural2-F` — Female voice (alternative)
4. Optionally adjust encoding (MP3 recommended) and speaking rate
5. Settings are saved in the browser session

## Available Voices

### Standard Wavenet Voices

These are supported by the standard `/api/synthesize-speech` endpoint:

- `en-US-Wavenet-A` — Male
- `en-US-Wavenet-B` — Male
- `en-US-Wavenet-C` — Female
- `en-US-Wavenet-D` — Male
- `en-US-Wavenet-E` — Female
- `en-US-Wavenet-F` — Female

### Vertex AI Neural2 Voices (Recommended)

These are supported by the `/api/synthesize-speech-vertex` endpoint:

- `en-US-Neural2-A` — Male (recommended)
- `en-US-Neural2-C` — Female (recommended)
- `en-US-Neural2-E` — Male
- `en-US-Neural2-F` — Female

### Gemini Studio Voices (Premium)

These are the highest quality voices available via Vertex AI:
- `en-US-Studio-O` — Female (Recommended for English)
- `es-ES-Studio-F` — Female (Recommended for Spanish)

## Troubleshooting

### Error: "Failed to obtain Google Cloud credentials"

**Solution:**
```bash
# Re-authenticate with Application Default Credentials
gcloud auth application-default login
```

### Error: "Text-to-Speech API not enabled"

**Solution:**
```bash
gcloud services enable texttospeech.googleapis.com
```

### Error: "Vertex AI API not enabled"

**Solution:**
```bash
gcloud services enable aiplatform.googleapis.com
```

### No audio output

1. Check browser console (Ctrl+Shift+I or Cmd+Shift+I) for errors
2. Ensure browser supports Web Audio API (all modern browsers do)
3. Check system volume is not muted

### Voice not found error

Ensure the voice name matches exactly. Use the format: `LANGUAGE-REGION-VOICE_TYPE-GENDER`

Example: `en-US-Neural2-C`

## Audio Formats

Supported encodings when making synthesis requests:

- **MP3** (default) — Best compatibility and file size
- **LINEAR16** — Uncompressed 16-bit PCM audio
- **OGG_OPUS** — Ogg container with Opus codec

## API Reference

### Standard TTS Endpoint

**POST** `/api/synthesize-speech`

Request body:
```json
{
  "text": "Hello world",
  "voiceName": "en-US-Wavenet-F",
  "audioEncoding": "MP3",
  "speakingRate": 1.0,
  "pitch": 0.0
}
```

Response: Binary audio data with appropriate `Content-Type` header

### Vertex AI Endpoint

**POST** `/api/synthesize-speech-vertex`

Request body (same as above):
```json
{
  "text": "Hello world",
  "voiceName": "en-US-Neural2-C",
  "audioEncoding": "MP3",
  "speakingRate": 1.0,
  "pitch": 0.0
}
```

Response: Binary audio data with appropriate `Content-Type` header

## Cost Considerations

- **Google Cloud Text-to-Speech** is very affordable (~ $15 per 1M characters)
- **Vertex AI TTS** may have different pricing; check the [Google Cloud Pricing page](https://cloud.google.com/text-to-speech/pricing)
- Both services offer a free tier

## Environment Variables (Optional)

You can set a default voice via environment variables:

```bash
# Standard TTS default voice
export DEFAULT_VOICE=en-US-Wavenet-F

# Start server
npm start
```

If no voice is specified in the request, the server will use the environment default or fall back to `en-US-Wavenet-F`.

## Additional Resources

- [Google Cloud Text-to-Speech Documentation](https://cloud.google.com/text-to-speech/docs)
- [Vertex AI TTS Documentation](https://cloud.google.com/vertex-ai/docs/generative-ai/text-to-speech/overview)
- [Google Cloud Authentication Guide](https://cloud.google.com/docs/authentication/getting-started)
- [google-auth-library Documentation](https://github.com/googleapis/google-auth-library-nodejs)
