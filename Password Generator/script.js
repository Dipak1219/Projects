let passBox = document.getElementById('passBox');
let slider = document.getElementById('slider');
let sliderValue = document.getElementById('sliderValue');
let lowerCase = document.getElementById('lowerCase');
let upperCase = document.getElementById('upperCase');
let numbers = document.getElementById('numbers');
let symbols = document.getElementById('symbols');
let btn = document.getElementById('btn');
let icon = document.getElementById('icon');

sliderValue.textContent = slider.value;

slider.addEventListener("input" , () => {
    sliderValue.textContent = slider.value;    
});

btn.addEventListener("click", () => {
    passBox.value = pasaswordGenerator();
});

let lowerChars = "abcdefghijklmnopqrstuvwxyz";
let upperChars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
let allNumbers = "0123456789";
let allSymbols = "~!@#$%^&*"; 

const pasaswordGenerator = () => {
    let password = "";
    let allChars = "";

    allChars += lowerCase.checked ? lowerChars : "";
    allChars += upperCase.checked ? upperChars : "";
    allChars += numbers.checked ? allNumbers : "";
    allChars += symbols.checked ? allSymbols : "";

    let i = 1;
    while(i <= slider.value) {
        password += allChars.charAt(Math.floor(Math.random() * allChars.length));
        i++;
    }
    console.log(password);
    
    return password;
}

icon.addEventListener("click", () => {
     if (passBox.value.length > 0) {
    navigator.clipboard.writeText(passBox.value);
    icon.innerText = "✓";
    icon.title = "password copied!";
  }

  setTimeout(() => {
    icon.innerText = "content_copy";
    icon.title = "";
  }, 1500);
})
