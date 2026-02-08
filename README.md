# Spanish Typing Tutor for Blind Users

A fully accessible typing tutor application designed specifically for blind users learning to type English text using Spanish language instruction. Now powered by **Google Gemini API** for high-quality, natural-sounding Text-to-Speech.

## 🎯 Features

- **Gemini-Powered TTS**: Uses Google Gemini 2.0 Flash API for natural, high-quality voice feedback
- **Simple Setup**: Just add an API key - no complex Google Cloud configuration
- **Full Voice Feedback**: All instructions and feedback spoken in Spanish
- **Progressive Difficulty**: Three levels (Beginner, Intermediate, Advanced) with increasing complexity
- **Real-time Feedback**: Visual border colors change as users type (green = correct, red = incorrect)
- **Keyboard Navigation**: Fully accessible via keyboard (Enter to submit, buttons for controls)
- **Screen Reader Compatible**: Proper ARIA labels and live regions for screen reader support
- **Statistics Tracking**: Tracks correct/incorrect answers, accuracy rate, and words completed
- **English Content**: Learn to type English words with Spanish language instruction
- **Fallback Support**: Falls back to browser's Web Speech API if server TTS fails

## 📁 Project Structure

```
spanish-typing-tutor/
├── index.html                      # Main HTML structure
├── spanish-typing-tutor.js         # Frontend application logic
├── server.js                        # Express.js backend for Gemini TTS
├── package.json                     # Node.js dependencies
├── .env.example                     # Environment variable template
├── README.md                        # This file
├── GEMINI_SETUP.md                 # Detailed Gemini API setup guide
└── VERTEX_AI_SETUP.md              # Legacy Google Cloud setup (deprecated)
```

## 🚀 Quick Start

### Step 1: Get Your Gemini API Key

