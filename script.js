const moodTodos = {
  happy: [
    "Share a smile with someone",
    "Write down 3 things you're grateful for",
    "Listen to your favorite song",
    "Go for a short walk",
    "Compliment someone today",
    "Dance to your favorite tune",
    "Plan something fun for the weekend"
  ],
  sad: [
    "Take a deep breath",
    "Reach out to a friend",
    "Write your feelings in a journal",
    "Treat yourself kindly",
    "Watch a comforting movie",
    "Go outside for some fresh air",
    "Remind yourself it's okay to feel sad"
  ],
  angry: [
    "Pause and count to ten",
    "Do a quick workout",
    "Write down what's bothering you",
    "Take a break from screens",
    "Listen to calming music",
    "Try some deep breathing",
    "Channel your energy into a creative task"
  ],
  relaxed: [
    "Enjoy a cup of tea or coffee",
    "Read a few pages of a book",
    "Do a short meditation",
    "Stretch your body gently",
    "Listen to nature sounds",
    "Light a candle or incense",
    "Take a slow mindful walk"
  ]
};

const moodColors = {
  happy: 'mood-happy',
  sad: 'mood-sad',
  angry: 'mood-angry',
  relaxed: 'mood-relaxed'
};

const moodBtns = document.querySelectorAll('.mood-btn');
const todoList = document.getElementById('todo-list');
let currentMood = null;

moodBtns.forEach(btn => {
  btn.addEventListener('click', () => {
    const mood = btn.getAttribute('data-mood');
    if (mood === currentMood) return;
    currentMood = mood;
    // Animate emoji
    btn.classList.add('selected');
    moodBtns.forEach(b => { if (b !== btn) b.classList.remove('selected'); });
    btn.style.transform = 'scale(1.25)';
    setTimeout(() => {
      btn.style.transform = '';
    }, 180);
    // Change background
    document.body.classList.remove(...Object.values(moodColors));
    document.body.classList.add(moodColors[mood]);
    // Show todos
    showTodos(mood);
  });
});

function showTodos(mood) {
  // Fade out
  todoList.classList.remove('visible');
  setTimeout(() => {
    todoList.innerHTML = '';
    moodTodos[mood].forEach((todo, i) => {
      const item = document.createElement('div');
      item.className = 'todo-item';
      item.textContent = todo;
      item.style.animationDelay = `${i * 0.08}s`;
      todoList.appendChild(item);
    });
    // Fade in
    setTimeout(() => {
      todoList.classList.add('visible');
    }, 30);
  }, 300);
} 