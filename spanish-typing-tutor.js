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
    repeatHint: "Presiona dos veces la barra espaciadora para repetir esta explicación.",
    
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
                context: "jamón",
                contextES: "jamón",
                text: "Escribe la letra J, como en jamón."
            },
            {
                type: "letter",
                key: "k",
                context: "kilo",
                contextES: "kilo",
                text: "Escribe la letra K, como en kilo."
            },
            {
                type: "letter",
                key: "l",
                context: "lago",
                contextES: "lago",
                text: "Escribe la letra L, como en lago."
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
                text: "¡Excelente progreso! Ahora conoces las letras de la fila base que practicaremos por ahora. En esta lección, vamos a practicar más palabras para desarrollar tu memoria muscular. Recuerda mantener tus dedos en la posición base entre cada palabra."
            },
            {
                type: "word",
                word: "faja",
                meaning: "faja",
                text: "Escribe la palabra en español: faja. F, A, J, A."
            },
            {
                type: "word",
                word: "laja",
                meaning: "laja",
                text: "Escribe la palabra en español: laja. L, A, J, A."
            },
            {
                type: "word",
                word: "jalas",
                meaning: "jalas",
                text: "Escribe la palabra en español: jalas. J, A, L, A, S."
            },
            {
                type: "word",
                word: "fajas",
                meaning: "fajas",
                text: "Escribe la palabra en español: fajas. F, A, J, A, S."
            },
            {
                type: "word",
                word: "faldas",
                meaning: "faldas",
                text: "Escribe la palabra en español: faldas. F, A, L, D, A, S."
            }
        ]
    },
    // LESSON 4: Adding G and H
    {
        title: "Lección 4: Letras G y H",
        steps: [
            {
                type: "instruction",
                text: "¡Felicidades por tu progreso! Ahora vamos a agregar dos letras más de la fila base: G y H. La G se presiona con tu dedo índice izquierdo, justo a la derecha de la F. La H se presiona con tu dedo índice derecho, justo a la izquierda de la J. Practiquemos."
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
    },
    // LESSON 5: Spanish Practice - Home Row
    {
        title: "Lección 5: Práctica en Español - Fila Base",
        steps: [
            {
                type: "instruction",
                text: "En esta lección practicaremos palabras en español usando toda la fila base. Mantén los dedos en la posición base y escribe con calma."
            },
            {
                type: "word",
                word: "salsa",
                meaning: "salsa",
                text: "Escribe la palabra en español: salsa. S, A, L, S, A."
            },
            {
                type: "word",
                word: "falda",
                meaning: "falda",
                text: "Escribe la palabra en español: falda. F, A, L, D, A."
            },
            {
                type: "word",
                word: "gasa",
                meaning: "gasa",
                text: "Escribe la palabra en español: gasa. G, A, S, A."
            },
            {
                type: "word",
                word: "saga",
                meaning: "saga",
                text: "Escribe la palabra en español: saga. S, A, G, A."
            },
            {
                type: "word",
                word: "alga",
                meaning: "alga",
                text: "Escribe la palabra en español: alga. A, L, G, A."
            },
            {
                type: "word",
                word: "hada",
                meaning: "hada",
                text: "Escribe la palabra en español: hada. H, A, D, A."
            },
            {
                type: "word",
                word: "alas",
                meaning: "alas",
                text: "Escribe la palabra en español: alas. A, L, A, S."
            }
        ]
    },
    // LESSON 6: Adding R and U
    {
        title: "Lección 6: Letras R y U",
        steps: [
            {
                type: "instruction",
                text: "Ahora aprenderemos las letras R y U. Desde la fila base, tu dedo índice izquierdo está en la F. Para encontrar la R, mueve ese dedo una tecla hacia arriba. Tu dedo índice derecho está en la J. Para encontrar la U, mueve ese dedo una tecla hacia arriba. Practiquemos primero las letras."
            },
            {
                type: "letter",
                key: "r",
                context: "rosa",
                contextES: "rosa",
                text: "Escribe la letra R, como en rosa."
            },
            {
                type: "letter",
                key: "u",
                context: "uva",
                contextES: "uva",
                text: "Escribe la letra U, como en uva."
            },
            {
                type: "instruction",
                text: "Excelente. Ahora escribiremos palabras con R y U. Recuerda: R es arriba de F, y U es arriba de J."
            },
            {
                type: "word",
                word: "jura",
                meaning: "jura",
                text: "Escribe la palabra en español: jura. J, U, R, A."
            },
            {
                type: "word",
                word: "dura",
                meaning: "dura",
                text: "Escribe la palabra en español: dura. D, U, R, A."
            },
            {
                type: "word",
                word: "gula",
                meaning: "gula",
                text: "Escribe la palabra en español: gula. G, U, L, A."
            },
            {
                type: "word",
                word: "rusa",
                meaning: "rusa",
                text: "Escribe la palabra en español: rusa. R, U, S, A."
            },
            {
                type: "word",
                word: "ruga",
                meaning: "ruga",
                text: "Escribe la palabra en español: ruga. R, U, G, A."
            },
            {
                type: "word",
                word: "sudar",
                meaning: "sudar",
                text: "Escribe la palabra en español: sudar. S, U, D, A, R."
            }
        ]
    },
    // LESSON 7: Adding E and I
    {
        title: "Lección 7: Letras E e I",
        steps: [
            {
                type: "instruction",
                text: "Ahora aprenderemos las letras E e I. La E está arriba de la D. La I está arriba de la K. Practiquemos primero las letras."
            },
            {
                type: "letter",
                key: "e",
                context: "seda",
                contextES: "seda",
                text: "Escribe la letra E, como en seda."
            },
            {
                type: "letter",
                key: "i",
                context: "isla",
                contextES: "isla",
                text: "Escribe la letra I, como en isla."
            },
            {
                type: "instruction",
                text: "Excelente. Ahora escribiremos palabras con E e I."
            },
            {
                type: "word",
                word: "seda",
                meaning: "seda",
                text: "Escribe la palabra en español: seda. S, E, D, A."
            },
            {
                type: "word",
                word: "dije",
                meaning: "dije",
                text: "Escribe la palabra en español: dije. D, I, J, E."
            },
            {
                type: "word",
                word: "fiel",
                meaning: "fiel",
                text: "Escribe la palabra en español: fiel. F, I, E, L."
            },
            {
                type: "word",
                word: "rie",
                meaning: "rie",
                text: "Escribe la palabra en español: rie. R, I, E."
            }
        ]
    },
    // LESSON 8: Adding O
    {
        title: "Lección 8: Letra O",
        steps: [
            {
                type: "instruction",
                text: "Ahora aprenderemos la letra O. La O está arriba de la L. Practiquemos primero la letra."
            },
            {
                type: "letter",
                key: "o",
                context: "oro",
                contextES: "oro",
                text: "Escribe la letra O, como en oro."
            },
            {
                type: "instruction",
                text: "Excelente. Ahora escribiremos palabras con O."
            },
            {
                type: "word",
                word: "oro",
                meaning: "oro",
                text: "Escribe la palabra en español: oro. O, R, O."
            },
            {
                type: "word",
                word: "ojo",
                meaning: "ojo",
                text: "Escribe la palabra en español: ojo. O, J, O."
            },
            {
                type: "word",
                word: "lodo",
                meaning: "lodo",
                text: "Escribe la palabra en español: lodo. L, O, D, O."
            },
            {
                type: "word",
                word: "solo",
                meaning: "solo",
                text: "Escribe la palabra en español: solo. S, O, L, O."
            }
        ]
    },
    // LESSON 9: Adding T and Y
    {
        title: "Lección 9: Letras T y Y",
        steps: [
            {
                type: "instruction",
                text: "Ahora aprenderemos las letras T y Y. La T está arriba de la F. La Y está arriba de la H. Practiquemos primero las letras."
            },
            {
                type: "letter",
                key: "t",
                context: "tasa",
                contextES: "tasa",
                text: "Escribe la letra T, como en tasa."
            },
            {
                type: "letter",
                key: "y",
                context: "yeti",
                contextES: "yeti",
                text: "Escribe la letra Y, como en yeti."
            },
            {
                type: "instruction",
                text: "Muy bien. Ahora escribiremos palabras con T y Y."
            },
            {
                type: "word",
                word: "tasa",
                meaning: "tasa",
                text: "Escribe la palabra en español: tasa. T, A, S, A."
            },
            {
                type: "word",
                word: "tira",
                meaning: "tira",
                text: "Escribe la palabra en español: tira. T, I, R, A."
            },
            {
                type: "word",
                word: "yeti",
                meaning: "yeti",
                text: "Escribe la palabra en español: yeti. Y, E, T, I."
            },
            {
                type: "word",
                word: "yate",
                meaning: "yate",
                text: "Escribe la palabra en español: yate. Y, A, T, E."
            }
        ]
    },
    // LESSON 10: Adding W and P
    {
        title: "Lección 10: Letras W y P",
        steps: [
            {
                type: "instruction",
                text: "Ahora aprenderemos las letras W y P. La W está arriba de la S. La P está arriba del punto y coma. Practiquemos primero las letras."
            },
            {
                type: "letter",
                key: "w",
                context: "web",
                contextES: "web",
                text: "Escribe la letra W, como en web."
            },
            {
                type: "letter",
                key: "p",
                context: "papa",
                contextES: "papa",
                text: "Escribe la letra P, como en papa."
            },
            {
                type: "instruction",
                text: "Muy bien. Ahora escribiremos palabras con W y P."
            },
            {
                type: "word",
                word: "web",
                meaning: "web",
                text: "Escribe la palabra en español: web. W, E, B."
            },
            {
                type: "word",
                word: "wifi",
                meaning: "wifi",
                text: "Escribe la palabra en español: wifi. W, I, F, I."
            },
            {
                type: "word",
                word: "papa",
                meaning: "papa",
                text: "Escribe la palabra en español: papa. P, A, P, A."
            },
            {
                type: "word",
                word: "pila",
                meaning: "pila",
                text: "Escribe la palabra en español: pila. P, I, L, A."
            }
        ]
    },
    // LESSON 11: Adding Q
    {
        title: "Lección 11: Letra Q",
        steps: [
            {
                type: "instruction",
                text: "Ahora aprenderemos la letra Q. La Q está arriba de la A. Recuerda que casi siempre va con U. Practiquemos primero la letra."
            },
            {
                type: "letter",
                key: "q",
                context: "que",
                contextES: "que",
                text: "Escribe la letra Q, como en que."
            },
            {
                type: "instruction",
                text: "Excelente. Ahora escribiremos palabras con Q."
            },
            {
                type: "word",
                word: "que",
                meaning: "que",
                text: "Escribe la palabra en español: que. Q, U, E."
            },
            {
                type: "word",
                word: "aqui",
                meaning: "aqui",
                text: "Escribe la palabra en español: aqui. A, Q, U, I."
            },
            {
                type: "word",
                word: "quitar",
                meaning: "quitar",
                text: "Escribe la palabra en español: quitar. Q, U, I, T, A, R."
            },
            {
                type: "word",
                word: "quita",
                meaning: "quita",
                text: "Escribe la palabra en español: quita. Q, U, I, T, A."
            }
        ]
    },
    // LESSON 12: Adding V and N
    {
        title: "Lección 12: Letras V y N",
        steps: [
            {
                type: "instruction",
                text: "Ahora aprenderemos las letras V y N. La V está abajo de la F. La N está abajo de la J. Practiquemos primero las letras."
            },
            {
                type: "letter",
                key: "v",
                context: "vino",
                contextES: "vino",
                text: "Escribe la letra V, como en vino."
            },
            {
                type: "letter",
                key: "n",
                context: "nave",
                contextES: "nave",
                text: "Escribe la letra N, como en nave."
            },
            {
                type: "instruction",
                text: "Muy bien. Ahora escribiremos palabras con V y N."
            },
            {
                type: "word",
                word: "vino",
                meaning: "vino",
                text: "Escribe la palabra en español: vino. V, I, N, O."
            },
            {
                type: "word",
                word: "nave",
                meaning: "nave",
                text: "Escribe la palabra en español: nave. N, A, V, E."
            },
            {
                type: "word",
                word: "vive",
                meaning: "vive",
                text: "Escribe la palabra en español: vive. V, I, V, E."
            },
            {
                type: "word",
                word: "nieve",
                meaning: "nieve",
                text: "Escribe la palabra en español: nieve. N, I, E, V, E."
            }
        ]
    },
    // LESSON 13: Adding Z and M
    {
        title: "Lección 13: Letras Z y M",
        steps: [
            {
                type: "instruction",
                text: "Ahora aprenderemos las letras Z y M. La Z está abajo de la A. La M está abajo de la K. Practiquemos primero las letras."
            },
            {
                type: "letter",
                key: "z",
                context: "zeta",
                contextES: "zeta",
                text: "Escribe la letra Z, como en zeta."
            },
            {
                type: "letter",
                key: "m",
                context: "mesa",
                contextES: "mesa",
                text: "Escribe la letra M, como en mesa."
            },
            {
                type: "instruction",
                text: "Excelente. Ahora escribiremos palabras con Z y M."
            },
            {
                type: "word",
                word: "zeta",
                meaning: "zeta",
                text: "Escribe la palabra en español: zeta. Z, E, T, A."
            },
            {
                type: "word",
                word: "mesa",
                meaning: "mesa",
                text: "Escribe la palabra en español: mesa. M, E, S, A."
            },
            {
                type: "word",
                word: "misa",
                meaning: "misa",
                text: "Escribe la palabra en español: misa. M, I, S, A."
            },
            {
                type: "word",
                word: "zumo",
                meaning: "zumo",
                text: "Escribe la palabra en español: zumo. Z, U, M, O."
            }
        ]
    },
    // LESSON 14: Adding X
    {
        title: "Lección 14: Letra X",
        steps: [
            {
                type: "instruction",
                text: "Ahora aprenderemos la letra X. La X está abajo de la S. Practiquemos primero la letra."
            },
            {
                type: "letter",
                key: "x",
                context: "taxi",
                contextES: "taxi",
                text: "Escribe la letra X, como en taxi."
            },
            {
                type: "instruction",
                text: "Excelente. Ahora escribiremos palabras con X."
            },
            {
                type: "word",
                word: "taxi",
                meaning: "taxi",
                text: "Escribe la palabra en español: taxi. T, A, X, I."
            },
            {
                type: "word",
                word: "exito",
                meaning: "exito",
                text: "Escribe la palabra en español: exito. E, X, I, T, O."
            },
            {
                type: "word",
                word: "texto",
                meaning: "texto",
                text: "Escribe la palabra en español: texto. T, E, X, T, O."
            },
            {
                type: "word",
                word: "extra",
                meaning: "extra",
                text: "Escribe la palabra en español: extra. E, X, T, R, A."
            }
        ]
    },
    // LESSON 15: Adding N and C
    {
        title: "Lección 15: Letras N y C",
        steps: [
            {
                type: "instruction",
                text: "Ahora aprenderemos la letra C y practicaremos de nuevo la N. La C está abajo de la D. Practiquemos primero las letras."
            },
            {
                type: "letter",
                key: "n",
                context: "nido",
                contextES: "nido",
                text: "Escribe la letra N, como en nido."
            },
            {
                type: "letter",
                key: "c",
                context: "casa",
                contextES: "casa",
                text: "Escribe la letra C, como en casa."
            },
            {
                type: "instruction",
                text: "Muy bien. Ahora escribiremos palabras con N y C."
            },
            {
                type: "word",
                word: "casa",
                meaning: "casa",
                text: "Escribe la palabra en español: casa. C, A, S, A."
            },
            {
                type: "word",
                word: "cena",
                meaning: "cena",
                text: "Escribe la palabra en español: cena. C, E, N, A."
            },
            {
                type: "word",
                word: "cita",
                meaning: "cita",
                text: "Escribe la palabra en español: cita. C, I, T, A."
            },
            {
                type: "word",
                word: "cuna",
                meaning: "cuna",
                text: "Escribe la palabra en español: cuna. C, U, N, A."
            }
        ]
    },
    // LESSON 16: Adding V and B
    {
        title: "Lección 16: Letras V y B",
        steps: [
            {
                type: "instruction",
                text: "Ahora aprenderemos la letra B y practicaremos de nuevo la V. La B está abajo de la G. Practiquemos primero las letras."
            },
            {
                type: "letter",
                key: "v",
                context: "vaca",
                contextES: "vaca",
                text: "Escribe la letra V, como en vaca."
            },
            {
                type: "letter",
                key: "b",
                context: "bebe",
                contextES: "bebe",
                text: "Escribe la letra B, como en bebe."
            },
            {
                type: "instruction",
                text: "Excelente. Ahora escribiremos palabras con V y B."
            },
            {
                type: "word",
                word: "vaca",
                meaning: "vaca",
                text: "Escribe la palabra en español: vaca. V, A, C, A."
            },
            {
                type: "word",
                word: "baca",
                meaning: "baca",
                text: "Escribe la palabra en español: baca. B, A, C, A."
            },
            {
                type: "word",
                word: "bebe",
                meaning: "bebe",
                text: "Escribe la palabra en español: bebe. B, E, B, E."
            },
            {
                type: "word",
                word: "viva",
                meaning: "viva",
                text: "Escribe la palabra en español: viva. V, I, V, A."
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
        this.lastSpokenErrorIndex = -1;
        this.lastSpokenErrorChar = null;
        this.lastSpokenExpectedChar = null;
        this.lastSpokenCorrectIndex = -1;
        this.isCheckingAnswer = false;
        this.justCompletedExpected = false;
        this.instructionToken = 0;
        this.lastInstructionText = '';
        this.spaceSequenceCount = 0;
        this.lastSpaceSequenceTime = 0;

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
            interrupt,
            callback
        };

        if (interrupt) {
            this.audioQueue = [request]; // Clear queue and add new request
            // Cancel any currently speaking utterance
            if (window.speechSynthesis && window.speechSynthesis.speaking) {
                window.speechSynthesis.cancel();
                this.isSpeaking = false;
            }
        } else {
            this.audioQueue.push(request);
        }

        if (!this.isSpeaking) {
            this.processAudioQueue();
        }
    }

    async processAudioQueue() {
        if (this.audioQueue.length === 0) {
            this.isSpeaking = false;
            return;
        }

        this.isSpeaking = true;
        const request = this.audioQueue.shift();

        const langCode = request.lang || 'es-ES';
        
        // Use browser's high-quality voices directly
        this.browserSpeak(request.text, langCode, () => {
            if (request.callback) {
                request.callback();
            }
            this.processAudioQueue();
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
        this.waitingForNextLesson = false;
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
        this.lastSpaceTime = 0;
        this.lastSpokenErrorIndex = -1;
        this.lastSpokenErrorChar = null;
        this.lastSpokenExpectedChar = null;
        this.lastSpokenCorrectIndex = -1;
        this.elements.userInput.readOnly = true;
        this.isCheckingAnswer = false;
        this.spaceSequenceCount = 0;
        this.lastSpaceSequenceTime = 0;
        
        switch(step.type) {
            case 'instruction':
                // Just an instruction to read - no input needed
                this.elements.targetText.textContent = 'Escuchando... (Doble espacio para repetir)';
                this.elements.userInput.disabled = false;
                this.elements.userInput.focus();

                const instructionToken = ++this.instructionToken;
                this.lastInstructionText = step.text;
                
                // Speak with callback to auto-advance
                this.speak(`${step.text} ${STRINGS.repeatHint}`, true, 'es-ES', () => {
                    if (instructionToken !== this.instructionToken) {
                        return;
                    }
                    // Wait a bit after speech finishes, then advance
                    setTimeout(() => {
                        if (instructionToken !== this.instructionToken) {
                            return;
                        }
                        this.currentStepIndex++;
                        this.loadNextStep();
                    }, 1000);
                });
                break;
                
            case 'space_practice':
                // Wait for Space key
                this.elements.targetText.textContent = step.text;
                this.elements.userInput.disabled = false;
                this.speak(step.text, true, 'es-ES');
                this.elements.userInput.focus();
                break;
                
            case 'enter_practice':
                // Wait for Enter key
                this.elements.targetText.textContent = step.text;
                this.elements.userInput.disabled = false;
                this.speak(step.text, true, 'es-ES');
                this.elements.userInput.focus();
                break;
                
            case 'letter':
                // Type a single letter
                this.currentExpected = step.key.toLowerCase();
                this.elements.targetText.textContent = step.key.toUpperCase();
                this.elements.userInput.disabled = false;
                this.elements.userInput.readOnly = false;
                this.speak(step.text, true, 'es-ES');
                this.elements.userInput.focus();
                break;
                
            case 'word':
                // Type a complete word
                this.currentExpected = step.word.toLowerCase();
                this.elements.targetText.textContent = step.word;
                this.elements.userInput.disabled = false;
                this.elements.userInput.readOnly = false;
                this.speak(step.text, true, 'es-ES');
                this.elements.userInput.focus();
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
        if (this.isCheckingAnswer) return;
        
        const userText = e.target.value.toLowerCase();
        const expectedText = this.currentExpected || '';
        
        // Provide character-by-character feedback for letters and words
        if (this.currentStep.type === 'letter' || this.currentStep.type === 'word') {
            if (userText.length <= this.lastSpokenErrorIndex) {
                this.lastSpokenErrorIndex = -1;
                this.lastSpokenErrorChar = null;
                this.lastSpokenExpectedChar = null;
            }
            if (userText.length <= this.lastSpokenCorrectIndex) {
                this.lastSpokenCorrectIndex = -1;
            }

            if (userText.length > 0 && expectedText) {
                const lastChar = userText[userText.length - 1];
                const expectedChar = expectedText[userText.length - 1];
                const expectedPrefix = expectedText.slice(0, userText.length);
                const isPrefixMatch = userText === expectedPrefix;

                if (isPrefixMatch) {
                    e.target.style.borderColor = '#00ff00';
                    
                    // Check if they've completed the entire expected text
                    if (userText === expectedText) {
                        // Automatically submit when complete
                        this.isCheckingAnswer = true;
                        this.justCompletedExpected = true;
                        this.elements.userInput.disabled = true;
                        this.checkAnswer();
                        return;
                    }
                } else {
                    e.target.style.borderColor = '#ff0000';

                    if (
                        this.lastSpokenErrorIndex !== userText.length - 1 ||
                        this.lastSpokenErrorChar !== lastChar ||
                        this.lastSpokenExpectedChar !== expectedChar
                    ) {
                        this.lastSpokenErrorIndex = userText.length - 1;
                        this.lastSpokenErrorChar = lastChar;
                        this.lastSpokenExpectedChar = expectedChar;

                        const feedback = expectedChar
                            ? `${STRINGS.characterIncorrect} ${expectedChar.toUpperCase()}. ${STRINGS.youTyped} ${lastChar.toUpperCase()}.`
                            : `${STRINGS.characterIncorrect} ${expectedText.toUpperCase()}. ${STRINGS.youTyped} ${lastChar.toUpperCase()}.`;

                        const correctedText = expectedText.length === 1
                            ? ''
                            : userText.slice(0, -1);
                        this.elements.userInput.value = correctedText;
                        this.elements.userInput.style.borderColor = '#4a4a4a';
                        this.lastSpokenErrorIndex = -1;
                        this.lastSpokenErrorChar = null;
                        this.lastSpokenExpectedChar = null;
                        this.elements.userInput.focus();
                        this.speak(feedback, true, 'es-ES');
                    }
                }
            } else {
                e.target.style.borderColor = '#4a4a4a';
            }
        }
    }
    
    // Handle keydown events
    handleKeydown(e) {
        if (e.key !== ' ') {
            this.spaceSequenceCount = 0;
            this.lastSpaceSequenceTime = 0;
        }

        if (e.key === ' ') {
            const now = Date.now();
            const timeSinceLastSpace = now - this.lastSpaceSequenceTime;

            if (timeSinceLastSpace < 600) {
                this.spaceSequenceCount += 1;
            } else {
                this.spaceSequenceCount = 1;
            }

            this.lastSpaceSequenceTime = now;

            if (this.spaceSequenceCount >= 3) {
                e.preventDefault();
                this.spaceSequenceCount = 0;
                this.lastSpaceSequenceTime = 0;

                if (this.lastInstructionText) {
                    this.speak(this.lastInstructionText, true, 'es-ES');
                }
                return;
            }
        }
        // Handle Space key when waiting for next lesson
        if (this.waitingForNextLesson && e.key === ' ') {
            e.preventDefault();
            this.waitingForNextLesson = false;
            this.currentLessonIndex++;
            this.elements.currentLesson.textContent = this.currentLessonIndex + 1;
            this.startLesson();
            return;
        }
        
        if (!this.currentStep) return;

        // Allow space to skip or repeat instruction steps
        if (this.currentStep.type === 'instruction') {
            if (e.key === ' ') {
                const now = Date.now();
                const timeSinceLastSpace = now - this.lastSpaceTime;
                const lesson = LESSONS[this.currentLessonIndex];
                const nextStep = lesson?.steps?.[this.currentStepIndex + 1];
                const isNextSpacePractice = nextStep && nextStep.type === 'space_practice';

                e.preventDefault();
                if (timeSinceLastSpace < 500) {
                    this.repeatInstructions();
                    this.lastSpaceTime = 0;
                    return;
                }

                if (isNextSpacePractice) {
                    this.lastSpaceTime = now;
                    return;
                }

                this.lastSpaceTime = now;
                this.instructionToken++;
                if (window.speechSynthesis && window.speechSynthesis.speaking) {
                    window.speechSynthesis.cancel();
                }
                this.currentStepIndex++;
                this.loadNextStep();
            }
            return;
        }

        // Speak correct letters as they are typed
        if (this.currentStep.type === 'letter' || this.currentStep.type === 'word') {
            const expectedText = this.currentExpected || '';
            const isPrintable = e.key.length === 1 && !e.ctrlKey && !e.metaKey && !e.altKey;

            if (isPrintable && e.key !== ' ' && !this.isCheckingAnswer) {
                const keyLower = e.key.toLowerCase();
                const currentText = this.elements.userInput.value.toLowerCase();
                const expectedChar = expectedText[currentText.length];

                if (expectedChar && keyLower === expectedChar) {
                    if (this.lastSpokenCorrectIndex !== currentText.length) {
                        this.lastSpokenCorrectIndex = currentText.length;
                        const spokenChar = keyLower.toUpperCase();
                        this.speak(`${spokenChar}.`, true, 'es-ES');
                    }
                }
            }
        }

        // Handle Space key
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
            
            // Single space - submit answer (only if there's input)
            this.lastSpaceTime = now;
            e.preventDefault();
            if (this.elements.userInput.value.trim() === '') {
                return;
            }
            this.checkAnswer();
            return;
        }
        
        // Interrupt current speech only for non-typing steps
        if (
            (this.currentStep.type === 'instruction' ||
                this.currentStep.type === 'space_practice' ||
                this.currentStep.type === 'enter_practice') &&
            window.speechSynthesis &&
            window.speechSynthesis.speaking
        ) {
            window.speechSynthesis.cancel();
        }
        
        // Handle Space key for space_practice step
        if (this.currentStep.type === 'space_practice') {
            e.preventDefault();
            
            if (e.key === ' ') {
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

            const interruptSpeech = !this.justCompletedExpected;
            this.justCompletedExpected = false;
            this.speak(STRINGS.correct, interruptSpeech, 'es-ES', () => {
                // Move to next step after speech finishes
                setTimeout(() => {
                    this.currentStepIndex++;
                    this.loadNextStep();
                    this.isCheckingAnswer = false;
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
            this.elements.userInput.disabled = false;
            this.elements.userInput.readOnly = false;
            this.elements.userInput.focus();
            this.isCheckingAnswer = false;
        }
    }
    
    // Complete the current lesson
    completeLesson() {
        this.isLessonActive = false;
        this.elements.userInput.disabled = false;
        this.elements.startBtn.disabled = false;
        this.elements.repeatBtn.disabled = true;
        this.elements.skipBtn.disabled = true;
        
        // Check if user should advance to next lesson
        const accuracy = this.calculateAccuracy();
        if (accuracy >= 70 && this.currentLessonIndex < LESSONS.length - 1) {
            this.waitingForNextLesson = true;
            const nextLesson = LESSONS[this.currentLessonIndex + 1];
            this.speak(STRINGS.lessonComplete + ' ' + STRINGS.levelUp, true, 'es-ES', () => {
                setTimeout(() => {
                    this.speak(`Presiona la barra espaciadora para avanzar a ${nextLesson.title}, o presiona el botón Iniciar Lección.`, true, 'es-ES');
                }, 500);
            });
            this.elements.userInput.focus();
        } else {
            this.speak(STRINGS.lessonComplete, true, 'es-ES');
            this.waitingForNextLesson = false;
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
