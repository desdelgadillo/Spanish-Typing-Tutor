// ============================================
// TRANSLATION STRINGS - Spanish UI for native Spanish speakers
// ============================================
const STRINGS = {
    // Instructions and feedback
    welcome: "Bienvenido al Tutor de Mecanografía en Inglés. Presiona el botón Iniciar Lección para comenzar.",
    instructions: "Escribe la siguiente palabra:",
    means: "que significa",
    correct: "¡Correcto! Bien hecho.",
    incorrect: "Incorrecto. La palabra correcta era:",
    tryAgain: "Por favor, intenta de nuevo.",
    nextWord: "Siguiente palabra.",
    lessonComplete: "¡Lección completa! ¡Excelente trabajo!",
    pressStart: "Presiona Iniciar para comenzar",
    
    // Button labels
    startLesson: "Iniciar Lección",
    repeatInstructions: "Repetir Instrucciones",
    skipWord: "Saltar Palabra",
    settings: "Configuración",
    
    // UI labels
    currentLevel: "Nivel Actual",
    lesson: "Lección",
    beginner: "Principiante - Fila Base",
    intermediate: "Intermedio - Todas las Letras",
    advanced: "Avanzado - Palabras Complejas",
    
    // Stats
    correct_stat: "Correctas",
    incorrect_stat: "Incorrectas",
    accuracy: "Precisión",
    wordsCompleted: "Palabras Completadas",
    
    // Character feedback
    characterCorrect: "Carácter correcto:",
    characterIncorrect: "Carácter incorrecto. Se esperaba:",
    youTyped: "Escribiste:",
    
    // Settings
    speechRate: "Velocidad de voz",
    speechVolume: "Volumen de voz",
    
    // Error messages
    speechNotSupported: "Lo sentimos, tu navegador no admite síntesis de voz. Por favor usa un navegador moderno como Chrome, Firefox o Edge.",
    
    // Level up
    levelUp: "¡Felicidades! ¡Has avanzado al siguiente nivel!",
    
    // Placeholder
    typingPlaceholder: "Escribe aquí..."
};

