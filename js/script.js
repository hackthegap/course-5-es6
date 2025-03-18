import { createState } from './state.js';
import { increment, decrement, reset } from './utils.js';

// Initialize state
const counterState = createState(0);

// Select UI elements
const counterElement = document.getElementById("counter");
const decrementButton = document.getElementById("decrement-btn");
const incrementButton = document.getElementById("increment-btn");
const resetButton = document.getElementById("reset-btn");

// Subscribe to state changes
counterState.subscribe((newState) => {
    counterElement.textContent = newState;
});

// Attach event listeners
decrementButton.addEventListener("click", () => {
    counterState.setState(decrement(counterState.getState()));
});

incrementButton.addEventListener("click", () => {
    counterState.setState(increment(counterState.getState()));
});

resetButton.addEventListener("click", () => {
    counterState.setState(reset());
});
