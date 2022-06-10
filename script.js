const totalBillInput = document.getElementById('totalBill');
const tipButtons = document.querySelectorAll('.tip-btns');
const customTipInput = document.getElementById('customTip');
const totalPersonInput = document.getElementById('totalPerson');
const noPerson = document.querySelector('.no-person');
const results = document.querySelectorAll('.result');
const resetButton = document.querySelector('.reset-btn');

//set up "" variable value when refreshed
totalBillInput.value = "";
customTipInput.value = "";
totalPersonInput.value = 1;

//define and setting changing variable 
let totalBillValue = 0,
    customTipValue = 0;

//add eventlistener and function
totalBillInput.addEventListener('input',billInput);
tipButtons.forEach(tipButton =>{
    tipButton.addEventListener('click', tipBtn);
});
customTipInput.addEventListener('input',tipInput);
totalPersonInput.addEventListener('input',personInput);
resetButton.addEventListener('input', resetBtn);