// ============================================
// LESSON DATA - Tutorial-style progressive lessons
// Each lesson is a series of steps with instructions and exercises
// ============================================
const LESSONS = [
    // LESSON 1: Introduction and Home Row Left Hand
    {
        title: "Lección 1: Fila Base - Mano Izquierda",
        steps: [
            {
                type: "instruction",
                text: "¡Comencemos a aprender a escribir sin mirar el teclado! Todo lo que tienes que hacer es escribir lo que yo digo. El programa reconocerá automáticamente cuando hayas terminado de escribir correctamente. También puedes presionar la barra espaciadora para verificar tu respuesta. Si presionas la barra espaciadora dos veces rápidamente, repetiré la instrucción. Primero, practiquemos con la barra espaciadora. Es la tecla larga en la parte inferior del teclado. Presiona la barra espaciadora ahora, o pide a tu asistente que coloque tus pulgares en la barra espaciadora."
            },
            {
                type: "space_practice",
                text: "Presiona la barra espaciadora para continuar",
                onSuccess: "¡Buen trabajo! Encontraste la barra espaciadora. Esta será tu tecla más usada al escribir.",
                onWrongKey: "Lo siento, esa no era la barra espaciadora. Esa era la tecla {key}. Intenta de nuevo, o pide a tu asistente que presione la barra espaciadora. Alternativamente, sigue presionando las teclas para escuchar lo que hacen."
            },
            {
                type: "instruction",
                text: "Ahora vamos a aprender la fila base para tu mano izquierda. No tengas miedo de pedirle ayuda a tu asistente con esta parte. Lo importante es que memorices estas posiciones. Pon tu dedo índice en la tecla F, el dedo medio en la tecla D, tu dedo anular en la S, y tu dedo meñique en la A. Esto se llama la fila base. Cuando comiences a escribir, aquí es donde tus dedos deben ir instintivamente. Veamos si lo entendiste."
            },
            {
                type: "letter",
                key: "f",
                context: "falda",
                contextES: "falda",
                text: "Escribe la letra F, como en falda."
            },
            {
                type: "letter",
                key: "d",
                context: "dobla",
                contextES: "dobla",
                text: "Escribe la letra D, como en dobla."
            },
            {
                type: "letter",
                key: "s",
                context: "sol",
                contextES: "sol",
                text: "Escribe la letra S, como en sol."
            },
            {
                type: "letter",
                key: "a",
                context: "aqua",
                contextES: "agua",
                text: "Escribe la letra A, como en aqua."
            },
            {
                type: "instruction",
                text: "¡Excelente! Ahora has aprendido las cuatro teclas de la fila base para tu mano izquierda. Practiquemos escribiendo algunas palabras usando estas letras."
            },
            {
                type: "word",
                word: "fada",
                meaning: "fada (fairy in Portuguese, similar to hada)",
                text: "Escribe la palabra: fada. F, A, D, A."
            },
            {
                type: "word",
                word: "afa",
                meaning: "afa (heat/swelter)",
                text: "Escribe la palabra: afa. A, F, A."
            },
            {
                type: "word",
                word: "asa",
                meaning: "asa (handle)",
                text: "Escribe la palabra en español: asa. A, S, A."
            },
            {
                type: "word",
                word: "sada",
                meaning: "práctica con s, a, d, a",
                text: "Escribe: sada. S, A, D, A."
            }
        ]
    },
    // LESSON 2: Home Row Right Hand
    {
        title: "Lección 2: Fila Base - Mano Derecha",
        steps: [
            {
                type: "instruction",
                text: "¡Buen trabajo completando la primera lección! Ahora vamos a aprender la fila base para tu mano derecha. Mantén tu mano izquierda en la posición que aprendiste: dedo índice en F, medio en D, anular en S, meñique en A."
            },
            {
                type: "instruction",
                text: "Ahora, coloca tu mano derecha en la fila base: dedo índice en J, dedo medio en K, dedo anular en L, y dedo meñique en punto y coma. Nota que las teclas F y J tienen pequeñas marcas elevadas para ayudarte a encontrar la posición correcta sin mirar. Practiquemos estas letras."
            },
            {
                type: "letter",
                key: "j",
                context: "jump",
                contextES: "saltar",
                text: "Escribe la letra J, como en jump."
            },
            {
                type: "letter",
                key: "k",
                context: "kite",
                contextES: "cometa",
                text: "Escribe la letra K, como en kite."
            },
            {
                type: "letter",
                key: "l",
                context: "lake",
                contextES: "lago",
                text: "Escribe la letra L, como en lake."
            },
            {
                type: "instruction",
                text: "Perfecto. Ahora practiquemos algunas palabras usando ambas manos."
            },
            {
                type: "word",
                word: "sala",
                meaning: "sala (room)",
                text: "Escribe la palabra en español: sala. S, A, L, A."
            },
            {
                type: "word",
                word: "ala",
                meaning: "ala (wing)",
                text: "Escribe la palabra en español: ala. A, L, A."
            },
            {
                type: "word",
                word: "falla",
                meaning: "falla (fails)",
                text: "Escribe la palabra en español: falla. F, A, L, L, A."
            },
            {
                type: "word",
                word: "alfa",
                meaning: "alfa (alpha)",
                text: "Escribe la palabra en español: alfa. A, L, F, A."
            }
        ]
    },
    // LESSON 3: Practice and Mastery
    {
        title: "Lección 3: Práctica de Fila Base",
        steps: [
            {
                type: "instruction",
                text: "¡Excelente progreso! Ahora conoces todas las letras de la fila base. En esta lección, vamos a practicar más palabras para desarrollar tu memoria muscular. Recuerda mantener tus dedos en la posición base entre cada palabra."
            },
            {
                type: "word",
                word: "ask",
                meaning: "preguntar (ask)",
                text: "Escribe la palabra ask, que significa preguntar. A, S, K."
            },
            {
                type: "word",
                word: "flask",
                meaning: "matraz (flask)",
                text: "Escribe la palabra flask, que significa matraz. F, L, A, S, K."
            },
            {
                type: "word",
                word: "falls",
                meaning: "cae (falls)",
                text: "Escribe la palabra falls, que significa cae. F, A, L, L, S."
            },
            {
                type: "word",
                word: "salsa",
                meaning: "salsa",
                text: "Escribe la palabra en español: salsa. S, A, L, S, A."
            },
            {
                type: "word",
                word: "salsas",
                meaning: "salsas",
                text: "Escribe la palabra en español: salsas. S, A, L, S, A, S."
            }
        ]
    },
    // LESSON 4: Adding G and H
    {
        title: "Lección 4: Letras G y H",
        steps: [
            {
                type: "instruction",
                text: "¡Felicidades por tu progreso! Ahora vamos a agregar dos letras más de la fila base: G y H. La G se presiona con tu dedo índice izquierdo, justo a la izquierda de la F. La H se presiona con tu dedo índice derecho, justo a la izquierda de la J. Practiquemos."
            },
            {
                type: "letter",
                key: "g",
                context: "gala",
                contextES: "gala",
                text: "Escribe la letra G, como en gala."
            },
            {
                type: "letter",
                key: "h",
                context: "hada",
                contextES: "hada",
                text: "Escribe la letra H, como en hada."
            },
            {
                type: "instruction",
                text: "Excelente. Ahora practiquemos palabras con G y H."
            },
            {
                type: "word",
                word: "gala",
                meaning: "gala",
                text: "Escribe la palabra en español: gala. G, A, L, A."
            },
            {
                type: "word",
                word: "hada",
                meaning: "hada (fairy)",
                text: "Escribe la palabra en español: hada. H, A, D, A."
            },
            {
                type: "word",
                word: "saga",
                meaning: "saga",
                text: "Escribe la palabra en español: saga. S, A, G, A."
            },
            {
                type: "word",
                word: "hala",
                meaning: "hala (haul)",
                text: "Escribe la palabra en español: hala. H, A, L, A."
            },
            {
                type: "word",
                word: "gasa",
                meaning: "gasa (gauze)",
                text: "Escribe la palabra en español: gasa. G, A, S, A."
            },
            {
                type: "word",
                word: "alga",
                meaning: "alga (algae)",
                text: "Escribe la palabra en español: alga. A, L, G, A."
            },
            {
                type: "word",
                word: "daga",
                meaning: "daga (dagger)",
                text: "Escribe la palabra en español: daga. D, A, G, A."
            }
        ]
    }
];

