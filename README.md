# Spanish Typing Tutor for Blind Users

A fully accessible, client-side typing tutor application designed specifically for blind users learning to type English text using Spanish language instruction. Uses browser's built-in Text-to-Speech for natural voice feedback.

## 🎯 Features

- **Browser-Powered TTS**: Uses your browser's built-in speech synthesis - no server or API required!
- **Zero Setup**: Just open and use - works completely offline
- **Full Voice Feedback**: All instructions and feedback spoken in Spanish
- **Progressive Difficulty**: Three levels (Beginner, Intermediate, Advanced) with increasing complexity
- **Real-time Feedback**: Visual border colors change as users type (green = correct, red = incorrect)
- **Space Bar Submission**: Press space to submit answers or double-tap space to repeat instructions
- **Auto-Recognition**: Automatically advances when you type the complete word correctly
- **Screen Reader Compatible**: Proper ARIA labels and live regions for screen reader support
- **Statistics Tracking**: Tracks correct/incorrect answers, accuracy rate, and words completed
- **English Content**: Learn to type English words with Spanish language instruction

## 📁 Project Structure

```
spanish-typing-tutor/
├── index.html                      # Main HTML structure
├── spanish-typing-tutor.js         # Application logic
├── README.md                        # This file
├── GEMINI_SETUP.md                 # Historical documentation
└── MIGRATION_SUMMARY.md            # Migration history
```

## 🚀 Quick Start

**No installation needed!** This is a pure client-side application.

### Option 1: GitHub Pages (Recommended)
Visit: **[https://desdelgadillo.github.io/Spanish-Typing-Tutor/](https://desdelgadillo.github.io/Spanish-Typing-Tutor/)**

### Option 2: Open Locally
1. Download or clone this repository
2. Open `index.html` in any modern web browser
3. Click anywhere on the page to enable audio
4. Press "Iniciar Lección" to begin!

**That's it!** No servers, no configuration, no API keys needed.

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

## 🎮 Controls

- **Iniciar Lección** — Begin the typing lesson
- **Repetir Instrucciones** — Hear the current word again
- **Saltar Palabra** — Skip to the next word (counts as incorrect)
- **Space Bar** — Submit your answer
- **Double-tap Space** — Repeat the last instruction

## 🌐 Browser Support

Works in all modern browsers with Web Speech API support:
- ✅ Chrome/Chromium (recommended - best voice quality)
- ✅ Firefox
- ✅ Edge
- ✅ Safari

## 🛠️ Technical Stack

- **Frontend**: Pure HTML/CSS/JavaScript (no dependencies)
- **Speech Synthesis**: Browser Web Speech API
- **No backend required** - runs entirely in the browser

## 🔮 Future Enhancements

- [ ] Additional lessons for other keyboard rows
- [ ] Timed typing challenges
- [ ] Advanced statistics (WPM, time tracking)
- [ ] Save progress to localStorage
- [ ] Custom word lists
- [ ] Sound effects and notifications
- [ ] Mobile app version

## 📝 Customization

The UI is fully in Spanish for native Spanish speakers. To modify content:

1. Edit the `STRINGS` object in `spanish-typing-tutor.js`
2. Modify the `LESSONS` array for lesson content
3. Update HTML static text in `index.html`

## 🐛 Troubleshooting

### "No audio output"
1. Click anywhere on the page to enable audio (browser requirement)
2. Check browser volume and system volume
3. Check browser console (F12) for JavaScript errors
4. Check the Debug Log section at the bottom of the page

### "Poor voice quality"
- Chrome/Chromium has the best voice quality
- Make sure your OS has high-quality voices installed
- Check your browser's language settings

## 📄 License

Personal educational project.

## 🙏 Acknowledgments

Built for blind Spanish speakers learning English typing, with focus on accessibility through high-quality voice feedback and keyboard navigation.
