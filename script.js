// LISTA COMPLETA DE VERBOS
const verbs = [
    { v1: "be", v2: "was/were", es: "ser / estar" },
    { v1: "beat", v2: "beat", es: "golpear / vencer" },
    { v1: "become", v2: "became", es: "llegar a ser / convertirse" },
    { v1: "begin", v2: "began", es: "empezar" },
    // { v1: "bend", v2: "bent", es: "doblar" },
    // { v1: "bet", v2: "bet", es: "apostar" },
    // { v1: "bite", v2: "bit", es: "morder" },
    // { v1: "bleed", v2: "bled", es: "sangrar" },
    // { v1: "blow", v2: "blew", es: "soplar" },
    { v1: "break", v2: "broke", es: "romper" },
    { v1: "bring", v2: "brought", es: "traer" },
    { v1: "build", v2: "built", es: "construir" },
    // { v1: "burn", v2: "burnt/burned", es: "quemar" },
    { v1: "buy", v2: "bought", es: "comprar" },
    // { v1: "catch", v2: "caught", es: "atrapar" },
    { v1: "choose", v2: "chose", es: "elegir" },
    { v1: "come", v2: "came", es: "venir" },
    { v1: "cost", v2: "cost", es: "costar" },
    // { v1: "cut", v2: "cut", es: "cortar" },
    // { v1: "dig", v2: "dug", es: "cavar" },
    { v1: "do", v2: "did", es: "hacer" },
    // { v1: "draw", v2: "drew", es: "dibujar" },
    // { v1: "dream", v2: "dreamt/dreamed", es: "soñar" },
    { v1: "drink", v2: "drank", es: "beber" },
    { v1: "drive", v2: "drove", es: "conducir" },
    { v1: "eat", v2: "ate", es: "comer" },
    // { v1: "fall", v2: "fell", es: "caer" },
    // { v1: "feed", v2: "fed", es: "alimentar" },
    // { v1: "feel", v2: "felt", es: "sentir" },
    // { v1: "fight", v2: "fought", es: "pelear / luchar" },
    { v1: "find", v2: "found", es: "encontrar" },
    { v1: "fly", v2: "flew", es: "volar" },
    { v1: "forget", v2: "forgot", es: "olvidar" },
    // { v1: "forgive", v2: "forgave", es: "perdonar" },
    // { v1: "freeze", v2: "froze", es: "congelar" },
    { v1: "get", v2: "got", es: "conseguir" },
    { v1: "give", v2: "gave", es: "dar" },
    { v1: "go", v2: "went", es: "ir" },
    // { v1: "grow", v2: "grew", es: "crecer" },
    // { v1: "hang", v2: "hung/hanged", es: "colgar" },
    { v1: "have", v2: "had", es: "tener / haber" },
    // { v1: "hear", v2: "heard", es: "oír" },
    // { v1: "hide", v2: "hid", es: "esconder" },
    { v1: "hit", v2: "hit", es: "golpear" },
    // { v1: "hold", v2: "held", es: "sostener" },
    // { v1: "hurt", v2: "hurt", es: "herir / doler" },
    { v1: "keep", v2: "kept", es: "guardar / mantener" },
    { v1: "know", v2: "knew", es: "saber / conocer" },
    // { v1: "lay", v2: "laid", es: "poner / colocar" },
    // { v1: "lead", v2: "led", es: "liderar / guiar" },
    // { v1: "learn", v2: "learnt/learned", es: "aprender" },
    { v1: "leave", v2: "left", es: "dejar / irse" },
    // { v1: "lend", v2: "lent", es: "prestar" },
    // { v1: "let", v2: "let", es: "permitir / dejar" },
    // { v1: "lie", v2: "lay", es: "tumbarse / echarse" },
    // { v1: "light", v2: "lit", es: "encender" },
    { v1: "lose", v2: "lost", es: "perder" },
    { v1: "make", v2: "made", es: "hacer / fabricar" },
    // { v1: "mean", v2: "meant", es: "significar" },
    { v1: "meet", v2: "met", es: "conocer / encontrarse" },
    { v1: "pay", v2: "paid", es: "pagar" },
    { v1: "put", v2: "put", es: "poner" },
    { v1: "read", v2: "read", es: "leer" },
    // { v1: "ride", v2: "rode", es: "montar (bici/caballo)" },
    // { v1: "ring", v2: "rang", es: "sonar / llamar" },
    // { v1: "rise", v2: "rose", es: "elevarse / subir" },
    { v1: "run", v2: "ran", es: "correr" },
    { v1: "say", v2: "said", es: "decir" },
    { v1: "see", v2: "saw", es: "ver" },
    // { v1: "sell", v2: "sold", es: "vender" },
    { v1: "send", v2: "sent", es: "enviar" },
    { v1: "set", v2: "set", es: "colocar / establecer" },
    // { v1: "shake", v2: "shook", es: "agitar / sacudir" },
    // { v1: "shine", v2: "shone", es: "brillar" },
    // { v1: "shoot", v2: "shot", es: "disparar" },
    { v1: "show", v2: "showed", es: "mostrar" },
    // { v1: "shut", v2: "shut", es: "cerrar" },
    // { v1: "sing", v2: "sang", es: "cantar" },
    // { v1: "sink", v2: "sank", es: "hundirse" },
    { v1: "sit", v2: "sat", es: "sentarse" },
    { v1: "sleep", v2: "slept", es: "dormir" },
    // { v1: "smell", v2: "smelt/smelled", es: "oler" },
    { v1: "speak", v2: "spoke", es: "hablar" },
    // { v1: "spell", v2: "spelt/spelled", es: "deletrear" },
    // { v1: "spend", v2: "spent", es: "gastar" },
    // { v1: "stand", v2: "stood", es: "estar de pie" },
    // { v1: "steal", v2: "stole", es: "robar" },
    // { v1: "stick", v2: "stuck", es: "pegar / adherir" },
    // { v1: "sweep", v2: "swept", es: "barrer" },
    // { v1: "swim", v2: "swam", es: "nadar" },
    { v1: "take", v2: "took", es: "tomar / llevar" },
    // { v1: "teach", v2: "taught", es: "enseñar" },
    // { v1: "tear", v2: "tore", es: "rasgar" },
    { v1: "tell", v2: "told", es: "contar / decir" },
    // { v1: "think", v2: "thought", es: "pensar" },
    // { v1: "throw", v2: "threw", es: "lanzar" },
    // { v1: "understand", v2: "understood", es: "entender" },
    // { v1: "wake up", v2: "woke up", es: "despertarse" },
    // { v1: "wear", v2: "wore", es: "llevar puesto" },
    { v1: "win", v2: "won", es: "ganar" },
    { v1: "write", v2: "wrote", es: "escribir" }
];