// ============================================
// KEY NAME TRANSLATIONS
// ============================================
const KEY_NAMES = {
    'Enter': 'Enter',
    'Backspace': 'Retroceso',
    'Tab': 'Tabulador',
    'Shift': 'Mayúsculas',
    'Control': 'Control',
    'Alt': 'Alt',
    'CapsLock': 'Bloq Mayús',
    'Escape': 'Escape',
    'Space': 'Espacio',
    'ArrowLeft': 'Flecha Izquierda',
    'ArrowRight': 'Flecha Derecha',
    'ArrowUp': 'Flecha Arriba',
    'ArrowDown': 'Flecha Abajo'
};

// ============================================
// APPLICATION STATE
// ============================================
class TypingTutor {
    constructor() {
        this.currentLessonIndex = 0;
        this.currentStepIndex = 0;
        this.currentStep = null;
        this.correctCount = 0;
        this.incorrectCount = 0;
        this.wordsCompleted = 0;
        this.isLessonActive = false;
        this.waitingForNextLesson = false;
        
        this.audioQueue = [];
        this.isSpeaking = false;
        this.lastSpaceTime = 0;
        this.selectedVoiceName = null;

        this.speechRate = 1.0;
        this.speechVolume = 1.0;

        // DOM elements
        this.elements = {
            targetText: document.getElementById('targetText'),
            userInput: document.getElementById('userInput'),
            startBtn: document.getElementById('startBtn'),
            repeatBtn: document.getElementById('repeatBtn'),
            skipBtn: document.getElementById('skipBtn'),
            voiceSelect: document.getElementById('voiceSelect'),
            currentLevel: document.getElementById('currentLevel'),
            currentLesson: document.getElementById('currentLesson'),
            correctCount: document.getElementById('correctCount'),
            incorrectCount: document.getElementById('incorrectCount'),
            accuracyRate: document.getElementById('accuracyRate'),
            wordsCompleted: document.getElementById('wordsCompleted'),
            announcements: document.getElementById('announcements'),
            debugLog: document.getElementById('debugLog')
        };
        
        this.debug('🚀 App initialized, loading voices...');
        this.init();
    }
    