1. Visit [Google AI Studio](https://aistudio.google.com/app/apikey)
2. Sign in with your Google account
3. Click "Create API Key"
4. Copy your API key

### Step 2: Configure the Application

```bash
# Create .env file from example
cp .env.example .env

# Edit .env and add your API key
# GEMINI_API_KEY=your_actual_api_key_here
```

### Step 3: Install and Run

```bash
# Install dependencies
npm install

# Start the server
npm start
```

### Step 4: Use the App

Open your browser and navigate to: `http://localhost:3000`

## 🆚 Why We Switched to Gemini API

**Previous Setup (Google Cloud TTS)**
- ❌ Required Google Cloud account with billing
- ❌ Complex authentication (gcloud CLI, service accounts)
- ❌ Multiple API endpoints to manage
- ❌ Higher cost per use

**New Setup (Gemini API)** ✨
- ✅ Simple API key authentication
- ✅ Free tier (60 requests/minute)
- ✅ 5-minute setup
- ✅ Better voice quality with Gemini 2.0 Flash
- ✅ Lower cost

## 📚 Documentation

- **[Gemini Setup Guide](GEMINI_SETUP.md)** - Detailed setup and troubleshooting
- **[Legacy Google Cloud Setup](VERTEX_AI_SETUP.md)** - Old setup (deprecated)
   (See [VERTEX_AI_SETUP.md](VERTEX_AI_SETUP.md) for detailed instructions)

3. **Start the server:**
   ```bash
   npm start
   ```

4. **Open in browser:**
   - Navigate to `http://localhost:3000`
   - Click "Iniciar Lección" to begin
         - **Windows Users:** Ensure you access the app via `localhost:3000` rather than opening the HTML file directly to avoid rendering issues.

## 🎮 Controls

- **Iniciar Lección** — Begin the typing lesson
- **Repetir Instrucciones** — Hear the current word again
- **Saltar Palabra** — Skip to the next word (counts as incorrect)
- **Configuración** — Change voice, encoding, and speech rate (with server)

## 📊 Lesson Structure

### Lesson 1: Home Row - Left Hand (Fila Base - Mano Izquierda)
- Introduction to the Enter key
- Letters: F, D, S, A (left-hand home row)
- Practice words: sad, dad, add, as

### Lesson 2: Home Row - Right Hand (Fila Base - Mano Derecha)
- Letters: J, K, L (right-hand home row)
- Practice words using both hands: all, ask, fall, salad

### Lesson 3: Home Row Mastery (Práctica de Fila Base)
- Extended practice with home row letters
- Challenge words: lad, lass, flask, falls

## ♿ Accessibility Features

- **ARIA Labels**: All interactive elements have descriptive labels
- **Live Regions**: Screen readers announce changes and feedback
- **Keyboard Support**: Full keyboard navigation (Tab, Enter, Escape)
- **High Contrast**: Dark theme with good contrast ratios
- **Large Text**: 2rem font size for easy reading
- **Focus Indicators**: Clear blue border on focused elements
- **Spanish Instructions**: All UI text and feedback in Spanish

## 🔊 Speech Synthesis Options

### Built-in Web Speech API (No Setup Required)
- Works in all modern browsers
- No server needed
- Basic voice quality
- Automatic voice selection based on OS language

### Google Cloud Text-to-Speech (Server Required)
- High-quality Wavenet voices
- Requires Google Cloud account and credentials
- Run with `npm start`

### Vertex AI Neural TTS (Server Required, Recommended)
- Premium natural-sounding voices
- Neural2 voice family with multiple gender/style options
- Requires Google Cloud account, billing enabled, and Vertex AI API
- Recommended for production use

## 🔧 Configuration

### Via Settings Button

Click "Configuración" in the app to adjust:

1. **TTS System**: Switch between standard Cloud TTS and Vertex AI (with server)
2. **Voice**: Select from available voices
3. **Encoding**: Choose audio format (MP3, LINEAR16, OGG_OPUS)
4. **Speaking Rate**: Adjust speech speed (1.0 = normal)

### Via Environment Variables

```bash
# Set default voice
export DEFAULT_VOICE=en-US-Neural2-C

# Start server
npm start
```

## 🌐 Browser Support

- ✅ Chrome/Chromium (recommended)
- ✅ Firefox
- ✅ Edge
- ✅ Safari (Web Speech API only, no server TTS)

## 📚 Setup Guides

### For Web Speech API Only (No Setup)
Just open `index.html` in a browser. No installation or configuration needed.

### For Google Cloud TTS
See [VERTEX_AI_SETUP.md](VERTEX_AI_SETUP.md) for:
- Google Cloud project setup
- API enablement
- Authentication configuration
- Voice selection guide

## 🛠️ Technical Stack

- **Frontend**: Pure HTML/CSS/JavaScript (no dependencies)
- **Backend**: Node.js + Express.js
- **Speech Synthesis**: 
  - Browser Web Speech API (fallback)
  - Google Cloud Text-to-Speech API
  - Vertex AI TTS API
- **Authentication**: Google Auth Library (OAuth 2.0)

## 🔮 Future Enhancements

- [ ] Additional lessons for other keyboard rows
- [ ] Timed typing challenges
- [ ] Advanced statistics (WPM, time tracking)
- [ ] Save progress to localStorage/database
- [ ] Multi-language instruction support
- [ ] Custom word lists
- [ ] Sound effects and notifications
- [ ] Mobile app version

## ⚠️ Important Notes

1. **Google Cloud Billing**: Vertex AI and Cloud TTS services require a billing-enabled Google Cloud project. Both offer free tiers.

2. **Credentials Security**: Never commit `application_default_credentials.json` or other credential files to version control. Add `~/.config/gcloud/` to `.gitignore`.

3. **Audio Quality**: Server TTS (especially Vertex AI) provides much better quality than browser Web Speech API.

4. **Network Dependency**: Server TTS requires internet connectivity to reach Google Cloud APIs.

## 📝 Translation

The UI is fully in Spanish for native Spanish speakers. To modify content:

1. Edit the `STRINGS` object in `spanish-typing-tutor.js`
2. Modify the `LESSONS` array for lesson content
3. Update HTML static text in `index.html`

## 🐛 Troubleshooting

### "No audio output"
1. Check browser volume and system volume
2. Check browser console for JavaScript errors
3. If using server: verify `/api/synthesize-speech` endpoint is responding

### "Failed to obtain Google Cloud credentials"
```bash
gcloud auth application-default login
```

### "API not enabled"
```bash
gcloud services enable texttospeech.googleapis.com
gcloud services enable aiplatform.googleapis.com
```

### "Vertex AI TTS endpoint not responding"
- Verify Google Cloud project has Vertex AI API enabled
- Check billing is enabled on the project
- Verify credentials have necessary permissions

## 📄 License

Personal educational project.

## 🙏 Acknowledgments

Built for blind Spanish speakers learning English typing, with focus on accessibility through high-quality voice feedback and keyboard navigation.