// VARIABLES DE ESTADO
let currentMode = ''; 
let currentVerb = null;
let currentVerbIndex = -1; // Para saber qué verbo estamos jugando
let isChecking = false; 
let remainingIndices = []; // Cartas disponibles en esta ronda
let wrongIndices = []; // Índices de los que hemos fallado
let totalRoundQuestions = 0; // Para el contador "X / Total"

const startScreen = document.getElementById('start-screen');
const gameScreen = document.getElementById('game-screen');
const endScreen = document.getElementById('end-screen');

const verbQuestion = document.getElementById('verb-question');
const questionLabel = document.getElementById('question-label');
const input = document.getElementById('user-answer');
const actionBtn = document.getElementById('action-btn');
const feedbackArea = document.getElementById('feedback-area');
const feedbackTitle = document.getElementById('feedback-title');
const feedbackMsg = document.getElementById('feedback-msg');
const verbMeaning = document.getElementById('verb-meaning');
const counter = document.getElementById('counter');

// Elementos de la pantalla final
const scoreSummary = document.getElementById('score-summary');
const errorsContainer = document.getElementById('errors-container');
const errorsList = document.getElementById('errors-list');

// INICIO DEL JUEGO COMPLETO
function startFullGame(mode) {
    currentMode = mode;
    // Llenamos el mazo con TODOS (0 a 95)
    remainingIndices = [];
    for (let i = 0; i < verbs.length; i++) {
        remainingIndices.push(i);
    }
    
    startGameLogic();
}

// INICIO DEL REPASO DE ERRORES
function startErrorReview() {
    // El mazo ahora son solo los índices que fallamos
    remainingIndices = [...wrongIndices];
    startGameLogic();
}

// LÓGICA COMÚN DE ARRANQUE
function startGameLogic() {
    wrongIndices = []; // Reseteamos los errores de la NUEVA ronda
    totalRoundQuestions = remainingIndices.length; // Fijamos el total para el contador
    
    startScreen.classList.remove('active');
    endScreen.classList.remove('active');
    gameScreen.classList.add('active');
    
    loadNewQuestion();
    setTimeout(() => input.focus(), 100);
}

function goHome() {
    gameScreen.classList.remove('active');
    endScreen.classList.remove('active');
    startScreen.classList.add('active');
}