    // Debug logging function
    debug(message) {
        console.log(message);
        if (this.elements.debugLog) {
            const line = document.createElement('div');
            line.className = 'debug-line';
            if (message.includes('✅') || message.includes('Success')) {
                line.className += ' debug-success';
            } else if (message.includes('❌') || message.includes('Error')) {
                line.className += ' debug-error';
            } else {
                line.className += ' debug-info';
            }
            line.textContent = message;
            this.elements.debugLog.appendChild(line);
            // Keep only last 20 messages
            while (this.elements.debugLog.children.length > 20) {
                this.elements.debugLog.removeChild(this.elements.debugLog.firstChild);
            }
        }
    }
    
    // Initialize the application
    init() {
        this.setupEventListeners();
        this.loadAvailableVoices();
        
        // Load voices (required for speech synthesis)
        if (window.speechSynthesis) {
            // Chrome loads voices asynchronously
            window.speechSynthesis.onvoiceschanged = () => {
                this.debug(`✅ Voices loaded: ${window.speechSynthesis.getVoices().length} available`);
            };
            // Trigger voice loading
            window.speechSynthesis.getVoices();
        }
        
        // Audio requires a user gesture in modern browsers
        // We wait for the first click or keypress to speak welcome message
        const enableAudio = () => {
            this.debug('🎤 Audio enabled by user interaction');
            this.speak(STRINGS.welcome, false, 'es-ES');
            
            // Hide the interaction overlay
            const overlay = document.getElementById('audio-overlay');
            if (overlay) overlay.style.display = 'none';
            
            document.removeEventListener('click', enableAudio);
            document.removeEventListener('keydown', enableAudio);
        };

        document.addEventListener('click', enableAudio);
        document.addEventListener('keydown', enableAudio);
        
        this.debug('✅ App initialized and ready. Click anywhere to start.');
    }
    
    // Set up all event listeners
    setupEventListeners() {
        // Start button
        this.elements.startBtn.addEventListener('click', () => {
            this.startLesson();
        });
        
        // Repeat button
        this.elements.repeatBtn.addEventListener('click', () => {
            this.repeatInstructions();
        });
        
        // Skip button
        this.elements.skipBtn.addEventListener('click', () => this.skipWord());
        
        // Voice select dropdown
        this.elements.voiceSelect.addEventListener('change', (e) => this.selectVoice(e.target.value));
        
        // User input
        this.elements.userInput.addEventListener('input', (e) => this.handleInput(e));
        this.elements.userInput.addEventListener('keydown', (e) => this.handleKeydown(e));
        
        // Focus input when clicking on target text
        this.elements.targetText.addEventListener('click', () => {
            if (this.isLessonActive) {
                this.elements.userInput.focus();
            }
        });
    }

    // Load available voices
    async loadAvailableVoices() {
        const populateVoices = () => {
            const voices = window.speechSynthesis.getVoices();
            const spanishVoices = voices.filter(v => v.lang.startsWith('es'));
            
            this.debug(`✅ Loaded ${voices.length} voices (${spanishVoices.length} Spanish)`);
            
            if (spanishVoices.length > 0) {
                this.elements.voiceSelect.innerHTML = '<option value="">Voz Automática</option>';
                spanishVoices.forEach(voice => {
                    const option = document.createElement('option');
                    option.value = voice.name;
                    option.textContent = `${voice.name} (${voice.lang})`;
                    this.elements.voiceSelect.appendChild(option);
                });
            }
        };
        
        // Voices may load asynchronously
        if (window.speechSynthesis.onvoiceschanged !== undefined) {
            window.speechSynthesis.onvoiceschanged = populateVoices;
        }
        populateVoices();
    }

    // Select a specific voice
    selectVoice(voiceName) {
        this.selectedVoiceName = voiceName || null;
        this.debug(`🎤 Voice selected: ${voiceName || 'Automatic'}`);
    }

    // Text-to-speech function
    speak(text, interrupt = false, lang = 'es-ES', callback = null) {
        this.announce(text); // Update screen reader announcements immediately

        const request = {
            text,
            lang,
            interrupt
        };

        if (interrupt) {
            this.audioQueue = [request]; // Clear queue and add new request
            // Cancel any currently speaking utterance
            if (window.speechSynthesis && window.speechSynthesis.speaking) {
                window.speechSynthesis.cancel();
            }
        } else {
            this.audioQueue.push(request);
        }

        if (!this.isSpeaking) {
            this.processAudioQueue(callback);
        }
    }

