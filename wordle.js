async function getAPI() {
    /*
    const res = await fetch("OLDAPI/v1/wordle", {
        headers: {
            "x-api-key": "sw0Tr2othT1AyTQtNDUE06LqMckbTiKWaVYhuirv",
        },
    });

    const json = await res.json();
    const dictionary = json.dictionary;
    */

    const dictionary = [
        { word: "word", hint: "Name of the game minus 'le'" },
        { word: "play", hint: "To engage in a game or sport" },
        { word: "hint", hint: "A clue or a suggestion" },
        { word: "cold", hint: "Opposite of hot" },
        { word: "fire", hint: "Opposite of water" },
        { word: "frog", hint: "A green jumping animal" },
        { word: "moon", hint: "Earth’s natural satellite" },
        { word: "milk", hint: "White liquid from cows" },
        { word: "gold", hint: "A valuable yellow metal" },
        { word: "book", hint: "Collection of pages you can read" },
        { word: "tree", hint: "Tall plant with branches" },
        { word: "fish", hint: "Lives in water and swims" },
        { word: "cake", hint: "Sweet baked dessert" },
        { word: "snow", hint: "Frozen rain from the sky" },
        { word: "lamp", hint: "Used to light a room" },
        { word: "rain", hint: "Water falling from the sky" },
        { word: "jump", hint: "To leap off the ground" },
        { word: "rock", hint: "Hard piece of Earth" },
        { word: "love", hint: "Strong feeling of affection" },
        { word: "game", hint: "Something you play for fun" },
        { word: "bake", hint: "To cook in an oven" },
        { word: "blue", hint: "Color of the clear sky" },
        { word: "sand", hint: "Found at the beach" },
        { word: "wind", hint: "Moving air" },
        { word: "star", hint: "Shines in the night sky" },
        { word: "leaf", hint: "Grows on a tree branch" },
        { word: "bear", hint: "Large furry animal, sometimes dangerous" },
        { word: "road", hint: "What cars drive on" },
        { word: "camp", hint: "Place to sleep outside in nature" },
        { word: "baby", hint: "Very young human" },
        { word: "time", hint: "What a clock tells" },
        { word: "dark", hint: "Opposite of light" },
        { word: "dust", hint: "Tiny particles that collect on surfaces" },
        { word: "sink", hint: "Where you wash your hands" },
        { word: "bike", hint: "Two-wheeled transport" },
        { word: "farm", hint: "Place where crops and animals are raised" },
        { word: "coin", hint: "Small round money" },
        { word: "gift", hint: "Something you give on a birthday" },
        { word: "face", hint: "Front part of the head" },
        { word: "song", hint: "Something you sing" },
        { word: "band", hint: "Group of musicians" },
        { word: "seat", hint: "Place to sit" },
        { word: "rope", hint: "Used to tie things" },
        { word: "iron", hint: "Used to remove wrinkles" },
        { word: "desk", hint: "Used for writing or studying" },
        { word: "door", hint: "You open this to enter a room" },
        { word: "soap", hint: "Used to clean yourself" },
        { word: "note", hint: "Short written message" },
        { word: "fork", hint: "Used to eat solid food" },
        { word: "hand", hint: "At the end of your arm" },
        { word: "step", hint: "Movement of your foot while walking" },
        { word: "clay", hint: "Used in pottery" },
        { word: "rice", hint: "Common food grain" },
        { word: "goat", hint: "Animal that says 'meh'" },
        { word: "path", hint: "A small trail" },
        { word: "wing", hint: "Helps birds fly" },
        { word: "bull", hint: "Male cow" },
        { word: "fear", hint: "Opposite of courage" },
        { word: "ship", hint: "Large boat" },
        { word: "seal", hint: "Animal and also something to close an envelope" },
        { word: "nail", hint: "Can be hammered or grown" },
        { word: "wave", hint: "What you do with your hand to say hi" },
        { word: "yarn", hint: "Used in knitting" },
        { word: "roof", hint: "Top of a house" },
        { word: "doll", hint: "Toy shaped like a person" },
        { word: "tail", hint: "End part of an animal" },
        { word: "bees", hint: "Insects that make honey" },
        { word: "logs", hint: "Cut pieces of wood" },
        { word: "mint", hint: "Fresh-tasting herb or candy" },
        { word: "crow", hint: "Black bird known for its caw" },
        { word: "quiz", hint: "Short test" },
        { word: "gear", hint: "Used in machines to transfer motion" },
        { word: "ring", hint: "Worn on a finger" },
        { word: "ball", hint: "Round toy for games" },
        { word: "hero", hint: "Saves the day" },
        { word: "mask", hint: "Covers your face" },
        { word: "cave", hint: "A hole in a mountain" },
        { word: "bell", hint: "Makes a ringing sound" },
        { word: "nest", hint: "Where birds lay eggs" },
        { word: "hunt", hint: "Search for animals or treasure" },
        { word: "clue", hint: "Helps solve a mystery" },
        { word: "test", hint: "Evaluates your knowledge" },
        { word: "palm", hint: "Inside part of your hand" },
        { word: "kite", hint: "Flies on a string in the wind" },
        { word: "beef", hint: "Meat from a cow" },
        { word: "port", hint: "Place ships dock" },
        { word: "drum", hint: "Musical instrument you hit" },
        { word: "tool", hint: "Used to fix things" },
        { word: "lava", hint: "Molten rock from a volcano" },
        { word: "quit", hint: "To stop trying" },
        { word: "echo", hint: "Sound that bounces back" },
        { word: "glow", hint: "Soft light in the dark" },
        { word: "tide", hint: "Movement of ocean water" },
        { word: "vase", hint: "Holds flowers" },
        { word: "coat", hint: "Worn when it's cold" },
        { word: "zoom", hint: "To move quickly" },
        { word: "peel", hint: "Remove skin of a fruit" },
        { word: "cane", hint: "Used to help walk or a sweet treat" },
        { word: "grid", hint: "Network of lines crossing" },
        { word: "joke", hint: "Something to make you laugh" },
        { word: "lock", hint: "Keeps doors secure" },
        { word: "maze", hint: "Puzzle with many paths" }
    ];


    return dictionary;
}

