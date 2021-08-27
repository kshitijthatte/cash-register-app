const billAmount = document.querySelector("#bill-amount");
const cashGiven = document.querySelector("#cash-given");
const checkButton = document.querySelector("#check");
const errorMessage = document.querySelector("#error-message");
const noOfNotes = document.querySelectorAll(".no-of-notes");

const availableNotes = [2000, 500, 100, 20, 10, 5, 1];

const showMessage = (message) => {
  errorMessage.style.display = "block";
  errorMessage.innerText = message;
};

checkButton.addEventListener("click", () => {
  if (billAmount.value > 0) {
    if (Number(cashGiven.value) >= Number(billAmount.value)) {
      errorMessage.style.display = "none";
      const returnAmount = cashGiven.value - billAmount.value;
      calculateChange(returnAmount);
    } else {
      showMessage("Do you wanna wash plates?");
    }
  } else {
    showMessage("Invalid Bill Amount");
  }
});

const calculateChange = (returnAmount) => {
  for (let i = 0; i <= availableNotes.length; i++) {
    const numberOfNotes = Math.trunc(returnAmount / availableNotes[i]);
    returnAmount %= availableNotes[i];
    noOfNotes[i].innerText = numberOfNotes;
  }
};