    async processAudioQueue(callback) {
        if (this.audioQueue.length === 0) {
            this.isSpeaking = false;
            if (callback) callback();
            return;
        }

        this.isSpeaking = true;
        const request = this.audioQueue.shift();

        const langCode = request.lang || 'es-ES';
        
        // Use browser's high-quality voices directly
        this.browserSpeak(request.text, langCode, () => {
            this.processAudioQueue(callback);
        });
    }

    // Use browser's built-in Speech Synthesis with best available voices
    browserSpeak(text, lang, onEnd) {
        if (!window.speechSynthesis) {
            this.debug('❌ Speech synthesis not supported in this browser.');
            console.error('Speech synthesis not supported in this browser.');
            if (onEnd) onEnd();
            return;
        }

        this.debug(`🔊 Speaking: "${text.substring(0, 50)}${text.length > 50 ? '...' : ''}" (${lang})`);
        console.log(`Using Browser TTS for: "${text}" (${lang})`);
        const utterance = new SpeechSynthesisUtterance(text);
        utterance.lang = lang;
        utterance.rate = this.speechRate;
        utterance.volume = this.speechVolume;
        
        // Get available voices and pick the best one for the language
        const voices = window.speechSynthesis.getVoices();
        let selectedVoice = null;
        
        // Use user-selected voice if available
        if (this.selectedVoiceName) {
            selectedVoice = voices.find(v => v.name === this.selectedVoiceName);
            if (selectedVoice) {
                this.debug(`Using selected voice: ${selectedVoice.name}`);
            }
        }
        
        // Otherwise, auto-select best voice for language
        if (!selectedVoice) {
            if (lang === 'es-ES' || lang.startsWith('es')) {
                // Prefer high-quality Spanish voices
                selectedVoice = voices.find(v => v.lang === 'es-ES' && v.name.includes('Premium')) ||
                               voices.find(v => v.lang === 'es-ES' && v.name.includes('Google')) ||
                               voices.find(v => v.lang === 'es-MX' && v.name.includes('Google')) ||
                               voices.find(v => v.lang.startsWith('es'));
            } else {
                // Prefer high-quality English voices
                selectedVoice = voices.find(v => v.lang === 'en-US' && v.name.includes('Premium')) ||
                               voices.find(v => v.lang === 'en-US' && v.name.includes('Google')) ||
                               voices.find(v => v.lang === 'en-US');
            }
        }
        
        if (selectedVoice) {
            utterance.voice = selectedVoice;
            console.log(`Using voice: ${selectedVoice.name} (${selectedVoice.lang})`);
        }
        
        utterance.onend = () => { if (onEnd) onEnd(); };
        utterance.onerror = (e) => {
            console.error('SpeechSynthesis Error:', e);
            if (onEnd) onEnd();
        };

        window.speechSynthesis.speak(utterance);
    }
    
    // Update screen reader announcements
    announce(text) {
        this.elements.announcements.textContent = text;
    }
    
    // Start the lesson
    startLesson() {
        this.isLessonActive = true;
        this.currentStepIndex = 0;
        this.elements.startBtn.disabled = true;
        this.elements.repeatBtn.disabled = false;
        this.elements.skipBtn.disabled = false;
        
        // Reset stats if starting over
        this.correctCount = 0;
        this.incorrectCount = 0;
        this.wordsCompleted = 0;
        this.updateStats();
        
        // Update lesson title
        const lesson = LESSONS[this.currentLessonIndex];
        this.elements.currentLevel.textContent = lesson.title;
        
        this.loadNextStep();
    }
    
    // Load the next step in the lesson
    loadNextStep() {
        const lesson = LESSONS[this.currentLessonIndex];
        
        if (this.currentStepIndex >= lesson.steps.length) {
            this.completeLesson();
            return;
        }
        
        this.currentStep = lesson.steps[this.currentStepIndex];
        this.processStep(this.currentStep);
    }
    