let dictionary;
let isGameOver = false;
let isWinner = false;
let light = true;

const state = {
    secret: "",
    hint: "",
    grid: Array(4).fill('').map(() => Array(4).fill('')),
    currentRow: 0,
    currentCol: 0
};

function updateGrid() {
    for (let i = 0; i < state.grid.length; i++) {
        for (let j = 0; j < state.grid[i].length; j++) {
            const box = document.getElementById(`box${i}${j}`);
            box.textContent = state.grid[i][j];
        }
    }
}

function drawBox(container, row, col, letter = '') {
    const box = document.createElement('div');
    box.className = 'box';
    box.id = `box${row}${col}`;
    box.textContent = letter;

    container.appendChild(box);
    return box;
}

function drawGrid(container) {
    const grid = document.createElement('div');
    grid.className = 'grid';

    for (let i = 0; i < 4; i++) {
        for (let j = 0; j < 4; j++) {
            drawBox(grid, i, j);
        }
    }

    container.appendChild(grid);
    return grid;
}

function registerKeyboardEvents() {
    document.body.onkeydown = (keyStroke) => {
        if (isGameOver || isWinner) {
            return;
        }
        const key = keyStroke.key;
        if (key == 'Enter') {
            if (state.currentRow === 4) {
                return;
            }
            const word = getCurrentWord();
            if (isWordValid(word)) {
                revealWord(word);
                state.currentRow++;
                state.currentCol = 0;
            }
            else {
                window.alert("first complete the word");
            }
        }
        else if (key == 'Backspace') {
            removeLetter();
        }
        if (isLetter(key)) {
            addLetter(key)
        }

        updateGrid();

        if (isGameOver) {
            const footer = document.getElementById(`footer`);
            const prevHint = document.getElementById('hint');
            if (prevHint) {
                footer.removeChild(prevHint);
            }

            const prevGameOver = document.getElementById('gameOver');
            if (prevGameOver) {
                footer.removeChild(prevGameOver);
            }

            const gameOver = document.createElement('div');
            gameOver.classList.add('gameOver');
            gameOver.id = 'gameOver';
            const gameOverTextOne = document.createTextNode(`Missed the word: `);
            const secret = document.createElement('strong');
            const gameOverTextTwo = document.createTextNode(` and lost!`);
            secret.textContent = state.secret;
            gameOver.appendChild(gameOverTextOne);
            gameOver.appendChild(secret);
            gameOver.appendChild(gameOverTextTwo);
            footer.appendChild(gameOver);
        }
        if (isWinner) {
            const footer = document.getElementById(`footer`);
            const prevHint = document.getElementById('hint');
            if (prevHint) {
                footer.removeChild(prevHint);
            }

            const prevWinner = document.getElementById('winner');
            if (prevWinner) {
                footer.removeChild(prevWinner);
            }

            const winner = document.createElement('div');
            winner.classList.add('winner');
            winner.id = ('winner');
            const winnerText = document.createTextNode(`Congratulations the word was guessed correctly: ${state.secret}`);
            winner.appendChild(winnerText);
            footer.appendChild(winner);

            setTimeout(function () {
                const congratsWrapper = document.createElement('div');
                congratsWrapper.id = 'congratsWrapper';
                congratsWrapper.className = 'congrats-wrapper';

                const congratsImage = document.createElement('img');
                congratsImage.src = 'https://res.cloudinary.com/mkf/image/upload/v1675467141/ENSF-381/labs/congrats_fkscna.gif';
                congratsImage.id = 'congratsImage';

                congratsWrapper.appendChild(congratsImage);
                gameContainer.appendChild(congratsWrapper);

                const game = document.getElementById('game');
                if (game) {
                    game.style.display = 'none';
                }
            }, 500);
        }
    }
}

