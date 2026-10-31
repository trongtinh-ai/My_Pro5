/* TERMINAL DATA — edit copy here, no need to touch js/terminal.js */
window.TERMINAL = {
  prompt: "tinh@profile:~$",

  welcome: [
    "Welcome to Tinh's interactive terminal. v1.0.0",
    "Type  help  to see available commands."
  ],

  commands: {
    help: [
      "Available commands:",
      "  about        — who I am",
      "  whoami       — quick identity card",
      "  game         — what I play",
      "  quote        — a quote I live by",
      "  contact      — how to reach me",
      "  pomodoro     — focus timer  [start|stop|status]",
      "  coffee       — essential fuel",
      "  guess        — number guessing game (1-20, 5 tries)",
      "  achievements — unlock progress",
      "  clear        — clear the screen"
    ],
    about: [
      "Third-year student at FPT University.",
      "Focused on studying hard and graduating.",
      "Building things in the gaps between deadlines."
    ],
    whoami: [
      "Tran Trong Tinh",
      "Student · Gamer · Occasional developer",
      "FPT University — Vietnam"
    ],
    game: [
      "Delta Force.",
      "My go-to when I need a break from the textbooks."
    ],
    quote: [
      '"Not the smartest in the room,',
      " but striving to become a better version every day.\""
    ],
    coffee: [
      "Brewing...",
      "  (",
      "  )",
      " (  )",
      "  )  (",
      " ( ___) )",
      " |      |]",
      " \\      /",
      "  `----'",
      "Coffee ready. Focus mode: ON."
    ]
  },

  achievements: {
    first:   { name: "Hello, World!",    desc: "Run your first command" },
    sudo:    { name: "Nice Try",         desc: "Run sudo" },
    konami:  { name: "Up Up Down Down",  desc: "Enter the Konami code" },
    coffee:  { name: "Caffeinated",      desc: "Run coffee" },
    guesser: { name: "Lucky Guess",      desc: "Win the guessing game" }
  }
};
