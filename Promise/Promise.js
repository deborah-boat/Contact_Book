//Console

/*const flipCoin = () => {
    return new Promise((resolve, reject) => {
        const isHeads = Math.random() > 0.5;
        if (isHeads) {
            resolve("You win!")
        }else {
            reject("You lose!")
        }
    })
}
flipCoin()
.then((message) => {
    console.log(message);
})
.catch((error) => {
    console.log(error)
});




const fetchAdviceid = (id) => {
    fetch(`https://api.adviceslip.com/advice/${id}`)
    .then((response) => response.json())
    .then((data) => {
        console.log(data.slip.advice);
    })
}
fetchAdviceid(2);*/




// Webpage

const output = document.getElementById("output");
const coinBtn = document.getElementById("coinBtn");
const adviceBtn = document.getElementById("adviceBtn");
const adviceInput = document.getElementById("adviceInput");

// PROMISE: Flip Coin
const flipCoin = () => {
  return new Promise((resolve, reject) => {
    const isHeads = Math.random() > 0.5;
    if (isHeads) resolve("You win!");
    else reject("You lose!");
  });
};

// EVENT: Flip Coin Button
coinBtn.addEventListener("click", () => {
  flipCoin()
    .then(msg => output.textContent = msg)
    .catch(err => output.textContent = err);
});

// FETCH: Advice by ID
const fetchAdviceid = (id) => {
  fetch(`https://api.adviceslip.com/advice/${id}`)
    .then(res => res.json())
    .then(data => {
      output.textContent = data.slip.advice;
    })
    .catch(() => {
      output.textContent = "Could not fetch advice.";
    });
};

// EVENT: Advice Button
adviceBtn.addEventListener("click", () => {
  const id = adviceInput.value;
  if (!id) {
    output.textContent = "Please enter an ID.";
    return;
  }
  fetchAdviceid(id);
});