function loadNewQuestion() {
    // 1. Verificar si la ronda ha terminado
    if (remainingIndices.length === 0) {
        showResults();
        return;
    }

    // Reset UI
    isChecking = false;
    feedbackArea.className = 'feedback'; 
    feedbackArea.style.display = 'none';
    input.value = '';
    input.disabled = false;
    actionBtn.innerText = 'Comprobar';
    actionBtn.classList.remove('btn-secondary');
    
    // 2. Sacar carta aleatoria del mazo
    const randomIndexPosition = Math.floor(Math.random() * remainingIndices.length);
    currentVerbIndex = remainingIndices[randomIndexPosition];
    
    // 3. Eliminar esa carta del mazo actual
    remainingIndices.splice(randomIndexPosition, 1);

    currentVerb = verbs[currentVerbIndex];

    // 4. Actualizar contador: (TotalInicial - Restantes) / TotalInicial
    // Como ya borramos uno del array, si empezamos con 5 y queda 4, llevamos 1.
    const currentNumber = totalRoundQuestions - remainingIndices.length;
    counter.innerText = `${currentNumber} / ${totalRoundQuestions}`;

    if (currentMode === 'v1_to_v2') {
        questionLabel.innerText = "Escribe el PAST SIMPLE (V2) de:";
        verbQuestion.innerText = currentVerb.v1.toUpperCase();
    } else {
        questionLabel.innerText = "Escribe la BASE FORM (V1) de:";
        verbQuestion.innerText = currentVerb.v2.toUpperCase();
    }
    
    input.focus();
}

function checkAnswer() {
    if (isChecking) {
        loadNewQuestion();
        return;
    }

    const userAnswer = input.value.trim().toLowerCase();
    if (!userAnswer) return; 

    let correctAnswerRaw = (currentMode === 'v1_to_v2') ? currentVerb.v2 : currentVerb.v1;
    const validAnswers = correctAnswerRaw.split('/').map(w => w.trim().toLowerCase());
    const isCorrect = validAnswers.includes(userAnswer);

    feedbackArea.style.display = 'block';
    
    if (isCorrect) {
        feedbackArea.className = 'feedback correct';
        feedbackTitle.innerText = '¡Correcto!';
        feedbackMsg.innerText = `Muy bien. ${correctAnswerRaw} es correcto.`;
    } else {
        feedbackArea.className = 'feedback incorrect';
        feedbackTitle.innerText = 'Incorrecto';
        feedbackMsg.innerText = `La respuesta correcta era: ${correctAnswerRaw}`;
        
        // ¡IMPORTANTE! Guardamos el índice en la lista de errores si no estaba ya
        if (!wrongIndices.includes(currentVerbIndex)) {
            wrongIndices.push(currentVerbIndex);
        }
    }

    verbMeaning.innerText = `Significado: ${currentVerb.es}`;
    isChecking = true;
    input.disabled = true;
    actionBtn.innerText = 'Siguiente Verbo →';
    actionBtn.focus(); 
}

function showResults() {
    gameScreen.classList.remove('active');
    endScreen.classList.add('active');

    const total = totalRoundQuestions;
    const errors = wrongIndices.length;
    const correct = total - errors;
    
    // Resumen
    scoreSummary.innerHTML = `
        <p>Aciertos: <strong style="color:var(--success)">${correct}</strong></p>
        <p>Fallos: <strong style="color:var(--error)">${errors}</strong></p>
    `;

    // Lista de errores
    errorsList.innerHTML = '';
    if (errors > 0) {
        errorsContainer.style.display = 'block';
        
        wrongIndices.forEach(index => {
            const verb = verbs[index];
            const div = document.createElement('div');
            div.className = 'error-item';
            
            // Mostramos qué falló
            let text = '';
            if (currentMode === 'v1_to_v2') {
                text = `<strong>${verb.v1}</strong> ➞ se escribe <strong>${verb.v2}</strong>`;
            } else {
                text = `<strong>${verb.v2}</strong> ➞ se escribe <strong>${verb.v1}</strong>`;
            }
            div.innerHTML = text;
            errorsList.appendChild(div);
        });
    } else {
        errorsContainer.style.display = 'none';
        scoreSummary.innerHTML += `<p style="color:var(--primary); font-weight:bold; margin-top:10px;">¡PERFECTO! 🎉</p>`;
    }
}

// Enter para enviar
input.addEventListener("keypress", function(event) {
    if (event.key === "Enter") {
        event.preventDefault();
        checkAnswer();
    }
});