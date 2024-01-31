const stringInput = document.getElementById("text-input");
const button = document.getElementById("check-btn");
const resultText = document.getElementById("result");

button.addEventListener("click", () => {
  if (stringInput.value === "") {
    alert("Please input a value");
  } else {
    let cleanString = stringInput.value
      .replace(/[^A-Za-z0-9]/g, "")
      .toLowerCase();
    console.log(cleanString);
    //reversing the input string
    let reverseString = cleanString.split("").reverse().join("");
    console.log(reverseString);
    if (cleanString !== reverseString) {
      return (resultText.innerText = `${stringInput.value} is not a palindrome`);
    }
    return (resultText.innerText = `${stringInput.value} is a palindrome`);
  }
});

stringInput.addEventListener("keyup", () => {
  cleanString = stringInput.value;
  if (cleanString) {
    return button.classList.add("active");
  }
  button.classList.remove("active");
});
