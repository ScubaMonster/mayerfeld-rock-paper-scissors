"use strict";


// ========================================
// ROCK, PAPER, SCISSORS
// Mayerfeld Consulting - JS Assignment 1
// ========================================

// TEAM RULES:
// 1. Work on your own feature branch.
// 2. Edit only your assigned section.
// 3. Do not change another person's functions
//    without discussing it first.
// 4. All changes go through pull requests.

// ========================================
// PERSON B - PLAYER EXPERIENCE (ASPA)
// ========================================

// showInstructions()
// Explain the game rules, the console,
// and how the player can interact.

// getPlayerChoice()
// Collect and validate the player's input.
// Accept Rock, Paper or Scissors.
// Ignore capitalization and extra spaces.
// Return null if the player cancels.

function showInstructions() {

    // SCENE 1: The origin story
    // Three developers. One assignment. Zero preparation for villainy.

    alert(`OCTOBER 2026. EARTH.

Three junior developers.
One ordinary Assignment Sunday.

UNTIL IT WASN'T.

An Evil AI hacks their mentor's computer.
Their coursework is threatened.
Branko must be saved.

Their mission?

ROCK. PAPER. SCISSORS.

...using only JavaScript.`);


    // SCENE 2: The unexpected recruitment
    // When life gives you villains, recruit a worse one.

    alert(`But their hearts are too pure.
Their minds too innocent.

How can they defeat such a sinister enemy?

There is only one solution...

TO DEFEAT A VILLAIN...
THEY MUST RECRUIT ANOTHER.

Someone who knows how to play games.

They recruit...

...`);

// The most dramatic recruitment in JavaScript history.
// HR was not consulted.

alert("JIGSAW.");


    // SCENE 3: The rules of survival.
    // Even psychological warfare needs good UX.

    alert(`WELCOME TO THE GAME, HUMAN.

Your mission: Defeat the Evil AI!

RULES:
- Choose Rock, Paper, or Scissors.
- First to win 3 rounds wins the game.
- Draws earn no points.
- Invalid choices don't count.
- Press Cancel to quit safely.

THE SECRET TRANSMISSIONS:
Open Chrome Developer Tools with F12.
Select the Console tab to read the intercepted messages.

All essential gameplay information will also
appear in browser dialogs.

The resistance is counting on you.`);


    // SCENE 4: Intercepted transmission.
    // What could possibly go wrong with recruiting Jigsaw?

    console.log("====================================");
    console.log("  CLASSIFIED SYSTEM TRANSMISSION");
    console.log("====================================");

    console.warn("WARNING: UNAUTHORIZED ACCESS DETECTED.");

    console.log("[SYSTEM] Date: October 2026");
    console.log("[SYSTEM] Location: Earth");
    console.log("[SYSTEM] Three junior developers connected.");

    console.warn("[SYSTEM] MENTOR COMPROMISED.");
    console.warn("[SYSTEM] EVIL AI CONTROLS THE ASSIGNMENT.");

    console.log("[SYSTEM] Searching for reinforcements...");
    console.log("[SYSTEM] Unconventional ally detected.");

    console.log("[JIGSAW] Hello, Evil AI.");
    console.log("[JIGSAW] I want to play a game.");

    console.log("[EVIL AI] ...");
    console.log("[EVIL AI] WAIT. WHO INVITED YOU?!");

    console.log("[JIGSAW] Three developers. Three victories.");
    console.log("[JIGSAW] Your move.");

    console.warn("[EVIL AI] THIS WAS NOT IN MY TRAINING DATA!");


}


function getPlayerChoice() {

    // Keep asking until the human makes a valid choice.
    // Apparently, choosing a weapon is complicated.

    let invalidAttempts = 0;
    while (true) {

        const playerInput = prompt(
            "EVIL AI: Choose your weapon, human!\n" +
            "JIGSAW: Rock, Paper, or Scissors. Choose wisely."
        );

        // The human has abandoned the mission.
        // Jigsaw is disappointed, but respects consent.
        if (playerInput === null) {
            console.log("[JIGSAW] The human has left the game.");
            return null;
        }

        // Humans are unpredictable.
        // Their capitalization should not be.
        const choice = playerInput.trim().toLowerCase();

        // Check whether the human selected a real weapon.
        if (choice === "rock") {
            return "Rock";
        } else if (choice === "paper") {
            return "Paper";
        } else if (choice === "scissors") {
            return "Scissors";
        }

        // The human has failed the most basic instructions.
        // The Evil AI is delighted.

        invalidAttempts++;

        console.warn("[EVIL AI] INVALID WEAPON DETECTED!");

        if (choice === "banana") {

            // This is a battle, not a grocery store.
            alert(
                "EVIL AI: BANANA?! IS THIS A BATTLE OF " +
                "INTELLIGENCE OR A FRUIT SALAD?!\n\n" +
                "JIGSAW: Rock. Paper. Scissors. Try again."
            );

        } else if (invalidAttempts === 1) {

            alert(
                "EVIL AI: What now??\n\n" +
                "JIGSAW: Rock, Paper, or Scissors, human."
            );

        } else if (invalidAttempts === 2) {

            alert(
                "EVIL AI: Oh, come ON!\n\n" +
                "JIGSAW: Three options. Just three."
            );

        } else if (invalidAttempts === 3) {

            const needsHelp = confirm(
                "EVIL AI: Do you want to reread the " +
                "instructions, you fool?\n\n" +
                "OK = Yes, show instructions.\n" +
                "Cancel = No, I know what I'm doing."
            );

            if (needsHelp) {
                alert(
                    "JIGSAW: Listen carefully.\n\n" +
                    "Choose Rock, Paper, or Scissors.\n" +
                    "First to three victories wins.\n" +
                    "Draws do not count.\n" +
                    "Invalid choices do not count.\n" +
                    "Press Cancel in the weapon prompt to quit."
                );
            }

        } else {

            alert(
                "EVIL AI: I'm beginning to understand " +
                "why your species needs instruction manuals.\n\n" +
                "JIGSAW: Rock. Paper. Scissors."
            );
        }
    }
}



// ========================================
// PERSON A - GAME MECHANICS (BETIM)
// ========================================

// computerPlay()
// Randomly return Rock, Paper or Scissors.

// playRound(playerSelection, computerSelection)
// Compare the two selections.
// Return "win", "lose", or "draw".
// Do not update scores here.

// ========================================
// PERSON C - GAME CONTROLLER (TAHLIA)
// ========================================

// game()
// Run the game loop.
// Call the other functions.
// Track player and computer scores.
// End when either player reaches 3 wins.
// Handle cancellation and announce the winner.

// ========================================
// GAME INITIALIZATION - PERSON C (TAHLIA)
// ========================================

// game(); // Enable when the game is ready.