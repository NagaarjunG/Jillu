// === Emoji sets ===
// Hearts, smiles, flowers, cute animals, love symbols (~150 emojis)
const allEmojis = {
  hearts: [
    "❤️", "🧡", "💛", "💚", "💙", "💜", "🤎", "🖤", "🤍",
  "💖", "💗", "💓", "💞", "💕", "💝", "💘", "💟", "❣️", "💌",
  "💍", "💎", "💘", "💖", "💗", "💞", "💝", "💟", "💓", "💜",
  "❤️‍🔥", "❤️‍🩹", "💑", "👩‍❤️‍👨", "👨‍❤️‍👨", "👩‍❤️‍👩", "💏",
  "💑", "💏", "💓", "💞", "💕", "💖", "💗", "💘", "💝", "💟",
  "❣️", "💌", "💍", "💎", "💋", "🫦", "💘", "💖", "💗", "💓",
  "💞", "💕", "💝", "💟", "💌", "💍", "💎", "💘", "💖", "💗",
  "💜", "💚", "💛", "🧡", "❤️", "🤎", "🖤", "🤍", "💘", "💖",
  "💗", "💓", "💞", "💕", "💝", "💟", "💌", "💍", "💎", "💘",
  "❤️‍🔥", "💜", "💚", "💛", "🧡", "❤️", "🖤", "🤍", "💟", "💝"
  ],
  smiles: [
    "😊", "😚", "😘", "😗", "😙", "🥰", "😍", "🤗", "😻", "😽",
  "😇", "😌", "😉", "😋", "😜", "😝", "😛", "😎", "🤩", "🥳",
  "😏", "😅", "😂", "🤣", "😃", "😄", "😁", "😀", "😆", "😇",
  "🤭", "😚", "😘", "😗", "😙", "🥰", "😍", "🤗", "😻", "😽",
  "🥰", "😍", "😘", "😗", "😙", "😊", "🤗", "🤭", "😉", "😌",
  "😚", "😘", "😙", "😍", "🥰", "🤩", "😋", "😜", "😝", "😛",
  "😇", "😉", "🤗", "😻", "😽", "😅", "😂", "🤣", "😃", "😁",
  "😆", "😇", "😋", "😜", "😝", "😛", "😚", "😘", "😗", "😙",
  "🥰", "😍", "🤩", "😇", "😉", "😊", "😻", "😽", "🥰", "😍",
  "😘", "😗", "😙", "😊", "🤗", "🤭", "😉", "😌", "😚", "😘"
  ]
};

// Combine all emojis arrays for "all"
const combinedEmojis = [...allEmojis.hearts, ...allEmojis.smiles];

// === Sweet words array (English + Tamil + romantic quotes, 100+ unique) ===
const sweetWords = [
  "En thangameyyy krishuuuu 💞 ummaahhhhhhhhhhhhhhh diii krishhuu 💋", "muththameyyy 💖", "kisssss 😘", "sweetyyyyyyy 😚", "krishuuu 🥰",
  "chellameyyyy 💞", "thangameyyyyy💝", "laddu 😍", "en jiluuuu 😍","pooveyyy 💐", "en krishnaveniiii..😍","azhagiyeee 💗",
  "kanmaniyeeee 💓", "rose milkuhhh 🥛", "poongotheyyyy 🌸", "en poongotheyyyy 💓", "koththamalli 🌿",
  "en aaasaa krishhhheeyyy 💘", "cup cake ehhhhh 💖", "sweeteyyy love 💝", "honeyyyyy 💗", "cuddle babyyyyyy 💞","Uuuummmaaaahhhh 😘😚",
  "Ummmmaaahh 💋💞",
  "Ummaahhhhhh 💗😘",
  "Ummaaaaahhhh 💓😙",
  "Ummaaaaaahhh 💖😍",
  "Ummmmmaaaaah 💝🥰",
  "Ummaaaahhhhhh 💘😘",
  "Uuuummmaahhhh 💞😚",
  "Ummaaaahhh 💋😗",
  "Ummaahhhhh 💓😘",
  "Ummmmmahhhhh 💖😙",
  "Ummaaaaaahhh 💗🥰",
  "Uuuuummmaahhh 💝😍",
  "Ummmmaaahhh 💘😘",
  "Ummaahhhhh 💋😚",
  "Ummaahhhh💞💓",


  
  // New sweet words and romantic quotes
  "love u diii krishuuuu ❤️", "love you to the moon 🌙", "Kaadhaleyyyy💘",
  "sweet dreams, my dear 🌟", "you complete me 💞", "heart and soul ❤️‍🔥", "endless hugs 🤗",
  "kanavu pola un mugam 🌸", "en idhayam un pakkam 💓", "thunai naan irukken 🤝",
  "my sunshine on cloudy days ☀️", " yours 💍", "i wish better half 💕", "always in my thougt 💫",
  "sweetest melody in my heart 🎶", "you’re my girl 🏡", "love’s gentle touch 💗", "together always 💞",
  "my sweetest addiction 🍬", "with you, everything’s better 🌈", "you are angry bird🌠",
  "en manadhil unna 🧡", "nee en vizhiyil 🌺", "my heart’s delight 💖", "beloved forever 💝",
  "you make my heart smile 😊", "kanmaniye varuvadhu ennai 🥰", "precious gem girl uhhh💎",
  "my soul’s partner 👫", "happiness is you 😊", "love beyond words 💌", "you are my peace ☮️",
  "my heart skips a beat 💓", "my sweetest joy 🥰", "un azhagiye unna paarkkum pothu 💐",
  "with you, life sparkles ✨", "you’re my one and only 💕", "sweetest memories with you 📸",
  "my favorite hello and hardest goodbye 💔", "thunai naan irukken en kaiyil 🤝", "un mugam en kanavil 🌙",
  "my love, my life 💖", "kanavilum unathu thunai 🌟", "my heart’s whisper 💗",
  "eternal love 🔥", "with every heartbeat, I love you more ❤️", "you are my forever muse 🎨",
  "en manathin rani 💝", "you’re my sweetest blessing 🙏", "unthan idhayam thunai 🧡",
  "you are my dream 💫", "sweet kisses and warm hugs 💋🤗", "en santhoshameyyyyyyyyyy 🌺",
  "you light up my world 🌞", "my darling, my dear 💕", "un vizhiyin thunai 🧡",
  "my heart’s home 🏠", "love’s gentle flame 🔥", "kanmaniye unathu kalangal 💖",
  "you’re my forever and always 💞", "sweetest love story ever told 📖", "en nenjil unnai 🧡",
  "my sweetest love song 🎵", "eternal flame of love 🔥", "unthan kanavil naan irukken 🌙",
  "you’re my sweetest obsession 💝", "love’s gentle embrace 🤗", "unthan mugam en manam 🌸",
  "my forever flame 🔥", "unthan paattu en kannil 🎶", "you make my heart bloom 🌹",
  "with you, I’m whole 💕", "you’re my heart’s delight 💓", "unthan vizhiyil naan 🌟",
  "sweet love, endless joy 💖", "my heart beats only for you ❤️", "un paattu en kavithai 🎵",
  "you’re my sweetest drlng uhhh🌠", "en manadhil unna 🧡", "my heart’s desire 💘",
  "you light my path 🌟", "unthan uravugal ennai vaazhum 🌸", "love you forever and always 💞",
  "you’re my sweetest blessing 💝", "unthan kaiyil en vaazhvum 🌿", "en loveyyy, en hapinesseyyy 💖",
  "sweet whispers of love 💌", "unthan azhagiye naan 🌹", "my heart sings for you 🎶",
  "with you, life is sooo angryyyyy 🌷", "unthan magizhchi en vaazhvum 🌞", "my sweetest angel 😇"
];

