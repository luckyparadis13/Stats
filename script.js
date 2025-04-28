// Wait until page loads
document
  .getElementById("calculateButton")
  .addEventListener("click", calculateStats);

// Main function
function calculateStats() {
  const input = document.getElementById("numberInput").value;
  const numbers = input
    .split(",")
    .map((num) => parseFloat(num.trim()))
    .filter((num) => !isNaN(num));

  if (numbers.length === 0) {
    alert("Please enter valid numbers!");
    return;
  }

  const length = numbers.length;
  const sum = getSum(numbers);
  const mean = sum / length;
  const min = getMin(numbers);
  const max = getMax(numbers);
  const range = max - min;
  const evens = getEvens(numbers);
  const odds = getOdds(numbers);

  displayResults(length, sum, mean, min, max, range, evens, odds);
}

// Display results nicely
function displayResults(length, sum, mean, min, max, range, evens, odds) {
  const resultsDiv = document.getElementById("results");
  resultsDiv.innerHTML = `
    <div class="stat"><strong>Count:</strong> ${length}</div>
    <div class="stat"><strong>Sum:</strong> ${sum}</div>
    <div class="stat"><strong>Mean (Average):</strong> ${mean.toFixed(2)}</div>
    <div class="stat"><strong>Minimum:</strong> ${min}</div>
    <div class="stat"><strong>Maximum:</strong> ${max}</div>
    <div class="stat"><strong>Range:</strong> ${range}</div>
    <div class="stat"><strong>Evens:</strong> ${
      evens.join(", ") || "None"
    }</div>
    <div class="stat"><strong>Odds:</strong> ${odds.join(", ") || "None"}</div>
  `;
}

// Helper functions
function getSum(array) {
  let total = 0;
  for (let num of array) {
    total += num;
  }
  return total;
}

function getMin(array) {
  let min = array[0];
  for (let num of array) {
    if (num < min) {
      min = num;
    }
  }
  return min;
}

function getMax(array) {
  let max = array[0];
  for (let num of array) {
    if (num > max) {
      max = num;
    }
  }
  return max;
}

function getEvens(array) {
  const evens = [];
  for (let num of array) {
    if (num % 2 === 0) {
      evens.push(num);
    }
  }
  return evens;
}

function getOdds(array) {
  const odds = [];
  for (let num of array) {
    if (num % 2 !== 0) {
      odds.push(num);
    }
  }
  return odds;
}