function getCurrentWord() {
    const row = state.currentRow;
    let currentWord = state.grid[row][0] + state.grid[row][1] + state.grid[row][2] + state.grid[row][3];
    return currentWord;
}

function isWordValid(word) {
    if (word.length === 4) {
        return true;
    }
}

function revealWord(guess) {
    const row = state.currentRow;
    let match = [false, false, false, false];

    for (let i = 0; i < 4; i++) {
        const box = document.getElementById(`box${row}${i}`);
        const letter = box.textContent;

        if (letter === state.secret[i]) {
            box.classList.add('right');
            match[i] = true;
        }
    }

    for (let i = 0; i < 4; i++) {
        const box = document.getElementById(`box${row}${i}`);
        const letter = box.textContent;
        let verify = false;
        if ((letter === state.secret[0] || letter === state.secret[1] || letter === state.secret[2] || letter === state.secret[3]) && letter !== state.secret[i]) {
            if (letter === state.secret[0] && match[0] == false) {
                box.classList.add('in');
                match[0] = true;
                verify = true;
                continue;
            }
            if (letter === state.secret[1] && match[1] == false) {
                box.classList.add('in');
                match[1] = true;
                verify = true;
                continue;
            }
            if (letter === state.secret[2] && match[2] == false) {
                box.classList.add('in');
                match[2] = true;
                verify = true;
                continue;
            }
            if (letter === state.secret[3] && match[3] == false) {
                box.classList.add('in');
                match[3] = true;
                verify = true;
                continue;
            }
            if (verify == false) {
                box.classList.add('wrong')
            }
        }
        else {
            box.classList.add('wrong')
        }
    }

    isWinner = state.secret === guess;
    isGameOver = row === 3;
}

function isLetter(key) {
    return key.length === 1 && key.match(/[a-z]/i);
}

function addLetter(letter) {
    if (state.currentCol === 4 || state.currentRow === 4)
        return;
    state.grid[state.currentRow][state.currentCol] = letter.toUpperCase();
    state.currentCol++;
    if (state.currentCol !== 4) {
        const box = document.getElementById(`box${state.currentRow}${state.currentCol}`);
        box.classList.add('selected');
        const prevbox = document.getElementById(`box${state.currentRow}${state.currentCol - 1}`);
        prevbox.className = 'box';
    }
    else {
        const prevbox = document.getElementById(`box${state.currentRow}${state.currentCol - 1}`);
        prevbox.className = 'box';
    }
}

function removeLetter() {
    if (state.currentCol === 0 || state.currentRow === 4)
        return;
    state.grid[state.currentRow][state.currentCol - 1] = '';
    state.currentCol--;
    if (state.currentCol !== 3) {
        const box = document.getElementById(`box${state.currentRow}${state.currentCol}`);
        box.classList.add('selected');
        const boxnext = document.getElementById(`box${state.currentRow}${state.currentCol + 1}`);
        boxnext.className = 'box';
    }
    else {
        const box = document.getElementById(`box${state.currentRow}${state.currentCol}`);
        box.classList.add('selected');
    }
}