    // Process the current step based on its type
    processStep(step) {
        this.elements.userInput.value = '';
        this.elements.userInput.style.borderColor = '#4a4a4a';
        
        switch(step.type) {
            case 'instruction':
                // Just an instruction to read - no input needed
                this.elements.targetText.textContent = 'Escuchando...';
                this.elements.userInput.disabled = true;
                
                // Speak with callback to auto-advance
                this.speak(step.text, true, 'es-ES', () => {
                    // Wait a bit after speech finishes, then advance
                    setTimeout(() => {
                        this.currentStepIndex++;
                        this.loadNextStep();
                    }, 1000);
                });
                break;
                
            case 'space_practice':
                // Wait for Space key
                this.elements.targetText.textContent = step.text;
                this.elements.userInput.disabled = false;
                this.elements.userInput.focus();
                this.speak(step.text, true, 'es-ES');
                break;
                
            case 'enter_practice':
                // Wait for Enter key
                this.elements.targetText.textContent = step.text;
                this.elements.userInput.disabled = false;
                this.elements.userInput.focus();
                this.speak(step.text, true, 'es-ES');
                break;
                
            case 'letter':
                // Type a single letter
                this.currentExpected = step.key.toLowerCase();
                this.elements.targetText.textContent = step.key.toUpperCase();
                this.elements.userInput.disabled = false;
                this.elements.userInput.focus();
                this.speak(step.text, true, 'es-ES');
                break;
                
            case 'word':
                // Type a complete word
                this.currentExpected = step.word.toLowerCase();
                this.elements.targetText.textContent = step.word;
                this.elements.userInput.disabled = false;
                this.elements.userInput.focus();
                this.speak(step.text, true, 'es-ES');
                break;
        }
    }
    
    // Repeat current instructions
    repeatInstructions() {
        if (this.currentStep) {
            this.speak(this.currentStep.text, true, 'es-ES');
        }
    }
    
    // Skip current step
    skipWord() {
        if (this.currentStep && (this.currentStep.type === 'letter' || this.currentStep.type === 'word')) {
            this.incorrectCount++;
            this.updateStats();
        }
        
        this.speak("Saltando. " + STRINGS.nextWord, true, 'es-ES');
        this.currentStepIndex++;
        this.loadNextStep();
    }
    
    // Handle input as user types
    handleInput(e) {
        if (!this.currentStep) return;
        
        const userText = e.target.value.toLowerCase();
        
        // Provide character-by-character feedback for letters and words
        if (this.currentStep.type === 'letter' || this.currentStep.type === 'word') {
            if (userText.length > 0 && this.currentExpected) {
                const lastChar = userText[userText.length - 1];
                const expectedChar = this.currentExpected[userText.length - 1];
                
                if (lastChar === expectedChar) {
                    e.target.style.borderColor = '#00ff00';
                    
                    // Check if they've completed the entire expected text
                    if (userText === this.currentExpected) {
                        // Automatically submit when complete
                        setTimeout(() => this.checkAnswer(), 100);
                    }
                } else {
                    e.target.style.borderColor = '#ff0000';
                }
            } else {
                e.target.style.borderColor = '#4a4a4a';
            }
        }
    }
    
    // Handle keydown events
    handleKeydown(e) {
        // Handle Space key when waiting for next lesson (between lessons)
        if (this.waitingForNextLesson && e.key === ' ') {
            e.preventDefault();
            this.waitingForNextLesson = false;
            this.currentLessonIndex++;
            this.elements.currentLesson.textContent = this.currentLessonIndex + 1;
            this.startLesson();
            return;
        }
        
        if (!this.currentStep) return;
        
        // Handle Space key for space_practice step (must come before letter/word check)
        if (this.currentStep.type === 'space_practice' && e.key === ' ') {
            e.preventDefault();
            this.speak(this.currentStep.onSuccess, true, 'es-ES', () => {
                setTimeout(() => {
                    this.currentStepIndex++;
                    this.loadNextStep();
                }, 500);
            });
            return;
        }
        
        // Handle Space key for letter/word steps
        if (e.key === ' ' && (this.currentStep.type === 'letter' || this.currentStep.type === 'word')) {
            const now = Date.now();
            const timeSinceLastSpace = now - this.lastSpaceTime;
            
            // Double-space to repeat (within 500ms)
            if (timeSinceLastSpace < 500) {
                e.preventDefault();
                this.repeatInstructions();
                this.lastSpaceTime = 0; // Reset to prevent triple-space triggering
                return;
            }
            
            // Single space - submit answer
            this.lastSpaceTime = now;
            e.preventDefault();
            this.checkAnswer();
            return;
        }
        
        // Interrupt current speech on any keypress (except space for space_practice)
        if (window.speechSynthesis && window.speechSynthesis.speaking) {
            window.speechSynthesis.cancel();
        }
        
        // Handle Enter key for enter_practice step
        if (this.currentStep.type === 'enter_practice') {
            e.preventDefault();
            
            if (e.key === 'Enter') {
                this.speak(this.currentStep.onSuccess, true, 'es-ES', () => {
                    setTimeout(() => {
                        this.currentStepIndex++;
                        this.loadNextStep();
                    }, 500);
                });
            } else {
                // Wrong key pressed - just speak the key name
                const keyName = KEY_NAMES[e.key] || e.key;
                this.speak(keyName, true, 'es-ES');
            }
            return;
        }
    }
    
