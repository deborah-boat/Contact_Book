// Webpage

/*const output = document.getElementById("output"); 
const coinBtn = document.getElementById("coinBtn"); 
const adviceBtn = document.getElementById("adviceBtn");
 const adviceInput = document.getElementById("adviceInput");


async function flipCoin() {
    const isHeads = Math.random() > 0.5;
    if (isHeads) {
        return "You win!";
    } else {
        throw "You lose!";
    }
}

async function fetchAdviceid(id) {
    const response = await fetch (`https://api.adviceslip.com/advice/${id}`);
    const data = await response.json();
    return data.slip.advice;
}

//Advise Button
adviceBtn.addEventListener("click", async () => {
    const id = adviceInput.ariaValueMax;
    if (id) {
        output.textContent = "Please enter an ID.";
        return;
    }
    try {
        const advice = await fetchAdviceid(id);
        output.textContent = advice;
    } catch {
        output.textContent = "Could not fetch advice.";
    }
})*/


// Console

// ASYNC: Flip Coin
async function flipCoin() {
  const isHeads = Math.random() > 0.5;

  if (isHeads) {
    return "You win!";
  } else {
    throw "You lose!";
  }
}

// RUN IT
async function runFlip() {
  try {
    const result = await flipCoin();
    console.log(result);
  } catch (err) {
    console.log(err);
  }
}

runFlip();


// ASYNC: Fetch Advice
async function fetchAdviceId(id) {
  const response = await fetch(`https://api.adviceslip.com/advice/${id}`);
  const data = await response.json();
  return data.slip.advice;
}

// RUN IT
async function runAdvice() {
  try {
    const advice = await fetchAdviceId(2);
    console.log("Advice:", advice);
  } catch (err) {
    console.log("Error fetching advice");
  }
}

runAdvice();




