function startOver() {
    let newIndex = Number.parseInt(Math.random() * dictionary.length);
    correctWord = dictionary[newIndex].word;
    wordHint = dictionary[newIndex].hint;

    state.secret = correctWord.toUpperCase();
    state.hint = wordHint;

    if (isWinner) {
        const congratsWrapper = document.getElementById('congratsWrapper');
        if (congratsWrapper) {
            congratsWrapper.remove();
        }

        const game = document.getElementById('game');
        game.style.display = 'grid';
        game.innerHTML = '';
    }
    const game = document.getElementById('game')
    const oldGrid = game.querySelector('.grid');
    if (oldGrid) {
        game.removeChild(oldGrid);
    }

    drawGrid(game);
    state.grid = Array(4).fill('').map(() => Array(4).fill(''));
    state.currentRow = 0;
    state.currentCol = 0;

    isWinner = false;
    isGameOver = false;

    const box = document.getElementById(`box${state.currentRow}${state.currentCol}`);
    box.classList.add('selected');
    console.log(state.secret);

    const footer = document.getElementById(`footer`);
    const prevHint = document.getElementById('hint');
    if (prevHint) {
        footer.removeChild(prevHint);
    }
    const prevGameOver = document.getElementById('gameOver');
    if (prevGameOver) {
        footer.removeChild(prevGameOver);
    }
    const prevWinner = document.getElementById('winner');
    if (prevWinner) {
        footer.removeChild(prevWinner);
    }

}

async function startup() {
    const game = document.getElementById('game');
    const loadingText = document.createTextNode(`Loading...`);
    game.appendChild(loadingText);

    dictionary = await getAPI();

    game.removeChild(loadingText);

    drawGrid(game);

    let pick = Number.parseInt(Math.random() * dictionary.length);
    correctWord = dictionary[pick].word;
    wordHint = dictionary[pick].hint;

    const box = document.getElementById(`box${state.currentRow}${state.currentCol}`);
    box.classList.add('selected');
    state.secret = correctWord.toUpperCase();
    state.hint = wordHint;

    registerKeyboardEvents();

    console.log(state.secret);
}

function lightDark() {
    if (light == true) {
        document.documentElement.style.setProperty('--default', 'rgb(0, 0, 0)');
        document.documentElement.style.setProperty('--black', 'rgb(255, 255, 255)');
        document.documentElement.style.setProperty('--selected', 'rgb(119, 212, 233');
        document.documentElement.style.setProperty('--footer', 'rgb(74, 74, 74');
        light = false;
    }
    else {
        document.documentElement.style.setProperty("--default", "rgb(255, 245, 223)");
        document.documentElement.style.setProperty('--black', 'rgb(0, 0, 0)')
        document.documentElement.style.setProperty('--selected', 'rgb(0, 0, 0');
        document.documentElement.style.setProperty('--footer', 'rgb(234, 227, 211');
        light = true;
    }
}

function hint() {
    if (isGameOver || isWinner) {
        return;
    }
    const footer = document.getElementById(`footer`);

    const prevHint = document.getElementById('hint');
    if (prevHint) {
        footer.removeChild(prevHint);
        return;
    }

    const hint = document.createElement('div');
    hint.classList.add('hint');
    hint.id = 'hint';
    const hintText = document.createTextNode(`Hint: ${state.hint}`);
    hint.appendChild(hintText);
    footer.appendChild(hint);
}

function instructions() {
    const game = document.getElementById(`gameContainer`);

    const prevInstructions = document.getElementById('instructions');
    if (prevInstructions) {
        game.removeChild(prevInstructions);
        return;
    }

    const instructions = document.createElement('div');
    instructions.classList.add('instructions');
    instructions.id = 'instructions';
    const instructionsTitle = document.createElement('strong');
    instructionsTitle.textContent = "How to Play";

    const instructionsText = document.createElement('ul');
    const instruction1 = document.createElement('li');
    instruction1.textContent = "Start typing. The letters will appear in the boxes";
    const instruction2 = document.createElement('li');
    instruction2.textContent = "Remove letters with backspace";
    const instruction3 = document.createElement('li');
    instruction3.textContent = "Hit Enter/Return to submit an answer";
    const instruction4 = document.createElement('li');
    instruction4.textContent = "Letters with green background are in the correct spot";
    const instruction5 = document.createElement('li');
    instruction5.textContent = "Letters with yellow background exist in the word, but are in the wrong spot";
    const instruction6 = document.createElement('li');
    instruction6.textContent = "Letters with grey background do not exist in the word";
    const instruction7 = document.createElement('li');
    instruction7.textContent = "If you need a hint you can press the ? button";
    instructionsText.appendChild(instruction1);
    instructionsText.appendChild(instruction2);
    instructionsText.appendChild(instruction3);
    instructionsText.appendChild(instruction4);
    instructionsText.appendChild(instruction5);
    instructionsText.appendChild(instruction6);
    instructionsText.appendChild(instruction7);

    instructions.appendChild(instructionsTitle);
    instructions.appendChild(instructionsText);
    game.appendChild(instructions);

}

startup();