    // Check if the typed answer is correct
    checkAnswer() {
        const userText = this.elements.userInput.value.trim().toLowerCase();
        
        if (userText === '') return;
        
        if (userText === this.currentExpected) {
            // Correct!
            this.correctCount++;
            this.wordsCompleted++;
            this.updateStats();
            
            this.speak(STRINGS.correct, true, 'es-ES', () => {
                // Move to next step after speech finishes
                setTimeout(() => {
                    this.currentStepIndex++;
                    this.loadNextStep();
                }, 500);
            });
        } else {
            // Incorrect
            this.incorrectCount++;
            this.updateStats();
            
            let feedback = STRINGS.incorrect + ' ';
            if (this.currentStep.type === 'word' && this.currentStep.meaning) {
                feedback += `${this.currentExpected}, ${STRINGS.means} ${this.currentStep.meaning}. `;
            } else {
                feedback += `${this.currentExpected}. `;
            }
            feedback += STRINGS.tryAgain;
            
            this.speak(feedback, true, 'es-ES');
            this.elements.userInput.value = '';
            this.elements.userInput.style.borderColor = '#4a4a4a';
        }
    }
    
    // Complete the current lesson
    completeLesson() {
        this.isLessonActive = false;
        this.elements.startBtn.disabled = false;
        this.elements.repeatBtn.disabled = true;
        this.elements.skipBtn.disabled = true;
        
        // Check if user should advance to next lesson
        const accuracy = this.calculateAccuracy();
        if (accuracy >= 70 && this.currentLessonIndex < LESSONS.length - 1) {
            this.speak(STRINGS.lessonComplete + ' ' + STRINGS.levelUp, true, 'es-ES', () => {
                setTimeout(() => {
                    const nextLesson = LESSONS[this.currentLessonIndex + 1];
                    this.speak(`Presiona la barra espaciadora para avanzar a ${nextLesson.title}, o presiona el botón Iniciar Lección.`, true, 'es-ES');
                    
                    // Enable space bar to start next lesson
                    this.waitingForNextLesson = true;
                    this.elements.userInput.disabled = false;
                    this.elements.userInput.focus();
                }, 500);
            });
        } else {
            this.speak(STRINGS.lessonComplete, true, 'es-ES');
            this.waitingForNextLesson = false;
            this.elements.userInput.disabled = true;
        }
        
        this.currentStepIndex = 0;
        this.elements.targetText.textContent = STRINGS.pressStart;
    }
    
    // Calculate accuracy percentage
    calculateAccuracy() {
        const total = this.correctCount + this.incorrectCount;
        if (total === 0) return 0;
        return Math.round((this.correctCount / total) * 100);
    }
    
    // Update statistics display
    updateStats() {
        this.elements.correctCount.textContent = this.correctCount;
        this.elements.incorrectCount.textContent = this.incorrectCount;
        this.elements.accuracyRate.textContent = this.calculateAccuracy() + '%';
        this.elements.wordsCompleted.textContent = this.wordsCompleted;
    }
}

// ============================================
// INITIALIZE APPLICATION
// ============================================
let typingTutor;

// Wait for DOM to be fully loaded
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', () => {
        typingTutor = new TypingTutor();
    });
} else {
    typingTutor = new TypingTutor();
}
