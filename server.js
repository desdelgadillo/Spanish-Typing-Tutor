const express = require('express');
const path = require('path');
require('dotenv').config();

const app = express();
const port = 3000;

app.use(express.json());
app.use(express.static(path.join(__dirname)));

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'index.html'));
});

// API key configuration
let apiKeyConfigured = false;

function initializeAPI() {
    const apiKey = process.env.GEMINI_API_KEY;
    
    if (!apiKey) {
        console.error('❌ ERROR: GEMINI_API_KEY not found in environment variables.');
        console.error('\nTo fix this:');
        console.error('1. Create a .env file in the project root');
        console.error('2. Add your API key: GEMINI_API_KEY=your_api_key_here');
        console.error('3. Get your API key from: https://aistudio.google.com/app/apikey');
        console.error('\n⏳ Server will still start, but TTS will not work without an API key.\n');
        console.error('💡 NOTE: Browser Speech API will be used as fallback.\n');
        return false;
    }
    
    console.log('✅ API Key configured successfully');
    apiKeyConfigured = true;
    return true;
}

// Synthesize speech using Google Cloud TTS REST API
async function synthesizeSpeech(req, res) {
    const {
        text,
        voiceName,
        languageCode,
        speakingRate
    } = req.body;

    if (!text) {
        return res.status(400).json({ error: 'Text is required' });
    }

    console.log(`[TTS Request] Lang: ${languageCode}, Voice: ${voiceName}, Text: "${text.substring(0, 50)}..."`);

    try {
        // Use Google Cloud Text-to-Speech REST API
        const apiKey = process.env.GEMINI_API_KEY;
        
        if (!apiKey) {
            return res.status(503).json({ 
                error: 'API key not configured. Please configure GEMINI_API_KEY in .env file.',
                note: 'Browser Speech API will be used as fallback on the client.'
            });
        }

        const url = `https://texttospeech.googleapis.com/v1/text:synthesize?key=${apiKey}`;
        
        const requestBody = {
            input: { text: text },
            voice: {
                languageCode: languageCode || 'es-ES',
                name: voiceName || 'es-ES-Neural2-F'
            },
            audioConfig: {
                audioEncoding: 'MP3',
                speakingRate: speakingRate || 1.0,
                pitch: 0.0
            }
        };

        const response = await fetch(url, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(requestBody)
        });

        if (!response.ok) {
            const errorData = await response.json();
            throw new Error(`Google Cloud TTS API error: ${errorData.error?.message || response.statusText}`);
        }

        const data = await response.json();
        
        if (!data.audioContent) {
            throw new Error('No audio content returned from API');
        }

        // Convert base64 to buffer
        const audioBuffer = Buffer.from(data.audioContent, 'base64');
        
        res.set('Content-Type', 'audio/mpeg');
        res.send(audioBuffer);
        console.log(`✅ Successfully generated ${audioBuffer.length} bytes of audio`);

    } catch (error) {
        console.error('❌ TTS ERROR:', error.message);
        res.status(500).json({ 
            error: error.message,
            details: 'Server TTS failed. Client will use browser Speech API fallback.'
        });
    }
}

// Get available voices
app.get('/api/available-voices', async (req, res) => {
    try {
        // Return predefined high-quality voice options
        const voices = {
            'en-US': [
                { name: 'en-US-Neural2-F', displayName: 'English Female (Neural2)', languageCode: 'en-US', gender: 'FEMALE' },
                { name: 'en-US-Neural2-A', displayName: 'English Male (Neural2)', languageCode: 'en-US', gender: 'MALE' },
                { name: 'en-US-Neural2-C', displayName: 'English Female 2 (Neural2)', languageCode: 'en-US', gender: 'FEMALE' },
                { name: 'en-US-Wavenet-F', displayName: 'English Female (Wavenet)', languageCode: 'en-US', gender: 'FEMALE' },
            ],
            'es-ES': [
                { name: 'es-ES-Neural2-F', displayName: 'Spanish Female (Neural2)', languageCode: 'es-ES', gender: 'FEMALE' },
                { name: 'es-ES-Neural2-A', displayName: 'Spanish Male (Neural2)', languageCode: 'es-ES', gender: 'MALE' },
                { name: 'es-ES-Wavenet-C', displayName: 'Spanish Female (Wavenet)', languageCode: 'es-ES', gender: 'FEMALE' },
            ]
        };

        const allVoices = [...voices['en-US'], ...voices['es-ES']];
        console.log(`✅ Returning ${allVoices.length} voice options`);
        
        res.json({ voices: allVoices });
    } catch (error) {
        console.error('❌ Error listing voices:', error.message);
        res.status(500).json({ error: error.message });
    }
});

// Unified endpoint for both standard and vertex AI (same backend for now)
app.post('/api/synthesize-speech', synthesizeSpeech);
app.post('/api/synthesize-speech-vertex', synthesizeSpeech);

// Initialize and start server
const apiInitialized = initializeAPI();

app.listen(port, () => {
    console.log(`\n🚀 Server listening at http://localhost:${port}`);
    
    if (apiInitialized) {
        console.log('✅ Google Cloud Text-to-Speech API ready');
        console.log('🎤 Neural2 and Wavenet voices available');
    } else {
        console.log('⚠️  WARNING: API key not configured');
        console.log('💡 Browser Speech API will be used as fallback for TTS');
    }
    
    console.log('\n📋 Setup:');
    console.log('  API Key in .env: ' + (apiInitialized ? '✓' : '✗'));
    console.log('  Fallback TTS: ✓ (Browser Speech API)');
    console.log('\n🌐 Open http://localhost:3000 in your browser\n');
});
