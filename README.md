# Rock, Paper, Scissors — Escape the Evil AI 🤖🪨📄✂️

**A JavaScript-only browser game built during the Mayerfeld Consulting AI-Assisted Frontend Developer Practicum (October 2026).**

Three junior developers. One ordinary assignment. An Evil AI takes over their mentor Branko's computer and threatens their coursework. To save the day, the developers recruit an unlikely ally: **Jigsaw**.

> "Hello, Evil AI. I want to play a game."

Your mission: beat the Evil AI at Rock, Paper, Scissors. **First to three round wins takes the game.**

## Play the game

1. Clone or download this repository.
2. Open `index.html` in a browser (Chrome is recommended).
3. Read the opening story and instructions in the browser dialogs.
4. When prompted, type `Rock`, `Paper`, or `Scissors`.
5. Follow each round's outcome and the running score in the dialogs.

There is **no visible page interface by design**. The assignment uses JavaScript browser dialogs (`alert()`, `prompt()`, and `confirm()`) and console output rather than HTML controls or DOM manipulation.

For optional intercepted transmissions, open Chrome DevTools with **F12** (or **Ctrl + Shift + J** on Windows) and select **Console**.

### Rules and input handling

- Rock beats Scissors; Scissors beats Paper; Paper beats Rock.
- The first player to win **three rounds** wins the game.
- A draw awards no points. The game continues until someone reaches three wins.
- Inputs ignore capitalization and extra spaces (`  rOcK  ` works).
- Invalid answers trigger hints and another prompt without affecting the score.
- Press **Cancel on the weapon-selection prompt** to leave the game safely.
- To start a new game after one ends, **refresh the browser page**.

*Bonus:* Try entering `banana` as your weapon. The Evil AI has opinions. 🍌

## What's inside?

```text
mayerfeld-rock-paper-scissors/
├── index.html   # Minimal page that loads the JavaScript
├── script.js    # Story, input validation, game mechanics and score loop
└── README.md    # Project documentation
```

No dependencies, package installation, or build process are required.

## How the JavaScript is organized

| Function | Responsibility |
| --- | --- |
| `showInstructions()` | Introduces the story, game rules and console transmissions. |
| `getPlayerChoice()` | Prompts for a weapon, validates input and handles cancellation. |
| `computerPlay()` | Randomly chooses Rock, Paper or Scissors for the Evil AI. |
| `playRound(playerSelection, computerSelection)` | Compares weapons and returns `"win"`, `"lose"`, or `"draw"` for valid choices. |
| `game()` | Runs the rounds, updates scores, displays results and announces the winner. |

The `game()` function starts automatically when `script.js` loads. Scorekeeping stays in the game controller rather than in `playRound()`.

## Meet the development team

| Contributor | Assignment role | Main responsibilities |
| --- | --- | --- |
| **Betim** — Person A | Game Mechanics | Random computer choice and round comparison. |
| **Aspa** — Person B | Player Experience | Storytelling, instructions, prompts, validation and cancellation. |
| **Tahlia** — Person C | Game Controller | Round loop, scoring, feedback and win/loss conditions. |

We used **feature branches, pull requests and teammate reviews** to build and integrate our sections of the game.

## What we practiced

- JavaScript functions, parameters and return values
- Variables, arrays, objects and conditionals
- `while` loops and scorekeeping
- String normalization with `trim()` and `toLowerCase()`
- Browser dialogs, console output and safe handling of `null` from Cancel
- Designing clear function contracts for team integration
- Git branching, commits, pull requests and code review

## Assignment constraints

This game was developed under a JavaScript-focused assignment brief: a minimal HTML boilerplate, an external JavaScript file, **no CSS** and **no DOM manipulation**. Player interaction happens through JavaScript dialogs and the console.

---

*Made with JavaScript, teamwork, questionable villain recruitment, and an unreasonable number of Jigsaw quotes.*