// === User customization settings ===
let emojiCategory = 'all'; // 'all', 'hearts', 'smiles'
let rainSpeed = 800;       // ms interval (smaller = faster)
let maxEmojisOnScreen = 60;

// === Get DOM elements ===
const emojiBox = document.getElementById("emojiBox");
const startBtn = document.getElementById("startBtn");
const stopBtn = document.getElementById("stopBtn");

// Background audio setup
const bgMusic = new Audio('music.mp3'); // You must have this file in your project
bgMusic.loop = true;
bgMusic.volume = 0.15;

// Helper: get emoji array based on selected category
function getEmojisByCategory(category) {
  if (category === 'hearts') return allEmojis.hearts;
  if (category === 'smiles') return allEmojis.smiles;
  return combinedEmojis;
}

// Helper: shuffle array
function shuffle(arr) {
  let currentIndex = arr.length, randomIndex;
  while (currentIndex !== 0) {
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex--;
    [arr[currentIndex], arr[randomIndex]] = [arr[randomIndex], arr[currentIndex]];
  }
  return arr;
}

// Random item from array
function getRandomItem(arr) {
  return arr[Math.floor(Math.random() * arr.length)];
}

// Main interval ID
let intervalId = null;

// Start emoji rain
function startKissRain() {
  if (intervalId) return; // prevent multiple intervals
  bgMusic.play().catch(() => {}); // play music, ignore errors if user hasn't interacted yet
  intervalId = setInterval(() => {
    // Limit max emojis on screen for performance
    if (emojiBox.childElementCount > maxEmojisOnScreen) {
      emojiBox.removeChild(emojiBox.firstChild);
    }

    // Select emoji and sweet word randomly from chosen category and whole sweetWords list
    const emojiArray = getEmojisByCategory(emojiCategory);
    const emoji = getRandomItem(emojiArray);
    const word = getRandomItem(sweetWords);

    const span = document.createElement("span");
    span.textContent = `${emoji} ${word} `;
    span.classList.add("fall");
    span.setAttribute("aria-hidden", "true"); // decorative

    emojiBox.appendChild(span);

    // Auto scroll to bottom
    emojiBox.scrollTop = emojiBox.scrollHeight;

  }, rainSpeed);

  // Update aria-live region text for screen readers
  emojiBox.setAttribute("aria-live", "polite");
}

// Stop emoji rain
function stopKissRain() {
  clearInterval(intervalId);
  intervalId = null;
  bgMusic.pause();
  bgMusic.currentTime = 0;
}

// CSS animation for fluid emoji fall
const style = document.createElement('style');
style.innerHTML = `
.fall {
  display: inline-block;
  animation: fallAnim 1.5s ease-out forwards;
  opacity: 0;
  transform: translateY(-20px);
}
@keyframes fallAnim {
  0% { opacity: 0; transform: translateY(-20px); }
  60% { opacity: 1; transform: translateY(0); }
  100% { opacity: 0; transform: translateY(20px); }
}
`;
document.head.appendChild(style);

// Event listeners
startBtn.addEventListener("click", startKissRain);
stopBtn.addEventListener("click", stopKissRain);

// Optional: Example of customization UI controls could be added later (speed slider, emoji category dropdown)
